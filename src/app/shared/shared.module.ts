import { IconService } from "./services/icon/icon.service";
import { CoursesComponent } from "./component/courses/courses.component";
import { BooksComponent } from "./component/book/book.component";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./component/card/card.component";
import { ModalComponent } from "./component/modal/modal.component";
import { NgModule } from "@angular/core";
import { StarListComponent } from "./component/star-list/star-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ASeoService } from "./seo/aseo.service";
import { SeoService } from "./seo/seo.service";
import { AIconService } from "./services/icon/aicon.service";
import { AlertComponent } from '../components/alert/alert.component';
import { LocalStorage } from '../components/alert/services/local-storage/local-storage.service';
import { ALocalStorage } from '../components/alert/services/local-storage/alocal-storage.model';

@NgModule({
  declarations: [
    ModalComponent,
    CardComponent,
    BooksComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    ModalComponent,
    CardComponent,
    BooksComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  providers: [
    { provide: ALocalStorage, useClass: LocalStorage },
    { provide: ASeoService, useClass: SeoService },
    { provide: AIconService, useClass: IconService }
  ]
})
export class SharedModule {}
