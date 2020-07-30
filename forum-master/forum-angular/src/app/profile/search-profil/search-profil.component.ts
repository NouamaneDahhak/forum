import { User } from './../../DTO/User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-search-profil',
  templateUrl: './search-profil.component.html',
  styleUrls: ['./search-profil.component.css']
})
export class SearchProfilComponent implements OnInit {

  @ViewChild(MatPaginator)paginator: MatPaginator;

  dataSource : MatTableDataSource<User>;

  displayedColumns: string[] = ['username','nomEntreprise','Nom', 'password', 'Usertype','action'];
  Usertype = null;

  constructor(private router: Router,private formBuilder: FormBuilder, private servicesService: ServicesService) { }


  ngOnInit(): void {
    this.Usertype = localStorage.getItem('Usertype');

    this.servicesService.GetAllUsers().subscribe((payload=>{
      const Users = payload as Array<User>;

      this.dataSource = new MatTableDataSource(Users);
      this.dataSource.paginator = this.paginator;

    }))
  }

  deleteORC(row,index){



  }
  changeCaategory(user:User,type){
    console.log(user);
    var _user =new User() ;
    _user = user;
    _user.Usertype=type;
    this.servicesService.UpdateUser(user.id, _user).subscribe((payload=>{
           location.reload();
    }))

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
