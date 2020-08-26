import React from 'react'
import {Items, Categories, Sort } from '../components';

function Home() {
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(name) => console.log(name)}
            categories={['Кольца', 'Серьги', 'Кулоны', 'Браслеты', 'Цепочки']}
          />
          <Sort items={['популярности', 'цене', 'алфавит']} />
        </div>
        <h2 className="content__title">Все украшения</h2>
        <div className="content__items">
          <Items />
        </div>
      </div>
    )
}

export default Home
