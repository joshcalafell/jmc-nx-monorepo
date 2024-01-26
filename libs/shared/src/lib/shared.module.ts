import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardGraphComponent } from './card-graph/card-graph.component';
import { CardMetricsComponent } from './card-metrics/card-metrics.component';
import { StarRankingComponent } from './star-ranking/star-ranking.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent, CardDetailComponent, CardGraphComponent, CardMetricsComponent, StarRankingComponent
  ],
  exports: [ButtonComponent, CardDetailComponent, CardGraphComponent, CardMetricsComponent, StarRankingComponent]
})
export class SharedModule { }
