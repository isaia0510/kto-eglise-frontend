import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { UtilService, Genre, Sakrameta, Fikambanana, Vaomiera } from '../../../../services/util';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-children-step',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './children-step.html',
})
export class ChildrenStep implements OnInit {

  @Input() formArrayEnfants!: FormArray;
  enfantForm!: FormGroup;

  listeGenre: Genre[] = [];
  listeSakrameta: Sakrameta[] = [];
  listeFikambanana: Fikambanana[] = [];
  listeVaomiera: Vaomiera[] = [];

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {

    this.enfantForm = this.fb.group({
      anarana: [''],
      fanampiny: [''],
      genre: [null],
      datyNahaterahany: [''],
      telephone: [''],
      email: [''],

      sakrameta: this.fb.array([]),

      fikambanana: [''],
      vaomiera: [''],
      estMort: [false]
    });

    this.chargerDonnees();
  }

  get sakrametaArray(): FormArray {
    return this.enfantForm.get('sakrameta') as FormArray;
  }

  private chargerDonnees(): void {
    this.utilService.getGenres().subscribe(data => {
      this.listeGenre = data;
      this.cdRef.detectChanges();
    });

    this.utilService.getSakrameta().subscribe(data => {
      this.listeSakrameta = data;
      this.cdRef.detectChanges();
    });

    this.utilService.getFikambanana().subscribe(data => {
      this.listeFikambanana = data;
      this.cdRef.detectChanges();
    });
    
    this.utilService.getVaomiera().subscribe(data => {
      this.listeVaomiera = data;
      this.cdRef.detectChanges();
    });
  }

  ajouterEnfant(): void {
    const nouveauEnfant = this.fb.group({
      anarana: [this.enfantForm.value.anarana],
      fanampiny: [this.enfantForm.value.fanampiny],
      genre: [this.enfantForm.value.genre],
      datyNahaterahany: [this.enfantForm.value.datyNahaterahany],
      telephone: [this.enfantForm.value.telephone],
      email: [this.enfantForm.value.email],
      
      sakrameta: this.fb.array(
        this.sakrametaArray.controls.map(control => new FormControl(control.value))
      ),
      
      fikambanana: [this.enfantForm.value.fikambanana],
      vaomiera: [this.enfantForm.value.vaomiera],
      estMort: [this.enfantForm.value.estMort]
    });

    this.formArrayEnfants.push(nouveauEnfant);

    this.resetForm();
  }

  private resetForm(): void {
    this.enfantForm.reset({
      anarana: '',
      fanampiny: '',
      genre: null,
      datyNahaterahany: '',
      telephone: '',
      email: '',
      sakrameta: [],
      fikambanana: '',
      vaomiera: '',
      estMort: false
    });

    this.sakrametaArray.clear();
  }

  toggleSakrameta(id: string): void {
    const current = this.sakrametaArray.value ?? [];

    const index = current.indexOf(id);

    if (index === -1) {
      this.sakrametaArray.push(new FormControl(id));
    } else {
      this.sakrametaArray.removeAt(index);
    }
  }

  supprimerEnfant(index: number): void {
    this.formArrayEnfants.removeAt(index);
  }
}