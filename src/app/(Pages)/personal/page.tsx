import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import styles from '../list.module.css'
import Tag from "@/Enums";
import IBlogData from "@/Interfaces";
import BlogCard from "@/Components/Card/BlogCard";
import ListView from "@/Components/ListView/ListView";
import EmptyList from "@/app/(EmptyList)/EmptyList";
import Template from "@/app/Template";

const Personal = async() => {
  const blogs: IBlogData[] = await _ContentfulAPI.getEntriesByTag(Tag.Personal);

  return blogs.length === 0 ? <EmptyList /> : <Template><ListView blogs={blogs} /></Template>

}

export default Personal;