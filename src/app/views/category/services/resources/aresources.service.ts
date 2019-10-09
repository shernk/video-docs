import { Resources } from '../../models/resources.model';

export abstract class AResourcesService {
  abstract async getResourcesById(simpleId: string): Promise<Resources>;
}
