import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JsaintseiyaSharedModule } from 'app/shared/shared.module';
import { ArmorStrengthComponent } from './armor-strength.component';
import { ArmorStrengthDetailComponent } from './armor-strength-detail.component';
import { ArmorStrengthUpdateComponent } from './armor-strength-update.component';
import { ArmorStrengthDeleteDialogComponent } from './armor-strength-delete-dialog.component';
import { armorStrengthRoute } from './armor-strength.route';

@NgModule({
  imports: [JsaintseiyaSharedModule, RouterModule.forChild(armorStrengthRoute)],
  declarations: [ArmorStrengthComponent, ArmorStrengthDetailComponent, ArmorStrengthUpdateComponent, ArmorStrengthDeleteDialogComponent],
  entryComponents: [ArmorStrengthDeleteDialogComponent],
})
export class JsaintseiyaArmorStrengthModule {}
