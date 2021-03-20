import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
// import { CourseListComponent } from '../course-list/course-list.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { InstructorListComponent } from '../instructor-list/instructor-list.component';
import { LoginComponent } from 'src/SecurityApp/SecurityApp.LoginComponent';
import { RegistrationComponent } from './registration/registration.component';
import { MyAuthGuard } from 'src/Common/Common.AuthGuard';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


//sequence important
export const routes: Routes = [
  { path: '', redirectTo: '/user/registration', pathMatch: 'full' },
  { path: 'user', redirectTo: '/user/registration', pathMatch: 'full' },
  { path: 'user', component: UserComponent, children: [{ path: 'registration', component: RegistrationComponent }, { path: 'login', component: LoginComponent }] },
  // { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', loadChildren: () => import('../course-list/course-list.module').then(m => m.CourseListModule) }, //lazy loading syntax
  // { path: 'courses', component: CourseListComponent },
  { path: 'students', component: StudentListComponent, canActivate: [MyAuthGuard] },
  //{ path: 'students', component: StudentListComponent },
  { path: 'instructors', component: InstructorListComponent },
  // { path: 'registration', component: RegistrationComponent },
  // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'adminpanel', component: AdminPanelComponent, canActivate: [MyAuthGuard], data: { permittedRoles: ['Administrator'] } },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [CourseListComponent, StudentListComponent, InstructorListComponent, HomeComponent, LoginComponent]
export const routingComponents = [StudentListComponent, InstructorListComponent, HomeComponent, LoginComponent, RegistrationComponent, UserComponent]
