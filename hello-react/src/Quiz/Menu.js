import React, { Component } from 'react'
import './public/style.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
class Index extends Component{
  render() {
    return (
      <>
        <div>
          <header>
              <img id="logo" src="./public/logo.png" width="200px" />
              <nav>
                <ul>
                  <li><a href="Menu.html">Home </a> </li>
                  <li><a href="about.html">About </a> </li>
                  <li><a href="Login.html">Login </a> </li>
                </ul>
              </nav>
          </header>
          <section >
      <h1>Featured Posts</h1>
      <div id="article-list">

      </div>
    </section>
    <footer>
      <h5>copyright &copy; 2020 by Sanbercode</h5>
    </footer>
        </div>
      </>
    )
  }
}

export default Index;
