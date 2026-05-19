import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-parents-step',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parents-step.html',
})
export class ParentsStep {
  @Input() parentForm!: any;
}
