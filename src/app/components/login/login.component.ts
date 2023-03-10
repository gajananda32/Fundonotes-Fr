import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm !:FormGroup;
   submitted=false;
   constructor(private formBuilder:FormBuilder, private user:UserService) {}
   ngOnInit() {
     this.loginForm=this.formBuilder.group({
      username:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
     });
   }
   get f() {return this.loginForm.controls;}

   onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      let data={
        email:this.loginForm.value.username,
        password:this.loginForm.value.password
    }
    this.user.login(data).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data)
    })
    }
   }
}
