import { ViewEncapsulation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursehomeComponent } from './coursehome/coursehome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ContentParentComponent } from './data-binding/ng-content/content-parent/content-parent.component';
import { ParentServerComponent } from './data-binding/property-event-binding/parent-server/parent-server.component';
import { ViewcParentComponent } from './data-binding/view-child&children/view-child/viewc-parent/viewc-parent.component';
import { ViewchMainComponent } from './data-binding/view-child&children/view-children/viewch-main/viewch-main.component';
import { ViewMainComponent } from './data-binding/view-encapsulation/view-main/view-main.component';
import { DirectiveComponent } from './directive/directive.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TempalteDrivenComponent } from './forms/tempalte-driven/tempalte-driven.component';
import { AboutComponent } from './routes/about/about.component';
import { AuthGuard } from './routes/authguard/auth.guard';
import { DeactivateGuard } from './routes/canDeactivateGuard/deactivate.guard';
import { OtherPageComponent } from './routes/canDeactivateGuard/other-page/other-page.component';
import { UserDetailComponent } from './routes/canDeactivateGuard/user-detail/user-detail.component';
import { BalanceComponent } from './routes/child-route/balance/balance.component';
import { DepositComponent } from './routes/child-route/deposit/deposit.component';
import { DepositaComponent } from './routes/child-route/deposit/deposita/deposita.component';
import { DepositabComponent } from './routes/child-route/deposit/depositab/depositab.component';
import { MainChildComponent } from './routes/child-route/main-child/main-child.component';
import { WithdrawComponent } from './routes/child-route/withdraw/withdraw.component';
import { ExampleofqueryparamsComponent } from './routes/exampleofqueryparams/exampleofqueryparams.component';
import { HomeComponent } from './routes/home/home.component';
import { MainRouteComponent } from './routes/main-route/main-route.component';
import { ResolveResolver } from './routes/resolver/resolve.resolver';
import { UserComponent } from './routes/resolver/user/user.component';
import { MainAccountComponent } from './services/main-account/main-account.component';

const routes: Routes = [
  {
    path: 'course-home',
    component: CoursehomeComponent
  },
  {
    path: '',
    redirectTo: 'course-home',
    pathMatch: 'full'
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'parent-server',
    component: ParentServerComponent
  },
  {
    path: 'view-encapsulation',
    component: ViewMainComponent
  },
  {
    path: 'view-child',
    component: ViewcParentComponent
  },
  {
    path: 'view-children',
    component: ViewchMainComponent
  },
  {
    path: 'ng-parent',
    component: ContentParentComponent
  },
  {
    path: 'services',
    component: MainAccountComponent
  },
  {
    path: 'routes',
    component: MainRouteComponent
  },
  {
    path: 'home/:id/:name',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'query-params',
    component: ExampleofqueryparamsComponent
  },
  {
    path: 'child-route',
    component: MainChildComponent
  },
  {
    path: 'balance', component: BalanceComponent
  },
   {
    path: 'deposit', component: DepositComponent,
    // canActivate:[AuthGuard], // apply parent and child route
    canActivateChild:[AuthGuard], // apply only child route
    children:[
      {
        path: 'coins', component: DepositaComponent,
      },
      {
        path: 'notes', component: DepositabComponent,
      }
    ]
  }, 
  {
    path: 'withdraw', component: WithdrawComponent
  },
  {
    path: 'deactivate', component :UserDetailComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path :'other-page',
    component : OtherPageComponent
  },
  {
    path :'resolver',
    component : UserComponent,
    resolve: {
      data : ResolveResolver
    }
  },
  {
    path: 'template-driven',
    component: TempalteDrivenComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
