import { Subject } from 'rxjs';
import { Header } from '../../../models/header/header.model';

export abstract class AHeaderService {
  public abstract headerSubject: Subject<any>;
  public abstract callHeader(header: Header): void;
}
