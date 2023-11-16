import { Component } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(public modalService:ModalService) {
  }

  public openModal(): void{
    this.modalService.openModal();
  }

}
