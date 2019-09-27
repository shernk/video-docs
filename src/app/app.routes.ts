import { Routes } from "@angular/router";

/**
 * TODO: watch Ep41-2:05
 */

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
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./views/contact/contact.module").then(module => module.ContactModule)
  }
];
