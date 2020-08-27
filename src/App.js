import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Profile} from "./pages/Profile"
import {Alert} from "./components/Alert/Alert";
import {AlertState} from "./context/Alert/AlertState";
import {GithabState} from "./context/github/GithubState";

function App() {
  return (
      <GithabState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert alert={{text: "Test alert"}} />
                      <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/about' component={About} />
                          <Route path='/profile/:name' component={Profile} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithabState>
  )
}

export default App
