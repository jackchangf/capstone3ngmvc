import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { InstructorListComponent } from '../instructor-list/instructor-list.component';
import { LoginComponent } from 'src/SecurityApp/SecurityApp.LoginComponent';
import { MyAuthGuard } from 'src/Common/Common.AuthGuard';

//sequence important
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  // { path: 'students', component: StudentListComponent, canActivate: [MyAuthGuard] },
  { path: 'students', component: StudentListComponent },
  { path: 'instructors', component: InstructorListComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CourseListComponent, StudentListComponent, InstructorListComponent, HomeComponent, LoginComponent]
