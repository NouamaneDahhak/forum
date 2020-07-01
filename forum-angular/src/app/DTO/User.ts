import { Post } from "./Post"
export class User
  {
       public Id:number
       public username:string
       public password:string
       public email :string
       public img:string

       public Posts :Array<Post>

  }
