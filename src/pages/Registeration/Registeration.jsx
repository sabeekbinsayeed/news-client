import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Registeration = () => {
    const [error, setError] = useState(null);
    const { createUser, updateCurrentProfile, verifyEmail } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('called')
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;



        console.log(email, password, name)



        createUser(email, password)
            .then(result => {
                console.log('dhukse')
                const user = result.user;
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Successfully created!');
                setError('')
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }


        updateCurrentProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="">
                <Form.Label>name </Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Registeration;