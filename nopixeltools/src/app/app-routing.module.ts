import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'materials', loadChildren: () => import('./modules/materials/materials.module').then(m => m.MaterialsModule) }, { path: 'hunting', loadChildren: () => import('./modules/hunting/hunting.module').then(m => m.HuntingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
