const express = require('express');
const Desktop =  require('../../models/Desktop')
const verify =  require('./auth/Veryfy')
const router = express.Router()


router.get('/',verify,(req,res)=>{
    Desktop.find()
        .sort({date:-1})
        .then(resp=>{
            res.status(200).send(resp)
        })
        .catch(err=>{
            res.status(404).send({err:err.message})
        })
})

router.post('/', verify,(req,res)=>{
    new Desktop(req.body).save()
                        .then(resp=>{
                            res.status(200).send(resp)
                        })
                        .catch(err=>{
                            console.log(err)
                            res.status(404).send({err:err.message})
                        })
})

router.delete(`/:_id`,(req,res)=>{
    let id  =  req.params._id ;
    console.log('found the id' + id)
    Desktop.findByIdAndDelete(id)
           .then(resp=>{
               console.info(resp);
               res.status(200).send(resp)
           })
           .catch(err=>{
               console.log(err)
               res.status(400).send(err.message)
           })

})

router.post('/search',(req,res)=>{
    Desktop.findOne({name:req.body.name})
           .then(resp=>{

            if(resp ===null){
                res.status(204).send({msg:"name doesnt exist"})
            }else{
                console.log(resp)
                res.status(200).send(resp)

            }
              
           })
           .catch(err=>{
               res.send(err.message)
           })
});

router.post(`/:_id`,(req,res)=>{
    let id  =  req.params._id ;
    console.log('found the id' + id)
    Desktop.findByIdAndUpdate(id,req.body)
           .then(resp=>{
               console.info(resp);
               res.status(200).send(resp)
           })
           .catch(err=>{
               console.log(err)
               res.status(400).send(err.message)
           })

})



 



module.exports = router