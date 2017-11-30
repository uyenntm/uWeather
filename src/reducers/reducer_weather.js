import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    console.log("State: ",state);
    //console.log("State concat:",[action.payload.data, ...state]);
    console.log("Action received", action);
  switch(action.type){
      case FETCH_WEATHER:
       { 
        console.log(state.concat([action.payload.data]));
        return [action.payload.data, ...state];

       }
       

  }
    return state;
}