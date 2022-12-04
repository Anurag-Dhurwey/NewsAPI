import React, { Component } from "react";
import News from "./News";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class NewsComp extends Component {
  static defaultProps = {
    Country: "in",
    pagesize: 4,
    Category: "genral",
    ApiKey: "33efbe1d43584f64a87c6114493c66f3",
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
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      totalResult: parsedata.totalResults,
      loading: false,
    });
  }
  Preclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this
      .state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  Nextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this
      .state.page + 1}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <div className="container  ">
          <div className="container mb-1 " style={{ height: "10px" }}>
            {this.state.loading && <Loading />}
          </div>
          <div className="row ">
            {this.state.articles.map((element) => {
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
          <div className="container d-flex justify-content-around">
            {!this.state.loading && (
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.Preclick}
              >
                &larr; Previous
              </button>
            )}
            {!this.state.loading && (
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResult / this.props.pagesize)
                }
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.Nextclick}
              >
                Next &rarr;
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}
