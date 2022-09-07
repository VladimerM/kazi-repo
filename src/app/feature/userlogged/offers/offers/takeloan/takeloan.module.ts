import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeloanComponent } from './takeloan/takeloan.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoanAnimationComponent } from './takeloan/loan-animation/loan-animation.component';

@NgModule({
  declarations: [TakeloanComponent, LoanAnimationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TakeloanComponent,
      },
    ]),
  ],
})
export class TakeloanModule {}
