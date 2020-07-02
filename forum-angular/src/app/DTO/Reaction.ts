import { Post } from './Post';
import { Comment } from './Comment';
import { Category } from './Category';
import { User } from './User';
export class Reaction
{

  public  Id :number

  public  like :boolean

  public  date:string
  public  post:Post

  public  user:User

  public  postId:number
 public   userId:number
     constructor(){

     }
    //  public List<Comment> comments { get; set; }




}
