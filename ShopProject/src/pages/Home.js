import React from 'react';
import { Items, Categories, Sort, MyLoader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { itemsThunkAC } from '../../redux/fetchThunk';
import { setSortBy, setCategory } from '../../AC/filtersAC';
import * as firebase from 'firebase';

const categoriesArr = ['Кольца', 'Цепочки', 'Серьги', 'Браслеты', 'Кулоны'];
const sortArr = [
  { name: 'популярности', type: 'id' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'name' },
];

function Home() {
  let getItems = [];
  let sortItems = [];
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  React.useEffect(() => dispatch(itemsThunkAC(dispatch, sortBy, category)), [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const itemsLoadingArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  if (items.data) {
    !Array.isArray(items.data)
      ? Object.keys(items.data).map((obj, index) => getItems.push(items.data[obj]))
      : (getItems = items.data);

    if (sortBy === 'price') {
      sortItems = getItems.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    if (sortBy === 'name') {
      sortItems = getItems.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (sortBy === 'id') {
      sortItems = getItems.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activCategory={category}
          onClickItem={onSelectCategory}
          categories={categoriesArr}
        />
        <Sort activeSortType={sortBy} items={sortArr} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все украшения</h2>
      <div className="content__items">
        {items.status <= 1 && itemsLoadingArray.map((index) => <MyLoader key={index} />)}
        {items.status === 2 && itemsLoadingArray.map((index) => <MyLoader key={index} />)}
        {items.status === 3 && sortItems.map((obj, index) => <Items key={index} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
