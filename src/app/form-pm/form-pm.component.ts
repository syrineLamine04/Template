
import {Component, OnInit} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import * as intlInput from 'intl-tel-input';
 
@Component({
  selector: 'app-form-pm',
  templateUrl: './form-pm.component.html',
  styleUrls: ['./form-pm.component.css']
})
export class FormPMComponent implements OnInit {
  selectedDate: any;

ajouterDate(event: MatDatepickerInputEvent<Date>) {
  this.selectedDate = event.value;}
  produits :any[]=[];
  banques: any[] = []; 
  associes: any[] = []; 
  beneficiaires : any []=[];
  filiales : any []=[];
  questions: string[] = [
    "La société a-t-elle connu des changements majeurs de la structure de son capital durant les 3 dernières années?",
    "La société a-t-elle changé de secteur d'activité durant ces dernières années?",
    "La société a-t-elle enregistré des incidents influençant sa réputation sur le marché?",
    "La société a-t-elle connu des difficultés financières durant ces dernières années?"
  ];
  reponses: { [question: string]: string } = {};
  selectedOptions: { [question: string]: string } = {};

  choisirReponse(question: string, reponse: string) {
    this.reponses[question] = reponse;
    this.selectedOptions[question] = reponse;
  }
  ajouterProduit() {
    this.produits.push({
      nom: ''
      
    });}
  ajouterBanque() {
    this.banques.push({
      banque: '',
      adresse: '',
      bic: '',
      rib: '',
      pourcentage: ''
    });}

    ajouterAssocie(){
      this.associes.push({
        NomPrenom :'',
        pourcentageCapitale:'',
        dateNaissance :'',
        lieuNaissance:'',
        nationalite:'',
        numID:'',
        dateEmission :'',
        lieuEmission:'',
        adresse :'',

      })
    }
    ajouterBeneficiaire(){
      this.beneficiaires.push({
        NomPrenom :'',
        dateNaissance :'',
        lieuNaissance:'',
        nationalite:'',
        numID:'',
        dateEmission :'',
        lieuEmission:'',
        adresse :'',

      })
    }
    ajouterFiliale(){
      this.filiales.push({
      SociétésAffilees:'',
      secteurActivite:'',
      capitalDetenue:'',})
    }

    currentYear : any;

  constructor(private datePipe: DatePipe) {
    this.ajouterBanque();
    this.ajouterAssocie();
    this.ajouterBeneficiaire();
    this.ajouterFiliale();
    this.currentYear = this.datePipe.transform(new Date(), 'yyyy');
    this.ajouterProduit();
  }

  ngOnInit():void {
    const inputElement = document.getElementById('phone');
    if (inputElement){
      intlInput(inputElement,{
      initialCountry:'TN',
      separateDialCode:true,
      utilsScript:'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js '});

    }
  }

}