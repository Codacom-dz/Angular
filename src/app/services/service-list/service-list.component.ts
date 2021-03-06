import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ServiceService } from './../service.service';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {


  services: Service[];
  constructor(private serviceService: ServiceService) {

  }
  ngOnInit() {
    this.services = this.serviceService.getServices();
  }


}
