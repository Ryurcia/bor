'use client'

import Image from "next/image";
import styles from './blogCard.module.css';
import {clashDisplay} from "@/Utils/fonts/fonts";
import Link from "next/link";
interface BlogCardProps {
  id: string,
  img_url: string,
  title:string,
  tag: string
}

const BlogCard = (props: BlogCardProps) => {
  return(
    <Link href={`/${props.tag}/${props.id}`} className={styles.card_link}>
      <div className={styles.card_container}>
        <div className={styles.card_content_container}>
          <h1 className={clashDisplay.className}>{props.title}</h1>
          <span>{props.tag}</span>
        </div>
        <div className={styles.img_container}>
          <Image className={styles.card_img} src={props.img_url} alt={props.id} sizes="(max-width:800px)100vw,(max-width:1080px)90vw,33vw" fill />
        </div>
      </div>
    </Link>

  )
}

export default BlogCard;