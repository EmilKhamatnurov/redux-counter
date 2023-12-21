import { Response, createServer } from "miragejs"
const INITIAL_COUNTER = 10;

createServer({
  routes() {
    this.namespace = "api"
    this.get('/counter', () => {
        // return new Response(500);
        return {counter: INITIAL_COUNTER}
    })

    this.post("/api/reminders", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)

      return schema.reminders.create(attrs)
    })
  },
})