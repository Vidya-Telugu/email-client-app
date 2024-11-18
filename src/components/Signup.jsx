import React,{useState} from 'react'
import "./Signup.css"
import axios from 'axios';
import { Form,Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
function Signup() {
    const[form,setForm]=useState({Email:"",Password:"",ConfirmPassword:""});
    async function handleForm(e){
        const {Email,Password}=form;
;        e.preventDefault();
        const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAelEF0kkZtMsaYmX4Cg8GUvB6D4pdNXgM";
        try{
            const response=await axios.post(url,{
                    email:Email,
                    password:Password,
                    returnSecureToken:true
                   },
                {
                    headers:{
                    "Content-Type":"Application/json",
                }
            }
            );
            setForm({Email:"",Password:"",ConfirmPassword:""});
            console.log(response.data);
            const token=response.data.idToken;
            console.log(token);
        }catch(error){
            alert(error.message);
        }
    }
    function handleInput(e){
        setForm((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    return (
        <>
        <div className="d-flex mx-auto justify-content-center align-items-center shadow-lg"
        style={{ minHeight: '100vh' }}>
            <Form className='flex justify-content-center align-items-center shadow-sm form-cont'
             style={{border:"2px solid black",borderRadius:"8px" }} onSubmit={handleForm}>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='Email'className='text-center w-100 fw-b'>
                        Email
                    </Form.Label>
                    <br></br>
                    <Form.Control type="text" id="Email"
                     placeholder='enter email' name="Email" value={form.Email} onChange={handleInput}></Form.Control>
                </Form.Group>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='Password' className='text-center w-100 fw-b'>
                       Password
                    </Form.Label>
                    <br></br>
                    <Form.Control type="password" id="Password" 
                    placeholder='enter password' name="Password" onChange={handleInput} value={form.Password}></Form.Control>
                </Form.Group>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='ConfirmPassword' className='text-center w-100'>
                      Confirm Password
                    </Form.Label>
                    <br></br>
                    <Form.Control type="password" name="ConfirmPassword" id="ConfirmPassword" 
                    placeholder='enter password' value={form.ConfirmPassword} onChange={handleInput}></Form.Control>
                    <Button type="submit" className="my-3 w-auto d-flex justify-content-center mx-auto">Signup</Button>
                </Form.Group>
            </Form>
        </div>
        <div className='p-3 mx-auto text-center login-div' style={{border:"2px solid gray"}}>
        Already have an account?<Link to="/">Login</Link>
       </div>
       </>
    )
}

export default Signup
