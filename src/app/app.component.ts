import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCourseTest';
  constructor(private http : HttpClient){}
 ngOnInit(){
  this.http.get("http://starlord.hackerearth.com/bankAccount").subscribe((res) => console.log(res))

   firebase.initializeApp({
    apiKey: "AIzaSyBj2EMnzDJRsov7GH7azHKH9AFVKff9BWU",
    authDomain: "angular-test-4818f.firebaseapp.com",
    databaseURL: "https://angular-test-4818f.firebaseio.com",
    projectId: "angular-test-4818f",
    storageBucket: "angular-test-4818f.appspot.com",
    messagingSenderId: "591824599763",
    appId: "1:591824599763:web:4424aa8d62fac994b4b226",
    measurementId: "G-5LZSSB9M9L"
   });
 }
}
