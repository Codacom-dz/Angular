import { EventEmitter } from '@angular/core';
import { Service } from './service.model';

export class ServiceService {
  serviceSelected = new EventEmitter<Service>();

  services: Service[] = [

    new Service('premier servies', 'deuxieme services', 'troixieme servies'),
    new Service('premier s', 'deuxieme s', 'troixieme s')

  ];

  getServices() {
    return this.services.slice();
  }


}
