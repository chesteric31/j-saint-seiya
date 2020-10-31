import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'armor-category',
        loadChildren: () => import('./armor-category/armor-category.module').then(m => m.JsaintseiyaArmorCategoryModule),
      },
      {
        path: 'strength',
        loadChildren: () => import('./strength/strength.module').then(m => m.JsaintseiyaStrengthModule),
      },
      {
        path: 'armor',
        loadChildren: () => import('./armor/armor.module').then(m => m.JsaintseiyaArmorModule),
      },
      {
        path: 'armor-strength',
        loadChildren: () => import('./armor-strength/armor-strength.module').then(m => m.JsaintseiyaArmorStrengthModule),
      },
      {
        path: 'armor-version',
        loadChildren: () => import('./armor-version/armor-version.module').then(m => m.JsaintseiyaArmorVersionModule),
      },
      {
        path: 'armor-version-attack',
        loadChildren: () => import('./armor-version-attack/armor-version-attack.module').then(m => m.JsaintseiyaArmorVersionAttackModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JsaintseiyaEntityModule {}
