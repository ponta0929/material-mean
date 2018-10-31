import { User } from "../class/user"

const users : User[] = [
   { id : 1, name : "田中　太郎", password : "001", orgName : "田中電気", avatorUrl : "" }
  ,{ id : 2, name : "松田　次郎", password : "002", orgName : "松田水道", avatorUrl : "" }
  ,{ id : 3, name : "神田　三子", password : "003", orgName : "神田鉄道", avatorUrl : "" }
  ,{ id : 4, name : "喜田　四朗", password : "004", orgName : "喜田建築", avatorUrl : "" }
  ,{ id : 5, name : "鎌田　五郎", password : "005", orgName : "鎌田新聞", avatorUrl : "" }
]

export class LoginConstService {

  constructor() { 
    console.log("create LoginConstService");
  }

  login(id : number, password : string) : User{
    var user = users.find( user => {
      if(user.id != id) return false;
      if(user.password !== password) return false;
      return true;
    });
    console.log(user);
    if(!user) {
      console.log("ログインに失敗しました");
    }
    return <User>user;
  }
}
