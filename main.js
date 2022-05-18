/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

      return this._element;
    }
  }, {
    key: "_eventLike",
    value: function _eventLike() {
      var _this = this;

      this._element.querySelector('.card__like').addEventListener('click', function () {
        _this._handleLike();
      });
    }
  }, {
    key: "_eventDeleteCard",
    value: function _eventDeleteCard() {
      var _this2 = this;

      this._element.querySelector('.card__delete-button').addEventListener('click', function () {
        _this2._handleDeleteCard();
      });
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
    }
  }, {
    key: "_handleLike",
    value: function _handleLike() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._element.remove();
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
    _this._handleFormSubmit = handleFormSubmit;
    return _this;
  }

  _createClass(PopupWithForm, [{
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
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._items.forEach(function (item) {
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
        selectorAbout = _ref.selectorAbout;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorAbout);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._name.textContent = data.name;
      this._about.textContent = data.about;
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
/* harmony export */   "initialCards": function() { return /* binding */ initialCards; },
/* harmony export */   "inputAboutProfile": function() { return /* binding */ inputAboutProfile; },
/* harmony export */   "inputNameProfile": function() { return /* binding */ inputNameProfile; },
/* harmony export */   "popupAddCardOpenButton": function() { return /* binding */ popupAddCardOpenButton; },
/* harmony export */   "popupInputSelectors": function() { return /* binding */ popupInputSelectors; },
/* harmony export */   "popupProfileOpenButton": function() { return /* binding */ popupProfileOpenButton; }
/* harmony export */ });
var initialCards = [{
  name: 'Кавказ',
  link: 'https://sun9-71.userapi.com/s/v1/if2/MKzkW_ey9dJfXToS1OOdn5q_sC53BD8FnIHUjMD09coRWAAND7zhPPIqs3ScOh8v9DfnAPWn-LjKiB9UFjb32wZT.jpg?size=2560x1920&quality=96&type=album'
}, {
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var popupInputSelectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveSubmitButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}; //Profile

var profile = document.querySelector('.profile'); //popups

var popupEditProfile = document.querySelector('.popup_profile');
var popupAddCard = document.querySelector('.popup_add-card'); //popups open buttons

var popupProfileOpenButton = profile.querySelector('.profile__edit-button');
var popupAddCardOpenButton = profile.querySelector('.profile__add-button'); //popups input

var inputNameProfile = popupEditProfile.querySelector('.popup__input_type_name');
var inputAboutProfile = popupEditProfile.querySelector('.popup__input_type_about'); //popups form

var formPopupProfile = popupEditProfile.querySelector('.popup__form');
var formPopupAddCard = popupAddCard.querySelector('.popup__form');


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
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");








var validationAddCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formPopupAddCard);
var validationProfileEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupInputSelectors, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formPopupProfile);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.UserInfo({
  selectorName: '.profile__name',
  selectorAbout: '.profile__about'
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithImage('.popup_view-image'); //PopupCard

var popupAddCardForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputsValues) {
    var card = createCard({
      name: inputsValues.name,
      link: inputsValues.link
    }, '.cards-template_type_default');
    section.addItem(card);
  }
}, '.popup_add-card');

function createCard(data, cardSelector) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card({
    data: data,
    handleCardClick: function handleCardClick() {
      popupWithImage.open(data);
    }
  }, cardSelector);
  var cardElement = card.generateCard();
  return cardElement;
}

var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.Section({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.initialCards,
  renderer: function renderer(data) {
    var card = createCard(data, '.cards-template_type_default');
    section.addItem(card);
  }
}, '.cards-template_type_default');
section.renderItems();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupAddCardOpenButton.addEventListener('click', function () {
  validationAddCard.toggleButtonState();
  popupAddCardForm.open();
}); //PopupProfile

var popupProfileForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(inputValues) {
    userInfo.setUserInfo({
      name: inputValues.name,
      about: inputValues.about
    });
  }
}, '.popup_profile');
_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.popupProfileOpenButton.addEventListener('click', function () {
  var userInfomation = userInfo.getUserInfo();
  var userName = userInfomation.name;
  var userAbout = userInfomation.about;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.inputNameProfile.value = userName;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.inputAboutProfile.value = userAbout;
  popupProfileForm.open();
}); //Events

popupProfileForm.setEventListeners();
popupAddCardForm.setEventListeners();
popupWithImage.setEventListener(); //Validations

