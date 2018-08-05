import { Component, OnInit, Input } from '@angular/core';
import { Service } from './service.model';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() serviceSelected: Service;

  constructor() { }

  ngOnInit() {
  }

}