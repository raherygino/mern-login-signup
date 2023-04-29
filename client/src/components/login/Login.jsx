import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Input from '../form/Input';
import axios from 'axios';
import { useState } from 'react';

const Login = ({setLoginUser}) => {

    const [user,setUser] = useState({
        email:"",
        password: ""
    })

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
        ...user, //spread operator 
        [name]:value
        })
    }

    const login =()=>{
        console.log(user);
        axios.post("http://localhost:6969/Login",user)
        .then(res=>{ //alert(res.data.message)
            console.log(res.data);
        setLoginUser(user);
        

    })
    }

    return (
     <>
        <Container>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Card className='mt-5' border="primary">
                        <Card.Header className='bg-primary text-white text-center'>
                            <Card.Title className='mt-2'>Login</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Input
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                                label="Email"/>

                            <Input
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={handleChange}
                                label="Password"/>

                            <Button variant="primary"  onClick={login}> Login
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

                            <Card.Text className='mt-2 text-center'>Don't have <NavLink to='/register'>account</NavLink></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
    )
}

export default Login;
