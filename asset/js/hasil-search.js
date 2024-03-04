var _jsxFileName = "src\\hasil-search.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { getLagu } from "./lagu.js";

export var HasilSearch = function (_React$Component) {
    _inherits(HasilSearch, _React$Component);

    function HasilSearch(p) {
        _classCallCheck(this, HasilSearch);

        var _this = _possibleConstructorReturn(this, (HasilSearch.__proto__ || Object.getPrototypeOf(HasilSearch)).call(this, p));

        _this.play = function () {
            _this.setState({
                pendengar: _this.state.pendengar + 1
            });
            getLagu().find(function (e) {
                return e.judul == _this.props.judul;
            }).pendengar = _this.state.pendengar + 1;
        };

        _this.state = {
            pendengar: 0
        };
        return _this;
    }

    _createClass(HasilSearch, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                pendengar: this.props.dengar
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "pb-3", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "card", style: { borderColor: "gray" }, onClick: function onClick() {
                            _this2.play();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "card-body", onClick: function onClick(e) {
                                _this2.props.stats(_this2.props.author, _this2.props.judul);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            },
                            __self: this
                        },
                        React.createElement(
                            "h5",
                            { className: "card-text fw-semibold", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                },
                                __self: this
                            },
                            this.props.judul
                        ),
                        React.createElement(
                            "h5",
                            { className: "card-text fw-normal", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                },
                                __self: this
                            },
                            this.props.author,
                            " - Listened : ",
                            this.state.pendengar
                        )
                    )
                )
            );
        }
    }]);

    return HasilSearch;
}(React.Component);