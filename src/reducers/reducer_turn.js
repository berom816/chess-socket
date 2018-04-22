import { CHANGE_TURN } from '../actions';

export default function(state = 'white', action){
  switch(action.type){
    case CHANGE_TURN:
      return state === 'white' ? 'black' : 'white';
    default:
      return state;
  }
}