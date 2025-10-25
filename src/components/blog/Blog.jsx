import BlogCard from '../BlogCard';

const Blog = () => {
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
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};
export default Blog;
