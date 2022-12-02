import React, { Component } from 'react'

export default class News extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    let setImg="https://picsum.photos/450/201";
    let setDescription="To read click on below button";
    return (
      <>
         <div className="card my-3" style={{width: "16rem"}}>
          <img src={!imgUrl?setImg:imgUrl} className="card-img-top" style={{height:"120px"}} alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{!description?setDescription:description}.......</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
       </div>
      </>
    )
  }
}
