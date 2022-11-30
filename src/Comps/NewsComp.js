import React, { Component } from 'react'
import News from './News'

export default class NewsComp extends Component {

  
  articles= [
    {
      "source": {
        "id": "google-news-ca",
        "name": "Google News (Canada)"
      },
      "author": "Noor Javed",
      "title": "Doug Ford’s plan to suddenly add this small town into the Greenbelt puzzles critics and residents",
      "description": "As part of its plan to open 7,400 acres of the Greenbelt to development, the province pledged to add 9,400 acres — most of them in the town of Erin.",
      "url": "https://www.thestar.com/news/gta/2022/11/29/doug-fords-plan-to-suddenly-add-this-small-town-into-the-greenbelt-puzzles-critics-and-residents.html",
      "urlToImage": "https://images.thestar.com/NGRtL4u1xhDEUMl3jbtnmNZ5af0=/1200x800/smart/filters:cb(1669742226948):format(webp)/https://www.thestar.com/content/dam/thestar/news/gta/2022/11/29/doug-fords-plan-to-suddenly-add-this-small-town-into-the-greenbelt-puzzles-critics-and-residents/afw_greenbeltaddition03.jpg",
      "publishedAt": "2022-11-29T10:13:37+00:00",
      "content": "When the province announced earlier this month it was opening up 7,400 acres of the Greenbelt to expedite development because of the housing shortage, it also pledged to put 9,400 acres into the prot… [+6612 chars]"
    },
    {
      "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
      },
      "author": "Patrick Gomez",
      "title": "<em>9-1-1</em> showrunner explains that 'important' death — and previews the second half of season 6",
      "description": "Executive producer Kristen Reidel breaks down how Wendall's death, Buck's sperm donor developments, and more will impact the rest of the season.",
      "url": "https://ew.com/tv/9-1-1-season-6-winter-finale-death-preview-interview/",
      "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C49%2C2000%2C1049&poi=%5B1360%2C413%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F11%2F28%2F911-112822_2.jpg",
      "publishedAt": "2022-11-29T07:00:00Z",
      "content": "9-1-1 showrunner and executive producer Kristen Reidel promised that Monday's midseason finale would be \"fraught,\" and the episode definitely delivered.\r\nWhile \"Red Flag\" was buoyed by the news that … [+4670 chars]"
    },
    {
      "source": {
        "id": "google-news-ca",
        "name": "Google News (Canada)"
      },
      "author": null,
      "title": "Ontario passes housing bill despite criticism from municipalities over funding",
      "description": "The Ontario government has passed housing legislation that overrides some municipal zoning laws and eliminates some development fees in an effort to follow through on the province’s goal of building 1.5 million homes.",
      "url": "https://toronto.ctvnews.ca/ontario-passes-housing-bill-despite-criticism-from-municipalities-over-funding-1.6171507",
      "urlToImage": "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/10/26/doug-ford-1-6126096-1666806124896.jpg",
      "publishedAt": "2022-11-28T17:00:00+00:00",
      "content": "The Ontario government has passed housing legislation that overrides some municipal zoning laws and eliminates some development fees in an effort to follow through on the provinces goal of building 1… [+5486 chars]"
    },
    {
      "source": {
        "id": "medical-news-today",
        "name": "Medical News Today"
      },
      "author": "Corrie Pelc",
      "title": "Dementia vaccines: What are they, and when could they become available?",
      "description": "There are many experimental dementia vaccines currently under development, but how are they meant to work, exactly, and when might such a vaccine become available?",
      "url": "http://www.medicalnewstoday.com/articles/dementia-vaccines-what-are-they-and-when-could-they-become-available",
      "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/11/Vaccines_dementia_GettyImages1277352629_Thumb.jpg",
      "publishedAt": "2022-11-21T17:00:00Z",
      "content": "Vaccines are arguably one of the greatest inventions of medical science of all time. Now, researchers are looking to take vaccine technology one step further to protect against neurodegenerative dise… [+9679 chars]"
    }
  ]

constructor(){
  super();
  this.state={
    articles: this.articles
  }
}


  render() {
    return (
      <>
      <div className='container pt-2'>
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div className='col-md-3 m-0' key={element.url}>
            <News  title={element.title.slice(0,40)} description={element.description.slice(0,70)} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>     
          //  "https://picsum.photos/450/201"
          })}
      </div>
      </div>
      </>
    )
  }
}
