const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://superuser:superuser%40123@cluster0.drgwfnh.mongodb.net/food?retryWrites=true&w=majority";
const mongoDB = async ()=>{
   await mongoose.connect(mongoURI,{useNewUrlParser:true}, async(err,data)=>{
        if(err)
         console.log(err);
        else{
            console.log("connected")
            const connection = mongoose.connection;
            const collection  = await connection.db.collection("sample");
            collection.find({}).toArray( async function(err, data){
              const foodCategory = await connection.db.collection("category");
              foodCategory.find({}).toArray( async function(err, catdata){
                if(err) {console.log(err)}
                else {global.food_items=data;
                  global.foodCategory=catdata;
                }
              })
             // if(err) { console.log(err);}
             // else
              //  {
                 // it will print your collection data
                //   global.food_items = data;
                   
                //}

            });
    }
        
    })
}

module.exports = mongoDB;