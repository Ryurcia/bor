import styles from './page.module.css'
import {_ContetnfulAPI} from "@/Contentful/contentfulAPI";
import IBlogData from "@/Interfaces";
import Header from "@/Components/Header/Header";
export default async function Home() {

  const blog: IBlogData = await _ContetnfulAPI.getRecentEntry();

  return (
    <div className={styles.home_container}>
      <Header blog_id={blog.blog_id} image_url={blog.blog_header_img} title={blog.blog_title} author={blog.blog_author} content={blog.blog_content} />
      <h2>More Posts...</h2>
    {/*  List View*/}
    </div>
  )
}
