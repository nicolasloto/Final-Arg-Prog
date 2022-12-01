import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit {
  nombreXP: string;
  descXP: string;

  constructor(private Experiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Experiencia(this.nombreXP, this.descXP);
    this.Experiencia.save(educacion).subscribe(
      data => {
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}