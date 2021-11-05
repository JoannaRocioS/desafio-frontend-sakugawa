import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data-service/data-service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()searchWord : string = '';

  searchWords : string[] | undefined;
  country : string[] | undefined;

  countries = Array(0);
  length = this.countries.length;

  constructor(private dataService: DataService) {
    this.countries = [];
  }

  ngOnInit() {

  }

  onEnter(searchWord : string) {
    this.dataService.getData(this.searchWord)
    .subscribe(data => this.countries = data);
  }

  searchCountry(searchWord : string) {
    this.dataService.getData(this.searchWord)
    .subscribe(data => this.countries = data);
  }
}

