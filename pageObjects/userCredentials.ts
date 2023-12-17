
class UserCredentials {
    readonly userLoginName: string;
    readonly userPassword: string;
    readonly userLoginLockedName: string;

    constructor(){
        this.userLoginName = "standard_user";
        this.userPassword = "secret_sauce"
        this.userLoginLockedName = "locked_out_user";
    }
}