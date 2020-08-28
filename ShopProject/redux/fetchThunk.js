import isoFetch from 'isomorphic-fetch';
import { itemsLoadingAC, itemsErrorAC, itemsSetAC } from '../AC/itemsAC';

function itemsThunkAC(dispatch) {
    
  // Как и любой action creator, countriesThunkAC должен вернуть action,
  // только action будет не хэш, а ФУНКЦИЯ.
  // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
  // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш,
  // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
  return function () {
    dispatch(itemsLoadingAC());
    isoFetch('https://ishop-57739.firebaseio.com/.json')
      .then((response) => {
        // response - HTTP-ответ
        if (!response.ok) {
          let Err = new Error('fetch error ' + response.status);
          Err.userMessage = 'Ошибка связи';
          throw Err;
        } else return response.json();
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

export {itemsThunkAC };
