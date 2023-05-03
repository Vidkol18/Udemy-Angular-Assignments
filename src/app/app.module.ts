import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Assignment One
import { AlertInfoComponent } from './assignment-one/alert-info/alert-info.component';
import { AlertWarningComponent } from './assignment-one/alert-warning/alert-warning.component';

// Assignment Two
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AlertsComponent } from './assignment-one/alerts/alerts.component';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
    declarations: [AppComponent, AlertInfoComponent, AlertWarningComponent, AssignmentTwoComponent, AlertsComponent, CardComponent, SectionComponent, AssignmentThreeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
