'use client'
import styles from './header.module.css'
import Image from "next/image";
import {archivo, clashDisplay} from "@/Utils/fonts/fonts";
import EmptyList from "@/app/(EmptyList)/EmptyList";
import Link from "next/link";

interface HeaderProps {
  blog_id:string
  image_url:string,
  tag:string,
  title: string,
  author:string | undefined
  content: any
}

const Header = (props: HeaderProps) => {

  return (
    <div className={styles.header_container}>
      <div className={styles.header_image_container}>
        <Image className={styles.header_img} src={props.image_url} alt="image" fill sizes="(max-width:768px)50vw,(max-width:1100px)75vw,100vw" priority={true}/>
      </div>
      <div className={styles.header_title_container}>
        <h1 className={clashDisplay.className}>{props.title}</h1>
        <span className={`${styles.header_author} ${archivo.className}`}>Written by {props.author}</span>
        <Link className={styles.header_link} href={`/${props.tag}/${props.blog_id}`}>Read more...</Link>
      </div>
    </div>
  )
}

export default Header;