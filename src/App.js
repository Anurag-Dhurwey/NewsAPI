import React, { Component } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Comps/Navbar'
import NewsComp from './Comps/NewsComp'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      Mode:"dark",
      Tmode:"light"
    }
  }

 
  render() {
    let country='in';
    let pagesize=4;
    let category='general'
    let ApiKey='33efbe1d43584f64a87c6114493c66f3'
    let  ChangeMode=()=>{
      if(this.state.Mode==="dark"){
        document.body.style.backgroundColor="black";
        document.body.style.color='white'
        this.setState({
          Mode:"light",
          Tmode:"dark"
        } )
        
        
      }else if(this.state.Mode==="light"){
        document.body.style.backgroundColor="white";
        document.body.style.color='black'
        this.setState({
          Mode:"dark",
          Tmode:"light"
          
        } )
       
      }
      
    }
    return (
      <>
      <Navbar DarkMode={ChangeMode}/>
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
