import {User} from "firebase";

export class Evennement{
    titre:string;
    proprietaire:User;
    dateDemande:string=new Date().toDateString();
    dateProposition:Date;
    description:string;
}