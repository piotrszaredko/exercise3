import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';

@Component({
  selector: 'app-nav-child',
  templateUrl: './nav-child.component.html',
  styleUrls: ['./nav-child.component.scss']
})
export class NavChildComponent implements OnInit {

  @Input() menuItem: MenuItem
  collapse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
