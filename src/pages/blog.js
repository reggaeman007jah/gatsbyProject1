import React, { Component } from "react"
import { Link } from "gatsby"

export default class blog extends Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <Link to="/blog">blog</Link>
        <Link to="/products">products</Link>
        <div>products page</div>
      </div>
    )
  }
}
