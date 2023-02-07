import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private Skill: SkillService, private tokenService: TokenService) { }
  isLoggedIn = false;

  ngOnInit(): void {
    this.load();
    if(this.tokenService.getToken()){
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  load(): void{
    this.Skill.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.Skill.delete(id).subscribe(
        data => {
          this.load();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}