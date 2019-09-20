import { HomeComponent } from './views/home/home.component';
import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "category",
    loadChildren: () =>
      import("./views/category/category.module").then(module => module.CategoryModule)
  },
  {
    path: "about",
    loadChildren: () =>
      import("./views/about/about.module").then(module => module.AboutModule)
  }
];
