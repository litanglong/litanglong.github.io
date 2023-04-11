(function(f) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = f() : 'function' == typeof define && define.amd ? define([], f) : ('undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this).adapter = f();
})(function() {
    return function r(e, n, t) {
        function o(i, f) {
            var c;
            if (!n[i]) {
                if (!e[i]) {
                    c = 'function' == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    throw (f = new Error('Cannot find module \'' + i + '\'')).code = 'MODULE_NOT_FOUND', 
                    f;
                }
                c = n[i] = {
                    'exports': {}
                };
                e[i][0].call(c.exports, function(r) {
                    return o(e[i][1][r] || r);
                }, c, c.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o;
    }({
        '1': [ function(require, module, exports) {
            'use strict';
            require = (0, require('./adapter_factory.js').adapterFactory)({
                'window': 'undefined' == typeof window ? void 0 : window
            });
            module.exports = require;
        }, {
            './adapter_factory.js': 2
        } ],
        '2': [ function(require, module, exports) {
            'use strict';
            var utils, chromeShim, firefoxShim, safariShim, commonShim, sdp;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            exports.adapterFactory = function() {
                var window, options, logging, browserDetails, adapter;
                window = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).window;
                options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    'shimChrome': !0,
                    'shimFirefox': !0,
                    'shimSafari': !0
                };
                logging = utils.log;
                browserDetails = utils.detectBrowser(window);
                adapter = {
                    'browserDetails': browserDetails,
                    'commonShim': commonShim,
                    'extractVersion': utils.extractVersion,
                    'disableLog': utils.disableLog,
                    'disableWarnings': utils.disableWarnings,
                    'sdp': sdp
                };
                switch (browserDetails.browser) {
                  case 'chrome':
                    if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) return logging('Chrome shim is not included in this adapter release.'), 
                    adapter;
                    if (null === browserDetails.version) return logging('Chrome shim can not determine version, not shimming.'), 
                    adapter;
                    logging('adapter.js shimming chrome.');
                    adapter.browserShim = chromeShim;
                    commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
                    chromeShim.shimGetUserMedia(window, browserDetails);
                    chromeShim.shimMediaStream(window, browserDetails);
                    chromeShim.shimPeerConnection(window, browserDetails);
                    chromeShim.shimOnTrack(window, browserDetails);
                    chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
                    chromeShim.shimGetSendersWithDtmf(window, browserDetails);
                    chromeShim.shimGetStats(window, browserDetails);
                    chromeShim.shimSenderReceiverGetStats(window, browserDetails);
                    chromeShim.fixNegotiationNeeded(window, browserDetails);
                    commonShim.shimRTCIceCandidate(window, browserDetails);
                    commonShim.shimConnectionState(window, browserDetails);
                    commonShim.shimMaxMessageSize(window, browserDetails);
                    commonShim.shimSendThrowTypeError(window, browserDetails);
                    commonShim.removeExtmapAllowMixed(window, browserDetails);
                    break;

                  case 'firefox':
                    if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) return logging('Firefox shim is not included in this adapter release.'), 
                    adapter;
                    logging('adapter.js shimming firefox.');
                    adapter.browserShim = firefoxShim;
                    commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
                    firefoxShim.shimGetUserMedia(window, browserDetails);
                    firefoxShim.shimPeerConnection(window, browserDetails);
                    firefoxShim.shimOnTrack(window, browserDetails);
                    firefoxShim.shimRemoveStream(window, browserDetails);
                    firefoxShim.shimSenderGetStats(window, browserDetails);
                    firefoxShim.shimReceiverGetStats(window, browserDetails);
                    firefoxShim.shimRTCDataChannel(window, browserDetails);
                    firefoxShim.shimAddTransceiver(window, browserDetails);
                    firefoxShim.shimGetParameters(window, browserDetails);
                    firefoxShim.shimCreateOffer(window, browserDetails);
                    firefoxShim.shimCreateAnswer(window, browserDetails);
                    commonShim.shimRTCIceCandidate(window, browserDetails);
                    commonShim.shimConnectionState(window, browserDetails);
                    commonShim.shimMaxMessageSize(window, browserDetails);
                    commonShim.shimSendThrowTypeError(window, browserDetails);
                    break;

                  case 'safari':
                    if (!safariShim || !options.shimSafari) return logging('Safari shim is not included in this adapter release.'), 
                    adapter;
                    logging('adapter.js shimming safari.');
                    adapter.browserShim = safariShim;
                    commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
                    safariShim.shimRTCIceServerUrls(window, browserDetails);
                    safariShim.shimCreateOfferLegacy(window, browserDetails);
                    safariShim.shimCallbacksAPI(window, browserDetails);
                    safariShim.shimLocalStreamsAPI(window, browserDetails);
                    safariShim.shimRemoteStreamsAPI(window, browserDetails);
                    safariShim.shimTrackEventTransceiver(window, browserDetails);
                    safariShim.shimGetUserMedia(window, browserDetails);
                    safariShim.shimAudioContext(window, browserDetails);
                    commonShim.shimRTCIceCandidate(window, browserDetails);
                    commonShim.shimMaxMessageSize(window, browserDetails);
                    commonShim.shimSendThrowTypeError(window, browserDetails);
                    commonShim.removeExtmapAllowMixed(window, browserDetails);
                    break;

                  default:
                    logging('Unsupported browser!');
                }
                return adapter;
            };
            exports = require('./utils');
            utils = _interopRequireWildcard(exports);
            exports = require('./chrome/chrome_shim');
            chromeShim = _interopRequireWildcard(exports);
            exports = require('./firefox/firefox_shim');
            firefoxShim = _interopRequireWildcard(exports);
            exports = require('./safari/safari_shim');
            safariShim = _interopRequireWildcard(exports);
            exports = require('./common_shim');
            commonShim = _interopRequireWildcard(exports);
            exports = require('sdp');
            sdp = _interopRequireWildcard(exports);
            function _interopRequireWildcard(obj) {
                var newObj, key;
                if (obj && obj.__esModule) return obj;
                newObj = {};
                if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                newObj.default = obj;
                return newObj;
            }
        }, {
            './chrome/chrome_shim': 3,
            './common_shim': 6,
            './firefox/firefox_shim': 7,
            './safari/safari_shim': 10,
            './utils': 11,
            'sdp': 12
        } ],
        '3': [ function(require, module, exports) {
            'use strict';
            var _typeof, _getusermedia, _getdisplaymedia, utils;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            exports.shimGetDisplayMedia = exports.shimGetUserMedia = void 0;
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            _getusermedia = require('./getusermedia');
            Object.defineProperty(exports, 'shimGetUserMedia', {
                'enumerable': !0,
                'get': function() {
                    return _getusermedia.shimGetUserMedia;
                }
            });
            _getdisplaymedia = require('./getdisplaymedia');
            Object.defineProperty(exports, 'shimGetDisplayMedia', {
                'enumerable': !0,
                'get': function() {
                    return _getdisplaymedia.shimGetDisplayMedia;
                }
            });
            exports.shimMediaStream = function(window) {
                window.MediaStream = window.MediaStream || window.webkitMediaStream;
            };
            exports.shimOnTrack = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection || 'ontrack' in window.RTCPeerConnection.prototype) utils.wrapPeerConnectionEvent(window, 'track', function(e) {
                    e.transceiver || Object.defineProperty(e, 'transceiver', {
                        'value': {
                            'receiver': e.receiver
                        }
                    });
                    return e;
                }); else {
                    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
                        'get': function() {
                            return this._ontrack;
                        },
                        'set': function(f) {
                            this._ontrack && this.removeEventListener('track', this._ontrack);
                            this.addEventListener('track', this._ontrack = f);
                        },
                        'enumerable': !0,
                        'configurable': !0
                    });
                    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var _this = this;
                        if (!this._ontrackpoly) {
                            this._ontrackpoly = function(e) {
                                e.stream.addEventListener('addtrack', function(te) {
                                    var receiver, event;
                                    receiver = void 0;
                                    receiver = window.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function(r) {
                                        return r.track && r.track.id === te.track.id;
                                    }) : {
                                        'track': te.track
                                    };
                                    (event = new Event('track')).track = te.track;
                                    event.receiver = receiver;
                                    event.transceiver = {
                                        'receiver': receiver
                                    };
                                    event.streams = [ e.stream ];
                                    _this.dispatchEvent(event);
                                });
                                e.stream.getTracks().forEach(function(track) {
                                    var receiver, event;
                                    receiver = void 0;
                                    receiver = window.RTCPeerConnection.prototype.getReceivers ? _this.getReceivers().find(function(r) {
                                        return r.track && r.track.id === track.id;
                                    }) : {
                                        'track': track
                                    };
                                    (event = new Event('track')).track = track;
                                    event.receiver = receiver;
                                    event.transceiver = {
                                        'receiver': receiver
                                    };
                                    event.streams = [ e.stream ];
                                    _this.dispatchEvent(event);
                                });
                            };
                            this.addEventListener('addstream', this._ontrackpoly);
                        }
                        return origSetRemoteDescription.apply(this, arguments);
                    };
                }
            };
            exports.shimGetSendersWithDtmf = function(window) {
                var shimSenderWithDtmf, origAddTrack, origRemoveTrack, origAddStream, origRemoveStream, origGetSenders;
                if ('object' === (void 0 === window ? 'undefined' : _typeof(window)) && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
                    shimSenderWithDtmf = function(pc, track) {
                        return {
                            'track': track,
                            get 'dtmf'() {
                                void 0 === this._dtmf && ('audio' === track.kind ? this._dtmf = pc.createDTMFSender(track) : this._dtmf = null);
                                return this._dtmf;
                            },
                            '_pc': pc
                        };
                    };
                    if (!window.RTCPeerConnection.prototype.getSenders) {
                        window.RTCPeerConnection.prototype.getSenders = function() {
                            this._senders = this._senders || [];
                            return this._senders.slice();
                        };
                        origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
                            var sender = origAddTrack.apply(this, arguments);
                            if (!sender) {
                                sender = shimSenderWithDtmf(this, track);
                                this._senders.push(sender);
                            }
                            return sender;
                        };
                        origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
                        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
                            origRemoveTrack.apply(this, arguments);
                            sender = this._senders.indexOf(sender);
                            -1 !== sender && this._senders.splice(sender, 1);
                        };
                    }
                    origAddStream = window.RTCPeerConnection.prototype.addStream;
                    window.RTCPeerConnection.prototype.addStream = function(stream) {
                        var _this2 = this;
                        this._senders = this._senders || [];
                        origAddStream.apply(this, [ stream ]);
                        stream.getTracks().forEach(function(track) {
                            _this2._senders.push(shimSenderWithDtmf(_this2, track));
                        });
                    };
                    origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                    window.RTCPeerConnection.prototype.removeStream = function(stream) {
                        var _this3 = this;
                        this._senders = this._senders || [];
                        origRemoveStream.apply(this, [ stream ]);
                        stream.getTracks().forEach(function(track) {
                            var sender = _this3._senders.find(function(s) {
                                return s.track === track;
                            });
                            sender && _this3._senders.splice(_this3._senders.indexOf(sender), 1);
                        });
                    };
                } else if ('object' === (void 0 === window ? 'undefined' : _typeof(window)) && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
                    origGetSenders = window.RTCPeerConnection.prototype.getSenders;
                    window.RTCPeerConnection.prototype.getSenders = function() {
                        var _this4, senders;
                        (senders = origGetSenders.apply(_this4 = this, [])).forEach(function(sender) {
                            return sender._pc = _this4;
                        });
                        return senders;
                    };
                    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
                        'get': function() {
                            void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null);
                            return this._dtmf;
                        }
                    });
                }
            };
            exports.shimGetStats = function(window) {
                if (!window.RTCPeerConnection) return;
                var origGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function() {
                    var _this5, selector, onSucc, _arguments, fixChromeStats_, makeMapStats;
                    _this5 = this;
                    selector = (_arguments = Array.prototype.slice.call(arguments))[0], 
                    onSucc = _arguments[1], _arguments = _arguments[2];
                    if (0 < arguments.length && 'function' == typeof selector) return origGetStats.apply(this, arguments);
                    if (0 === origGetStats.length && (0 === arguments.length || 'function' != typeof selector)) return origGetStats.apply(this, []);
                    fixChromeStats_ = function(response) {
                        var standardReport;
                        standardReport = {};
                        response.result().forEach(function(report) {
                            var standardStats = {
                                'id': report.id,
                                'timestamp': report.timestamp,
                                'type': {
                                    'localcandidate': 'local-candidate',
                                    'remotecandidate': 'remote-candidate'
                                }[report.type] || report.type
                            };
                            report.names().forEach(function(name) {
                                standardStats[name] = report.stat(name);
                            });
                            standardReport[standardStats.id] = standardStats;
                        });
                        return standardReport;
                    };
                    makeMapStats = function(stats) {
                        return new Map(Object.keys(stats).map(function(key) {
                            return [ key, stats[key] ];
                        }));
                    };
                    if (2 <= arguments.length) return origGetStats.apply(this, [ function(response) {
                        onSucc(makeMapStats(fixChromeStats_(response)));
                    }, selector ]);
                    return new Promise(function(resolve, reject) {
                        origGetStats.apply(_this5, [ function(response) {
                            resolve(makeMapStats(fixChromeStats_(response)));
                        }, reject ]);
                    }).then(onSucc, _arguments);
                };
            };
            exports.shimSenderReceiverGetStats = function(window) {
                var origGetSenders, origAddTrack, origGetReceivers, origGetStats;
                if (!('object' === (void 0 === window ? 'undefined' : _typeof(window)) && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) return;
                if (!('getStats' in window.RTCRtpSender.prototype)) {
                    (origGetSenders = window.RTCPeerConnection.prototype.getSenders) && (window.RTCPeerConnection.prototype.getSenders = function() {
                        var _this6, senders;
                        (senders = origGetSenders.apply(_this6 = this, [])).forEach(function(sender) {
                            return sender._pc = _this6;
                        });
                        return senders;
                    });
                    (origAddTrack = window.RTCPeerConnection.prototype.addTrack) && (window.RTCPeerConnection.prototype.addTrack = function() {
                        var sender = origAddTrack.apply(this, arguments);
                        sender._pc = this;
                        return sender;
                    });
                    window.RTCRtpSender.prototype.getStats = function() {
                        var sender = this;
                        return this._pc.getStats().then(function(result) {
                            return utils.filterStats(result, sender.track, !0);
                        });
                    };
                }
                if (!('getStats' in window.RTCRtpReceiver.prototype)) {
                    (origGetReceivers = window.RTCPeerConnection.prototype.getReceivers) && (window.RTCPeerConnection.prototype.getReceivers = function() {
                        var _this7, receivers;
                        (receivers = origGetReceivers.apply(_this7 = this, [])).forEach(function(receiver) {
                            return receiver._pc = _this7;
                        });
                        return receivers;
                    });
                    utils.wrapPeerConnectionEvent(window, 'track', function(e) {
                        e.receiver._pc = e.srcElement;
                        return e;
                    });
                    window.RTCRtpReceiver.prototype.getStats = function() {
                        var receiver = this;
                        return this._pc.getStats().then(function(result) {
                            return utils.filterStats(result, receiver.track, !1);
                        });
                    };
                }
                if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) return;
                origGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function() {
                    var track, sender, receiver, err;
                    if (0 < arguments.length && arguments[0] instanceof window.MediaStreamTrack) {
                        track = arguments[0];
                        err = receiver = sender = void 0;
                        this.getSenders().forEach(function(s) {
                            s.track === track && (sender ? err = !0 : sender = s);
                        });
                        this.getReceivers().forEach(function(r) {
                            r.track === track && (receiver ? err = !0 : receiver = r);
                            return r.track === track;
                        });
                        if (err || sender && receiver) return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
                        if (sender) return sender.getStats();
                        if (receiver) return receiver.getStats();
                        return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
                    }
                    return origGetStats.apply(this, arguments);
                };
            };
            exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
            exports.shimAddTrackRemoveTrack = function(window, browserDetails) {
                var origGetLocalStreams, origAddStream, origRemoveStream, origSetLocalDescription, origLocalDescription;
                if (!window.RTCPeerConnection) return;
                if (window.RTCPeerConnection.prototype.addTrack && 65 <= browserDetails.version) return shimAddTrackRemoveTrackWithNative(window);
                origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
                window.RTCPeerConnection.prototype.getLocalStreams = function() {
                    var _this11, nativeStreams;
                    nativeStreams = origGetLocalStreams.apply(_this11 = this);
                    this._reverseStreams = this._reverseStreams || {};
                    return nativeStreams.map(function(stream) {
                        return _this11._reverseStreams[stream.id];
                    });
                };
                origAddStream = window.RTCPeerConnection.prototype.addStream;
                window.RTCPeerConnection.prototype.addStream = function(stream) {
                    var _this12, newStream;
                    (_this12 = this)._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};
                    stream.getTracks().forEach(function(track) {
                        if (_this12.getSenders().find(function(s) {
                            return s.track === track;
                        })) throw new DOMException('Track already exists.', 'InvalidAccessError');
                    });
                    if (!this._reverseStreams[stream.id]) {
                        newStream = new window.MediaStream(stream.getTracks());
                        this._streams[stream.id] = newStream;
                        this._reverseStreams[newStream.id] = stream;
                        stream = newStream;
                    }
                    origAddStream.apply(this, [ stream ]);
                };
                origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                window.RTCPeerConnection.prototype.removeStream = function(stream) {
                    this._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};
                    origRemoveStream.apply(this, [ this._streams[stream.id] || stream ]);
                    delete this._reverseStreams[(this._streams[stream.id] || stream).id];
                    delete this._streams[stream.id];
                };
                window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
                    var _this13, streams;
                    if ('closed' === (_this13 = this).signalingState) throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
                    if (1 !== (streams = [].slice.call(arguments, 1)).length || !streams[0].getTracks().find(function(t) {
                        return t === track;
                    })) throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError');
                    if (this.getSenders().find(function(s) {
                        return s.track === track;
                    })) throw new DOMException('Track already exists.', 'InvalidAccessError');
                    this._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};
                    if (streams = this._streams[stream.id]) {
                        streams.addTrack(track);
                        Promise.resolve().then(function() {
                            _this13.dispatchEvent(new Event('negotiationneeded'));
                        });
                    } else {
                        streams = new window.MediaStream([ track ]);
                        this._streams[stream.id] = streams;
                        this._reverseStreams[streams.id] = stream;
                        this.addStream(streams);
                    }
                    return this.getSenders().find(function(s) {
                        return s.track === track;
                    });
                };
                function replaceInternalStreamId(pc, description) {
                    var sdp = description.sdp;
                    Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
                        var internalStream;
                        internalId = pc._reverseStreams[internalId];
                        internalStream = pc._streams[internalId.id];
                        sdp = sdp.replace(new RegExp(internalStream.id, 'g'), internalId.id);
                    });
                    return new RTCSessionDescription({
                        'type': description.type,
                        'sdp': sdp
                    });
                }
                [ 'createOffer', 'createAnswer' ].forEach(function(method) {
                    var nativeMethod, methodObj;
                    nativeMethod = window.RTCPeerConnection.prototype[method];
                    methodObj = _defineProperty({}, method, function() {
                        var _this14, args;
                        _this14 = this;
                        if ((args = arguments).length && 'function' == typeof arguments[0]) return nativeMethod.apply(this, [ function(description) {
                            description = replaceInternalStreamId(_this14, description);
                            args[0].apply(null, [ description ]);
                        }, function(err) {
                            args[1] && args[1].apply(null, err);
                        }, arguments[2] ]);
                        return nativeMethod.apply(this, arguments).then(function(description) {
                            return replaceInternalStreamId(_this14, description);
                        });
                    });
                    window.RTCPeerConnection.prototype[method] = methodObj[method];
                });
                origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
                window.RTCPeerConnection.prototype.setLocalDescription = function() {
                    if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(this, arguments);
                    arguments[0] = function(pc, description) {
                        var sdp = description.sdp;
                        Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
                            var internalStream;
                            internalId = pc._reverseStreams[internalId];
                            internalStream = pc._streams[internalId.id];
                            sdp = sdp.replace(new RegExp(internalId.id, 'g'), internalStream.id);
                        });
                        return new RTCSessionDescription({
                            'type': description.type,
                            'sdp': sdp
                        });
                    }(this, arguments[0]);
                    return origSetLocalDescription.apply(this, arguments);
                };
                origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
                Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
                    'get': function() {
                        var description = origLocalDescription.get.apply(this);
                        if ('' === description.type) return description;
                        return replaceInternalStreamId(this, description);
                    }
                });
                window.RTCPeerConnection.prototype.removeTrack = function(sender) {
                    var _this15, stream;
                    if ('closed' === (_this15 = this).signalingState) throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
                    if (!sender._pc) throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError');
                    if (!(sender._pc === this)) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
                    this._streams = this._streams || {};
                    stream = void 0;
                    Object.keys(this._streams).forEach(function(streamid) {
                        _this15._streams[streamid].getTracks().find(function(track) {
                            return sender.track === track;
                        }) && (stream = _this15._streams[streamid]);
                    });
                    if (stream) {
                        1 === stream.getTracks().length ? this.removeStream(this._reverseStreams[stream.id]) : stream.removeTrack(sender.track);
                        this.dispatchEvent(new Event('negotiationneeded'));
                    }
                };
            };
            exports.shimPeerConnection = function(window, browserDetails) {
                !window.RTCPeerConnection && window.webkitRTCPeerConnection && (window.RTCPeerConnection = window.webkitRTCPeerConnection);
                if (!window.RTCPeerConnection) return;
                browserDetails.version < 53 && [ 'setLocalDescription', 'setRemoteDescription', 'addIceCandidate' ].forEach(function(method) {
                    var nativeMethod, methodObj;
                    nativeMethod = window.RTCPeerConnection.prototype[method];
                    methodObj = _defineProperty({}, method, function() {
                        arguments[0] = new ('addIceCandidate' === method ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                        return nativeMethod.apply(this, arguments);
                    });
                    window.RTCPeerConnection.prototype[method] = methodObj[method];
                });
            };
            exports.fixNegotiationNeeded = function(window, browserDetails) {
                utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function(e) {
                    var pc = e.target;
                    if ((browserDetails.version < 72 || pc.getConfiguration && 'plan-b' === pc.getConfiguration().sdpSemantics) && 'stable' !== pc.signalingState) return;
                    return e;
                });
            };
            exports = require('../utils.js');
            utils = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(exports);
            function _defineProperty(obj, key, value) {
                key in obj ? Object.defineProperty(obj, key, {
                    'value': value,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }) : obj[key] = value;
                return obj;
            }
            function shimAddTrackRemoveTrackWithNative(window) {
                var origAddTrack, origAddStream, origRemoveStream, origRemoveTrack;
                window.RTCPeerConnection.prototype.getLocalStreams = function() {
                    var _this8 = this;
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    return Object.keys(this._shimmedLocalStreams).map(function(streamId) {
                        return _this8._shimmedLocalStreams[streamId][0];
                    });
                };
                origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
                    if (!stream) return origAddTrack.apply(this, arguments);
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    var sender = origAddTrack.apply(this, arguments);
                    this._shimmedLocalStreams[stream.id] ? -1 === this._shimmedLocalStreams[stream.id].indexOf(sender) && this._shimmedLocalStreams[stream.id].push(sender) : this._shimmedLocalStreams[stream.id] = [ stream, sender ];
                    return sender;
                };
                origAddStream = window.RTCPeerConnection.prototype.addStream;
                window.RTCPeerConnection.prototype.addStream = function(stream) {
                    var _this9, existingSenders, newSenders;
                    (_this9 = this)._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    stream.getTracks().forEach(function(track) {
                        if (_this9.getSenders().find(function(s) {
                            return s.track === track;
                        })) throw new DOMException('Track already exists.', 'InvalidAccessError');
                    });
                    existingSenders = this.getSenders();
                    origAddStream.apply(this, arguments);
                    newSenders = this.getSenders().filter(function(newSender) {
                        return -1 === existingSenders.indexOf(newSender);
                    });
                    this._shimmedLocalStreams[stream.id] = [ stream ].concat(newSenders);
                };
                origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                window.RTCPeerConnection.prototype.removeStream = function(stream) {
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    delete this._shimmedLocalStreams[stream.id];
                    return origRemoveStream.apply(this, arguments);
                };
                origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
                window.RTCPeerConnection.prototype.removeTrack = function(sender) {
                    var _this10 = this;
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    sender && Object.keys(this._shimmedLocalStreams).forEach(function(streamId) {
                        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
                        -1 !== idx && _this10._shimmedLocalStreams[streamId].splice(idx, 1);
                        1 === _this10._shimmedLocalStreams[streamId].length && delete _this10._shimmedLocalStreams[streamId];
                    });
                    return origRemoveTrack.apply(this, arguments);
                };
            }
        }, {
            '../utils.js': 11,
            './getdisplaymedia': 4,
            './getusermedia': 5
        } ],
        '4': [ function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            exports.shimGetDisplayMedia = function(window, getSourceId) {
                if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) return;
                if (!window.navigator.mediaDevices) return;
                if ('function' != typeof getSourceId) return;
                window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
                    return getSourceId(constraints).then(function(sourceId) {
                        var widthSpecified, heightSpecified, frameRateSpecified;
                        widthSpecified = constraints.video && constraints.video.width;
                        heightSpecified = constraints.video && constraints.video.height;
                        frameRateSpecified = constraints.video && constraints.video.frameRate;
                        constraints.video = {
                            'mandatory': {
                                'chromeMediaSource': 'desktop',
                                'chromeMediaSourceId': sourceId,
                                'maxFrameRate': frameRateSpecified || 3
                            }
                        };
                        widthSpecified && (constraints.video.mandatory.maxWidth = widthSpecified);
                        heightSpecified && (constraints.video.mandatory.maxHeight = heightSpecified);
                        return window.navigator.mediaDevices.getUserMedia(constraints);
                    });
                };
            };
        }, {} ],
        '5': [ function(require, module, exports) {
            'use strict';
            var _typeof, logging;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            exports.shimGetUserMedia = function(window, browserDetails) {
                var navigator, constraintsToChrome_, shimConstraints_, shimError_, origGetUserMedia;
                navigator = window && window.navigator;
                if (!navigator.mediaDevices) return;
                constraintsToChrome_ = function(c) {
                    if ('object' !== (void 0 === c ? 'undefined' : _typeof(c)) || c.mandatory || c.optional) return c;
                    var cc = {};
                    Object.keys(c).forEach(function(key) {
                        var r, oldname_, oc;
                        if ('require' === key || 'advanced' === key || 'mediaSource' === key) return;
                        void 0 !== (r = 'object' === _typeof(c[key]) ? c[key] : {
                            'ideal': c[key]
                        }).exact && 'number' == typeof r.exact && (r.min = r.max = r.exact);
                        oldname_ = function(prefix, name) {
                            if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                            return 'deviceId' === name ? 'sourceId' : name;
                        };
                        if (void 0 !== r.ideal) {
                            cc.optional = cc.optional || [];
                            oc = {};
                            if ('number' == typeof r.ideal) {
                                oc[oldname_('min', key)] = r.ideal;
                                cc.optional.push(oc);
                                (oc = {})[oldname_('max', key)] = r.ideal;
                            } else oc[oldname_('', key)] = r.ideal;
                            cc.optional.push(oc);
                        }
                        if (void 0 !== r.exact && 'number' != typeof r.exact) {
                            cc.mandatory = cc.mandatory || {};
                            cc.mandatory[oldname_('', key)] = r.exact;
                        } else [ 'min', 'max' ].forEach(function(mix) {
                            if (void 0 !== r[mix]) {
                                cc.mandatory = cc.mandatory || {};
                                cc.mandatory[oldname_(mix, key)] = r[mix];
                            }
                        });
                    });
                    c.advanced && (cc.optional = (cc.optional || []).concat(c.advanced));
                    return cc;
                };
                shimConstraints_ = function(constraints, func) {
                    var face, remap, matches;
                    if (61 <= browserDetails.version) return func(constraints);
                    if ((constraints = JSON.parse(JSON.stringify(constraints))) && 'object' === _typeof(constraints.audio)) {
                        (remap = function(obj, a, b) {
                            if (a in obj && !(b in obj)) {
                                obj[b] = obj[a];
                                delete obj[a];
                            }
                        })((constraints = JSON.parse(JSON.stringify(constraints))).audio, 'autoGainControl', 'googAutoGainControl');
                        remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
                        constraints.audio = constraintsToChrome_(constraints.audio);
                    }
                    if (constraints && 'object' === _typeof(constraints.video)) {
                        face = (face = constraints.video.facingMode) && ('object' === (void 0 === face ? 'undefined' : _typeof(face)) ? face : {
                            'ideal': face
                        });
                        remap = browserDetails.version < 66;
                        if (face && ('user' === face.exact || 'environment' === face.exact || 'user' === face.ideal || 'environment' === face.ideal) && (!navigator.mediaDevices.getSupportedConstraints || !navigator.mediaDevices.getSupportedConstraints().facingMode || remap)) {
                            delete constraints.video.facingMode;
                            matches = void 0;
                            'environment' === face.exact || 'environment' === face.ideal ? matches = [ 'back', 'rear' ] : 'user' !== face.exact && 'user' !== face.ideal || (matches = [ 'front' ]);
                            if (matches) return navigator.mediaDevices.enumerateDevices().then(function(devices) {
                                var dev = (devices = devices.filter(function(d) {
                                    return 'videoinput' === d.kind;
                                })).find(function(d) {
                                    return matches.some(function(match) {
                                        return d.label.toLowerCase().includes(match);
                                    });
                                });
                                (dev = !dev && devices.length && matches.includes('back') ? devices[devices.length - 1] : dev) && (constraints.video.deviceId = face.exact ? {
                                    'exact': dev.deviceId
                                } : {
                                    'ideal': dev.deviceId
                                });
                                constraints.video = constraintsToChrome_(constraints.video);
                                logging('chrome: ' + JSON.stringify(constraints));
                                return func(constraints);
                            });
                        }
                        constraints.video = constraintsToChrome_(constraints.video);
                    }
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                };
                shimError_ = function(e) {
                    if (64 <= browserDetails.version) return e;
                    return {
                        'name': {
                            'PermissionDeniedError': 'NotAllowedError',
                            'PermissionDismissedError': 'NotAllowedError',
                            'InvalidStateError': 'NotAllowedError',
                            'DevicesNotFoundError': 'NotFoundError',
                            'ConstraintNotSatisfiedError': 'OverconstrainedError',
                            'TrackStartError': 'NotReadableError',
                            'MediaDeviceFailedDueToShutdown': 'NotAllowedError',
                            'MediaDeviceKillSwitchOn': 'NotAllowedError',
                            'TabCaptureError': 'AbortError',
                            'ScreenCaptureError': 'AbortError',
                            'DeviceCaptureError': 'AbortError'
                        }[e.name] || e.name,
                        'message': e.message,
                        'constraint': e.constraint || e.constraintName,
                        'toString': function() {
                            return this.name + (this.message && ': ') + this.message;
                        }
                    };
                };
                window = function(constraints, onSuccess, onError) {
                    shimConstraints_(constraints, function(c) {
                        navigator.webkitGetUserMedia(c, onSuccess, function(e) {
                            onError && onError(shimError_(e));
                        });
                    });
                };
                navigator.getUserMedia = window.bind(navigator);
                if (navigator.mediaDevices.getUserMedia) {
                    origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function(cs) {
                        return shimConstraints_(cs, function(c) {
                            return origGetUserMedia(c).then(function(stream) {
                                if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) throw stream.getTracks().forEach(function(track) {
                                    track.stop();
                                }), new DOMException('', 'NotFoundError');
                                return stream;
                            }, function(e) {
                                return Promise.reject(shimError_(e));
                            });
                        });
                    };
                }
            };
            exports = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(require('../utils.js'));
            logging = exports.log;
        }, {
            '../utils.js': 11
        } ],
        '6': [ function(require, module, exports) {
            'use strict';
            var _typeof, _sdp2, utils;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            exports.shimRTCIceCandidate = function(window) {
                if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) return;
                var NativeRTCIceCandidate = window.RTCIceCandidate;
                window.RTCIceCandidate = function(args) {
                    var nativeCandidate, parsedCandidate, augmentedCandidate;
                    'object' === (void 0 === args ? 'undefined' : _typeof(args)) && args.candidate && 0 === args.candidate.indexOf('a=') && ((args = JSON.parse(JSON.stringify(args))).candidate = args.candidate.substr(2));
                    if (args.candidate && args.candidate.length) {
                        nativeCandidate = new NativeRTCIceCandidate(args);
                        parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
                        (augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate)).toJSON = function() {
                            return {
                                'candidate': augmentedCandidate.candidate,
                                'sdpMid': augmentedCandidate.sdpMid,
                                'sdpMLineIndex': augmentedCandidate.sdpMLineIndex,
                                'usernameFragment': augmentedCandidate.usernameFragment
                            };
                        };
                        return augmentedCandidate;
                    }
                    return new NativeRTCIceCandidate(args);
                };
                window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
                utils.wrapPeerConnectionEvent(window, 'icecandidate', function(e) {
                    e.candidate && Object.defineProperty(e, 'candidate', {
                        'value': new window.RTCIceCandidate(e.candidate),
                        'writable': 'false'
                    });
                    return e;
                });
            };
            exports.shimMaxMessageSize = function(window, browserDetails) {
                var sctpInDescription, getRemoteFirefoxVersion, getCanSendMaxMessageSize, getMaxMessageSize, origSetRemoteDescription;
                if (!window.RTCPeerConnection) return;
                'sctp' in window.RTCPeerConnection.prototype || Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
                    'get': function() {
                        return void 0 === this._sctp ? null : this._sctp;
                    }
                });
                sctpInDescription = function(description) {
                    if (!description || !description.sdp) return !1;
                    description = _sdp2.default.splitSections(description.sdp);
                    description.shift();
                    return description.some(function(mediaSection) {
                        mediaSection = _sdp2.default.parseMLine(mediaSection);
                        return mediaSection && 'application' === mediaSection.kind && -1 !== mediaSection.protocol.indexOf('SCTP');
                    });
                };
                getRemoteFirefoxVersion = function(description) {
                    if (null === (description = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/)) || description.length < 2) return -1;
                    return (description = parseInt(description[1], 10)) != description ? -1 : description;
                };
                getCanSendMaxMessageSize = function(remoteIsFirefox) {
                    var canSendMaxMessageSize = 65536;
                    return canSendMaxMessageSize = 'firefox' === browserDetails.browser ? browserDetails.version < 57 ? -1 === remoteIsFirefox ? 16384 : 2147483637 : browserDetails.version < 60 ? 57 === browserDetails.version ? 65535 : 65536 : 2147483637 : canSendMaxMessageSize;
                };
                getMaxMessageSize = function(description, remoteIsFirefox) {
                    var maxMessageSize;
                    maxMessageSize = 65536;
                    'firefox' === browserDetails.browser && 57 === browserDetails.version && (maxMessageSize = 65535);
                    0 < (description = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:')).length ? maxMessageSize = parseInt(description[0].substr(19), 10) : 'firefox' === browserDetails.browser && -1 !== remoteIsFirefox && (maxMessageSize = 2147483637);
                    return maxMessageSize;
                };
                origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                window.RTCPeerConnection.prototype.setRemoteDescription = function() {
                    var isFirefox, maxMessageSize, canSendMMS;
                    this._sctp = null;
                    'chrome' === browserDetails.browser && 76 <= browserDetails.version && 'plan-b' === this.getConfiguration().sdpSemantics && Object.defineProperty(this, 'sctp', {
                        'get': function() {
                            return void 0 === this._sctp ? null : this._sctp;
                        },
                        'enumerable': !0,
                        'configurable': !0
                    });
                    if (sctpInDescription(arguments[0])) {
                        isFirefox = getRemoteFirefoxVersion(arguments[0]);
                        canSendMMS = getCanSendMaxMessageSize(isFirefox);
                        isFirefox = getMaxMessageSize(arguments[0], isFirefox);
                        maxMessageSize = void 0;
                        maxMessageSize = 0 === canSendMMS && 0 === isFirefox ? Number.POSITIVE_INFINITY : 0 === canSendMMS || 0 === isFirefox ? Math.max(canSendMMS, isFirefox) : Math.min(canSendMMS, isFirefox);
                        canSendMMS = {};
                        Object.defineProperty(canSendMMS, 'maxMessageSize', {
                            'get': function() {
                                return maxMessageSize;
                            }
                        });
                        this._sctp = canSendMMS;
                    }
                    return origSetRemoteDescription.apply(this, arguments);
                };
            };
            exports.shimSendThrowTypeError = function(window) {
                if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) return;
                function wrapDcSend(dc, pc) {
                    var origDataChannelSend = dc.send;
                    dc.send = function() {
                        var data;
                        data = (data = arguments[0]).length || data.size || data.byteLength;
                        if ('open' === dc.readyState && pc.sctp && data > pc.sctp.maxMessageSize) throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
                        return origDataChannelSend.apply(dc, arguments);
                    };
                }
                var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
                window.RTCPeerConnection.prototype.createDataChannel = function() {
                    var dataChannel = origCreateDataChannel.apply(this, arguments);
                    wrapDcSend(dataChannel, this);
                    return dataChannel;
                };
                utils.wrapPeerConnectionEvent(window, 'datachannel', function(e) {
                    wrapDcSend(e.channel, e.target);
                    return e;
                });
            };
            exports.shimConnectionState = function(window) {
                if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) return;
                var proto = window.RTCPeerConnection.prototype;
                Object.defineProperty(proto, 'connectionState', {
                    'get': function() {
                        return {
                            'completed': 'connected',
                            'checking': 'connecting'
                        }[this.iceConnectionState] || this.iceConnectionState;
                    },
                    'enumerable': !0,
                    'configurable': !0
                });
                Object.defineProperty(proto, 'onconnectionstatechange', {
                    'get': function() {
                        return this._onconnectionstatechange || null;
                    },
                    'set': function(cb) {
                        if (this._onconnectionstatechange) {
                            this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                            delete this._onconnectionstatechange;
                        }
                        cb && this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
                    },
                    'enumerable': !0,
                    'configurable': !0
                });
                [ 'setLocalDescription', 'setRemoteDescription' ].forEach(function(method) {
                    var origMethod = proto[method];
                    proto[method] = function() {
                        if (!this._connectionstatechangepoly) {
                            this._connectionstatechangepoly = function(e) {
                                var pc, newEvent;
                                if ((pc = e.target)._lastConnectionState !== pc.connectionState) {
                                    pc._lastConnectionState = pc.connectionState;
                                    newEvent = new Event('connectionstatechange', e);
                                    pc.dispatchEvent(newEvent);
                                }
                                return e;
                            };
                            this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
                        }
                        return origMethod.apply(this, arguments);
                    };
                });
            };
            exports.removeExtmapAllowMixed = function(window, browserDetails) {
                if (!window.RTCPeerConnection) return;
                if ('chrome' === browserDetails.browser && 71 <= browserDetails.version) return;
                if ('safari' === browserDetails.browser && 605 <= browserDetails.version) return;
                var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
                window.RTCPeerConnection.prototype.setRemoteDescription = function(desc) {
                    if (desc && desc.sdp && -1 !== desc.sdp.indexOf('\na=extmap-allow-mixed')) {
                        var sdp = desc.sdp.split('\n').filter(function(line) {
                            return 'a=extmap-allow-mixed' !== line.trim();
                        }).join('\n');
                        window.RTCSessionDescription && desc instanceof window.RTCSessionDescription ? arguments[0] = new window.RTCSessionDescription({
                            'type': desc.type,
                            'sdp': sdp
                        }) : desc.sdp = sdp;
                    }
                    return nativeSRD.apply(this, arguments);
                };
            };
            exports.shimAddIceCandidateNullOrEmpty = function(window, browserDetails) {
                if (!window.RTCPeerConnection || !window.RTCPeerConnection.prototype) return;
                var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
                if (!nativeAddIceCandidate || 0 === nativeAddIceCandidate.length) return;
                window.RTCPeerConnection.prototype.addIceCandidate = function() {
                    if (!arguments[0]) return arguments[1] && arguments[1].apply(null), 
                    Promise.resolve();
                    if (('chrome' === browserDetails.browser && browserDetails.version < 78 || 'firefox' === browserDetails.browser && browserDetails.version < 68 || 'safari' === browserDetails.browser) && arguments[0] && '' === arguments[0].candidate) return Promise.resolve();
                    return nativeAddIceCandidate.apply(this, arguments);
                };
            };
            exports = require('sdp');
            _sdp2 = (exports = exports) && exports.__esModule ? exports : {
                'default': exports
            };
            exports = require('./utils');
            utils = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(exports);
        }, {
            './utils': 11,
            'sdp': 12
        } ],
        '7': [ function(require, module, exports) {
            'use strict';
            var _typeof, _getusermedia, _getdisplaymedia, utils;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            exports.shimGetDisplayMedia = exports.shimGetUserMedia = void 0;
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            _getusermedia = require('./getusermedia');
            Object.defineProperty(exports, 'shimGetUserMedia', {
                'enumerable': !0,
                'get': function() {
                    return _getusermedia.shimGetUserMedia;
                }
            });
            _getdisplaymedia = require('./getdisplaymedia');
            Object.defineProperty(exports, 'shimGetDisplayMedia', {
                'enumerable': !0,
                'get': function() {
                    return _getdisplaymedia.shimGetDisplayMedia;
                }
            });
            exports.shimOnTrack = function(window) {
                'object' === (void 0 === window ? 'undefined' : _typeof(window)) && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype) && Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                    'get': function() {
                        return {
                            'receiver': this.receiver
                        };
                    }
                });
            };
            exports.shimPeerConnection = function(window, browserDetails) {
                var modernStatsTypes, nativeGetStats;
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection && !window.mozRTCPeerConnection) return;
                !window.RTCPeerConnection && window.mozRTCPeerConnection && (window.RTCPeerConnection = window.mozRTCPeerConnection);
                browserDetails.version < 53 && [ 'setLocalDescription', 'setRemoteDescription', 'addIceCandidate' ].forEach(function(method) {
                    var nativeMethod, methodObj;
                    nativeMethod = window.RTCPeerConnection.prototype[method];
                    methodObj = function(obj, key, value) {
                        key in obj ? Object.defineProperty(obj, key, {
                            'value': value,
                            'enumerable': !0,
                            'configurable': !0,
                            'writable': !0
                        }) : obj[key] = value;
                        return obj;
                    }({}, method, function() {
                        arguments[0] = new ('addIceCandidate' === method ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                        return nativeMethod.apply(this, arguments);
                    });
                    window.RTCPeerConnection.prototype[method] = methodObj[method];
                });
                modernStatsTypes = {
                    'inboundrtp': 'inbound-rtp',
                    'outboundrtp': 'outbound-rtp',
                    'candidatepair': 'candidate-pair',
                    'localcandidate': 'local-candidate',
                    'remotecandidate': 'remote-candidate'
                };
                nativeGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function() {
                    var _arguments = Array.prototype.slice.call(arguments), selector = _arguments[0], onSucc = _arguments[1], _arguments = _arguments[2];
                    return nativeGetStats.apply(this, [ selector || null ]).then(function(stats) {
                        if (browserDetails.version < 53 && !onSucc) try {
                            stats.forEach(function(stat) {
                                stat.type = modernStatsTypes[stat.type] || stat.type;
                            });
                        } catch (e) {
                            if ('TypeError' !== e.name) throw e;
                            stats.forEach(function(stat, i) {
                                stats.set(i, Object.assign({}, stat, {
                                    'type': modernStatsTypes[stat.type] || stat.type
                                }));
                            });
                        }
                        return stats;
                    }).then(onSucc, _arguments);
                };
            };
            exports.shimSenderGetStats = function(window) {
                var origGetSenders, origAddTrack;
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection || !window.RTCRtpSender) return;
                if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) return;
                origGetSenders = window.RTCPeerConnection.prototype.getSenders;
                origGetSenders && (window.RTCPeerConnection.prototype.getSenders = function() {
                    var _this, senders;
                    (senders = origGetSenders.apply(_this = this, [])).forEach(function(sender) {
                        return sender._pc = _this;
                    });
                    return senders;
                });
                origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                origAddTrack && (window.RTCPeerConnection.prototype.addTrack = function() {
                    var sender = origAddTrack.apply(this, arguments);
                    sender._pc = this;
                    return sender;
                });
                window.RTCRtpSender.prototype.getStats = function() {
                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
                };
            };
            exports.shimReceiverGetStats = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection || !window.RTCRtpSender) return;
                if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) return;
                var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
                origGetReceivers && (window.RTCPeerConnection.prototype.getReceivers = function() {
                    var _this2, receivers;
                    (receivers = origGetReceivers.apply(_this2 = this, [])).forEach(function(receiver) {
                        return receiver._pc = _this2;
                    });
                    return receivers;
                });
                utils.wrapPeerConnectionEvent(window, 'track', function(e) {
                    e.receiver._pc = e.srcElement;
                    return e;
                });
                window.RTCRtpReceiver.prototype.getStats = function() {
                    return this._pc.getStats(this.track);
                };
            };
            exports.shimRemoveStream = function(window) {
                if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) return;
                window.RTCPeerConnection.prototype.removeStream = function(stream) {
                    var _this3 = this;
                    utils.deprecated('removeStream', 'removeTrack');
                    this.getSenders().forEach(function(sender) {
                        sender.track && stream.getTracks().includes(sender.track) && _this3.removeTrack(sender);
                    });
                };
            };
            exports.shimRTCDataChannel = function(window) {
                window.DataChannel && !window.RTCDataChannel && (window.RTCDataChannel = window.DataChannel);
            };
            exports.shimAddTransceiver = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
                origAddTransceiver && (window.RTCPeerConnection.prototype.addTransceiver = function() {
                    var initParameters, transceiver, sender, shouldPerformCheck;
                    this.setParametersPromises = [];
                    (shouldPerformCheck = (initParameters = arguments[1]) && 'sendEncodings' in initParameters) && initParameters.sendEncodings.forEach(function(encodingParam) {
                        if ('rid' in encodingParam) if (!/^[a-z0-9]{0,16}$/i.test(encodingParam.rid)) throw new TypeError('Invalid RID value provided.');
                        if ('scaleResolutionDownBy' in encodingParam && !(1 <= parseFloat(encodingParam.scaleResolutionDownBy))) throw new RangeError('scale_resolution_down_by must be >= 1.0');
                        if ('maxFramerate' in encodingParam && !(0 <= parseFloat(encodingParam.maxFramerate))) throw new RangeError('max_framerate must be >= 0.0');
                    });
                    transceiver = origAddTransceiver.apply(this, arguments);
                    if (shouldPerformCheck && (!('encodings' in (shouldPerformCheck = (sender = transceiver.sender).getParameters())) || 1 === shouldPerformCheck.encodings.length && 0 === Object.keys(shouldPerformCheck.encodings[0]).length)) {
                        shouldPerformCheck.encodings = initParameters.sendEncodings;
                        sender.sendEncodings = initParameters.sendEncodings;
                        this.setParametersPromises.push(sender.setParameters(shouldPerformCheck).then(function() {
                            delete sender.sendEncodings;
                        }).catch(function() {
                            delete sender.sendEncodings;
                        }));
                    }
                    return transceiver;
                });
            };
            exports.shimGetParameters = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCRtpSender) return;
                var origGetParameters = window.RTCRtpSender.prototype.getParameters;
                origGetParameters && (window.RTCRtpSender.prototype.getParameters = function() {
                    var params = origGetParameters.apply(this, arguments);
                    'encodings' in params || (params.encodings = [].concat(this.sendEncodings || [ {} ]));
                    return params;
                });
            };
            exports.shimCreateOffer = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
                window.RTCPeerConnection.prototype.createOffer = function() {
                    var _this4 = this, _arguments2 = arguments;
                    if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(function() {
                        return origCreateOffer.apply(_this4, _arguments2);
                    }).finally(function() {
                        _this4.setParametersPromises = [];
                    });
                    return origCreateOffer.apply(this, arguments);
                };
            };
            exports.shimCreateAnswer = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
                window.RTCPeerConnection.prototype.createAnswer = function() {
                    var _this5 = this, _arguments3 = arguments;
                    if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(function() {
                        return origCreateAnswer.apply(_this5, _arguments3);
                    }).finally(function() {
                        _this5.setParametersPromises = [];
                    });
                    return origCreateAnswer.apply(this, arguments);
                };
            };
            exports = require('../utils');
            utils = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(exports);
        }, {
            '../utils': 11,
            './getdisplaymedia': 8,
            './getusermedia': 9
        } ],
        '8': [ function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            exports.shimGetDisplayMedia = function(window, preferredMediaSource) {
                if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) return;
                if (!window.navigator.mediaDevices) return;
                window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
                    if (!constraints || !constraints.video) {
                        var err = new DOMException('getDisplayMedia without video constraints is undefined');
                        err.name = 'NotFoundError';
                        err.code = 8;
                        return Promise.reject(err);
                    }
                    !0 === constraints.video ? constraints.video = {
                        'mediaSource': preferredMediaSource
                    } : constraints.video.mediaSource = preferredMediaSource;
                    return window.navigator.mediaDevices.getUserMedia(constraints);
                };
            };
        }, {} ],
        '9': [ function(require, module, exports) {
            'use strict';
            var _typeof, utils;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            exports.shimGetUserMedia = function(window, browserDetails) {
                var navigator, remap, nativeGetUserMedia, nativeGetSettings, nativeApplyConstraints;
                navigator = window && window.navigator;
                window = window && window.MediaStreamTrack;
                navigator.getUserMedia = function(constraints, onSuccess, onError) {
                    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
                    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
                };
                if (!(55 < browserDetails.version && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
                    remap = function(obj, a, b) {
                        if (a in obj && !(b in obj)) {
                            obj[b] = obj[a];
                            delete obj[a];
                        }
                    };
                    nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function(c) {
                        if ('object' === (void 0 === c ? 'undefined' : _typeof(c)) && 'object' === _typeof(c.audio)) {
                            c = JSON.parse(JSON.stringify(c));
                            remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                            remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
                        }
                        return nativeGetUserMedia(c);
                    };
                    if (window && window.prototype.getSettings) {
                        nativeGetSettings = window.prototype.getSettings;
                        window.prototype.getSettings = function() {
                            var obj = nativeGetSettings.apply(this, arguments);
                            remap(obj, 'mozAutoGainControl', 'autoGainControl');
                            remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                            return obj;
                        };
                    }
                    if (window && window.prototype.applyConstraints) {
                        nativeApplyConstraints = window.prototype.applyConstraints;
                        window.prototype.applyConstraints = function(c) {
                            if ('audio' === this.kind && 'object' === (void 0 === c ? 'undefined' : _typeof(c))) {
                                c = JSON.parse(JSON.stringify(c));
                                remap(c, 'autoGainControl', 'mozAutoGainControl');
                                remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                            }
                            return nativeApplyConstraints.apply(this, [ c ]);
                        };
                    }
                }
            };
            exports = require('../utils');
            utils = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(exports);
        }, {
            '../utils': 11
        } ],
        '10': [ function(require, module, exports) {
            'use strict';
            var _typeof, utils;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            exports.shimLocalStreamsAPI = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                'getLocalStreams' in window.RTCPeerConnection.prototype || (window.RTCPeerConnection.prototype.getLocalStreams = function() {
                    this._localStreams || (this._localStreams = []);
                    return this._localStreams;
                });
                if (!('addStream' in window.RTCPeerConnection.prototype)) {
                    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
                    window.RTCPeerConnection.prototype.addStream = function(stream) {
                        var _this = this;
                        this._localStreams || (this._localStreams = []);
                        this._localStreams.includes(stream) || this._localStreams.push(stream);
                        stream.getAudioTracks().forEach(function(track) {
                            return _addTrack.call(_this, track, stream);
                        });
                        stream.getVideoTracks().forEach(function(track) {
                            return _addTrack.call(_this, track, stream);
                        });
                    };
                    window.RTCPeerConnection.prototype.addTrack = function(track) {
                        var _this2, _len, streams, _key;
                        _this2 = this;
                        for (_len = arguments.length, streams = Array(1 < _len ? _len - 1 : 0), 
                        _key = 1; _key < _len; _key++) streams[_key - 1] = arguments[_key];
                        streams && streams.forEach(function(stream) {
                            _this2._localStreams ? _this2._localStreams.includes(stream) || _this2._localStreams.push(stream) : _this2._localStreams = [ stream ];
                        });
                        return _addTrack.apply(this, arguments);
                    };
                }
                'removeStream' in window.RTCPeerConnection.prototype || (window.RTCPeerConnection.prototype.removeStream = function(stream) {
                    var _this3, index, tracks;
                    (_this3 = this)._localStreams || (this._localStreams = []);
                    if (-1 === (index = this._localStreams.indexOf(stream))) return;
                    this._localStreams.splice(index, 1);
                    tracks = stream.getTracks();
                    this.getSenders().forEach(function(sender) {
                        tracks.includes(sender.track) && _this3.removeTrack(sender);
                    });
                });
            };
            exports.shimRemoteStreamsAPI = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                'getRemoteStreams' in window.RTCPeerConnection.prototype || (window.RTCPeerConnection.prototype.getRemoteStreams = function() {
                    return this._remoteStreams || [];
                });
                if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
                    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
                        'get': function() {
                            return this._onaddstream;
                        },
                        'set': function(f) {
                            var _this4 = this;
                            if (this._onaddstream) {
                                this.removeEventListener('addstream', this._onaddstream);
                                this.removeEventListener('track', this._onaddstreampoly);
                            }
                            this.addEventListener('addstream', this._onaddstream = f);
                            this.addEventListener('track', this._onaddstreampoly = function(e) {
                                e.streams.forEach(function(stream) {
                                    _this4._remoteStreams || (_this4._remoteStreams = []);
                                    if (_this4._remoteStreams.includes(stream)) return;
                                    _this4._remoteStreams.push(stream);
                                    var event = new Event('addstream');
                                    event.stream = stream;
                                    _this4.dispatchEvent(event);
                                });
                            });
                        }
                    });
                    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var pc = this;
                        this._onaddstreampoly || this.addEventListener('track', this._onaddstreampoly = function(e) {
                            e.streams.forEach(function(stream) {
                                pc._remoteStreams || (pc._remoteStreams = []);
                                if (0 <= pc._remoteStreams.indexOf(stream)) return;
                                pc._remoteStreams.push(stream);
                                var event = new Event('addstream');
                                event.stream = stream;
                                pc.dispatchEvent(event);
                            });
                        });
                        return origSetRemoteDescription.apply(pc, arguments);
                    };
                }
            };
            exports.shimCallbacksAPI = function(window) {
                var origCreateOffer, origCreateAnswer, setLocalDescription, setRemoteDescription, addIceCandidate, withCallback;
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || !window.RTCPeerConnection) return;
                window = window.RTCPeerConnection.prototype;
                origCreateOffer = window.createOffer;
                origCreateAnswer = window.createAnswer;
                setLocalDescription = window.setLocalDescription;
                setRemoteDescription = window.setRemoteDescription;
                addIceCandidate = window.addIceCandidate;
                window.createOffer = function(successCallback, failureCallback) {
                    var promise;
                    promise = origCreateOffer.apply(this, [ 2 <= arguments.length ? arguments[2] : successCallback ]);
                    if (!failureCallback) return promise;
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                window.createAnswer = function(successCallback, failureCallback) {
                    var promise;
                    promise = origCreateAnswer.apply(this, [ 2 <= arguments.length ? arguments[2] : successCallback ]);
                    if (!failureCallback) return promise;
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                withCallback = function(description, successCallback, failureCallback) {
                    description = setLocalDescription.apply(this, [ description ]);
                    if (!failureCallback) return description;
                    description.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                window.setLocalDescription = withCallback;
                withCallback = function(description, successCallback, failureCallback) {
                    description = setRemoteDescription.apply(this, [ description ]);
                    if (!failureCallback) return description;
                    description.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                window.setRemoteDescription = withCallback;
                withCallback = function(candidate, successCallback, failureCallback) {
                    candidate = addIceCandidate.apply(this, [ candidate ]);
                    if (!failureCallback) return candidate;
                    candidate.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                window.addIceCandidate = withCallback;
            };
            exports.shimGetUserMedia = function(window) {
                var navigator, _getUserMedia;
                navigator = window && window.navigator;
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    window = navigator.mediaDevices;
                    _getUserMedia = window.getUserMedia.bind(window);
                    navigator.mediaDevices.getUserMedia = function(constraints) {
                        return _getUserMedia(shimConstraints(constraints));
                    };
                }
                !navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (navigator.getUserMedia = function(constraints, cb, errcb) {
                    navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
                }.bind(navigator));
            };
            exports.shimConstraints = shimConstraints;
            exports.shimRTCIceServerUrls = function(window) {
                if (!window.RTCPeerConnection) return;
                var OrigPeerConnection = window.RTCPeerConnection;
                window.RTCPeerConnection = function(pcConfig, pcConstraints) {
                    var newIceServers, i, server;
                    if (pcConfig && pcConfig.iceServers) {
                        newIceServers = [];
                        for (i = 0; i < pcConfig.iceServers.length; i++) if (!(server = pcConfig.iceServers[i]).hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                            (server = JSON.parse(JSON.stringify(server))).urls = server.url;
                            delete server.url;
                            newIceServers.push(server);
                        } else newIceServers.push(pcConfig.iceServers[i]);
                        pcConfig.iceServers = newIceServers;
                    }
                    return new OrigPeerConnection(pcConfig, pcConstraints);
                };
                window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
                'generateCertificate' in OrigPeerConnection && Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                    'get': function() {
                        return OrigPeerConnection.generateCertificate;
                    }
                });
            };
            exports.shimTrackEventTransceiver = function(window) {
                'object' === (void 0 === window ? 'undefined' : _typeof(window)) && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype) && Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                    'get': function() {
                        return {
                            'receiver': this.receiver
                        };
                    }
                });
            };
            exports.shimCreateOfferLegacy = function(window) {
                var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
                window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
                    var audioTransceiver;
                    if (offerOptions) {
                        void 0 !== offerOptions.offerToReceiveAudio && (offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio);
                        audioTransceiver = this.getTransceivers().find(function(transceiver) {
                            return 'audio' === transceiver.receiver.track.kind;
                        });
                        !1 === offerOptions.offerToReceiveAudio && audioTransceiver ? 'sendrecv' === audioTransceiver.direction ? audioTransceiver.setDirection ? audioTransceiver.setDirection('sendonly') : audioTransceiver.direction = 'sendonly' : 'recvonly' === audioTransceiver.direction && (audioTransceiver.setDirection ? audioTransceiver.setDirection('inactive') : audioTransceiver.direction = 'inactive') : !0 !== offerOptions.offerToReceiveAudio || audioTransceiver || this.addTransceiver('audio');
                        void 0 !== offerOptions.offerToReceiveVideo && (offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo);
                        audioTransceiver = this.getTransceivers().find(function(transceiver) {
                            return 'video' === transceiver.receiver.track.kind;
                        });
                        !1 === offerOptions.offerToReceiveVideo && audioTransceiver ? 'sendrecv' === audioTransceiver.direction ? audioTransceiver.setDirection ? audioTransceiver.setDirection('sendonly') : audioTransceiver.direction = 'sendonly' : 'recvonly' === audioTransceiver.direction && (audioTransceiver.setDirection ? audioTransceiver.setDirection('inactive') : audioTransceiver.direction = 'inactive') : !0 !== offerOptions.offerToReceiveVideo || audioTransceiver || this.addTransceiver('video');
                    }
                    return origCreateOffer.apply(this, arguments);
                };
            };
            exports.shimAudioContext = function(window) {
                if ('object' !== (void 0 === window ? 'undefined' : _typeof(window)) || window.AudioContext) return;
                window.AudioContext = window.webkitAudioContext;
            };
            exports = require('../utils');
            utils = function(obj) {
                var newObj, key;
                {
                    if (obj && obj.__esModule) return obj;
                    newObj = {};
                    if (null != obj) for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                    newObj.default = obj;
                    return newObj;
                }
            }(exports);
            function shimConstraints(constraints) {
                if (constraints && void 0 !== constraints.video) return Object.assign({}, constraints, {
                    'video': utils.compactObject(constraints.video)
                });
                return constraints;
            }
        }, {
            '../utils': 11
        } ],
        '11': [ function(require, module, exports) {
            'use strict';
            var _typeof, logDisabled_, deprecationWarnings_;
            Object.defineProperty(exports, '__esModule', {
                'value': !0
            });
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            exports.extractVersion = extractVersion;
            exports.wrapPeerConnectionEvent = function(window, eventNameToWrap, wrapper) {
                var nativeAddEventListener, nativeRemoveEventListener;
                if (!window.RTCPeerConnection) return;
                window = window.RTCPeerConnection.prototype;
                nativeAddEventListener = window.addEventListener;
                window.addEventListener = function(nativeEventName, cb) {
                    if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
                    function wrappedCallback(e) {
                        (e = wrapper(e)) && (cb.handleEvent ? cb.handleEvent(e) : cb(e));
                    }
                    this._eventMap = this._eventMap || {};
                    this._eventMap[eventNameToWrap] || (this._eventMap[eventNameToWrap] = new Map());
                    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
                    return nativeAddEventListener.apply(this, [ nativeEventName, wrappedCallback ]);
                };
                nativeRemoveEventListener = window.removeEventListener;
                window.removeEventListener = function(nativeEventName, cb) {
                    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) return nativeRemoveEventListener.apply(this, arguments);
                    if (!this._eventMap[eventNameToWrap].has(cb)) return nativeRemoveEventListener.apply(this, arguments);
                    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
                    this._eventMap[eventNameToWrap].delete(cb);
                    0 === this._eventMap[eventNameToWrap].size && delete this._eventMap[eventNameToWrap];
                    0 === Object.keys(this._eventMap).length && delete this._eventMap;
                    return nativeRemoveEventListener.apply(this, [ nativeEventName, unwrappedCb ]);
                };
                Object.defineProperty(window, 'on' + eventNameToWrap, {
                    'get': function() {
                        return this['_on' + eventNameToWrap];
                    },
                    'set': function(cb) {
                        if (this['_on' + eventNameToWrap]) {
                            this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                            delete this['_on' + eventNameToWrap];
                        }
                        cb && this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
                    },
                    'enumerable': !0,
                    'configurable': !0
                });
            };
            exports.disableLog = function(bool) {
                if ('boolean' != typeof bool) return new Error('Argument type: ' + (void 0 === bool ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
                return (logDisabled_ = bool) ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
            };
            exports.disableWarnings = function(bool) {
                if ('boolean' != typeof bool) return new Error('Argument type: ' + (void 0 === bool ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
                deprecationWarnings_ = !bool;
                return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
            };
            exports.log = function() {
                if ('object' === ('undefined' == typeof window ? 'undefined' : _typeof(window)) && logDisabled_) return;
            };
            exports.deprecated = function(oldMethod, newMethod) {
                if (!deprecationWarnings_) return;
            };
            exports.detectBrowser = function(window) {
                var result, navigator;
                result = {
                    'browser': null,
                    'version': null
                };
                if (void 0 === window || !window.navigator) return result.browser = 'Not a browser.', 
                result;
                navigator = window.navigator;
                if (navigator.mozGetUserMedia) {
                    result.browser = 'firefox';
                    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
                } else if (navigator.webkitGetUserMedia || !1 === window.isSecureContext && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
                    result.browser = 'chrome';
                    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                } else {
                    if (!window.RTCPeerConnection || !navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) return result.browser = 'Not a supported browser.', 
                    result;
                    result.browser = 'safari';
                    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
                    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
                }
                return result;
            };
            exports.compactObject = function compactObject(data) {
                if (!isObject(data)) return data;
                return Object.keys(data).reduce(function(accumulator, key) {
                    var value, isObj;
                    isObj = isObject(data[key]);
                    value = isObj ? compactObject(data[key]) : data[key];
                    isObj = isObj && !Object.keys(value).length;
                    if (void 0 === value || isObj) return accumulator;
                    return Object.assign(accumulator, _defineProperty({}, key, value));
                }, {});
            };
            exports.walkStats = walkStats;
            exports.filterStats = function(result, track, outbound) {
                var streamStatsType, filteredResult, trackStats;
                streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
                filteredResult = new Map();
                if (null === track) return filteredResult;
                trackStats = [];
                result.forEach(function(value) {
                    'track' === value.type && value.trackIdentifier === track.id && trackStats.push(value);
                });
                trackStats.forEach(function(trackStat) {
                    result.forEach(function(stats) {
                        stats.type === streamStatsType && stats.trackId === trackStat.id && walkStats(result, stats, filteredResult);
                    });
                });
                return filteredResult;
            };
            function _defineProperty(obj, key, value) {
                key in obj ? Object.defineProperty(obj, key, {
                    'value': value,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }) : obj[key] = value;
                return obj;
            }
            deprecationWarnings_ = logDisabled_ = !0;
            function extractVersion(uastring, expr, pos) {
                uastring = uastring.match(expr);
                return uastring && uastring.length >= pos && parseInt(uastring[pos], 10);
            }
            function isObject(val) {
                return '[object Object]' === Object.prototype.toString.call(val);
            }
            function walkStats(stats, base, resultSet) {
                if (!base || resultSet.has(base.id)) return;
                resultSet.set(base.id, base);
                Object.keys(base).forEach(function(name) {
                    name.endsWith('Id') ? walkStats(stats, stats.get(base[name]), resultSet) : name.endsWith('Ids') && base[name].forEach(function(id) {
                        walkStats(stats, stats.get(id), resultSet);
                    });
                });
            }
        }, {} ],
        '12': [ function(require, module, exports) {
            'use strict';
            var _typeof, SDPUtils;
            _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            (SDPUtils = {}).generateIdentifier = function() {
                return Math.random().toString(36).substr(2, 10);
            };
            SDPUtils.localCName = SDPUtils.generateIdentifier();
            SDPUtils.splitLines = function(blob) {
                return blob.trim().split('\n').map(function(line) {
                    return line.trim();
                });
            };
            SDPUtils.splitSections = function(blob) {
                return blob.split('\nm=').map(function(part, index) {
                    return (0 < index ? 'm=' + part : part).trim() + '\r\n';
                });
            };
            SDPUtils.getDescription = function(blob) {
                blob = SDPUtils.splitSections(blob);
                return blob && blob[0];
            };
            SDPUtils.getMediaSections = function(blob) {
                blob = SDPUtils.splitSections(blob);
                blob.shift();
                return blob;
            };
            SDPUtils.matchPrefix = function(blob, prefix) {
                return SDPUtils.splitLines(blob).filter(function(line) {
                    return 0 === line.indexOf(prefix);
                });
            };
            SDPUtils.parseCandidate = function(line) {
                var parts, candidate, i;
                parts = void 0;
                candidate = {
                    'foundation': (parts = (0 === line.indexOf('a=candidate:') ? line.substring(12) : line.substring(10)).split(' '))[0],
                    'component': {
                        '1': 'rtp',
                        '2': 'rtcp'
                    }[parts[1]],
                    'protocol': parts[2].toLowerCase(),
                    'priority': parseInt(parts[3], 10),
                    'ip': parts[4],
                    'address': parts[4],
                    'port': parseInt(parts[5], 10),
                    'type': parts[7]
                };
                for (i = 8; i < parts.length; i += 2) switch (parts[i]) {
                  case 'raddr':
                    candidate.relatedAddress = parts[i + 1];
                    break;

                  case 'rport':
                    candidate.relatedPort = parseInt(parts[i + 1], 10);
                    break;

                  case 'tcptype':
                    candidate.tcpType = parts[i + 1];
                    break;

                  case 'ufrag':
                    candidate.ufrag = parts[i + 1];
                    candidate.usernameFragment = parts[i + 1];
                    break;

                  default:
                    void 0 === candidate[parts[i]] && (candidate[parts[i]] = parts[i + 1]);
                }
                return candidate;
            };
            SDPUtils.writeCandidate = function(candidate) {
                var sdp, component;
                (sdp = []).push(candidate.foundation);
                component = candidate.component;
                sdp.push('rtp' === component ? 1 : 'rtcp' === component ? 2 : component);
                sdp.push(candidate.protocol.toUpperCase());
                sdp.push(candidate.priority);
                sdp.push(candidate.address || candidate.ip);
                sdp.push(candidate.port);
                component = candidate.type;
                sdp.push('typ');
                sdp.push(component);
                if ('host' !== component && candidate.relatedAddress && candidate.relatedPort) {
                    sdp.push('raddr');
                    sdp.push(candidate.relatedAddress);
                    sdp.push('rport');
                    sdp.push(candidate.relatedPort);
                }
                if (candidate.tcpType && 'tcp' === candidate.protocol.toLowerCase()) {
                    sdp.push('tcptype');
                    sdp.push(candidate.tcpType);
                }
                if (candidate.usernameFragment || candidate.ufrag) {
                    sdp.push('ufrag');
                    sdp.push(candidate.usernameFragment || candidate.ufrag);
                }
                return 'candidate:' + sdp.join(' ');
            };
            SDPUtils.parseIceOptions = function(line) {
                return line.substr(14).split(' ');
            };
            SDPUtils.parseRtpMap = function(line) {
                var parsed;
                line = line.substr(9).split(' ');
                parsed = {
                    'payloadType': parseInt(line.shift(), 10)
                };
                line = line[0].split('/');
                parsed.name = line[0];
                parsed.clockRate = parseInt(line[1], 10);
                parsed.channels = 3 === line.length ? parseInt(line[2], 10) : 1;
                parsed.numChannels = parsed.channels;
                return parsed;
            };
            SDPUtils.writeRtpMap = function(codec) {
                var pt, channels;
                pt = codec.payloadType;
                void 0 !== codec.preferredPayloadType && (pt = codec.preferredPayloadType);
                channels = codec.channels || codec.numChannels || 1;
                return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (1 !== channels ? '/' + channels : '') + '\r\n';
            };
            SDPUtils.parseExtmap = function(line) {
                line = line.substr(9).split(' ');
                return {
                    'id': parseInt(line[0], 10),
                    'direction': 0 < line[0].indexOf('/') ? line[0].split('/')[1] : 'sendrecv',
                    'uri': line[1]
                };
            };
            SDPUtils.writeExtmap = function(headerExtension) {
                return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && 'sendrecv' !== headerExtension.direction ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
            };
            SDPUtils.parseFmtp = function(line) {
                var parsed, kv, parts, j;
                parsed = {};
                kv = void 0;
                parts = line.substr(line.indexOf(' ') + 1).split(';');
                for (j = 0; j < parts.length; j++) parsed[(kv = parts[j].trim().split('='))[0].trim()] = kv[1];
                return parsed;
            };
            SDPUtils.writeFmtp = function(codec) {
                var line, pt, params;
                line = '';
                pt = codec.payloadType;
                void 0 !== codec.preferredPayloadType && (pt = codec.preferredPayloadType);
                if (codec.parameters && Object.keys(codec.parameters).length) {
                    params = [];
                    Object.keys(codec.parameters).forEach(function(param) {
                        codec.parameters[param] ? params.push(param + '=' + codec.parameters[param]) : params.push(param);
                    });
                    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
                }
                return line;
            };
            SDPUtils.parseRtcpFb = function(line) {
                line = line.substr(line.indexOf(' ') + 1).split(' ');
                return {
                    'type': line.shift(),
                    'parameter': line.join(' ')
                };
            };
            SDPUtils.writeRtcpFb = function(codec) {
                var lines, pt;
                lines = '';
                pt = codec.payloadType;
                void 0 !== codec.preferredPayloadType && (pt = codec.preferredPayloadType);
                codec.rtcpFeedback && codec.rtcpFeedback.length && codec.rtcpFeedback.forEach(function(fb) {
                    lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
                });
                return lines;
            };
            SDPUtils.parseSsrcMedia = function(line) {
                var sp, parts, colon;
                sp = line.indexOf(' ');
                parts = {
                    'ssrc': parseInt(line.substr(7, sp - 7), 10)
                };
                if (-1 < (colon = line.indexOf(':', sp))) {
                    parts.attribute = line.substr(sp + 1, colon - sp - 1);
                    parts.value = line.substr(colon + 1);
                } else parts.attribute = line.substr(sp + 1);
                return parts;
            };
            SDPUtils.parseSsrcGroup = function(line) {
                line = line.substr(13).split(' ');
                return {
                    'semantics': line.shift(),
                    'ssrcs': line.map(function(ssrc) {
                        return parseInt(ssrc, 10);
                    })
                };
            };
            SDPUtils.getMid = function(mediaSection) {
                mediaSection = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
                if (mediaSection) return mediaSection.substr(6);
            };
            SDPUtils.parseFingerprint = function(line) {
                line = line.substr(14).split(' ');
                return {
                    'algorithm': line[0].toLowerCase(),
                    'value': line[1]
                };
            };
            SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
                return {
                    'role': 'auto',
                    'fingerprints': SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:').map(SDPUtils.parseFingerprint)
                };
            };
            SDPUtils.writeDtlsParameters = function(params, setupType) {
                var sdp = 'a=setup:' + setupType + '\r\n';
                params.fingerprints.forEach(function(fp) {
                    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
                });
                return sdp;
            };
            SDPUtils.parseCryptoLine = function(line) {
                line = line.substr(9).split(' ');
                return {
                    'tag': parseInt(line[0], 10),
                    'cryptoSuite': line[1],
                    'keyParams': line[2],
                    'sessionParams': line.slice(3)
                };
            };
            SDPUtils.writeCryptoLine = function(parameters) {
                return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + ('object' === _typeof(parameters.keyParams) ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
            };
            SDPUtils.parseCryptoKeyParams = function(keyParams) {
                if (0 !== keyParams.indexOf('inline:')) return null;
                keyParams = keyParams.substr(7).split('|');
                return {
                    'keyMethod': 'inline',
                    'keySalt': keyParams[0],
                    'lifeTime': keyParams[1],
                    'mkiValue': keyParams[2] ? keyParams[2].split(':')[0] : void 0,
                    'mkiLength': keyParams[2] ? keyParams[2].split(':')[1] : void 0
                };
            };
            SDPUtils.writeCryptoKeyParams = function(keyParams) {
                return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
            };
            SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
                return SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:').map(SDPUtils.parseCryptoLine);
            };
            SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
                var ufrag;
                ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
                mediaSection = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];
                if (!ufrag || !mediaSection) return null;
                return {
                    'usernameFragment': ufrag.substr(12),
                    'password': mediaSection.substr(10)
                };
            };
            SDPUtils.writeIceParameters = function(params) {
                var sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\na=ice-pwd:' + params.password + '\r\n';
                params.iceLite && (sdp += 'a=ice-lite\r\n');
                return sdp;
            };
            SDPUtils.parseRtpParameters = function(mediaSection) {
                var description, mline, i, pt, codec, rtpmapline;
                description = {
                    'codecs': [],
                    'headerExtensions': [],
                    'fecMechanisms': [],
                    'rtcp': []
                };
                mline = SDPUtils.splitLines(mediaSection)[0].split(' ');
                for (i = 3; i < mline.length; i++) {
                    pt = mline[i];
                    if (rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0]) {
                        codec = SDPUtils.parseRtpMap(rtpmapline);
                        rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
                        codec.parameters = rtpmapline.length ? SDPUtils.parseFmtp(rtpmapline[0]) : {};
                        codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
                        description.codecs.push(codec);
                        switch (codec.name.toUpperCase()) {
                          case 'RED':
                          case 'ULPFEC':
                            description.fecMechanisms.push(codec.name.toUpperCase());
                        }
                    }
                }
                SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
                    description.headerExtensions.push(SDPUtils.parseExtmap(line));
                });
                return description;
            };
            SDPUtils.writeRtpDescription = function(kind, caps) {
                var sdp, maxptime;
                sdp = '';
                sdp = (sdp = (sdp = (sdp += 'm=' + kind + ' ') + (0 < caps.codecs.length ? '9' : '0') + ' UDP/TLS/RTP/SAVPF ') + (caps.codecs.map(function(codec) {
                    if (void 0 !== codec.preferredPayloadType) return codec.preferredPayloadType;
                    return codec.payloadType;
                }).join(' ') + '\r\n')) + 'c=IN IP4 0.0.0.0\r\n' + 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
                caps.codecs.forEach(function(codec) {
                    sdp = (sdp = (sdp += SDPUtils.writeRtpMap(codec)) + SDPUtils.writeFmtp(codec)) + SDPUtils.writeRtcpFb(codec);
                });
                maxptime = 0;
                caps.codecs.forEach(function(codec) {
                    codec.maxptime > maxptime && (maxptime = codec.maxptime);
                });
                0 < maxptime && (sdp += 'a=maxptime:' + maxptime + '\r\n');
                caps.headerExtensions && caps.headerExtensions.forEach(function(extension) {
                    sdp += SDPUtils.writeExtmap(extension);
                });
                return sdp;
            };
            SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
                var encodingParameters, description, hasRed, hasUlpfec, primarySsrc, secondarySsrc, ssrcs, bandwidth;
                encodingParameters = [];
                description = SDPUtils.parseRtpParameters(mediaSection);
                hasRed = -1 !== description.fecMechanisms.indexOf('RED');
                hasUlpfec = -1 !== description.fecMechanisms.indexOf('ULPFEC');
                ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function(line) {
                    return SDPUtils.parseSsrcMedia(line);
                }).filter(function(parts) {
                    return 'cname' === parts.attribute;
                });
                primarySsrc = 0 < ssrcs.length && ssrcs[0].ssrc;
                secondarySsrc = void 0;
                0 < (ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function(line) {
                    return line.substr(17).split(' ').map(function(part) {
                        return parseInt(part, 10);
                    });
                })).length && 1 < ssrcs[0].length && ssrcs[0][0] === primarySsrc && (secondarySsrc = ssrcs[0][1]);
                description.codecs.forEach(function(codec) {
                    if ('RTX' === codec.name.toUpperCase() && codec.parameters.apt) {
                        codec = {
                            'ssrc': primarySsrc,
                            'codecPayloadType': parseInt(codec.parameters.apt, 10)
                        };
                        primarySsrc && secondarySsrc && (codec.rtx = {
                            'ssrc': secondarySsrc
                        });
                        encodingParameters.push(codec);
                        if (hasRed) {
                            (codec = JSON.parse(JSON.stringify(codec))).fec = {
                                'ssrc': primarySsrc,
                                'mechanism': hasUlpfec ? 'red+ulpfec' : 'red'
                            };
                            encodingParameters.push(codec);
                        }
                    }
                });
                0 === encodingParameters.length && primarySsrc && encodingParameters.push({
                    'ssrc': primarySsrc
                });
                if ((bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=')).length) {
                    bandwidth = 0 === bandwidth[0].indexOf('b=TIAS:') ? parseInt(bandwidth[0].substr(7), 10) : 0 === bandwidth[0].indexOf('b=AS:') ? 1e3 * parseInt(bandwidth[0].substr(5), 10) * .95 - 16e3 : void 0;
                    encodingParameters.forEach(function(params) {
                        params.maxBitrate = bandwidth;
                    });
                }
                return encodingParameters;
            };
            SDPUtils.parseRtcpParameters = function(mediaSection) {
                var rtcpParameters, remoteSsrc;
                rtcpParameters = {};
                if (remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function(line) {
                    return SDPUtils.parseSsrcMedia(line);
                }).filter(function(obj) {
                    return 'cname' === obj.attribute;
                })[0]) {
                    rtcpParameters.cname = remoteSsrc.value;
                    rtcpParameters.ssrc = remoteSsrc.ssrc;
                }
                remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
                rtcpParameters.reducedSize = 0 < remoteSsrc.length;
                rtcpParameters.compound = 0 === remoteSsrc.length;
                remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
                rtcpParameters.mux = 0 < remoteSsrc.length;
                return rtcpParameters;
            };
            SDPUtils.writeRtcpParameters = function(rtcpParameters) {
                var sdp = '';
                rtcpParameters.reducedSize && (sdp += 'a=rtcp-rsize\r\n');
                rtcpParameters.mux && (sdp += 'a=rtcp-mux\r\n');
                void 0 !== rtcpParameters.ssrc && rtcpParameters.cname && (sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n');
                return sdp;
            };
            SDPUtils.parseMsid = function(mediaSection) {
                var parts, spec;
                parts = void 0;
                if (1 === (spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:')).length) return {
                    'stream': (parts = spec[0].substr(7).split(' '))[0],
                    'track': parts[1]
                };
                if (0 < (spec = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function(line) {
                    return SDPUtils.parseSsrcMedia(line);
                }).filter(function(msidParts) {
                    return 'msid' === msidParts.attribute;
                })).length) return {
                    'stream': (parts = spec[0].value.split(' '))[0],
                    'track': parts[1]
                };
            };
            SDPUtils.parseSctpDescription = function(mediaSection) {
                var maxMessageSize, maxSizeLine, mline;
                mline = SDPUtils.parseMLine(mediaSection);
                maxMessageSize = void 0;
                0 < (maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:')).length && (maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10));
                isNaN(maxMessageSize) && (maxMessageSize = 65536);
                if (0 < (maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:')).length) return {
                    'port': parseInt(maxSizeLine[0].substr(12), 10),
                    'protocol': mline.fmt,
                    'maxMessageSize': maxMessageSize
                };
                if (0 < (maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')).length) return mline = maxSizeLine[0].substr(10).split(' '), 
                {
                    'port': parseInt(mline[0], 10),
                    'protocol': mline[1],
                    'maxMessageSize': maxMessageSize
                };
            };
            SDPUtils.writeSctpDescription = function(media, sctp) {
                var output = [];
                output = 'DTLS/SCTP' !== media.protocol ? [ 'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + sctp.port + '\r\n' ] : [ 'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n' ];
                void 0 !== sctp.maxMessageSize && output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
                return output.join('');
            };
            SDPUtils.generateSessionId = function() {
                return Math.random().toString().substr(2, 21);
            };
            SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
                sessVer = void 0 !== sessVer ? sessVer : 2;
                return 'v=0\r\no=' + (sessUser || 'thisisadapterortc') + ' ' + (sessId || SDPUtils.generateSessionId()) + ' ' + sessVer + ' IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n';
            };
            SDPUtils.getDirection = function(mediaSection, sessionpart) {
                var lines, i;
                lines = SDPUtils.splitLines(mediaSection);
                for (i = 0; i < lines.length; i++) switch (lines[i]) {
                  case 'a=sendrecv':
                  case 'a=sendonly':
                  case 'a=recvonly':
                  case 'a=inactive':
                    return lines[i].substr(2);
                }
                if (sessionpart) return SDPUtils.getDirection(sessionpart);
                return 'sendrecv';
            };
            SDPUtils.getKind = function(mediaSection) {
                return SDPUtils.splitLines(mediaSection)[0].split(' ')[0].substr(2);
            };
            SDPUtils.isRejected = function(mediaSection) {
                return '0' === mediaSection.split(' ', 2)[1];
            };
            SDPUtils.parseMLine = function(mediaSection) {
                return {
                    'kind': (mediaSection = SDPUtils.splitLines(mediaSection)[0].substr(2).split(' '))[0],
                    'port': parseInt(mediaSection[1], 10),
                    'protocol': mediaSection[2],
                    'fmt': mediaSection.slice(3).join(' ')
                };
            };
            SDPUtils.parseOLine = function(mediaSection) {
                return {
                    'username': (mediaSection = SDPUtils.matchPrefix(mediaSection, 'o=')[0].substr(2).split(' '))[0],
                    'sessionId': mediaSection[1],
                    'sessionVersion': parseInt(mediaSection[2], 10),
                    'netType': mediaSection[3],
                    'addressType': mediaSection[4],
                    'address': mediaSection[5]
                };
            };
            SDPUtils.isValidSDP = function(blob) {
                var lines, i;
                if ('string' != typeof blob || 0 === blob.length) return !1;
                lines = SDPUtils.splitLines(blob);
                for (i = 0; i < lines.length; i++) if (lines[i].length < 2 || '=' !== lines[i].charAt(1)) return !1;
                return !0;
            };
            'object' === (void 0 === module ? 'undefined' : _typeof(module)) && (module.exports = SDPUtils);
        }, {} ]
    }, {}, [ 1 ])(1);
});