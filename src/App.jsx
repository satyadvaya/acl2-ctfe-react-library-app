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
          <Route path="/books/:bookId" component={BookDetail} />
          <Route path="/books" component={BookList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
