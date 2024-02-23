const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base')
const { Resource } = require('@opentelemetry/resources')
const { NodeSDK } = require('@opentelemetry/sdk-node')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node')

const exporter = new OTLPTraceExporter({
  timeoutMillis: 2000,
  url: process.env.OTEL_URL,
  headers: {
   Authorization: process.env.OTEL_TOKEN
  },
})

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'danube-api',
    'cx.application.name': 'danube-api',
    'cx.subsystem.name': 'express',
  }),
  traceExporter: exporter,
  spanProcessor: new BatchSpanProcessor(exporter),
  instrumentations: [getNodeAutoInstrumentations({
    '@opentelemetry/instrumentation-hapi': {
      enabled: false,
    },
    '@opentelemetry/instrumentation-fs': {
      enabled: false,
    },
    '@opentelemetry/instrumentation-net': {
      enabled: false,
    },
    '@opentelemetry/instrumentation-dns': {
      enabled: false,
    },
    '@opentelemetry/instrumentation-http': {
      enabled: true,
    },
  })],
})
sdk.start()

process.on("SIGTERM", () => {
  sdk
      .shutdown()
      .then(
          () => console.log("SDK shut down successfully"),
          (err) => console.log("Error shutting down SDK", err)
      )
      .finally(() => process.exit(0));
});
