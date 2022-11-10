import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { jwtToken } from '../../utilities/jwtToken';
import useTitle from '../../hooks/useTitle';
import Loader from '../Shared/Loader/Loader';


const Login = () => {
    useTitle('Login');
    const { login, googleLogin, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


    //----------------------------
    // previous route infos
    //----------------------------
    const from = location?.state?.from?.pathname || '/';
    const previousLocation = location?.state?.from



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        //----------------------------
        // Login with email password
        //----------------------------
        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError(null);
                notify();

                //----------------------------
                // creating jwt token for user
                //----------------------------
                jwtToken(user, navigate, from);
            })
            .catch(e => {
                console.error(e);
                setError(e.message.split(':')[1]);
                setLoading(false);
            })
    }

    const handleGoogleLogin = () => {
        //----------------------------
        // login with google
        //----------------------------
        googleLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError(null);
                notify();

                //----------------------------
                // creating jwt token for user
                //----------------------------
                jwtToken(user, navigate, from);
            })
            .catch(e => {
                console.error(e);
                setError(e.message.split(':')[1]);
                setLoading(false);
            })
    }

    const notify = () => toast.success('Login Successful!!');

    //----------------------------
    // spinner
    //----------------------------
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-5/6 lg:w-1/2 mx-auto'>
            <h1 className='text-4xl text-zinc-800 font-semibold text-center my-4'>Login!!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        type="email"
                        name='email'
                        placeholder="email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        type="password"
                        name='password'
                        placeholder='password'
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <p className='text-red-500 font-medium'>{error}</p>
                </div>
                <Button className='bg-emerald-400 text-black hover:bg-zinc-700 hover:text-white'
                    type="submit">
                    Submit
                </Button>
            </form>
            <div className='my-4 text-center'>
                <p>Don't have an account? Then please <Link to='/register' state={{ from: previousLocation }} replace className='text-blue-700 hover:text-emerald-500 font-semibold underline '>Register</Link></p>
            </div>
            <hr className='border-2 border-emerald-500 mb-6' />
            <div>
                <button onClick={handleGoogleLogin} className='bg-zinc-700 hover:bg-emerald-500 w-full pb-2.5 pt-2 rounded-lg text-white hover:text-black'><FcGoogle className='inline text-2xl mr-1' /> Login with Google</button>
            </div>
        </div>
    );
};

export default Login;