import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  typingRoles = [
    'Senior DevOps Developer',
    'Site Reliability Engineer',
    'Cloud Infrastructure Expert',
    'DevSecOps Specialist',
    'Kubernetes Architect',
    'CI/CD Pipeline Engineer'
  ];
  typingText = '';
  isDeleting = false;
  roleIndex = 0;
  charIndex = 0;

  contactForm: FormGroup;
  formSuccess = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.initTypingAnimation();
  }

  private initTypingAnimation(): void {
    const currentRole = this.typingRoles[this.roleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.typingText = currentRole.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.typingText = currentRole.substring(0, this.charIndex);
    }

    let timeout = 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      timeout = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.typingRoles.length;
      timeout = 500;
    }

    setTimeout(() => this.initTypingAnimation(), timeout);
  }

  submitContactForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.http.post(`${environment.apiUrl}/contact`, this.contactForm.value).subscribe({
      next: () => {
        this.formSuccess = true;
        this.contactForm.reset();
        setTimeout(() => (this.formSuccess = false), 5000);
      },
      error: () => {
        this.formSuccess = false;
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
