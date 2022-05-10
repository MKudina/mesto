import { Popup } from './Popup.js';

export class PopupWithImage extends Popup{
    constructor (popupSelector){
        super(popupSelector);
        this._image = this._popupSelector.querySelector('.popup__view-image');
        this._title = this._popupSelector.querySelector('.popup__view-title');
    }

    openViewImage({name, link}){
        this._title.textContent = name;
        this._image.alt = name
        this._image.src = link;
        super.openPopup();
    }
}