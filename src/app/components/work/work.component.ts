import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(private Experiencia: ExperienciaService, private tokenService: TokenService) { }
  isLoggedIn = false;

  ngOnInit(): void {
    this.load();
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  load(): void {
    this.Experiencia.lista().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.Experiencia.delete(id).subscribe(
        data => {
          this.load();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}