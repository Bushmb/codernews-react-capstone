var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const scrapedData = require('../models/scrapedData');

router.get('/', function(req, res, next)	{


    
	scrapedData.find({}, null, {sort: { date: -1 }}, function(err, scrapeddatas) {
        // console.log("HITTING HERE");
        // console.log('=============', Array.isArray(scrapeddatas))
        console.log("RUBY", scrapeddatas)
        if(err) {
           console.log('Error!!');
        } else {
            // console.log(scrapeddatas);
            const data = scrapeddatas.reduce(function(obj, story){
                const topic = story.topic
                
                if(!obj[topic]) {
                    obj[topic] = [story]
                }
                else {
                    obj[topic].push(story)
                }

                return obj
            }, {});

            // var sortedObj = {}

            // Object.keys(data).forEach(function(topic) {
            //     var 
            // })

            res.json(data);
        }
    });

});

module.exports = router;