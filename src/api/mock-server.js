import { createServer } from "miragejs"
const INITIAL_COUNTER = 0;

createServer({
  routes() {
    this.namespace = "api"
    this.get('/counter', () => {
        return {counter: INITIAL_COUNTER}
    })

    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      }
    })
  },
})