validationAddCard.enableValidation();
validationProfileEdit.enableValidation();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixnQkFBZ0IsQ0FBQ0gsSUFBakI7QUFFSCxDQVJELEdBVUE7O0FBRUFHLGdCQUFnQixDQUFDTyxpQkFBakI7QUFDQWhCLGdCQUFnQixDQUFDZ0IsaUJBQWpCO0FBQ0FqQixjQUFjLENBQUNrQixnQkFBZixJQUVBOztBQUVBckIsaUJBQWlCLENBQUNzQixnQkFBbEI7QUFDQXJCLHFCQUFxQixDQUFDcUIsZ0JBQXRCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHtkYXRhLCBoYW5kbGVDYXJkQ2xpY2t9LCBjYXJkU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgICAgLmNvbnRlbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcmQnKVxyXG4gICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKXtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLl9ldmVudExpa2UoKTtcclxuICAgICAgICB0aGlzLl9ldmVudERlbGV0ZUNhcmQoKTtcclxuICAgICAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZScpXHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbmFtZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB0aGlzLl9ldmVudFZpZXdDYXJkKClcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnRMaWtlKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fbGlrZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVMaWtlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2V2ZW50RGVsZXRlQ2FyZCgpe1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIF9ldmVudFZpZXdDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soe25hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlTGlrZSgpe1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkX19saWtlX2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVEZWxldGVDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCB2YWxpZGVGb3JtKXtcclxuICAgICAgICB0aGlzLl9zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRlRm9ybSA9IHZhbGlkZUZvcm07XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl92YWxpZGVGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3JzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3NlbGVjdG9ycy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbiAoKXtcclxuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyAoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgKCl7XHJcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dFNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRTZWxlY3Rvcil7XHJcbiAgICAgICAgaWYgKCFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dFcnJvcihpbnB1dFNlbGVjdG9yLCBpbnB1dFNlbGVjdG9yLnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcik7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2hvd0Vycm9yKGlucHV0U2VsZWN0b3IsIGVycm9yTWFzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xyXG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZWxlY3RvcnMuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1hc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2VsZWN0b3JzLmVycm9yQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlRXJyb3IoaW5wdXRTZWxlY3Rvcil7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRlRm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dFNlbGVjdG9yLmlkfS1lcnJvcmApO1xyXG4gICAgICAgIGlucHV0U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZWxlY3RvcnMuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZWxlY3RvcnMuZXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQnV0dG9uU3RhdGUoKXtcclxuICAgICAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NlbGVjdG9ycy5pbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NlbGVjdG9ycy5pbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYXNJbnZhbGlkSW5wdXQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0U2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFpbnB1dFNlbGVjdG9yLnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkICgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZuKXtcclxuICAgICAgICBpZiAoZXZuLmtleSA9PT0gJ0VzY2FwZScpe1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idXR0b24nKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAnKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aGFuZGxlRm9ybVN1Ym1pdH0sIHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKVxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpe1xyXG4gICAgICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXNcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpe1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IgKHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX192aWV3LWltYWdlJyk7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3ZpZXctdGl0bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKHtuYW1lLCBsaW5rfSl7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLmFsdCA9IG5hbWVcclxuICAgICAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCB7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKCl7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSk9PnRoaXMuX3JlbmRlcmVyKGl0ZW0pKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShlbGVtZW50KXtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7c2VsZWN0b3JOYW1lLCBzZWxlY3RvckFib3V0fSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yQWJvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0LnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYWJvdXQudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgfVxyXG59IiwiY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0JrQsNCy0LrQsNC3JyxcclxuICAgICAgbGluazogJ2h0dHBzOi8vc3VuOS03MS51c2VyYXBpLmNvbS9zL3YxL2lmMi9NS3prV19leTlkSmZYVG9TMU9PZG41cV9zQzUzQkQ4Rm5JSFVqTUQwOWNvUldBQU5EN3poUFBJcXMzU2NPaDh2OURmbkFQV24tTGpLaUI5VUZqYjMyd1pULmpwZz9zaXplPTI1NjB4MTkyMCZxdWFsaXR5PTk2JnR5cGU9YWxidW0nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0JDRgNGF0YvQtycsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9jaGVseWFiaW5zay1vYmxhc3QuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2thbWNoYXRrYS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0KXQvtC70LzQvtCz0L7RgNGB0LrQuNC5INGA0LDQudC+0L0nLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0JHQsNC50LrQsNC7JyxcclxuICAgICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJ1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHBvcHVwSW5wdXRTZWxlY3RvcnMgPSB7XHJcbiAgICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc3VibWl0JyxcclxuICAgIGluYWN0aXZlU3VibWl0QnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0X2luYWN0aXZlJyxcclxuICAgIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcclxuICAgIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfdmlzaWJsZSdcclxuICB9O1xyXG5cclxuLy9Qcm9maWxlXHJcbmNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZScpO1xyXG5cclxuLy9wb3B1cHNcclxuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9wcm9maWxlJyk7XHJcbmNvbnN0IHBvcHVwQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9hZGQtY2FyZCcpO1xyXG5cclxuLy9wb3B1cHMgb3BlbiBidXR0b25zXHJcbmNvbnN0IHBvcHVwUHJvZmlsZU9wZW5CdXR0b24gPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xyXG5jb25zdCBwb3B1cEFkZENhcmRPcGVuQnV0dG9uID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpO1xyXG5cclxuLy9wb3B1cHMgaW5wdXRcclxuY29uc3QgaW5wdXROYW1lUHJvZmlsZSA9IHBvcHVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX25hbWUnKTtcclxuY29uc3QgaW5wdXRBYm91dFByb2ZpbGUgPSBwb3B1cEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfdHlwZV9hYm91dCcpO1xyXG5cclxuLy9wb3B1cHMgZm9ybVxyXG5jb25zdCBmb3JtUG9wdXBQcm9maWxlID0gcG9wdXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuY29uc3QgZm9ybVBvcHVwQWRkQ2FyZCA9IHBvcHVwQWRkQ2FyZC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuXHJcblxyXG4gIGV4cG9ydCB7aW5pdGlhbENhcmRzLCBwb3B1cElucHV0U2VsZWN0b3JzLCBwb3B1cFByb2ZpbGVPcGVuQnV0dG9uLCBwb3B1cEFkZENhcmRPcGVuQnV0dG9uLFxyXG4gICAgICAgICAgaW5wdXROYW1lUHJvZmlsZSwgaW5wdXRBYm91dFByb2ZpbGUsIGZvcm1Qb3B1cFByb2ZpbGUsIGZvcm1Qb3B1cEFkZENhcmR9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IHtpbml0aWFsQ2FyZHMsIHBvcHVwSW5wdXRTZWxlY3RvcnMsIHBvcHVwUHJvZmlsZU9wZW5CdXR0b24sIHBvcHVwQWRkQ2FyZE9wZW5CdXR0b24sXHJcbiAgICAgICAgaW5wdXROYW1lUHJvZmlsZSwgaW5wdXRBYm91dFByb2ZpbGUsIGZvcm1Qb3B1cFByb2ZpbGUsIGZvcm1Qb3B1cEFkZENhcmR9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uQWRkQ2FyZCA9IG5ldyBGb3JtVmFsaWRhdG9yIChwb3B1cElucHV0U2VsZWN0b3JzLCBmb3JtUG9wdXBBZGRDYXJkKTtcclxuY29uc3QgdmFsaWRhdGlvblByb2ZpbGVFZGl0ID0gbmV3IEZvcm1WYWxpZGF0b3IgKHBvcHVwSW5wdXRTZWxlY3RvcnMsIGZvcm1Qb3B1cFByb2ZpbGUpO1xyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyAoe3NlbGVjdG9yTmFtZTogJy5wcm9maWxlX19uYW1lJywgc2VsZWN0b3JBYm91dDogJy5wcm9maWxlX19hYm91dCd9KVxyXG5cclxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UgKCcucG9wdXBfdmlldy1pbWFnZScpO1xyXG5cclxuLy9Qb3B1cENhcmRcclxuXHJcbmNvbnN0IHBvcHVwQWRkQ2FyZEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSAoe2hhbmRsZUZvcm1TdWJtaXQ6IChpbnB1dHNWYWx1ZXMpID0+IHtcclxuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZCh7bmFtZTogaW5wdXRzVmFsdWVzLm5hbWUsIGxpbms6IGlucHV0c1ZhbHVlcy5saW5rfSwnLmNhcmRzLXRlbXBsYXRlX3R5cGVfZGVmYXVsdCcpO1xyXG4gIHNlY3Rpb24uYWRkSXRlbShjYXJkKTtcclxuICB9fSxcclxuJy5wb3B1cF9hZGQtY2FyZCcpXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkIChkYXRhLCBjYXJkU2VsZWN0b3IpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoe2RhdGEsIGhhbmRsZUNhcmRDbGljazooKT0+e3BvcHVwV2l0aEltYWdlLm9wZW4oZGF0YSl9fSwgY2FyZFNlbGVjdG9yKTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oe2l0ZW1zOmluaXRpYWxDYXJkcywgcmVuZGVyZXI6IChkYXRhKSA9PntcclxuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChkYXRhLCAnLmNhcmRzLXRlbXBsYXRlX3R5cGVfZGVmYXVsdCcpO1xyXG4gIHNlY3Rpb24uYWRkSXRlbShjYXJkKTtcclxufX0sICcuY2FyZHMtdGVtcGxhdGVfdHlwZV9kZWZhdWx0Jylcclxuc2VjdGlvbi5yZW5kZXJJdGVtcygpO1xyXG5cclxucG9wdXBBZGRDYXJkT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB2YWxpZGF0aW9uQWRkQ2FyZC50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIHBvcHVwQWRkQ2FyZEZvcm0ub3BlbigpO1xyXG59KVxyXG5cclxuLy9Qb3B1cFByb2ZpbGVcclxuXHJcbmNvbnN0IHBvcHVwUHJvZmlsZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSAoe2hhbmRsZUZvcm1TdWJtaXQ6IChpbnB1dFZhbHVlcykgPT57XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oe1xyXG4gICAgbmFtZTogaW5wdXRWYWx1ZXMubmFtZSxcclxuICAgIGFib3V0OiBpbnB1dFZhbHVlcy5hYm91dH0pXHJcbn19LCAnLnBvcHVwX3Byb2ZpbGUnKVxyXG5cclxucG9wdXBQcm9maWxlT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJbmZvbWF0aW9uID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlckluZm9tYXRpb24ubmFtZTtcclxuICAgIGNvbnN0IHVzZXJBYm91dCA9IHVzZXJJbmZvbWF0aW9uLmFib3V0O1xyXG4gICAgaW5wdXROYW1lUHJvZmlsZS52YWx1ZSA9IHVzZXJOYW1lO1xyXG4gICAgaW5wdXRBYm91dFByb2ZpbGUudmFsdWUgPSB1c2VyQWJvdXQ7XHJcbiAgICBwb3B1cFByb2ZpbGVGb3JtLm9wZW4oKTtcclxuICAgIFxyXG59KTtcclxuXHJcbi8vRXZlbnRzXHJcblxyXG5wb3B1cFByb2ZpbGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwQWRkQ2FyZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcigpO1xyXG5cclxuLy9WYWxpZGF0aW9uc1xyXG5cclxudmFsaWRhdGlvbkFkZENhcmQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG52YWxpZGF0aW9uUHJvZmlsZUVkaXQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkU2VsZWN0b3IiLCJkYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiX2xpbmsiLCJsaW5rIiwiX25hbWUiLCJuYW1lIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9ldmVudExpa2UiLCJfZXZlbnREZWxldGVDYXJkIiwiX2NhcmRJbWFnZSIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX2V2ZW50Vmlld0NhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2UiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIkZvcm1WYWxpZGF0b3IiLCJzZWxlY3RvcnMiLCJ2YWxpZGVGb3JtIiwiX3NlbGVjdG9ycyIsIl92YWxpZGVGb3JtIiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2J1dHRvbkVsZW1lbnQiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9zZXRFdmVudExpc3RlbmVycyIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVFcnJvciIsImVycm9yTWFzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiYWRkIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbmFjdGl2ZVN1Ym1pdEJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic29tZSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZuIiwia2V5IiwiY2xvc2UiLCJldnQiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRJbnB1dFZhbHVlcyIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX3RpdGxlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsInNlbGVjdG9yTmFtZSIsInNlbGVjdG9yQWJvdXQiLCJfYWJvdXQiLCJhYm91dCIsImluaXRpYWxDYXJkcyIsInBvcHVwSW5wdXRTZWxlY3RvcnMiLCJwcm9maWxlIiwicG9wdXBFZGl0UHJvZmlsZSIsInBvcHVwQWRkQ2FyZCIsInBvcHVwUHJvZmlsZU9wZW5CdXR0b24iLCJwb3B1cEFkZENhcmRPcGVuQnV0dG9uIiwiaW5wdXROYW1lUHJvZmlsZSIsImlucHV0QWJvdXRQcm9maWxlIiwiZm9ybVBvcHVwUHJvZmlsZSIsImZvcm1Qb3B1cEFkZENhcmQiLCJ2YWxpZGF0aW9uQWRkQ2FyZCIsInZhbGlkYXRpb25Qcm9maWxlRWRpdCIsInVzZXJJbmZvIiwicG9wdXBXaXRoSW1hZ2UiLCJwb3B1cEFkZENhcmRGb3JtIiwiaW5wdXRzVmFsdWVzIiwiY2FyZCIsImNyZWF0ZUNhcmQiLCJzZWN0aW9uIiwiYWRkSXRlbSIsIm9wZW4iLCJnZW5lcmF0ZUNhcmQiLCJyZW5kZXJJdGVtcyIsInBvcHVwUHJvZmlsZUZvcm0iLCJpbnB1dFZhbHVlcyIsInNldFVzZXJJbmZvIiwidXNlckluZm9tYXRpb24iLCJnZXRVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckFib3V0Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJzZXRFdmVudExpc3RlbmVyIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=