import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveTrainings(json) {
  return {type: types.RECEIVE_TRAININGS, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    // return fetch(url(), {
    //   method: 'GET',
    //   mode: 'cors',
    //   credentials: 'include',
    //   headers: {
    //     'x-api-key': apiKey,
    //     'Accept': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(json => dispatch(receiveStuff(json)));
    dispatch(receiveTrainings([{id: 1, title: 'Adding Redux To React', blurb: 'File structure and common boilerplate to get you up and running.'}]))
  };
}