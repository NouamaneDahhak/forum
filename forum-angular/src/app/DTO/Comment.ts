import { User } from './User';
export class Comment
{

     public  Id :number
     public  postId :number
     public  userId :number

     public  content :string
     public  img :string

     public  date :string



     public  comment :Comment


     public  user :User

     constructor(){

     }


}
