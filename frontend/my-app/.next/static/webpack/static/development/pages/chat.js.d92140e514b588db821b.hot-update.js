webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _this = undefined,
    _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/components/users.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  container: {},
  user: {
    height: "30px",
    width: "30px",
    position: "absolute"
  },
  user_name: {
    fontFamily: "Comic Sans Ms",
    fontSize: "18px",
    color: "#030311",
    marginLeft: "40px",
    position: "absolute",
    marginTop: "2px"
  },
  item: {
    height: "40px",
    position: "relative"
  }
};

var Users_component = function Users_component(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUsersList(props.users);
  }, [props.users]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('la');
    console.log('props', props.open);
    console.log('f', firstTime);
    if (firstTime && props.open) setFirstTime(false);else openModal();
  }, [props.open]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      usersList = _useState2[0],
      setUsersList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      firstTime = _useState3[0],
      setFirstTime = _useState3[1];

  var subtitle;

  var openModal = function openModal() {
    setIsOpen(true);
  };

  var afterOpenModal = function afterOpenModal() {// subtitle.style.color = '#f00';
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    ariaHideApp: false,
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: styles.content,
    contentLabel: "Example Modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    styles: styles.container,
    direction: "column",
    alignContent: "flex-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, usersList.map(function (user, id) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      key: id,
      xs: 12,
      style: styles.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 32
      }
    }, __jsx("img", {
      key: "img".concat(id),
      src: "/images/user.png",
      style: styles.user,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx("p", {
      key: "paragraph".concat(id),
      style: styles.user_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, user));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Users_component);

/***/ })

})
//# sourceMappingURL=chat.js.d92140e514b588db821b.hot-update.js.map