import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private Skill: SkillService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.Skill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.Skill.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }
}