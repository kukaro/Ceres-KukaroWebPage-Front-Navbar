import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.css']
})
export class NavCollapseComponent implements OnInit {
  private readonly _itemList: Object[];
  private _testList: Object[];
  private _data: string;

  constructor(private http: HttpClient) {
    this._itemList = ['hi', 'hello', 'you'];
    this.http.get<Object[]>('/api/db/nav_list').subscribe(res => {
      this._testList = res;
    });
  }

  get itemList(): Object[] {
    return this._itemList;
  }

  get testList(): Object[] {
    return this._testList;
  }

  get data(): string {
    return this._data;
  }

  ngOnInit() {
  }

}
