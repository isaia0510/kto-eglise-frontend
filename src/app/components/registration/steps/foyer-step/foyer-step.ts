import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foyer-step',
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './foyer-step.html',
})
export class FoyerStep {
  @Input() parentForm!: any;
}