webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-to-bottom */ "./node_modules/react-scroll-to-bottom/lib/index.js");
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/users */ "./components/users.js");


var _this = undefined,
    _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_02/frontend/my-app/components/chat.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var CSS_SCROLL = Object(glamor__WEBPACK_IMPORTED_MODULE_9__["css"])({
  height: 400,
  overflow: "auto",
  overflowX: "hidden"
});
var styles = {
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
    width: "100%"
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
    marginLeft: "-40px"
  },
  pseudoIncomingMessage: {
    position: "absolute",
    marginTop: "-40px",
    color: "#a2a2a2",
    fontSize: "15px",
    marginLeft: "110px"
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
var socket;

var Chat_component = function Chat_component(_ref) {
  var location = _ref.location;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      room = _useState2[0],
      setRoom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState3[0],
      setMessages = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      openModal = _useState5[0],
      setOpenModal = _useState5[1];

  var ENDPOINT = "localhost:8080";

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listUsers = _useState6[0],
      setListUsers = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _router$query = router.query,
        name = _router$query.name,
        room = _router$query.room;
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()(ENDPOINT);

    if (name != undefined && room != undefined) {
      setName(name);
      setRoom(room);
      socket.emit('join', {
        name: name,
        room: room
      }, function (error) {
        if (error) console.log("error : ".concat(error));
      });
    }

    return function () {
      if (name != undefined && room != undefined) {
        socket.emit('disconnect');
        socket.disconnect();
      }
    };
  }, [router, ENDPOINT]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on('newMessage', function (message) {
      setMessages(function (messages) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [message]);
      });
    });
    socket.on('listUsers', function (data) {
      setListUsers(data.users);
    });
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("valeur changer", listUsers);
  }, [listUsers]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("state modale a changer");
  }, [openModal]);

  var sendMessage = function sendMessage(e) {
    e.preventDefault();

    if (message != "" && room != undefined && name != undefined) {
      socket.emit('sendMessage', {
        user: name,
        text: message
      }, function () {
        setMessage('');
      });
    }
  };

  var disconnect = function disconnect(e) {
    e.preventDefault();
    socket.emit('disconnect');
    socket.disconnect();
    router.push("/join");
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.sub_container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.topbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: styles.pseudo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.pastille,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 46
    }
  }, "\u2022 "), name), __jsx("img", {
    style: styles.people,
    src: "/images/people.png",
    onClick: function onClick() {
      return setOpenModal(!openModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }), __jsx("img", {
    style: styles.close,
    src: "/images/close.png",
    onClick: function onClick(e) {
      return disconnect(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: styles.messages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "scrollToBottom",
    className: "".concat(CSS_SCROLL),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: styles.incomingMessageList,
    direction: "column",
    spacing: 8,
    wrap: "nowrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }, messages.map(function (message, i) {
    if (message.user == name.trim().toLowerCase()) {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: i,
        id: "inboxMessage".concat(i),
        style: styles.itemIncomingMessage,
        xs: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        container: true,
        key: "".concat(i, "2"),
        style: styles.containerItemIncomingMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: "".concat(i, "3"),
        style: styles.incomingMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 37
        }
      }, message.text), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "".concat(i, "4"),
        item: true,
        style: styles.pseudoIncomingMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 49
        }
      }, message.user)));
    } else if (message.user == "admin") {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: i,
        id: "inboxMessage".concat(i),
        style: styles.itemIncomingMessage,
        xs: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        container: true,
        key: "".concat(i, "2"),
        style: styles.containerItemIncomingMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: "".concat(i, "3"),
        style: styles.adminMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 37
        }
      }, message.text), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "".concat(i, "4"),
        item: true,
        style: styles.pseudoIncomingMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 49
        }
      }, "Admin")));
    } else {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: i,
        id: "myMessage".concat(i),
        style: styles.itemMyMessage,
        xs: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 49
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        container: true,
        key: "".concat(i, "2"),
        style: styles.containerItemMyMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 45
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: "".concat(i, "3"),
        style: styles.pseudoMymessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 49
        }
      }, message.user), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: true,
        key: "".concat(i, "4"),
        style: styles.myMessage,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 49
        }
      }, message.text)));
    }
  })))), __jsx(_components_users__WEBPACK_IMPORTED_MODULE_10__["default"], {
    users: listUsers,
    open: openModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: styles.input_container,
    fluid: "true",
    diction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, __jsx("hr", {
    style: styles.hr,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-multiline-static",
    label: "Message",
    multiline: true,
    rows: 2,
    variant: "filled",
    style: styles.input,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    value: message,
    onKeyPress: function onKeyPress(e) {
      return e.key === "Enter" ? sendMessage(e) : null;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "",
    label: "Entrer",
    color: "primary",
    size: "large",
    variant: "contained",
    style: styles.button,
    onClick: function onClick(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, "Envoyer"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat_component);

/***/ })

})
//# sourceMappingURL=chat.js.b1443124dfd2ee228fa1.hot-update.js.map