import {_ContentfulAPI} from "@/Contentful/contentfulAPI";
import Tag from "@/Enums";

const Personal = async() => {
  const blogs = await _ContentfulAPI.getEntriesByTag(Tag.Personal);

  return(
    <div>
      <h1>Personal</h1>
    </div>
  )
}

export default Personal;