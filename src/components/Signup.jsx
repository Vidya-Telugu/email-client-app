import React from 'react'
import "./Signup.css"
import axios from 'axios';
import { Form,Button } from "react-bootstrap"
function Signup() {
    const[form,setForm]=useState({Email:"",Password:"",ConfirmPassword:""});
    async function handleForm(e){
        const {Email,Password}=form;
;        e.preventDefault();
        const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAelEF0kkZtMsaYmX4Cg8GUvB6D4pdNXgM";
        try{
            const response=await axios.post(url,{
                headers:{
                    email:Email,
                    password:Password,
                    returnSecureToken:true
                },
                body:{
                    "Content-Type":"Application/JSON",
                }
            });
        }catch(error){
            alert(error.message);
        }
    }
    function handleInput(e){
        setForm((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center shadow-lg"
        style={{ minHeight: '100vh' }}>
            <Form className='flex justify-content-center align-items-center shadow-sm form-cont'
             style={{border:"2px solid black",borderRadius:"8px" }} onSubmit={handleForm}>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='Email'className='text-center w-100 fw-b'>
                        Email
                    </Form.Label>
                    <br></br>
                    <Form.Control type="text" id="Email"
                     placeholder='enter email' value={form.Email} onChange={handleInput}></Form.Control>
                </Form.Group>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='Email' className='text-center w-100'>
                       Password
                    </Form.Label>
                    <br></br>
                    <Form.Control type="password" id="Password" 
                    placeholder='enter email' onChange={handleInput} value={form.Password}></Form.Control>
                </Form.Group>
                <Form.Group className='m-3'>
                    <Form.Label htmlFor='ConfirmPassword' className='text-center w-100'>
                      Confirm Password
                    </Form.Label>
                    <br></br>
                    <Form.Control type="password" id="ConfirmPassword" 
                    placeholder='enter email' value={form.ConfirmPassword} onChange={handleInput}></Form.Control>
                    <Button type="submit" className="my-3 w-auto d-flex justify-content-center mx-auto">Submit form</Button>
                </Form.Group>
            </Form>
        </div>
        <div className='p-3 mx-auto text-center login-div' style={{color:"white",border:"2px solid gray"}}>
        Already have an account?Login
       </div>
       </>
    )
}

export default Signup
