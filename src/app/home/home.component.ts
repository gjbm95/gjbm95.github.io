import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  billingForm:FormGroup;
  fullname:FormControl = new FormControl('',[Validators.required]);
  email:FormControl = new FormControl('',[Validators.required,Validators.email]);
  phone:FormControl = new FormControl('');
  country:FormControl = new FormControl('',[Validators.required]);
  type:FormControl = new FormControl('',[Validators.required]);
  description:FormControl = new FormControl('',[Validators.required]);
  date:FormControl = new FormControl('',[Validators.required]);

  messageForm:FormGroup;
  from:FormControl = new FormControl('',[Validators.required,Validators.email]);
  subject:FormControl = new FormControl('',[Validators.required]);
  message:FormControl = new FormControl('',[Validators.required]);

  constructor(public formBuilder: FormBuilder,
              public api:ApiService) { 
    this.visitAlert();
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

  goAboutme(){
    var element = document.getElementById("aboutme");
    var elementPosition = element.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  public sendRequest(){
      if(this.billingForm.valid){
        this.api.registerProject(this.billingForm,this).toPromise()
          .then(
            res => { // Success
              let result= res.text();
              if (result == 'Registro satisfactorio'){
                 alert("¡Se ha enviado su solicitud con éxito!");
              }else{
                 alert("¡Hubo un error durante el envío de los datos!");
              }
            }
          );
      }else{ 
        alert("Hay algún campo inválido");
      }
  }

  public sendMessage(){
      if(this.messageForm.valid){
        this.api.sendMessage(this.messageForm,this).toPromise()
        .then(
          res => { // Success
            let result= res.text();
            if (result == 'Envio satisfactorio'){
               alert("¡Se ha enviado su solicitud con éxito!");
            }else{
               alert("¡Hubo un error durante el envío de los datos!");
            }
          }
        );
      }else{
        alert("Hay algún campo inválido");
      }
  }

  public visitAlert(){
    this.api.visitAlert().toPromise().then( res => { } );
  }

} 
