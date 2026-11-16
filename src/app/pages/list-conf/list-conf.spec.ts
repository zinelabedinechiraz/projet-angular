import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConf } from './list-conf';

describe('ListConf', () => {
  let component: ListConf;
  let fixture: ComponentFixture<ListConf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListConf],
    }).compileComponents();

    fixture = TestBed.createComponent(ListConf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
