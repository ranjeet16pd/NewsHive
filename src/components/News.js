import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
    };
    // document.title = `${this.capitalized(this.props.category)}-NewsHive`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e123cd8b253345278a7d9d11c4bec978&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false,
    });
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e123cd8b253345278a7d9d11c4bec978&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResult,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">
          NewsHive-Top {this.capitalized(this.props.category)} HeadLines
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-6">
                    <NewsItem
                      title={element.title?element.title:""}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      key={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
