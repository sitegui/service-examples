'use strict'

let amqplib = require('amqplib')

async function main() {
    await sleep(5e3)
    let conn = await amqplib.connect('amqp://rabbitmq')
    let channel = await conn.createChannel()
    await channel.assertExchange('my_exchange', 'direct')
    await channel.assertQueue('my_queue')
    await channel.bindQueue('my_queue', 'my_exchange', '')
    
    if (process.env.ROLE === 'publisher') {
        while (true) {
            console.log('Will publish')
            channel.publish('my_exchange', '', Buffer.from(String(Math.random())))
            await sleep(1e3)
        }
    } else {

        channel.consume('my_queue', msg => {
            console.log('Got message', msg.content.toString())
        })
    }
}

main().catch(err => {
    console.error(err)
    throw err
})


async function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t))
}