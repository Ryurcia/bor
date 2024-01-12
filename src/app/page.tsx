import styles from './page.module.css'
import {_ContetnfulAPI} from "@/Contentful/contentfulAPI";
import IBlogData from "@/Interfaces";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
export default async function Home() {

  const blog: IBlogData = await _ContetnfulAPI.getRecentEntry();

  return (
    <div className={styles.home_container}>

    </div>
  )
}
