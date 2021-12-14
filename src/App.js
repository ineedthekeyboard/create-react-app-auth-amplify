import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {Amplify, Auth, API} from 'aws-amplify';
import aws_exports from './aws-exports';
import axios from 'axios'

Amplify.configure(aws_exports);
// axios.defaults.headers.common['Authorization'] = async ()=> {
//   // with Cognito User Pools use this:
//   // return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
//   return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
// };

function App() {
  let testAccess = async () => {
    let params = {
      headers: {
        "Authorization": `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    let otherTest = await API.get("exampleendpoint", "/exampleendpoint", params)
    console.log(otherTest)
  }
  let testIdentity = async() => {
    let params = {
      headers: {
        "Authorization": `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
      }
    }
    let otherTest = await API.get("exampleendpoint", "/exampleendpoint", params)
    console.log(otherTest)
  }
  let testAxios = async () => {
    let params = {
      headers: {
        "Authorization": `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    let test = await axios.get('https://kt9ts86de7.execute-api.us-east-1.amazonaws.com/devx/exampleendpoint', params)
    console.log(test)
  }
  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={testAccess}>Run Test Access Call</button>
        <button onClick={testIdentity}>Run Test Identity Call</button>
        <button onClick={testAxios}>Run Axios Test Call</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default withAuthenticator(App);
