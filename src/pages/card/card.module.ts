import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: CardListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [CardListComponent]
})
export class CardModule { }
