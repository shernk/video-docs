import { SupportSidebarComponent } from "./component/support-sidebar/support-sidebar.component";
import { CONTACT_ROUTES } from "./contact.routes";
import { ContactComponent } from "./contact.component";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ContactComponent, SupportSidebarComponent],
  imports: [RouterModule.forChild(CONTACT_ROUTES)]
})
export class ContactModule {}
