import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FeaturesComponent } from './features/features.component';
import { ComponentsComponent } from './components/components.component';
import { ModulesComponent } from './modules/modules.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropertyComponent } from './property/property.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { TemplatesComponent } from './templates/templates.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ClipromptsComponent } from './cliprompts/cliprompts.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';
import { MaterialComponent } from './material/material.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
  {path:'angular',component:AngularComponent,children:[
    {path:'introduction',component:IntroductionComponent},
    {path:'download',component:DownloadComponent},
    {path:'features',component:FeaturesComponent},
    {path:'components',component:ComponentsComponent},
    {path:'modules',component:ModulesComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'property',component:PropertyComponent},
    {path:'ngfor',component:NgforComponent},
    {path:'ngif',component:NgifComponent},
    {path:'ngswitch',component:NgswitchComponent},
    {path:'templates',component:TemplatesComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'pipes',component:PipesComponent},
    {path:'routing',component:RoutingComponent},
    {path:'service',component:ServiceComponent},
    {path:'httpclient',component:HttpclientComponent},
    {path:'cliprompts',component:ClipromptsComponent},
    {path:'forms',component:FormsComponent},
    {path:'animation',component:AnimationComponent},
    {path:'material',component:MaterialComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
