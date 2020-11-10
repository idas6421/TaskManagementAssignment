import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { Theme, base, dark } from '../model/theme';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(()=>{
    service = TestBed.get(ThemeService);  
  });
   
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be available themes', () => {
    const availableTheme: Theme[] = [base, dark];
    expect(service.getAvailableThemes()).toEqual(availableTheme);
  });

  it("should be active theme", ()=>{
    const active: Theme = base;
    expect(service.getActiveTheme()).toBe(active);
  });

  it('should set base theme',()=>{
    const theme: Theme = base;
    service.setBaseTheme();
    expect(service.getActiveTheme()).toBe(theme);
  });

  it('should set dark theme',()=>{
    const theme: Theme = dark;
    service.setDarkTheme();
    expect(service.getActiveTheme()).toBe(theme);
  });

  it('should set base/dark theme',()=>{
    const theme: Theme = dark;
    service.setActiveTheme(theme);
    expect(service.getActiveTheme()).toBe(theme);
  });
});
