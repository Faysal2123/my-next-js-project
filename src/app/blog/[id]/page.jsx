'use client'; 

import { useParams } from 'next/navigation';  
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const { id } = useParams();  

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
     
      const fetchPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      };
      fetchPost();
    }
  }, [id]); 

 
  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
