/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": function() { return /* binding */ Api; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  } //checkError


  _createClass(Api, [{
    key: "_checkError",
    value: function _checkError(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    } //GET Profile

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "users/me"), {
        method: 'GET',
        headers: this._headers
      }).then(this._checkError);
    } //PATCH Profile

  }, {
    key: "editProfile",
    value: function editProfile(profileData) {
      return fetch("".concat(this._baseUrl, "users/me"), {
        method: 'PATCH',
        headers: {
          authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      }).then(this._checkError);
    } //PATCH Avatar

  }, {
    key: "editAvatar",
    value: function editAvatar(avatar) {
      return fetch("".concat(this._baseUrl, "users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatar)
      }).then(this._checkError);
    } //GET Cards

  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "cards"), {
        method: 'GET',
        headers: this._headers
      }).then(this._checkError);
    } //POST Card

  }, {
    key: "addCard",
    value: function addCard(cardData) {
      return fetch("".concat(this._baseUrl, "cards"), {
        method: 'POST',
        headers: {
          authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
      }).then(this._checkError);
    } //DELETE Card

  }, {
    key: "deleteCard",
    value: function deleteCard(idCard) {
      return fetch("".concat(this._baseUrl, "cards/").concat(idCard), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkError);
    } //PUT Like

  }, {
    key: "like",
    value: function like(idCard) {
      return fetch("".concat(this._baseUrl, "cards/").concat(idCard, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(this._checkError);
    } //DELETE Dislike

  }, {
    key: "dislike",
    value: function dislike(idCard) {
      return fetch("".concat(this._baseUrl, "cards/").concat(idCard, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkError);
    }
  }]);

  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var data = _ref.data,
        userId = _ref.userId,
        handleCardClick = _ref.handleCardClick,
        handleDeleteCard = _ref.handleDeleteCard,
        handleLikeClick = _ref.handleLikeClick;

    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handleLikeClick = handleLikeClick;
    this.likes = data.likes;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._eventLike();

      this._eventDeleteCard();

      this._cardImage = this._element.querySelector('.card__image');
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector('.card__name').textContent = this._name;

      this._eventViewCard();

      this._deleteIcon = this._element.querySelector('.card__delete-button');
      this._cardLike = this._element.querySelector('.card__like');
      this._cardNumberOfLike = this._element.querySelector('.card__number-of-likes');

      if (this.likes.length > 0) {
        this._setLike();
      }

      if (this._ownerId !== this._userId) {
        this._deleteIcon.remove();
      }

      return this._element;
    } //Events

  }, {
    key: "_eventLike",
    value: function _eventLike() {
      var _this = this;

      this._element.querySelector('.card__like').addEventListener('click', function () {
        _this._handleLikeClick(_this);
      });
    }
  }, {
    key: "_eventDeleteCard",
    value: function _eventDeleteCard() {
      var _this2 = this;

      this._element.querySelector('.card__delete-button').addEventListener('click', function () {
        _this2._handleDeleteCard(_this2);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._element.remove();
    }
  }, {
    key: "_eventViewCard",
    value: function _eventViewCard() {
      var _this3 = this;

      this._cardImage.addEventListener('click', function () {
        _this3._handleCardClick({
          name: _this3._name,
          link: _this3._link
        });
      });
    } //Handle like

  }, {
    key: "checkLike",
    value: function checkLike() {
      var _this4 = this;

      return this.likes.some(function (item) {
        return item._id === _this4._userId;
      });
    }
  }, {
    key: "_setLike",
    value: function _setLike() {
      if (this.checkLike()) {
        this.like();
      } else {
        this.dislike();
      }
    }
  }, {
    key: "like",
    value: function like() {
      this._cardLike.classList.add('card__like_active');

      this._cardNumberOfLike.textContent = this.likes.length;
    }
  }, {
    key: "dislike",
    value: function dislike() {
      this._cardLike.classList.remove('card__like_active');

      this._cardNumberOfLike.textContent = this.likes.length;

      if (this.likes.length == 0) {
        this._cardNumberOfLike.textContent = '';
      }
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(selectors, valideForm) {
    _classCallCheck(this, FormValidator);

    this._selectors = selectors;
    this._valideForm = valideForm;
    this._inputList = Array.from(this._valideForm.querySelectorAll(this._selectors.inputSelector));
    this._buttonElement = this._valideForm.querySelector(this._selectors.submitButtonSelector);
  }

  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._toggleButtonState();

      this._inputList.forEach(function (inputSelector) {
        inputSelector.addEventListener('input', function () {
          _this._checkInputValidity(inputSelector);

          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputSelector) {
      if (!inputSelector.validity.valid) {
        this._showError(inputSelector, inputSelector.validationMessage);
      } else {
        this._hideError(inputSelector);
      }
    }
  }, {
    key: "_showError",
    value: function _showError(inputSelector, errorMassage) {
      var errorElement = this._valideForm.querySelector(".".concat(inputSelector.id, "-error"));

      inputSelector.classList.add(this._selectors.inputErrorClass);
      errorElement.textContent = errorMassage;
      errorElement.classList.add(this._selectors.errorClass);
    }
  }, {
    key: "_hideError",
    value: function _hideError(inputSelector) {
      var errorElement = this._valideForm.querySelector(".".concat(inputSelector.id, "-error"));

      inputSelector.classList.remove(this._selectors.inputErrorClass);
      errorElement.classList.remove(this._selectors.errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        _this2._hideError(inputElement);
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._selectors.inactiveSubmitButtonClass);

        this._buttonElement.setAttribute('disabled', 'disabled');
      } else {
        this._buttonElement.classList.remove(this._selectors.inactiveSubmitButtonClass);

        this._buttonElement.removeAttribute('disabled', 'disabled');
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputSelector) {
        return !inputSelector.validity.valid;
      });
    }
  }]);

  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": function() { return /* binding */ Popup; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keyup', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evn) {
      if (evn.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var _this = this;

      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._popupForm = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._popup.querySelectorAll('.popup__input');
    _this._submitButton = _this._popup.querySelector('.popup__submit');
    _this._handleFormSubmit = handleFormSubmit;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "renderLoanding",
    value: function renderLoanding(isLoanding, text) {
      if (isLoanding) {
        this._submitButton.textContent = text;
      } else {
        this._submitButton.textContent = text;
      }
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._formValues = {};

      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });

      return this._formValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupForm.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListener", this).call(this);

      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._handleFormSubmit(_this3._getInputValues());
      });
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector('.popup__view-image');
    _this._title = _this._popup.querySelector('.popup__view-title');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var name = _ref.name,
          link = _ref.link;
      this._title.textContent = name;
      this._image.alt = name;
      this._image.src = link;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithSubmit": function() { return /* binding */ PopupWithSubmit; }
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);

  var _super = _createSuper(PopupWithSubmit);

  function PopupWithSubmit(_ref, popupSelector) {
    var _this;

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithSubmit);

    _this = _super.call(this, popupSelector);
    _this._submitButton = _this._popup.querySelector('.popup__submit');
    _this._handleFormSubmit = handleFormSubmit;
    return _this;
  }

  _createClass(PopupWithSubmit, [{
    key: "open",
    value: function open(card) {
      this.card = card;

      _get(_getPrototypeOf(PopupWithSubmit.prototype), "open", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListener", this).call(this);

      this._submitButton.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2._handleFormSubmit();
      });
    }
  }]);

  return PopupWithSubmit;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(dataArray) {
      var _this = this;

      dataArray.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);

  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var selectorName = _ref.selectorName,
        selectorAbout = _ref.selectorAbout,
        selectorAvatar = _ref.selectorAvatar;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorAbout);
    this._avatar = document.querySelector(selectorAvatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent,
        avatarLink: this._avatar.src
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._name.textContent = data.name;
      this._about.textContent = data.about;
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(data) {
      this._avatar.src = data.avatar;
    }
  }]);

  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formPopupAddCard": function() { return /* binding */ formPopupAddCard; },
