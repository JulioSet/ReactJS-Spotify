var _jsxFileName = "src\\cariLagu.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { BuatLagu } from "./buatLagu.js";
import { HasilSearch } from "./hasil-search.js";
import { getLagu } from "./lagu.js";
import { Login } from "./login.js";
import { root } from "./main.js";

export var CariLagu = function (_React$Component) {
    _inherits(CariLagu, _React$Component);

    function CariLagu(p) {
        var _this2 = this;

        _classCallCheck(this, CariLagu);

        var _this = _possibleConstructorReturn(this, (CariLagu.__proto__ || Object.getPrototypeOf(CariLagu)).call(this, p));

        _this.logout = function () {
            root.render(React.createElement(Login, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                },
                __self: _this2
            }));
        };

        _this.move = function () {
            root.render(React.createElement(BuatLagu, { username: _this.props.username, jumlah: _this.props.jumlah, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                },
                __self: _this2
            }));
        };

        _this.cari = function (e) {
            if (e.code == 'Enter') {
                var nama = document.getElementById('judul').value;
                var idx = 0;
                var anakan = [];
                if (nama != '') {
                    var filtered = getLagu().filter(function (e) {
                        return e.judul.toLowerCase() == nama.toLowerCase() + ' ';
                    });
                    filtered.forEach(function (e) {
                        anakan.push(React.createElement(HasilSearch, { key: idx, author: e.author, judul: e.judul, dengar: e.pendengar, stats: _this.status, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            },
                            __self: _this2
                        }));
                        idx += 1;
                    });
                    _this.setState({
                        post_search: 'Showing Result for : ' + nama,
                        search: anakan
                    });
                }
            }
        };

        _this.status = function (artis, judul) {
            _this.setState({
                listen: judul + ' - ' + artis
            });
        };

        _this.clear = function () {
            _this.setState({
                listen: 'Judul Lagu - Creator'
            });
        };

        _this.state = {
            post_search: '',
            search: [],
            listen: ''
        };
        return _this;
    }

    _createClass(CariLagu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                listen: 'Judul Lagu - Creator'
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            document.querySelector('body').style.backgroundColor = '';
            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "container-fluid min-vh-100 d-flex flex-column", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "row flex-grow-1", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68
                            },
                            __self: this
                        },
                        React.createElement(
                            "div",
                            { className: "col-md-3", style: { backgroundColor: "#09d9d6" }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 69
                                },
                                __self: this
                            },
                            React.createElement(
                                "div",
                                { className: "card mt-4", style: { width: "18rem", backgroundColor: "black" }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 70
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "div",
                                    { className: "card-body", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 71
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "h1",
                                        { className: "card-title fw-semibold", style: { textAlign: "center", color: "white" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            },
                                            __self: this
                                        },
                                        this.props.username
                                    ),
                                    React.createElement(
                                        "h5",
                                        { className: "card-text fw-semibold", style: { textAlign: "center", color: "white" }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 73
                                            },
                                            __self: this
                                        },
                                        this.props.jumlah,
                                        " Lagu"
                                    )
                                )
                            ),
                            React.createElement(
                                "h5",
                                { className: "card-text fw-bold mt-3 pb-2", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    },
                                    __self: this
                                },
                                "Cari Lagu"
                            ),
                            React.createElement(
                                "h5",
                                { className: "card-text fw-bold", onClick: function onClick() {
                                        _this3.move();
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 77
                                    },
                                    __self: this
                                },
                                "Buat Lagu"
                            ),
                            React.createElement(
                                "div",
                                { className: "pb-2 px-2 position-absolute bottom-0 start-0", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 78
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "button",
                                    { className: "btn btn-primary fw-bold ", type: "submit", onClick: function onClick() {
                                            _this3.logout();
                                        }, style: { backgroundColor: "#f92e65", border: "none", width: "19rem" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 79
                                        },
                                        __self: this
                                    },
                                    "Logout"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-9 px-4 pt-3", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                },
                                __self: this
                            },
                            React.createElement(
                                "h3",
                                { className: "card-text display-6 fw-semibold", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 83
                                    },
                                    __self: this
                                },
                                "Cari Lagu"
                            ),
                            React.createElement(
                                "h4",
                                { className: "card-text fw-semibold", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 84
                                    },
                                    __self: this
                                },
                                "Judul Lagu"
                            ),
                            React.createElement("input", { type: "text", id: "judul", onKeyDown: function onKeyDown(e) {
                                    _this3.cari(e);
                                }, className: "form-control", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                },
                                __self: this
                            }),
                            React.createElement(
                                "h4",
                                { className: "card-text fw-bold pt-5", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 86
                                    },
                                    __self: this
                                },
                                this.state.post_search
                            ),
                            this.state.search,
                            React.createElement(
                                "div",
                                { className: "position-absolute top-100 start-50", style: { marginTop: "-8%", marginLeft: "-23%" }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    "h4",
                                    { className: "fw-semibold", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 89
                                        },
                                        __self: this
                                    },
                                    "Listening To :"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "card", style: { width: "59rem", backgroundColor: "#09d9d6", border: "none" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 90
                                        },
                                        __self: this
                                    },
                                    React.createElement(
                                        "div",
                                        { className: "card-body", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 91
                                            },
                                            __self: this
                                        },
                                        React.createElement(
                                            "h5",
                                            { className: "card-text fw-semibold", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 92
                                                },
                                                __self: this
                                            },
                                            this.state.listen,
                                            React.createElement(
                                                "div",
                                                { className: "position-relative", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 94
                                                    },
                                                    __self: this
                                                },
                                                React.createElement(
                                                    "div",
                                                    { className: "position-absolute top-100 start-100", style: { marginTop: '-2.5%', marginLeft: '-1%' }, __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 95
                                                        },
                                                        __self: this
                                                    },
                                                    React.createElement(
                                                        "span",
                                                        { onClick: function onClick() {
                                                                _this3.clear();
                                                            }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 96
                                                            },
                                                            __self: this
                                                        },
                                                        "X"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CariLagu;
}(React.Component);