import bodyParser from "body-parser"
import weightsProvider from "../providers/WeightsProvider"

function WeightsRoute(app) {
    // Body Parser
    app.use(bodyParser.json())
    // Multer
    // let upload = multer()
    // Get all delegates

    app.get("/countries/weight", (req, res) => {
        let countries = new weightsProvider().all()
        if (countries.length) {
            res
                .status(200)
                .json({
                    err: false,
                    msg: countries
                })
        } else {
            res
                .status(500)
                .json({
                    err: true,
                    msg: "Unknown error occured"
                })
        }
    })

    app.get("/:country/weight", (req, res) => {
        let weight = new weightsProvider().country(req.params.country)
        if(weight) {
            res
                .status(200)
                .json({
                    err: false,
                    msg: weight
                })
        } else {
            res
                .status(400)
                .json({
                    err: true,
                    msg: "Inavlid country"
                })
        }
    })
}

export default WeightsRoute