import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'
import Home from './views/Home/Home'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
