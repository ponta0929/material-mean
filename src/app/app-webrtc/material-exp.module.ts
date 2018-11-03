import { NgModule } from '@angular/core';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  exports: [
    MatGridListModule
    ,MatDialogModule
  ],
  declarations: []
})
export class MaterialExpModule { }
