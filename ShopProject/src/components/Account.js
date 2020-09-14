import React from 'react';
import { useForm } from 'react-hook-form';
import * as firebase from 'firebase';
function Account() {
  var db = firebase.database().ref('items');
  console.log(db);
  const { register, errors, handleSubmit } = useForm();
  const onChange = (data) => console.log(data);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hasAccount, setHasAccount] = React.useState(false);
  const handleChangeEmail = ({ target: { value, id } }) => {
    setEmail(value);
  };
  const handleChangePassword = ({ target: { value, id } }) => {
    setPassword(value);
  };
  const createAccount = () => {
    /*  firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));*/
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => setHasAccount(true))
      .catch((error) => console.log(error));
  };
  return (
    <div className="account__container ">
      {hasAccount ? (
        <div className="sing_in">
          <h2>Welcom, {}</h2>
        </div>
      ) : (
        <div >
          <form onSubmit={handleSubmit(onChange)}>
            <div className=" sing_in_big">
              <div className="sing_in_form">
                <div>
                  <label forhtml="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    ref={register({
                      required: 'invalid email address',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                    onChange={handleChangeEmail}
                  />
                  <div className="error">{errors.email && errors.email.message}</div>
                </div>
                <div>
                  <label forhtml="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    ref={register({
                      required:
                        'at least 1 lowercase and 1 uppercase alphabetical, 1 numeric, 1 special characters, must be 6 characters or longer',
                      pattern: {
                        value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
                        message:
                          'The string must contain at least 1 lowercase and 1 uppercase alphabetical, 1 numeric, 1 special characters, must be 6 characters or longer',
                      },
                    })}
                    onChange={handleChangePassword}
                  />
                  <div className="error">{errors.password && errors.password.message}</div>
                </div>
              </div>
              <button type="submit" onClick={createAccount} className="button">
                <b>Continue</b>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default Account;
