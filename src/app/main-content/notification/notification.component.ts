import { Component, Input, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Notification } from 'src/models/Notification';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(-50%)'
      })),
      state('mobileOpen', style({
        transform: 'translateX(-90%)'
      })),
      state('closed', style({
        transform: 'translateX(0)'
      })),
      transition('* <=> *', [
        animate('600ms 0.2ms ease-in-out')
      ])
    ]),
    trigger('delete', [
      state('void', style({
        opacity: 1
      })),
      state('deleted', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('600ms 0.2ms ease-out')
      ]),
      transition(':leave', [
        animate('600ms 0.2ms ease-out')
      ])
    ]),
  ]
})
export class NotificationComponent implements OnInit {

  @Input() notification : Notification
  @Input() borderOff : boolean = false

  @Output() likeStatus : EventEmitter<Notification> = new EventEmitter();
  @Output() deleteItem : EventEmitter<any> = new EventEmitter();

  isOpen: boolean = false
  deleted: boolean = false
  windowWidth: number
  sizeActions: string

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this._renderer.listen('window', 'load', (event: Event) => {
      this.windowWidth = (<any>event.currentTarget).innerWidth
      this.setActionsSize()
    })
    this._renderer.listen('window', 'resize', (event: Event) => {
      this.windowWidth = (<any>event.currentTarget).innerWidth
      this.setActionsSize()
    })
  }

  setActionsSize(): void {
    this.windowWidth < 400 ? this.sizeActions = 'big' : this.sizeActions = ''
  }

  changeLikeStatus(): void {
    this.notification.like = !this.notification.like
    this.likeStatus.emit(this.notification)
  }

  delete(): void {
    this.deleted = !this.deleted
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  isSmall(): string {
    if (this.isOpen && this.windowWidth < 400) {
      return 'mobileOpen'
    } if (this.isOpen && this.windowWidth >= 400) {
      return 'open'
    } else {
      return 'closed'
    }
  }

}
