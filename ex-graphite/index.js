'use strict'

let net = require('net'),
    me = require('os').hostname()

setTimeout(() => {
    let conn = net.createConnection(2003, 'graphite', err => {
        if (err) {
            throw err
        }
        setInterval(() => {
            let value = 100*Math.random()
            let time = Math.floor(Date.now() / 1e3)
            console.log('Send metric')
            conn.write(`my_metric.${me} ${value} ${time}\n`)
        }, 1100)
    })
}, 5e3)