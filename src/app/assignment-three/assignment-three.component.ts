import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment-three',
    templateUrl: './assignment-three.component.html',
    styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent {
    shouldDisplay: boolean = false;
    buttonClicks: string[] = [];
    buttonInt: number = 0;

    toggleDisplay() {
        this.shouldDisplay = !this.shouldDisplay;
        this.buttonClicks.push('[' + this.buttonInt + '] ' + this.getTime());
        this.buttonInt++;
    }

    getTime() {
        let time = new Date();
        return time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    }

    shouldChangeColor(placeInArray: number) {
        return placeInArray >= 4;
    }
}
