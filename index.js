"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Display =
    /*#__PURE__*/
    function (_React$Component) {
        _inherits(Display, _React$Component);

        function Display() {
            _classCallCheck(this, Display);

            return _possibleConstructorReturn(this, _getPrototypeOf(Display).apply(this, arguments));
        }

        _createClass(Display, [{
            key: "render",
            value: function render() {
                return React.createElement("div", {
                    id: "display-container",
                    className: "mb-3"
                }, React.createElement("h5", {
                    id: "timer-label",
                    className: "text-center"
                }, this.props.label), React.createElement("div", {
                    id: "time-left",
                    className: "font-weight-bold text-center"
                }, this.props.minutes));
            }
        }]);

        return Display;
    }(React.Component);

var Break =
    /*#__PURE__*/
    function (_React$Component2) {
        _inherits(Break, _React$Component2);

        function Break() {
            _classCallCheck(this, Break);

            return _possibleConstructorReturn(this, _getPrototypeOf(Break).apply(this, arguments));
        }

        _createClass(Break, [{
            key: "breakIncrement",
            value: function breakIncrement() {
                this.props.change(this.props.state.breakLength < 60 ? 1 : 0);
            }
        }, {
            key: "breakDecrement",
            value: function breakDecrement() {
                this.props.change(this.props.state.breakLength > 1 ? -1 : 0);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("div", {
                    id: "break-container",
                    className: "container mb-3"
                }, React.createElement("div", {
                    className: "row justify-content-center"
                }, React.createElement("div", {
                    id: "break-label",
                    className: "text-center"
                }, "Break Length")), React.createElement("div", {
                    className: "row justify-content-center my-2"
                }, React.createElement("div", {
                    id: "break-length"
                }, this.props.value)), React.createElement("div", {
                    className: "row justify-content-center"
                }, React.createElement("div", {
                    className: "col text-center"
                }, React.createElement("button", {
                    id: "break-decrement",
                    className: "",
                    onClick: this.breakDecrement.bind(this)
                }, React.createElement("i", {
                    className: "fa fa-arrow-down"
                }))), React.createElement("div", {
                    className: "col text-center"
                }, React.createElement("button", {
                    id: "break-increment",
                    className: "",
                    onClick: this.breakIncrement.bind(this)
                }, React.createElement("i", {
                    className: "fa fa-arrow-up"
                })))));
            }
        }]);

        return Break;
    }(React.Component);

var Session =
    /*#__PURE__*/
    function (_React$Component3) {
        _inherits(Session, _React$Component3);

        function Session() {
            _classCallCheck(this, Session);

            return _possibleConstructorReturn(this, _getPrototypeOf(Session).apply(this, arguments));
        }

        _createClass(Session, [{
            key: "sessionIncrement",
            value: function sessionIncrement() {
                this.props.change(this.props.state.sessionLength < 60 ? 1 : 0);
            }
        }, {
            key: "sessionDecrement",
            value: function sessionDecrement() {
                this.props.change(this.props.state.sessionLength > 1 ? -1 : 0);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("div", {
                    id: "session-container",
                    className: "container mb-3"
                }, React.createElement("div", {
                    className: "row justify-content-center"
                }, React.createElement("div", {
                    id: "session-label",
                    className: "text-center"
                }, "Session Length")), React.createElement("div", {
                    className: "row justify-content-center my-2"
                }, React.createElement("div", {
                    id: "session-length"
                }, this.props.value)), React.createElement("div", {
                    className: "row justify-content-center"
                }, React.createElement("div", {
                    className: "col text-center"
                }, React.createElement("button", {
                    id: "session-decrement",
                    className: "",
                    onClick: this.sessionDecrement.bind(this)
                }, React.createElement("i", {
                    className: "fa fa-arrow-down"
                }))), React.createElement("div", {
                    className: "col text-center"
                }, React.createElement("button", {
                    id: "session-increment",
                    className: "",
                    onClick: this.sessionIncrement.bind(this)
                }, React.createElement("i", {
                    className: "fa fa-arrow-up"
                })))));
            }
        }]);

        return Session;
    }(React.Component);

