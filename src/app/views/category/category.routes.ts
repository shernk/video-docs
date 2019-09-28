import { Routes } from "@angular/router";
import {
  CategoryComponent,
  DocumentationComponent
} from "./category.component";
import { TopicComponent } from "./views/topic/topic.component";
import { DetailComponent } from "./views/detail/detail.component";
import { CateComponent } from "./views/cate/cate.component";

export const CATEGORY_ROUTES: Routes = [
  {
    path: ":categoryId",
    component: CategoryComponent,
    children: [
      {
        path: "",
        component: CateComponent
      },
      {
        path: "topic/:topicId",
        component: TopicComponent
      },
      {
        path: "topic/:topicId/detail/:detailId",
        component: DetailComponent
      }
    ]
  }
];

export const DOCUMENTATION_ROUTES: Routes = [
  {
    path: ":categoryId",
    component: DocumentationComponent,
    children: [
      {
        path: "",
        component: CateComponent
      },
      {
        path: "topic/:topicId",
        component: TopicComponent
      },
      {
        path: "topic/:topicId/detail/:detailId",
        component: DetailComponent
      }
    ]
  }
];
