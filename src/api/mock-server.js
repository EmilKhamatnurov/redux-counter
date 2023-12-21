import { Response, createServer } from "miragejs"
const INITIAL_COUNTER = 0;

createServer({
  routes() {
    this.namespace = "api"
    this.get('/counter', () => {
        // return new Response(500);
        return {counter: INITIAL_COUNTER}
    })

  },
})