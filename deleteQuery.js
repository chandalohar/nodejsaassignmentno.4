let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="student";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

// delete one record successfully.
                // let db = client.db(dbName);    // it connect to database 
                // db.collection("Students").deleteOne({_id:0},(err1,result)=> {
                //     if(!err1){
                //         if(result.deletedCount>0){
                //             console.log("Record deleted successfully")
                //         }else {
                //             console.log("Record not present")
                //         }
                //     }else {
                //         console.log(err1);
                //     }
                //     client.close();
                // })

  // delete many records
                        // let db = client.db(dbName);    // it connect to database 
                        // db.collection("Students").deleteMany({class:{$gt:"6th std"}},(err1,result)=> {
                        //     if(!err1){
                        //         if(result.deletedCount>0){
                        //             console.log("Record deleted successfully")
                        //         }else {
                        //             console.log("Record not present")
                        //         }
                        //     }else {
                        //         console.log(err1);
                        //     }
                        //     client.close();
                        // })
// delete many records based on conditions.                                        
                        let db = client.db(dbName);    // it connect to database 
                        db.collection("Students").deleteMany({$or:[{_id:1},{_id:3}]},(err1,result)=> {
                            if(!err1){
                                if(result.deletedCount>0){
                                    console.log("Record deleted successfully")
                                }else {
                                    console.log("Record not present")
                                }
                            }else {
                                console.log(err1);
                            }
                            client.close();
                        })
       //
    }else {
        console.log("Error generated "+err);
    }
})


