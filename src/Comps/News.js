import React, { Component } from 'react'

export default class News extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    let setImg="https://picsum.photos/450/300";
    let setDescription="To read click on below button";
    return (
      <>
         <div className="container justify-content-center card my-3" >
          <img src={!imgUrl?setImg:imgUrl} className="card-img-top"  alt="error"/>
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
