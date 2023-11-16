import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  public openModal(): void{
    this.isOpen$.next(true);
  }

  public resetModal(): void{
    this.isOpen$.next(false);
  }

  constructor() { }
}
