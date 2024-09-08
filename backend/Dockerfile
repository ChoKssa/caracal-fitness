FROM golang:1.22.4

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

RUN go mod tidy

CMD ["go", "run", "."]
