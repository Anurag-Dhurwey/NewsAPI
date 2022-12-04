import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Comps/Navbar'
import NewsComp from './Comps/NewsComp'

export default class App extends Component {
  render() {
    let country='in';
    let pagesize=4;
    let category='general'
    let ApiKey='33efbe1d43584f64a87c6114493c66f3'
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NewsComp Country={country} pagesize={pagesize} Category={category} ApiKey={ApiKey}/>}/>
        <Route path='/business' element={<NewsComp  exact key={'business'} Country={country} pagesize={pagesize} Category={'business'} ApiKey={ApiKey}/>}/>
        <Route path='/entertainment' element={<NewsComp exact key={'entertainment'} Country={country} pagesize={pagesize} Category={'entertainment'} ApiKey={ApiKey}/>}/>
        <Route path='/general' element={<NewsComp exact key={'general'} Country={country} pagesize={pagesize} Category={'general'} ApiKey={ApiKey}/>}/>
        <Route path='/health' element={<NewsComp exact key={'health'} Country={country} pagesize={pagesize} Category={'health'}/>} ApiKey={ApiKey}/>
        <Route path='/science' element={<NewsComp exact key={'science'} Country={country} pagesize={pagesize} Category={'science'} ApiKey={ApiKey}/>}/>
        <Route path='/sports' element={<NewsComp exact key={'sports'} Country={country} pagesize={pagesize} Category={'sports'}/>} ApiKey={ApiKey}/>
        <Route path='/technology' element={<NewsComp exact key={'technology'} Country={country} pagesize={pagesize} Category={'technology'} ApiKey={ApiKey}/>}/>
          
      </Routes>
      </>
    )
  }
}
