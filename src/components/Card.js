export class Card {
    constructor({data, handleCardClick}, cardSelector){
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate(){
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    generateCard(){
        this._element = this._getTemplate();
        this._eventLike();
        this._eventDeleteCard();
        this._eventViewCard()
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._element.querySelector('.card__name').textContent = this._name;

        return this._element;
    }

    _eventLike(){
        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._handleLike();
        });
    }

    _eventDeleteCard(){
        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCard()
        });
    }


    _eventViewCard(){
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleCardClick({name: this._name, link: this._link});
        });
    }

    _handleLike(){
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _handleDeleteCard(){
        this._element.remove();
    }
}




