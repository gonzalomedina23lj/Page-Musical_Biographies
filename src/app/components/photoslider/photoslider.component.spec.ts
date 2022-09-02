import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosliderComponent } from './photoslider.component';

describe('PhotosliderComponent', () => {
  let component: PhotosliderComponent;
  let fixture: ComponentFixture<PhotosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
