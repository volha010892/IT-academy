﻿import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Header, Items, Categories, Sort } from './components';
import combinedReducer from '../redux/reducers.js';
import './MainPage.css';

let store = createStore(combinedReducer, applyMiddleware(thunk));

class MainPage extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <div className="content__top">
                  <Categories
                    onClickItem={(name) => console.log(name)}
                    categories={
                      this.props.categories /*['Кольца','Серьги','Кулоны','Браслеты','Цепочки']*/
                    }
                  />
                  <Sort items={['популярности','цене','алфавит']}/>
                </div>
                <h2 className="content__title">Все украшения</h2>
                <div className="content__items">
                  <Items />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default MainPage;
