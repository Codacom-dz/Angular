import { Component, OnInit } from '@angular/core';
import { Document } from '../../document.model.ts';
import { DocumentService } from '../../document.service.ts';
@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
    @input() document: Document;
     constructor(private documentService: DocumentService) { }

    onSelected(){
        this.documentService.documentSelected.emit(this.document);
    }

    
  ngOnInit() {
  }

}
