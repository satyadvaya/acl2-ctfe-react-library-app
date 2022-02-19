import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>A Listing of Books Awaits You ...</h2>
      <p>
        <Link to="/books">Ahead to List</Link>
      </p>
    </>
  )
}
export default Home
