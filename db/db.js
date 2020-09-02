const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "paymaster";
const uri = "mongodb+srv://admin-01:paymaster-admin-01@clusterpaysmart.gd6v4.mongodb.net/paymaster?retryWrites=true&w=majority";
const mongoOptions = {useNewUrlParser: true};

const state ={
    db: null
}

const connect = (callback)=>{
    if(state.db){
        callback();
    }
    else{
        MongoClient.connect(uri,mongoOptions,{useUnifiedTopology: true},(err,client)=>{
            
            if(err){
                callback(err);
            }
            else{
                state.db = client.dbname;
                callback();
            }
        });
    }
}

const getPrimaryKey =(_id)=>{
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {connect, getPrimaryKey, getDB};