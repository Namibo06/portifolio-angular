import { Component, EventEmitter, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  open_menu:IconDefinition=faBars;
  menu_mobile:boolean=false;

  @Output() downAbout = new EventEmitter<any>();
  @Output() downStacks = new EventEmitter<any>();
  @Output() downProjects = new EventEmitter<any>();

  constructor(){}

  open_menu_mobile(){
    this.menu_mobile=true;
  }

  close_menu_mobile(){
    this.menu_mobile=false;
  }

  about(){
    this.downAbout.emit(null);
  }

  stacks(){
    this.downStacks.emit(null);
  }

  projects(){
    this.downProjects.emit(null);
  }
}
