export class UserInfo {
    constructor({selectorName, selectorAbout}) {
        this._name = document.querySelector(selectorName);
        this._about = document.querySelector(selectorAbout);
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }
}