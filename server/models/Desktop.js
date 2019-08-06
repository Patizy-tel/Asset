const mongoose = require('../db/db')

const DesktopSchema = new mongoose.Schema({
name:{
    type:String
} ,
department:{
    type:String
} ,
region:{
    type:String
},
deviceName:{
    type:String
},
deviceType:{
    type:String

},
monitorSerial:{
    type:String,
    unique:true
},
keyboardSerial:{
    type:String,
    unique:true
},
deviceSerial:{
    type:String,
    unique:true
},
printerName:{
    type:String
},
printerSerial:{
    type:String
}


});


module.exports = mongoose.model('Desktop', DesktopSchema);
