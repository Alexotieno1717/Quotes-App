export class Quotes {
    showDescription: boolean;
    constructor(public id:number, public name:string,  public quoteTitile:string,  public quoteMessage:string, public likes:number, public dislikes:number){ 
        this.showDescription=false;
    }
}
