var _jsxFileName = "src\\buatLagu.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { CariLagu } from "./cariLagu.js";
import { addLagu, getLagu } from "./lagu.js";
import { Login } from "./login.js";
import { root } from "./main.js";
import { getUser } from "./user.js";

export var BuatLagu = function (_React$Component) {
    _inherits(BuatLagu, _React$Component);

    function BuatLagu(p) {
        var _this2 = this;

        _classCallCheck(this, BuatLagu);

        var _this = _possibleConstructorReturn(this, (BuatLagu.__proto__ || Object.getPrototypeOf(BuatLagu)).call(this, p));

        _this.logout = function () {
            root.render(React.createElement(Login, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                },
                __self: _this2
            }));
        };

        _this.move = function () {
            root.render(React.createElement(CariLagu, { username: _this.props.username, jumlah: _this.state.jumlah, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                },
                __self: _this2
            }));
        };

        _this.add = function () {
            var judul = document.getElementById('judul').value;
            if (getLagu().find(function (e) {
                return e.judul.toLowerCase() == judul.toLowerCase() + ' ';
            })) {
                alert('Judul lagu kembar');
            } else {
                var arrKata = judul.split(' ');
                var judulNew = '';
                arrKata.forEach(function (e) {
                    judulNew += e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() + ' ';
                });
                addLagu({
                    author: _this.props.username,
                    judul: judulNew,
                    pendengar: 0
                });
                _this.setState({
                    jumlah: _this.state.jumlah + 1
                });
                alert('Berhasil menambah lagu');
            }
        };

        _this.state = {
            jumlah: _this.props.jumlah
        };
        return _this;
    }

    _createClass(BuatLagu, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var _this3 = this;

            document.querySelector('#judul').value = '';
            getUser().find(function (element) {
                return element.name == _this3.props.username;
            }).jumlah = this.state.jumlah;
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "container-fluid min-vh-100 d-flex flex-column", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "row flex-grow-1", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55
                            },
                            __self: this
                        },
                        React.createElement(
                            "div",
                            { className: "col-md-3", style: { backgroundColor: "#09d9d6" }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 56
                                },
                                __self: this
                            },
                            React.createElement(
                                "div",
                                { className: "card mt-4", style: { width: "18rem", backgroundColor: "black" }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 57
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "div",
                                    { className: "card-body", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 58
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "h1",
                                        { className: "card-title fw-semibold", style: { textAlign: "center", color: "white" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 59
                                            },
                                            __self: this
                                        },
                                        this.props.username
                                    ),
                                    React.createElement(
                                        "h5",
                                        { className: "card-text fw-semibold", style: { textAlign: "center", color: "white" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 60
                                            },
                                            __self: this
                                        },
                                        this.state.jumlah,
                                        " Lagu"
                                    )
                                )
                            ),
                            React.createElement(
                                "h5",
                                { className: "card-text fw-bold mt-3 pb-2", onClick: function onClick() {
                                        _this4.move();
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 63
                                    },
                                    __self: this
                                },
                                "Cari Lagu"
                            ),
                            React.createElement(
                                "h5",
                                { className: "card-text fw-bold", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    },
                                    __self: this
                                },
                                "Buat Lagu"
                            ),
                            React.createElement(
                                "div",
                                { className: "pb-2", style: { position: "absolute", bottom: "0" }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 65
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "button",
                                    { className: "btn btn-primary fw-bold", type: "submit", onClick: function onClick() {
                                            _this4.logout();
                                        }, style: { backgroundColor: "#f92e65", border: "#f92e65", width: "19rem" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 66
                                        },
                                        __self: this
                                    },
                                    "Logout"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-9 px-4 pt-3", id: "ganti", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 69
                                },
                                __self: this
                            },
                            React.createElement(
                                "h2",
                                { className: "card-text display-6 fw-semibold", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 70
                                    },
                                    __self: this
                                },
                                "Buat Lagu"
                            ),
                            React.createElement(
                                "h3",
                                { className: "card-text fw-semibold", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 71
                                    },
                                    __self: this
                                },
                                "Judul Lagu"
                            ),
                            React.createElement("input", { type: "text", id: "judul", className: "form-control", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                },
                                __self: this
                            }),
                            React.createElement(
                                "div",
                                { className: "position-relative", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "div",
                                    { className: "pt-3 position-absolute top-0 end-0", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 74
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "button",
                                        { className: "btn btn-primary fw-bold px-3 py-2", type: "submit", onClick: function onClick() {
                                                _this4.add();
                                            }, style: { backgroundColor: "#09d9d6", border: "none", color: "black" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 75
                                            },
                                            __self: this
                                        },
                                        "Add"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BuatLagu;
}(React.Component);