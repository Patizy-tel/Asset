
import {GET_ERRORS,NEW_DESKTOP,ALLDESKTOPS,DELETE_DESKTOP ,EDIT_DESKTOP} from "./types";
import axios from 'axios'



  // add a new desktop
export const newDesktops = (desktopData) => dispatch => {
    axios
      .post("/desktops", desktopData)
      .then(resp=>{
          dispatch({
              type:NEW_DESKTOP,
              payload:resp.data,
              msg:alert("succcess")

          })
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
    }
      );
  };


  export const allDesks = () => dispatch=>{

    axios.get("/desktops")
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:ALLDESKTOPS,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  
  export const deleteDesktop  = (_id) =>dispatch=>{
    console.log('im called' + _id)
    axios.delete(`/desktops/${_id}`)
         .then(resp=>{
           dispatch({
             type:DELETE_DESKTOP,
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

  export const editDesktop  = (editData) =>dispatch=>{
     let _id = editData._id
    axios.post(`/desktops/${_id}` ,editData)
         .then(resp=>{
           dispatch({
             type:EDIT_DESKTOP,
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
