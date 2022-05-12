import { Popup } from './Popup.js';

export class PopupWithImage extends Popup{
    constructor (popupSelector){
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__view-image');
        this._title = this._popup.querySelector('.popup__view-title');
    }

    open({name, link}){
        this._title.textContent = name;
        this._image.alt = name
        this._image.src = link;
        super.open();
    }
}