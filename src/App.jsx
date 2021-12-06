import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'
import Home from './views/Home/Home'

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Router>
        <Switch>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App
