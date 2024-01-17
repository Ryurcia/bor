import {client} from "@/Contentful/contentfulConfig";
import imageLinkResolver from "@/Helpers/imageLinkResolver";
import IBlogData from "@/Interfaces";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import BlogTag from "@/Types";

class ContentfulAPI {

  private static instance: ContentfulAPI;

  public static getInstance(): ContentfulAPI {
    if(!ContentfulAPI.instance) {
      ContentfulAPI.instance = new ContentfulAPI();
    }

    return ContentfulAPI.instance
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

  public async getEntries(excludedId: string): Promise<Array<IBlogData>> {

    const blogs = await client.getEntries({
      limit: 4
    });

    const filteredBlogs = blogs.items.filter((entry: any) => entry.sys.id !== excludedId)

    return filteredBlogs.map((entry:any) => {
      const fields = entry.fields;

      return {
        blog_id: entry.sys.id,
        blog_header_img: imageLinkResolver(fields.headerImage.fields.file.url),
        blog_title: fields.blogTitle,
        blog_author: fields.author,
        blog_posted: fields.datePosted,
        blog_tag:fields.tag,
        blog_content: documentToReactComponents(fields.content)
      }
    })

  }

  public async getEntriesByTag(tag:BlogTag): Promise<Array<IBlogData>> {
    const blogs = await client.getEntries();
    const filteredBlogs = blogs.items.filter((entry:any) => entry.fields.tag === tag)

    return filteredBlogs.map((entry:any) => {
      const fields = entry.fields;
      return {
        blog_id: entry.sys.id,
        blog_header_img: imageLinkResolver(fields.headerImage.fields.file.url),
        blog_title: fields.blogTitle,
        blog_author: fields.author,
        blog_posted: fields.datePosted,
        blog_tag:fields.tag,
      }
    })
  }

}

export const _ContentfulAPI:ContentfulAPI = ContentfulAPI.getInstance();
Object.freeze(_ContentfulAPI);