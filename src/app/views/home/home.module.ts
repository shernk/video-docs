import { SharedModule } from "./../../components/shared/shared.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule {}
