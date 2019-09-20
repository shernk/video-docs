import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then(module => module.HomeModule)
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
