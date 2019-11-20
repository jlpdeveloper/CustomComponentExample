import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* To use custom components you must add to declaration and exports */

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[ListComponent]
})
export class ComponentsModule { }
