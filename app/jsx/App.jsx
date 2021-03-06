import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'Home'
import Top from 'Top'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top" component={Top} />
        </Switch>
      </div>
    )
  }
}

export default App
