import {Component, OnInit} from '@angular/core';
import {ModalService} from "../modal.service";
import {coafat} from "../mock/mock.data";
import {pachete} from "../mock/mock.data";
import {specials} from "../mock/mock.data";
import {tratamente} from "../mock/mock.data";
import {vopsit} from "../mock/mock.data";
import {extensii} from "../mock/mock.data";
import {ServiceInterface} from "../interfaces/service.interface";

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.css']
})
export class ModalGenericComponent implements OnInit {

  public isOpen!:boolean;
  public modalParameter!:string;
  public modalContent!:Array<ServiceInterface>;

  constructor(public modalService: ModalService) {
  }

  public resetModal(): void{
    this.modalService.resetModal()
  }

  public ngOnInit(): void {
   this.modalService.isOpen$.subscribe(isOpen => {
     this.isOpen = isOpen;
   })
    this.modalService.modalParameter$.subscribe(parameter => {
      this.modalParameter = parameter;
      switch (parameter){
          case 'Coafat':
          this.modalContent = coafat;
              break;
          case 'Pachete':
              this.modalContent = pachete;
              break;
          case 'Extensii':
              this.modalContent = extensii;
              break;
          case 'Specials':
              this.modalContent = specials;
              break;
          case 'Tratamente':
              this.modalContent = tratamente;
              break;
          case 'Vopsit':
              this.modalContent = vopsit;
              break;
      }
    })
  }

}
