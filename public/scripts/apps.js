"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userName = "Javier";
var userHobbie = "Tattoos";
var zipcode = "10100";

var user = {
    name: "Javier!"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is the blog from ",
        user.name
    ),
    React.createElement(
        "h2",
        null,
        "Today's topic is: ",
        userHobbie
    )
);

var Car = function (_React$Component) {
    _inherits(Car, _React$Component);

    function Car() {
        _classCallCheck(this, Car);

        return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
    }

    _createClass(Car, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h2",
                null,
                "This is a car ",
                this.props.color
            );
        }
    }]);

    return Car;
}(React.Component);

var Element = function (_React$Component2) {
    _inherits(Element, _React$Component2);

    function Element() {
        _classCallCheck(this, Element);

        return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).apply(this, arguments));
    }

    _createClass(Element, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    " ",
                    this.props.h
                ),
                React.createElement(
                    "h4",
                    null,
                    this.props.habilidad
                )
            );
        }
    }]);

    return Element;
}(React.Component);

var Album = function (_React$Component3) {
    _inherits(Album, _React$Component3);

    function Album() {
        _classCallCheck(this, Album);

        return _possibleConstructorReturn(this, (Album.__proto__ || Object.getPrototypeOf(Album)).apply(this, arguments));
    }

    _createClass(Album, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "main",
                null,
                React.createElement(
                    "div",
                    { "class": "album py-5 bg-light" },
                    React.createElement(
                        "div",
                        { "class": "container" },
                        React.createElement(
                            "div",
                            { "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" },
                            React.createElement(
                                "div",
                                { "class": "col" },
                                React.createElement(
                                    "div",
                                    { "class": "card shadow-sm" },
                                    React.createElement(
                                        "svg",
                                        { "class": "bd-placeholder-img card-img-top", width: "100%", height: "225", role: "img", "aria-label": "Placeholder: Thumbnail", preserveAspectRatio: "xMidYMid slice", focusable: "false" },
                                        React.createElement(
                                            "title",
                                            null,
                                            "Placeholder"
                                        ),
                                        React.createElement("rect", { width: "100%", height: "100%", fill: "#55595c" }),
                                        React.createElement(
                                            "text",
                                            { x: "50%", y: "50%", fill: "#eceeef", dy: ".3em" },
                                            "Imagen"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "card-body" },
                                        React.createElement(
                                            "p",
                                            { "class": "card-text" },
                                            "Estudiante de ingenieria en la universidad del Istmo"
                                        ),
                                        React.createElement("div", { "class": "d-flex justify-content-between align-items-center" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Album;
}(React.Component);

//Implementando bootstrap con react


var Column = function (_React$Component4) {
    _inherits(Column, _React$Component4);

    function Column() {
        _classCallCheck(this, Column);

        return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
    }

    _createClass(Column, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "container", id: "caja" },
                React.createElement(
                    "div",
                    { "class": "row" },
                    React.createElement(
                        "div",
                        { "class": "col-sm-4" },
                        React.createElement(Element, { h: "Habilidad Principal", habilidad: "Programacion en React" }),
                        React.createElement(Element, { h: "Habilidad Secundaria", habilidad: "Fotografia Profesional" }),
                        React.createElement(Element, { h: "Habilidad Terciaria", habilidad: "Estudio de tatuajes" })
                    )
                )
            );
        }
    }]);

    return Column;
}(React.Component);

var Column2 = function (_React$Component5) {
    _inherits(Column2, _React$Component5);

    function Column2() {
        _classCallCheck(this, Column2);

        return _possibleConstructorReturn(this, (Column2.__proto__ || Object.getPrototypeOf(Column2)).apply(this, arguments));
    }

    _createClass(Column2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "container", id: "caja" },
                React.createElement(
                    "div",
                    { "class": "row" },
                    React.createElement(
                        "div",
                        { "class": "col-sm-4" },
                        React.createElement(Element, { h: "Telefono", habilidad: "5041590" }),
                        React.createElement(Element, { h: "Correo Electronico", habilidad: "lopez191204@unis.edu.gt" }),
                        React.createElement(Element, { h: "Redes Sociales", habilidad: "@redesSociales" })
                    )
                )
            );
        }
    }]);

    return Column2;
}(React.Component);

var Column3 = function (_React$Component6) {
    _inherits(Column3, _React$Component6);

    function Column3() {
        _classCallCheck(this, Column3);

        return _possibleConstructorReturn(this, (Column3.__proto__ || Object.getPrototypeOf(Column3)).apply(this, arguments));
    }

    _createClass(Column3, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "container", id: "caja" },
                React.createElement(
                    "div",
                    { "class": "row" },
                    React.createElement(
                        "div",
                        { "class": "col-sm-4" },
                        React.createElement(Element, { h: "Idiomas", habilidad: "Espa\xF1ol||Ingles" }),
                        React.createElement(Element, { h: "Cualidades", habilidad: "Solidarirdad||Liderazgo" }),
                        React.createElement(Element, { h: "Experiencia", habilidad: "200 horas supervisadas en: Byte||Lego Robotics" })
                    )
                )
            );
        }
    }]);

    return Column3;
}(React.Component);

var Header = function (_React$Component7) {
    _inherits(Header, _React$Component7);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "caja" },
                React.createElement(
                    "div",
                    { "class": "jumbotron text-center" },
                    React.createElement(
                        "h1",
                        null,
                        "Javier Alejandrop Lopez Guzman"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Estudiante ingenieria en sistemas"
                    )
                ),
                React.createElement(Album, null),
                React.createElement(Column, null),
                React.createElement(Column3, null),
                React.createElement(Column2, null)
            );
        }
    }]);

    return Header;
}(React.Component);
//Hasta aqui la implemetacion de bootstgrap con react


var Garage = function (_React$Component8) {
    _inherits(Garage, _React$Component8);

    function Garage() {
        _classCallCheck(this, Garage);

        return _possibleConstructorReturn(this, (Garage.__proto__ || Object.getPrototypeOf(Garage)).apply(this, arguments));
    }

    _createClass(Garage, [{
        key: "render",
        value: function render() {
            /*
                    constructor(props){
                        super(props);
                        this.state = {
                            emp_no : '',
                            first_name: '',
                            last_name: '',
                            gender:'',
                            birth_date:''
                        }
            
                    }
            */
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null)
            );
        }
    }]);

    return Garage;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(Garage, null), appRoot);
