import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
  {path:'bootstrap',component:BootstrapComponent,children:[
    {path:'introduction',component:IntroductionComponent},
    {path:'download',component:DownloadComponent}  
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
