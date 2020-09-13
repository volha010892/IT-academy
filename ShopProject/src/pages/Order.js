import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoCards from '../img/cards.png';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

function Order() {
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const itemsCart = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const { register, errors, handleSubmit } = useForm();
  const onChange = (data) => console.log(data);
  return (
    <div>
      <div className="sing_in">
        <h2>Sing in</h2>
      </div>
      <div className=" container_order sing_in_big">
        <div className='sing_in_form'>
        <div >
          <label forhtml="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <div className="error">{errors.email && errors.email.message}</div>
        </div>
        <div>
          <label forhtml="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="gzdfh45653453rdf"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid password',
              },
            })}
          />
          <div className="error">{errors.passworx && errors.password.message}</div>
        </div>
        </div>
        <Button className="button button--black">Continue</Button>
      </div>
      <div className="sing_in">
        <h2>Or</h2>
      </div>
      <div className="row">
        <div className="col-75">
          <div className="container_order">
            <form onSubmit={handleSubmit(onChange)}>
              <div className="row">
                <div className="col-50">
                  <h3>Платежный адрес</h3>
                  <label forhtml="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'invalid first name',
                      },
                    })}
                  />
                  <div className="error">{errors.firstname && errors.firstname.message}</div>
                  <label forhtml="fname">Last Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="lastname"
                    placeholder="Doe"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'invalid last name',
                      },
                    })}
                  />
                  <div className="error">{errors.lastname && errors.lastname.message}</div>
                  <label forhtml="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                  />
                  <div className="error">{errors.email && errors.email.message}</div>
                  <label forhtml="adr">Address</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid address',
                      },
                    })}
                  />
                  <div className="error">{errors.address && errors.address.message}</div>
                  <label forhtml="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid city',
                      },
                    })}
                  />
                  <div className="error">{errors.city && errors.city.message}</div>
                  <div className="row">
                    <div className="col-50">
                      <label forhtml="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid state',
                          },
                        })}
                      />
                      <div className="error">{errors.state && errors.state.message}</div>
                    </div>
                    <div className="col-50">
                      <label forhtml="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid zip',
                          },
                        })}
                      />
                      <div className="error">{errors.zip && errors.zip.message}</div>
                    </div>
                  </div>
                </div>
                <div className="col-50">
                  <h3>Payment</h3>
                  <label forhtml="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <img src={logoCards} alt="logo" />
                  </div>
                  <label forhtml="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John Еще Doe"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid cardname',
                      },
                    })}
                  />
                  <div className="error">{errors.cardname && errors.cardname.message}</div>
                  <label forhtml="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid card number',
                      },
                    })}
                  />
                  <div className="error">{errors.cardnumber && errors.cardnumber.message}</div>
                  <label forhtml="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid Exp Month',
                      },
                    })}
                  />
                  <div className="error">{errors.expmonth && errors.expmonth.message}</div>
                  <div className="row">
                    <div className="col-50">
                      <label forhtml="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid Exp Year',
                          },
                        })}
                      />
                      <div className="error">{errors.expyear && errors.expyear.message}</div>
                    </div>
                    <div className="col-50">
                      <label forhtml="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid cvv',
                          },
                        })}
                      />
                      <div className="error">{errors.cvv && errors.cvv.message}</div>
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
              <button type="submit">Submit</button>
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
              Всего
              <span className="price">
                <b>{totalPrice}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
