import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './Users';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import { Login } from './layout';
import { Dashboard } from './dashboard';

import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => <Admin 
  dataProvider={dataProvider}
  dashboard={Dashboard}
  loginPage={Login}
  authProvider={authProvider}>
    <Resource name="users" list={UserList} />
  </Admin>;


export default App;