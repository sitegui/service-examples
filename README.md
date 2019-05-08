# Service examples

This repo has some examples of basic usage of Redis, RabbitMQ, Graphite and Grafana

# Redis

docker run --name redis -d redis
docker exec -it redis redis-cli

Concrete examples
- keys: SET, GET, DEL, INCR
- hash map: HGET, HSET, HGETALL, HDEL
- string
- list: \[L|R]PUSH, \[B](L|R)POP

Other structures
- geo index
- hyperloglog
- pub/sub
- set
- sorted set
- stream

`docker-compose up`

# RabbitMQ

- Exchange
- Queue
- ack

`docker-compose up --scale consumer=2`

# Graphite + Grafana

- Whisper
- Aggregator

`docker-compose up --scale node=3`