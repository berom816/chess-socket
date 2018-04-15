import { CHANGE_TURN } from '../actions';

export default function(state = 'white', action){
  switch(action.type){
    case CHANGE_TURN:
      if(state === 'white'){
        return 'black';
      }
      return 'white';
    default:
      return state;
  }
}