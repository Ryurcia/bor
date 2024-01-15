import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import styles from '../list.module.css'
import Tag from "@/Enums";
import IBlogData from "@/Interfaces";
import BlogCard from "@/Components/Card/BlogCard";
import ListView from "@/Components/ListView/ListView";
import EmptyList from "@/app/(EmptyList)/EmptyList";

const Personal = async() => {
  const blogs: IBlogData[] = await _ContentfulAPI.getEntriesByTag(Tag.Personal);

  return blogs.length === 0 ? <EmptyList /> : <ListView blogs={blogs} />

}

export default Personal;