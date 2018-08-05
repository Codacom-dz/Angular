import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Service } from '../service.model';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  @Output() serviceWasSelected = new EventEmitter<Service>();

  services: Service[] = [

    new Service('premier servies', 'deuxieme services', 'troixieme servies'),
    new Service('premier s', 'deuxieme s', 'troixieme s'),

  ]

  onServiceSelected(service: Service) {
    this.serviceWasSelected.emit(service);
  }




  ngOnInit() {
  }

}
