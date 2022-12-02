import React, { Component } from 'react'
import News from './News'
import Loading from './Loading';

export default class NewsComp extends Component {

  


constructor( ){
  super();
  this.state={
    articles:[],
    page:1,
    loading:false,
  }
}

 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=1&pageSize=${this.props.pagesize}`;
  this.setState({loading:true,})
  let data=await fetch(url);
  let parsedata= await data.json();
 
  this.setState({
    articles:parsedata.articles,
    totalResult:parsedata.totalResults,
    loading:false,
    
  })
}
  Preclick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true,})
    let data=await fetch(url);
  let parsedata= await data.json();
 
  this.setState({
    articles:parsedata.articles,
    page:this.state.page-1,
    loading:false,
  })
  }
  Nextclick=async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pagesize)){
       
    }else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=business&apiKey=2b8542c3f43e4009802f8aa7c7be93a4&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      this.setState({loading:true,})
      let data=await fetch(url);
      let parsedata= await data.json();
     
      this.setState({
        articles:parsedata.articles,
        page:this.state.page+1,
        loading:false,
      })
      
    }
    
  }
  render() {
    return (
      <>
      <div className='container my-1 '>
        <div className='container mb-1 ' style={{height:"10px"}}>
        {this.state.loading && <Loading/>}
        </div>
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div className='col-md-3 ' key={element.url}>
            <News  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>     
          //  "https://picsum.photos/450/201"
          })}
      </div>
      <div className='container d-flex justify-content-around'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.Preclick}>&larr; Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pagesize)} type="button" className="btn btn-outline-dark" onClick={this.Nextclick}>Next &rarr;</button>
      </div>
      </div>
      </>
    )
  }
}
