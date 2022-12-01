import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { EduComponent } from './components/edu/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { NewWorkComponent } from './components/work/new-work.component';
import { EditWorkComponent } from './components/work/edit-work.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LogoComponent,
    AboutComponent,
    WorkComponent,
    EduComponent,
    SkillsComponent,
    FooterComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    NewWorkComponent,
    EditWorkComponent,
    NewEduComponent,
    EditEduComponent,
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
