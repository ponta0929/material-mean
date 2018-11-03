import { NgModule } from '@angular/core';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  exports: [
    MatGridListModule
    ,MatDialogModule
    ,MatButtonModule
  ],
  declarations: []
})
export class MaterialExpModule { }
