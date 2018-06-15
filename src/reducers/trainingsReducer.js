import initialState from './initialState';
import {FETCH_TRAININGS, RECEIVE_TRAININGS} from '../actions/actionTypes';

export default function trainingsReducer(state = initialState.trainings, action) {
  let newState;
  switch (action.type) {
    case FETCH_TRAININGS:
      console.log('FETCH_TRAININGS Action')
      return action;
    case RECEIVE_TRAININGS:
      newState = action.trainings;
      console.log('RECEIVE_TRAININGS Action')
      return newState;
    default:
      return state;
  }
}