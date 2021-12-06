import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section>
      <h2>Welcome to Dangalf's Library of Computer Science!</h2>
      <p className="home">
        Check out the amazing selection of books in our{' '}
        <Link to="/books" aria-label="link to book list">
          catalog
        </Link>
        .
      </p>
    </section>
  )
}

export default Home
