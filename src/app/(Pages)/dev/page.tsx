import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import Tag from "@/Enums";
import IBlogData from "@/Interfaces";
import ListView from "@/Components/ListView/ListView";
import EmptyList from "@/app/(EmptyList)/EmptyList";

const Dev = async() => {
  const blogs: IBlogData[] = await _ContentfulAPI.getEntriesByTag(Tag.Dev);

  return blogs.length === 0 ? <EmptyList /> : <ListView blogs={blogs} />

}

export default Dev;