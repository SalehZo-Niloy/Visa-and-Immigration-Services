import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtToken } from '../../utilities/jwtToken';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const { register, profileUpdater, setUser, auth, setLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    useTitle('Register');
    const location = useLocation();
    const navigate = useNavigate();

    //----------------------------
    // spinner
    //----------------------------
    if (!register) {
        return <div className="flex items-center justify-center mt-12 ">
            <Spinner
                color="success"
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    }

    const from = location?.state?.from?.pathname || '/'


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        if (confirm !== password) {
            console.log('password not matched');
            setError('Password did not match!!');
            return;
        }

        register(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                profileUpdater(profile)
                    .then(async () => {
                        form.reset();
                        setError(null);
                        notify();
                        setUser(auth.currentUser)
                        jwtToken(user, navigate, from, setLoading);
                    })
                    .catch(e => {
                        console.log(e);
                        setError(e.message.split(':')[1]);
                    })
            })
            .catch(e => {
                console.error(e);
                setError(e.message.split(':')[1]);
            });
    }

    const notify = () => toast.success('Registration Successful!!');


    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl text-zinc-800 font-semibold text-center my-4'>Register!!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        type="text"
                        name='name'
                        placeholder="name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        type="text"
                        name='photo'
                        placeholder="Photo URL"
                        required={true}
                    />
                </div>
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
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Confirm password"
                        />
                    </div>
                    <TextInput
                        type="password"
                        name='confirm'
                        placeholder='confirm password'
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
        </div>
    );
};

export default Register;