import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('get-books-api-check', {
  name: 'GET /books',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://danube-web.shop/api/books',
    method: 'GET',
    headers: [
      {
        key: 'Accept',
        value: 'application/json'
      }
    ],
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  }
})
