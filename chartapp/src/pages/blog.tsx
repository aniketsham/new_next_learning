// pages/blog.tsx
import React from 'react';

// Example of blog posts fetched from an API
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
    return posts
}


const Blog = async() => {
    const posts = await getStaticProps();
  return (
    <div>
      <h1>Blog Posts</h1>

      <ul>

{
    posts && (
        posts.map((post)=>(<li>
            {post.body}
        </li>))
             
    )
}   
        

      </ul>
    </div>
  );
};

export default Blog;
