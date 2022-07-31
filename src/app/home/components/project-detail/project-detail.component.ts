import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent{

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>
  ) { }

  ngOnInit() {
  }

}

