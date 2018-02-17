/**
 * Author- Manali Jain
 * @type {*|createApplication}
 */

var express = require('express');
var router = express.Router();
const axios = require("axios");
/* GET home page. */
router.get('/', function(req, res, next) {

    return axios.get('https://www.random.org/integers/?num=10&min=50&max=200&col=1&base=10&format=plain&rnd=new'
    )
        .then(function (response) {
            console.log(response);
           // return response
            var data = response.data.split("\n");

            res.render("bitmapImage.ejs",{x:data});
        })
        .catch(function (error) {
            console.log(error);
           // return error
        });
});

module.exports = router;


