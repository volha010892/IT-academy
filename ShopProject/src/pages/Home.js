import React from 'react';
import { Items, Categories, Sort } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { itemsThunkAC } from '../../redux/fetchThunk';

function Home() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(itemsThunkAC(dispatch)), []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={['Кольца', 'Серьги', 'Кулоны', 'Браслеты', 'Цепочки']} />
        <Sort items={['популярности', 'цене', 'алфавит']} />
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
