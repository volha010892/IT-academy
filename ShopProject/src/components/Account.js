import React from 'react';
import { useForm } from 'react-hook-form';
function Account() {
  const { register, errors, handleSubmit } = useForm();
  const onChange = (data) => console.log(data);
  return (
    <div>
      <div className="sing_in">
        <h2>Sing in</h2>
      </div>
      <form onSubmit={handleSubmit(onChange)}>
        <div className=" container_order sing_in_big">
          <div className="sing_in_form">
            <div>
              <label forhtml="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
                ref={register({
                  required: 'invalid email address',
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
                  required:
                    'at least 1 lowercase and 1 uppercase alphabetical, 1 numeric, 1 special characters, must be 6 characters or longer',
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
                    message:
                      'The string must contain at least 1 lowercase and 1 uppercase alphabetical, 1 numeric, 1 special characters, must be 6 characters or longer',
                  },
                })}
              />
              <div className="error">{errors.password && errors.password.message}</div>
            </div>
          </div>
          <button type="submit" className="button button--black">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
export default Account;
