import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>You've Managed to Navigate Your Way Home</h2>
      <p>
        <Link to="/books">Ahead to List</Link>
      </p>
    </>
  )
}
export default Home
