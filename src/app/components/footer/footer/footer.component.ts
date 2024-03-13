import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faFacebook,faLinkedin, faWhatsapp} from  '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  whatsapp:IconDefinition=faWhatsapp;
  linkedIn:IconDefinition=faLinkedin;
  gmail:IconDefinition=faEnvelope;

  constructor(){}
}
