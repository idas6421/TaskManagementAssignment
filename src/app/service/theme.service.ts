import { Injectable } from '@angular/core';
import { base, dark, Theme } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme =  base;

  private availableThemes: Theme[] = [base, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setBaseTheme(): void {
    this.setActiveTheme(base);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
