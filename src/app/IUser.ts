export interface IUser {
  firstName: string;
  lastName: string;
  username:string; //Se dung nickname lam userName
  email: string;
  phoneNumber:string;
  password: string;
  birthDay: Date;
  status?:boolean; //Su dung status de admin co quyen blog tai khoan nay
  avatar?: string;
}
