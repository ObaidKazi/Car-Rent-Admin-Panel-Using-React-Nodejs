import React, { useEffect, useState } from "react";
import { Fragment } from 'react';
import { Content, Sidebar } from 'adminlte-2-react';
import { DataGrid } from '@mui/x-data-grid';
import { environment } from "../../constant";
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
const { Item } = Sidebar;
function Users() {
  const { token } = useContext(LoginContext);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 200 },
    { field: 'last_name', headerName: 'Last name', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,

    },
    {
      field: 'Cars',
      headerName: 'Total Cars',
      width: 200,
      valueGetter: (params) =>
        `${params.row.Cars.length || ''}`,

    },
    {
      field: 'Action', headerName: 'Action', width: 200, renderCell: rowData => {
        return (
          <div style={{ listStyleType: 'none' }}>
            <Item to={`owner/${rowData.row.id}`} icon='far-eye' ></Item>
          </div>
        );
      }
    },
  ];


  const [user, setUserData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    };

    fetch(environment.apiPrefix + '/getAllUsers', requestOptions).then((response) => response.json())
      .then((content) => {
        console.log(content);
        setUserData(content.success);
      });
  }, [])


  return (
    <Fragment>
      <Content title="Users" browserTitle="Users">
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
export default Users;

