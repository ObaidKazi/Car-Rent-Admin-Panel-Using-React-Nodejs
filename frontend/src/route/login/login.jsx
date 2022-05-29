import React, { useContext, useState } from 'react';
import { Row, Col, Box } from 'adminlte-2-react';
import { LoginContext } from '../../context/loginContext';
import { environment } from '../../constant';;



function Login() {
    const { setToken } = useContext(LoginContext);
    const [isError,setIsError]=useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const submit = (event) => {
        event.preventDefault();
        if (event.target[0].value === null || event.target[0].value === '' || event.target[1].value === null || event.target[1].value === '') {
            alert('please fill the field');
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': event.target[0].value,
                'password': event.target[1].value
            })

        };
        fetch(environment.apiPrefix + '/login', requestOptions).then((response) => response.json())
            .then((content) => {
                if(content.error){
                    setIsError(true);
                    setErrorMsg(content.error);
                    setTimeout(()=>{
                        setIsError(false);
                    },4000)
                    
                    
                }else{
                    setToken(content.success.token);
                }
            });
    }
    return (
        <>
            <form onSubmit={submit}>
                <Row>
                    <div style={{ marginLeft: 'auto', marginTop: '20%', width: '65%', padding: '10px' }}>
                        <Box style={{ width: '400px', padding: '10px' }}>
                            <center><h2>Login</h2> </center>
                            <Row >
                                <Col >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Email</label>
                                        <input type="email" name="email" className='form-control' required />
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className='form-control' required />
                                    </div>

                                </Col>

                            </Row>
                            {isError?<p className='text-danger'>{errorMsg}</p>:<></>}
                            <Row >
                                <Col >
                                    <center>
                                        <input type="submit" name="submit" className='btn btn-primary' style={{ marginTop: '25px' }} />
                                    </center>
                                </Col>

                            </Row>
                        </Box>
                    </div>
                </Row>
                <br></br>
            </form>
        </>
    )
}


export default Login;

