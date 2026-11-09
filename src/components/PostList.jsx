import React from 'react';
import Post from './Post.jsx';

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '16px' }}>
        No posts found.
      </p>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
