const express  = require('express')
const router =  express.Router()
const Desktop =  require('../../models/Desktop')
const Laptop =  require('../../models/Laptop') ;
const verify =  require('./auth/Veryfy')


router.get('/totaldesktops',async (req,res)=>{

    console.log(req.headers)
    await Desktop.find()
           .countDocuments()  
           .then(resp=>{
               res.status(200).send({totalDesks:resp})
           })
           .catch(err=>{
               res.status(404).send({err:err.message})
           })
})


router.get('/totallaptops',verify,async (req,res)=>{
   await Laptop.find()
           .countDocuments()
           .then(resp=>{
               res.status(200).send({totalLaps:resp})
           })
           .catch(err=>{
               res.status(404).send({err:err.message})
           })
})



router.get('/desktopregion',verify ,async (req, res) =>{
   await Desktop.aggregate([
        {
            $group:{
                _id:"$region",
                desktopRegion:{$sum:1}
            }
        }
    ]).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(404).send(err.message)
    })
})

router.get('/laptopregion',verify ,async (req, res) =>{
   await Laptop.aggregate([
        {
            $group:{
                _id:"$region",
                laptopRegion:{$sum:1}
            }
        }
    ]).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(404).send(err.message)
    })
})

module.exports =  router