class LoginComponent {
  email: string = ""
  senha: string = ""

  constructor() {}

  fazerLogin(): void {
    console.log("Fazendo login com " + this.email)
  }
}