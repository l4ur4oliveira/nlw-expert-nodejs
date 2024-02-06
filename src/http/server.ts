import fastify from "fastify"

const app = fastify()

app.post("/polls", (request) => {
  console.log(request.body)

  return "Hello!"
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running...")
})
