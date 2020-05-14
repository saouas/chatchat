module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll-to-bottom */ "react-scroll-to-bottom");
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! glamor */ "glamor");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/users */ "./components/users.js");
var _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/components/chat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const CSS_SCROLL = Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
  height: 400,
  overflow: `auto`,
  overflowX: `hidden`
});
const styles = {
  container: {
    backgroundColor: "white",
    height: "570px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
    textAlign: "center",
    maxWidth: "600px",
    minWidth: "20%",
    padding: "0"
  },
  topbar: {
    position: "relative",
    backgroundColor: "#3f51b5",
    border: "2px solid white",
    borderRadius: "6px",
    height: "60px",
    width: "100%",
    overflow: "hidden"
  },
  pastille: {
    color: "#a8ffa8"
  },
  pseudo: {
    color: "white",
    position: "absolute",
    top: "0%",
    left: "0%",
    paddingLeft: "30px",
    marginTop: "15px",
    fontSize: "20px"
  },
  close: {
    position: "absolute",
    top: "0%",
    right: "0%",
    height: "15px",
    width: "15px",
    paddingTop: "5px",
    paddingRight: "5px"
  },
  people: {
    position: "absolute",
    top: "0%",
    right: "0%",
    height: "18px",
    width: "18px",
    paddingTop: "3px",
    paddingRight: "30px"
  },
  sub_container: {
    position: "absolute",
    padding: "0"
  },
  hr: {
    padding: "0"
  },
  input_container: {
    position: "relative",
    padding: "0"
  },
  input: {
    position: "absolute",
    left: "0%",
    width: "68%",
    paddingLeft: "10px",
    marginRight: "20px"
  },
  button: {
    position: "absolute",
    right: "0%",
    marginRight: "10px",
    height: "76px",
    width: "25%"
  },
  messages: {
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    height: "400px",
    overflowX: "hidden"
  },
  incomingMessage: {
    borderRadius: "8px",
    backgroundColor: "#1982FC",
    minHeight: "20px",
    width: "100px",
    textAlign: "center",
    padding: "20px 5px 20px 5px"
  },
  adminMessage: {
    borderRadius: "8px",
    backgroundColor: "rgb(236, 236, 236)",
    minHeight: "20px",
    width: "100px",
    textAlign: "center",
    padding: "20px 5px 20px 5px"
  },
  myMessage: {
    borderRadius: "8px",
    backgroundColor: "#43CC47",
    minHeight: "20px",
    width: "100px",
    textAlign: "center",
    padding: "20px 5px 20px 5px"
  },
  incomingMessageList: {
    height: "100%",
    marginTop: "5px"
  },
  myMessageList: {
    height: "100%",
    marginRight: "10px"
  },
  pseudoMymessage: {
    position: "absolute",
    marginTop: "20px",
    color: "#a2a2a2",
    fontSize: "15px",
    marginLeft: "-60px",
    width: "50px",
    height: "50px",
    overflow: "hidden"
  },
  pseudoIncomingMessage: {
    position: "absolute",
    marginTop: "-40px",
    color: "#a2a2a2",
    fontSize: "15px",
    marginLeft: "110px",
    width: "50px",
    height: "50px",
    overflow: "hidden",
    marginRight: "10px"
  },
  itemIncomingMessage: {
    position: "relative",
    marginLeft: "20px",
    marginBottom: "-60px"
  },
  itemMyMessage: {
    position: "relative",
    marginRight: "50px",
    minHeight: "0px"
  },
  containerItemMyMessage: {
    position: "absolute",
    right: "0%"
  }
};
let socket;

