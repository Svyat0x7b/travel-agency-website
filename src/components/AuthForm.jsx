import { Form, Link, useSearchParams, useNavigation } from "react-router-dom";
import './AuthForm.css';

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const nav = useNavigation();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = nav.state === 'submitting';

  return (
    <div className="auth-form-wrapper">
      <Form className="auth-form">
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        {!isLogin && <p>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </p>}
        {!isLogin && <p>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" name="surname" required />
        </p>}
        {!isLogin && <p>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" name="phone" required />
        </p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className='actions'>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
