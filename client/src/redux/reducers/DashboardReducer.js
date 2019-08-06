import {TOTAL_DESKTOPS ,TOTAL_LAPTOPS ,DESKTOP_REGION ,LAPTOP_REGION} from "../actions/types";
const initialState ={
    
 totalDesk:{},
 totalLap:{},
 laptopregion:[],
 desktopregion:[]


}

export default function(state = initialState, action) {


    switch (action.type) {

        case TOTAL_DESKTOPS:
            return{
                    ...state,
                    
                    totalDesk:action.payload
                  }
        case TOTAL_LAPTOPS:
          return{
                  ...state,
                  
                  totalLap:action.payload
                }
            case DESKTOP_REGION:
      return{
              ...state,
              
              desktopregion:action.payload
            }
            case LAPTOP_REGION:
      return{
              ...state,
              
              laptopregion:action.payload
            }
         default: return state;

    }



}