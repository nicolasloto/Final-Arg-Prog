import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {
  nombreEd: string;
  descEd: string;
  inicioEd: string;
  finalEd: string;

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEd, this.descEd, this.inicioEd, this.finalEd);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educacion creada exitosamente");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo añadir exitosamente");
        this.router.navigate(['']);
      }
    )
  }
}