function LoginForm() {
  return (
    <form>
      <label htmlFor='email' className='email'>
        Email:
        <input id='email' name='email' type='email' required />
        <label htmlFor='password' className='password'>
          Password:
        </label>
        <input id='password' name='password' type='password' required />
      </label>
    </form>
  );
}

export default LoginForm;
