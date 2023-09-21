import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
    return (
        <>
            <AuthForm />
        </>
    );
};

export default AuthPage;

export const action = async ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json({ message: 'Unsupported mode!' }, { status: 422 });
    }

    const data = request.formData();
    try {
        const authData = {
            ...(mode === 'signup' && {
                name: data.get('name'),
                surname: data.get('surname'),
                phone: data.get('phone'),
            }),
            email: data.get('email'),
            password: data.get('password'),
        };

        const response = await fetch(
            `http://localhost:8080/api/auth/${mode === 'login' ? 'login' : 'register'}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'Applicationjson',
                },
                body: JSON.stringify(authData),
            },
        );

        //then we need to check response to status and if its ok
        if (response.status === 422 || response.status === 401) {
            console.log(response.statusText);
            return;
        }

        if (!response.ok) {
            throw json({ message: 'Could not authenticate user.' }, { status: 500 });
        }

        //if all good we have to set token in localstorage
        const resData = await response.json();
        const token = resData.token;
        localStorage.setItem('token', token);

        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 2);
        localStorage.setItem('expiration', expiration.toISOString());

        return redirect('/');
    } catch (err) {
        console.log('Failed to auth:' + err.message);
    }
};
