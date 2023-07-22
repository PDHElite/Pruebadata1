import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { LoginService } from 'src/app/services/login.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  recuperarUsuario: FormGroup;
  datosCorrectos: boolean = true;
  textoError: string = '';

  constructor(
    private creadorFormulario: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private firebaseError: FirebaseCodeErrorService,
    private msj: MensajesService,
    private spinner: NgxSpinnerService) {
      this.recuperarUsuario = this.creadorFormulario.group({
        email: ['', Validators.compose([Validators.required, Validators.email])]
      });
    }

    ngOnInit() {

      this.loginService.getAuth().subscribe(auth => {
        if(auth){
          this.router.navigate(['/']);
        }
      })

    }

    recuperar() {
      if (this.recuperarUsuario.valid) {
        this.datosCorrectos = true;
        this.spinner.show();
        const email = this.recuperarUsuario.value.email;
        this.loginService.recuperar(email)
        .then(() => {
          this.msj.mensajeCorrecto('Éxito', 'Le enviamos un correo para restablecer su password');
          this.spinner.hide();
          this.router.navigate(['/login']);
        })
        .catch(error => {
          this.datosCorrectos = false;
          this.textoError = this.firebaseError.codeError(error.code);
          this.spinner.hide();
        });
      } else {
        this.datosCorrectos = false;
      }
    }

}


