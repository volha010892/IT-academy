import React from 'react';
import { Items, Categories, Sort } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { itemsThunkAC } from '../../redux/fetchThunk';
import { setCategory } from '../../AC/filtersAC';

const categoriesArr = ['Кольца', 'Серьги', 'Кулоны', 'Браслеты', 'Цепочки'];
const sortArr = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  //state) => state.items);
  // const dispatch = useDispatch();
  // React.useEffect(() => dispatch(itemsThunkAC(dispatch)), []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} categories={categoriesArr} />
        <Sort items={sortArr} />
      </div>
      <h2 className="content__title">Все украшения</h2>
      <div className="content__items">
        {items.status <= 1 && <div>'загрузка...'</div>}
        {items.status === 2 && <div>'ошибка загрузки данных'</div>}
        {items.status === 3 && items.data.map((obj, index) => <Items key={index} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
