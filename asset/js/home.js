var _jsxFileName = "src\\home.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { BuatLagu } from "./buatLagu.js";
import { CariLagu } from "./cariLagu.js";
import { Login } from "./login.js";
import { root } from "./main.js";

export var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(p) {
        var _this2 = this;

        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, p));

        _this.logout = function () {
            root.render(React.createElement(Login, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                },
                __self: _this2
            }));
        };

        _this.isi = function () {
            var isi = "\n            <div className=\"container-fluid min-vh-100 d-flex flex-column\">\n                    <div className=\"row flex-grow-1\">\n                        <div className=\"col-md-3\" style={{backgroundColor: '#09d9d6'}}>\n                            <div className=\"card mt-4\" style={{width: '18rem', backgroundColor: 'black'}}>\n                                <div className=\"card-body\">\n                                    <h1 className=\"card-title fw-semibold\" style={{textAlign: 'center', color: 'white'}}>{this.props.username}</h1>\n                                    <h5 className=\"card-text fw-semibold\" style={{textAlign: 'center', color: 'white'}}>{this.props.jumlah} Lagu</h5>\n                                </div>\n                            </div>\n                            <h5 className=\"card-text fw-bold mt-3 pb-2\" onClick={() => {this.moveToCari()}}>Cari Lagu</h5>\n                            <h5 className=\"card-text fw-bold\" onClick={() => {this.moveToBuat()}}>Buat Lagu</h5>\n                            <div className=\"pb-2 px-2 position-absolute bottom-0 start-0\">\n                                <button className=\"btn btn-primary fw-bold\" type=\"submit\" onClick={() => {this.logout()}} style={{backgroundColor: '#f92e65', border: 'none', width: '23vw'}}>Logout</button>\n                            </div>\n                        </div>\n                        <div className=\"col-md-9 px-4 pt-3\" id=\"ganti\"></div>\n                    \n        ";
            return isi;
        };

        _this.moveToCari = function () {
            var isi = _this.isi();
            isi += "\n                        <CariLagu/>\n                    </div>\n                </div>\n        ";
            return isi;
        };

        _this.moveToBuat = function () {
            document.querySelector('#ganti').innerHTML = React.createElement(BuatLagu, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                },
                __self: _this2
            });
        };

        return _this;
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            document.querySelector('body').style.backgroundColor = '';
            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    },
                    __self: this
                },
                this.moveToCari()
            );
        }
    }]);

    return Home;
}(React.Component);