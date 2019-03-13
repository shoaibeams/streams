import React from 'react'
import { hot } from 'react-hot-loader'
import { Router, Route } from 'react-router-dom'
import Header from './Header'
import history from '../history'

import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={() => <StreamCreate />} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}

export default hot(module)(App)
