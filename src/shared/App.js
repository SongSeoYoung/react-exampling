import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, About} from '../pages'
import Menu from '../components/Menu'

class App extends Component {
  render() {
    return (

      <div>
        <Menu />
        <hr/>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/about/:name" component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App