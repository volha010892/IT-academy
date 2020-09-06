import isoFetch from 'isomorphic-fetch';
import { itemsLoadingAC, itemsErrorAC, itemsSetAC } from '../AC/itemsAC';
import * as firebase from 'firebase';
let orders = [];
function itemsThunkAC(dispatch, sortBy, category) {
  const df = firebase.database().ref();

  return function () {
    dispatch(itemsLoadingAC());
    isoFetch('https://ishop-57739.firebaseio.com/.json')
      .then((response) => {
        if (!response.ok) {
          let Err = new Error('fetch error ' + response.status);
          Err.userMessage = 'Ошибка связи';
          throw Err;
        } else {
          if (category != null) {
            df.orderByChild('category')
              .equalTo(category)
              .once('value', function (data) {
                for (var z in data.val()) {
                  orders.push(data.val()[z]);
                }
              });
          } else {
            return response.json();
          }
          if (sortBy === 'name') {
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
          }
          return orders;
          /* df.orderByChild('category').equalTo(category).on('child_added', function (data) {
                y.push(data.val());
              });
              return y;*/
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(itemsSetAC(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(itemsErrorAC());
      });
  };
}

export { itemsThunkAC };
