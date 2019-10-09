import { Subject } from 'rxjs';
import { AHeaderService } from './aheader.service';
import { Header } from '../../../models/header/header.model';

export class HeaderService implements AHeaderService {
  public headerSubject = new Subject();

  public callHeader(header: Header): void {
    this.headerSubject.next(header);
  }
}
