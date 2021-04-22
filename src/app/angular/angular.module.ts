import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
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
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';
import { MaterialComponent } from './material/material.component';
import { ClipromptsComponent } from './cliprompts/cliprompts.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [AngularComponent, IntroductionComponent, FeaturesComponent, ComponentsComponent, ModulesComponent, DatabindingComponent, EventbindingComponent, PropertyComponent, NgforComponent, NgifComponent, NgswitchComponent, TemplatesComponent, DirectiveComponent, PipesComponent, RoutingComponent, ServiceComponent, HttpclientComponent, FormsComponent, AnimationComponent, MaterialComponent, ClipromptsComponent, DownloadComponent],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
