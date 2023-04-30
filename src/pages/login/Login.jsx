import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleCheckClick = (event) => {
        console.log(event.target.checked)
        console.log(event)
        setAccepted(event.target.checked)
    }

    const handleSubmit = event => {
        event.preventDefault();
        handleCheckClick
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            });

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" onClick={handleCheckClick} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept terms and condition" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;