const Chat_component = ({
  location
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: room,
    1: setRoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: openModal,
    1: setOpenModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const ENDPOINT = "localhost:8080";
  const {
    0: listUsers,
    1: setListUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      name,
      room
    } = router.query;
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(ENDPOINT);

    if (name != undefined && room != undefined) {
      setName(name);
      setRoom(room);
      socket.emit('join', {
        name,
        room
      }, error => {
        if (error) console.log(`error : ${error}`);
      });
    }

    return () => {
      if (name != undefined && room != undefined) {
        socket.emit('disconnect');
        socket.disconnect();
      }
    };
  }, [router, ENDPOINT]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket.on('newMessage', message => {
      setMessages(messages => [...messages, message]);
    });
    socket.on('listUsers', data => {
      setListUsers(data.users);
    });
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("valeur changer", listUsers);
  }, [listUsers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("state modale a changer");
  }, [openModal]);

  const sendMessage = e => {
    e.preventDefault();

    if (message != "" && room != undefined && name != undefined) {
      socket.emit('sendMessage', {
        user: name,
        text: message
      }, () => {
        setMessage('');
      });
    }
  };

  const disconnect = e => {
    e.preventDefault();
    socket.emit('disconnect');
    socket.disconnect();
    router.push(`/join`);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: styles.sub_container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: styles.topbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: styles.pseudo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.pastille,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 46
    }
  }, "\u2022 "), name), __jsx("img", {
    style: styles.people,
    src: "/images/people.png",
    onClick: () => setOpenModal(!openModal),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }), __jsx("img", {
    style: styles.close,
    src: "/images/close.png",
    onClick: e => disconnect(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    style: styles.messages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, __jsx(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "scrollToBottom",
    className: `${CSS_SCROLL}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    style: styles.incomingMessageList,
    direction: "column",
    spacing: 8,
    wrap: "nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, messages.map((message, i) => {
    if (message.user == name.trim().toLowerCase()) {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: i,
        id: `inboxMessage${i}`,
        style: styles.itemIncomingMessage,
        xs: 12,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        key: `${i}2`,
        style: styles.containerItemIncomingMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: `${i}3`,
        style: styles.incomingMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 37
        }
      }, message.text), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: `${i}4`,
        item: true,
        style: styles.pseudoIncomingMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 49
        }
      }, message.user)));
    } else if (message.user == "admin") {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: i,
        id: `inboxMessage${i}`,
        style: styles.itemIncomingMessage,
        xs: 12,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        key: `${i}2`,
        style: styles.containerItemIncomingMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: `${i}3`,
        style: styles.adminMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 37
        }
      }, message.text), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: `${i}4`,
        item: true,
        style: styles.pseudoIncomingMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 49
        }
      }, "Admin")));
    } else {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: i,
        id: `myMessage${i}`,
        style: styles.itemMyMessage,
        xs: 12,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        container: true,
        key: `${i}2`,
        style: styles.containerItemMyMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: `${i}3`,
        style: styles.pseudoMymessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 49
        }
      }, message.user), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        key: `${i}4`,
        style: styles.myMessage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 49
        }
      }, message.text)));
    }
  })))), __jsx(_components_users__WEBPACK_IMPORTED_MODULE_9__["default"], {
    users: listUsers,
    open: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    style: styles.input_container,
    fluid: "true",
    diction: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 17
    }
  }, __jsx("hr", {
    style: styles.hr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "outlined-multiline-static",
    label: "Message",
    multiline: true,
    rows: 2,
    variant: "filled",
    style: styles.input,
    onChange: e => setMessage(e.target.value),
    value: message,
    onKeyPress: e => e.key === "Enter" ? sendMessage(e) : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "",
    label: "Entrer",
    color: "primary",
    size: "large",
    variant: "contained",
    style: styles.button,
    onClick: e => sendMessage(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 25
    }
  }, "Envoyer"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat_component);

/***/ }),

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/components/users.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
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

const Users_component = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUsersList(props.users);
  }, [props.users]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('la');
    console.log('props', props.open);
    console.log('f', firstTime);
    if (firstTime && props.open) setFirstTime(false);else openModal();
  }, [props.open]);
  const {
    0: modalIsOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: usersList,
    1: setUsersList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let {
    0: firstTime,
    1: setFirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {// subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return __jsx("div", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    styles: styles.container,
    direction: "column",
    alignContent: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, usersList.map((user, id) => {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      key: id,
      xs: 12,
      style: styles.item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 32
      }
    }, __jsx("img", {
      key: `img${id}`,
      src: "/images/user.png",
      style: styles.user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx("p", {
      key: `paragraph${id}`,
      style: styles.user_name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, user));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Users_component);

/***/ }),

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/chat */ "./components/chat.js");
var _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/pages/chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Chat = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, __jsx(_components_chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/chat.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/pages/chat.js */"./pages/chat.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "glamor":
/*!*************************!*\
  !*** external "glamor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-scroll-to-bottom":
/*!*****************************************!*\
  !*** external "react-scroll-to-bottom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-bottom");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=chat.js.map