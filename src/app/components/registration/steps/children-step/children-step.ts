import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-children-step',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './children-step.html',
})
export class ChildrenStep {
  @Input() formArrayEnfants!: any;
}
