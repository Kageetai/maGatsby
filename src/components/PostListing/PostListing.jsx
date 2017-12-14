import React from "react";
import Link from "gatsby-link";
import "./post-list.scss";
import DateTime from "../DateTime/DateTime";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.fields.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <ul className="post-list">
        {postList.map(post => (
          <li key={post.path}>
            <div className="post-list-date">
              <DateTime
                dateTime={post.date}
                dateFormat={this.props.dateFormat}
              />
            </div>
            <div className="post-list-title">
              <Link to={post.path}>
                <h2>{post.title}</h2>
              </Link>
              <div className="post-list-excerpt">{post.excerpt}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostListing;
