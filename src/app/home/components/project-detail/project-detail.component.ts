import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent{

  public currentImage:string="";
  public currentLabel:string="";

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) { }

  ngOnInit() {
    this.currentImage = this.project.images[0]?.url;
    this.currentLabel = this.project.images[0]?.label;
  }

  public selectImage(url:string,label:string){
    this.currentImage = url;
    this.currentLabel = label;
    console.log("Actualizado...");
  }

}

