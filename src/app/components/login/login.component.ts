import { Component, Inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { DOCUMENT } from '@angular/common';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string; //Captura de email
  password: string;  //Captura de password

  constructor(@Inject(DOCUMENT) public document: Document, public userService: UsersService, public auth: AuthService) { //Inicializar los dos atributos
    this.email = '';
    this.password = '';
  }

  login() {  //Función para evento clic
    const user = { email: this.email, password: this.password };

    this.userService.login(user).subscribe(data => {
      console.log(data);
    });
  }
}