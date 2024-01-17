import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import IBlogData from "@/Interfaces";
import styles from '../../blogPage.module.css'
import {clashDisplay} from "@/Utils/fonts/fonts";
import Image from "next/image";
const Page = async({ params }: { params: { id: string } }) => {
  const blog: IBlogData = await _ContentfulAPI.getEntry(params.id);
  return(
    <div className={styles.content_container}>
      <div className={styles.content_img}>
        <Image className={styles.img} src={blog.blog_header_img} alt={blog.blog_title} fill sizes="(max-width:768px)50vw,(max-width:1100px)75vw,100vw" />
      </div>
      <div className={styles.content_heading}>
        <h1 className={clashDisplay.className}>{blog.blog_title}</h1>
        <h4>Written by {blog.blog_author}</h4>
        <h4>Posted on {blog.blog_posted}</h4>
      </div>
      <div className={styles.content}>{blog.blog_content}</div>
    </div>
  )
}

export default Page;