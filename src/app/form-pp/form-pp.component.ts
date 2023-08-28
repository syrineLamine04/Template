import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-pp',
  templateUrl: './form-pp.component.html',
  styleUrls: ['./form-pp.component.css']
})
export class FormPpComponent implements OnInit {
  
  Enregistrer!: FormGroup;
  banques!: FormArray;
 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Enregistrer = this.formBuilder.group({
      step1: this.formBuilder.group({
        firstname: [''],
        lastname: [''],
        ddn: [''],
        Nationalite: [''],
        AdressePersonnelle: [''],
        AdresseCourrier: [''],
        Resident: [''],
        PaysResidence: [''],
        phone: [''],
        doc: [''],DocumentType: [''],
        DateEmission: [''],LieuEmission: [''],AdresseEmail: [''],
        PPE: [''],Fonction: [''],
        PPI: [''],pays: [''],
        raison: [''],
        AgentType: [''],
        employeur: [''],adressePro: [''],
        telFaxPro: [''],emailPro: [''],
        typeActivite: [''],zoneActivite: [''],

      }),
      step2: this.formBuilder.group({
        niveauCompte: [''],
        virementInterne: [''],
        virementBancaire: [''],
        autreMoyenPaiement: [''],
        autreMoyenPaiementText: [''],
        montantsJournaliers: [''],
        montantsHebdomadaires: [''],
        montantsMensuels: [''],

        cash: [''],
        virementdebit: [''],
        autreMoyendebit: [''],
        autreMoyendebitText: [''],
        montantsJournaliersdebit: [''],
        montantsHebdomadairesdebit: [''],
        montantsMensuelsdebit: [''],
        virementespeces: [''],
        RevenusPro: [''],
        ProduitInvestissement: [''],
        autresource: [''],
        autreSourceText: [''],
        
        
      }),
      step3: this.formBuilder.group({
        banques: this.formBuilder.array([]) // Initialize an empty form array for banques
      }),
      step4: this.formBuilder.group({
        certification: [false, Validators.requiredTrue],
        nomPrenomAgent: ['', Validators.required],
        datesubmit: ['', Validators.required],
      })
    });

    this.banques = this.Enregistrer.get('step3.banques') as FormArray;
  }

  ajouterBanque(): void {
    this.banques.push(this.createBanqueFormGroup());
  }

  supprimerBanque(index: number): void {
    this.banques.removeAt(index);
  }

  createBanqueFormGroup(): FormGroup {
    return this.formBuilder.group({
      banque: ['', Validators.required],
      adresse: ['', Validators.required],
      bic: ['', Validators.required],
      rib: ['', Validators.required]
    });
  }

  


 
  

  get step1form(){
    return this.Enregistrer.get("step1") as FormGroup;
  }
  get step2form(){
    return this.Enregistrer.get("step2") as FormGroup;
  }
  get step3form(){
    return this.Enregistrer.get("step3") as FormGroup;
  }
  get step4form(){
    return this.Enregistrer.get("step4") as FormGroup;
  }
  HandleSubmit() {
    if (this.Enregistrer.valid) {
      console.log(this.Enregistrer.value);
    }
  }
}