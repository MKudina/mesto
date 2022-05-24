export class Card {
    constructor({data, user, handleCardClick, handleDeleteCard, handleLikeClick}, cardSelector){
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;     
        this._handleDeleteCard = handleDeleteCard;
        this._user = user;   
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._handleLikeClick = handleLikeClick;
        this.likes = data.likes;
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
        this._cardImage = this._element.querySelector('.card__image')
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.card__name').textContent = this._name;
        this._eventViewCard()
        this._deleteIcon = this._element.querySelector('.card__delete-button');
        this._cardLike = this._element.querySelector('.card__like');
        this._cardNumberOfLike = this._element.querySelector('.card__number-of-likes');

        if(this.likes.length > 0){
            this._setLike()
        }
        if(this._ownerId !== this._user){
            this._deleteIcon.remove();
        }

        return this._element;
    }

    //Events

    _eventLike(){
        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._handleLikeClick(this)
        });
    }

    _eventDeleteCard(){
        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCard(this)
        });
    }

    deleteCard(){
        this._element.remove()
    }

    _eventViewCard(){
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick({name: this._name, link: this._link});
        });
    }

    //Handle like

    checkLike() {
        return this.likes.some(item => item._id === this._user)
    }

    _setLike(){
        if(this.checkLike()){
            this.like()
        }else {
            this.dislike()
        }
    }

    like(){
        this._cardLike.classList.add('card__like_active');
        this._cardNumberOfLike.textContent = this.likes.length;
    }
    

    dislike(){
        this._cardLike.classList.remove('card__like_active');
        this._cardNumberOfLike.textContent = this.likes.length;
        if(this.likes.length == 0){
            this._cardNumberOfLike.textContent = ''
        }   
    }
}




