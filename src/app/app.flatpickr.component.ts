import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"

export function getFlatpickr() {
    function Flatpickr() {}

    Flatpickr.prototype.init = function(params) {
        this.eInput = document.createElement('input');
        this.eInput.classList.add('flatpickrInputStyle');
        this.eInput.value = params.value;

        flatpickr(this.eInput, {
            "locale": Russian,
            dateFormat: "d.m.Y",
        });        
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