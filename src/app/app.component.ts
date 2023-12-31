import { Component } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  homeActive :boolean = true; 
  aboutActive :boolean = false; 
  projectsActive :boolean = false; 
  contactActive :boolean = false; 
   
  constructor(private scrollService: ScrollService){
    scrollService.currentSection.subscribe(
      (res) => {
        this.changeActive(res);
      }
    )
  }

  changeActive(newActive: string){
    this.homeActive = false; 
    this.aboutActive = false;
    this.projectsActive = false;
    this.contactActive = false;
    switch(newActive){
      case 'home':
        this.homeActive = true;
        break;
      case 'about':
        this.aboutActive = true; 
        break;
      case 'projects': 
        this.projectsActive = true; 
        break; 
      case 'contact': 
        this.contactActive = true; 
        break;
    }
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
