import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import Tag from "@/Enums";
import IBlogData from "@/Interfaces";
import ListView from "@/Components/ListView/ListView";
import EmptyList from "@/app/(EmptyList)/EmptyList";
import Template from "@/app/Template";

const Random = async() => {
  const blogs: IBlogData[] = await _ContentfulAPI.getEntriesByTag(Tag.Rand);

  return blogs.length === 0 ? <EmptyList /> : <Template><ListView blogs={blogs} /></Template>

}

export default Random;