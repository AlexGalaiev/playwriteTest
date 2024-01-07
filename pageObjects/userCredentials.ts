
export class UserCredentials {
    public userLoginName: string;
    public userPassword: string;
    public userLoginLockedName: string;

    constructor(){
        this.userLoginName = "standard_user";
        this.userPassword = "secret_sauce"
        this.userLoginLockedName = "locked_out_user";
    }

}