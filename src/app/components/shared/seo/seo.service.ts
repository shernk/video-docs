import { ASeoService } from "./aseo.service";
import { Meta } from "@angular/platform-browser";
import { MetaTags } from "../models/enums/meta-tags.enum";

export class SeoService implements ASeoService {
  // description
  constructor(public meta: Meta) {}

  public addMetaTag(name: MetaTags, content: string): void {
    const metaTag = this.meta.updateTag({ name, content });

    if (!metaTag) {
      this.meta.addTag({ name, content });
    }
  }

  public addTwitterMeta() {
    /* <!--You have to mention the card type. -->
      <meta name="twitter:card" content = "summary" >

        <!--If you want you can mention the twitter profile of your website-- >
          <meta name="twitter:site" content = "@qscuttertutor" >

            <!--If you want you can mention the twitter profile of the author of the webpage.This is useful if the URL is a blog post. -- >
              <meta name="twitter:creator" content = "@narayanprusty" >

                <!--You have to mention the title of the webpage-- >
                  <meta name="twitter:title" content = "An Introduction To Twitter Card" >

                    <!--You have to mention a 2 - 4 lines description about the webpage-- >
                      <meta name="twitter:description" content = "Sometime just tweeting a URL is not enough to make the users more engaging and bringing traffic to your website or app. So Twitter introduced "Twitter Cards", using which we can make Twitter can generate a summarised preview of of our website or app and also provide basic information about what the webpage contains." >

                        <!--If you want you can embed a URL of a image representing the content of your webpage.This image will be displayed in the preview and will make your post look more attractive. -- >
                          <meta name="twitter:image" content = "http://qnimate.com/myImage.png" >
 */
  }
  public addOpenGraph() {}
}
