import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoCards from '../img/cards.png';
function Order() {
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const itemsCart = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  return (
    <div className="row">
      <div className="col-75">
        <div className="container_order">
          <form>
            <div className="row">
              <div className="col-50">
                <h3>Платежный адрес</h3>
                <label>Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                <label>Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" />
                <label>Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                <label>City</label>
                <input type="text" id="city" name="city" placeholder="New York" />

                <div className="row">
                  <div className="col-50">
                    <label>State</label>
                    <input type="text" id="state" name="state" placeholder="NY" />
                  </div>
                  <div className="col-50">
                    <label>Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001" />
                  </div>
                </div>
              </div>
              <div className="col-50">
                <h3>Payment</h3>
                <label>Accepted Cards</label>
                <div className="icon-container">
                <img src={logoCards} alt="logo" />
                </div>
                <label>Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John Еще Doe" />
                <label>Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                <label>Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                <div className="row">
                  <div className="col-50">
                    <label>Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" />
                  </div>
                  <div className="col-50">
                    <label>CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/cart" className="button button--outline button--add go-back-btn">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
                <span>Вернуться назад</span>
              </Link>
              <Link to="/order" className="button pay-btn">
                <span>Оформить заказ</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="col-25">
        <div className="container_order">
          <h4>
            Cart
            <span className="price">
              <b>{totalCount}</b>
            </span>
          </h4>
          {itemsCart.map((obj) => (
            <p key={obj.id}>
              {obj.name}
              <span className="price">
                <b>
                  {obj.price}X{items[obj.id].items.length}
                </b>
              </span>
            </p>
          ))}
          <hr />
          <p>
            Всего{' '}
            <span className="price">
              <b>{totalPrice}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
