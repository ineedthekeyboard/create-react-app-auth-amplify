import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {Amplify, Auth} from 'aws-amplify';
import aws_exports from './aws-exports';
import axios from 'axios'

Amplify.configure(aws_exports);
// axios.defaults.headers.common['Authorization'] = async ()=> {
//   // with Cognito User Pools use this:
//   // return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
//   return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
// };

function App() {
  let test = async () => {
    let params = {
      headers: {
        "Authorization": `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
      }
    }
    let test = await axios.get('https://kur3wux4q3.execute-api.us-east-1.amazonaws.com/devx/exampleendpoint', params)
    console.log(test)
  }
  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={test}>Run Test Call</button>
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
