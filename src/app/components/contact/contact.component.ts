import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  contactData: ContactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.contactData);
    // Reset form after submission
    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
  }
}