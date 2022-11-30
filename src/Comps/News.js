import React, { Component } from 'react'

export default class News extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props
    return (
      <>
         <div className="card" style={{width: "16rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">{title}......</h5>
            <p className="card-text">{description}..........</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
       </div>
      </>
    )
  }
}
