import { Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { TopicComponent } from './views/topic/topic.component';

export const CATEGORY_ROUTES: Routes = [
  {
    path: ":id",
    component: CategoryComponent
  },
  {
    path: ":id/topic/:topicId",
    component: TopicComponent
  }
];
