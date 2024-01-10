import styles from './page.module.css'
import {clashDisplay} from "@/Fonts";

export default function Home() {
  return (
    <header className={styles.home_container}>
      <div className={styles.header_img}></div>
      <div className={styles.header_blog_container}>
        <h1 className={`${clashDisplay.className} ${styles.header_blog_title}`}>Some Title</h1>
        <p className={styles.header_blog_content}>Here is a sneak peek of the article</p>
      </div>
    </header>
  )
}
