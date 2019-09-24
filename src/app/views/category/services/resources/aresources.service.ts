export abstract class AResourcesService {
  abstract async getResourcesById(simpleId: string): Promise<any>;
}
