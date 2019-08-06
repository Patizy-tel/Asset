import { combineReducers } from "redux";
import authReducer from "./authReducer";
import desktopReducer from './DesktopReducer'
import laptopReducer from './LaptopReducer';
import DashboardReducer from  './DashboardReducer' ;
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  allDesks:desktopReducer,
  laptops:laptopReducer,
  dashboard:DashboardReducer

});
