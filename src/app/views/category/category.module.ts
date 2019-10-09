import { HeaderService } from './components/header/service/header.service';
import { ResourcesService } from "./services/resources/resources.service";
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
import { ShareComponent } from "./components/side-bar/component/share/share.component";
import { SupportComponent } from "./components/side-bar/component/support/support.component";
import { TwitterPostComponent } from "./components/side-bar/component/share/twitter-post/twitter-post.component";
import { TabItemsComponent } from "./components/vertical-tabs/components/tab-items/tab-items.component";
import { TopicComponent } from "./views/topic/topic.component";
import { HeaderComponent } from "./components/header/header.component";
import { FacebookGroupComponent } from "./components/side-bar/component/facebook-group/facebook-group.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DetailComponent } from "./views/detail/detail.component";
import { TopiclistComponent } from "./components/topic-list/topic-list.component";
import { ATopicService } from "./services/topic/atopic.service";
import { TopicService } from "./services/topic/topic.service";
import { AResourcesService } from "./services/resources/aresources.service";
import { CategoryHomeComponent } from "./views/category-home/category-home.component";
import { ADetailService } from "./services/detail/adetail.service";
import { DetailService } from "./services/detail/detail.service";
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpUtilityService } from 'src/app/shared/services/http-utility/http-utility.service';
import { AHttpUtilityService } from 'src/app/shared/services/http-utility/ahttp-utility.service';
import { AHeaderService } from './components/header/service/aheader.service';

@NgModule({
  declarations: [
    BreadCrumbsComponent,
    CategoryComponent,
    CourseComponent,
    DynamicContentComponent,
    DetailComponent,
    SideBarComponent,
    ShareComponent,
    SupportComponent,
    TwitterPostComponent,
    TopicComponent,
    TabItemsComponent,
    TopiclistComponent,
    TopicComponent,
    VideoComponent,
    VideoPlayListComponent,
    LinkedinPostComponent,
    ResourcesComponent,
    VerticalTabsComponent,
    HeaderComponent,
    FacebookGroupComponent,
    CategoryHomeComponent
  ],
  providers: [
    BreadCrumbsService,
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
    {
      provide: AResourcesService,
      useClass: ResourcesService
    },
    {
      provide: ADetailService,
      useClass: DetailService
    },
    {
      provide: AHeaderService,
      useClass: HeaderService
    }
  ],
  imports: [RouterModule.forChild(CATEGORY_ROUTES), CommonModule, SharedModule],
  entryComponents: [ResourcesComponent]
})
export class CategoryModule {}
