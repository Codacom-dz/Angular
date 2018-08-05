import { Service } from './service.model';
export class ServiceService {
  services: Service[] = [

    new Service('premier servies', 'deuxieme services', 'troixieme servies'),
    new Service('premier s', 'deuxieme s', 'troixieme s')

  ];

  getServices() {
    return this.services.slice();
  }


}
