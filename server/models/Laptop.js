const mongoose = require('../db/db')

const LaptopSchema = new mongoose.Schema({
name:{
    type:String ,
    required:true
} ,
department:{
    type:String ,
    required:true
} ,
region:{
    type:String
},
deviceName:{
    type:String ,
    required:true
},
deviceType:{
    type:String ,
    required:true

},
deviceSerial:{
    type:String,
    unique:true ,
    required:true
},
printerName:{
    type:String ,
    required:true
}
,
printerSerialNumber:{
    type:String ,
    required:true
} ,
date:{ 
    type:Date,
    default:Date.now
}


});


module.exports = mongoose.model('Laptop', LaptopSchema);
