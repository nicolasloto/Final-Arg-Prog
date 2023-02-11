import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Persona: Persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLoggedIn = false;

  ngOnInit(): void {
    this.loadPersona();
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  loadPersona(){
    this.personaService.detail(1).subscribe(data =>
      (this.Persona = data)
      )
  }
}