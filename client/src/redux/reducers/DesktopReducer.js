import {NEW_DESKTOP ,ALLDESKTOPS,DELETE_DESKTOP,EDIT_DESKTOP} from "../actions/types";
const initialState ={
    desktop:{},
    alldesks:[],
    desktops:{},
    editdesktop:{}


}

export default function(state = initialState, action) {


    switch (action.type) {
        
            case NEW_DESKTOP:
                return{
                        ...state,
                        
                        desktop:action.payload
                      }
                      case ALLDESKTOPS:
                return{
                        ...state,
                        alldesks:action.payload
                      }
                      case DELETE_DESKTOP:
                return{
                        ...state,
                        desktops:action.payload
                      }
                case EDIT_DESKTOP:
                        return{
                                ...state,
                                editdesktop:action.payload
                              }
                   
           
           
                default:
                        return state;
            
    }
}