var Controls =
    /*#__PURE__*/
    function (_React$Component4) {
        _inherits(Controls, _React$Component4);

        function Controls() {
            _classCallCheck(this, Controls);

            return _possibleConstructorReturn(this, _getPrototypeOf(Controls).apply(this, arguments));
        }

        _createClass(Controls, [{
            key: "render",
            value: function render() {
                return React.createElement("div", {
                    id: "controls-container",
                    className: "justify-content-center text-center"
                }, React.createElement("button", {
                    id: "start_stop",
                    className: " p-2 mx-1",
                    onClick: this.props.toggle
                }, React.createElement("i", {
                    className: "fa fa-play mx-2"
                }), React.createElement("i", {
                    className: "fa fa-pause mx-2"
                })), React.createElement("button", {
                    id: "reset",
                    className: " p-2 mx-1",
                    onClick: this.props.reset
                }, React.createElement("i", {
                    className: "fa fa-refresh"
                })));
            }
        }]);

        return Controls;
    }(React.Component);

var Main =
    /*#__PURE__*/
    function (_React$Component5) {
        _inherits(Main, _React$Component5);

        function Main(props) {
            var _this;

            _classCallCheck(this, Main);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
            _this.state = {
                sessionLength: 25,
                breakLength: 5,
                timeLeft: null,
                label: 'Session',
                timerOn: false,
                startStopCounter: 0
            };
            _this.handleBreakChange = _this.handleBreakChange.bind(_assertThisInitialized(_this));
            _this.handleSessionChange = _this.handleSessionChange.bind(_assertThisInitialized(_this));
            _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
            _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
            return _this;
        }

        _createClass(Main, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.setState({
                    timeLeft: "".concat(this.state.sessionLength, ":00"),
                    // Initiating a timer so that when handleSession() is called
                    // the timer.start() call will go through.
                    timer: new Timer()
                });
            }
        }, {
            key: "handleBreakChange",
            value: function handleBreakChange(amount) {
                if (!this.state.timerOn) {
                    this.setState({
                        breakLength: this.state.breakLength + amount
                    });
                }

                if (this.state.startStopCounter > 1) {
                    this.setState({
                        breakLengthChanged: true
                    });
                }
            }
        }, {
            key: "handleSessionChange",
            value: function handleSessionChange(amount) {
                if (!this.state.timerOn) {
                    this.setState({
                        sessionLength: this.state.sessionLength + amount,
                        timeLeft: this.state.sessionLength < 10 ? "0".concat(this.state.sessionLength + amount, ":00") : "".concat(this.state.sessionLength + amount, ":00")
                    });
                } // if the counter was initially started , then paused and during the pause 
                // the sessionLength was changed, set sessionLengthChanged to true.
                // this state is used to identify if the timer needs to be reset or resumed after a pause.
                // this state is used in the handleSession() method.


                if (this.state.startStopCounter > 1) {
                    this.setState({
                        sessionLengthChanged: true
                    });
                }
            }
        }, {
            key: "handleToggle",
            value: function handleToggle() {
                console.log('handleToggle'); // increase the counter every time the start-stop button is pushed

                this.setState({
                    startStopCounter: this.state.startStopCounter + 1
                }); // start the countdown timer is the startStopCounter is odd

                if (this.state.startStopCounter % 2 === 0) {
                    console.log('toggle-if');
                    this.handleSession();
                } // pause the countdown timer is the startStopCounter is even
                else {
                    console.log('toggle-else');
                    this.handlePause();
                }
            }
        }, {
            key: "handleSession",
            value: function handleSession() {
                var _this2 = this;

                console.log('handleSession'); // Re-initiate timer object in state after returning to a session
                // from a break

                if (this.state.timer === undefined) {
                    this.setState({
                        label: 'Session',
                        timer: new Timer()
                    });
                }

                ; // Reset the countdown timer , if the sessionLength was changed during pause.

                if (this.state.sessionLengthChanged) {
                    console.log('handleSession-after-sessionLength-change-during-pause'); // reset the sessionLengthChanged to false, so if it is changed again it'll be caught

                    this.setState({
                        sessionLengthChanged: false
                    });
                    this.state.timer.stop();
                } // Start the timer plugin


                this.state.timer.start({
                    countdown: true,
                    startValues: {
                        minutes: this.state.sessionLength
                    }
                }); // set state of timerOn to true and display the timer reading

                this.setState({
                    timerOn: true,
                    timeLeft: this.state.timer.getTimeValues().toString().match(/(?<=00:)\d+:\d+/g).join('')
                }); // update countdown timer reading 

                this.state.timer.addEventListener('secondsUpdated', function () {
                    return _this2.setState({
                        timeLeft: _this2.state.timer.getTimeValues().toString().match(/(?<=00:)\d+:\d+/g).join('')
                    });
                }); // when the session time is over instantiate the break session

                this.state.timer.addEventListener('targetAchieved', function () {
                    _this2.audioBeep.play(); // setting a timeout so that the timer plugin has time to show 00:00


                    setTimeout(function () {
                        _this2.setState({
                            timer: _this2.state.timer.stop()
                        });

                        _this2.handleBreak();
                    }, 10000);
                });
            }
        }, {
            key: "handleBreak",
            value: function handleBreak() {
                var _this3 = this;

                console.log('handleBreak'); // Initiate and Re-initiate a Timer every time 
                // handleSession finishes 

                this.setState({
                    label: 'Break',
                    timer: new Timer()
                }); // Reset the countdown timer , if the breakLength was changed during pause.

                if (this.state.breakLengthChanged) {
                    console.log('handleBreak-after-breakLength-change-during-pause'); // reset the breakLengthChanged to false, so if it is changed again it'll be caught

                    this.setState({
                        breakLengthChanged: false
                    });
                    this.state.timer.stop();
                }

                this.state.timer.start({
                    countdown: true,
                    startValues: {
                        minutes: this.state.breakLength
                    }
                });
                this.setState({
                    timerOn: this.state.timer.isRunning(),
                    timeLeft: this.state.timer.getTimeValues().toString().match(/(?<=00:)\d+:\d+/g).join('')
                }); // update countdown timer reading 

                this.state.timer.addEventListener('secondsUpdated', function () {
                    return _this3.setState({
                        timeLeft: _this3.state.timer.getTimeValues().toString().match(/(?<=00:)\d+:\d+/g).join('')
                    });
                }); // when the break time is over instantiate the session

                this.state.timer.addEventListener('targetAchieved', function () {
                    _this3.audioBeep.play(); // setting a timeout so that the timer plugin has time to show 00:00


                    setTimeout(function () {
                        _this3.setState({
                            timer: _this3.state.timer.stop()
                        });

                        _this3.handleSession();
                    }, 10000);
                });
            }
        }, {
            key: "handlePause",
            value: function handlePause() {
                console.log('handlePause');
                this.setState({
                    timerOn: false
                });
                this.state.timer.pause();
            }
        }, {
            key: "handleReset",
            value: function handleReset() {
                console.log('handleReset');
                this.state.timer.stop();
                this.setState({
                    timeLeft: "25:00",
                    sessionLength: 25,
                    breakLength: 5,
                    label: 'Session',
                    timerOn: false,
                    startStopCounter: 0
                });
                this.audioBeep.pause();
                this.audioBeep.currentTime = 0;
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                return React.createElement("div", {
                    id: "clock-container"
                }, React.createElement("h2", {
                    className: "text-center mb-3"
                }, "Pomodoro Clock"), React.createElement(Display, {
                    minutes: this.state.timeLeft,
                    label: this.state.label
                }), React.createElement("div", {
                    className: "container"
                }, React.createElement("div", {
                    className: "row"
                }, React.createElement("div", {
                    className: "col"
                }, React.createElement(Break, {
                    value: this.state.breakLength,
                    state: this.state,
                    change: this.handleBreakChange
                })), React.createElement("div", {
                    className: "col"
                }, React.createElement(Session, {
                    value: this.state.sessionLength,
                    state: this.state,
                    change: this.handleSessionChange
                })))), React.createElement(Controls, {
                    reset: this.handleReset,
                    toggle: this.handleToggle
                }), React.createElement("audio", {
                    id: "beep",
                    preload: "auto",
                    src: "https://goo.gl/65cBl1",
                    ref: function ref(audio) {
                        _this4.audioBeep = audio;
                    }
                }));
            }
        }]);

        return Main;
    }(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('app-container'));