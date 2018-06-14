import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable,  of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {error} from 'util';


interface User {
	uid: string,
  email: string,
  photoURL?: string;
  displayName?: string;
}
@Injectable()
export class AuthService {
	user: Observable<User>
  constructor(
private afAuth: AngularFireAuth,
private afs: AngularFirestore,
private router: Router
  	) {
this.user = this.afAuth.authState.switchMap(user => {
	if (user){
		return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
	}else{
		return Observable.of(null)
	}
})
  	 }
  	 emailSignIn(email: string, password: string){
  	 	return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  	 	.then(() => console.log("You have succ. signed in"))
  	 	.catch(error => console.log(error.message))
  	 }
  	 signOut(){
  	 	return this.afAuth.auth.signOut()
  	 	.then(() => {
  	 		this.router.navigate(['/'])
  	 	})
  	 }
}
