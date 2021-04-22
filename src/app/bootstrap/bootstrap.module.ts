import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [BootstrapComponent, IntroductionComponent, DownloadComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    ClipboardModule
  ]
})
export class BootstrapModule { }
