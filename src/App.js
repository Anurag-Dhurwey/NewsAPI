import React, { Component } from 'react'
import Navbar from './Comps/Navbar'
import NewsComp from './Comps/NewsComp'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <NewsComp Country={'us'} pagesize={4}/>
      </>
    )
  }
}
