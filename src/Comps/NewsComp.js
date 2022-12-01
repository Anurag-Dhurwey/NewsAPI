import React, { Component } from 'react'
import News from './News'

export default class NewsComp extends Component {

  


constructor(){
  super();
  this.state={
    articles:[]
  }
}

 async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4";
  let data=await fetch(url);
  let parsedata= await data.json();
 
  this.setState({articles:parsedata.articles})
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
      </div>
      </>
    )
  }
}
