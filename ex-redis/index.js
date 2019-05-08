'use strict'

let redis = require('redis'),
    client = redis.createClient('redis://redis:6379')

if (process.env.ROLE === 'set') {
    console.log('Set done')
    client.lpush('key', 'value', () => {
        client.quit()
    })
} else {
    client.blpop('key', 0, (err, [key, value]) => {
        console.log('Get done')
        console.log(value)
        client.quit()
    })
}