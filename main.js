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
        user = _ref.user,
        handleCardClick = _ref.handleCardClick,
        handleDeleteCard = _ref.handleDeleteCard,
        handleLikeClick = _ref.handleLikeClick;

    _classCallCheck(this, Card);

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

      if (this._ownerId !== this._user) {
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
        return item._id === _this4._user;
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

      this.toggleButtonState();

      this._inputList.forEach(function (inputSelector) {
        inputSelector.addEventListener('input', function () {
          _this._checkInputValidity(inputSelector);

          _this.toggleButtonState();
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
    key: "toggleButtonState",
    value: function toggleButtonState() {
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

        _this3.close();
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

        _this2.close();
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

var validationAddCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupAddCard);
var validationProfileEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupProfile);
var validationProfieEditAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formPopupProfileAvatar);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.UserInfo({
  selectorName: '.profile__name',
  selectorAbout: '.profile__about',
  selectorAvatar: '.profile__avatar'
});
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
      }, '6400895500d2623621312988', '.cards-template_type_default');
      section.addItem(card);
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupProfileForm.renderLoanding(false, 'Создать');
    });
  }
}, '.popup_add-card'); // 1

var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.Section({
  renderer: function renderer(data) {
    var card = createCard(data, '6400895500d2623621312988', '.cards-template_type_default');
    section.addItem(card);
  }
}, '.cards-template_type_default'); // 2

function createCard(data, user, cardSelector) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__.Card({
    data: data,
    user: user,
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
    });
  }
}, '.popup_submit');
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupAddCardOpenButton.addEventListener('click', function () {
  validationAddCard.toggleButtonState();
  popupAddCardForm.open();
}); //PopupProfile

var popupProfileForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputValues) {
    popupProfileForm.renderLoanding(true, 'Сохранить...');
    api.editProfile(inputValues).then(function (responseData) {
      userInfo.setUserInfo(responseData);
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
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupProfileAvatarForm.renderLoanding(false, 'Сохранить');
    });
  }
}, '.popup_edit-avatar');
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupProfileOpenButton.addEventListener('click', function () {
  var userInfomation = userInfo.getUserInfo();
  var userName = userInfomation.name;
  var userAbout = userInfomation.about;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputNameProfile.value = userName;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputAboutProfile.value = userAbout;
  popupProfileForm.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupProfileAvatarOpenButton.addEventListener('click', function () {
  var avatarInformation = userInfo.getUserInfo();
  var avatarLink = avatarInformation.avatarLink;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputAvatarProfile.value = avatarLink;
  popupProfileAvatarForm.open();
});
Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (responseDataArray) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLEdBQWI7RUFDSSxhQUFZQyxPQUFaLEVBQW9CO0lBQUE7O0lBQ2hCLEtBQUtDLFFBQUwsR0FBZ0JELE9BQU8sQ0FBQ0UsT0FBeEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCSCxPQUFPLENBQUNJLE9BQXhCO0VBQ0gsQ0FKTCxDQU1JOzs7RUFOSjtJQUFBO0lBQUEsT0FRSSxxQkFBWUMsR0FBWixFQUFnQjtNQUNkLElBQUlBLEdBQUcsQ0FBQ0MsRUFBUixFQUFZO1FBQ1YsT0FBT0QsR0FBRyxDQUFDRSxJQUFKLEVBQVA7TUFDRDs7TUFDRCxPQUFPQyxPQUFPLENBQUNDLE1BQVIsaURBQTBCSixHQUFHLENBQUNLLE1BQTlCLEVBQVA7SUFDRCxDQWJMLENBZUk7O0VBZko7SUFBQTtJQUFBLE9BaUJJLHVCQUFjO01BQ1YsT0FBT0MsS0FBSyxXQUFJLEtBQUtWLFFBQVQsZUFBNkI7UUFDckNXLE1BQU0sRUFBQyxLQUQ4QjtRQUVyQ1IsT0FBTyxFQUFFLEtBQUtEO01BRnVCLENBQTdCLENBQUwsQ0FJSlUsSUFKSSxDQUlDLEtBQUtDLFdBSk4sQ0FBUDtJQUtILENBdkJMLENBeUJJOztFQXpCSjtJQUFBO0lBQUEsT0EyQk0scUJBQVlDLFdBQVosRUFBd0I7TUFDdEIsT0FBT0osS0FBSyxXQUFJLEtBQUtWLFFBQVQsZUFBNkI7UUFDckNXLE1BQU0sRUFBRSxPQUQ2QjtRQUVyQ1IsT0FBTyxFQUFFO1VBQ0xZLGFBQWEsRUFBRSxzQ0FEVjtVQUVMLGdCQUFnQjtRQUZYLENBRjRCO1FBTXJDQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixXQUFmO01BTitCLENBQTdCLENBQUwsQ0FRSkYsSUFSSSxDQVFDLEtBQUtDLFdBUk4sQ0FBUDtJQVNELENBckNQLENBdUNNOztFQXZDTjtJQUFBO0lBQUEsT0F5Q00sb0JBQVdNLE1BQVgsRUFBa0I7TUFDaEIsT0FBT1QsS0FBSyxXQUFJLEtBQUtWLFFBQVQsc0JBQW9DO1FBQzlDVyxNQUFNLEVBQUUsT0FEc0M7UUFFOUNSLE9BQU8sRUFBRTtVQUNQWSxhQUFhLEVBQUUsc0NBRFI7VUFFUCxnQkFBZ0I7UUFGVCxDQUZxQztRQU05Q0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsTUFBZjtNQU53QyxDQUFwQyxDQUFMLENBUUpQLElBUkksQ0FRQyxLQUFLQyxXQVJOLENBQVA7SUFTRCxDQW5EUCxDQXFEUTs7RUFyRFI7SUFBQTtJQUFBLE9BdURNLDJCQUFrQjtNQUNoQixPQUFPSCxLQUFLLFdBQUksS0FBS1YsUUFBVCxZQUEwQjtRQUNsQ1csTUFBTSxFQUFFLEtBRDBCO1FBRWxDUixPQUFPLEVBQUUsS0FBS0Q7TUFGb0IsQ0FBMUIsQ0FBTCxDQUlKVSxJQUpJLENBSUMsS0FBS0MsV0FKTixDQUFQO0lBS0QsQ0E3RFAsQ0ErRE07O0VBL0ROO0lBQUE7SUFBQSxPQWlFTSxpQkFBUU8sUUFBUixFQUFpQjtNQUNiLE9BQU9WLEtBQUssV0FBSSxLQUFLVixRQUFULFlBQTBCO1FBQ3BDVyxNQUFNLEVBQUUsTUFENEI7UUFFcENSLE9BQU8sRUFBRTtVQUNMWSxhQUFhLEVBQUUsc0NBRFY7VUFFTCxnQkFBZ0I7UUFGWCxDQUYyQjtRQU1wQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUUsUUFBZjtNQU44QixDQUExQixDQUFMLENBUUpSLElBUkksQ0FRQyxLQUFLQyxXQVJOLENBQVA7SUFTRCxDQTNFVCxDQTZFUTs7RUE3RVI7SUFBQTtJQUFBLE9BK0VNLG9CQUFXUSxNQUFYLEVBQWtCO01BQ2hCLE9BQU9YLEtBQUssV0FBSSxLQUFLVixRQUFULG1CQUEwQnFCLE1BQTFCLEdBQW9DO1FBQzlDVixNQUFNLEVBQUUsUUFEc0M7UUFFOUNSLE9BQU8sRUFBRSxLQUFLRDtNQUZnQyxDQUFwQyxDQUFMLENBSUpVLElBSkksQ0FJQyxLQUFLQyxXQUpOLENBQVA7SUFLRCxDQXJGUCxDQXVGTTs7RUF2Rk47SUFBQTtJQUFBLE9Bd0ZNLGNBQUtRLE1BQUwsRUFBWTtNQUNWLE9BQU9YLEtBQUssV0FBSSxLQUFLVixRQUFULG1CQUEwQnFCLE1BQTFCLGFBQTBDO1FBQ3BEVixNQUFNLEVBQUUsS0FENEM7UUFFcERSLE9BQU8sRUFBRSxLQUFLRDtNQUZzQyxDQUExQyxDQUFMLENBSUpVLElBSkksQ0FJQyxLQUFLQyxXQUpOLENBQVA7SUFLRCxDQTlGUCxDQWdHTTs7RUFoR047SUFBQTtJQUFBLE9BaUdNLGlCQUFRUSxNQUFSLEVBQWU7TUFDYixPQUFPWCxLQUFLLFdBQUksS0FBS1YsUUFBVCxtQkFBMEJxQixNQUExQixhQUEwQztRQUNwRFYsTUFBTSxFQUFFLFFBRDRDO1FBRXBEUixPQUFPLEVBQUUsS0FBS0Q7TUFGc0MsQ0FBMUMsQ0FBTCxDQUlKVSxJQUpJLENBSUMsS0FBS0MsV0FKTixDQUFQO0lBS0Q7RUF2R1A7O0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNUyxJQUFiO0VBQ0ksb0JBQThFQyxZQUE5RSxFQUEyRjtJQUFBLElBQTlFQyxJQUE4RSxRQUE5RUEsSUFBOEU7SUFBQSxJQUF4RUMsSUFBd0UsUUFBeEVBLElBQXdFO0lBQUEsSUFBbEVDLGVBQWtFLFFBQWxFQSxlQUFrRTtJQUFBLElBQWpEQyxnQkFBaUQsUUFBakRBLGdCQUFpRDtJQUFBLElBQS9CQyxlQUErQixRQUEvQkEsZUFBK0I7O0lBQUE7O0lBQ3ZGLEtBQUtDLEtBQUwsR0FBYUwsSUFBSSxDQUFDTSxJQUFsQjtJQUNBLEtBQUtDLEtBQUwsR0FBYVAsSUFBSSxDQUFDUSxJQUFsQjtJQUNBLEtBQUtDLGFBQUwsR0FBcUJWLFlBQXJCO0lBQ0EsS0FBS1csZ0JBQUwsR0FBd0JSLGVBQXhCO0lBQ0EsS0FBS1MsaUJBQUwsR0FBeUJSLGdCQUF6QjtJQUNBLEtBQUtTLEtBQUwsR0FBYVgsSUFBYjtJQUNBLEtBQUtZLFFBQUwsR0FBZ0JiLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxHQUEzQjtJQUNBLEtBQUtDLE9BQUwsR0FBZWhCLElBQUksQ0FBQ2UsR0FBcEI7SUFDQSxLQUFLRSxnQkFBTCxHQUF3QmIsZUFBeEI7SUFDQSxLQUFLYyxLQUFMLEdBQWFsQixJQUFJLENBQUNrQixLQUFsQjtFQUNIOztFQVpMO0lBQUE7SUFBQSxPQWNJLHdCQUFjO01BQ1YsSUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQzNCQyxhQURtQixDQUNMLEtBQUtaLGFBREEsRUFFbkJhLE9BRm1CLENBR25CRCxhQUhtQixDQUdMLE9BSEssRUFJbkJFLFNBSm1CLENBSVQsSUFKUyxDQUFwQjtNQUtBLE9BQU9KLFdBQVA7SUFDSDtFQXJCTDtJQUFBO0lBQUEsT0F1Qkksd0JBQWM7TUFDVixLQUFLSyxRQUFMLEdBQWdCLEtBQUtDLFlBQUwsRUFBaEI7O01BQ0EsS0FBS0MsVUFBTDs7TUFDQSxLQUFLQyxnQkFBTDs7TUFDQSxLQUFLQyxVQUFMLEdBQWtCLEtBQUtKLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixjQUE1QixDQUFsQjtNQUNBLEtBQUtPLFVBQUwsQ0FBZ0JDLEdBQWhCLEdBQXNCLEtBQUt4QixLQUEzQjtNQUNBLEtBQUt1QixVQUFMLENBQWdCRSxHQUFoQixHQUFzQixLQUFLdkIsS0FBM0I7TUFDQSxLQUFLaUIsUUFBTCxDQUFjSCxhQUFkLENBQTRCLGFBQTVCLEVBQTJDVSxXQUEzQyxHQUF5RCxLQUFLeEIsS0FBOUQ7O01BQ0EsS0FBS3lCLGNBQUw7O01BQ0EsS0FBS0MsV0FBTCxHQUFtQixLQUFLVCxRQUFMLENBQWNILGFBQWQsQ0FBNEIsc0JBQTVCLENBQW5CO01BQ0EsS0FBS2EsU0FBTCxHQUFpQixLQUFLVixRQUFMLENBQWNILGFBQWQsQ0FBNEIsYUFBNUIsQ0FBakI7TUFDQSxLQUFLYyxpQkFBTCxHQUF5QixLQUFLWCxRQUFMLENBQWNILGFBQWQsQ0FBNEIsd0JBQTVCLENBQXpCOztNQUVBLElBQUcsS0FBS0gsS0FBTCxDQUFXa0IsTUFBWCxHQUFvQixDQUF2QixFQUF5QjtRQUNyQixLQUFLQyxRQUFMO01BQ0g7O01BQ0QsSUFBRyxLQUFLeEIsUUFBTCxLQUFrQixLQUFLRCxLQUExQixFQUFnQztRQUM1QixLQUFLcUIsV0FBTCxDQUFpQkssTUFBakI7TUFDSDs7TUFFRCxPQUFPLEtBQUtkLFFBQVo7SUFDSCxDQTVDTCxDQThDSTs7RUE5Q0o7SUFBQTtJQUFBLE9BZ0RJLHNCQUFZO01BQUE7O01BQ1IsS0FBS0EsUUFBTCxDQUFjSCxhQUFkLENBQTRCLGFBQTVCLEVBQTJDa0IsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFlBQU07UUFDdkUsS0FBSSxDQUFDdEIsZ0JBQUwsQ0FBc0IsS0FBdEI7TUFDSCxDQUZEO0lBR0g7RUFwREw7SUFBQTtJQUFBLE9Bc0RJLDRCQUFrQjtNQUFBOztNQUNkLEtBQUtPLFFBQUwsQ0FBY0gsYUFBZCxDQUE0QixzQkFBNUIsRUFBb0RrQixnQkFBcEQsQ0FBcUUsT0FBckUsRUFBOEUsWUFBTTtRQUNoRixNQUFJLENBQUM1QixpQkFBTCxDQUF1QixNQUF2QjtNQUNILENBRkQ7SUFHSDtFQTFETDtJQUFBO0lBQUEsT0E0REksc0JBQVk7TUFDUixLQUFLYSxRQUFMLENBQWNjLE1BQWQ7SUFDSDtFQTlETDtJQUFBO0lBQUEsT0FnRUksMEJBQWdCO01BQUE7O01BQ1osS0FBS1YsVUFBTCxDQUFnQlcsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQU07UUFDNUMsTUFBSSxDQUFDN0IsZ0JBQUwsQ0FBc0I7VUFBQ0YsSUFBSSxFQUFFLE1BQUksQ0FBQ0QsS0FBWjtVQUFtQkQsSUFBSSxFQUFFLE1BQUksQ0FBQ0Q7UUFBOUIsQ0FBdEI7TUFDSCxDQUZEO0lBR0gsQ0FwRUwsQ0FzRUk7O0VBdEVKO0lBQUE7SUFBQSxPQXdFSSxxQkFBWTtNQUFBOztNQUNSLE9BQU8sS0FBS2EsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQixVQUFBQyxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDMUIsR0FBTCxLQUFhLE1BQUksQ0FBQ0gsS0FBdEI7TUFBQSxDQUFwQixDQUFQO0lBQ0g7RUExRUw7SUFBQTtJQUFBLE9BNEVJLG9CQUFVO01BQ04sSUFBRyxLQUFLOEIsU0FBTCxFQUFILEVBQW9CO1FBQ2hCLEtBQUtDLElBQUw7TUFDSCxDQUZELE1BRU07UUFDRixLQUFLQyxPQUFMO01BQ0g7SUFDSjtFQWxGTDtJQUFBO0lBQUEsT0FvRkksZ0JBQU07TUFDRixLQUFLVixTQUFMLENBQWVXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLG1CQUE3Qjs7TUFDQSxLQUFLWCxpQkFBTCxDQUF1QkosV0FBdkIsR0FBcUMsS0FBS2IsS0FBTCxDQUFXa0IsTUFBaEQ7SUFDSDtFQXZGTDtJQUFBO0lBQUEsT0EwRkksbUJBQVM7TUFDTCxLQUFLRixTQUFMLENBQWVXLFNBQWYsQ0FBeUJQLE1BQXpCLENBQWdDLG1CQUFoQzs7TUFDQSxLQUFLSCxpQkFBTCxDQUF1QkosV0FBdkIsR0FBcUMsS0FBS2IsS0FBTCxDQUFXa0IsTUFBaEQ7O01BQ0EsSUFBRyxLQUFLbEIsS0FBTCxDQUFXa0IsTUFBWCxJQUFxQixDQUF4QixFQUEwQjtRQUN0QixLQUFLRCxpQkFBTCxDQUF1QkosV0FBdkIsR0FBcUMsRUFBckM7TUFDSDtJQUNKO0VBaEdMOztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTWdCLGFBQWI7RUFDSSx1QkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFBa0M7SUFBQTs7SUFDOUIsS0FBS0MsVUFBTCxHQUFrQkYsU0FBbEI7SUFDQSxLQUFLRyxXQUFMLEdBQW1CRixVQUFuQjtJQUNBLEtBQUtHLFVBQUwsR0FBa0JDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtILFdBQUwsQ0FBaUJJLGdCQUFqQixDQUFrQyxLQUFLTCxVQUFMLENBQWdCTSxhQUFsRCxDQUFYLENBQWxCO0lBQ0EsS0FBS0MsY0FBTCxHQUFzQixLQUFLTixXQUFMLENBQWlCOUIsYUFBakIsQ0FBK0IsS0FBSzZCLFVBQUwsQ0FBZ0JRLG9CQUEvQyxDQUF0QjtFQUNIOztFQU5MO0lBQUE7SUFBQSxPQVFJLDRCQUFtQjtNQUNmLEtBQUtDLGtCQUFMO0lBQ0g7RUFWTDtJQUFBO0lBQUEsT0FZSSw4QkFBcUI7TUFBQTs7TUFDakIsS0FBS0MsaUJBQUw7O01BQ0EsS0FBS1IsVUFBTCxDQUFnQlMsT0FBaEIsQ0FBd0IsVUFBQ0wsYUFBRCxFQUFtQjtRQUN2Q0EsYUFBYSxDQUFDakIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtVQUMxQyxLQUFJLENBQUN1QixtQkFBTCxDQUF5Qk4sYUFBekI7O1VBQ0EsS0FBSSxDQUFDSSxpQkFBTDtRQUNILENBSEQ7TUFJSCxDQUxEO0lBTUg7RUFwQkw7SUFBQTtJQUFBLE9Bc0JJLDZCQUFvQkosYUFBcEIsRUFBa0M7TUFDOUIsSUFBSSxDQUFDQSxhQUFhLENBQUNPLFFBQWQsQ0FBdUJDLEtBQTVCLEVBQW1DO1FBQy9CLEtBQUtDLFVBQUwsQ0FBZ0JULGFBQWhCLEVBQStCQSxhQUFhLENBQUNVLGlCQUE3QztNQUNILENBRkQsTUFFTztRQUNILEtBQUtDLFVBQUwsQ0FBZ0JYLGFBQWhCO01BQ0Y7SUFDTDtFQTVCTDtJQUFBO0lBQUEsT0E4Qkksb0JBQVdBLGFBQVgsRUFBMEJZLFlBQTFCLEVBQXVDO01BQ25DLElBQU1DLFlBQVksR0FBRyxLQUFLbEIsV0FBTCxDQUFpQjlCLGFBQWpCLFlBQW1DbUMsYUFBYSxDQUFDYyxFQUFqRCxZQUFyQjs7TUFDQWQsYUFBYSxDQUFDWCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixLQUFLSSxVQUFMLENBQWdCcUIsZUFBNUM7TUFDQUYsWUFBWSxDQUFDdEMsV0FBYixHQUEyQnFDLFlBQTNCO01BQ0FDLFlBQVksQ0FBQ3hCLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLEtBQUtJLFVBQUwsQ0FBZ0JzQixVQUEzQztJQUNIO0VBbkNMO0lBQUE7SUFBQSxPQXFDSSxvQkFBV2hCLGFBQVgsRUFBeUI7TUFDckIsSUFBTWEsWUFBWSxHQUFHLEtBQUtsQixXQUFMLENBQWlCOUIsYUFBakIsWUFBbUNtQyxhQUFhLENBQUNjLEVBQWpELFlBQXJCOztNQUNBZCxhQUFhLENBQUNYLFNBQWQsQ0FBd0JQLE1BQXhCLENBQStCLEtBQUtZLFVBQUwsQ0FBZ0JxQixlQUEvQztNQUNBRixZQUFZLENBQUN4QixTQUFiLENBQXVCUCxNQUF2QixDQUE4QixLQUFLWSxVQUFMLENBQWdCc0IsVUFBOUM7TUFDQUgsWUFBWSxDQUFDdEMsV0FBYixHQUEyQixFQUEzQjtJQUNIO0VBMUNMO0lBQUE7SUFBQSxPQTRDSSw2QkFBbUI7TUFDZixJQUFJLEtBQUswQyxnQkFBTCxFQUFKLEVBQTZCO1FBQ3pCLEtBQUtoQixjQUFMLENBQW9CWixTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsS0FBS0ksVUFBTCxDQUFnQndCLHlCQUFsRDs7UUFDQSxLQUFLakIsY0FBTCxDQUFvQmtCLFlBQXBCLENBQWlDLFVBQWpDLEVBQTZDLFVBQTdDO01BQ0gsQ0FIRCxNQUdPO1FBQ0gsS0FBS2xCLGNBQUwsQ0FBb0JaLFNBQXBCLENBQThCUCxNQUE5QixDQUFxQyxLQUFLWSxVQUFMLENBQWdCd0IseUJBQXJEOztRQUNBLEtBQUtqQixjQUFMLENBQW9CbUIsZUFBcEIsQ0FBb0MsVUFBcEMsRUFBZ0QsVUFBaEQ7TUFDSDtJQUNKO0VBcERMO0lBQUE7SUFBQSxPQXNESSw0QkFBa0I7TUFDZCxPQUFPLEtBQUt4QixVQUFMLENBQWdCWixJQUFoQixDQUFxQixVQUFDZ0IsYUFBRCxFQUFtQjtRQUMzQyxPQUFPLENBQUNBLGFBQWEsQ0FBQ08sUUFBZCxDQUF1QkMsS0FBL0I7TUFDSCxDQUZNLENBQVA7SUFHSDtFQTFETDs7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1hLEtBQWI7RUFDSSxlQUFZQyxhQUFaLEVBQTBCO0lBQUE7O0lBQ3RCLEtBQUtDLE1BQUwsR0FBYzNELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QnlELGFBQXZCLENBQWQ7SUFDQSxLQUFLRSxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0VBQ0g7O0VBSkw7SUFBQTtJQUFBLE9BTUksZ0JBQU07TUFDRixLQUFLRixNQUFMLENBQVlsQyxTQUFaLENBQXNCQyxHQUF0QixDQUEyQixjQUEzQjs7TUFDQTFCLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUt5QyxlQUF4QztJQUNIO0VBVEw7SUFBQTtJQUFBLE9BV0ksaUJBQU87TUFDSCxLQUFLRCxNQUFMLENBQVlsQyxTQUFaLENBQXNCUCxNQUF0QixDQUE2QixjQUE3Qjs7TUFDQWxCLFFBQVEsQ0FBQzhELG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtGLGVBQTNDO0lBQ0g7RUFkTDtJQUFBO0lBQUEsT0FnQkkseUJBQWdCRyxHQUFoQixFQUFvQjtNQUNoQixJQUFJQSxHQUFHLENBQUNDLEdBQUosS0FBWSxRQUFoQixFQUF5QjtRQUNyQixLQUFLQyxLQUFMO01BQ0Q7SUFDTjtFQXBCTDtJQUFBO0lBQUEsT0FzQkksNEJBQWtCO01BQUE7O01BQ2QsS0FBS04sTUFBTCxDQUFZeEMsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQytDLEdBQUQsRUFBUztRQUMvQyxJQUFHQSxHQUFHLENBQUNDLE1BQUosQ0FBVzFDLFNBQVgsQ0FBcUIyQyxRQUFyQixDQUE4QixxQkFBOUIsS0FBd0RGLEdBQUcsQ0FBQ0MsTUFBSixDQUFXMUMsU0FBWCxDQUFxQjJDLFFBQXJCLENBQThCLE9BQTlCLENBQTNELEVBQWtHO1VBQzlGLEtBQUksQ0FBQ0gsS0FBTDtRQUNIO01BQ0osQ0FKRDtJQUtIO0VBNUJMOztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNSSxhQUFiO0VBQUE7O0VBQUE7O0VBQ0ksNkJBQWdDWCxhQUFoQyxFQUE4QztJQUFBOztJQUFBLElBQWpDWSxnQkFBaUMsUUFBakNBLGdCQUFpQzs7SUFBQTs7SUFDMUMsMEJBQU1aLGFBQU47SUFDQSxNQUFLYSxVQUFMLEdBQWtCLE1BQUtaLE1BQUwsQ0FBWTFELGFBQVosQ0FBMEIsY0FBMUIsQ0FBbEI7SUFDQSxNQUFLK0IsVUFBTCxHQUFrQixNQUFLMkIsTUFBTCxDQUFZeEIsZ0JBQVosQ0FBNkIsZUFBN0IsQ0FBbEI7SUFDQSxNQUFLcUMsYUFBTCxHQUFxQixNQUFLYixNQUFMLENBQVkxRCxhQUFaLENBQTBCLGdCQUExQixDQUFyQjtJQUNBLE1BQUt3RSxpQkFBTCxHQUF5QkgsZ0JBQXpCO0lBTDBDO0VBTTdDOztFQVBMO0lBQUE7SUFBQSxPQVNJLHdCQUFlSSxVQUFmLEVBQTJCQyxJQUEzQixFQUFnQztNQUM1QixJQUFHRCxVQUFILEVBQWM7UUFDVixLQUFLRixhQUFMLENBQW1CN0QsV0FBbkIsR0FBaUNnRSxJQUFqQztNQUNILENBRkQsTUFFTTtRQUNGLEtBQUtILGFBQUwsQ0FBbUI3RCxXQUFuQixHQUFpQ2dFLElBQWpDO01BQ0g7SUFDSjtFQWZMO0lBQUE7SUFBQSxPQWlCSSwyQkFBaUI7TUFBQTs7TUFDYixLQUFLQyxXQUFMLEdBQW1CLEVBQW5COztNQUNBLEtBQUs1QyxVQUFMLENBQWdCUyxPQUFoQixDQUF3QixVQUFBb0MsS0FBSyxFQUFJO1FBQzdCLE1BQUksQ0FBQ0QsV0FBTCxDQUFpQkMsS0FBSyxDQUFDekYsSUFBdkIsSUFBK0J5RixLQUFLLENBQUNDLEtBQXJDO01BRUgsQ0FIRDs7TUFJQSxPQUFPLEtBQUtGLFdBQVo7SUFDSDtFQXhCTDtJQUFBO0lBQUEsT0EwQkksaUJBQU87TUFDSDs7TUFDQSxLQUFLTCxVQUFMLENBQWdCUSxLQUFoQjtJQUNIO0VBN0JMO0lBQUE7SUFBQSxPQStCSSw2QkFBbUI7TUFBQTs7TUFDZjs7TUFDQSxLQUFLUixVQUFMLENBQWdCcEQsZ0JBQWhCLENBQWlDLFFBQWpDLEVBQTJDLFVBQUMrQyxHQUFELEVBQVM7UUFDaERBLEdBQUcsQ0FBQ2MsY0FBSjs7UUFDQSxNQUFJLENBQUNQLGlCQUFMLENBQXVCLE1BQUksQ0FBQ1EsZUFBTCxFQUF2Qjs7UUFDQSxNQUFJLENBQUNoQixLQUFMO01BQ0gsQ0FKRDtJQUtIO0VBdENMOztFQUFBO0FBQUEsRUFBbUNSLDRDQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU15QixjQUFiO0VBQUE7O0VBQUE7O0VBQ0ksd0JBQWF4QixhQUFiLEVBQTJCO0lBQUE7O0lBQUE7O0lBQ3ZCLDBCQUFNQSxhQUFOO0lBQ0EsTUFBS3lCLE1BQUwsR0FBYyxNQUFLeEIsTUFBTCxDQUFZMUQsYUFBWixDQUEwQixvQkFBMUIsQ0FBZDtJQUNBLE1BQUttRixNQUFMLEdBQWMsTUFBS3pCLE1BQUwsQ0FBWTFELGFBQVosQ0FBMEIsb0JBQTFCLENBQWQ7SUFIdUI7RUFJMUI7O0VBTEw7SUFBQTtJQUFBLE9BT0ksb0JBQWtCO01BQUEsSUFBWmIsSUFBWSxRQUFaQSxJQUFZO01BQUEsSUFBTkYsSUFBTSxRQUFOQSxJQUFNO01BQ2QsS0FBS2tHLE1BQUwsQ0FBWXpFLFdBQVosR0FBMEJ2QixJQUExQjtNQUNBLEtBQUsrRixNQUFMLENBQVl6RSxHQUFaLEdBQWtCdEIsSUFBbEI7TUFDQSxLQUFLK0YsTUFBTCxDQUFZMUUsR0FBWixHQUFrQnZCLElBQWxCOztNQUNBO0lBQ0g7RUFaTDs7RUFBQTtBQUFBLEVBQW9DdUUsNENBQXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTTRCLGVBQWI7RUFBQTs7RUFBQTs7RUFDSSwrQkFBZ0MzQixhQUFoQyxFQUE4QztJQUFBOztJQUFBLElBQWpDWSxnQkFBaUMsUUFBakNBLGdCQUFpQzs7SUFBQTs7SUFDMUMsMEJBQU1aLGFBQU47SUFDQSxNQUFLYyxhQUFMLEdBQXFCLE1BQUtiLE1BQUwsQ0FBWTFELGFBQVosQ0FBMEIsZ0JBQTFCLENBQXJCO0lBQ0EsTUFBS3dFLGlCQUFMLEdBQXlCSCxnQkFBekI7SUFIMEM7RUFJN0M7O0VBTEw7SUFBQTtJQUFBLE9BT0ksY0FBS2dCLElBQUwsRUFBVTtNQUNOLEtBQUtBLElBQUwsR0FBWUEsSUFBWjs7TUFDQTtJQUNIO0VBVkw7SUFBQTtJQUFBLE9BWUksNkJBQW1CO01BQUE7O01BQ2Y7O01BQ0EsS0FBS2QsYUFBTCxDQUFtQnJELGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxVQUFDK0MsR0FBRCxFQUFTO1FBQ2xEQSxHQUFHLENBQUNjLGNBQUo7O1FBQ0EsTUFBSSxDQUFDUCxpQkFBTDs7UUFDQSxNQUFJLENBQUNSLEtBQUw7TUFDSCxDQUpEO0lBS0g7RUFuQkw7O0VBQUE7QUFBQSxFQUFxQ1IseUNBQXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU04QixPQUFiO0VBQ0ksdUJBQXdCQyxpQkFBeEIsRUFBMEM7SUFBQSxJQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCOztJQUFBOztJQUN0QyxLQUFLQyxTQUFMLEdBQWlCRCxRQUFqQjtJQUNBLEtBQUtFLFVBQUwsR0FBa0IzRixRQUFRLENBQUNDLGFBQVQsQ0FBdUJ1RixpQkFBdkIsQ0FBbEI7RUFDSDs7RUFKTDtJQUFBO0lBQUEsT0FNSSxxQkFBWUksU0FBWixFQUFzQjtNQUFBOztNQUNsQkEsU0FBUyxDQUFDbkQsT0FBVixDQUFrQixVQUFDcEIsSUFBRDtRQUFBLE9BQVEsS0FBSSxDQUFDcUUsU0FBTCxDQUFlckUsSUFBZixDQUFSO01BQUEsQ0FBbEI7SUFDSDtFQVJMO0lBQUE7SUFBQSxPQVVJLGlCQUFRd0UsT0FBUixFQUFnQjtNQUNaLEtBQUtGLFVBQUwsQ0FBZ0JHLE9BQWhCLENBQXdCRCxPQUF4QjtJQUNIO0VBWkw7O0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNRSxRQUFiO0VBQ0ksd0JBQTJEO0lBQUEsSUFBOUNDLFlBQThDLFFBQTlDQSxZQUE4QztJQUFBLElBQWhDQyxhQUFnQyxRQUFoQ0EsYUFBZ0M7SUFBQSxJQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztJQUFBOztJQUN2RCxLQUFLL0csS0FBTCxHQUFhYSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIrRixZQUF2QixDQUFiO0lBQ0EsS0FBS0csTUFBTCxHQUFjbkcsUUFBUSxDQUFDQyxhQUFULENBQXVCZ0csYUFBdkIsQ0FBZDtJQUNBLEtBQUtHLE9BQUwsR0FBZXBHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QmlHLGNBQXZCLENBQWY7RUFDSDs7RUFMTDtJQUFBO0lBQUEsT0FPSSx1QkFBYTtNQUNULE9BQU87UUFDSDlHLElBQUksRUFBRSxLQUFLRCxLQUFMLENBQVd3QixXQURkO1FBRUgwRixLQUFLLEVBQUUsS0FBS0YsTUFBTCxDQUFZeEYsV0FGaEI7UUFHSDJGLFVBQVUsRUFBRSxLQUFLRixPQUFMLENBQWEzRjtNQUh0QixDQUFQO0lBS0g7RUFiTDtJQUFBO0lBQUEsT0FlSSxxQkFBWTdCLElBQVosRUFBaUI7TUFDYixLQUFLTyxLQUFMLENBQVd3QixXQUFYLEdBQXlCL0IsSUFBSSxDQUFDUSxJQUE5QjtNQUNBLEtBQUsrRyxNQUFMLENBQVl4RixXQUFaLEdBQTBCL0IsSUFBSSxDQUFDeUgsS0FBL0I7SUFDSDtFQWxCTDtJQUFBO0lBQUEsT0FvQkksbUJBQVV6SCxJQUFWLEVBQWU7TUFDWCxLQUFLd0gsT0FBTCxDQUFhM0YsR0FBYixHQUFtQjdCLElBQUksQ0FBQ0wsTUFBeEI7SUFFSDtFQXZCTDs7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FFLElBQU1nSSxtQkFBbUIsR0FBRztFQUMxQm5FLGFBQWEsRUFBRSxlQURXO0VBRTFCRSxvQkFBb0IsRUFBRSxnQkFGSTtFQUcxQmdCLHlCQUF5QixFQUFFLHdCQUhEO0VBSTFCSCxlQUFlLEVBQUUseUJBSlM7RUFLMUJDLFVBQVUsRUFBRTtBQUxjLENBQTVCLEVBUUY7O0FBQ0EsSUFBTW9ELE9BQU8sR0FBR3hHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQixFQUVBOztBQUNBLElBQU13RyxnQkFBZ0IsR0FBR3pHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBekI7QUFDQSxJQUFNeUcsWUFBWSxHQUFHMUcsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjtBQUNBLElBQU0wRyxlQUFlLEdBQUczRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXhCLEVBRUE7O0FBQ0EsSUFBTTJHLHNCQUFzQixHQUFHSixPQUFPLENBQUN2RyxhQUFSLENBQXNCLHVCQUF0QixDQUEvQjtBQUNBLElBQU00RyxzQkFBc0IsR0FBR0wsT0FBTyxDQUFDdkcsYUFBUixDQUFzQixzQkFBdEIsQ0FBL0I7QUFDQSxJQUFNNkcsNEJBQTRCLEdBQUdOLE9BQU8sQ0FBQ3ZHLGFBQVIsQ0FBc0IsOEJBQXRCLENBQXJDLEVBRUE7O0FBQ0EsSUFBTThHLGdCQUFnQixHQUFHTixnQkFBZ0IsQ0FBQ3hHLGFBQWpCLENBQStCLHlCQUEvQixDQUF6QjtBQUNBLElBQU0rRyxpQkFBaUIsR0FBR1AsZ0JBQWdCLENBQUN4RyxhQUFqQixDQUErQiwwQkFBL0IsQ0FBMUI7QUFDQSxJQUFNZ0gsa0JBQWtCLEdBQUdOLGVBQWUsQ0FBQzFHLGFBQWhCLENBQThCLHlCQUE5QixDQUEzQixFQUVBOztBQUNBLElBQU1pSCxnQkFBZ0IsR0FBR1QsZ0JBQWdCLENBQUN4RyxhQUFqQixDQUErQixjQUEvQixDQUF6QjtBQUNBLElBQU1rSCxnQkFBZ0IsR0FBR1QsWUFBWSxDQUFDekcsYUFBYixDQUEyQixjQUEzQixDQUF6QjtBQUNBLElBQU1tSCxzQkFBc0IsR0FBR1QsZUFBZSxDQUFDMUcsYUFBaEIsQ0FBOEIsY0FBOUIsQ0FBL0I7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQU1BOztBQUdBLElBQU1vSCxpQkFBaUIsR0FBRyxJQUFJMUYsdUVBQUosQ0FBbUI0RSxvRUFBbkIsRUFBd0NZLGlFQUF4QyxDQUExQjtBQUNBLElBQU1HLHFCQUFxQixHQUFHLElBQUkzRix1RUFBSixDQUFtQjRFLG9FQUFuQixFQUF3Q1csaUVBQXhDLENBQTlCO0FBQ0EsSUFBTUssMEJBQTBCLEdBQUcsSUFBSTVGLHVFQUFKLENBQW1CNEUsb0VBQW5CLEVBQXdDYSx1RUFBeEMsQ0FBbkM7QUFDQSxJQUFNSSxRQUFRLEdBQUcsSUFBSXpCLDZEQUFKLENBQWM7RUFBQ0MsWUFBWSxFQUFFLGdCQUFmO0VBQWlDQyxhQUFhLEVBQUUsaUJBQWhEO0VBQy9CQyxjQUFjLEVBQUU7QUFEZSxDQUFkLENBQWpCO0FBR0EsSUFBTXVCLGNBQWMsR0FBRyxJQUFJdkMseUVBQUosQ0FBb0IsbUJBQXBCLENBQXZCO0FBRUEsSUFBTXdDLEdBQUcsR0FBRyxJQUFJeEssZ0RBQUosQ0FBUztFQUNuQkcsT0FBTyxFQUFDLDhDQURXO0VBRW5CRSxPQUFPLEVBQUU7SUFDUFksYUFBYSxFQUFFO0VBRFI7QUFGVSxDQUFULENBQVosRUFPQTs7QUFFQSxJQUFNd0osZ0JBQWdCLEdBQUcsSUFBSXRELHVFQUFKLENBQW1CO0VBQUNDLGdCQUFnQixFQUFFLDBCQUFDc0QsWUFBRCxFQUFrQjtJQUMvRUMsZ0JBQWdCLENBQUNDLGNBQWpCLENBQWdDLElBQWhDLEVBQXNDLGNBQXRDO0lBQ0FKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZSCxZQUFaLEVBQ0c1SixJQURILENBQ1EsVUFBQ2dLLFlBQUQsRUFBa0I7TUFDdEIsSUFBTTFDLElBQUksR0FBRzJDLFVBQVUsQ0FDckI7UUFBQzdJLElBQUksRUFBRTRJLFlBQVksQ0FBQzVJLElBQXBCO1FBQTBCRixJQUFJLEVBQUU4SSxZQUFZLENBQUM5SSxJQUE3QztRQUFtRFEsS0FBSyxFQUFFc0ksWUFBWSxDQUFDdEksS0FBdkU7UUFDRUMsR0FBRyxFQUFFcUksWUFBWSxDQUFDckksR0FEcEI7UUFDeUJHLEtBQUssRUFBRWtJLFlBQVksQ0FBQ2xJO01BRDdDLENBRHFCLEVBR3JCLDBCQUhxQixFQUdPLDhCQUhQLENBQXZCO01BSUFvSSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I3QyxJQUFoQjtJQUNELENBUEgsRUFRRzhDLEtBUkgsQ0FRUyxVQUFDQyxHQUFELEVBQVM7TUFDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7SUFDRCxDQVZILEVBV0dHLE9BWEgsQ0FXVyxZQUFNO01BQ2JYLGdCQUFnQixDQUFDQyxjQUFqQixDQUFnQyxLQUFoQyxFQUF1QyxTQUF2QztJQUNELENBYkg7RUFjRDtBQWhCMkMsQ0FBbkIsRUFpQnpCLGlCQWpCeUIsQ0FBekIsRUFtQkE7O0FBRUEsSUFBTUksT0FBTyxHQUFHLElBQUkzQywyREFBSixDQUFhO0VBQUNFLFFBQVEsRUFBRSxrQkFBQzdHLElBQUQsRUFBUztJQUMvQyxJQUFNMEcsSUFBSSxHQUFHMkMsVUFBVSxDQUFDckosSUFBRCxFQUFPLDBCQUFQLEVBQW1DLDhCQUFuQyxDQUF2QjtJQUNBc0osT0FBTyxDQUFDQyxPQUFSLENBQWdCN0MsSUFBaEI7RUFDRDtBQUg0QixDQUFiLEVBR1osOEJBSFksQ0FBaEIsRUFLQTs7QUFFQSxTQUFTMkMsVUFBVCxDQUFxQnJKLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQ0YsWUFBakMsRUFBK0M7RUFDN0MsSUFBTTJHLElBQUksR0FBRyxJQUFJNUcscURBQUosQ0FBUztJQUFDRSxJQUFJLEVBQUpBLElBQUQ7SUFBT0MsSUFBSSxFQUFKQSxJQUFQO0lBQ3BCQyxlQUFlLEVBQUU7TUFBQSxPQUFNMkksY0FBYyxDQUFDZ0IsSUFBZixDQUFvQjdKLElBQXBCLENBQU47SUFBQSxDQURHO0lBRXBCRyxnQkFBZ0IsRUFBRSwwQkFBQ3VHLElBQUQ7TUFBQSxPQUFVb0QsVUFBVSxDQUFDRCxJQUFYLENBQWdCbkQsSUFBaEIsQ0FBVjtJQUFBLENBRkU7SUFHcEJ0RyxlQUFlLEVBQUUseUJBQUNzRyxJQUFELEVBQVU7TUFDekIsSUFBRyxDQUFDQSxJQUFJLENBQUNoRSxTQUFMLEVBQUosRUFBcUI7UUFDbkJvRyxHQUFHLENBQUNuRyxJQUFKLENBQVMzQyxJQUFJLENBQUNlLEdBQWQsRUFDRzNCLElBREgsQ0FDUSxVQUFDZ0ssWUFBRCxFQUFrQjtVQUN0QjFDLElBQUksQ0FBQ3hGLEtBQUwsR0FBYWtJLFlBQVksQ0FBQ2xJLEtBQTFCO1VBQ0F3RixJQUFJLENBQUMvRCxJQUFMO1FBQ0QsQ0FKSCxFQUtHNkcsS0FMSCxDQUtTLFVBQUNDLEdBQUQsRUFBUztVQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtRQUNELENBUEg7TUFRRCxDQVRELE1BU0s7UUFDSFgsR0FBRyxDQUFDbEcsT0FBSixDQUFZNUMsSUFBSSxDQUFDZSxHQUFqQixFQUNHM0IsSUFESCxDQUNRLFVBQUNnSyxZQUFELEVBQWtCO1VBQ3RCMUMsSUFBSSxDQUFDeEYsS0FBTCxHQUFha0ksWUFBWSxDQUFDbEksS0FBMUI7VUFDQXdGLElBQUksQ0FBQzlELE9BQUw7UUFDRCxDQUpILEVBS0c0RyxLQUxILENBS1MsVUFBQ0MsR0FBRCxFQUFTO1VBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO1FBQ0QsQ0FQSDtNQVFEO0lBQ0Y7RUF2Qm1CLENBQVQsRUF1QlAxSixZQXZCTyxDQUFiO0VBd0JBLElBQU1vQixXQUFXLEdBQUd1RixJQUFJLENBQUNxRCxZQUFMLEVBQXBCO0VBQ0EsT0FBTzVJLFdBQVA7QUFDRDs7QUFFRCxJQUFNMkksVUFBVSxHQUFHLElBQUlyRCx3RUFBSixDQUFvQjtFQUNyQ2YsZ0JBQWdCLEVBQUUsNEJBQU07SUFDdEJvRCxHQUFHLENBQUNnQixVQUFKLENBQWVBLFVBQVUsQ0FBQ3BELElBQVgsQ0FBZ0IxRixPQUEvQixFQUNHNUIsSUFESCxDQUNRO01BQUEsT0FBTTBLLFVBQVUsQ0FBQ3BELElBQVgsQ0FBZ0JvRCxVQUFoQixFQUFOO0lBQUEsQ0FEUixFQUVHTixLQUZILENBRVMsVUFBQ0MsR0FBRCxFQUFTO01BQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0lBQ0QsQ0FKSDtFQUtEO0FBUG9DLENBQXBCLEVBU25CLGVBVG1CLENBQW5CO0FBV0F4Qix3RkFBQSxDQUF3QyxPQUF4QyxFQUFpRCxZQUFNO0VBQ3JEUSxpQkFBaUIsQ0FBQzdFLGlCQUFsQjtFQUNBbUYsZ0JBQWdCLENBQUNjLElBQWpCO0FBQ0QsQ0FIRCxHQUtBOztBQUVBLElBQU1aLGdCQUFnQixHQUFHLElBQUl4RCx1RUFBSixDQUFtQjtFQUFDQyxnQkFBZ0IsRUFBRSwwQkFBQ3NFLFdBQUQsRUFBZ0I7SUFDN0VmLGdCQUFnQixDQUFDQyxjQUFqQixDQUFnQyxJQUFoQyxFQUFzQyxjQUF0QztJQUNBSixHQUFHLENBQUNtQixXQUFKLENBQWdCRCxXQUFoQixFQUNHNUssSUFESCxDQUNRLFVBQUNnSyxZQUFELEVBQWtCO01BQ3RCUixRQUFRLENBQUNzQixXQUFULENBQXFCZCxZQUFyQjtJQUNELENBSEgsRUFJR0ksS0FKSCxDQUlTLFVBQUNDLEdBQUQsRUFBUztNQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtJQUNELENBTkgsRUFPR0csT0FQSCxDQU9XLFlBQU07TUFDYlgsZ0JBQWdCLENBQUNDLGNBQWpCLENBQWdDLEtBQWhDLEVBQXVDLFdBQXZDO0lBQ0QsQ0FUSDtFQVVEO0FBWjJDLENBQW5CLEVBWXJCLGdCQVpxQixDQUF6QjtBQWNGLElBQU1pQixzQkFBc0IsR0FBRyxJQUFJMUUsdUVBQUosQ0FBbUI7RUFBQ0MsZ0JBQWdCLEVBQUUsMEJBQUMwRSxVQUFELEVBQWU7SUFDbEZELHNCQUFzQixDQUFDakIsY0FBdkIsQ0FBc0MsSUFBdEMsRUFBNEMsY0FBNUM7SUFDQUosR0FBRyxDQUFDdUIsVUFBSixDQUFlRCxVQUFmLEVBQ0doTCxJQURILENBQ1EsVUFBQ2dLLFlBQUQsRUFBa0I7TUFDdEJSLFFBQVEsQ0FBQzBCLFNBQVQsQ0FBbUJsQixZQUFuQjtJQUNELENBSEgsRUFJR0ksS0FKSCxDQUlTLFVBQUNDLEdBQUQsRUFBUztNQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtJQUNELENBTkgsRUFPR0csT0FQSCxDQU9XLFlBQU07TUFDYk8sc0JBQXNCLENBQUNqQixjQUF2QixDQUFzQyxLQUF0QyxFQUE2QyxXQUE3QztJQUNELENBVEg7RUFVRDtBQVppRCxDQUFuQixFQVkzQixvQkFaMkIsQ0FBL0I7QUFjQWxCLHdGQUFBLENBQXdDLE9BQXhDLEVBQWlELFlBQU07RUFDbkQsSUFBTXVDLGNBQWMsR0FBRzNCLFFBQVEsQ0FBQzRCLFdBQVQsRUFBdkI7RUFDQSxJQUFNQyxRQUFRLEdBQUdGLGNBQWMsQ0FBQy9KLElBQWhDO0VBQ0EsSUFBTWtLLFNBQVMsR0FBR0gsY0FBYyxDQUFDOUMsS0FBakM7RUFDQVUsdUVBQUEsR0FBeUJzQyxRQUF6QjtFQUNBckMsd0VBQUEsR0FBMEJzQyxTQUExQjtFQUNBekIsZ0JBQWdCLENBQUNZLElBQWpCO0FBRUgsQ0FSRDtBQVVBM0IsOEZBQUEsQ0FBOEMsT0FBOUMsRUFBdUQsWUFBTTtFQUMzRCxJQUFNeUMsaUJBQWlCLEdBQUcvQixRQUFRLENBQUM0QixXQUFULEVBQTFCO0VBQ0EsSUFBTTlDLFVBQVUsR0FBR2lELGlCQUFpQixDQUFDakQsVUFBckM7RUFDQVcseUVBQUEsR0FBMkJYLFVBQTNCO0VBQ0F5QyxzQkFBc0IsQ0FBQ04sSUFBdkI7QUFDRCxDQUxEO0FBT0E5SyxPQUFPLENBQUM2TCxHQUFSLENBQVksQ0FBQzlCLEdBQUcsQ0FBQzBCLFdBQUosRUFBRCxFQUFvQjFCLEdBQUcsQ0FBQytCLGVBQUosRUFBcEIsQ0FBWixFQUNHekwsSUFESCxDQUNRLFVBQUMwTCxpQkFBRCxFQUF1QjtFQUMzQmxDLFFBQVEsQ0FBQ3NCLFdBQVQsQ0FBcUJZLGlCQUFpQixDQUFDLENBQUQsQ0FBdEM7RUFDQWxDLFFBQVEsQ0FBQzBCLFNBQVQsQ0FBbUJRLGlCQUFpQixDQUFDLENBQUQsQ0FBcEM7RUFDQXhCLE9BQU8sQ0FBQ3lCLFdBQVIsQ0FBb0JELGlCQUFpQixDQUFDLENBQUQsQ0FBakIsQ0FBcUJFLE9BQXJCLEVBQXBCO0FBQ0QsQ0FMSCxFQU1HeEIsS0FOSCxDQU1TLFVBQUFDLEdBQUc7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsQ0FOWixHQVFBOztBQUVBUixnQkFBZ0IsQ0FBQ2dDLGlCQUFqQjtBQUNBZCxzQkFBc0IsQ0FBQ2MsaUJBQXZCO0FBQ0FsQyxnQkFBZ0IsQ0FBQ2tDLGlCQUFqQjtBQUNBcEMsY0FBYyxDQUFDcUMsZ0JBQWY7QUFDQXBCLFVBQVUsQ0FBQ21CLGlCQUFYLElBRUE7O0FBRUF4QyxpQkFBaUIsQ0FBQzBDLGdCQUFsQjtBQUNBekMscUJBQXFCLENBQUN5QyxnQkFBdEI7QUFDQXhDLDBCQUEwQixDQUFDd0MsZ0JBQTNCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcGl7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICB0aGlzLl9iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGVja0Vycm9yXHJcblxyXG4gICAgX2NoZWNrRXJyb3IocmVzKXtcclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HRVQgUHJvZmlsZVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfXVzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIC8vUEFUQ0ggUHJvZmlsZVxyXG5cclxuICAgICAgZWRpdFByb2ZpbGUocHJvZmlsZURhdGEpe1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfXVzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246ICcxMDVjZmM0YS1mNzU5LTQ5N2ItODcyMS1hYzFiOGZkZDg5MGUnLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9maWxlRGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrRXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vUEFUQ0ggQXZhdGFyXHJcblxyXG4gICAgICBlZGl0QXZhdGFyKGF2YXRhcil7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9dXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiAnMTA1Y2ZjNGEtZjc1OS00OTdiLTg3MjEtYWMxYjhmZGQ4OTBlJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGF2YXRhcilcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgICAvL0dFVCBDYXJkc1xyXG5cclxuICAgICAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfWNhcmRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrRXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vUE9TVCBDYXJkXHJcblxyXG4gICAgICBhZGRDYXJkKGNhcmREYXRhKXtcclxuICAgICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfWNhcmRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogJzEwNWNmYzRhLWY3NTktNDk3Yi04NzIxLWFjMWI4ZmRkODkwZScsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhcmREYXRhKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tFcnJvcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vREVMRVRFIENhcmRcclxuXHJcbiAgICAgIGRlbGV0ZUNhcmQoaWRDYXJkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH1jYXJkcy8ke2lkQ2FyZH1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1BVVCBMaWtlXHJcbiAgICAgIGxpa2UoaWRDYXJkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH1jYXJkcy8ke2lkQ2FyZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0RFTEVURSBEaXNsaWtlXHJcbiAgICAgIGRpc2xpa2UoaWRDYXJkKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH1jYXJkcy8ke2lkQ2FyZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbih0aGlzLl9jaGVja0Vycm9yKVxyXG4gICAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7ZGF0YSwgdXNlciwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2xpY2t9LCBjYXJkU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrOyAgICAgXHJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9IGhhbmRsZURlbGV0ZUNhcmQ7XHJcbiAgICAgICAgdGhpcy5fdXNlciA9IHVzZXI7ICAgXHJcbiAgICAgICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xyXG4gICAgICAgIHRoaXMuX2NhcmRJZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICAgICAgICB0aGlzLmxpa2VzID0gZGF0YS5saWtlcztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGVtcGxhdGUoKXtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAgIC5jb250ZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKXtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLl9ldmVudExpa2UoKTtcclxuICAgICAgICB0aGlzLl9ldmVudERlbGV0ZUNhcmQoKTtcclxuICAgICAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZScpXHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbmFtZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLl9ldmVudFZpZXdDYXJkKClcclxuICAgICAgICB0aGlzLl9kZWxldGVJY29uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuX2NhcmRMaWtlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpO1xyXG4gICAgICAgIHRoaXMuX2NhcmROdW1iZXJPZkxpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19udW1iZXItb2YtbGlrZXMnKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5saWtlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5fc2V0TGlrZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX293bmVySWQgIT09IHRoaXMuX3VzZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVJY29uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FdmVudHNcclxuXHJcbiAgICBfZXZlbnRMaWtlKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnREZWxldGVDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVsZXRlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ2FyZCgpe1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnRWaWV3Q2FyZCgpe1xyXG4gICAgICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHtuYW1lOiB0aGlzLl9uYW1lLCBsaW5rOiB0aGlzLl9saW5rfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IYW5kbGUgbGlrZVxyXG5cclxuICAgIGNoZWNrTGlrZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saWtlcy5zb21lKGl0ZW0gPT4gaXRlbS5faWQgPT09IHRoaXMuX3VzZXIpXHJcbiAgICB9XHJcblxyXG4gICAgX3NldExpa2UoKXtcclxuICAgICAgICBpZih0aGlzLmNoZWNrTGlrZSgpKXtcclxuICAgICAgICAgICAgdGhpcy5saWtlKClcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbGlrZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpa2UoKXtcclxuICAgICAgICB0aGlzLl9jYXJkTGlrZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuX2NhcmROdW1iZXJPZkxpa2UudGV4dENvbnRlbnQgPSB0aGlzLmxpa2VzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGRpc2xpa2UoKXtcclxuICAgICAgICB0aGlzLl9jYXJkTGlrZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuX2NhcmROdW1iZXJPZkxpa2UudGV4dENvbnRlbnQgPSB0aGlzLmxpa2VzLmxlbmd0aDtcclxuICAgICAgICBpZih0aGlzLmxpa2VzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5fY2FyZE51bWJlck9mTGlrZS50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIHZhbGlkZUZvcm0pe1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdG9ycyA9IHNlbGVjdG9ycztcclxuICAgICAgICB0aGlzLl92YWxpZGVGb3JtID0gdmFsaWRlRm9ybTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX3ZhbGlkZUZvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcnMuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl92YWxpZGVGb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2VsZWN0b3JzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbiAoKXtcclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyAoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgKCl7XHJcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dFNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRTZWxlY3Rvcil7XHJcbiAgICAgICAgaWYgKCFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dFcnJvcihpbnB1dFNlbGVjdG9yLCBpbnB1dFNlbGVjdG9yLnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2hvd0Vycm9yKGlucHV0U2VsZWN0b3IsIGVycm9yTWFzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xyXG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZWxlY3RvcnMuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1hc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2VsZWN0b3JzLmVycm9yQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcil7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xyXG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZWxlY3RvcnMuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZWxlY3RvcnMuZXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQnV0dG9uU3RhdGUoKXtcclxuICAgICAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NlbGVjdG9ycy5pbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NlbGVjdG9ycy5pbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYXNJbnZhbGlkSW5wdXQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0U2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkICgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZuKXtcclxuICAgICAgICBpZiAoZXZuLmtleSA9PT0gJ0VzY2FwZScpe1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idXR0b24nKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAnKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aGFuZGxlRm9ybVN1Ym1pdH0sIHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3N1Ym1pdCcpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxvYW5kaW5nKGlzTG9hbmRpbmcsIHRleHQpe1xyXG4gICAgICAgIGlmKGlzTG9hbmRpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCl7XHJcbiAgICAgICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlc1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3RvciAocG9wdXBTZWxlY3Rvcil7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3ZpZXctaW1hZ2UnKTtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdmlldy10aXRsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oe25hbWUsIGxpbmt9KXtcclxuICAgICAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZVxyXG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbms7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aFN1Ym1pdCBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3Ioe2hhbmRsZUZvcm1TdWJtaXR9LCBwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3N1Ym1pdCcpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oY2FyZCl7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHtyZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKGRhdGFBcnJheSl7XHJcbiAgICAgICAgZGF0YUFycmF5LmZvckVhY2goKGl0ZW0pPT50aGlzLl9yZW5kZXJlcihpdGVtKSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oZWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgY29uc3RydWN0b3Ioe3NlbGVjdG9yTmFtZSwgc2VsZWN0b3JBYm91dCwgc2VsZWN0b3JBdmF0YXJ9KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcclxuICAgICAgICB0aGlzLl9hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JBYm91dCk7XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvckF2YXRhcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBhYm91dDogdGhpcy5fYWJvdXQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGF2YXRhckxpbms6IHRoaXMuX2F2YXRhci5zcmNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhdGFyKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuX2F2YXRhci5zcmMgPSBkYXRhLmF2YXRhcjtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsIiAgY29uc3QgcG9wdXBJbnB1dFNlbGVjdG9ycyA9IHtcclxuICAgIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQnLFxyXG4gICAgaW5hY3RpdmVTdWJtaXRCdXR0b25DbGFzczogJ3BvcHVwX19zdWJtaXRfaW5hY3RpdmUnLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gICAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl92aXNpYmxlJ1xyXG4gIH07XHJcblxyXG4vL1Byb2ZpbGVcclxuY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlJyk7XHJcblxyXG4vL3BvcHVwc1xyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3Byb2ZpbGUnKTtcclxuY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZC1jYXJkJyk7XHJcbmNvbnN0IHBvcHVwRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9lZGl0LWF2YXRhcicpXHJcblxyXG4vL3BvcHVwcyBvcGVuIGJ1dHRvbnNcclxuY29uc3QgcG9wdXBQcm9maWxlT3BlbkJ1dHRvbiA9IHByb2ZpbGUucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XHJcbmNvbnN0IHBvcHVwQWRkQ2FyZE9wZW5CdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcbmNvbnN0IHBvcHVwUHJvZmlsZUF2YXRhck9wZW5CdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWF2YXRhci1idXR0b24nKVxyXG5cclxuLy9wb3B1cHMgaW5wdXRcclxuY29uc3QgaW5wdXROYW1lUHJvZmlsZSA9IHBvcHVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX25hbWUnKTtcclxuY29uc3QgaW5wdXRBYm91dFByb2ZpbGUgPSBwb3B1cEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfdHlwZV9hYm91dCcpO1xyXG5jb25zdCBpbnB1dEF2YXRhclByb2ZpbGUgPSBwb3B1cEVkaXRBdmF0YXIucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX2xpbmsnKVxyXG5cclxuLy9wb3B1cHMgZm9ybVxyXG5jb25zdCBmb3JtUG9wdXBQcm9maWxlID0gcG9wdXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuY29uc3QgZm9ybVBvcHVwQWRkQ2FyZCA9IHBvcHVwQWRkQ2FyZC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuY29uc3QgZm9ybVBvcHVwUHJvZmlsZUF2YXRhciA9IHBvcHVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKVxyXG5cclxuXHJcbiAgZXhwb3J0IHtwb3B1cElucHV0U2VsZWN0b3JzLCBwb3B1cFByb2ZpbGVPcGVuQnV0dG9uLCBwb3B1cEFkZENhcmRPcGVuQnV0dG9uLFxyXG4gICAgICAgICAgaW5wdXROYW1lUHJvZmlsZSwgaW5wdXRBYm91dFByb2ZpbGUsIGZvcm1Qb3B1cFByb2ZpbGUsIGZvcm1Qb3B1cEFkZENhcmQsXHJcbiAgICAgICAgICBwb3B1cFByb2ZpbGVBdmF0YXJPcGVuQnV0dG9uLCBmb3JtUG9wdXBQcm9maWxlQXZhdGFyLCBpbnB1dEF2YXRhclByb2ZpbGV9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiAgaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbiAgaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGknO1xyXG4gIGltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xyXG4gIGltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xyXG4gIGltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG4gIGltcG9ydCB7IFBvcHVwV2l0aEltYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XHJcbiAgaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XHJcbiAgaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcclxuICBpbXBvcnQge3BvcHVwSW5wdXRTZWxlY3RvcnMsIHBvcHVwUHJvZmlsZU9wZW5CdXR0b24sIHBvcHVwQWRkQ2FyZE9wZW5CdXR0b24sXHJcbiAgICAgICAgICBpbnB1dE5hbWVQcm9maWxlLCBpbnB1dEFib3V0UHJvZmlsZSwgZm9ybVBvcHVwUHJvZmlsZSwgZm9ybVBvcHVwQWRkQ2FyZCxcclxuICAgICAgICAgIHBvcHVwUHJvZmlsZUF2YXRhck9wZW5CdXR0b24sIGZvcm1Qb3B1cFByb2ZpbGVBdmF0YXIsIGlucHV0QXZhdGFyUHJvZmlsZX0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcclxuICBpbXBvcnQgeyBQb3B1cFdpdGhTdWJtaXQgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aFN1Ym1pdCc7XHJcblxyXG5cclxuICAvL0lEID0gNjQwMDg5NTUwMGQyNjIzNjIxMzEyOTg4XHJcblxyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uQWRkQ2FyZCA9IG5ldyBGb3JtVmFsaWRhdG9yIChwb3B1cElucHV0U2VsZWN0b3JzLCBmb3JtUG9wdXBBZGRDYXJkKTtcclxuICBjb25zdCB2YWxpZGF0aW9uUHJvZmlsZUVkaXQgPSBuZXcgRm9ybVZhbGlkYXRvciAocG9wdXBJbnB1dFNlbGVjdG9ycywgZm9ybVBvcHVwUHJvZmlsZSk7XHJcbiAgY29uc3QgdmFsaWRhdGlvblByb2ZpZUVkaXRBdmF0YXIgPSBuZXcgRm9ybVZhbGlkYXRvciAocG9wdXBJbnB1dFNlbGVjdG9ycywgZm9ybVBvcHVwUHJvZmlsZUF2YXRhcik7XHJcbiAgY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8gKHtzZWxlY3Rvck5hbWU6ICcucHJvZmlsZV9fbmFtZScsIHNlbGVjdG9yQWJvdXQ6ICcucHJvZmlsZV9fYWJvdXQnLFxyXG4gIHNlbGVjdG9yQXZhdGFyOiAnLnByb2ZpbGVfX2F2YXRhcid9KTtcclxuXHJcbiAgY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UgKCcucG9wdXBfdmlldy1pbWFnZScpO1xyXG5cclxuICBjb25zdCBhcGkgPSBuZXcgQXBpICh7XHJcbiAgICBiYXNlVXJsOidodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTQxLycsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGF1dGhvcml6YXRpb246ICcxMDVjZmM0YS1mNzU5LTQ5N2ItODcyMS1hYzFiOGZkZDg5MGUnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy9Qb3B1cENhcmRcclxuXHJcbiAgY29uc3QgcG9wdXBBZGRDYXJkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtICh7aGFuZGxlRm9ybVN1Ym1pdDogKGlucHV0c1ZhbHVlcykgPT4ge1xyXG4gICAgcG9wdXBQcm9maWxlRm9ybS5yZW5kZXJMb2FuZGluZyh0cnVlLCAn0KHQvtC30LTQsNC10YLRgdGPLi4uJyk7XHJcbiAgICBhcGkuYWRkQ2FyZChpbnB1dHNWYWx1ZXMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChcclxuICAgICAgICAgIHtuYW1lOiByZXNwb25zZURhdGEubmFtZSwgbGluazogcmVzcG9uc2VEYXRhLmxpbmssIG93bmVyOiByZXNwb25zZURhdGEub3duZXIsIFxyXG4gICAgICAgICAgICBfaWQ6IHJlc3BvbnNlRGF0YS5faWQsIGxpa2VzOiByZXNwb25zZURhdGEubGlrZXN9LCAgXHJcbiAgICAgICAgICAnNjQwMDg5NTUwMGQyNjIzNjIxMzEyOTg4JywgJy5jYXJkcy10ZW1wbGF0ZV90eXBlX2RlZmF1bHQnKVxyXG4gICAgICAgIHNlY3Rpb24uYWRkSXRlbShjYXJkKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cFByb2ZpbGVGb3JtLnJlbmRlckxvYW5kaW5nKGZhbHNlLCAn0KHQvtC30LTQsNGC0YwnKTtcclxuICAgICAgfSlcclxuICB9fSxcclxuICAnLnBvcHVwX2FkZC1jYXJkJylcclxuXHJcbiAgLy8gMVxyXG5cclxuICBjb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oIHtyZW5kZXJlcjogKGRhdGEpID0+e1xyXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgJzY0MDA4OTU1MDBkMjYyMzYyMTMxMjk4OCcsICcuY2FyZHMtdGVtcGxhdGVfdHlwZV9kZWZhdWx0Jyk7XHJcbiAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZCk7XHJcbiAgfX0sICcuY2FyZHMtdGVtcGxhdGVfdHlwZV9kZWZhdWx0JylcclxuXHJcbiAgLy8gMlxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDYXJkIChkYXRhLCB1c2VyLCBjYXJkU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7ZGF0YSwgdXNlciwgIFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHBvcHVwV2l0aEltYWdlLm9wZW4oZGF0YSksXHJcbiAgICAgIGhhbmRsZURlbGV0ZUNhcmQ6IChjYXJkKSA9PiBkZWxldGVDYXJkLm9wZW4oY2FyZCksXHJcbiAgICAgIGhhbmRsZUxpa2VDbGljazogKGNhcmQpID0+IHtcclxuICAgICAgICBpZighY2FyZC5jaGVja0xpa2UoKSl7XHJcbiAgICAgICAgICBhcGkubGlrZShkYXRhLl9pZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNhcmQubGlrZXMgPSByZXNwb25zZURhdGEubGlrZXM7XHJcbiAgICAgICAgICAgICAgY2FyZC5saWtlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGFwaS5kaXNsaWtlKGRhdGEuX2lkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FyZC5saWtlcyA9IHJlc3BvbnNlRGF0YS5saWtlcztcclxuICAgICAgICAgICAgICBjYXJkLmRpc2xpa2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfX0sIGNhcmRTZWxlY3RvcilcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNhcmQgPSBuZXcgUG9wdXBXaXRoU3VibWl0KHtcclxuICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgICAgYXBpLmRlbGV0ZUNhcmQoZGVsZXRlQ2FyZC5jYXJkLl9jYXJkSWQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gZGVsZXRlQ2FyZC5jYXJkLmRlbGV0ZUNhcmQoKSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICAnLnBvcHVwX3N1Ym1pdCcpXHJcblxyXG4gIHBvcHVwQWRkQ2FyZE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB2YWxpZGF0aW9uQWRkQ2FyZC50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgcG9wdXBBZGRDYXJkRm9ybS5vcGVuKCk7XHJcbiAgfSlcclxuXHJcbiAgLy9Qb3B1cFByb2ZpbGVcclxuXHJcbiAgY29uc3QgcG9wdXBQcm9maWxlRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtICh7aGFuZGxlRm9ybVN1Ym1pdDogKGlucHV0VmFsdWVzKSA9PntcclxuICAgIHBvcHVwUHJvZmlsZUZvcm0ucmVuZGVyTG9hbmRpbmcodHJ1ZSwgJ9Ch0L7RhdGA0LDQvdC40YLRjC4uLicpO1xyXG4gICAgYXBpLmVkaXRQcm9maWxlKGlucHV0VmFsdWVzKVxyXG4gICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzcG9uc2VEYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cFByb2ZpbGVGb3JtLnJlbmRlckxvYW5kaW5nKGZhbHNlLCAn0KHQvtGF0YDQsNC90LjRgtGMJyk7XHJcbiAgICAgIH0pXHJcbiAgfX0sICcucG9wdXBfcHJvZmlsZScpXHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGVBdmF0YXJGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0gKHtoYW5kbGVGb3JtU3VibWl0OiAoaW5wdXRWYWx1ZSkgPT57XHJcbiAgcG9wdXBQcm9maWxlQXZhdGFyRm9ybS5yZW5kZXJMb2FuZGluZyh0cnVlLCAn0KHQvtGF0YDQsNC90LjRgtGMLi4uJyk7XHJcbiAgYXBpLmVkaXRBdmF0YXIoaW5wdXRWYWx1ZSlcclxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgdXNlckluZm8uc2V0QXZhdGFyKHJlc3BvbnNlRGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHBvcHVwUHJvZmlsZUF2YXRhckZvcm0ucmVuZGVyTG9hbmRpbmcoZmFsc2UsICfQodC+0YXRgNCw0L3QuNGC0YwnKTtcclxuICAgIH0pXHJcbn19LCAnLnBvcHVwX2VkaXQtYXZhdGFyJylcclxuXHJcbnBvcHVwUHJvZmlsZU9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySW5mb21hdGlvbiA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJJbmZvbWF0aW9uLm5hbWU7XHJcbiAgICBjb25zdCB1c2VyQWJvdXQgPSB1c2VySW5mb21hdGlvbi5hYm91dDtcclxuICAgIGlucHV0TmFtZVByb2ZpbGUudmFsdWUgPSB1c2VyTmFtZTtcclxuICAgIGlucHV0QWJvdXRQcm9maWxlLnZhbHVlID0gdXNlckFib3V0O1xyXG4gICAgcG9wdXBQcm9maWxlRm9ybS5vcGVuKCk7XHJcbiAgICBcclxufSk7XHJcblxyXG5wb3B1cFByb2ZpbGVBdmF0YXJPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGF2YXRhckluZm9ybWF0aW9uID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBjb25zdCBhdmF0YXJMaW5rID0gYXZhdGFySW5mb3JtYXRpb24uYXZhdGFyTGluaztcclxuICBpbnB1dEF2YXRhclByb2ZpbGUudmFsdWUgPSBhdmF0YXJMaW5rO1xyXG4gIHBvcHVwUHJvZmlsZUF2YXRhckZvcm0ub3BlbigpO1xyXG59KVxyXG5cclxuUHJvbWlzZS5hbGwoW2FwaS5nZXRVc2VySW5mbygpLCBhcGkuZ2V0SW5pdGlhbENhcmRzKCldKVxyXG4gIC50aGVuKChyZXNwb25zZURhdGFBcnJheSkgPT4ge1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzcG9uc2VEYXRhQXJyYXlbMF0pO1xyXG4gICAgdXNlckluZm8uc2V0QXZhdGFyKHJlc3BvbnNlRGF0YUFycmF5WzBdKTtcclxuICAgIHNlY3Rpb24ucmVuZGVySXRlbXMocmVzcG9uc2VEYXRhQXJyYXlbMV0ucmV2ZXJzZSgpKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4vL0V2ZW50c1xyXG5cclxucG9wdXBQcm9maWxlRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cFByb2ZpbGVBdmF0YXJGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwQWRkQ2FyZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5kZWxldGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL1ZhbGlkYXRpb25zXHJcblxyXG52YWxpZGF0aW9uQWRkQ2FyZC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbnZhbGlkYXRpb25Qcm9maWxlRWRpdC5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbnZhbGlkYXRpb25Qcm9maWVFZGl0QXZhdGFyLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJBcGkiLCJvcHRpb25zIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2hlYWRlcnMiLCJoZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsIl9jaGVja0Vycm9yIiwicHJvZmlsZURhdGEiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdmF0YXIiLCJjYXJkRGF0YSIsImlkQ2FyZCIsIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJkYXRhIiwidXNlciIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNhcmQiLCJoYW5kbGVMaWtlQ2xpY2siLCJfbGluayIsImxpbmsiLCJfbmFtZSIsIm5hbWUiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX3VzZXIiLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2NhcmRJZCIsIl9oYW5kbGVMaWtlQ2xpY2siLCJsaWtlcyIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiX2dldFRlbXBsYXRlIiwiX2V2ZW50TGlrZSIsIl9ldmVudERlbGV0ZUNhcmQiLCJfY2FyZEltYWdlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfZXZlbnRWaWV3Q2FyZCIsIl9kZWxldGVJY29uIiwiX2NhcmRMaWtlIiwiX2NhcmROdW1iZXJPZkxpa2UiLCJsZW5ndGgiLCJfc2V0TGlrZSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzb21lIiwiaXRlbSIsImNoZWNrTGlrZSIsImxpa2UiLCJkaXNsaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwiRm9ybVZhbGlkYXRvciIsInNlbGVjdG9ycyIsInZhbGlkZUZvcm0iLCJfc2VsZWN0b3JzIiwiX3ZhbGlkZUZvcm0iLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJfYnV0dG9uRWxlbWVudCIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0Vycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUVycm9yIiwiZXJyb3JNYXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2hhc0ludmFsaWRJbnB1dCIsImluYWN0aXZlU3VibWl0QnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2biIsImtleSIsImNsb3NlIiwiZXZ0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9wb3B1cEZvcm0iLCJfc3VibWl0QnV0dG9uIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJpc0xvYW5kaW5nIiwidGV4dCIsIl9mb3JtVmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsInJlc2V0IiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZSIsIl90aXRsZSIsIlBvcHVwV2l0aFN1Ym1pdCIsImNhcmQiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJkYXRhQXJyYXkiLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwic2VsZWN0b3JOYW1lIiwic2VsZWN0b3JBYm91dCIsInNlbGVjdG9yQXZhdGFyIiwiX2Fib3V0IiwiX2F2YXRhciIsImFib3V0IiwiYXZhdGFyTGluayIsInBvcHVwSW5wdXRTZWxlY3RvcnMiLCJwcm9maWxlIiwicG9wdXBFZGl0UHJvZmlsZSIsInBvcHVwQWRkQ2FyZCIsInBvcHVwRWRpdEF2YXRhciIsInBvcHVwUHJvZmlsZU9wZW5CdXR0b24iLCJwb3B1cEFkZENhcmRPcGVuQnV0dG9uIiwicG9wdXBQcm9maWxlQXZhdGFyT3BlbkJ1dHRvbiIsImlucHV0TmFtZVByb2ZpbGUiLCJpbnB1dEFib3V0UHJvZmlsZSIsImlucHV0QXZhdGFyUHJvZmlsZSIsImZvcm1Qb3B1cFByb2ZpbGUiLCJmb3JtUG9wdXBBZGRDYXJkIiwiZm9ybVBvcHVwUHJvZmlsZUF2YXRhciIsInZhbGlkYXRpb25BZGRDYXJkIiwidmFsaWRhdGlvblByb2ZpbGVFZGl0IiwidmFsaWRhdGlvblByb2ZpZUVkaXRBdmF0YXIiLCJ1c2VySW5mbyIsInBvcHVwV2l0aEltYWdlIiwiYXBpIiwicG9wdXBBZGRDYXJkRm9ybSIsImlucHV0c1ZhbHVlcyIsInBvcHVwUHJvZmlsZUZvcm0iLCJyZW5kZXJMb2FuZGluZyIsImFkZENhcmQiLCJyZXNwb25zZURhdGEiLCJjcmVhdGVDYXJkIiwic2VjdGlvbiIsImFkZEl0ZW0iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5Iiwib3BlbiIsImRlbGV0ZUNhcmQiLCJnZW5lcmF0ZUNhcmQiLCJpbnB1dFZhbHVlcyIsImVkaXRQcm9maWxlIiwic2V0VXNlckluZm8iLCJwb3B1cFByb2ZpbGVBdmF0YXJGb3JtIiwiaW5wdXRWYWx1ZSIsImVkaXRBdmF0YXIiLCJzZXRBdmF0YXIiLCJ1c2VySW5mb21hdGlvbiIsImdldFVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyQWJvdXQiLCJhdmF0YXJJbmZvcm1hdGlvbiIsImFsbCIsImdldEluaXRpYWxDYXJkcyIsInJlc3BvbnNlRGF0YUFycmF5IiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJzZXRFdmVudExpc3RlbmVyIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=