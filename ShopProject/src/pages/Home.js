import React from 'react';
import { Items, Categories, Sort, MyLoader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { itemsThunkAC } from '../../redux/fetchThunk';
import { setSortBy, setCategory} from '../../AC/filtersAC';
import * as firebase from 'firebase';

const categoriesArr = ['Кольца','Цепочки', 'Серьги', 'Браслеты', 'Кулоны'];
const sortArr = [
  { name: 'популярности', type: 'id' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items);
  const {sortBy, category} = useSelector(({ filters }) => filters);
console.log(items)


  React.useEffect(() => dispatch(itemsThunkAC(dispatch, sortBy, category)), [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  
  const itemsLoadingArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activCategory={category}
          onClickItem={onSelectCategory}
          categories={categoriesArr}
        />
        <Sort 
          activeSortType={sortBy} 
          items={sortArr} 
          onClickSortType={onSelectSortType} 
        />
      </div>
      <h2 className="content__title">Все украшения</h2>
      <div className="content__items">
        {items.status <= 1 && itemsLoadingArray.map((index) => <MyLoader key={index} />)}
        {items.status === 2 && itemsLoadingArray.map((index) => <MyLoader key={index} />)}
        {items.status === 3 && items.data.map((obj, index) => <Items key={index} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
