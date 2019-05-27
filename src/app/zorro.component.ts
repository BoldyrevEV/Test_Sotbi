import {Component} from "@angular/core";

@Component({
    selector: 'nz-demo-date-picker-format',
    template: `<nz-date-picker [nzFormat]="dateFormat"></nz-date-picker>`,
})

export class NgZorro {
    dateFormat = 'dd.MM.yyyy';
    
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}