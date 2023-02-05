let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 
var dbName  ="student";
let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")
        let db = client.db(dbName);    // it connect to database 

        let cursor = db.collection("Students").find({});
       
        cursor.forEach(doc=>{
                //console.log(doc)  
                console.log("Id is  "+doc._id+"  Name  "+doc.sname+" class  "+doc.class+"  age "+doc.age)
                
        }).finally(()=> {           // close the resource properly
            client.close();
        })
        //console.log(cursor)

        
    }else {
        console.log("Error generated "+err);
    }
})


