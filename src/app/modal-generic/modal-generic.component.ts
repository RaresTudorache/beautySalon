import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.css']
})
export class ModalGenericComponent implements OnInit {

  public isOpen!:boolean;

  constructor(public modalService: ModalService) {
  }

  public resetModal(): void{
    this.modalService.resetModal()
  }

  public ngOnInit(): void {
   this.modalService.isOpen$.subscribe(isOpen => {
     this.isOpen = isOpen;
   })
  }

}
