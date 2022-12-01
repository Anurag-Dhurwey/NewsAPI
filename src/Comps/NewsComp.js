import React, { Component } from 'react'
import News from './News'

export default class NewsComp extends Component {

  


constructor(){
  super();
  this.state={
    articles:[],
    page:1,
    pagesize:12,
  }
}

 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=1&pageSize=${this.state.pagesize}`;
  let data=await fetch(url);
  let parsedata= await data.json();
 
  this.setState({
    articles:parsedata.articles,
    totalResult:parsedata.totalResults,
    
  })
}
  Preclick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=${this.state.page-1}&pageSize=${this.state.pagesize}`;
  let data=await fetch(url);
  let parsedata= await data.json();
 
  this.setState({
    articles:parsedata.articles,
    page:this.state.page-1
  })
  }
  Nextclick=async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/this.state.pagesize)){
       
    }else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=${this.state.page+1}&pageSize=${this.state.pagesize}`;
      let data=await fetch(url);
      let parsedata= await data.json();
     
      this.setState({
        articles:parsedata.articles,
        page:this.state.page+1
      })
      
    }
    
  }
  render() {
    return (
      <>
      <div className='container my-2 '>
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div className='col-md-3 ' key={element.url}>
            <News  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,70):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>     
          //  "https://picsum.photos/450/201"
          })}
      </div>
      <div className='container d-flex justify-content-around'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.Preclick}>&larr; Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.state.pagesize)} type="button" className="btn btn-outline-dark" onClick={this.Nextclick}>Next &rarr;</button>
      </div>
      </div>
      </>
    )
  }
}
