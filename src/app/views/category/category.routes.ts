import { Routes } from "@angular/router";
import { TopicComponent } from "./views/topic/topic.component";
import { DetailComponent } from "./views/detail/detail.component";
import { CategoryHomeComponent } from "./views/category-home/category-home.component";
import { CategoryComponent } from './category.component';

export const CATEGORY_ROUTES: Routes = [
  {
    path: ":categoryId",
    component: CategoryComponent,
    children: [
      {
        path: "",
        component: CategoryHomeComponent
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
