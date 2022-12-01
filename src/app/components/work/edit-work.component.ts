import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(private Experiencia: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}