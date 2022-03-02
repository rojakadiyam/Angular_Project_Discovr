import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ngOnInit(): void {
    
}
invalidDetails = '';
  submitted=false
  constructor(private r:Router,private fb:FormBuilder) { }
  get f(){ return this.form.controls}
form=this.fb.group({
  uname:['',Validators.required],
  pwd:['',Validators.required]
})
login(){
this.submitted=true
if(this.form.invalid){
return
}else{
  if(this.form.controls['uname'].value=='admin' && this.form.controls['pwd'].value=='admin'){
localStorage.setItem('user',this.form.value.uname)
this.r.navigate(['signing'])
  }else{
    // alert('username & password are incorrect');
    this.invalidDetails = 'Username & Password are incorrect';
    this.form.reset()
    this.submitted=false
}
}
}
}
