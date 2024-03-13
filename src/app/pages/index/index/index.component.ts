import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faCss3, faHtml5, faJava, faJs, faLaravel, faPhp, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
  html:IconDefinition=faHtml5;
  css:IconDefinition=faCss3;
  sass:IconDefinition=faSass;
  js:IconDefinition=faJs;
  angular:IconDefinition=faAngular;
  php:IconDefinition=faPhp;
  laravel:IconDefinition=faLaravel;
  java:IconDefinition=faJava;
  database:IconDefinition=faDatabase;
}
