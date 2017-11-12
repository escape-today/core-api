import bodyParser from "body-parser"
import SkyScannerProvider from "../providers/SkyScannerProvider"
// import multer from "multer"

function AllTheThingsRoute(app) {
    // Body Parser
    app.use(bodyParser.json())
    // Multer
    // let upload = multer()
    // Get all delegates
    app.get("/shit", function (req, res) {
        let query = req.query
        if(!query.from || !query.to) {
            res.status(400).json({
                err: true,
                msg: "Missing parameters. Expecting to and from"
            })
        } else {
            new SkyScannerProvider().getFlight(query.from, query.to).then( (data) => {
                res.json({
                    err: false,
                    msg: new SkyScannerProvider().reMapQuotes(data)
                })
            }).catch( (err) => {
                res.status(500).json({
                    err: true,
                    msg: err
                })
            })
        }
    })
}

export default AllTheThingsRoute