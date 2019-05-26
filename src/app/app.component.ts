import { Component, ViewEncapsulation } from '@angular/core';
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title = 'app';

    columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model", editable: true},
        {headerName: "Date", field: "date", editable: true, cellEditor: 'Flatpickr'},
    ];

    rowData = [
        {make: "Toyota", model: "Celica", date: '11.05.2019'},
        {make: "Ford", model: "Mondeo", date: '20.04.2018'},
    ]

    components = {Flatpickr: getFlatpickr()};
}

function getFlatpickr() {
    function Flatpickr() {}

    Flatpickr.prototype.init = function(params) {
        this.eInput = document.createElement('input');
        this.eInput.classList.add('flatpickrInputStyle');
        this.eInput.value = params.value;

        flatpickr(this.eInput, {
            "locale": Russian,
            dateFormat: "d.m.Y",
        });

        console.log(123);
        
    };

    Flatpickr.prototype.getGui = function() {
        return this.eInput;
    };

    Flatpickr.prototype.afterGuiAttached = function() {
        this.eInput.focus();
        this.eInput.select();
    };

    Flatpickr.prototype.getValue = function() {
        return this.eInput.value;
    };

    Flatpickr.prototype.isPopup = function() {
        return false;
    };

    return Flatpickr;
}