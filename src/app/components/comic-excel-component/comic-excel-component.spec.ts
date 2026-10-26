import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicExcelComponent } from './comic-excel-component';

describe('ComicExcelComponent', () => {
  let component: ComicExcelComponent;
  let fixture: ComponentFixture<ComicExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicExcelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
