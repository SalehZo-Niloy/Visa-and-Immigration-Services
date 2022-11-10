import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const AddService = () => {
    useTitle('Add Service');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.photo.value;
        const fee = form.fee.value;
        const details = form.details.value;
        // console.log(title, image, fee, details);

        const service = {
            title,
            image,
            fee,
            details,
        }
        //----------------------------
        // adding services in database
        //----------------------------
        fetch('https://assignment-11-server-five-beta.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    notify();
                    navigate('/services');
                }
            })
            .catch(e => console.error(e))
    }
    //----------------------------
    // toast function for successful service add
    //----------------------------
    const notify = () => toast.success('Service Added Successfully!!');

    return (
        <div>
            <h1 className='text-2xl font-semibold text-zinc-800 text-center my-4'>Add a Service</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-10/12 lg:w-1/2 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Add Service Title"
                        />
                    </div>
                    <TextInput
                        type="text"
                        name='title'
                        placeholder="Service Title"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Add Service Cover Image URL"
                        />
                    </div>
                    <TextInput
                        type="text"
                        name='photo'
                        placeholder="Cover Image URL"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Add Service Fee in Dollar"
                        />
                    </div>
                    <TextInput
                        type="number"
                        name='fee'
                        placeholder="Service Fee"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Add Service Details"
                        />
                    </div>
                    <Textarea
                        type="text"
                        name='details'
                        placeholder="Service Details"
                        required={true}
                        rows={4}
                    />
                </div>
                <Button className='bg-emerald-400 text-black hover:bg-zinc-700 hover:text-white'
                    type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddService;