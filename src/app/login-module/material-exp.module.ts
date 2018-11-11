import { NgModule } from '@angular/core';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  exports: [
    MatGridListModule
    ,MatDialogModule
    ,MatButtonModule
    ,MatFormFieldModule
    ,MatInputModule
  ],
  declarations: []
})
export class MaterialExpModule { }
