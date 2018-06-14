import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { SharedModule} from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
signInForm: FormGroup
  constructor(public fb: FormBuilder, 
 private auth: AuthService, 
 private router: Router
  	) { 
  	this.signInForm = this.fb.group({
  		email: ['', [Validators.email, Validators.required]],
  		password: ['', []]
  	})
  }

  ngOnInit() {
  }

}
