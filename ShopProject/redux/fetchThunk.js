import isoFetch from 'isomorphic-fetch';
import { itemsLoadingAC, itemsErrorAC, itemsSetAC } from '../AC/itemsAC';
import * as firebase from 'firebase';

function itemsThunkAC(dispatch, sortBy, category) {
  const df = firebase.database().ref();

  return function () {
    dispatch(itemsLoadingAC());
    isoFetch(`https://ishop-57739.firebaseio.com/.json?${category !== null ?`orderBy="category"&equalTo=` + category : ''}`)
      .then((response) => {
        if (!response.ok) {
          let Err = new Error('fetch error ' + response.status);
          Err.userMessage = 'Ошибка связи';
          throw Err;
        } else {
          return response.json();
          /*if (sortBy === 'name') {
            orders = orders.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            });
          }
          if (sortBy === 'price') {
            orders = orders.sort(function (a, b) {
              if (a.price < b.price) {
                return -1;
              }
              if (a.price > b.price) {
                return 1;
              }
              return 0;
            });
          }*/
        }
      })
      .then((data) => {
        dispatch(itemsSetAC(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(itemsErrorAC());
      });
  };
}

export { itemsThunkAC };
