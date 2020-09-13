import React, { Component } from 'react'
import './public/style.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class About extends Component {
  render (){
    return (
      <BrowserRouter>
      <div >
        <h1 >Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li >Nama: nama peserta</li>
          <li >Email: email pesera</li>
          <li >Sistem Operasi yang digunakan: sistem operasi peserta</li>
          <li >Akun Gitlab:akun gitlab peserta</li>
          <li >Akun Telegram: akun telegram peserta</li>
        </ol>
      </div>
      <br/>
      <br/>
      <a href="index.html">
        <button>kembali ke index</button>
      </a>
      </BrowserRouter>
    )
  }
}

export default About;
