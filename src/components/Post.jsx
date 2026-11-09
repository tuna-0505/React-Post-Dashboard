import React from 'react';

const Post = ({ title, body }) => {
  const postStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  return (
    <div style={postStyle}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', textTransform: 'capitalize' }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>
        {body}
      </p>
    </div>
  );
};

export default Post;
