import { Comment } from './Comment';
import { Category } from './Category';
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
     public  categoryId:number


     public  user:User

     public  category:Category
     public  comments:Array<Comment>


     constructor(){

     }
    //  public List<Comment> comments { get; set; }




}
