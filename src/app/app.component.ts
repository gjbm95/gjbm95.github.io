import { Component } from '@angular/core';
import { Constants } from './utils/contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public headerOffset = 100;
  public year = new Date().getFullYear();
  public isLoading: boolean = true;


  ngOnInit() {
   document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        // document ready
        this.isLoading = false;
      }
    };
   
 }

  goHome(){
    var element = document.getElementById("home");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
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

  goContact(){
    var element = document.getElementById("contact");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goProject(){
    var element = document.getElementById("project");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goTools(){
    var element = document.getElementById("tools");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goPublications(){
    var element = document.getElementById("publications");
    var elementPosition = element!.offsetTop;
    window.scrollTo({
       top: elementPosition -100, 
       behavior: "smooth"
    });
  }

  goSandbox(){
   window.location.href = Constants.baseUrl + "sandbox";
  }

  goAcademics(){
      var element = document.getElementById("academics");
      var elementPosition = element!.offsetTop;
      window.scrollTo({
         top: elementPosition -100, 
         behavior: "smooth"
      });
  }



}
