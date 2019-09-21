import { Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { TopicComponent } from './views/topic/topic.component';
import { DetailComponent } from './views/detail/detail.component';

export const CATEGORY_ROUTES: Routes = [
  {
    path: ":categoryId",
    component: CategoryComponent
  },
  {
    path: ":categoryId/topic/:topicId",
    component: TopicComponent
  },
  {
    path: ":categoryId/topic/:topicId/detail/:detailId",
    component: DetailComponent
  }
];
