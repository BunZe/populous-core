import mongoose from "mongoose";
import Data from "../models/data";

export default function (req, res, next){
    const aggregate = Data.aggregate([
        {"$sort": {"deviceID": 1, "timestamp": 1}},
        {"$group": {
            "_id": "$deviceID",
            "timestamp": {"$last": "$timestamp"},
            "value": {"$last": "$numProbed"}
        }}
    ]).exec((err, result) => {
        console.log(err);
        res.json(result)
    });
    
}