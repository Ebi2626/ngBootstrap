import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  UserForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      username: new FormControl(''),
      remember: new FormControl(''),
    },
    { updateOn: 'change' }
  );

  onSubmit() {
    console.log(this.UserForm.getRawValue());
  }

  constructor() {}

  ngOnInit(): void {}
}
