import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import axios from "axios";
import { Link} from 'react-router-dom';
function Login() {
    const [form, setForm] = useState({ Email: "", Password: "" });
    function handleInput(e) {
        setForm((prev) => ({...prev,[e.target.name]:e.target.value}));
    }
    async function handleForm(e) {
        e.preventDefault();
        const { Email, Password } = form;
        const url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAelEF0kkZtMsaYmX4Cg8GUvB6D4pdNXgM";
        try {
            const response = await axios.post(url, {
                email: Email,
                password: Password,
                returnSecureToken: true,
            },
            );
            setForm({Email:"",Password:""});
            const token=response.data.idToken;
            console.log(token);
            alert("user logged in successfully");
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",flexDirection:"column",rowGap:"10px"}}>
            <Form onSubmit={handleForm}  style={{flexDirection:"column",rowGap:"20px",border:"2px solid gray",borderRadius:"8px"}} className='d-flex-column p-4 justify-content-center align-items-center login-form-div'>
                <Form.Group>
                    <Form.Label htmlFor="Email" className='text-center w-100 fw-bold'>Email</Form.Label>
                    <Form.Control type="Email" id="Email" name="Email" onChange={handleInput} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="Password" className='text-center  w-100 fw-bold'>Password</Form.Label>
                    <Form.Control type="Password" id="Password" name="Password" onChange={handleInput} />
                </Form.Group>
                <Link to="/welcome"><Button type="submit"  className='d-flex mx-auto m-3 justify-content-center'>Login</Button></Link>
            </Form>
            <div className='signup-div fw-bold'>Don't have an account?<Link to="/signup">Sign up</Link></div>
        </div>
    )
}

export default Login
