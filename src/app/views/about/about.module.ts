import { QuoteComponent } from './component/quote/quote.component';
import { TeamComponent } from './component/team/team.component';
import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ABOUT_ROUTES } from './about.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutComponent, QuoteComponent, TeamComponent],
  imports: [
    RouterModule.forChild(ABOUT_ROUTES),
    CommonModule,
    SharedModule
  ]
})
export class AboutModule { }
