
import {Component, OnInit,ViewChild} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import * as intlInput from 'intl-tel-input';
import { NgSignaturePadOptions,SignaturePadComponent } from '@almothafar/angular-signature-pad/public-api';
import {PointGroup} from 'signature_pad'

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

  isDrawn=false;
  private history:PointGroup[]=[];
  private future:PointGroup[]=[];
  @ViewChild('signature')
  public signaturePad!:SignaturePadComponent;
  public signaturePadOption:NgSignaturePadOptions={
    minWidth:1,
    canvasWidth:300,
    canvasHeight:150,
    penColor:'black',
    backgroundColor:'white',
    dotSize:1,
    maxWidth:1,
    velocityFilterWeight:1
  };

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
    this.isDrawn=true;
  };

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);

  };

  clear(){
    this.history=[];
    this.future=[];
    this.signaturePad.clear();
  }
  redo(){
    if(this.history.length>=0 && this.future.length>0){
      var data = this.signaturePad.toData();
      if(data||data==undefined){
        const adddata:any=this.future.pop();
        data.push(adddata);
      
      }
      this.signaturePad.fromData(data);
    }
  }
  undo(){
    var data = this.signaturePad.toData();
    if(data||data==undefined){
      const lastStrock:any = this.history.pop();
      const removedStrock:any =data.pop();
      this.future.push(removedStrock);
      this.signaturePad.fromData(data);   
  }}
  savePNG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/png');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.png';
    link.click();

  }
  saveJPEG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.jpeg';
    link.click();
    
  }
  saveSVG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/svg');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.svg';
    link.click();
    
  }

  preDefinedSignatureData:PointGroup[]=[]
  ngAfterViewInit(){
    this.signaturePad.set('minwidth',5);
    this.signaturePad.fromData(this.preDefinedSignatureData);
    const canvas = this.signaturePad.getCanvas();
    if (canvas){
      const ctx=canvas.getContext('2d');
      if (ctx){
        const text ="Signature ______________________________";
        const x=20;
        const y=canvas.height-40;
        ctx.font="16px Arial";
        ctx.fillStyle="black";
        ctx.fillText(text,x,y);


      }
        
    }}



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


