import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.css']
})
export class NavCollapseComponent implements OnInit {
  private _itemList: Array<Object>;

  constructor() {
    this._itemList = ['hi', 'hello', 'you'];
  }

  get itemList(): Array {
    return this._itemList;
  }

  ngOnInit() {
  }

}
