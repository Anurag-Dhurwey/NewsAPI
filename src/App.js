import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Comps/Navbar'
import NewsComp from './Comps/NewsComp'

export default class App extends Component {
  render() {
    let country='in';
    let pagesize=12;
    let category='general'
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NewsComp Country={country} pagesize={pagesize} Category={category}/>}/>
        <Route path='/business' element={<NewsComp  exact key={'business'} Country={country} pagesize={pagesize} Category={'business'}/>}/>
        <Route path='/entertainment' element={<NewsComp exact key={'entertainment'} Country={country} pagesize={pagesize} Category={'entertainment'}/>}/>
        <Route path='/general' element={<NewsComp exact key={'general'} Country={country} pagesize={pagesize} Category={'general'}/>}/>
        <Route path='/health' element={<NewsComp exact key={'health'} Country={country} pagesize={pagesize} Category={'health'}/>}/>
        <Route path='/science' element={<NewsComp exact key={'science'} Country={country} pagesize={pagesize} Category={'science'}/>}/>
        <Route path='/sports' element={<NewsComp exact key={'sports'} Country={country} pagesize={pagesize} Category={'sports'}/>}/>
        <Route path='/technology' element={<NewsComp exact key={'technology'} Country={country} pagesize={pagesize} Category={'technology'}/>}/>
          
      </Routes>
      </>
    )
  }
}
