import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import {register} from 'swiper/element/bundle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

register()

@NgModule({
  declarations: [IndexComponent],
  exports:[IndexComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
