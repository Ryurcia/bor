'use client'
import styles from './header.module.css'
import Image from "next/image";
import {archivo, clashDisplay} from "@/Utils/fonts/fonts";

interface HeaderProps {
  blog_id:string
  image_url:string,
  title: string,
  author:string
  content: any
}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_image_container}>
        <Image className={styles.header_img} src={props.image_url} alt="image" fill/>
      </div>
      <div className={styles.header_title_container}>
        <h1 className={clashDisplay.className}>{props.title}</h1>
        <div className={styles.header_content}>{props.content}</div>
        <span className={`${styles.header_author} ${archivo.className}`}>Written by {props.author}</span>
      </div>
    </div>
  )
}

export default Header;