import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlDetailsFormComponent } from './xml-details-form.component';

describe('XmlDetailsFormComponent', () => {
  let component: XmlDetailsFormComponent;
  let fixture: ComponentFixture<XmlDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XmlDetailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
