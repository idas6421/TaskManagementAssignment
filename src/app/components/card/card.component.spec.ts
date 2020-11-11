import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Card } from 'src/app/model/card.model';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.dialog, "open");
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new card', () => {
    component.addCard();
    expect(component.addCard).toBeTruthy();
  });

  it('should edit already exists card', () => {
    const card = new Card(1, "Project Assignment");
    component.editCard(card);
    expect(component.editCard).toBeTruthy();
  });

  it('should delete already exists card', () => {
    const card = new Card(1, "Project Assignment");
    component.deleteCard(card);
    expect(component.deleteCard).toBeTruthy();
  });

  it('should handle drag and drop for same container', () => {
    const _obj = <CdkDropList>{ data: [1, 2, 3] };
    const _cdkDragDrop: CdkDragDrop<any> = {
      container: _obj,
      currentIndex: 1,
      previousIndex: 0,
      previousContainer: _obj,
      isPointerOverContainer: true,
      item: <CdkDrag>{}
    };
    component.drop(_cdkDragDrop);
    expect(component.drop).toBeTruthy();
  });

  it('should handle drag and drop for different container', () => {
    const _cdkDragDrop: CdkDragDrop<any> = {
      container: <CdkDropList>{ data: [1, 2, 3] },
      currentIndex: 1,
      previousIndex: 0,
      previousContainer: <CdkDropList>{ data: [1, 2 ] },
      isPointerOverContainer: true,
      item: <CdkDrag>{}
    };
    component.drop(_cdkDragDrop);
    expect(component.drop).toBeTruthy();
  });
});
