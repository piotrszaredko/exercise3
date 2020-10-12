import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _menuStatus = new BehaviorSubject<boolean>(false)
  public readonly menuStatus: Observable<boolean> = this._menuStatus.asObservable()
  
  constructor() { }

  changeMenuStatus(): void {
    this._menuStatus.next(!this._menuStatus.getValue())
    console.log(this._menuStatus.getValue())
  }
}
