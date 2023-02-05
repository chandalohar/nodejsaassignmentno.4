let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="student";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

        let db = client.db(dbName);    // it connect to database 

        // insert one record 

                // let std = {_id:1,sname:"Veeta",age:10,class:"5th std",marks:[{english:90},
                // {hindi:70},{maths:85},{science:75},{sst:80},{computer:85}]};
                // db.collection("Students").insertOne(std,(err1,result)=> {
                //     if(!err1){
                //             console.log(result)
                //     }else {
                //             console.log(err1)
                //     }
                //     client.close();
                // })

        // insert Many 
                let std1 = {_id:0,sname:"ajay",age:15,class:"10th std",marks:[{english:90},
                    {hindi:70},{maths:85},{science:75},{sst:80},{computer:85}]};

                let std2 = {_id:2,sname:"neeta",age:12,class:"7th std",marks:[{english:90},
                    {hindi:70},{maths:85},{science:75},{sst:80},{computer:85}]};

                let std3 = {_id:3,sname:"seeta",age:11,class:"6th std",marks:[{english:90},
                        {hindi:70},{maths:85},{science:75},{sst:80},{computer:85}]};
                db.collection("Students").insertMany([std1,std2,std3],(err1,result)=> {
                    if(!err1){
                            console.log(result)
                    }else {
                            console.log(err1)
                    }
                    client.close();
                })
        
        //
    }else {
        console.log("Error generated "+err);
    }
})


