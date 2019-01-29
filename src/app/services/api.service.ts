import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Request, Headers,Response } from '@angular/http';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RemoteRequest } from '../models/remoterequest.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    public headers: Headers;
    public options: RequestOptions;
    public myMethod$: Observable<any>;
    public headersClient:HttpHeaders= new HttpHeaders({ 'Content-Type': 'application/json' })  
    public request: RemoteRequest = new RemoteRequest();
    public host:string = "https://garrybruno.com.ve"; 
    public cors:string = "https://cors-anywhere.herokuapp.com/"; 


    constructor(public http: Http,public httpClient:HttpClient) {
        this.headers = new Headers({
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          'Accept': 'text/plain' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    public registerProject(form,front){
            try{
                let param = {
                    name : form.get('fullname').value,
                    email : form.get('email').value,
                    phone : form.get('phone').value,
                    type : form.get('type').value,
                    description : form.get('description').value,
                    country : form.get('country').value,
                    date : form.get('date').value
                }
                let url = this.host +"/scripts/register_project.php?data="+JSON.stringify(param);
                return this.http.get(url);
            }catch(e){
              console.log("Error in registerProject service Home "+e);
            }
    }

    public sendMessage(form,front){
        try{
            let param = {
                subject : form.get('subject').value,
                email : form.get('from').value,
                message : form.get('message').value
            }
            let url = this.host +"/scripts/send_message.php?data="+JSON.stringify(param);
            return this.http.get(url);
        }catch(e){
          console.log("Error in sendMessage service Home "+e);
        }
    }

    public visitAlert(){
        try{
            let url = this.host +"/scripts/visit_alert.php";
            return this.http.get(url);
        }catch(e){
          console.log("Error in visitAlert service Home "+e);
        }
    }


}