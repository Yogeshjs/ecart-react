import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAuth, isLoading } from 'shared/store/slices/authSlice';
import ClipLoader from 'react-spinners/ClipLoader';

export function Login() {
  const dispatch = useDispatch();

  const isLoadingIndecator = useSelector(isLoading);

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
        <Formik
          initialValues={{ email: 'user1@gmail.com', password: '@123' }}
          onSubmit={handleLogin}
        >
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
                {isLoadingIndecator ? (
                  <ClipLoader
                    // color={color}
                    loading={isLoadingIndecator}
                    // cssOverride={override}
                    size={20}
                    aria-label='Loading Spinner'
                    data-testid='loader'
                  />
                ) : (
                  <button type='submit' onClick={handleSubmit}>
                    Log In
                  </button>
                )}
                <p>Forget Password?</p>
              </div>
            </>
          )}
        </Formik>
      </div>
    </main>
  );
}
