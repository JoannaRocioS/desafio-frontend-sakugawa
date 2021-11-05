import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from '../interface/country';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog-component/dialog.component';

export interface DialogData {
  country: string;
  name: string;
}

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()country!: Country;

  countries$: Country[] | undefined;

  constructor(public dialog: MatDialog) { 
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}


