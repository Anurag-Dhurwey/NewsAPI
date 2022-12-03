import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Comps/Navbar'
import NewsComp from './Comps/NewsComp'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NewsComp Country={'us'} pagesize={4} Category={'health'}/>}/>
        {/* <Route path='/Trnding' element={<NewsComp Country={'us'} pagesize={4} Category={'Trnding'}/>}/> */}
        <Route path='/business' element={<NewsComp  exact key={'business'} Country={'us'} pagesize={4} Category={'business'}/>}/>
        <Route path='/entertainment' element={<NewsComp exact key={'entertainment'} Country={'us'} pagesize={4} Category={'entertainment'}/>}/>
        <Route path='/general' element={<NewsComp exact key={'general'} Country={'us'} pagesize={4} Category={'general'}/>}/>
        <Route path='/health' element={<NewsComp exact key={'health'} Country={'us'} pagesize={4} Category={'health'}/>}/>
        <Route path='/science' element={<NewsComp exact key={'science'} Country={'us'} pagesize={4} Category={'science'}/>}/>
        <Route path='/sports' element={<NewsComp exact key={'sports'} Country={'us'} pagesize={4} Category={'sports'}/>}/>
        <Route path='/technology' element={<NewsComp exact key={'technology'} Country={'us'} pagesize={4} Category={'technology'}/>}/>
          
      </Routes>
      </>
    )
  }
}
