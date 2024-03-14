import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
  gmail:IconDefinition=faEnvelope;
  arrow_left:IconDefinition=faArrowLeft;

  constructor(){}

  about(){
    const about=document.getElementById('about');
    about?.scrollIntoView({behavior:'smooth'});
  }

  stacks(){
    const stacks=document.getElementById('stacks');
    stacks?.scrollIntoView({behavior:'smooth'});
  }

  projects(){
    const projects=document.getElementById('projects');
    projects?.scrollIntoView({behavior:'smooth'});
  }

  home(){
    const home=document.getElementById('home');
    home?.scrollIntoView({behavior:'smooth'});
  }
}
