import { Component, ViewEncapsulation } from '@angular/core';
import { getFlatpickr } from './app.flatpickr.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {  
    private columnDefs;
    private components;
    private rowData;

    constructor() {
        this.columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model", editable: true},
            {headerName: "Date", field: "date", editable: true, cellEditor: 'Flatpickr'},
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", date: '11.05.2019'},
            {make: "Ford", model: "Mondeo", date: '20.04.2018'},
        ]

        this.components = {Flatpickr: getFlatpickr()};
    }
}