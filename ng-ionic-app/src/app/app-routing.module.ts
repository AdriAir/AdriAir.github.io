import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeatureModule } from './modules/feature/feature.module';
import { HomeComponent } from './modules/feature/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FeatureModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
