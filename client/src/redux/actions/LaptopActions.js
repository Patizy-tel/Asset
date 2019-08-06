
import {GET_ERRORS,NEW_LAPTOP ,ALLLAPTOPS, SEARCH_LAPTOP,DELETE_LAPTOP ,EDIT_LAPTOP} from "./types";
import axios from 'axios'



  // add a new laptop
export const newLaptops = (laptopData) => dispatch => {
    axios
      .post("/laptops", laptopData)
      .then(resp=>{
          dispatch({
              type:NEW_LAPTOP,
              payload:resp.data,
              msg:alert("succcess")

          })
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err,
          msg:alert("there was an  error")
        })
    }
      );
  };


  export const allLaptops = () => dispatch=>{

    axios.get("/laptops")
         .then(resp=>{
           dispatch({
           type:ALLLAPTOPS,
           payload:resp.data
         })})
         .catch(err=>{
           dispatch({
             type:GET_ERRORS,
             payload:err,
             msg:alert('trouble getting data ,please refresh')
           })

         })

  }


  export const deleteLaptop  = (_id) =>dispatch=>{
    console.log('im called' + _id)
    axios.delete(`/laptops/${_id}`)
         .then(resp=>{
           dispatch({
             type:DELETE_LAPTOP,
             payload:resp.data,
             msg:alert('DELETED SUCCESSFULLY')
           })
         })
         .catch(err=>{
           dispatch({
             type:GET_ERRORS,
             payload:err,
             msg:alert('could not delete the item')
           })
         })
        
  }

  export const editLaptop  = (editData) =>dispatch=>{
    let _id = editData._id
   axios.post(`/laptops/${_id}` ,editData)
        .then(resp=>{
          dispatch({
            type:EDIT_LAPTOP,
            payload:resp.data,
            msg:alert('EDIT SUCCESS')
          })
        })
        .catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('could not edit the item')
          })
        })
       
 }


   