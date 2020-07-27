import { Post } from "./Post"
export class User
  {
       public id:number
       public username:string
       public password:string
       public email :string
       public img:string
       public Usertype:string


       public Posts :Array<Post>


         public  nomEntreprise      :string;
         public  nom                :string;
         public  prenom             :string;
         public  emailSecondaire    :string;
         public  adresse            :string;
         public  pays               :string;
         public  region             :string;
         public  codePostal         :string;
         public  ville              :string;
         public  telephone1         :string;
         public  telephone2         :string;
         public  metier             :string;

  }
