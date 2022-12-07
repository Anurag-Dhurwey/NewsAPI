import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Comps/Navbar';
import NewsComp from './Comps/NewsComp';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      Mode:"light",
      Tmode:"dark",
      progress:0,
    }
  }

   setProgress=(progress)=>{
    this.setState({
      progress:progress,
    })
  }

  render() {
    let country='in';
    let pagesize=8;
    let category='general'
    // let ApiKey='33efbe1d43584f64a87c6114493c66f3'
    let ApiKey='2b8542c3f43e4009802f8aa7c7be93a4'

    let  ChangeMode=()=>{
      if(this.state.Mode==="light"){
        document.body.style.backgroundColor="black";
        document.body.style.color='white'
        this.setState({
          Mode:"dark",
          Tmode:"light"
        } )
        
        
      }else if(this.state.Mode==="dark"){
        document.body.style.backgroundColor="white";
        document.body.style.color='black'
        this.setState({
          Mode:"light",
          Tmode:"dark"
          
        } )
       
      }
      
    }
     
   
    return (
      <>
      <Navbar DarkMode={ChangeMode}/>
      <LoadingBar
        color='#00ffff'
        progress={this.state.progress}
        
      />
      <Routes>
        <Route path='/' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} Country={country} pagesize={pagesize} Category={category} ApiKey={ApiKey}/>}/>
        <Route path='/business' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode}  exact key={'business'} Country={country} pagesize={pagesize} Category={'business'} ApiKey={ApiKey}/>}/>
        <Route path='/entertainment' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'entertainment'} Country={country} pagesize={pagesize} Category={'entertainment'} ApiKey={ApiKey}/>}/>
        <Route path='/general' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'general'} Country={country} pagesize={pagesize} Category={'general'} ApiKey={ApiKey}/>}/>
        <Route path='/health' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'health'} Country={country} pagesize={pagesize} Category={'health'}/>} ApiKey={ApiKey}/>
        <Route path='/science' element={<NewsComp  setProgress={this.setProgress} DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'science'} Country={country} pagesize={pagesize} Category={'science'} ApiKey={ApiKey}/>}/>
        <Route path='/sports' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'sports'} Country={country} pagesize={pagesize} Category={'sports'}/>} ApiKey={ApiKey}/>
        <Route path='/technology' element={<NewsComp setProgress={this.setProgress}  DMode={this.state.Mode} TMode={this.state.Tmode} exact key={'technology'} Country={country} pagesize={pagesize} Category={'technology'} ApiKey={ApiKey}/>}/>
          
      </Routes>
      </>
    )
  }
}
