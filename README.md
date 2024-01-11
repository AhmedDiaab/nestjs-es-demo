# build and run with docker
`docker-compose up -d --build`

# stop application
`docker-compose down`


## Notes
`/dco/` directory contains
  - `docker-compose.yml` includes
    - `elasticsearch:8.8.0` 
    - `grafana:8.3.2`
  - `Dockerfile`


# Resources

[Data in: documents and indices | Elasticsearch Guide [8.11] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/documents-indices.html)

[Advanced NestJS techniques — Part 3 — Logging Elasticsearch queries | by Matthieu Balmes | ITNEXT](https://itnext.io/advanced-nestjs-techniques-part-3-logging-elasticsearch-queries-ae118a7a9d4c)

[ECS Logging with Winston | ECS Logging Node.js Reference | Elastic](https://www.elastic.co/guide/en/ecs-logging/nodejs/current/winston.html)
[Top 10 lessons learned from Dockerized Elasticsearch (github.com)](https://gist.github.com/dapangmao/143449d20125cabf1394ffb95ac4e43e)

[A beginner's guide to running Elasticsearch with Docker and Docker Compose (geshan.com.np)](https://geshan.com.np/blog/2023/06/elasticsearch-docker/)