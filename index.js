const authUser = require("./api/auth.js");
const {
    URL,
    API_KEY,
    BASE_REQUEST_ID,
    COLLECTION_STATUS
} = require("./const/api.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

/*
app.post('url path here', async (requestObject, responseObject) => {
    try{
        ####put code for the api here

        res.status(appropriate code).json(object to be returned if necessary)
    }except(e){
        console.log(e)
        ##handle exceptions
        res.status(503).json(object to be returned)
    }
})

http response codes https://www.restapitutorial.com/httpstatuscodes.html
http methods https://restfulapi.net/http-methods/
*/

app.post("/api/v1/auth", async (req, res) => {
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    res.send(ip);
    // try {
    //     let ip = req.headers["x-forwarded-for"];
    //     if (ip && req.body.targetUrl) {
    //         let authData = await authUser(URL, {
    //             RequestId:
    //                 BASE_REQUEST_ID +
    //                 Math.random()
    //                     .toString(36)
    //                     .substr(0, 32),
    //             ApiClientId: API_KEY,
    //             FinalTargetUrl: req.body.targetUrl,
    //             DeviceIp: ip,
    //             ConsentStatus: COLLECTION_STATUS
    //         });
    //         if (authData.status !== 0) {
    //             res.status(401).send(authData);
    //         } else {
    //             res.status(302).send(authData);
    //         }
    //     } else {
    //         res.status(401).json(res);
    //     }
    // } catch (e) {
    //     console.log(e);
    //     let response = { message: "failed", error: e };
    //     res.status(503).json(response);
    // }
});

// app.get("/api/v1/ip", async (req, res) => {
//     var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//     res.send(ip);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started, listening on ${PORT}`));
