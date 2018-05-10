import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.css']
})
export class NavCollapseComponent implements OnInit {
  private readonly _itemList: Object[];

  constructor() {
    this._itemList = ['hi', 'hello', 'you'];
  }

  get itemList(): Object[] {
    return this._itemList;
  }

  ngOnInit() {
  }

}
