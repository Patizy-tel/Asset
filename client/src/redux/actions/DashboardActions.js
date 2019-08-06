
import {GET_ERRORS,TOTAL_DESKTOPS ,TOTAL_LAPTOPS ,LAPTOP_REGION ,DESKTOP_REGION} from "./types";
import axios from 'axios'




export const totalDesktops = () => dispatch=>{

    axios.get("/dashboard/totaldesktops")
         .then(resp=>{
           dispatch({
           type:TOTAL_DESKTOPS,
           payload:resp.data
         })}).catch(err=>{
            dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert('trouble getting data ,please refresh')
            })
 
          })

  }

  

export const totalLaptops = () => dispatch=>{

    axios.get("/dashboard/totallaptops")
         .then(resp=>{
           dispatch({
           type:TOTAL_LAPTOPS,
           payload:resp.data
         })}).catch(err=>{
            dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert('trouble getting data ,please refresh')
            })
 
          })

  }
  export const laptopRegion = () => dispatch=>{

    axios.get("/dashboard/laptopregion")
         .then(resp=>{
           dispatch({
          type:LAPTOP_REGION,
           payload:resp.data
         })}).catch(err=>{
            dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert('trouble getting data ,please refresh')
            })
 
          })

  }

  export const desktopRegion = () => dispatch=>{

    axios.get("/dashboard/desktopregion")
         .then(resp=>{
           dispatch({
           type:DESKTOP_REGION,
           payload:resp.data
         })}).catch(err=>{
            dispatch({
              type:GET_ERRORS,
              payload:err,
              msg:alert('trouble getting data ,please refresh')
            })
 
          })

  }