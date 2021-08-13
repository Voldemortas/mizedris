FROM alpine:3.14

RUN apk add bash
RUN apk add redis
ADD ./redis.conf /redis.conf

CMD ["redis-server", "/redis.conf"]
EXPOSE 6379
