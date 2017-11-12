import bodyParser from "body-parser"
import PopulationProvider from "../providers/PopulationProvider"

function PopulationRoutes(app) {
    // Body Parser
    app.use(bodyParser.json())
    // Multer
    // let upload = multer()
    // Get all delegates
    app.get("/countries", (req, res) => {
        new PopulationProvider().zombieStatusAllCountres().catch( (err) => { console.error(err) })
        new PopulationProvider().getCountries()
            .then( (countries) => {
                res
                    .status(200)
                    .json({
                        err: false,
                        msg: countries
                    })
            })
            .catch( (err) => {
                res
                    .status(500)
                    .json({
                        err: true,
                        msg: err
                    })
            })
    })

    app.get("/countries/zombie_alert", (req, res) => {
        new PopulationProvider().zombieStatusAllCountres()
            .then( (countries) => {
                res
                    .status(200)
                    .json({
                        err: false,
                        msg: countries
                    })
            })
            .catch( (err) => {
                res
                    .status(500)
                    .json({
                        err: true,
                        msg: err
                    })
            })
    })

    app.get("/countries/populations", (req, res) => {
        new PopulationProvider().countriesWithPopulation()
            .then( (countries) => {
                res
                    .status(200)
                    .json({
                        err: false,
                        msg: countries
                    })
            })
            .catch( (err) => {
                console.error(err)
                res
                    .status(500)
                    .json({
                        err: true,
                        msg: err
                    })
            })
    })
}

export default PopulationRoutes