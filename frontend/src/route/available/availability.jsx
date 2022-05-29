import React,{useState} from "react";
import { Fragment } from 'react';
import {  Content, Row, Col, Box as AdminBox  } from 'adminlte-2-react';
import { environment } from "../../constant";
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
function CheckAvailable(){
    const { token } = useContext(LoginContext);
    const [ cars, setCarsData ] = useState([]);
    
    const submit=(event)=>{
        event.preventDefault();
        if(event.target[0].value===null||event.target[0].value===''||event.target[1].value===null||event.target[1].value===''){
            alert('please fill the field');
            return;
        }
        const requestOptions = {
            method: 'POST',
             headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
            body: JSON.stringify({ 
                'ariv_time':event.target[0].value,
                'dept_time':event.target[1].value
            })
            
        };
        fetch(environment.apiPrefix+'/checkCar',requestOptions).then((response) => response.json())
            .then((content) => {
                setCarsData(content.success);
            });
    }

    return (
        
        <Fragment>
            <Content title="Cars" browserTitle="Cars">
                <Row>
                  <form onSubmit={submit}>
                  <Col lg={4}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Start Time</label>
                        <input type="datetime-local" name="ariv_time" className='form-control' required/>
                    </div>
                  
                  </Col>
                  <Col lg={4}>
                  <div className="form-group">
                        <label htmlFor="exampleInputPassword1">End Time</label>
                        <input type="datetime-local" name="dept_time" className='form-control' required/>
                    </div>
                  
                  </Col>
                  <Col lg={4} >
                      
                  <input type="submit"  name="submit" className='btn btn-primary' style={{marginTop:'25px'}}/>
                  </Col>
                  <br></br>
                  </form>
                    
                    
                     
                </Row>
                <Row>
                {cars.length!==0||cars!==null?cars.map((data,i)=>{
                        return (
                            <Col lg={4} key={i}>
                                <AdminBox  type="primary" >
                                    <img src={environment.imagePrefix+data.carInfo.car_thumbnail_path_1} alt="" width={300} height={200}/>
                                    <h3>{data.carInfo.car_name}  {data.carInfo.car_variant_type}</h3>
                                    <Row>
                                        <Col lg={6}>
                                        Per Day Rent:  {data.carInfo.day_price} RM 
                                        </Col>
                                        <Col lg={6}>
                                        Capacity:  {data.carInfo.car_capacity}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                        Mileage:  {data.carInfo.car_mileage }
                                        </Col>
                                        <Col lg={6}>
                                        Total Driven:  {data.carInfo.total_driven } km
                                        </Col>
                                    </Row>
                                    <h5></h5>
                                    <h5>Current Location:  {data.carInfo.current_location }</h5>
                                    <h5>Owner Name:  {data.carInfo.userInfo.first_name } {data.carInfo.userInfo.last_name }</h5>
                                    
                                    
                                </AdminBox >
                            </Col>
                        );
                    }):<></>}

                </Row>
               
            </Content>
        </Fragment>
    )
}
export default CheckAvailable;

