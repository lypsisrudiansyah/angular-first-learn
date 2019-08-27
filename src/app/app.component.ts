import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName = 'Rudi';
  lastName: string;
  status: boolean;
  posts: object[];
  user = {
    username: '',
    password: ''
  };

  constructor() {
    console.log('constructor...');
    this.lastName = 'Oe ou';
    this.getUserStatus();

    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'}
    ];
  }

  displayFirstName() {
    return this.firstName;
  }

  getUserStatus() {
    this.status = false;
  }

  greetPerson() {
    console.log('Hi');
  }

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user);
  }

}
