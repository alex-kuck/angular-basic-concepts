import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitMasterComponent } from './commit-master.component';

describe('CommitMasterComponent', () => {
  let component: CommitMasterComponent;
  let fixture: ComponentFixture<CommitMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
