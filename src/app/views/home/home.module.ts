import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(HOME_ROUTES),
    SharedModule
  ]
})
export class HomeModule {}
