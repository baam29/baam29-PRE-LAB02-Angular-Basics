import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Brent Mar Balajadia';
  location = 'Porac, Pampanga';
  email = 'bsbalajadia@student.hau.edu.ph';
  phone = '0992 852 4958';

  profile = 'I am a WEBDEV student, already in thrid year. Im currently studying Advanced Dynamic Web Application. This subject is fun to do.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'VUE',
    'Angular',
    'PHP'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
