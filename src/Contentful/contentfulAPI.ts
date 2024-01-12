import {client} from "@/Contentful/contentfulConfig";
import imageLinkResolver from "@/Helpers/imageLinkResolver";
import IBlogData from "@/Interfaces";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

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
      order:'sys.createdAt',
      limit: 1
    });
    const fields = blog.items[0]

    return {
      blog_id: fields.sys.id,
      blog_header_img: imageLinkResolver(fields.fields.headerImage.fields.file.url),
      blog_title: fields.fields.blogTitle,
      blog_author: fields.fields.author,
      blog_posted: fields.fields.datePosted,
      blog_tag:fields.fields.tag,
      blog_content: documentToReactComponents(fields.fields.content)
    };
  }

  public async getEntry(id:string): Promise<IBlogData> {
    const blog = await client.getEntry(id);

    const fields = blog.fields

    return {
      blog_id: id,
      blog_header_img: imageLinkResolver(fields.headerImage.fields.file.url),
      blog_title: fields.blogTitle,
      blog_author: fields.author,
      blog_posted: fields.datePosted,
      blog_tag:fields.tag,
      blog_content: documentToReactComponents(fields.content)
    }
  }

}

export const _ContetnfulAPI:ContenfulAPI = ContenfulAPI.getInstance();
Object.freeze(_ContetnfulAPI);