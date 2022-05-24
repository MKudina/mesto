export class UserInfo {
    constructor({selectorName, selectorAbout, selectorAvatar}) {
        this._name = document.querySelector(selectorName);
        this._about = document.querySelector(selectorAbout);
        this._avatar = document.querySelector(selectorAvatar);
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            avatarLink: this._avatar.src
        }
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setAvatar(data){
        this._avatar.src = data.avatar;
        
    }
}