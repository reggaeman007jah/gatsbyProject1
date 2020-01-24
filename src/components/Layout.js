import React from "react"
import Navbar from "../components/Navbar"
import "./layouts.css"
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default layout
