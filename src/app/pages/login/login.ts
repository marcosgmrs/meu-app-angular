import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get email() {
    return this.formulario.get('email')
  }

  get senha() {
    return this.formulario.get('senha')
  }

  constructor(private router: Router) {}

entrar(): void {
  if (this.formulario.valid) {
    localStorage.setItem('logado', 'true')
    localStorage.setItem('email', this.formulario.value.email ?? '')
    this.router.navigate(['/perfil'])
  }
}
}