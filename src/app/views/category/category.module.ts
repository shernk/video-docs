import { AHttpUtilityService } from 'src/app/components/shared/services/http-utility/ahttp-utility.service';
import { ACategoryService } from "./services/category/acategory.service";
import { BreadCrumbsService } from "./components/bread-crumbs/service/bread-crumbs/bread-crumbs.service";
import { BreadCrumbsComponent } from "./components/bread-crumbs/bread-crumbs.component";
import { CategoryComponent } from "./category.component";
import { CategoryService } from "./services/category/category.service";
import { CourseComponent } from "./components/side-bar/component/course/course.component";
import { CATEGORY_ROUTES } from "./category.routes";
import { DynamicContentComponent } from "./components/dynamic-content/dynamic-content.component";
import { VideoPlayListComponent } from "./components/video-playlist/video-playlist.component";
import { VideoComponent } from "./components/video/video.component";
import { VerticalTabsComponent } from "./components/vertical-tabs/vertical-tabs.component";
import { LinkedinPostComponent } from "./components/side-bar/component/share/linkedin-post/linkedin-post.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { SharedModule } from "src/app/components/shared/shared.module";
import { ShareComponent } from "./components/side-bar/component/share/share.component";
import { SupportComponent } from "./components/side-bar/component/support/support.component";
import { TwitterPostComponent } from "./components/side-bar/component/share/twitter-post/twitter-post.component";
import { TabItemsComponent } from "./components/vertical-tabs/components/tab-items/tab-items.component";
import { TopicComponent } from './views/topic/topic.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpUtilityService } from 'src/app/components/shared/services/http-utility/http-utility.service';
import { FacebookGroupComponent } from './components/side-bar/component/facebook-group/facebook-group.component';
import { ResourcesComponent } from "./components/resources/resources.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DetailComponent } from './views/detail/detail.component';
import { TopiclistComponent } from './components/topic-list/topic-list.component';
import { ATopicService } from './services/topic/atopic.service';
import { TopicService } from './services/topic/topic.service';


@NgModule({
  declarations: [
    BreadCrumbsComponent,
    CategoryComponent,
    CourseComponent,
    DynamicContentComponent,
    SideBarComponent,
    ShareComponent,
    SupportComponent,
    TwitterPostComponent,
    TopicComponent,
    TabItemsComponent,
    TopicComponent,
    VerticalTabsComponent,
    VideoComponent,
    VideoPlayListComponent,
    LinkedinPostComponent,
    ResourcesComponent,
    HeaderComponent,
    FacebookGroupComponent,
    DetailComponent,
    TopiclistComponent
  ],
  providers: [
    {
      provide: ACategoryService,
      useClass: CategoryService
    },
    {
      provide: AHttpUtilityService,
      useClass: HttpUtilityService
    },
    {
      provide: ATopicService,
      useClass: TopicService
    },
    BreadCrumbsService
  ],
  imports: [RouterModule.forChild(CATEGORY_ROUTES), CommonModule, SharedModule],
  entryComponents: [ResourcesComponent]
})
export class CategoryModule {}
