import styles from './page.module.css'
import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import IBlogData from "@/Interfaces";
import Header from "@/Components/Header/Header";
import BlogCard from "@/Components/Card/BlogCard";
import Template from "@/app/Template";
import EmptyList from "@/app/(EmptyList)/EmptyList";
import Tag from "@/Enums";

export default async function Home() {

  const blog:IBlogData = await _ContentfulAPI.getRecentEntry();
  const blogs:IBlogData[] = await _ContentfulAPI.getEntries(blog.blog_id);

  return !blog ? <EmptyList /> : (
    <Template>
      <div className={styles.home_container}>
        <Header blog_id={blog.blog_id} image_url={blog.blog_header_img} title={blog.blog_title} author={blog.blog_author} content={blog.blog_content} />
        <h2>More Posts...</h2>
        <div className={styles.list_container}>
          {blogs.length === 0 ? <div className={styles.emptyList}>No Posts</div> : blogs.map((blog:IBlogData) => {
            return(
              <div key={blog.blog_id} className={styles.list_card}>
                <BlogCard id={blog.blog_id} img_url={blog.blog_header_img} title={blog.blog_title} tag={blog.blog_tag} />
              </div>
            )
          })}
        </div>
      </div>
    </Template>
  )
}
