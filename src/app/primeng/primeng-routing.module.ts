import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengComponent } from './primeng/primeng.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
  {path:'primeng',component:PrimengComponent,children:[
    {path:'introduction',component:IntroductionComponent},
    {path:'download',component:DownloadComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengRoutingModule { }
