import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
