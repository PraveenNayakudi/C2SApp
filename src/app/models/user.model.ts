export class User {
    constructor(
        public username:string, 
        private _token:string, 
        private expirationDate:Date
        ){}

        get token(){
            if( new Date() > this.expirationDate){
                console.log('token expired')
                return null
            }
            console.log('token valid')
            // console.log(this._token)
            return this._token;
        }
}