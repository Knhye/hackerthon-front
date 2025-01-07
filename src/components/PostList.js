import React from 'react';
import PostItem from './PostItem';


function PostList({ posts, onEdit, onDelete }) {
  return (
    <div>
      {posts.map(post => (
        <PostItem 
          key={post.id} 
          post={post} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default PostList;
