import { Response, createServer } from "miragejs"
const INITIAL_COUNTER = 10;

createServer({
  routes() {
    this.namespace = "api"
    this.get('/counter', () => {
        // return new Response(500);
        return {counter: INITIAL_COUNTER}
    })

    this.post("/counter/save", (schema, request) => {
      const counter = JSON.parse(request.requestBody).counter
      console.log(counter);
      // return schema.reminders.create(attrs)
      return {
        status: 'ok'
      }
    })
  },
})