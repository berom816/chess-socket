import { CHANGE_TURN, EMITTED_NEW_TURN } from '../actions';

export default function(state = 'white', action){
  switch(action.type){
    case CHANGE_TURN:
      return state === 'white' ? 'black' : 'white';
    case EMITTED_NEW_TURN:
      // console.log(state);
      return state === 'white' ? 'black' : 'white';
    default:
      return state;
  }
}