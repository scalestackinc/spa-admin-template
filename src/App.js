import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './Users';
import jsonServerProvider from 'ra-data-json-server';

import logo from './logo.svg';
import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => <Admin 
  dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>;


export default App;