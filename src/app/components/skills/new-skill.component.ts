import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  percent: number;

  constructor(private Skill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.percent);
    this.Skill.save(skill).subscribe(
      data => {
        alert("Habilidad creada exitosamente");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo añadir exitosamente");
        this.router.navigate(['']);
      }
    )
  }
}