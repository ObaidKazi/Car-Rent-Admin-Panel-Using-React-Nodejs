import React, { useEffect, useState } from "react";
import { Fragment } from 'react';
import { Content } from 'adminlte-2-react';
import { DataGrid } from '@mui/x-data-grid';
import { environment } from "../../constant";
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
function Booked() {
  const { token } = useContext(LoginContext);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'Cars',
      headerName: 'Car',
      width: 150,
      renderCell: rowData => {
        return (
          <><img width={50} height={50} style={{ borderRadius: '50%', marginRight: '10px' }} src={environment.imagePrefix + rowData.row.carInfo.car_thumbnail_path_1}></img>    <p>{rowData.row.carInfo.car_name}</p></>
        );
      }

    },
    {
      field: 'Name',
      headerName: 'Name',
      width: 100,
      valueGetter: (params) =>
        `${params.row.customerInfo.first_name || ''} ${params.row.customerInfo.last_name || ''}`,

    },
    {
      field: 'contact_number', headerName: 'Contact Number', width: 100, valueGetter: (params) =>
        `${params.row.customerInfo.contact_number || ''}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      valueGetter: (params) =>
        `${params.row.customerInfo.email || ''}`,


    },
    {
      field: 'start_at',
      headerName: 'Start Time',
      width: 150,
      valueGetter: (params) =>
        `${new Date(params.row.start_at * 1).toLocaleDateString("en-US")}`,

    },
    {
      field: 'end_at',
      headerName: 'End Time',
      width: 150,
      valueGetter: (params) =>
        `${new Date(params.row.end_at * 1000).toLocaleDateString("en-US")}`,

    },
    {
      field: 'pickup',
      headerName: 'Pickup Address',
      width: 250,
      valueGetter: (params) =>
        `${params.row.pickUpAddress.address || ''}  ${params.row.pickUpAddress.pincode || ''}`,

    },
    {
      field: 'drop',
      headerName: 'Drop Address',
      width: 250,
      valueGetter: (params) =>
        `${params.row.dropAddress.address || ''}  ${params.row.dropAddress.pincode || ''} `,

    },
  ];


  const [user, setUserData] = useState([]);
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
  };
  useEffect(() => {
    fetch(environment.apiPrefix + '/getNewBookings', requestOptions).then((response) => response.json())
      .then((content) => {
        console.log(content);
        setUserData(content.success);
      });
  }, [])


  return (
    <Fragment>
      <Content title="Booked " browserTitle="Booked">
        {user.length !== 0 ? <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            style={{ fontSize: 14 }}
            rows={user}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[5]}
          />
        </div> : <></>}
      </Content>
    </Fragment>
  )
}
export default Booked;

