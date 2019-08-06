import {NEW_LAPTOP ,ALLLAPTOPS ,DELETE_LAPTOP,SEARCH_LAPTOP ,EDIT_LAPTOP} from "../actions/types";
const initialState ={
    laptop:{},
    alllaptops:[] ,
    deletelaptop:{}, 
    editlaptop:{},
    searchlaptops:{} 


}

export default function(state = initialState, action) {


    switch (action.type) {
        
            case NEW_LAPTOP:
                return{
                        ...state,
                        
                        laptop:action.payload
                      }
            case ALLLAPTOPS:
                return{
                        ...state,
                        
                        alllaptops:action.payload
                      }
                      
           case DELETE_LAPTOP:
                 return{
                       ...state,
                                
                        deletelaptop:action.payload
                              }
           case EDIT_LAPTOP:
                        return{
                      ...state,
                          
                         editlaptop:action.payload
                        }
           case SEARCH_LAPTOP:
                 return{
                        ...state,
                                  
                         searchlaptops:action.payload
                         }
                              
           
                default:
                        return state;
            
    }
}