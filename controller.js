let collection = require('../models/dog');

const postDog = (req,res) => {
    let dog = req.body;
    collection.postDog(dog, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllDogs = (req,res) => {
    collection.getAllDogs((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteDog = (req,res) => {
    let dog = req.body;
    collection.deleteOne(dog, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postDog,getAllDogs}