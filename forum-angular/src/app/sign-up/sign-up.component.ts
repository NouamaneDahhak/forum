import { User } from './../DTO/User';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  edit=true;
  idUser = null;
    message = '';
    importForm = this.formBuilder.group({

    id:  ['',],
    email:  ['',Validators.required],
    password : ['',Validators.required],
    username : ['',Validators.required],
    categoryId : ['',Validators.required],
    nomEntreprise   : ['',],
    Nom             : ['',],
    prenom          : ['',],
    emailSecondaire : ['',],
    adresse         : ['',],
    pays            : ['',],
    Region          : ['',],
    codePostal      : ['',],
    ville           : ['',],
    telephone1      : ['',],
    telephone2      : ['',],
    metier          : ['',],

  });
  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.edit = this.route.snapshot.data['update']
    if(localStorage.getItem('userId') != undefined){

    }
    if(this.edit){
      this.idUser = this.route.snapshot.paramMap.get('idUser')
      this.servicesService.GetUserById(this.idUser).subscribe((user:User)=>{

        console.log(user);
            this.importForm.get('id').setValue(user.id);
            this.importForm.get('email').setValue(user.email);
            this.importForm.get('password').setValue(user.password);
            this.importForm.get('username').setValue(user.username);
            this.importForm.get('categoryId').setValue(user.Usertype);
            this.importForm.get('nomEntreprise').setValue(user.nomEntreprise);
            this.importForm.get('Nom').setValue(user.nom);
            this.importForm.get('prenom').setValue(user.prenom);
            this.importForm.get('emailSecondaire').setValue(user.emailSecondaire);
            this.importForm.get('adresse').setValue(user.adresse);
            this.importForm.get('pays').setValue(user.pays);
            this.importForm.get('Region').setValue(user.region);
            this.importForm.get('codePostal').setValue(user.codePostal);
            this.importForm.get('ville').setValue(user.ville);
            this.importForm.get('telephone1').setValue(user.telephone1);
            this.importForm.get('telephone2').setValue(user.telephone2);
            this.importForm.get('metier').setValue(user.metier);
      })
    }
  }
  CreateUser(){
    if(this.edit){

      console.log(user);
      var user =new User() ;
      user.id = this.importForm?.value?.id
      user.email            =  this.importForm?.value?.email
      user.password         =  this.importForm?.value?.password
      user.username         =  this.importForm?.value?.username
      user.Usertype         =  this.importForm?.value?.categoryId

      user.nomEntreprise    =  this.importForm?.value?.nomEntreprise
      user.nom              =  this.importForm?.value?.Nom
      user.prenom           =  this.importForm?.value?.prenom
      user.emailSecondaire  =  this.importForm?.value?.emailSecondaire
      user.adresse          =  this.importForm?.value?.adresse
      user.pays             =  this.importForm?.value?.pays
      user.region           =  this.importForm?.value?.Region
      user.codePostal       =  this.importForm?.value?.codePostal
      user.ville            =  this.importForm?.value?.ville
      user.telephone1       =  this.importForm?.value?.telephone1
      user.telephone2       =  this.importForm?.value?.telephone2
      user.metier           =  this.importForm?.value?.metier
      this.servicesService.UpdateUser(this.idUser, user).subscribe((payload=>{
             location.reload();
      }))

    }
    else{
    var user = new User();
    user.email            =  this.importForm?.value?.email
    user.password         =  this.importForm?.value?.password
    user.username         =  this.importForm?.value?.username
    user.Usertype         =  this.importForm?.value?.categoryId

    user.nomEntreprise    =  this.importForm?.value?.nomEntreprise
    user.nom              =  this.importForm?.value?.Nom
    user.prenom           =  this.importForm?.value?.prenom
    user.emailSecondaire  =  this.importForm?.value?.emailSecondaire
    user.adresse          =  this.importForm?.value?.adresse
    user.pays             =  this.importForm?.value?.pays
    user.region           =  this.importForm?.value?.Region
    user.codePostal       =  this.importForm?.value?.codePostal
    user.ville            =  this.importForm?.value?.ville
    user.telephone1       =  this.importForm?.value?.telephone1
    user.telephone2       =  this.importForm?.value?.telephone2
    user.metier           =  this.importForm?.value?.metier

    this.servicesService.CreateUser(user).subscribe((user)=>{
      if(user["id"] != null){
       localStorage.setItem('userId', user["id"].toString());
       this.router.navigate(["/"]);

      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })
  }
}
}
