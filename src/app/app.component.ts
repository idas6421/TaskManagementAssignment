import { Component } from '@angular/core';
import { Theme } from './model/theme';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableThemes: Theme[];
  activeTheme: Theme;

  constructor(private themeService: ThemeService) {
    this.availableThemes = this.themeService.getAvailableThemes();
    this.activeTheme = this.themeService.getActiveTheme();
  }

  toggleTheme(theme: Theme) {    
    this.themeService.setActiveTheme(theme);
    this.activeTheme = theme;
  }
}
