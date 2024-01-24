import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import Tag from "@/Enums";
import IBlogData from "@/Interfaces";
import ListView from "@/Components/ListView/ListView";
import EmptyList from "@/app/(EmptyList)/EmptyList";
import Template from "@/app/Template";
import {cache} from 'react'

export const revalidate = 3600;
const getTagBlogs = cache(async() => {
  const blogs: IBlogData[] = await _ContentfulAPI.getEntriesByTag(Tag.Dev);
  return {blogs}
});

const Dev = async() => {

  const {blogs} = await getTagBlogs();

  return blogs.length === 0 ? <EmptyList /> : <Template><ListView blogs={blogs} /></Template>

}

export default Dev;