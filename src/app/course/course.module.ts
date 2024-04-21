import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursehomeComponent } from './coursehome/coursehome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ParentServerComponent } from './data-binding/property-event-binding/parent-server/parent-server.component';
import { ChildServerComponent } from './data-binding/property-event-binding/child-server/child-server.component';
import { ViewMainComponent } from './data-binding/view-encapsulation/view-main/view-main.component';
import { Comp2Component } from './data-binding/view-encapsulation/comp2/comp2.component';
import { Comp1Component } from './data-binding/view-encapsulation/comp1/comp1.component';
import { ViewcChildComponent } from './data-binding/view-child&children/view-child/viewc-child/viewc-child.component';
import { ViewcParentComponent } from './data-binding/view-child&children/view-child/viewc-parent/viewc-parent.component';
import { ViewchMainComponent } from './data-binding/view-child&children/view-children/viewch-main/viewch-main.component';
import { ViewchChildComponent } from './data-binding/view-child&children/view-children/viewch-child/viewch-child.component';
import { ContentChildComponent } from './data-binding/ng-content/content-child/content-child.component';
import { ContentParentComponent } from './data-binding/ng-content/content-parent/content-parent.component';
import { HighlightDirective } from './directive/customDiretive/highlight.directive';
import { BatterHighllightDirective } from './directive/customDiretive/batter-highllight.directive';
import { MouseenteroverDirective } from './directive/customDiretive/mouseenterover.directive';
import { DynamicpassdataDirective } from './directive/customDiretive/dynamicpassdata.directive';
import { UnlessDirective } from './directive/customDiretive/customStructuralDir/unless.directive';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { MainAccountComponent } from './services/main-account/main-account.component';
import { MainRouteComponent } from './routes/main-route/main-route.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ExampleofqueryparamsComponent } from './routes/exampleofqueryparams/exampleofqueryparams.component';
import { BalanceComponent } from './routes/child-route/balance/balance.component';
import { DepositComponent } from './routes/child-route/deposit/deposit.component';
import { WithdrawComponent } from './routes/child-route/withdraw/withdraw.component';
import { MainChildComponent } from './routes/child-route/main-child/main-child.component';
import { DepositaComponent } from './routes/child-route/deposit/deposita/deposita.component';
import { DepositabComponent } from './routes/child-route/deposit/depositab/depositab.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { UserDetailComponent } from './routes/canDeactivateGuard/user-detail/user-detail.component';
import { OtherPageComponent } from './routes/canDeactivateGuard/other-page/other-page.component';
import { UserComponent } from './routes/resolver/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { TempalteDrivenComponent } from './forms/tempalte-driven/tempalte-driven.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    CoursehomeComponent,
    DataBindingComponent,
    DirectiveComponent,
    ParentServerComponent,
    ChildServerComponent,
    ViewMainComponent,
    Comp2Component,
    Comp1Component,
    ViewcChildComponent,
    ViewcParentComponent,
    ViewchMainComponent,
    ViewchChildComponent,
    ContentChildComponent,
    ContentParentComponent,
    HighlightDirective,
    BatterHighllightDirective,
    MouseenteroverDirective,
    DynamicpassdataDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    MainAccountComponent,
    MainRouteComponent,
    HomeComponent,
    AboutComponent,
    ExampleofqueryparamsComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawComponent,
    MainChildComponent,
    DepositaComponent,
    DepositabComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    OtherPageComponent,
    UserComponent,
    TempalteDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ]
})
export class CourseModule { }
