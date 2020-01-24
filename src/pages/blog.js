import React, { Component } from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default class blog extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>blog page</h1>
        <h3>This is a blog page</h3>
      </div>
    )
  }
}
