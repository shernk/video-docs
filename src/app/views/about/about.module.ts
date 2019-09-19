import { QuoteComponent } from './component/quote/quote.component';
import { TeamComponent } from './component/team/team.component';
import { SharedModule } from "./../../components/shared/shared.module";
import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ABOUT_ROUTES } from './about.routes';

@NgModule({
  declarations: [AboutComponent, QuoteComponent, TeamComponent],
  imports: [
    RouterModule.forChild(ABOUT_ROUTES),
    CommonModule,
    SharedModule
  ]
})
export class AboutModule { }