/* harmony export */   "formPopupProfile": function() { return /* binding */ formPopupProfile; },
/* harmony export */   "formPopupProfileAvatar": function() { return /* binding */ formPopupProfileAvatar; },
/* harmony export */   "inputAboutProfile": function() { return /* binding */ inputAboutProfile; },
/* harmony export */   "inputAvatarProfile": function() { return /* binding */ inputAvatarProfile; },
/* harmony export */   "inputNameProfile": function() { return /* binding */ inputNameProfile; },
/* harmony export */   "popupAddCardOpenButton": function() { return /* binding */ popupAddCardOpenButton; },
/* harmony export */   "popupInputSelectors": function() { return /* binding */ popupInputSelectors; },
/* harmony export */   "popupProfileAvatarOpenButton": function() { return /* binding */ popupProfileAvatarOpenButton; },
/* harmony export */   "popupProfileOpenButton": function() { return /* binding */ popupProfileOpenButton; }
/* harmony export */ });
var popupInputSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveSubmitButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}; //Profile

var profile = document.querySelector('.profile'); //popups

var popupEditProfile = document.querySelector('.popup_profile');
var popupAddCard = document.querySelector('.popup_add-card');
var popupEditAvatar = document.querySelector('.popup_edit-avatar'); //popups open buttons

var popupProfileOpenButton = profile.querySelector('.profile__edit-button');
var popupAddCardOpenButton = profile.querySelector('.profile__add-button');
var popupProfileAvatarOpenButton = profile.querySelector('.profile__edit-avatar-button'); //popups input

var inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
var inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about');
var inputAvatarProfile = popupEditAvatar.querySelector('.popup__input_type_link'); //popups form

var formPopupProfile = popupEditProfile.querySelector('.popup__form');
var formPopupAddCard = popupAddCard.querySelector('.popup__form');
var formPopupProfileAvatar = popupEditAvatar.querySelector('.popup__form');


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_PopupWithSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PopupWithSubmit */ "./src/components/PopupWithSubmit.js");









 //ID = 6400895500d2623621312988

var userId;
var validationAddCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupAddCard);
var validationProfileEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupProfile);
var validationProfieEditAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupProfileAvatar);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.UserInfo({
  selectorName: '.profile__name',
  selectorAbout: '.profile__about',
  selectorAvatar: '.profile__avatar'
}, userId);
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithImage('.popup_view-image');
var api = new _components_Api__WEBPACK_IMPORTED_MODULE_1__.Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: '105cfc4a-f759-497b-8721-ac1b8fdd890e'
  }
}); //PopupCard

var popupAddCardForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputsValues) {
    popupProfileForm.renderLoanding(true, 'Создается...');
    api.addCard(inputsValues).then(function (responseData) {
      var card = createCard({
        name: responseData.name,
        link: responseData.link,
        owner: responseData.owner,
        _id: responseData._id,
        likes: responseData.likes
      }, userId, '.cards-template_type_default');
      section.addItem(card);
      popupAddCardForm.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupProfileForm.renderLoanding(false, 'Создать');
    });
  }
}, '.popup_add-card'); // 1

