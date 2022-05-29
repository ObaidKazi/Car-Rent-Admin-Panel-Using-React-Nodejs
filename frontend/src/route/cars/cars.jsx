import React,{useEffect,useState} from "react";
import { Fragment } from 'react';
import Pagination from '@mui/material/Pagination';
import {  Content, Row, Col, Box as AdminBox} from 'adminlte-2-react';
import { environment } from "../../constant";
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
function Cars(){
    const { token } = useContext(LoginContext);
    const [ cars, setCarsData ] = useState([]);
    const [page, setPage] = React.useState(1);
    const [ allcars, setAllCarsData ] = useState([]);
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
          };
        fetch(environment.apiPrefix+'/getAllCars',requestOptions).then((response) => response.json())
        .then((content) => {
            let carArray=[];
            if(content.success.length>6){
                for(let i=0;i<6;i++){
                    carArray.push(content.success[i])
                }    
            }else{
                for(let i=0;i<content.success.length;i++){
                    carArray.push(content.success[i])
                }
            }
            setAllCarsData(content.success);
            setCarsData(carArray);
            
            
        });
    },[])
    const handleChange = (event, value) => {
        setPage(value);
            if(value===Math.ceil(allcars.length / 6)){
                let startIndex=((value-1)*6);
                let endIndex=allcars.length;
                setCarsData(allcars.slice(startIndex,endIndex));    
            }else{
                let startIndex=(value*6)-6;
                let endIndex=startIndex+6;
                setCarsData(allcars.slice(startIndex,endIndex));    
            }
      };
    
    return (
        <Fragment>
            <Content title="Cars" browserTitle="Cars">
                <Row>
                    {cars.length!==0||cars!==null?cars.map((data,i)=>{
                        return (
                            <Col lg={4} key={i}>
                                <AdminBox  type="primary" >
                                    <img src={environment.imagePrefix+data.car_thumbnail_path_1} alt="" width={300} height={200}/>
                                    <h3>{data.car_name}  {data.car_variant_type}</h3>
                                    <Row>
                                        <Col lg={6}>
                                        Per Day Rent:  {data.day_price} RM 
                                        </Col>
                                        <Col lg={6}>
                                        Capacity:  {data.car_capacity}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                        Mileage:  {data.car_mileage }
                                        </Col>
                                        <Col lg={6}>
                                        Total Driven:  {data.total_driven } km
                                        </Col>
                                    </Row>
                                    <h5></h5>
                                    <h5>Current Location:  {data.current_location }</h5>
                                    <h5>Owner Name:  {data.User.first_name } {data.User.last_name }</h5>
                                    
                                    
                                </AdminBox >
                            </Col>
                        );
                    }):<></>}

                    
                     
                </Row>
                <Row >
                <Col lg={4} >
                    
                    
                    </Col>
                    <Col lg={4} >
                    
                    <Pagination count={Math.ceil(allcars.length / 6)} color="primary"  page={page} onChange={handleChange}/>
                    
                    </Col>
                    <Col lg={4} >
                    
                    </Col>
                </Row>
                
            </Content>
        </Fragment>
    )
}
export default Cars;

