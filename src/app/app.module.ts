import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SucceessAlertComponent } from './assignments/assignment-1/succeess-alert/succeess-alert.component';
import { WarningAlertComponent } from './assignments/assignment-1/warning-alert/warning-alert';
import { Ass1Component } from './assignments/assignment-1/ass1/ass1.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './course/services/shared/account.service';
import { AuthGuard } from './course/routes/authguard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ResolveResolver } from './course/routes/resolver/resolve.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SucceessAlertComponent,
    WarningAlertComponent,
    Ass1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService, AuthGuard, ResolveResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
