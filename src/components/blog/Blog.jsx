import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const url = import.meta.env.VITE_API_BLOGS;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios(url);
        setBlogs(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className='blog-container'>
      <h4 className='section-title'>Latest Blog and News</h4>
      <div className='blog-intro'>
        <h3 className='title'>Check Out Our Latest Blog and News Update</h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
      <div className='blog-cards-container'>
        {blogs.map((blog) => {
          const { id, created, title, description, imageUrl } = blog;
          return (
            <BlogCard
              key={id}
              id={id}
              created={created}
              title={title}
              description={description}
              imageUrl={imageUrl}
              isOpen={openId === id}
              setOpenId={setOpenId}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Blog;
