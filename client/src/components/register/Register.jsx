import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Input from '../form/Input';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    
    const [user,setUser] = useState({
        lastname:"",
        firstname: "",
        email:"",
        password: ""
    })

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
        ...user,//spread operator 
        [name]:value});
    }

    const register = () => {
        const {lastname,email,password} = user
        if (lastname && email && password){
         axios.post("http://localhost:6969/Register",user )
         .then(res=>console.log(res))
        }
        else{
            alert("invalid input")
        }
    }


    return (
     <>
        <Container>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Card className='mt-5' border="primary">
                        <Card.Header className='bg-primary text-white text-center'>
                            <Card.Title className='mt-2'>Register</Card.Title>
                        </Card.Header>

                        <Card.Body className='pt-4'> 
                        <form>
                            <Row>
                                <Col lg={6}>
                                    <Input
                                        id="lastname"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ user.lastname }
                                        label="Last name"/>
                                </Col>
                                <Col lg={6}>
                                    <Input
                                        id="firstname"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ user.firstname }
                                        label="First name"/>
                                </Col>
                            </Row>

                            <Input
                                id="email"
                                type="email"
                                onChange={ handleChange }
                                value={ user.email }
                                label="Email"/>

                            <Input
                                id="password"
                                type="password"
                                onChange={ handleChange }
                                value={ user.password }
                                label="Password"/>

                            <Button variant="primary" type='button'  onClick={register}> Register
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="ms-2 bi bi-arrow-right"
                                    viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>    
                            </Button>
                            </form>

                            <Card.Text className='mt-2 text-center'>Already have an <NavLink to='/login'>account</NavLink></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
    )
}

export default Register;
