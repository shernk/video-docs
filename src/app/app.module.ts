import { HomeComponent } from "./views/home/home.component";
import { HomeModule } from "./views/home/home.module";
import { AlertService } from "./components/alert/services/alert/alert.service";
import { SharedModule } from "./components/shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { sideNavComponent } from "./components/side-nav/side-nav.component";
import { APP_ROUTES } from "./app.routes";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { TitleService } from "./services/title/title.service";
import { OfflineOnlineService } from "./services/offline-online/offline-online.service";
import { NgtUniversalModule } from "@ng-toolkit/universal";

@NgModule({
  // is to make components, directives, pipes, know inside the current module.
  declarations: [AppComponent, FooterComponent, sideNavComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      initialNavigation: "enabled",
      preloadingStrategy: PreloadAllModules
    }),
    SharedModule,
    HomeModule,
    CommonModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    NgtUniversalModule
  ],
  providers: [AlertService, TitleService, OfflineOnlineService],
  bootstrap: [AppComponent]
})
// is to make components, directives, pipes, available to importing modules
export class AppModule {}
