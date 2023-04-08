import React, { Component } from "react";

export class NewsItem extends Component {
  //call automaticlly

  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://www.hindustantimes.com/ht-img/img/2023/03/30/1600x900/US-FORMER-PRESIDENT-OBAMA-RALLIES-VOTERS-IN-GEORGI_1669967287379_1680188792093_1680188792093.jpg"
                : imageUrl
            }
            alt=".."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "--"}on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn  btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
