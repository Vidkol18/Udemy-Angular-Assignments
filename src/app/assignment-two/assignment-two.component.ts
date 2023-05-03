import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment-two',
    templateUrl: './assignment-two.component.html',
    styleUrls: ['./assignment-two.component.css'],
})
export class AssignmentTwoComponent {
    allowUserInput = false;
    username: string = '';
    result: string = '';

    setUsername() {
        this.result = this.username;
        this.username = '';
    }
}
