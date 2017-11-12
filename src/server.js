import environment from "node-env-file"
import express from "express"

// Routes
import baseRoute from "./routes/BaseRoute"
import allTheThingsRoute from "./routes/AllTheThingsRoute"
import populationRoutes from "./routes/PopulationRoutes"
import weightsRoutes from "./routes/WeightsRoute"

let app = express()
let env = environment(".env")

baseRoute(app)
allTheThingsRoute(app)
populationRoutes(app)
weightsRoutes(app)

app.listen(env.PORT, env.HOST)
console.log("RESTful API server started on: " + env.HOST + ":" + env.PORT)

if (process.argv.slice(2)[0] == "test") {
    process.exit(0)
}

