import bodyParser from "body-parser"
// import multer from "multer"

function BaseRoute(app) {
    // Body Parser
    app.use(bodyParser.json())
    // Multer
    // let upload = multer()
    // Get all delegates
    app.get("/", function (req, res) {
        res.json({
            err: false,
            msg: "hello world"
        })
    })
}

export default BaseRoute