import { EventEmitter  } from './@angular/core';
import { Document } from './document.model.ts';

export class DocumentService {
    documentSelected = new EventEmitter<Document>();
    documents: Document[] = [
        new Document('document 1','document2','document3'),
        new Document('documant4','document5','document6' )
    ];

    getDocument(){
        return this.documents;
    }
}


