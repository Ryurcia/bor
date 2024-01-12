import styles from './page.module.css'
import {_ContetnfulAPI} from "@/Contentful/fetchBlog";
import IBlogData from "@/Interfaces";
export default async function Home() {

  const blog: IBlogData = await _ContetnfulAPI.getRecentEntry();


  return (
    <div className={styles.home_container}>

    </div>
  )
}
