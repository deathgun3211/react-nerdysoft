import React, { Component } from 'react';
import './PostsList.scss';

const CN = 'posts-list';

export class PostsList extends Component {
  onChangeClick = e => {
    const { onPostSelect } = this.props;
    onPostSelect(e.target.id);
  };

  render() {

    const { posts } = this.props;
    return (
      <div className={`${CN} list-group`}>
        {posts.map(post => {
          return (
            <div className={`list-group-item`} key={post.id} id={post.id} onClick={this.onChangeClick}>
              {post.title}
            </div>
          );
        })}
      </div>
    );
  }
}
