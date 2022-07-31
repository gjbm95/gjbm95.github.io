import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Constants } from '../utils/contants';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public billingForm!:FormGroup;
  public fullname:FormControl = new FormControl('',[Validators.required]);
  public email:FormControl = new FormControl('',[Validators.required,Validators.email]);
  public phone:FormControl = new FormControl('');
  public country:FormControl = new FormControl('',[Validators.required]);
  public type:FormControl = new FormControl('',[Validators.required]);
  public description:FormControl = new FormControl('',[Validators.required]);
  public date:FormControl = new FormControl('',[Validators.required]);

  public messageForm!:FormGroup;
  public from:FormControl = new FormControl('',[Validators.required,Validators.email]);
  public subject:FormControl = new FormControl('',[Validators.required]);
  public message:FormControl = new FormControl('',[Validators.required]);

  public age = new Date().getFullYear() - 1996;

  constructor(public formBuilder: FormBuilder,
              public dialog: MatDialog,
              public api:ApiService) { 

  }

  ngOnInit() {
    this.billingForm = this.formBuilder.group({
      "fullname": this.fullname,
      "email": this.email,
      "phone":this.phone,
      "country":this.country,
      "type":this.type,
      "description":this.description,
      "date":this.date
  });
  this.messageForm = this.formBuilder.group({
      "from":this.from,
      "subject":this.subject,
      "message":this.message
  }); 
  }

  openDialog(): void {
    this.dialog.open(ProjectDetailComponent, {
      width: '650px',
      height: '420px',
    });
  }

  goAboutme(){
    var element = document.getElementById("aboutme");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goSandbox(){
    window.location.href = Constants.baseUrl + "sandbox";
  }

  public sendRequest(){
      if(this.billingForm.valid){
        this.api.registerProject(this.billingForm)?.subscribe(
          val => {},
          response => {
            let result= response.text();
            if (result == 'Envio satisfactorio'){
               alert("¡Se ha enviado su solicitud con éxito!");
            }else{
               alert("¡Hubo un error durante el envío de los datos!");
            }
          }
      );;
      }else{ 
        alert("Hay algún campo inválido");
      }
  }

  public sendMessage(){
      if(this.messageForm.valid){
        this.api.sendMessage(this.messageForm)?.subscribe(
          val => {},
          response => {
            let result= response.text();
            if (result == 'Envio satisfactorio'){
               alert("¡Se ha enviado su solicitud con éxito!");
            }else{
               alert("¡Hubo un error durante el envío de los datos!");
            }
          }
      );
    }
  }


} 
