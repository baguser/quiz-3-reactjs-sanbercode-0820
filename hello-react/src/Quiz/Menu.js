import React, { Component } from 'react'
import './public/style.css'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import About from './About'

function Home (){
  return <h1></h1>
}

class Index extends Component{
  render() {
    return (
      <>
      <BrowserRouter>
        <div>
          <header>
              <img id="logo" src="./public/logo.png" width="200px" />
              <nav>
                <ul>
                  <li>< Link to="/">Home </Link> </li>
                  <li>< Link to="/About">About </Link> </li>
                  <li>< Link to="/Login">Login </Link> </li>
                </ul>
              </nav>

              <main>
               <Switch>
                <Route path='/' exact component= {Home} />
                <Route path='/About' exact component= {About} />

                </Switch>

              </main>
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
        </BrowserRouter>
      </>
    )
  }
}

export default Index;
