import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewWorkComponent } from './components/work/new-work.component';
import { EditWorkComponent } from './components/work/edit-work.component';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-work', component: NewWorkComponent },
  { path: 'edit-work/:id', component: EditWorkComponent },
  { path: 'new-edu', component: NewEduComponent },
  { path: 'edit-edu/:id', component: EditEduComponent },
  { path: 'new-skill', component: NewSkillComponent},
  { path: 'edit-skill/:id', component: EditSkillComponent},
  { path: 'edit-about/:id', component: EditAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
