import { Component, OnInit, Input } from '@angular/core';
import { Service } from './../../service.model';
import { ServiceService } from './../../service.service';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: Service;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }


  onSelected() {
    this.serviceService.serviceSelected.emit(this.service);
  }

}
