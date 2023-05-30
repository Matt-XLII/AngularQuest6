import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  model : User = new User('','','');
  
  onSubmit(): void {

    console.log(this.model)
  }
}

export class User{
  constructor(
    public userName: string,
    public userLastname: string,
    public email: string,
  ) {}
}
