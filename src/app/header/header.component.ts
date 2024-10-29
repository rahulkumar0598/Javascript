import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string='this load dynamically';
  imgUrl='https://blog.theodo.com/_astro/angular-loopback.CEGeRjAK_mxlvU.webp'
  isDisabled=false;
  isActive:boolean=true;
  fruitName:string='apple'
  isTrue=false;
  userName:string='Ram';
  userLastName:string="Kumar";

  clickButton(){
    console.log("Hi");
    
  }
  keyEnter(){
    console.log('Key Press');
    
  }
  keyEntery(key:any){
    console.log(key.keyCode);
    if(key.keyCode==13) console.log("Enter key pressed");
    
    
  }
  keyFlitering(){
    console.log("Hi");
    
  }
  keyFliter(user:HTMLInputElement){
    console.log(user);
    
    console.log(user.value);
    
  }
  updateUserName(username:HTMLInputElement){
    this.userName=username.value
    console.log(this.userName);
  }
}
