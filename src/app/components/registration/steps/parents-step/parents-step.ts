import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import {ChangeDetectorRef} from "@angular/core";
import { UtilService, Sakrameta, Fikambanana, Vaomiera, MaritalStatus } from '../../../../services/util';

@Component({
  selector: 'app-parents-step',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parents-step.html',
})
export class ParentsStep {
  @Input() parentForm!: FormGroup;

  get mariageForm(): FormGroup {
    return this.parentForm.get('mariage') as FormGroup;
  }

  listeSakrameta: Sakrameta[] = [];
  listeFikambanana: Fikambanana[] = [];
  listeVaomiera: Vaomiera[] = [];
  listeMaritalStatus: MaritalStatus[] = [];

  constructor(private utilService: UtilService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.chargerDonnees();
  }

  private chargerDonnees(): void {
    this.utilService.getSakrameta().subscribe({
      next: (data) => {
        console.log('sakrameta', data);
        this.listeSakrameta = data;
      }
    });

    this.utilService.getFikambanana().subscribe({
      next: (data) => {
        console.log('fikambanana', data);
        this.listeFikambanana = data;
        this.cdRef.detectChanges();
      },
      error: (err) => console.error('Erreur Fikambanana:', err)
    });

    this.utilService.getVaomiera().subscribe({
      next: (data) => {
        console.log('vaomiera', data);
        this.listeVaomiera = data;
        this.cdRef.detectChanges();
      },
      error: (err) => console.error('Erreur Vaomiera:', err)
    });

    this.utilService.getMaritalStatuses().subscribe({
      next: (data) => {
        console.log('marital statuses', data);
        this.listeMaritalStatus = data;
        this.cdRef.detectChanges();
      },
      error: (err) => console.error('Erreur Marital Status:', err)
    });
  }

  onCheckboxChange(event: any, id: string, parent: 'ray' | 'reny'): void {
    const control = this.parentForm.get(`${parent}.sakrameta`);
    const selected: string[] = control?.value || [];

    if (event.target.checked) {
      if (!selected.includes(id)) {
        selected.push(id);
      }
    } else {
      const index = selected.indexOf(id);
      if (index > -1) selected.splice(index, 1);
    }

    control?.setValue([...selected]);
  }

  isSakrametaChecked(
    sakrametaId: string ,
    parent: 'ray' | 'reny'
  ): boolean {

    if (sakrametaId === undefined) return false;

    const selected: string[] =
      this.parentForm.get(`${parent}.sakrameta`)?.value || [];

    return selected.includes(sakrametaId);
  }
}
