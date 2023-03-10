import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RemoteRequest } from '../models/remoterequest.model';
import * as projects from "../../assets/data/projects.json";
import { Project } from '../models/project.model';

@Injectable()
export class ApiService {

    public headers: Headers;
    public headersClient:HttpHeaders= new HttpHeaders({ 'Content-Type': 'application/json' })  
    public request: RemoteRequest = new RemoteRequest();
    public host:string = "https://garrybruno.com.ve"; 
    public cors:string = "https://cors-anywhere.herokuapp.com/"; 


    constructor(public http:HttpClient) {
        this.headers = new Headers({
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          'Accept': 'text/plain' });
    }

    public registerProject(form:any){
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
              return null;
            }
    }

    public sendMessage(form:any){
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
          return null;
        }
    }

    public visitAlert(){
        try{
            let url = this.host +"/scripts/visit_alert.php";
            return this.http.get(url);
        }catch(e){
          console.log("Error in visitAlert service Home "+e);
          return null;
        }
    }

    public getProjects():Project[]{
        let projectsFile = projects as Array<any>;
        let projectsResult:Project[] = [];
        for(var i=0; i< projectsFile.length; i++){
            let projectMap = new Project();
            projectMap.name = projectsFile[i].name;
            projectMap.description = projectsFile[i].description;
            projectMap.urls = projectsFile[i].urls;
            projectMap.year = projectsFile[i].year;
            projectMap.technologies = projectsFile[i].technologies;
            projectMap.images = projectsFile[i].images;
            projectsResult.push(projectMap);
        }
        return projectsResult;
    }


}