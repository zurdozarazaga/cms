import React from 'react'

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link to = '/login' >Sign In</Link>
      </button>

      <button>
        <Link to = '/register' >Sign Up</Link>
      </button>

    </div>
  )
};

export default Home;