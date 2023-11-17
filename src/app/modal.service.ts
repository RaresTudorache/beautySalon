import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalParameter$ : BehaviorSubject<string> = new BehaviorSubject<string>('')

  public openModal(modalParameter:string): void{
    this.isOpen$.next(true);
    this.modalParameter$.next(modalParameter);
  }

  public resetModal(): void{
    this.isOpen$.next(false);
  }

  constructor() { }
}
