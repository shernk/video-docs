import { CoursesComponent } from "./component/courses/courses.component";
import { ALocalStorage } from "./services/local-storage/alocal-storage.model";
import { AlertComponent } from "./../alert/alert.component";
import { BookComponent } from "./component/book/book.component";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./component/card/card.component";
import { ModalComponent } from "./component/modal/modal.component";
import { NgModule } from "@angular/core";
import { StarListComponent } from "./component/star-list/star-list.component";
import { LocalStorage } from "./services/local-storage/local-storage.service";
import { HttpClientModule } from "@angular/common/http";
import { ASeoService } from "./seo/aseo.service";
import { SeoService } from "./seo/seo.service";

@NgModule({
  declarations: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  providers: [
    {
      provide: ALocalStorage,
      useClass: LocalStorage
    },
    { provide: ASeoService, useClass: SeoService }
  ]
})
export class SharedModule {}
