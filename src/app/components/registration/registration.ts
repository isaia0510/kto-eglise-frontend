import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FoyerStep } from './steps/foyer-step/foyer-step';
import { ParentsStep } from './steps/parents-step/parents-step';
import { ChildrenStep } from './steps/children-step/children-step';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FoyerStep, ParentsStep, ChildrenStep],
  templateUrl: './registration.html',
})
export class Registration implements OnInit{
  registrationForm: FormGroup;
  currentStep = 1;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      foyer: this.fb.group({
        lot: [''], toerana: [''], fokontany: [''], commune: [''], apv: [''],
        itompokolahy: [''], itompokovavy: [''], atoaRamatoa: [''],
        solotena: [''], telephone: ['']
      }),
      parents: this.fb.group({
        ray: this.fb.group({ anarana: [''], fanampiny: [''], datyNahaterahany: [''], asa: [''], rayFeno: [''], renyFeno: [''], tel: [''], email: [''], sakrameta: [[]], fikambanana: [''], vaomiera: [''] }),
        reny: this.fb.group({ anarana: [''], fanampiny: [''], datyNahaterahany: [''], asa: [''], rayFeno: [''], renyFeno: [''], tel: [''], email: [''], sakrameta: [[]], fikambanana: [''], vaomiera: [''] }),
        mariage: this.fb.group({
          vitaSoratra: [false],
          dateCivil: [null],

          vitaMariazy: [false],
          dateReligieux: [null],

          mariazyKatolika: [false],
          churchName: [''],

          maritalStatus: [null]
        })
      }),
      enfants: this.fb.array([])
    });
  }

  ngOnInit(): void {
      
  }

  nextStep() {if (this.currentStep < 3) this.currentStep++;}
  prevStep() {if (this.currentStep > 1) this.currentStep--;}

  onSubmit() {
    // nous allons faire un logger pour ne pas utiliser console.log pour mieux retracer les problèmes
  }
}
