import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent{

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) { }

  ngOnInit() {
  }

}

