import { User } from './User';
export class Post
{

     public  Id :number;
     public  userId :number
     public  title :string
     public  content :string
     public  img :string
     public  date :string
     public  views:string
     public  nbComment:string

     public  user:User

     constructor(){

     }
    //  public List<Comment> comments { get; set; }




}
