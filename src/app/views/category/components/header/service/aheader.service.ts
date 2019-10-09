import { Subject } from 'rxjs';
import { Header } from '../model/header.model';

export abstract class AHeaderService {
  public abstract headerSubject: Subject<any>;
  public abstract callHeader(header: Header): void;
}
