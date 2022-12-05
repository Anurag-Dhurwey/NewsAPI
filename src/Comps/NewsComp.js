import React, { Component } from "react";
import News from "./News";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComp extends Component {
  static defaultProps = {
    Country: "in",
    pagesize: 4,
    Category: "genral",
    // ApiKey:'33efbe1d43584f64a87c6114493c66f3',
    ApiKey:'2b8542c3f43e4009802f8aa7c7be93a4'
  };

  static propTypes = {
    Country: PropTypes.string,
    pagesize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResult:0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      totalResult: parsedata.totalResults,
      loading: false,
    });
  }

  fetchMoreData= async()=>{
    this.setState({
      page:this.state.page+1,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResult: parsedata.totalResults,
      loading: false,
    });
    
  }

  render() {
    return (
      <>
        <div className="container  ">
          <div className="container mb-1 " style={{ height: "10px" }}>
            {this.state.loading && <Loading Dmode={this.props.DMode} />}
          </div>
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={this.state.loading && <Loading Dmode={this.props.DMode} />}
        >
          <div className="container row ">
            {this.state.articles.map((element,index) => {
              return (
                <div className="col-md-3 col-lg-3 col-12" key={element.url}>
                  <News
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    Dmode={this.props.DMode}
                    Tmode={this.props.TMode}
                  />
                </div>
              );
            })}
          </div>
          </InfiniteScroll>
          </div>
      </>
    );
  }
}
