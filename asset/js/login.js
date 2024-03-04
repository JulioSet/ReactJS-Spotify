var _jsxFileName = "src\\login.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { CariLagu } from "./cariLagu.js";
import { root } from "./main.js";
import { getUser, addUser } from "./user.js";

export var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(p) {
        var _this2 = this;

        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, p));

        _this.add = function () {
            var nama = document.querySelector('#username');
            var pass = document.querySelector('#password');
            if (getUser().find(function (element) {
                return element.name == nama.value;
            })) {
                if (getUser().find(function (element) {
                    return element.name == nama.value;
                }).pass == pass.value) {
                    var jumlah = getUser().find(function (element) {
                        return element.name == nama.value;
                    }).jumlah;
                    root.render(React.createElement(CariLagu, { username: nama.value, jumlah: jumlah, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        },
                        __self: _this2
                    }));
                } else {
                    alert('Password salah');
                }
            } else {
                addUser({
                    name: nama.value,
                    pass: pass.value,
                    jumlah: 0
                });
                root.render(React.createElement(CariLagu, { username: nama.value, jumlah: 0, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    },
                    __self: _this2
                }));
            }
        };

        _this.state = {
            arrUser: []
        };
        return _this;
    }

    _createClass(Login, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState = {
                arrUser: getUser()
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            document.querySelector('body').style.backgroundColor = '#09d9d6';
            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "container-fluid", style: { marginTop: "12.5%" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "row align-items-center ms-5", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            },
                            __self: this
                        },
                        React.createElement(
                            "div",
                            { className: "col-8 align-center", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                },
                                __self: this
                            },
                            React.createElement(
                                "h1",
                                { className: "display-2 fw-bolder lh-1", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    },
                                    __self: this
                                },
                                "Dengarkan Musik Dimana Saja"
                            ),
                            React.createElement(
                                "div",
                                { className: "mt-3", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "ul",
                                    { className: "list-unstyled", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "li",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 51
                                            },
                                            __self: this
                                        },
                                        React.createElement(
                                            "h4",
                                            { className: "fw-bolder", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 51
                                                },
                                                __self: this
                                            },
                                            "Nikmati lagu dimana saja"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 52
                                            },
                                            __self: this
                                        },
                                        React.createElement(
                                            "h4",
                                            { className: "fw-bolder", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 52
                                                },
                                                __self: this
                                            },
                                            "kapan saja"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 53
                                            },
                                            __self: this
                                        },
                                        React.createElement(
                                            "h4",
                                            { className: "fw-bolder", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 53
                                                },
                                                __self: this
                                            },
                                            "lagu apapun yang kamu mau"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-4", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                },
                                __self: this
                            },
                            React.createElement(
                                "div",
                                { className: "card", style: { width: "18rem" }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 58
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "div",
                                    { className: "card-body", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 59
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "h1",
                                        { className: "card-title fw-bold", style: { textAlign: "center" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 60
                                            },
                                            __self: this
                                        },
                                        "LOGIN"
                                    ),
                                    React.createElement(
                                        "label",
                                        { className: "form-label fw-bold", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 61
                                            },
                                            __self: this
                                        },
                                        "Username"
                                    ),
                                    React.createElement("input", { type: "text", id: "username", className: "form-control", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 62
                                        },
                                        __self: this
                                    }),
                                    React.createElement(
                                        "label",
                                        { className: "form-label fw-bold", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 63
                                            },
                                            __self: this
                                        },
                                        "Password"
                                    ),
                                    React.createElement("input", { type: "password", id: "password", className: "form-control mb-5", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 64
                                        },
                                        __self: this
                                    }),
                                    React.createElement(
                                        "button",
                                        { className: "btn btn-primary fw-bold", type: "submit", onClick: function onClick() {
                                                _this3.add();
                                            }, style: { width: "100%", backgroundColor: "#09d9d6", border: "#09d9d6", color: "black" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 65
                                            },
                                            __self: this
                                        },
                                        "Login"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);