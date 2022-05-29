import AdminLTE from 'adminlte-2-react';
import React from 'react';
import { Footer, Navbar } from 'adminlte-2-react';
import { sidebar } from '../../component/sidebar/sidebar';
import Cars from '../cars/cars'
import Users from '../users/users';
import Booked from '../booked/booked';
import Owner from '../owner/owner';
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
import CheckAvailable from '../available/availability';
const { Entry } = Navbar;



function Dashboard() {
    const { setToken } = useContext(LoginContext);
    return (
        <>
            <AdminLTE sidebar={sidebar} footer={<Footer includeVersionInfo={false} >Socar</Footer>} >
                <Users path='/users' key={'user'}></Users>
                <Booked path='/booked' key={'booked'}></Booked>
                <CheckAvailable path='/available' key={'available'}></CheckAvailable>
                <Owner path='/owner/:id' key={'owner'}></Owner>
                <Cars path='/' key={'car'}></Cars>


                <Navbar.Core>

                    <Entry
                        icon="fas-power-off"
                        onClick={() => {
                            setToken(null);
                        }}
                    >

                    </Entry>



                </Navbar.Core>


            </AdminLTE>
        </>
    )
}


export default Dashboard;

