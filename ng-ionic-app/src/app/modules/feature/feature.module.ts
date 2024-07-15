import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { HomeGridComponent } from './home/home-grid/home-grid.component';

@NgModule({
  declarations: [HomeComponent, HomeGridComponent],
  imports: [CommonModule, IonicModule],
})
export class FeatureModule {}
