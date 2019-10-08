import { Component, OnInit } from '@angular/core';
import { DateSerice } from '../services/date.service';
import {FormControl, FormGroup} from '@angular/forms';
import {combineLatest} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-date-inputs',
  templateUrl: './date-inputs.component.html',
  styleUrls: ['./date-inputs.component.css']
})
export class DateInputsComponent implements OnInit {

  dateFrom: Date;
  dateTo: Date;
  form: FormGroup;
  constructor(private dateService: DateSerice) { }

  ngOnInit() {
    this.form = new FormGroup({
      dateFrom: new FormControl(''),
      dateTo: new FormControl(null)
    });

    combineLatest(
      this.form.get('dateFrom').valueChanges,
      this.form.get('dateTo').valueChanges
    ).subscribe(data => {
      this.dateService.getDates(data);
    });
  }

}
