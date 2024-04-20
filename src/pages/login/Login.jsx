import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUserAuth } from 'shared/store/slices/authSlice';

export function Login() {
  const dispatch = useDispatch();

  const handleLogin = async (value) => {
    try {
      // const { is_authenticated, access_token } = await loginUser(value);

      // if(is_authenticated) {
      //   localStorage.setItem('token', access_token);
      // }

      dispatch(loginUserAuth(value));
    } catch (error) {
      console.log('error ::', error);
    }
  };

  return (
    <main>
      <div className='login-box'>
        <h2 style={{ marginBottom: '24px' }}>Log in to Exclusive</h2>
        <p style={{ marginBottom: '48px' }}>Enter your details below</p>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <div className='input-controls'>
                <input
                  placeholder='Email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type='password'
                  placeholder='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className='login-btn-container'>
                <button type='submit' onClick={handleSubmit}>
                  Log In
                </button>
                <p>Forget Password?</p>
              </div>
            </>
          )}
        </Formik>
      </div>
    </main>
  );
}
