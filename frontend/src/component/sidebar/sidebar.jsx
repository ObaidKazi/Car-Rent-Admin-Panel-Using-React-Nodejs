import { Sidebar } from 'adminlte-2-react';
import React from 'react';
const { Item,  UserPanel  } = Sidebar;

export const sidebar = [
    <UserPanel key="admin" username='Admin' imageUrl='https://www.bootstrapdash.com/wp-content/uploads/2017/10/How-to-Create-an-Admin-Panel-with-a-Bootstrap-Template.jpg'></UserPanel>,
    <Item key="car" text="Cars" to="/" />,
    <Item key="user" text="Users" to="/users" />,
    <Item key="book" text="Booked Car" to="/booked" />,
    <Item key="availabilty" text="Check Availibilty" to="/available" />,
    
];