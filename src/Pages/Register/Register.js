import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const { register } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (confirm !== password) {
            console.log('password not matched');
            return;
        }

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                notify();
            })
            .catch(e => console.error(e));
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
                    {/* <Checkbox id="remember" />
                <Label htmlFor="remember">
                    Remember me
                </Label> */}
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