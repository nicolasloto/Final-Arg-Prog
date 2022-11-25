import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  isLoggedIn = false;
  
  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

  onLogOut(): void{
this.tokenService.logOut();
window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
