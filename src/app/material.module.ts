import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
