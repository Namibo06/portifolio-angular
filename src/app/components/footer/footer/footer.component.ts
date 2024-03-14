import { Component, EventEmitter, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faFacebook,faGithub,faLinkedin, faWhatsapp} from  '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  whatsapp:IconDefinition=faWhatsapp;
  linkedIn:IconDefinition=faLinkedin;
  github:IconDefinition=faGithub;

  @Output() topAbout = new EventEmitter<any>();
  @Output() topStacks = new EventEmitter<any>();
  @Output() topProjects = new EventEmitter<any>();
  @Output() top = new EventEmitter<any>();

  constructor(){}

  about(){
    this.topAbout.emit(null);
  }

  stacks(){
    this.topStacks.emit(null);
  }

  projects(){
    this.topProjects.emit(null);
  }

  home(){
    this.top.emit(null);
  }
}
