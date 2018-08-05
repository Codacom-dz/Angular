import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Service } from './../../service.model';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: Service;
  @Output() serviceSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }


  onSelected() {
    this.serviceSelected.emit();
  }

}
