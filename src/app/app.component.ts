import { Component, ViewEncapsulation } from "@angular/core";
import { NgZorro } from "./zorro.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None  
})

export class AppComponent {
  private columnDefs;
  private rowData;
  private context;
  private frameworkComponents;

  constructor() {
    this.columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Date", field: "date", cellRenderer: "NgZorro"},
    ];

    this.rowData = [
        {make: "Toyota", model: "Celica", date: ''},
        {make: "Ford", model: "Mondeo", date: ''},
    ]

    this.context = { componentParent: this };
    this.frameworkComponents = {
      NgZorro: NgZorro
    };
  }
}