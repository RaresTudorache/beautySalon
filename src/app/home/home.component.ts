import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set your default language here
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
}

}
