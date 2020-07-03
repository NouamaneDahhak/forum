import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from "@angular/material/table";

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,

    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatTreeModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,

  ],
  exports: [
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,

    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatTreeModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ]

})
export class MaterialModule { }
