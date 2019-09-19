import { CoursesComponent } from './component/courses/courses.component';
import { ALocalStorage } from "./services/local-storage/alocal-storage.model";
// import { AlertService } from "../alert/services/alert/alert.service";
import { AlertComponent } from "./../alert/alert.component";
import { BookComponent } from "./component/book/book.component";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./component/card/card.component";
import { ModalComponent } from "./component/modal/modal.component";
import { NgModule } from "@angular/core";
import { StarListComponent } from "./component/star-list/star-list.component";
import { LocalStorage } from "./services/local-storage/local-storage.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  imports: [CommonModule , HttpClientModule],
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
   
    // AlertService
  ],
})
export class SharedModule {}
