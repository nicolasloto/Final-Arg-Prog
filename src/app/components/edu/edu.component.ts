import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private Educacion: EducacionService, private tokenService: TokenService) { }
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
    this.Educacion.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.Educacion.delete(id).subscribe(
        data => {
          this.load();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}