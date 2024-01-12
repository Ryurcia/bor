import {client} from "@/Contentful/contentfulConfig";
import imageLinkResolver from "@/Helpers/imageLinkResolver";
import IBlogData from "@/Interfaces";

class ContenfulAPI {

  private static instance: ContenfulAPI;

  public static getInstance(): ContenfulAPI {
    if(!ContenfulAPI.instance) {
      ContenfulAPI.instance = new ContenfulAPI();
    }

    return ContenfulAPI.instance
  }

  public async getRecentEntry(): Promise<IBlogData> {
    const blog = await client.getEntries({
      order:'-sys.createdAt',
      limit: 1
    });
    const fields = blog.items[0]

    return {
      blog_id: fields.sys.id,
      blog_header_img: imageLinkResolver(fields.fields.headerImage.fields.file.url),
      blog_title: fields.fields.blogTitle,
      blog_author: fields.fields.author,
      blog_posted: fields.fields.datePosted,
      blog_tag:fields.fields.tag
    };
  }
}

export const _ContetnfulAPI:ContenfulAPI = ContenfulAPI.getInstance();
Object.freeze(_ContetnfulAPI);