var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.Section({
  renderer: function renderer(data) {
    var card = createCard(data, userId, '.cards-template_type_default');
    section.addItem(card);
  }
}, '.cards-template_type_default'); // 2

function createCard(data, userId, cardSelector) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__.Card({
    data: data,
    userId: userId,
    handleCardClick: function handleCardClick() {
      return popupWithImage.open(data);
    },
    handleDeleteCard: function handleDeleteCard(card) {
      return deleteCard.open(card);
    },
    handleLikeClick: function handleLikeClick(card) {
      if (!card.checkLike()) {
        api.like(data._id).then(function (responseData) {
          card.likes = responseData.likes;
          card.like();
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        api.dislike(data._id).then(function (responseData) {
          card.likes = responseData.likes;
          card.dislike();
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, cardSelector);
  var cardElement = card.generateCard();
  return cardElement;
}

var deleteCard = new _components_PopupWithSubmit__WEBPACK_IMPORTED_MODULE_9__.PopupWithSubmit({
  handleFormSubmit: function handleFormSubmit() {
    api.deleteCard(deleteCard.card._cardId).then(function () {
      return deleteCard.card.deleteCard();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      deleteCard.close();
    });
  }
}, '.popup_submit');
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupAddCardOpenButton.addEventListener('click', function () {
  validationAddCard.resetValidation();
  popupAddCardForm.open();
}); //PopupProfile

var popupProfileForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputValues) {
    popupProfileForm.renderLoanding(true, 'Сохранить...');
    api.editProfile(inputValues).then(function (responseData) {
      userInfo.setUserInfo(responseData);
      popupProfileForm.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupProfileForm.renderLoanding(false, 'Сохранить');
    });
  }
}, '.popup_profile');
var popupProfileAvatarForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputValue) {
    popupProfileAvatarForm.renderLoanding(true, 'Сохранить...');
    api.editAvatar(inputValue).then(function (responseData) {
      userInfo.setAvatar(responseData);
      popupProfileAvatarForm.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupProfileAvatarForm.renderLoanding(false, 'Сохранить');
    });
  }
}, '.popup_edit-avatar');
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupProfileOpenButton.addEventListener('click', function () {
  validationProfileEdit.resetValidation();
  var userInfomation = userInfo.getUserInfo();
  var userName = userInfomation.name;
  var userAbout = userInfomation.about;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputNameProfile.value = userName;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputAboutProfile.value = userAbout;
  popupProfileForm.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupProfileAvatarOpenButton.addEventListener('click', function () {
  validationProfieEditAvatar.resetValidation();
  var avatarInformation = userInfo.getUserInfo();
  var avatarLink = avatarInformation.avatarLink;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputAvatarProfile.value = avatarLink;
  popupProfileAvatarForm.open();
});
Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (responseDataArray) {
  userId = responseDataArray[0]._id;
  userInfo.setUserInfo(responseDataArray[0]);
  userInfo.setAvatar(responseDataArray[0]);
  section.renderItems(responseDataArray[1].reverse());
}).catch(function (err) {
  return console.log(err);
}); //Events

popupProfileForm.setEventListeners();
popupProfileAvatarForm.setEventListeners();
popupAddCardForm.setEventListeners();
popupWithImage.setEventListener();
deleteCard.setEventListeners(); //Validations

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();
validationProfieEditAvatar.enableValidation();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVIsQ0FBWSxDQUFDL0IsR0FBRyxDQUFDMkIsV0FBSixFQUFELEVBQW9CM0IsR0FBRyxDQUFDZ0MsZUFBSixFQUFwQixDQUFaLEVBQ0czTCxJQURILENBQ1EsVUFBQzRMLGlCQUFELEVBQXVCO0VBQzNCL0ssTUFBTSxHQUFHK0ssaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixDQUFxQmpLLEdBQTlCO0VBQ0E4SCxRQUFRLENBQUN1QixXQUFULENBQXFCWSxpQkFBaUIsQ0FBQyxDQUFELENBQXRDO0VBQ0FuQyxRQUFRLENBQUMyQixTQUFULENBQW1CUSxpQkFBaUIsQ0FBQyxDQUFELENBQXBDO0VBQ0F6QixPQUFPLENBQUMwQixXQUFSLENBQW9CRCxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCRSxPQUFyQixFQUFwQjtBQUNELENBTkgsRUFPR3pCLEtBUEgsQ0FPUyxVQUFBQyxHQUFHO0VBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLENBUFosR0FTQTs7QUFFQVIsZ0JBQWdCLENBQUNpQyxpQkFBakI7QUFDQWQsc0JBQXNCLENBQUNjLGlCQUF2QjtBQUNBbkMsZ0JBQWdCLENBQUNtQyxpQkFBakI7QUFDQXJDLGNBQWMsQ0FBQ3NDLGdCQUFmO0FBQ0FyQixVQUFVLENBQUNvQixpQkFBWCxJQUVBOztBQUVBekMsaUJBQWlCLENBQUMyQyxnQkFBbEI7QUFDQTFDLHFCQUFxQixDQUFDMEMsZ0JBQXRCO0FBQ0F6QywwQkFBMEIsQ0FBQ3lDLGdCQUEzQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoU3VibWl0LmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBpe1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyl7XHJcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcclxuICAgICAgICB0aGlzLl9oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hlY2tFcnJvclxyXG5cclxuICAgIF9jaGVja0Vycm9yKHJlcyl7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR0VUIFByb2ZpbGVcclxuXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH11c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICAvL1BBVENIIFByb2ZpbGVcclxuXHJcbiAgICAgIGVkaXRQcm9maWxlKHByb2ZpbGVEYXRhKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH11c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiAnMTA1Y2ZjNGEtZjc1OS00OTdiLTg3MjEtYWMxYjhmZGQ4OTBlJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvZmlsZURhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1BBVENIIEF2YXRhclxyXG5cclxuICAgICAgZWRpdEF2YXRhcihhdmF0YXIpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfXVzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogJzEwNWNmYzRhLWY3NTktNDk3Yi04NzIxLWFjMWI4ZmRkODkwZScsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhdmF0YXIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrRXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgLy9HRVQgQ2FyZHNcclxuXHJcbiAgICAgIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH1jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1BPU1QgQ2FyZFxyXG5cclxuICAgICAgYWRkQ2FyZChjYXJkRGF0YSl7XHJcbiAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH1jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246ICcxMDVjZmM0YS1mNzU5LTQ5N2ItODcyMS1hYzFiOGZkZDg5MGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJkRGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrRXJyb3IpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0RFTEVURSBDYXJkXHJcblxyXG4gICAgICBkZWxldGVDYXJkKGlkQ2FyZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9Y2FyZHMvJHtpZENhcmR9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9QVVQgTGlrZVxyXG4gICAgICBsaWtlKGlkQ2FyZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9Y2FyZHMvJHtpZENhcmR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9ERUxFVEUgRGlzbGlrZVxyXG4gICAgICBkaXNsaWtlKGlkQ2FyZCl7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9Y2FyZHMvJHtpZENhcmR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3Ioe2RhdGEsIHVzZXJJZCwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2xpY2t9LCBjYXJkU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrOyAgICAgXHJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9IGhhbmRsZURlbGV0ZUNhcmQ7XHJcbiAgICAgICAgdGhpcy5fdXNlcklkID0gdXNlcklkOyAgIFxyXG4gICAgICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgICAgICB0aGlzLl9jYXJkSWQgPSBkYXRhLl9pZDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XHJcbiAgICAgICAgdGhpcy5saWtlcyA9IGRhdGEubGlrZXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFRlbXBsYXRlKCl7XHJcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgICAuY29udGVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXHJcbiAgICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaWtlKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnREZWxldGVDYXJkKCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UnKVxyXG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX25hbWUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRWaWV3Q2FyZCgpXHJcbiAgICAgICAgdGhpcy5fZGVsZXRlSWNvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2RlbGV0ZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLl9jYXJkTGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UnKTtcclxuICAgICAgICB0aGlzLl9jYXJkTnVtYmVyT2ZMaWtlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbnVtYmVyLW9mLWxpa2VzJyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGlrZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldExpa2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9vd25lcklkICE9PSB0aGlzLl91c2VySWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVJY29uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FdmVudHNcclxuXHJcbiAgICBfZXZlbnRMaWtlKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnREZWxldGVDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVsZXRlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZCgpe1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnRWaWV3Q2FyZCgpe1xyXG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHtuYW1lOiB0aGlzLl9uYW1lLCBsaW5rOiB0aGlzLl9saW5rfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IYW5kbGUgbGlrZVxyXG5cclxuICAgIGNoZWNrTGlrZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saWtlcy5zb21lKGl0ZW0gPT4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXJJZClcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TGlrZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tMaWtlKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmxpa2UoKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNsaWtlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlrZSgpe1xyXG4gICAgICAgIHRoaXMuX2NhcmRMaWtlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5fY2FyZE51bWJlck9mTGlrZS50ZXh0Q29udGVudCA9IHRoaXMubGlrZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZGlzbGlrZSgpe1xyXG4gICAgICAgIHRoaXMuX2NhcmRMaWtlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5fY2FyZE51bWJlck9mTGlrZS50ZXh0Q29udGVudCA9IHRoaXMubGlrZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmKHRoaXMubGlrZXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJkTnVtYmVyT2ZMaWtlLnRleHRDb250ZW50ID0gJydcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgdmFsaWRlRm9ybSl7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkZUZvcm0gPSB2YWxpZGVGb3JtO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9ycy5pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX3ZhbGlkZUZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zZWxlY3RvcnMuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbmFibGVWYWxpZGF0aW9uICgpe1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzICgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRFdmVudExpc3RlbmVycyAoKXtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dFNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0U2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmICghaW5wdXRTZWxlY3Rvci52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXRTZWxlY3RvciwgaW5wdXRTZWxlY3Rvci52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0U2VsZWN0b3IpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dFcnJvcihpbnB1dFNlbGVjdG9yLCBlcnJvck1hc3NhZ2Upe1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX3ZhbGlkZUZvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcclxuICAgICAgICBpbnB1dFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5fc2VsZWN0b3JzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNYXNzYWdlO1xyXG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NlbGVjdG9ycy5lcnJvckNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZUVycm9yKGlucHV0U2VsZWN0b3Ipe1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX3ZhbGlkZUZvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRTZWxlY3Rvci5pZH0tZXJyb3JgKTtcclxuICAgICAgICBpbnB1dFNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2VsZWN0b3JzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2VsZWN0b3JzLmVycm9yQ2xhc3MpO1xyXG4gICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VmFsaWRhdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0RWxlbWVudCkgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZUJ1dHRvblN0YXRlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZWxlY3RvcnMuaW5hY3RpdmVTdWJtaXRCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZWxlY3RvcnMuaW5hY3RpdmVTdWJtaXRCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFzSW52YWxpZElucHV0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dFNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhaW5wdXRTZWxlY3Rvci52YWxpZGl0eS52YWxpZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCAoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGV2bil7XHJcbiAgICAgICAgaWYgKGV2bi5rZXkgPT09ICdFc2NhcGUnKXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UtYnV0dG9uJykgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwJykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3Ioe2hhbmRsZUZvcm1TdWJtaXR9LCBwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19zdWJtaXQnKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJMb2FuZGluZyhpc0xvYW5kaW5nLCB0ZXh0KXtcclxuICAgICAgICBpZihpc0xvYW5kaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpe1xyXG4gICAgICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXNcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpe1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cHtcclxuICAgIGNvbnN0cnVjdG9yIChwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdmlldy1pbWFnZScpO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX192aWV3LXRpdGxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbih7bmFtZSwgbGlua30pe1xyXG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoU3VibWl0IGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aGFuZGxlRm9ybVN1Ym1pdH0sIHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0Jyk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihjYXJkKXtcclxuICAgICAgICB0aGlzLmNhcmQgPSBjYXJkO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHtyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKGRhdGFBcnJheSl7XHJcbiAgICAgICAgZGF0YUFycmF5LmZvckVhY2goKGl0ZW0pPT50aGlzLl9yZW5kZXJlcihpdGVtKSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oZWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3Ioe3NlbGVjdG9yTmFtZSwgc2VsZWN0b3JBYm91dCwgc2VsZWN0b3JBdmF0YXJ9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuICAgICAgICB0aGlzLl9hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JBYm91dCk7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvckF2YXRhcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBhYm91dDogdGhpcy5fYWJvdXQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGF2YXRhckxpbms6IHRoaXMuX2F2YXRhci5zcmMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYWJvdXQudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF2YXRhcihkYXRhKXtcclxuICAgICAgICB0aGlzLl9hdmF0YXIuc3JjID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIgIGNvbnN0IHBvcHVwSW5wdXRTZWxlY3RvcnMgPSB7XHJcbiAgICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc3VibWl0JyxcclxuICAgIGluYWN0aXZlU3VibWl0QnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0X2luYWN0aXZlJyxcclxuICAgIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcclxuICAgIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfdmlzaWJsZSdcclxuICB9O1xyXG5cclxuLy9Qcm9maWxlXHJcbmNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZScpO1xyXG5cclxuLy9wb3B1cHNcclxuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9wcm9maWxlJyk7XHJcbmNvbnN0IHBvcHVwQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9hZGQtY2FyZCcpO1xyXG5jb25zdCBwb3B1cEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZWRpdC1hdmF0YXInKVxyXG5cclxuLy9wb3B1cHMgb3BlbiBidXR0b25zXHJcbmNvbnN0IHBvcHVwUHJvZmlsZU9wZW5CdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xyXG5jb25zdCBwb3B1cEFkZENhcmRPcGVuQnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpO1xyXG5jb25zdCBwb3B1cFByb2ZpbGVBdmF0YXJPcGVuQnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1hdmF0YXItYnV0dG9uJylcclxuXHJcbi8vcG9wdXBzIGlucHV0XHJcbmNvbnN0IGlucHV0TmFtZVByb2ZpbGUgPSBwb3B1cEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfdHlwZV9uYW1lJyk7XHJcbmNvbnN0IGlucHV0QWJvdXRQcm9maWxlID0gcG9wdXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfYWJvdXQnKTtcclxuY29uc3QgaW5wdXRBdmF0YXJQcm9maWxlID0gcG9wdXBFZGl0QXZhdGFyLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfdHlwZV9saW5rJylcclxuXHJcbi8vcG9wdXBzIGZvcm1cclxuY29uc3QgZm9ybVBvcHVwUHJvZmlsZSA9IHBvcHVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbmNvbnN0IGZvcm1Qb3B1cEFkZENhcmQgPSBwb3B1cEFkZENhcmQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbmNvbnN0IGZvcm1Qb3B1cFByb2ZpbGVBdmF0YXIgPSBwb3B1cEVkaXRBdmF0YXIucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJylcclxuXHJcblxyXG4gIGV4cG9ydCB7cG9wdXBJbnB1dFNlbGVjdG9ycywgcG9wdXBQcm9maWxlT3BlbkJ1dHRvbiwgcG9wdXBBZGRDYXJkT3BlbkJ1dHRvbixcclxuICAgICAgICAgIGlucHV0TmFtZVByb2ZpbGUsIGlucHV0QWJvdXRQcm9maWxlLCBmb3JtUG9wdXBQcm9maWxlLCBmb3JtUG9wdXBBZGRDYXJkLFxyXG4gICAgICAgICAgcG9wdXBQcm9maWxlQXZhdGFyT3BlbkJ1dHRvbiwgZm9ybVBvcHVwUHJvZmlsZUF2YXRhciwgaW5wdXRBdmF0YXJQcm9maWxlfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgIGltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG4gIGltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBpJztcclxuICBpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuICBpbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuICBpbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuICBpbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG4gIGltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG4gIGltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbiAgaW1wb3J0IHtwb3B1cElucHV0U2VsZWN0b3JzLCBwb3B1cFByb2ZpbGVPcGVuQnV0dG9uLCBwb3B1cEFkZENhcmRPcGVuQnV0dG9uLFxyXG4gICAgICAgICAgaW5wdXROYW1lUHJvZmlsZSwgaW5wdXRBYm91dFByb2ZpbGUsIGZvcm1Qb3B1cFByb2ZpbGUsIGZvcm1Qb3B1cEFkZENhcmQsXHJcbiAgICAgICAgICBwb3B1cFByb2ZpbGVBdmF0YXJPcGVuQnV0dG9uLCBmb3JtUG9wdXBQcm9maWxlQXZhdGFyLCBpbnB1dEF2YXRhclByb2ZpbGV9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XHJcbiAgaW1wb3J0IHsgUG9wdXBXaXRoU3VibWl0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQnO1xyXG5cclxuXHJcbiAgLy9JRCA9IDY0MDA4OTU1MDBkMjYyMzYyMTMxMjk4OFxyXG4gIFxyXG4gIGxldCB1c2VySWRcclxuICBcclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvbkFkZENhcmQgPSBuZXcgRm9ybVZhbGlkYXRvciAocG9wdXBJbnB1dFNlbGVjdG9ycywgZm9ybVBvcHVwQWRkQ2FyZCk7XHJcbiAgY29uc3QgdmFsaWRhdGlvblByb2ZpbGVFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IgKHBvcHVwSW5wdXRTZWxlY3RvcnMsIGZvcm1Qb3B1cFByb2ZpbGUpO1xyXG4gIGNvbnN0IHZhbGlkYXRpb25Qcm9maWVFZGl0QXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IgKHBvcHVwSW5wdXRTZWxlY3RvcnMsIGZvcm1Qb3B1cFByb2ZpbGVBdmF0YXIpO1xyXG4gIGNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvICh7c2VsZWN0b3JOYW1lOiAnLnByb2ZpbGVfX25hbWUnLCBzZWxlY3RvckFib3V0OiAnLnByb2ZpbGVfX2Fib3V0JyxcclxuICBzZWxlY3RvckF2YXRhcjogJy5wcm9maWxlX19hdmF0YXInfSwgdXNlcklkKTtcclxuICBjb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSAoJy5wb3B1cF92aWV3LWltYWdlJyk7XHJcblxyXG4gIGNvbnN0IGFwaSA9IG5ldyBBcGkgKHtcclxuICAgIGJhc2VVcmw6J2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNDEvJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogJzEwNWNmYzRhLWY3NTktNDk3Yi04NzIxLWFjMWI4ZmRkODkwZSdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvL1BvcHVwQ2FyZFxyXG5cclxuICBjb25zdCBwb3B1cEFkZENhcmRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0gKHtoYW5kbGVGb3JtU3VibWl0OiAoaW5wdXRzVmFsdWVzKSA9PiB7XHJcbiAgICBwb3B1cFByb2ZpbGVGb3JtLnJlbmRlckxvYW5kaW5nKHRydWUsICfQodC+0LfQtNCw0LXRgtGB0Y8uLi4nKTtcclxuICAgIGFwaS5hZGRDYXJkKGlucHV0c1ZhbHVlcylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKFxyXG4gICAgICAgICAge25hbWU6IHJlc3BvbnNlRGF0YS5uYW1lLCBsaW5rOiByZXNwb25zZURhdGEubGluaywgb3duZXI6IHJlc3BvbnNlRGF0YS5vd25lciwgXHJcbiAgICAgICAgICAgIF9pZDogcmVzcG9uc2VEYXRhLl9pZCwgbGlrZXM6IHJlc3BvbnNlRGF0YS5saWtlc30sICBcclxuICAgICAgICAgICAgdXNlcklkLCAnLmNhcmRzLXRlbXBsYXRlX3R5cGVfZGVmYXVsdCcpXHJcbiAgICAgICAgc2VjdGlvbi5hZGRJdGVtKGNhcmQpXHJcbiAgICAgICAgcG9wdXBBZGRDYXJkRm9ybS5jbG9zZSgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvZmlsZUZvcm0ucmVuZGVyTG9hbmRpbmcoZmFsc2UsICfQodC+0LfQtNCw0YLRjCcpO1xyXG4gICAgICB9KVxyXG4gIH19LFxyXG4gICcucG9wdXBfYWRkLWNhcmQnKVxyXG5cclxuICAvLyAxXHJcblxyXG4gIGNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbigge3JlbmRlcmVyOiAoZGF0YSkgPT57XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQsICcuY2FyZHMtdGVtcGxhdGVfdHlwZV9kZWZhdWx0Jyk7XHJcbiAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZCk7XHJcbiAgfX0sICcuY2FyZHMtdGVtcGxhdGVfdHlwZV9kZWZhdWx0JylcclxuXHJcbiAgLy8gMlxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDYXJkIChkYXRhLCB1c2VySWQsIGNhcmRTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtkYXRhLCB1c2VySWQsICBcclxuICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoKSA9PiBwb3B1cFdpdGhJbWFnZS5vcGVuKGRhdGEpLFxyXG4gICAgICBoYW5kbGVEZWxldGVDYXJkOiAoY2FyZCkgPT4gZGVsZXRlQ2FyZC5vcGVuKGNhcmQpLFxyXG4gICAgICBoYW5kbGVMaWtlQ2xpY2s6IChjYXJkKSA9PiB7XHJcbiAgICAgICAgaWYoIWNhcmQuY2hlY2tMaWtlKCkpe1xyXG4gICAgICAgICAgYXBpLmxpa2UoZGF0YS5faWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjYXJkLmxpa2VzID0gcmVzcG9uc2VEYXRhLmxpa2VzO1xyXG4gICAgICAgICAgICAgIGNhcmQubGlrZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhcGkuZGlzbGlrZShkYXRhLl9pZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNhcmQubGlrZXMgPSByZXNwb25zZURhdGEubGlrZXM7XHJcbiAgICAgICAgICAgICAgY2FyZC5kaXNsaWtlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH19LCBjYXJkU2VsZWN0b3IpXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVDYXJkID0gbmV3IFBvcHVwV2l0aFN1Ym1pdCh7XHJcbiAgICBoYW5kbGVGb3JtU3VibWl0OiAoKSA9PiB7XHJcbiAgICAgIGFwaS5kZWxldGVDYXJkKGRlbGV0ZUNhcmQuY2FyZC5fY2FyZElkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGRlbGV0ZUNhcmQuY2FyZC5kZWxldGVDYXJkKCkpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIGRlbGV0ZUNhcmQuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy5wb3B1cF9zdWJtaXQnKVxyXG5cclxuICBwb3B1cEFkZENhcmRPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdmFsaWRhdGlvbkFkZENhcmQucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICBwb3B1cEFkZENhcmRGb3JtLm9wZW4oKTtcclxuICB9KVxyXG5cclxuICAvL1BvcHVwUHJvZmlsZVxyXG5cclxuICBjb25zdCBwb3B1cFByb2ZpbGVGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0gKHtoYW5kbGVGb3JtU3VibWl0OiAoaW5wdXRWYWx1ZXMpID0+e1xyXG4gICAgcG9wdXBQcm9maWxlRm9ybS5yZW5kZXJMb2FuZGluZyh0cnVlLCAn0KHQvtGF0YDQsNC90LjRgtGMLi4uJyk7XHJcbiAgICBhcGkuZWRpdFByb2ZpbGUoaW5wdXRWYWx1ZXMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXNwb25zZURhdGEpXHJcbiAgICAgICAgcG9wdXBQcm9maWxlRm9ybS5jbG9zZSgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvZmlsZUZvcm0ucmVuZGVyTG9hbmRpbmcoZmFsc2UsICfQodC+0YXRgNCw0L3QuNGC0YwnKTtcclxuICAgICAgfSlcclxuICB9fSwgJy5wb3B1cF9wcm9maWxlJylcclxuXHJcbmNvbnN0IHBvcHVwUHJvZmlsZUF2YXRhckZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSAoe2hhbmRsZUZvcm1TdWJtaXQ6IChpbnB1dFZhbHVlKSA9PntcclxuICBwb3B1cFByb2ZpbGVBdmF0YXJGb3JtLnJlbmRlckxvYW5kaW5nKHRydWUsICfQodC+0YXRgNCw0L3QuNGC0YwuLi4nKTtcclxuICBhcGkuZWRpdEF2YXRhcihpbnB1dFZhbHVlKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICB1c2VySW5mby5zZXRBdmF0YXIocmVzcG9uc2VEYXRhKTtcclxuICAgICAgcG9wdXBQcm9maWxlQXZhdGFyRm9ybS5jbG9zZSgpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHBvcHVwUHJvZmlsZUF2YXRhckZvcm0ucmVuZGVyTG9hbmRpbmcoZmFsc2UsICfQodC+0YXRgNCw0L3QuNGC0YwnKTtcclxuICAgIH0pXHJcbn19LCAnLnBvcHVwX2VkaXQtYXZhdGFyJylcclxuXHJcbnBvcHVwUHJvZmlsZU9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgdmFsaWRhdGlvblByb2ZpbGVFZGl0LnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIGNvbnN0IHVzZXJJbmZvbWF0aW9uID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBjb25zdCB1c2VyTmFtZSA9IHVzZXJJbmZvbWF0aW9uLm5hbWU7XHJcbiAgY29uc3QgdXNlckFib3V0ID0gdXNlckluZm9tYXRpb24uYWJvdXQ7XHJcbiAgaW5wdXROYW1lUHJvZmlsZS52YWx1ZSA9IHVzZXJOYW1lO1xyXG4gIGlucHV0QWJvdXRQcm9maWxlLnZhbHVlID0gdXNlckFib3V0O1xyXG4gIHBvcHVwUHJvZmlsZUZvcm0ub3BlbigpO1xyXG4gICAgXHJcbn0pO1xyXG5cclxucG9wdXBQcm9maWxlQXZhdGFyT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB2YWxpZGF0aW9uUHJvZmllRWRpdEF2YXRhci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBjb25zdCBhdmF0YXJJbmZvcm1hdGlvbiA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgY29uc3QgYXZhdGFyTGluayA9IGF2YXRhckluZm9ybWF0aW9uLmF2YXRhckxpbms7XHJcbiAgaW5wdXRBdmF0YXJQcm9maWxlLnZhbHVlID0gYXZhdGFyTGluaztcclxuICBwb3B1cFByb2ZpbGVBdmF0YXJGb3JtLm9wZW4oKTtcclxufSlcclxuXHJcblxyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgLnRoZW4oKHJlc3BvbnNlRGF0YUFycmF5KSA9PiB7XHJcbiAgICB1c2VySWQgPSByZXNwb25zZURhdGFBcnJheVswXS5faWQ7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXNwb25zZURhdGFBcnJheVswXSk7XHJcbiAgICB1c2VySW5mby5zZXRBdmF0YXIocmVzcG9uc2VEYXRhQXJyYXlbMF0pO1xyXG4gICAgc2VjdGlvbi5yZW5kZXJJdGVtcyhyZXNwb25zZURhdGFBcnJheVsxXS5yZXZlcnNlKCkpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbi8vRXZlbnRzXHJcblxyXG5wb3B1cFByb2ZpbGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwUHJvZmlsZUF2YXRhckZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBBZGRDYXJkRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVyKCk7XHJcbmRlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vVmFsaWRhdGlvbnNcclxuXHJcbnZhbGlkYXRpb25BZGRDYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxudmFsaWRhdGlvblByb2ZpbGVFZGl0LmVuYWJsZVZhbGlkYXRpb24oKTtcclxudmFsaWRhdGlvblByb2ZpZUVkaXRBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuIl0sIm5hbWVzIjpbIkFwaSIsIm9wdGlvbnMiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfaGVhZGVycyIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiX2NoZWNrRXJyb3IiLCJwcm9maWxlRGF0YSIsImF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImF2YXRhciIsImNhcmREYXRhIiwiaWRDYXJkIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImRhdGEiLCJ1c2VySWQiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlTGlrZUNsaWNrIiwiX2xpbmsiLCJsaW5rIiwiX25hbWUiLCJuYW1lIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl91c2VySWQiLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2NhcmRJZCIsIl9oYW5kbGVMaWtlQ2xpY2siLCJsaWtlcyIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiX2dldFRlbXBsYXRlIiwiX2V2ZW50TGlrZSIsIl9ldmVudERlbGV0ZUNhcmQiLCJfY2FyZEltYWdlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfZXZlbnRWaWV3Q2FyZCIsIl9kZWxldGVJY29uIiwiX2NhcmRMaWtlIiwiX2NhcmROdW1iZXJPZkxpa2UiLCJsZW5ndGgiLCJfc2V0TGlrZSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb21lIiwiaXRlbSIsImNoZWNrTGlrZSIsImxpa2UiLCJkaXNsaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwiRm9ybVZhbGlkYXRvciIsInNlbGVjdG9ycyIsInZhbGlkZUZvcm0iLCJfc2VsZWN0b3JzIiwiX3ZhbGlkZUZvcm0iLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfYnV0dG9uRWxlbWVudCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVFcnJvciIsImVycm9yTWFzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImlucHV0RWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldm4iLCJrZXkiLCJjbG9zZSIsImV2dCIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfcG9wdXBGb3JtIiwiX3N1Ym1pdEJ1dHRvbiIsIl9oYW5kbGVGb3JtU3VibWl0IiwiaXNMb2FuZGluZyIsInRleHQiLCJfZm9ybVZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJyZXNldCIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfdGl0bGUiLCJQb3B1cFdpdGhTdWJtaXQiLCJjYXJkIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZGF0YUFycmF5IiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsInNlbGVjdG9yTmFtZSIsInNlbGVjdG9yQWJvdXQiLCJzZWxlY3RvckF2YXRhciIsIl9hYm91dCIsIl9hdmF0YXIiLCJhYm91dCIsImF2YXRhckxpbmsiLCJwb3B1cElucHV0U2VsZWN0b3JzIiwicHJvZmlsZSIsInBvcHVwRWRpdFByb2ZpbGUiLCJwb3B1cEFkZENhcmQiLCJwb3B1cEVkaXRBdmF0YXIiLCJwb3B1cFByb2ZpbGVPcGVuQnV0dG9uIiwicG9wdXBBZGRDYXJkT3BlbkJ1dHRvbiIsInBvcHVwUHJvZmlsZUF2YXRhck9wZW5CdXR0b24iLCJpbnB1dE5hbWVQcm9maWxlIiwiaW5wdXRBYm91dFByb2ZpbGUiLCJpbnB1dEF2YXRhclByb2ZpbGUiLCJmb3JtUG9wdXBQcm9maWxlIiwiZm9ybVBvcHVwQWRkQ2FyZCIsImZvcm1Qb3B1cFByb2ZpbGVBdmF0YXIiLCJ2YWxpZGF0aW9uQWRkQ2FyZCIsInZhbGlkYXRpb25Qcm9maWxlRWRpdCIsInZhbGlkYXRpb25Qcm9maWVFZGl0QXZhdGFyIiwidXNlckluZm8iLCJwb3B1cFdpdGhJbWFnZSIsImFwaSIsInBvcHVwQWRkQ2FyZEZvcm0iLCJpbnB1dHNWYWx1ZXMiLCJwb3B1cFByb2ZpbGVGb3JtIiwicmVuZGVyTG9hbmRpbmciLCJhZGRDYXJkIiwicmVzcG9uc2VEYXRhIiwiY3JlYXRlQ2FyZCIsInNlY3Rpb24iLCJhZGRJdGVtIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmluYWxseSIsIm9wZW4iLCJkZWxldGVDYXJkIiwiZ2VuZXJhdGVDYXJkIiwicmVzZXRWYWxpZGF0aW9uIiwiaW5wdXRWYWx1ZXMiLCJlZGl0UHJvZmlsZSIsInNldFVzZXJJbmZvIiwicG9wdXBQcm9maWxlQXZhdGFyRm9ybSIsImlucHV0VmFsdWUiLCJlZGl0QXZhdGFyIiwic2V0QXZhdGFyIiwidXNlckluZm9tYXRpb24iLCJnZXRVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckFib3V0IiwiYXZhdGFySW5mb3JtYXRpb24iLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJyZXNwb25zZURhdGFBcnJheSIsInJlbmRlckl0ZW1zIiwicmV2ZXJzZSIsInNldEV2ZW50TGlzdGVuZXJzIiwic2V0RXZlbnRMaXN0ZW5lciIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9