import { Component } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
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
