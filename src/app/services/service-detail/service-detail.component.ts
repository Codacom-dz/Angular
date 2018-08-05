import { Component, OnInit, Input } from '@angular/core';
import { Service } from './../service.model';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  @Input() service: Service;
  constructor() { }

  ngOnInit() {
  }

}
