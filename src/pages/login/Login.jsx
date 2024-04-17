export function Login() {
  return (
    <main>
      <div className='login-box'>
        <h2 style={{ marginBottom: '24px' }}>Log in to Exclusive</h2>
        <p style={{ marginBottom: '48px' }}>Enter your details below</p>
        <div className='input-controls'>
          <input placeholder='Email' />
          <input placeholder='password' />
        </div>
        <div className='login-btn-container'>
          <button>Log In</button>
          <p>Forget Password?</p>
        </div>
      </div>
    </main>
  );
}
