'use client'
import IBlogData from "@/Interfaces";
import styles from './listview.module.css'
import BlogCard from "@/Components/Card/BlogCard";
const ListView = async({blogs}: {blogs: Array<IBlogData>}) => {
  return(
    <div className={styles.page_container}>
      <div className={styles.list_container}>
        {blogs.map((blog:IBlogData) => {
          return(
            <div key={blog.blog_id} className={styles.list_card}>
              <BlogCard id={blog.blog_id} img_url={blog.blog_header_img} title={blog.blog_title} tag={blog.blog_tag} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListView;