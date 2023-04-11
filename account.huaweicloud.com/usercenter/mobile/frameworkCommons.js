(function(root) {
    define('angular/angular-animate', [], function() {
        return function() {
            (function(window, angular) {
                'use strict';
                function assertArg(arg, name, reason) {
                    if (!arg) throw ngMinErr('areq', 'Argument \'{0}\' is {1}', name || '?', reason || 'required');
                }
                function mergeClasses(a, b) {
                    if (!a && !b) return '';
                    if (!a) return b;
                    if (!b) return a;
                    return (a = isArray(a) ? a.join(' ') : a) + ' ' + (b = isArray(b) ? b.join(' ') : b);
                }
                function pendClasses(classes, fix, isPrefix) {
                    var className = '';
                    classes = isArray(classes) ? classes : classes && isString(classes) && classes.length ? classes.split(/\s+/) : [];
                    forEach(classes, function(klass, i) {
                        klass && 0 < klass.length && (className = className + (0 < i ? ' ' : '') + (isPrefix ? fix + klass : klass + fix));
                    });
                    return className;
                }
                function extractElementNode(element) {
                    var i, elm;
                    if (!element[0]) return element;
                    for (i = 0; i < element.length; i++) if ((elm = element[i]).nodeType == ELEMENT_NODE) return elm;
                }
                function applyAnimationClassesFactory($$jqLite) {
                    return function(element, options) {
                        if (options.addClass) {
                            (function($$jqLite, element, className) {
                                forEach(element, function(elm) {
                                    $$jqLite.addClass(elm, className);
                                });
                            })($$jqLite, element, options.addClass);
                            options.addClass = null;
                        }
                        if (options.removeClass) {
                            (function($$jqLite, element, className) {
                                forEach(element, function(elm) {
                                    $$jqLite.removeClass(elm, className);
                                });
                            })($$jqLite, element, options.removeClass);
                            options.removeClass = null;
                        }
                    };
                }
                function prepareAnimationOptions(options) {
                    if (!(options = options || {}).$$prepared) {
                        var domOperation = options.domOperation || noop;
                        options.domOperation = function() {
                            options.$$domOperationFired = !0;
                            domOperation();
                            domOperation = noop;
                        };
                        options.$$prepared = !0;
                    }
                    return options;
                }
                function applyAnimationStyles(element, options) {
                    applyAnimationFromStyles(element, options);
                    applyAnimationToStyles(element, options);
                }
                function applyAnimationFromStyles(element, options) {
                    if (options.from) {
                        element.css(options.from);
                        options.from = null;
                    }
                }
                function applyAnimationToStyles(element, options) {
                    if (options.to) {
                        element.css(options.to);
                        options.to = null;
                    }
                }
                function mergeAnimationOptions(element, target, newOptions) {
                    var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || ''), toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || ''), element = function(existing, toAdd, toRemove) {
                        function splitClassesToLookup(classes) {
                            isString(classes) && (classes = classes.split(' '));
                            var obj = {};
                            forEach(classes, function(klass) {
                                klass.length && (obj[klass] = !0);
                            });
                            return obj;
                        }
                        var classes, flags = {};
                        existing = splitClassesToLookup(existing);
                        toAdd = splitClassesToLookup(toAdd);
                        forEach(toAdd, function(value, key) {
                            flags[key] = 1;
                        });
                        toRemove = splitClassesToLookup(toRemove);
                        forEach(toRemove, function(value, key) {
                            flags[key] = 1 === flags[key] ? null : -1;
                        });
                        classes = {
                            'addClass': '',
                            'removeClass': ''
                        };
                        forEach(flags, function(val, klass) {
                            var prop, allow;
                            if (1 === val) {
                                prop = 'addClass';
                                allow = !existing[klass];
                            } else if (-1 === val) {
                                prop = 'removeClass';
                                allow = existing[klass];
                            }
                            if (allow) {
                                classes[prop].length && (classes[prop] += ' ');
                                classes[prop] += klass;
                            }
                        });
                        return classes;
                    }(element.attr('class'), toAdd, toRemove);
                    if (newOptions.preparationClasses) {
                        target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
                        delete newOptions.preparationClasses;
                    }
                    toAdd = target.domOperation !== noop ? target.domOperation : null;
                    extend(target, newOptions);
                    toAdd && (target.domOperation = toAdd);
                    element.addClass ? target.addClass = element.addClass : target.addClass = null;
                    element.removeClass ? target.removeClass = element.removeClass : target.removeClass = null;
                    return target;
                }
                function getDomNode(element) {
                    return element instanceof angular.element ? element[0] : element;
                }
                function blockTransitions(node, duration) {
                    duration = duration ? '-' + duration + 's' : '';
                    applyInlineStyle(node, [ TRANSITION_DELAY_PROP, duration ]);
                }
                function blockKeyframeAnimations(node, applyBlock) {
                    var applyBlock = applyBlock ? 'paused' : '', key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
                    applyInlineStyle(node, [ key, applyBlock ]);
                    return [ key, applyBlock ];
                }
                function applyInlineStyle(node, styleTuple) {
                    var prop = styleTuple[0], styleTuple = styleTuple[1];
                    node.style[prop] = styleTuple;
                }
                function concatWithSpace(a, b) {
                    if (!a) return b;
                    if (!b) return a;
                    return a + ' ' + b;
                }
                function getCssDelayStyle(delay, isKeyframeAnimation) {
                    return [ isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP, delay + 's' ];
                }
                function computeCssStyles($window, element, properties) {
                    var styles = Object.create(null), detectedStyles = $window.getComputedStyle(element) || {};
                    forEach(properties, function(formalStyleName, actualStyleName) {
                        var c, formalStyleName = detectedStyles[formalStyleName];
                        if (formalStyleName) {
                            ('-' === (c = formalStyleName.charAt(0)) || '+' === c || 0 <= c) && (formalStyleName = function(str) {
                                var maxValue = 0, str = str.split(/\s*,\s*/);
                                forEach(str, function(value) {
                                    's' == value.charAt(value.length - 1) && (value = value.substring(0, value.length - 1));
                                    value = parseFloat(value) || 0;
                                    maxValue = maxValue ? Math.max(value, maxValue) : value;
                                });
                                return maxValue;
                            }(formalStyleName));
                            styles[actualStyleName] = formalStyleName = 0 === formalStyleName ? null : formalStyleName;
                        }
                    });
                    return styles;
                }
                function truthyTimingValue(val) {
                    return 0 === val || null != val;
                }
                function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
                    var style = TRANSITION_PROP, duration = duration + 's';
                    applyOnlyDuration ? style += 'Duration' : duration += ' linear all';
                    return [ style, duration ];
                }
                function createLocalCacheLookup() {
                    var cache = Object.create(null);
                    return {
                        'flush': function() {
                            cache = Object.create(null);
                        },
                        'count': function(key) {
                            key = cache[key];
                            return key ? key.total : 0;
                        },
                        'get': function(key) {
                            key = cache[key];
                            return key && key.value;
                        },
                        'put': function(key, value) {
                            cache[key] ? cache[key].total++ : cache[key] = {
                                'total': 1,
                                'value': value
                            };
                        }
                    };
                }
                function registerRestorableStyles(backup, node, properties) {
                    forEach(properties, function(prop) {
                        backup[prop] = isDefined(backup[prop]) ? backup[prop] : node.style.getPropertyValue(prop);
                    });
                }
                var TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT, ANIMATION_PLAYSTATE_KEY, ANIMATION_DELAY_PROP, ANIMATION_DURATION_PROP, TRANSITION_DELAY_PROP, $$AnimateChildrenDirective, DETECT_CSS_PROPERTIES, DETECT_STAGGER_CSS_PROPERTIES, TRANSITION_DURATION_PROP, $$AnimateCssDriverProvider, $$AnimateJsProvider, $$AnimateJsDriverProvider, $$AnimateQueueProvider, $$AnimateAsyncRunFactory, $$AnimateRunnerFactory, $$AnimationProvider, noop = angular.noop, extend = angular.extend, jqLite = angular.element, forEach = angular.forEach, isArray = angular.isArray, isString = angular.isString, isObject = angular.isObject, isUndefined = angular.isUndefined, isDefined = angular.isDefined, isFunction = angular.isFunction, isElement = angular.isElement, ELEMENT_NODE = 1, ADD_CLASS_SUFFIX = '-add', REMOVE_CLASS_SUFFIX = '-remove', EVENT_CLASS_PREFIX = 'ng-';
                if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
                    TRANSITION_PROP = 'WebkitTransition';
                    TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
                } else {
                    TRANSITION_PROP = 'transition';
                    TRANSITIONEND_EVENT = 'transitionend';
                }
                if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
                    ANIMATION_PROP = 'WebkitAnimation';
                    ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
                } else {
                    ANIMATION_PROP = 'animation';
                    ANIMATIONEND_EVENT = 'animationend';
                }
                0;
                ANIMATION_PLAYSTATE_KEY = 'PlayState';
                0;
                window = [ '$$rAF', function($$rAF) {
                    function scheduler(tasks) {
                        queue = queue.concat(tasks);
                        nextTick();
                    }
                    function nextTick() {
                        var items, i;
                        if (!queue.length) return;
                        items = queue.shift();
                        for (i = 0; i < items.length; i++) items[i]();
                        cancelFn || $$rAF(function() {
                            cancelFn || nextTick();
                        });
                    }
                    var queue, cancelFn;
                    queue = scheduler.queue = [];
                    scheduler.waitUntilQuiet = function(fn) {
                        cancelFn && cancelFn();
                        cancelFn = $$rAF(function() {
                            cancelFn = null;
                            fn();
                            nextTick();
                        });
                    };
                    return scheduler;
                } ];
                $$AnimateChildrenDirective = [ function() {
                    return function(scope, element, attrs) {
                        var val = attrs.ngAnimateChildren;
                        angular.isString(val) && 0 === val.length ? element.data('$$ngAnimateChildren', !0) : attrs.$observe('ngAnimateChildren', function(value) {
                            element.data('$$ngAnimateChildren', value = 'on' === value || 'true' === value);
                        });
                    };
                } ];
                0;
                0;
                0;
                0;
                DETECT_CSS_PROPERTIES = {
                    'transitionDuration': TRANSITION_DURATION_PROP = TRANSITION_PROP + 'Duration',
                    'transitionDelay': TRANSITION_DELAY_PROP = TRANSITION_PROP + 'Delay',
                    'transitionProperty': TRANSITION_PROP + 'Property',
                    'animationDuration': ANIMATION_DURATION_PROP = ANIMATION_PROP + 'Duration',
                    'animationDelay': ANIMATION_DELAY_PROP = ANIMATION_PROP + 'Delay',
                    'animationIterationCount': ANIMATION_PROP + 'IterationCount'
                };
                DETECT_STAGGER_CSS_PROPERTIES = {
                    'transitionDuration': TRANSITION_DURATION_PROP,
                    'transitionDelay': TRANSITION_DELAY_PROP,
                    'animationDuration': ANIMATION_DURATION_PROP,
                    'animationDelay': ANIMATION_DELAY_PROP
                };
                TRANSITION_DURATION_PROP = [ '$animateProvider', function($animateProvider) {
                    var gcsLookup = createLocalCacheLookup(), gcsStaggerLookup = createLocalCacheLookup();
                    this.$get = [ '$window', '$$jqLite', '$$AnimateRunner', '$timeout', '$$forceReflow', '$sniffer', '$$rAFScheduler', '$animate', function($window, $$jqLite, $$AnimateRunner, $timeout, $$forceReflow, $sniffer, $$rAFScheduler, $animate) {
                        function gcsHashFn(node, extraClasses) {
                            var KEY = '$$ngAnimateParentKey', parentNode = node.parentNode;
                            return (parentNode[KEY] || (parentNode[KEY] = ++parentCounter)) + '-' + node.getAttribute('class') + '-' + extraClasses;
                        }
                        function waitUntilQuiet(callback) {
                            rafWaitQueue.push(callback);
                            $$rAFScheduler.waitUntilQuiet(function() {
                                var pageWidth, i;
                                gcsLookup.flush();
                                gcsStaggerLookup.flush();
                                pageWidth = $$forceReflow();
                                for (i = 0; i < rafWaitQueue.length; i++) rafWaitQueue[i](pageWidth);
                                rafWaitQueue.length = 0;
                            });
                        }
                        function computeTimings(node, className, cacheKey) {
                            var node = function(node, cacheKey, properties) {
                                var timings = gcsLookup.get(cacheKey);
                                timings || 'infinite' === (timings = computeCssStyles($window, node, properties)).animationIterationCount && (timings.animationIterationCount = 1);
                                gcsLookup.put(cacheKey, timings);
                                return timings;
                            }(node, cacheKey, DETECT_CSS_PROPERTIES), cacheKey = node.animationDelay, tD = node.transitionDelay;
                            node.maxDelay = cacheKey && tD ? Math.max(cacheKey, tD) : cacheKey || tD;
                            node.maxDuration = Math.max(node.animationDuration * node.animationIterationCount, node.transitionDuration);
                            return node;
                        }
                        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite), parentCounter = 0, rafWaitQueue = [];
                        return function(element, options) {
                            function endFn() {
                                close();
                            }
                            function cancelFn() {
                                close(!0);
                            }
                            function close(rejected) {
                                if (animationClosed || animationCompleted && animationPaused) return;
                                animationPaused = !(animationClosed = !0);
                                options.$$skipPreparationClasses || $$jqLite.removeClass(element, preparationClasses);
                                $$jqLite.removeClass(element, activeClasses);
                                blockKeyframeAnimations(node, !1);
                                blockTransitions(node, !1);
                                forEach(temporaryStyles, function(entry) {
                                    node.style[entry[0]] = '';
                                });
                                applyAnimationClasses(element, options);
                                applyAnimationStyles(element, options);
                                Object.keys(restoreStyles).length && forEach(restoreStyles, function(value, prop) {
                                    value ? node.style.setProperty(prop, value) : node.style.removeProperty(prop);
                                });
                                options.onDone && options.onDone();
                                runner && runner.complete(!rejected);
                            }
                            function applyBlocking(duration) {
                                flags.blockTransition && blockTransitions(node, duration);
                                flags.blockKeyframeAnimation && blockKeyframeAnimations(node, !!duration);
                            }
                            function closeAndReturnNoopAnimator() {
                                runner = new $$AnimateRunner({
                                    'end': endFn,
                                    'cancel': cancelFn
                                });
                                waitUntilQuiet(noop);
                                close();
                                return {
                                    '$$willAnimate': !1,
                                    'start': function() {
                                        return runner;
                                    },
                                    'end': endFn
                                };
                            }
                            function start() {
                                function triggerAnimationStart() {
                                    var easeProp, easeVal, animationsData, setupFallbackTimer, currentTimerData;
                                    if (animationClosed) return;
                                    applyBlocking(!1);
                                    forEach(temporaryStyles, function(entry) {
                                        var key = entry[0], entry = entry[1];
                                        node.style[key] = entry;
                                    });
                                    applyAnimationClasses(element, options);
                                    $$jqLite.addClass(element, activeClasses);
                                    if (flags.recalculateTimingStyles) {
                                        fullClassName = node.className + ' ' + preparationClasses;
                                        cacheKey = gcsHashFn(node, fullClassName);
                                        timings = computeTimings(node, 0, cacheKey);
                                        relativeDelay = timings.maxDelay;
                                        maxDelay = Math.max(relativeDelay, 0);
                                        if (0 === (maxDuration = timings.maxDuration)) return close(), 
                                        void 0;
                                        flags.hasTransitions = 0 < timings.transitionDuration;
                                        flags.hasAnimations = 0 < timings.animationDuration;
                                    }
                                    if (flags.applyAnimationDelay) {
                                        relativeDelay = 'boolean' != typeof options.delay && truthyTimingValue(options.delay) ? parseFloat(options.delay) : relativeDelay;
                                        maxDelay = Math.max(relativeDelay, 0);
                                        timings.animationDelay = relativeDelay;
                                        delayStyle = getCssDelayStyle(relativeDelay, !0);
                                        temporaryStyles.push(delayStyle);
                                        node.style[delayStyle[0]] = delayStyle[1];
                                    }
                                    maxDelayTime = 1e3 * maxDelay;
                                    maxDurationTime = 1e3 * maxDuration;
                                    if (options.easing) {
                                        easeVal = options.easing;
                                        if (flags.hasTransitions) {
                                            easeProp = TRANSITION_PROP + 'TimingFunction';
                                            temporaryStyles.push([ easeProp, easeVal ]);
                                            node.style[easeProp] = easeVal;
                                        }
                                        if (flags.hasAnimations) {
                                            easeProp = ANIMATION_PROP + 'TimingFunction';
                                            temporaryStyles.push([ easeProp, easeVal ]);
                                            node.style[easeProp] = easeVal;
                                        }
                                    }
                                    timings.transitionDuration && events.push(TRANSITIONEND_EVENT);
                                    timings.animationDuration && events.push(ANIMATIONEND_EVENT);
                                    easeVal = (startTime = Date.now()) + (easeProp = maxDelayTime + 1.5 * maxDurationTime);
                                    setupFallbackTimer = !0;
                                    (animationsData = element.data('$$animateCss') || []).length && ((setupFallbackTimer = easeVal > (currentTimerData = animationsData[0]).expectedEndTime) ? $timeout.cancel(currentTimerData.timer) : animationsData.push(close));
                                    if (setupFallbackTimer) {
                                        currentTimerData = $timeout(onAnimationExpired, easeProp, !1);
                                        animationsData[0] = {
                                            'timer': currentTimerData,
                                            'expectedEndTime': easeVal
                                        };
                                        animationsData.push(close);
                                        element.data('$$animateCss', animationsData);
                                    }
                                    element.on(events.join(' '), onAnimationProgress);
                                    if (options.to) {
                                        options.cleanupStyles && registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
                                        applyAnimationToStyles(element, options);
                                    }
                                }
                                function onAnimationExpired() {
                                    var i, animationsData = element.data('$$animateCss');
                                    if (animationsData) {
                                        for (i = 1; i < animationsData.length; i++) animationsData[i]();
                                        element.removeData('$$animateCss');
                                    }
                                }
                                function onAnimationProgress(event) {
                                    var timeStamp;
                                    event.stopPropagation();
                                    timeStamp = (event = event.originalEvent || event).$manualTimeStamp || event.timeStamp || Date.now();
                                    event = parseFloat(event.elapsedTime.toFixed(3));
                                    if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && maxDuration <= event) {
                                        animationCompleted = !0;
                                        close();
                                    }
                                }
                                var startTime, events, playPause, maxStagger;
                                if (animationClosed) return;
                                if (!node.parentNode) return close(), void 0;
                                events = [];
                                playPause = function(playAnimation) {
                                    if (animationCompleted) {
                                        if (animationPaused && playAnimation) {
                                            animationPaused = !1;
                                            close();
                                        }
                                    } else {
                                        animationPaused = !playAnimation;
                                        if (timings.animationDuration) {
                                            playAnimation = blockKeyframeAnimations(node, animationPaused);
                                            animationPaused ? temporaryStyles.push(playAnimation) : (playAnimation = playAnimation, 
                                            index = (arr = temporaryStyles).indexOf(playAnimation), 
                                            0 <= playAnimation && arr.splice(index, 1));
                                        }
                                    }
                                    var arr, index;
                                };
                                (maxStagger = 0 < itemIndex && (timings.transitionDuration && 0 === stagger.transitionDuration || timings.animationDuration && 0 === stagger.animationDuration) && Math.max(stagger.animationDelay, stagger.transitionDelay)) ? $timeout(triggerAnimationStart, Math.floor(maxStagger * itemIndex * 1e3), !1) : triggerAnimationStart();
                                runnerHost.resume = function() {
                                    playPause(!0);
                                };
                                runnerHost.pause = function() {
                                    playPause(!1);
                                };
                            }
                            var temporaryStyles, animationClosed, animationPaused, animationCompleted, runner, runnerHost, maxDelay, maxDelayTime, maxDuration, maxDurationTime, addRemoveClassName, preparationClasses, fullClassName, activeClasses, method, cacheKey, stagger, applyOnlyDuration, styles, structuralClassName, itemIndex, classes, timings, relativeDelay, flags, delayStyle, restoreStyles = {}, node = getDomNode(element);
                            if (!node || !node.parentNode || !$animate.enabled()) return closeAndReturnNoopAnimator();
                            options = prepareAnimationOptions(options);
                            temporaryStyles = [];
                            classes = element.attr('class');
                            styles = function(options) {
                                var styles = {};
                                if (options && (options.to || options.from)) {
                                    styles.to = options.to;
                                    styles.from = options.from;
                                }
                                return styles;
                            }(options);
                            if (0 === options.duration || !$sniffer.animations && !$sniffer.transitions) return closeAndReturnNoopAnimator();
                            addRemoveClassName = structuralClassName = '';
                            (method = options.event && isArray(options.event) ? options.event.join(' ') : options.event) && options.structural ? structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, !0) : method && (structuralClassName = method);
                            options.addClass && (addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX));
                            if (options.removeClass) {
                                addRemoveClassName.length && (addRemoveClassName += ' ');
                                addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
                            }
                            options.applyClassesEarly && addRemoveClassName.length && applyAnimationClasses(element, options);
                            preparationClasses = [ structuralClassName, addRemoveClassName ].join(' ').trim();
                            fullClassName = classes + ' ' + preparationClasses;
                            activeClasses = pendClasses(preparationClasses, '-active');
                            method = styles.to && 0 < Object.keys(styles.to).length;
                            if (!(0 < (options.keyframeStyle || '').length) && !method && !preparationClasses) return closeAndReturnNoopAnimator();
                            if (0 < options.stagger) {
                                structuralClassName = parseFloat(options.stagger);
                                stagger = {
                                    'transitionDelay': structuralClassName,
                                    'animationDelay': structuralClassName,
                                    'transitionDuration': 0,
                                    'animationDuration': 0
                                };
                            } else {
                                cacheKey = gcsHashFn(node, fullClassName);
                                stagger = function(node, className, cacheKey, properties) {
                                    var stagger;
                                    if (0 < gcsLookup.count(cacheKey) && !(stagger = gcsStaggerLookup.get(cacheKey))) {
                                        className = pendClasses(className, '-stagger');
                                        $$jqLite.addClass(node, className);
                                        (stagger = computeCssStyles($window, node, properties)).animationDuration = Math.max(stagger.animationDuration, 0);
                                        stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);
                                        $$jqLite.removeClass(node, className);
                                        gcsStaggerLookup.put(cacheKey, stagger);
                                    }
                                    return stagger || {};
                                }(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
                            }
                            options.$$skipPreparationClasses || $$jqLite.addClass(element, preparationClasses);
                            if (options.transitionStyle) {
                                classes = [ TRANSITION_PROP, options.transitionStyle ];
                                applyInlineStyle(node, classes);
                                temporaryStyles.push(classes);
                            }
                            if (0 <= options.duration) {
                                applyOnlyDuration = 0 < node.style[TRANSITION_PROP].length;
                                styles = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);
                                applyInlineStyle(node, styles);
                                temporaryStyles.push(styles);
                            }
                            if (options.keyframeStyle) {
                                structuralClassName = [ ANIMATION_PROP, options.keyframeStyle ];
                                applyInlineStyle(node, structuralClassName);
                                temporaryStyles.push(structuralClassName);
                            }
                            (classes = 0 === (itemIndex = stagger ? 0 <= options.staggerIndex ? options.staggerIndex : gcsLookup.count(cacheKey) : 0)) && !options.skipBlocking && blockTransitions(node, 9999);
                            timings = computeTimings(node, 0, cacheKey);
                            relativeDelay = timings.maxDelay;
                            maxDelay = Math.max(relativeDelay, 0);
                            maxDuration = timings.maxDuration;
                            (flags = {}).hasTransitions = 0 < timings.transitionDuration;
                            flags.hasAnimations = 0 < timings.animationDuration;
                            flags.hasTransitionAll = flags.hasTransitions && 'all' == timings.transitionProperty;
                            flags.applyTransitionDuration = method && (flags.hasTransitions && !flags.hasTransitionAll || flags.hasAnimations && !flags.hasTransitions);
                            flags.applyAnimationDuration = options.duration && flags.hasAnimations;
                            flags.applyTransitionDelay = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
                            flags.applyAnimationDelay = truthyTimingValue(options.delay) && flags.hasAnimations;
                            flags.recalculateTimingStyles = 0 < addRemoveClassName.length;
                            if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
                                maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;
                                if (flags.applyTransitionDuration) {
                                    flags.hasTransitions = !0;
                                    timings.transitionDuration = maxDuration;
                                    applyOnlyDuration = 0 < node.style[TRANSITION_PROP + 'Property'].length;
                                    temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
                                }
                                if (flags.applyAnimationDuration) {
                                    flags.hasAnimations = !0;
                                    timings.animationDuration = maxDuration;
                                    temporaryStyles.push([ ANIMATION_DURATION_PROP, maxDuration + 's' ]);
                                }
                            }
                            if (0 === maxDuration && !flags.recalculateTimingStyles) return closeAndReturnNoopAnimator();
                            if (null != options.delay) {
                                delayStyle = parseFloat(options.delay);
                                flags.applyTransitionDelay && temporaryStyles.push(getCssDelayStyle(delayStyle));
                                flags.applyAnimationDelay && temporaryStyles.push(getCssDelayStyle(delayStyle, !0));
                            }
                            null == options.duration && 0 < timings.transitionDuration && (flags.recalculateTimingStyles = flags.recalculateTimingStyles || classes);
                            maxDelayTime = 1e3 * maxDelay;
                            maxDurationTime = 1e3 * maxDuration;
                            if (!options.skipBlocking) {
                                flags.blockTransition = 0 < timings.transitionDuration;
                                flags.blockKeyframeAnimation = 0 < timings.animationDuration && 0 < stagger.animationDelay && 0 === stagger.animationDuration;
                            }
                            if (options.from) {
                                options.cleanupStyles && registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
                                applyAnimationFromStyles(element, options);
                            }
                            flags.blockTransition || flags.blockKeyframeAnimation ? applyBlocking(maxDuration) : options.skipBlocking || blockTransitions(node, !1);
                            return {
                                '$$willAnimate': !0,
                                'end': endFn,
                                'start': function() {
                                    if (animationClosed) return;
                                    runner = new $$AnimateRunner(runnerHost = {
                                        'end': endFn,
                                        'cancel': cancelFn,
                                        'resume': null,
                                        'pause': null
                                    });
                                    waitUntilQuiet(start);
                                    return runner;
                                }
                            };
                        };
                    } ];
                } ];
                $$AnimateCssDriverProvider = [ '$$animationProvider', function($$animationProvider) {
                    $$animationProvider.drivers.push('$$animateCssDriver');
                    0;
                    0;
                    0;
                    0;
                    this.$get = [ '$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document', function($animateCss, $rootScope, $$AnimateRunner, $rootElement, $sniffer, $$jqLite, $document) {
                        function filterCssClasses(classes) {
                            return classes.replace(/\bng-\S+\b/g, '');
                        }
                        function getUniqueValues(a, b) {
                            isString(a) && (a = a.split(' '));
                            isString(b) && (b = b.split(' '));
                            return a.filter(function(val) {
                                return -1 === b.indexOf(val);
                            }).join(' ');
                        }
                        function prepareFromToAnchorAnimation(from, to, classes, anchors) {
                            var fromAnimation = prepareRegularAnimation(from), toAnimation = prepareRegularAnimation(to), anchorAnimations = [];
                            forEach(anchors, function(anchor) {
                                anchor = function(outAnchor, inAnchor) {
                                    var animatorIn, startingAnimator, clone, startingClasses, animator;
                                    function calculateAnchorStyles(anchor) {
                                        var styles = {}, coords = getDomNode(anchor).getBoundingClientRect();
                                        forEach([ 'width', 'height', 'top', 'left' ], function(key) {
                                            var value = coords[key];
                                            switch (key) {
                                              case 'top':
                                                value += bodyNode.scrollTop;
                                                break;

                                              case 'left':
                                                value += bodyNode.scrollLeft;
                                            }
                                            styles[key] = Math.floor(value) + 'px';
                                        });
                                        return styles;
                                    }
                                    function getClassVal(element) {
                                        return element.attr('class') || '';
                                    }
                                    function prepareInAnimation() {
                                        var endingClasses = filterCssClasses(getClassVal(inAnchor)), toAdd = getUniqueValues(endingClasses, startingClasses), endingClasses = getUniqueValues(startingClasses, endingClasses), toAdd = $animateCss(clone, {
                                            'to': calculateAnchorStyles(inAnchor),
                                            'addClass': 'ng-anchor-in ' + toAdd,
                                            'removeClass': 'ng-anchor-out ' + endingClasses,
                                            'delay': !0
                                        });
                                        return toAdd.$$willAnimate ? toAdd : null;
                                    }
                                    function end() {
                                        clone.remove();
                                        outAnchor.removeClass('ng-animate-shim');
                                        inAnchor.removeClass('ng-animate-shim');
                                    }
                                    clone = jqLite(getDomNode(outAnchor).cloneNode(!0)), 
                                    startingClasses = filterCssClasses(getClassVal(clone));
                                    outAnchor.addClass('ng-animate-shim');
                                    inAnchor.addClass('ng-animate-shim');
                                    clone.addClass('ng-anchor');
                                    rootBodyElement.append(clone);
                                    animator = (animator = $animateCss(clone, {
                                        'addClass': 'ng-anchor-out',
                                        'delay': !0,
                                        'from': calculateAnchorStyles(outAnchor)
                                    })).$$willAnimate ? animator : null;
                                    if (!animator && !(animatorIn = prepareInAnimation())) return end();
                                    startingAnimator = animator || animatorIn;
                                    return {
                                        'start': function() {
                                            function endFn() {
                                                currentAnimation && currentAnimation.end();
                                            }
                                            var runner, currentAnimation = startingAnimator.start();
                                            currentAnimation.done(function() {
                                                currentAnimation = null;
                                                if (!animatorIn && (animatorIn = prepareInAnimation())) return (currentAnimation = animatorIn.start()).done(function() {
                                                    currentAnimation = null;
                                                    end();
                                                    runner.complete();
                                                }), currentAnimation;
                                                end();
                                                runner.complete();
                                            });
                                            return runner = new $$AnimateRunner({
                                                'end': endFn,
                                                'cancel': endFn
                                            });
                                        }
                                    };
                                }(anchor.out, anchor.in);
                                anchor && anchorAnimations.push(anchor);
                            });
                            if (!fromAnimation && !toAnimation && 0 === anchorAnimations.length) return;
                            return {
                                'start': function() {
                                    function endFn() {
                                        forEach(animationRunners, function(runner) {
                                            runner.end();
                                        });
                                    }
                                    var runner, animationRunners = [];
                                    fromAnimation && animationRunners.push(fromAnimation.start());
                                    toAnimation && animationRunners.push(toAnimation.start());
                                    forEach(anchorAnimations, function(animation) {
                                        animationRunners.push(animation.start());
                                    });
                                    runner = new $$AnimateRunner({
                                        'end': endFn,
                                        'cancel': endFn
                                    });
                                    $$AnimateRunner.all(animationRunners, function(status) {
                                        runner.complete(status);
                                    });
                                    return runner;
                                }
                            };
                        }
                        function prepareRegularAnimation(animationDetails) {
                            var element = animationDetails.element, options = animationDetails.options || {};
                            if (animationDetails.structural) {
                                options.event = animationDetails.event;
                                options.structural = !0;
                                options.applyClassesEarly = !0;
                                'leave' === animationDetails.event && (options.onDone = options.domOperation);
                            }
                            options.preparationClasses && (options.event = concatWithSpace(options.event, options.preparationClasses));
                            return (animationDetails = $animateCss(element, options)).$$willAnimate ? animationDetails : null;
                        }
                        var bodyNode, rootBodyElement;
                        if (!$sniffer.animations && !$sniffer.transitions) return noop;
                        bodyNode = $document[0].body;
                        $sniffer = getDomNode($rootElement);
                        rootBodyElement = jqLite(($document = $sniffer).parentNode && 11 === $document.parentNode.nodeType || bodyNode.contains($sniffer) ? $sniffer : bodyNode);
                        applyAnimationClassesFactory($$jqLite);
                        return function(animationDetails) {
                            return animationDetails.from && animationDetails.to ? prepareFromToAnchorAnimation(animationDetails.from, animationDetails.to, animationDetails.classes, animationDetails.anchors) : prepareRegularAnimation(animationDetails);
                        };
                    } ];
                } ];
                $$AnimateJsProvider = [ '$animateProvider', function($animateProvider) {
                    this.$get = [ '$injector', '$$AnimateRunner', '$$jqLite', function($injector, $$AnimateRunner, $$jqLite) {
                        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
                        return function(element, event, classes, options) {
                            function applyOptions() {
                                options.domOperation();
                                applyAnimationClasses(element, options);
                            }
                            function groupEventedAnimations(element, event, options, animations, fnName) {
                                var operations = [];
                                forEach(animations, function(ani) {
                                    var animation = ani[fnName];
                                    if (!animation) return;
                                    operations.push(function() {
                                        function onAnimationComplete(rejected) {
                                            if (!resolved) {
                                                resolved = !0;
                                                (endProgressCb || noop)(rejected);
                                                runner.complete(!rejected);
                                            }
                                        }
                                        var resolved = !1, runner = new $$AnimateRunner({
                                            'end': function() {
                                                onAnimationComplete();
                                            },
                                            'cancel': function() {
                                                onAnimationComplete(!0);
                                            }
                                        }), endProgressCb = function(fn, element, event, options, onDone) {
                                            var args;
                                            switch (event) {
                                              case 'animate':
                                                args = [ element, options.from, options.to, onDone ];
                                                break;

                                              case 'setClass':
                                                args = [ element, classesToAdd, classesToRemove, onDone ];
                                                break;

                                              case 'addClass':
                                                args = [ element, classesToAdd, onDone ];
                                                break;

                                              case 'removeClass':
                                                args = [ element, classesToRemove, onDone ];
                                                break;

                                              default:
                                                args = [ element, onDone ];
                                            }
                                            args.push(options);
                                            if (event = fn.apply(fn, args)) if ((event = isFunction(event.start) ? event.start() : event) instanceof $$AnimateRunner) event.done(onDone); else if (isFunction(event)) return event;
                                            return noop;
                                        }(animation, element, event, options, function(result) {
                                            onAnimationComplete(!1 === result);
                                        });
                                        return runner;
                                    });
                                });
                                return operations;
                            }
                            function packageAnimations(element, event, options, animations, fnName) {
                                var a, b, operations = groupEventedAnimations(element, event, options, animations, fnName);
                                if (0 === operations.length) {
                                    if ('beforeSetClass' === fnName) {
                                        a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
                                        b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
                                    } else if ('setClass' === fnName) {
                                        a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
                                        b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
                                    }
                                    a && (operations = operations.concat(a));
                                    b && (operations = operations.concat(b));
                                }
                                if (0 === operations.length) return;
                                return function(callback) {
                                    var runners = [];
                                    operations.length && forEach(operations, function(animateFn) {
                                        runners.push(animateFn());
                                    });
                                    runners.length ? $$AnimateRunner.all(runners, callback) : callback();
                                    return function(reject) {
                                        forEach(runners, function(runner) {
                                            reject ? runner.cancel() : runner.end();
                                        });
                                    };
                                };
                            }
                            var classesToAdd, classesToRemove, before, after, afterFn, beforeFn;
                            if (3 === arguments.length && isObject(classes)) {
                                options = classes;
                                classes = null;
                            }
                            options = prepareAnimationOptions(options);
                            if (!classes) {
                                classes = element.attr('class') || '';
                                options.addClass && (classes += ' ' + options.addClass);
                                options.removeClass && (classes += ' ' + options.removeClass);
                            }
                            classesToAdd = options.addClass;
                            classesToRemove = options.removeClass;
                            if ((classes = function(classes) {
                                var matches, flagMap, i, klass, animationFactory;
                                classes = isArray(classes) ? classes : classes.split(' ');
                                matches = [], flagMap = {};
                                for (i = 0; i < classes.length; i++) {
                                    klass = classes[i];
                                    if ((animationFactory = $animateProvider.$$registeredAnimations[klass]) && !flagMap[klass]) {
                                        matches.push($injector.get(animationFactory));
                                        flagMap[klass] = !0;
                                    }
                                }
                                return matches;
                            }(classes)).length) {
                                if ('leave' == event) {
                                    beforeFn = 'leave';
                                    afterFn = 'afterLeave';
                                } else {
                                    beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
                                    afterFn = event;
                                }
                                'enter' !== event && 'move' !== event && (before = packageAnimations(element, event, options, classes, beforeFn));
                                after = packageAnimations(element, event, options, classes, afterFn);
                            }
                            if (!before && !after) return;
                            return {
                                'start': function() {
                                    function onComplete(success) {
                                        animationClosed = !0;
                                        applyOptions();
                                        applyAnimationStyles(element, options);
                                        runner.complete(success);
                                    }
                                    function endAnimations(cancelled) {
                                        if (!animationClosed) {
                                            (closeActiveAnimations || noop)(cancelled);
                                            onComplete(cancelled);
                                        }
                                    }
                                    var closeActiveAnimations, animationClosed, runner, chain = [];
                                    before && chain.push(function(fn) {
                                        closeActiveAnimations = before(fn);
                                    });
                                    chain.length ? chain.push(function(fn) {
                                        applyOptions();
                                        fn(!0);
                                    }) : applyOptions();
                                    after && chain.push(function(fn) {
                                        closeActiveAnimations = after(fn);
                                    });
                                    animationClosed = !1;
                                    runner = new $$AnimateRunner({
                                        'end': function() {
                                            endAnimations();
                                        },
                                        'cancel': function() {
                                            endAnimations(!0);
                                        }
                                    });
                                    $$AnimateRunner.chain(chain, onComplete);
                                    return runner;
                                }
                            };
                        };
                    } ];
                } ];
                $$AnimateJsDriverProvider = [ '$$animationProvider', function($$animationProvider) {
                    $$animationProvider.drivers.push('$$animateJsDriver');
                    this.$get = [ '$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
                        function prepareAnimation(animationDetails) {
                            var element = animationDetails.element, event = animationDetails.event, options = animationDetails.options, animationDetails = animationDetails.classes;
                            return $$animateJs(element, event, animationDetails, options);
                        }
                        return function(animationDetails) {
                            var fromAnimation, toAnimation;
                            if (animationDetails.from && animationDetails.to) {
                                fromAnimation = prepareAnimation(animationDetails.from);
                                toAnimation = prepareAnimation(animationDetails.to);
                                if (!fromAnimation && !toAnimation) return;
                                return {
                                    'start': function() {
                                        function endFnFactory() {
                                            return function() {
                                                forEach(animationRunners, function(runner) {
                                                    runner.end();
                                                });
                                            };
                                        }
                                        var runner, animationRunners = [];
                                        fromAnimation && animationRunners.push(fromAnimation.start());
                                        toAnimation && animationRunners.push(toAnimation.start());
                                        $$AnimateRunner.all(animationRunners, function(status) {
                                            runner.complete(status);
                                        });
                                        return runner = new $$AnimateRunner({
                                            'end': endFnFactory(),
                                            'cancel': endFnFactory()
                                        });
                                    }
                                };
                            }
                            return prepareAnimation(animationDetails);
                        };
                    } ];
                } ];
                0;
                0;
                $$AnimateQueueProvider = [ '$animateProvider', function($animateProvider) {
                    function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
                        return rules[ruleType].some(function(fn) {
                            return fn(element, currentAnimation, previousAnimation);
                        });
                    }
                    function hasAnimationClasses(options, and) {
                        var a;
                        a = 0 < ((options = options || {}).addClass || '').length;
                        options = 0 < (options.removeClass || '').length;
                        return and ? a && options : a || options;
                    }
                    var rules = this.rules = {
                        'skip': [],
                        'cancel': [],
                        'join': []
                    };
                    rules.join.push(function(element, newAnimation, currentAnimation) {
                        return !newAnimation.structural && hasAnimationClasses(newAnimation.options);
                    });
                    rules.skip.push(function(element, newAnimation, currentAnimation) {
                        return !newAnimation.structural && !hasAnimationClasses(newAnimation.options);
                    });
                    rules.skip.push(function(element, newAnimation, currentAnimation) {
                        return 'leave' == currentAnimation.event && newAnimation.structural;
                    });
                    rules.skip.push(function(element, newAnimation, currentAnimation) {
                        return currentAnimation.structural && 2 === currentAnimation.state && !newAnimation.structural;
                    });
                    rules.cancel.push(function(element, newAnimation, currentAnimation) {
                        return currentAnimation.structural && newAnimation.structural;
                    });
                    rules.cancel.push(function(element, newAnimation, currentAnimation) {
                        return 2 === currentAnimation.state && newAnimation.structural;
                    });
                    rules.cancel.push(function(element, newAnimation, currentAnimation) {
                        newAnimation = newAnimation.options, currentAnimation = currentAnimation.options;
                        return newAnimation.addClass && newAnimation.addClass === currentAnimation.removeClass || newAnimation.removeClass && newAnimation.removeClass === currentAnimation.addClass;
                    });
                    this.$get = [ '$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap', '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow', function($$rAF, $rootScope, $rootElement, $document, $$HashMap, $$animation, $$AnimateRunner, $templateRequest, $$jqLite, $$forceReflow) {
                        function normalizeAnimationOptions(element, options) {
                            mergeAnimationOptions(element, options, {});
                        }
                        function queueAnimation(element, event, options) {
                            function notifyProgress(runner, event, phase, data) {
                                runInNextPostDigestOrNow(function() {
                                    var callbacks = function(parent, element, event) {
                                        var targetNode = getDomNode(element), targetParentNode = getDomNode(parent), matches = [];
                                        (element = callbackRegistry[event]) && forEach(element, function(entry) {
                                            (entry.node.contains(targetNode) || 'leave' === event && entry.node.contains(targetParentNode)) && matches.push(entry.callback);
                                        });
                                        return matches;
                                    }(parent, element, event);
                                    callbacks.length && $$rAF(function() {
                                        forEach(callbacks, function(callback) {
                                            callback(element, phase, data);
                                        });
                                    });
                                });
                                runner.progress(event, phase, data);
                            }
                            function close(reject) {
                                (function(element, options) {
                                    if (options.preparationClasses) {
                                        element.removeClass(options.preparationClasses);
                                        options.preparationClasses = null;
                                    }
                                    if (options.activeClasses) {
                                        element.removeClass(options.activeClasses);
                                        options.activeClasses = null;
                                    }
                                })(element, options);
                                applyAnimationClasses(element, options);
                                applyAnimationStyles(element, options);
                                options.domOperation();
                                runner.complete(!reject);
                            }
                            var node, parent, runner, runInNextPostDigestOrNow, isStructural, existingAnimation, hasExistingAnimation, className, counter;
                            if (element = function(element) {
                                if (element instanceof jqLite) switch (element.length) {
                                  case 0:
                                    return [];

                                  case 1:
                                    if (element[0].nodeType === ELEMENT_NODE) return element;
                                    break;

                                  default:
                                    return jqLite(extractElementNode(element));
                                }
                                if (element.nodeType === ELEMENT_NODE) return jqLite(element);
                            }(element)) {
                                node = getDomNode(element);
                                parent = element.parent();
                            }
                            options = prepareAnimationOptions(options);
                            runner = new $$AnimateRunner();
                            runInNextPostDigestOrNow = (postDigestCalled = !1, function(fn) {
                                postDigestCalled ? fn() : $rootScope.$$postDigest(function() {
                                    postDigestCalled = !0;
                                    fn();
                                });
                            });
                            var postDigestCalled;
                            isArray(options.addClass) && (options.addClass = options.addClass.join(' '));
                            options.addClass && !isString(options.addClass) && (options.addClass = null);
                            isArray(options.removeClass) && (options.removeClass = options.removeClass.join(' '));
                            options.removeClass && !isString(options.removeClass) && (options.removeClass = null);
                            options.from && !isObject(options.from) && (options.from = null);
                            options.to && !isObject(options.to) && (options.to = null);
                            if (!node) return close(), runner;
                            className = [ node.className, options.addClass, options.removeClass ].join(' ');
                            if (!isAnimatableClassName(className)) return close(), 
                            runner;
                            isStructural = 0 <= [ 'enter', 'move', 'leave' ].indexOf(event);
                            hasExistingAnimation = !!(existingAnimation = !(className = !animationsEnabled || disabledElementsLookup.get(node)) && activeAnimationsLookup.get(node) || {}).state;
                            if (className = className || hasExistingAnimation && 1 == existingAnimation.state ? className : !function(element, parentElement) {
                                var animateChildren, parentNode, details, bodyElement = jqLite($document[0].body), bodyElementDetected = isMatchingElement(element, bodyElement) || 'HTML' === element[0].nodeName, rootElementDetected = isMatchingElement(element, $rootElement), parentAnimationDetected = !1, parentHost = element.data('$ngAnimatePin');
                                parentHost && (parentElement = parentHost);
                                for (;parentElement && parentElement.length; ) {
                                    rootElementDetected = rootElementDetected || isMatchingElement(parentElement, $rootElement);
                                    if ((parentNode = parentElement[0]).nodeType !== ELEMENT_NODE) break;
                                    details = activeAnimationsLookup.get(parentNode) || {};
                                    parentAnimationDetected = parentAnimationDetected || details.structural || disabledElementsLookup.get(parentNode);
                                    if (isUndefined(animateChildren) || !0 === animateChildren) {
                                        details = parentElement.data('$$ngAnimateChildren');
                                        isDefined(details) && (animateChildren = details);
                                    }
                                    if (parentAnimationDetected && !1 === animateChildren) break;
                                    (rootElementDetected = rootElementDetected || isMatchingElement(parentElement, $rootElement)) || (parentHost = parentElement.data('$ngAnimatePin')) && (parentElement = parentHost);
                                    bodyElementDetected = bodyElementDetected || isMatchingElement(parentElement, bodyElement);
                                    parentElement = parentElement.parent();
                                }
                                return (!parentAnimationDetected || animateChildren) && rootElementDetected && bodyElementDetected;
                            }(element, parent)) return close(), runner;
                            isStructural && function(element) {
                                element = getDomNode(element).querySelectorAll('[data-ng-animate]');
                                forEach(element, function(child) {
                                    var state = parseInt(child.getAttribute('data-ng-animate')), animationDetails = activeAnimationsLookup.get(child);
                                    switch (state) {
                                      case 2:
                                        animationDetails.runner.end();

                                      case 1:
                                        animationDetails && activeAnimationsLookup.remove(child);
                                    }
                                });
                            }(element);
                            className = {
                                'structural': isStructural,
                                'element': element,
                                'event': event,
                                'close': close,
                                'options': options,
                                'runner': runner
                            };
                            if (hasExistingAnimation) {
                                if (isAllowed('skip', element, className, existingAnimation)) {
                                    if (2 === existingAnimation.state) return close(), 
                                    runner;
                                    mergeAnimationOptions(element, existingAnimation.options, options);
                                    return existingAnimation.runner;
                                }
                                if (isAllowed('cancel', element, className, existingAnimation)) if (2 === existingAnimation.state) existingAnimation.runner.end(); else {
                                    if (!existingAnimation.structural) return mergeAnimationOptions(element, existingAnimation.options, className.options), 
                                    existingAnimation.runner;
                                    existingAnimation.close();
                                } else if (isAllowed('join', element, className, existingAnimation)) {
                                    if (2 !== existingAnimation.state) {
                                        (function(element, event, options) {
                                            var classes = '';
                                            event && (classes = pendClasses(event, EVENT_CLASS_PREFIX, !0));
                                            options.addClass && (classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX)));
                                            if ((classes = options.removeClass ? concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX)) : classes).length) {
                                                options.preparationClasses = classes;
                                                element.addClass(classes);
                                            }
                                        })(element, isStructural ? event : null, options);
                                        event = className.event = existingAnimation.event;
                                        options = mergeAnimationOptions(element, existingAnimation.options, className.options);
                                        return existingAnimation.runner;
                                    }
                                    normalizeAnimationOptions(element, options);
                                }
                            } else normalizeAnimationOptions(element, options);
                            if (!(className.structural || 'animate' === className.event && 0 < Object.keys(className.options.to || {}).length || hasAnimationClasses(className.options))) {
                                close();
                                clearElementAnimationState(element);
                                return runner;
                            }
                            counter = (existingAnimation.counter || 0) + 1;
                            className.counter = counter;
                            markElementAnimationState(element, 1, className);
                            $rootScope.$$postDigest(function() {
                                var isValidAnimation, animationDetails = activeAnimationsLookup.get(node), animationCancelled = !animationDetails;
                                animationDetails = animationDetails || {};
                                isValidAnimation = 0 < (element.parent() || []).length && ('animate' === animationDetails.event || animationDetails.structural || hasAnimationClasses(animationDetails.options));
                                if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
                                    if (animationCancelled) {
                                        applyAnimationClasses(element, options);
                                        applyAnimationStyles(element, options);
                                    }
                                    if (animationCancelled || isStructural && animationDetails.event !== event) {
                                        options.domOperation();
                                        runner.end();
                                    }
                                    isValidAnimation || clearElementAnimationState(element);
                                    return;
                                }
                                event = !animationDetails.structural && hasAnimationClasses(animationDetails.options, !0) ? 'setClass' : animationDetails.event;
                                markElementAnimationState(element, 2);
                                (animationCancelled = $$animation(element, event, animationDetails.options)).done(function(status) {
                                    close(!status);
                                    status = activeAnimationsLookup.get(node);
                                    status && status.counter === counter && clearElementAnimationState(getDomNode(element));
                                    notifyProgress(runner, event, 'close', {});
                                });
                                runner.setHost(animationCancelled);
                                notifyProgress(runner, event, 'start', {});
                            });
                            return runner;
                        }
                        function clearElementAnimationState(element) {
                            element = getDomNode(element);
                            element.removeAttribute('data-ng-animate');
                            activeAnimationsLookup.remove(element);
                        }
                        function isMatchingElement(nodeOrElmA, nodeOrElmB) {
                            return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
                        }
                        function markElementAnimationState(element, state, details) {
                            (details = details || {}).state = state;
                            (element = getDomNode(element)).setAttribute('data-ng-animate', state);
                            state = (state = activeAnimationsLookup.get(element)) ? extend(state, details) : details;
                            activeAnimationsLookup.put(element, state);
                        }
                        var activeAnimationsLookup = new $$HashMap(), disabledElementsLookup = new $$HashMap(), animationsEnabled = null, deregisterWatch = $rootScope.$watch(function() {
                            return 0 === $templateRequest.totalPendingRequests;
                        }, function(isEmpty) {
                            if (!isEmpty) return;
                            deregisterWatch();
                            $rootScope.$$postDigest(function() {
                                $rootScope.$$postDigest(function() {
                                    null === animationsEnabled && (animationsEnabled = !0);
                                });
                            });
                        }), callbackRegistry = {}, classNameFilter = $animateProvider.classNameFilter(), isAnimatableClassName = classNameFilter ? function(className) {
                            return classNameFilter.test(className);
                        } : function() {
                            return !0;
                        }, applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
                        return {
                            'on': function(event, container, callback) {
                                container = extractElementNode(container);
                                callbackRegistry[event] = callbackRegistry[event] || [];
                                callbackRegistry[event].push({
                                    'node': container,
                                    'callback': callback
                                });
                            },
                            'off': function(event, container, callback) {
                                var entries = callbackRegistry[event];
                                if (!entries) return;
                                callbackRegistry[event] = 1 === arguments.length ? null : (event = entries, 
                                matchCallback = callback, containerNode = extractElementNode(container), 
                                event.filter(function(entry) {
                                    return !(entry.node === containerNode && (!matchCallback || entry.callback === matchCallback));
                                }));
                                var matchCallback, containerNode;
                            },
                            'pin': function(element, parentElement) {
                                assertArg(isElement(element), 'element', 'not an element');
                                assertArg(isElement(parentElement), 'parentElement', 'not an element');
                                element.data('$ngAnimatePin', parentElement);
                            },
                            'push': function(element, event, options, domOperation) {
                                (options = options || {}).domOperation = domOperation;
                                return queueAnimation(element, event, options);
                            },
                            'enabled': function(element, bool) {
                                var node, recordExists, argCount = arguments.length;
                                if (0 === argCount) bool = !!animationsEnabled; else if (isElement(element)) {
                                    node = getDomNode(element);
                                    recordExists = disabledElementsLookup.get(node);
                                    1 === argCount ? bool = !recordExists : (bool = !!bool) ? recordExists && disabledElementsLookup.remove(node) : disabledElementsLookup.put(node, !0);
                                } else bool = animationsEnabled = !!element;
                                return bool;
                            }
                        };
                    } ];
                } ];
                $$AnimateAsyncRunFactory = [ '$$rAF', function($$rAF) {
                    function waitForTick(fn) {
                        waitQueue.push(fn);
                        if (1 < waitQueue.length) return;
                        $$rAF(function() {
                            for (var i = 0; i < waitQueue.length; i++) waitQueue[i]();
                            waitQueue = [];
                        });
                    }
                    var waitQueue = [];
                    return function() {
                        var passed = !1;
                        waitForTick(function() {
                            passed = !0;
                        });
                        return function(callback) {
                            passed ? callback() : waitForTick(callback);
                        };
                    };
                } ];
                $$AnimateRunnerFactory = [ '$q', '$sniffer', '$$animateAsyncRun', function($q, $sniffer, $$animateAsyncRun) {
                    function AnimateRunner(host) {
                        this.setHost(host);
                        this._doneCallbacks = [];
                        this._runInAnimationFrame = $$animateAsyncRun();
                        this._state = 0;
                    }
                    AnimateRunner.chain = function(chain, callback) {
                        var index = 0;
                        (function next() {
                            if (index === chain.length) return void callback(!0);
                            chain[index](function(response) {
                                if (!1 === response) return void callback(!1);
                                index++;
                                next();
                            });
                        })();
                    };
                    AnimateRunner.all = function(runners, callback) {
                        function onProgress(response) {
                            status = status && response;
                            ++count === runners.length && callback(status);
                        }
                        var count = 0, status = !0;
                        forEach(runners, function(runner) {
                            runner.done(onProgress);
                        });
                    };
                    AnimateRunner.prototype = {
                        'setHost': function(host) {
                            this.host = host || {};
                        },
                        'done': function(fn) {
                            2 === this._state ? fn() : this._doneCallbacks.push(fn);
                        },
                        'progress': noop,
                        'getPromise': function() {
                            if (!this.promise) {
                                var self = this;
                                this.promise = $q(function(resolve, reject) {
                                    self.done(function(status) {
                                        (!1 === status ? reject : resolve)();
                                    });
                                });
                            }
                            return this.promise;
                        },
                        'then': function(resolveHandler, rejectHandler) {
                            return this.getPromise().then(resolveHandler, rejectHandler);
                        },
                        'catch': function(handler) {
                            return this.getPromise().catch(handler);
                        },
                        'finally': function(handler) {
                            return this.getPromise().finally(handler);
                        },
                        'pause': function() {
                            this.host.pause && this.host.pause();
                        },
                        'resume': function() {
                            this.host.resume && this.host.resume();
                        },
                        'end': function() {
                            this.host.end && this.host.end();
                            this._resolve(!0);
                        },
                        'cancel': function() {
                            this.host.cancel && this.host.cancel();
                            this._resolve(!1);
                        },
                        'complete': function(response) {
                            var self = this;
                            if (0 === self._state) {
                                self._state = 1;
                                self._runInAnimationFrame(function() {
                                    self._resolve(response);
                                });
                            }
                        },
                        '_resolve': function(response) {
                            if (2 !== this._state) {
                                forEach(this._doneCallbacks, function(fn) {
                                    fn(response);
                                });
                                this._doneCallbacks.length = 0;
                                this._state = 2;
                            }
                        }
                    };
                    return AnimateRunner;
                } ];
                $$AnimationProvider = [ '$animateProvider', function($animateProvider) {
                    function getRunner(element) {
                        return element.data(RUNNER_STORAGE_KEY);
                    }
                    var drivers = this.drivers = [], RUNNER_STORAGE_KEY = '$$animationRunner';
                    this.$get = [ '$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler', function($$jqLite, $rootScope, $injector, $$AnimateRunner, $$HashMap, $$rAFScheduler) {
                        function sortAnimations(animations) {
                            var i, animation, tree = {
                                'children': []
                            }, lookup = new $$HashMap();
                            for (i = 0; i < animations.length; i++) {
                                animation = animations[i];
                                lookup.put(animation.domNode, animations[i] = {
                                    'domNode': animation.domNode,
                                    'fn': animation.fn,
                                    'children': []
                                });
                            }
                            for (i = 0; i < animations.length; i++) (function processNode(entry) {
                                var elementNode, parentNode, parentEntry;
                                if (entry.processed) return entry;
                                entry.processed = !0;
                                parentNode = (elementNode = entry.domNode).parentNode;
                                lookup.put(elementNode, entry);
                                for (;parentNode; ) {
                                    if (parentEntry = lookup.get(parentNode)) {
                                        parentEntry.processed || (parentEntry = processNode(parentEntry));
                                        break;
                                    }
                                    parentNode = parentNode.parentNode;
                                }
                                (parentEntry || tree).children.push(entry);
                                return entry;
                            })(animations[i]);
                            return function(tree) {
                                var i, remainingLevelEntries, nextLevelEntries, row, entry, result = [], queue = [];
                                for (i = 0; i < tree.children.length; i++) queue.push(tree.children[i]);
                                remainingLevelEntries = queue.length;
                                row = [];
                                for (i = nextLevelEntries = 0; i < queue.length; i++) {
                                    entry = queue[i];
                                    if (remainingLevelEntries <= 0) {
                                        remainingLevelEntries = nextLevelEntries;
                                        nextLevelEntries = 0;
                                        result.push(row);
                                        row = [];
                                    }
                                    row.push(entry.fn);
                                    entry.children.forEach(function(childEntry) {
                                        nextLevelEntries++;
                                        queue.push(childEntry);
                                    });
                                    remainingLevelEntries--;
                                }
                                row.length && result.push(row);
                                return result;
                            }(tree);
                        }
                        var animationQueue = [], applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
                        return function(element, event, options) {
                            function groupAnimations(animations) {
                                var usedIndicesLookup, anchorGroups, preparedAnimations = [], refLookup = {};
                                forEach(animations, function(animation, index) {
                                    var direction, node = getDomNode(animation.element), event = animation.event, event = 0 <= [ 'enter', 'move' ].indexOf(event), node = animation.structural ? function(node) {
                                        var node = node.hasAttribute('ng-animate-ref') ? [ node ] : node.querySelectorAll('[ng-animate-ref]'), anchors = [];
                                        forEach(node, function(node) {
                                            var attr = node.getAttribute('ng-animate-ref');
                                            attr && attr.length && anchors.push(node);
                                        });
                                        return anchors;
                                    }(node) : [];
                                    if (node.length) {
                                        direction = event ? 'to' : 'from';
                                        forEach(node, function(anchor) {
                                            var key = anchor.getAttribute('ng-animate-ref');
                                            refLookup[key] = refLookup[key] || {};
                                            refLookup[key][direction] = {
                                                'animationID': index,
                                                'element': jqLite(anchor)
                                            };
                                        });
                                    } else preparedAnimations.push(animation);
                                });
                                usedIndicesLookup = {};
                                anchorGroups = {};
                                forEach(refLookup, function(operations, key) {
                                    var fromAnimation, toAnimation, indexKey, index, from = operations.from, operations = operations.to;
                                    if (!from || !operations) {
                                        indexKey = (index = (from || operations).animationID).toString();
                                        if (!usedIndicesLookup[indexKey]) {
                                            usedIndicesLookup[indexKey] = !0;
                                            preparedAnimations.push(animations[index]);
                                        }
                                        return;
                                    }
                                    fromAnimation = animations[from.animationID];
                                    toAnimation = animations[operations.animationID];
                                    indexKey = from.animationID.toString();
                                    if (!anchorGroups[indexKey]) if ((index = anchorGroups[indexKey] = {
                                        'structural': !0,
                                        'beforeStart': function() {
                                            fromAnimation.beforeStart();
                                            toAnimation.beforeStart();
                                        },
                                        'close': function() {
                                            fromAnimation.close();
                                            toAnimation.close();
                                        },
                                        'classes': function(a, b) {
                                            var matches, i, aa, j;
                                            a = a.split(' ');
                                            b = b.split(' ');
                                            matches = [];
                                            for (i = 0; i < a.length; i++) {
                                                if ('ng-' === (aa = a[i]).substring(0, 3)) continue;
                                                for (j = 0; j < b.length; j++) if (aa === b[j]) {
                                                    matches.push(aa);
                                                    break;
                                                }
                                            }
                                            return matches.join(' ');
                                        }(fromAnimation.classes, toAnimation.classes),
                                        'from': fromAnimation,
                                        'to': toAnimation,
                                        'anchors': []
                                    }).classes.length) preparedAnimations.push(index); else {
                                        preparedAnimations.push(fromAnimation);
                                        preparedAnimations.push(toAnimation);
                                    }
                                    anchorGroups[indexKey].anchors.push({
                                        'out': from.element,
                                        'in': operations.element
                                    });
                                });
                                return preparedAnimations;
                            }
                            function handleDestroyedElement() {
                                var runner = getRunner(element);
                                !runner || 'leave' === event && options.$$domOperationFired || runner.end();
                            }
                            function close(rejected) {
                                element.off('$destroy', handleDestroyedElement);
                                (function(element) {
                                    element.removeData(RUNNER_STORAGE_KEY);
                                })(element);
                                applyAnimationClasses(element, options);
                                applyAnimationStyles(element, options);
                                options.domOperation();
                                tempClasses && $$jqLite.removeClass(element, tempClasses);
                                element.removeClass('ng-animate');
                                runner.complete(!rejected);
                            }
                            var isStructural, runner, classes, tempClasses;
                            options = prepareAnimationOptions(options);
                            isStructural = 0 <= [ 'enter', 'move', 'leave' ].indexOf(event);
                            runner = new $$AnimateRunner({
                                'end': function() {
                                    close();
                                },
                                'cancel': function() {
                                    close(!0);
                                }
                            });
                            if (!drivers.length) return close(), runner;
                            (function(element, runner) {
                                element.data(RUNNER_STORAGE_KEY, runner);
                            })(element, runner);
                            classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
                            if (tempClasses = options.tempClasses) {
                                classes += ' ' + tempClasses;
                                options.tempClasses = null;
                            }
                            animationQueue.push({
                                'element': element,
                                'classes': classes,
                                'event': event,
                                'structural': isStructural,
                                'options': options,
                                'beforeStart': function() {
                                    element.addClass('ng-animate');
                                    tempClasses && $$jqLite.addClass(element, tempClasses);
                                },
                                'close': close
                            });
                            element.on('$destroy', handleDestroyedElement);
                            if (1 < animationQueue.length) return runner;
                            $rootScope.$$postDigest(function() {
                                var groupedAnimations, toBeSortedAnimations, animations = [];
                                forEach(animationQueue, function(entry) {
                                    getRunner(entry.element) ? animations.push(entry) : entry.close();
                                });
                                animationQueue.length = 0;
                                groupedAnimations = groupAnimations(animations);
                                toBeSortedAnimations = [];
                                forEach(groupedAnimations, function(animationEntry) {
                                    toBeSortedAnimations.push({
                                        'domNode': getDomNode((animationEntry.from || animationEntry).element),
                                        'fn': function() {
                                            var closeFn, operation;
                                            animationEntry.beforeStart();
                                            closeFn = animationEntry.close;
                                            if (startAnimationFn = getRunner(animationEntry.anchors ? animationEntry.from.element || animationEntry.to.element : animationEntry.element) && (operation = function(animationDetails) {
                                                var i, driverName;
                                                for (i = drivers.length - 1; 0 <= i; i--) {
                                                    if (!$injector.has(driverName = drivers[i])) continue;
                                                    if (driverName = $injector.get(driverName)(animationDetails)) return driverName;
                                                }
                                            }(animationEntry)) ? operation.start : startAnimationFn) {
                                                (operation = startAnimationFn()).done(function(status) {
                                                    closeFn(!status);
                                                });
                                                var startAnimationFn = animationEntry;
                                                var newRunner = operation;
                                                function update(element) {
                                                    getRunner(element).setHost(newRunner);
                                                }
                                                if (startAnimationFn.from && startAnimationFn.to) {
                                                    update(startAnimationFn.from.element);
                                                    update(startAnimationFn.to.element);
                                                } else update(startAnimationFn.element);
                                                return;
                                            }
                                            closeFn();
                                        }
                                    });
                                });
                                $$rAFScheduler(sortAnimations(toBeSortedAnimations));
                            });
                            return runner;
                        };
                    } ];
                } ];
                angular.module('ngAnimate', []).directive('ngAnimateChildren', $$AnimateChildrenDirective).factory('$$rAFScheduler', window).factory('$$AnimateRunner', $$AnimateRunnerFactory).factory('$$animateAsyncRun', $$AnimateAsyncRunFactory).provider('$$animateQueue', $$AnimateQueueProvider).provider('$$animation', $$AnimationProvider).provider('$animateCss', TRANSITION_DURATION_PROP).provider('$$animateCssDriver', $$AnimateCssDriverProvider).provider('$$animateJs', $$AnimateJsProvider).provider('$$animateJsDriver', $$AnimateJsDriverProvider);
            })(window, window.angular);
        }.apply(root, arguments);
    });
})(this);

(function(root) {
    define('ui-router/angular-ui-router', [], function() {
        return function() {
            'undefined' != typeof module && 'undefined' != typeof exports && module.exports === exports && (module.exports = 'ui.router');
            (function(window, angular) {
                function inherit(parent, extra) {
                    return extend(new (extend(function() {}, {
                        'prototype': parent
                    }))(), extra);
                }
                function merge(dst) {
                    forEach(arguments, function(obj) {
                        obj !== dst && forEach(obj, function(value, key) {
                            dst.hasOwnProperty(key) || (dst[key] = value);
                        });
                    });
                    return dst;
                }
                function inheritParams(currentParams, newParams, $current, $to) {
                    var parentParams, i, j, parents = function(first, second) {
                        var n, path = [];
                        for (n in first.path) {
                            if ('' === first.path[n]) continue;
                            if (!second.path[n]) break;
                            path.push(first.path[n]);
                        }
                        return path;
                    }($current, $to), inherited = {}, inheritList = [];
                    for (i in parents) {
                        if (!parents[i].params || !parents[i].params.length) continue;
                        for (j in parentParams = parents[i].params) {
                            if (0 <= function(array, value, argument_2) {
                                if (Array.prototype.indexOf) return array.indexOf(value, Number(argument_2) || 0);
                                var len = array.length >>> 0, from = Number(argument_2) || 0;
                                (from = from < 0 ? Math.ceil(from) : Math.floor(from)) < 0 && (from += len);
                                for (;from < len; from++) if (from in array && array[from] === value) return from;
                                return -1;
                            }(inheritList, parentParams[j])) continue;
                            inheritList.push(parentParams[j]);
                            inherited[parentParams[j]] = currentParams[parentParams[j]];
                        }
                    }
                    return extend({}, inherited, newParams);
                }
                function normalize(keys, values) {
                    var normalized = {};
                    forEach(keys, function(name) {
                        var value = values[name];
                        normalized[name] = null != value ? String(value) : null;
                    });
                    return normalized;
                }
                function equalForKeys(a, b, keys) {
                    var n, i, k;
                    if (!keys) {
                        keys = [];
                        for (n in a) keys.push(n);
                    }
                    for (i = 0; i < keys.length; i++) if (a[k = keys[i]] != b[k]) return !1;
                    return !0;
                }
                function $Resolve($q, $injector) {
                    var NOTHING = {}, NO_DEPENDENCIES = [], NO_LOCALS = NOTHING, NO_PARENT = extend($q.when(NOTHING), {
                        '$$promises': NOTHING,
                        '$$values': NOTHING
                    });
                    this.study = function(invocables) {
                        function isResolve(value) {
                            return isObject(value) && value.then && value.$$promises;
                        }
                        if (!isObject(invocables)) throw new Error('\'invocables\' must be an object');
                        var plan = [], cycle = [], visited = {};
                        forEach(invocables, function visit(value, key) {
                            if (2 === visited[key]) return;
                            cycle.push(key);
                            if (1 === visited[key]) throw cycle.splice(0, cycle.indexOf(key)), 
                            new Error('Cyclic dependency: ' + cycle.join(' -> '));
                            visited[key] = 1;
                            if (isString(value)) plan.push(key, [ function() {
                                return $injector.get(value);
                            } ], NO_DEPENDENCIES); else {
                                var params = $injector.annotate(value);
                                forEach(params, function(param) {
                                    param !== key && invocables.hasOwnProperty(param) && visit(invocables[param], param);
                                });
                                plan.push(key, value, params);
                            }
                            cycle.pop();
                            visited[key] = 2;
                        });
                        invocables = cycle = visited = null;
                        return function(locals, parent, self) {
                            function done() {
                                if (!--wait) {
                                    merged || merge(values, parent.$$values);
                                    result.$$values = values;
                                    result.$$promises = !0;
                                    resolution.resolve(values);
                                }
                            }
                            function fail(reason) {
                                result.$$failure = reason;
                                resolution.reject(reason);
                            }
                            var resolution, result, promises, values, wait, merged, i, ii;
                            if (isResolve(locals) && void 0 === self) {
                                self = parent;
                                parent = locals;
                                locals = null;
                            }
                            if (locals) {
                                if (!isObject(locals)) throw new Error('\'locals\' must be an object');
                            } else locals = NO_LOCALS;
                            if (parent) {
                                if (!isResolve(parent)) throw new Error('\'parent\' must be a promise returned by $resolve.resolve()');
                            } else parent = NO_PARENT;
                            resolution = $q.defer(), result = resolution.promise, 
                            promises = result.$$promises = {}, values = extend({}, locals), 
                            wait = 1 + plan.length / 3, merged = !1;
                            if (isDefined(parent.$$failure)) return fail(parent.$$failure), 
                            result;
                            if (parent.$$values) {
                                merged = merge(values, parent.$$values);
                                done();
                            } else {
                                extend(promises, parent.$$promises);
                                parent.then(done, fail);
                            }
                            for (i = 0, ii = plan.length; i < ii; i += 3) locals.hasOwnProperty(plan[i]) ? done() : function(key, invocable, params) {
                                function onfailure(reason) {
                                    invocation.reject(reason);
                                    fail(reason);
                                }
                                function proceed() {
                                    if (isDefined(result.$$failure)) return;
                                    try {
                                        invocation.resolve($injector.invoke(invocable, self, values));
                                        invocation.promise.then(function(result) {
                                            values[key] = result;
                                            done();
                                        }, onfailure);
                                    } catch (e) {
                                        onfailure(e);
                                    }
                                }
                                var invocation = $q.defer(), waitParams = 0;
                                forEach(params, function(dep) {
                                    if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
                                        waitParams++;
                                        promises[dep].then(function(result) {
                                            values[dep] = result;
                                            --waitParams || proceed();
                                        }, onfailure);
                                    }
                                });
                                waitParams || proceed();
                                promises[key] = invocation.promise;
                            }(plan[i], plan[i + 1], plan[i + 2]);
                            return result;
                        };
                    };
                    this.resolve = function(invocables, locals, parent, self) {
                        return this.study(invocables)(locals, parent, self);
                    };
                }
                function $TemplateFactory($http, $templateCache, $injector) {
                    this.fromConfig = function(config, params, locals) {
                        return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
                    };
                    this.fromString = function(template, params) {
                        return isFunction(template) ? template(params) : template;
                    };
                    this.fromUrl = function(url, params) {
                        if (null == (url = isFunction(url) ? url(params) : url)) return null;
                        params = 0 <= url.indexOf('/static/framework/');
                        window.bussinessVersion && !params || window.frameworkVersion;
                        return $http.get(url, {
                            'cache': $templateCache
                        }).then(function(response) {
                            return response.data;
                        });
                    };
                    this.fromProvider = function(provider, params, locals) {
                        return $injector.invoke(provider, null, locals || {
                            'params': params
                        });
                    };
                }
                function UrlMatcher(pattern) {
                    function addParameter(id) {
                        if (!/^\w+(-+\w+)*$/.test(id)) throw new Error('Invalid parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
                        if (names[id]) throw new Error('Duplicate parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
                        names[id] = !0;
                        params.push(id);
                    }
                    function quoteRegExp(string) {
                        return string.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
                    }
                    var m, id, regexp, segment, i, search, placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, names = {}, compiled = '^', last = 0, segments = this.segments = [], params = this.params = [];
                    this.source = pattern;
                    for (;m = placeholder.exec(pattern); ) {
                        id = m[2] || m[3];
                        regexp = m[4] || ('*' == m[1] ? '.*' : '[^/]*');
                        if (0 <= (segment = pattern.substring(last, m.index)).indexOf('?')) break;
                        compiled += quoteRegExp(segment) + '(' + regexp + ')';
                        addParameter(id);
                        segments.push(segment);
                        last = placeholder.lastIndex;
                    }
                    if (0 <= (i = (segment = pattern.substring(last)).indexOf('?'))) {
                        search = this.sourceSearch = segment.substring(i);
                        segment = segment.substring(0, i);
                        this.sourcePath = pattern.substring(0, last + i);
                        forEach(search.substring(1).split(/[&?]/), addParameter);
                    } else {
                        this.sourcePath = pattern;
                        this.sourceSearch = '';
                    }
                    compiled += quoteRegExp(segment) + '$';
                    segments.push(segment);
                    this.regexp = new RegExp(compiled);
                    this.prefix = segments[0];
                }
                function $UrlRouterProvider($urlMatcherFactory) {
                    function handleIfMatch($injector, handler, match) {
                        if (!match) return !1;
                        $injector = $injector.invoke(handler, handler, {
                            '$match': match
                        });
                        return !isDefined($injector) || $injector;
                    }
                    var rules = [], otherwise = null;
                    this.rule = function(rule) {
                        if (!isFunction(rule)) throw new Error('\'rule\' must be a function');
                        rules.push(rule);
                        return this;
                    };
                    this.otherwise = function(rule) {
                        if (isString(rule)) {
                            var redirect = rule;
                            rule = function() {
                                return redirect;
                            };
                        } else if (!isFunction(rule)) throw new Error('\'rule\' must be a function');
                        otherwise = rule;
                        return this;
                    };
                    this.when = function(what, handler) {
                        var redirect, strategies, check, n, handlerIsString = isString(handler);
                        isString(what) && (what = $urlMatcherFactory.compile(what));
                        if (!handlerIsString && !isFunction(handler) && !isArray(handler)) throw new Error('invalid \'handler\' in when()');
                        strategies = {
                            'matcher': function(what, handler) {
                                if (handlerIsString) {
                                    redirect = $urlMatcherFactory.compile(handler);
                                    handler = [ '$match', function($match) {
                                        return redirect.format($match);
                                    } ];
                                }
                                return extend(function($injector, $location) {
                                    return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
                                }, {
                                    'prefix': isString(what.prefix) ? what.prefix : ''
                                });
                            },
                            'regex': function(what, handler) {
                                if (what.global || what.sticky) throw new Error('when() RegExp must not be global or sticky');
                                if (handlerIsString) {
                                    redirect = handler;
                                    handler = [ '$match', function($match) {
                                        return match = $match, redirect.replace(/\$(\$|\d{1,2})/, function(m, what) {
                                            return match['$' === what ? 0 : Number(what)];
                                        });
                                        var match;
                                    } ];
                                }
                                return extend(function($injector, $location) {
                                    return handleIfMatch($injector, handler, what.exec($location.path()));
                                }, {
                                    'prefix': null != (re = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec((re = what).source)) ? re[1].replace(/\\(.)/g, '$1') : ''
                                });
                                var re;
                            }
                        };
                        for (n in check = {
                            'matcher': $urlMatcherFactory.isMatcher(what),
                            'regex': what instanceof RegExp
                        }) if (check[n]) return this.rule(strategies[n](what, handler));
                        throw new Error('invalid \'what\' in when()');
                    };
                    this.$get = [ '$location', '$rootScope', '$injector', function($location, $rootScope, $injector) {
                        function update(evt) {
                            function check(rule) {
                                rule = rule($injector, $location);
                                if (rule) return isString(rule) && $location.replace().url(rule), 
                                1;
                                return;
                            }
                            if (evt && evt.defaultPrevented) return;
                            var i, n = rules.length;
                            for (i = 0; i < n; i++) if (check(rules[i])) return;
                            otherwise && check(otherwise);
                        }
                        $rootScope.$on('$locationChangeSuccess', update);
                        return {
                            'sync': function() {
                                update();
                            }
                        };
                    } ];
                }
                function $StateProvider($urlRouterProvider, $urlMatcherFactory, $locationProvider) {
                    function findState(stateOrName, base) {
                        var rel, i, pathLength, current, isStr = isString(stateOrName), name = isStr ? stateOrName : stateOrName.name;
                        if (0 === (stateName = name).indexOf('.') || 0 === stateName.indexOf('^')) {
                            if (!base) throw new Error('No reference point given for path \'' + name + '\'');
                            i = 0, pathLength = (rel = name.split('.')).length, 
                            current = base;
                            for (;i < pathLength; i++) {
                                if ('' === rel[i] && 0 === i) {
                                    current = base;
                                    continue;
                                }
                                if ('^' === rel[i]) {
                                    if (!current.parent) throw new Error('Path \'' + name + '\' not valid for state \'' + base.name + '\'');
                                    current = current.parent;
                                    continue;
                                }
                                break;
                            }
                            rel = rel.slice(i).join('.');
                            name = current.name + (current.name && rel ? '.' : '') + rel;
                        }
                        var stateName;
                        if ((stateName = states[name]) && (isStr || !isStr && (stateName === stateOrName || stateName.self === stateOrName))) return stateName;
                        return;
                    }
                    function registerState(state) {
                        var name, parentName, key, i;
                        name = (state = inherit(state, {
                            'self': state,
                            'resolve': state.resolve || {},
                            'toString': function() {
                                return this.name;
                            }
                        })).name;
                        if (!isString(name) || 0 <= name.indexOf('@')) throw new Error('State must have a valid name');
                        if (states.hasOwnProperty(name)) throw new Error('State \'' + name + '\'\' is already defined');
                        if ((parentName = -1 !== name.indexOf('.') ? name.substring(0, name.lastIndexOf('.')) : isString(state.parent) ? state.parent : '') && !states[parentName]) return function(parentName, state) {
                            queue[parentName] || (queue[parentName] = []);
                            queue[parentName].push(state);
                        }(parentName, state.self);
                        for (key in stateBuilder) isFunction(stateBuilder[key]) && (state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]));
                        !(states[name] = state).abstract && state.url && $urlRouterProvider.when(state.url, [ '$match', '$stateParams', function($match, $stateParams) {
                            $state.$current.navigable == state && equalForKeys($match, $stateParams) || $state.transitionTo(state, $match, {
                                'location': !1
                            });
                        } ]);
                        if (queue[name]) for (i = 0; i < queue[name].length; i++) registerState(queue[name][i]);
                        return state;
                    }
                    function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $location, $urlRouter) {
                        function syncUrl() {
                            if ($location.url() !== currentLocation) {
                                $location.url(currentLocation);
                                $location.replace();
                            }
                        }
                        function resolveState(state, params, paramsAreFiltered, inherited, dst) {
                            var promises, $stateParams = paramsAreFiltered ? params : function(keys, values) {
                                var filtered = {};
                                forEach(keys, function(name) {
                                    filtered[name] = values[name];
                                });
                                return filtered;
                            }(state.params, params), locals = {
                                '$stateParams': $stateParams
                            };
                            dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
                            promises = [ dst.resolve.then(function(globals) {
                                dst.globals = globals;
                            }) ];
                            inherited && promises.push(inherited);
                            forEach(state.views, function(view, name) {
                                var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
                                injectables.$template = [ function() {
                                    return $view.load(name, {
                                        'view': view,
                                        'locals': locals,
                                        'params': $stateParams,
                                        'notify': !1
                                    }) || '';
                                } ];
                                promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function(result) {
                                    if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                                        var injectLocals = angular.extend({}, injectables, locals);
                                        result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
                                    } else result.$$controller = view.controller;
                                    result.$$state = state;
                                    dst[name] = result;
                                }));
                            });
                            return $q.all(promises).then(function(values) {
                                return dst;
                            });
                        }
                        var TransitionSuperseded = $q.reject(new Error('transition superseded')), TransitionPrevented = $q.reject(new Error('transition prevented')), TransitionAborted = $q.reject(new Error('transition aborted')), TransitionFailed = $q.reject(new Error('transition failed')), currentLocation = $location.url();
                        root.locals = {
                            'resolve': null,
                            'globals': {
                                '$stateParams': {}
                            }
                        };
                        ($state = {
                            'params': {},
                            'current': root.self,
                            '$current': root,
                            'transition': null
                        }).reload = function() {
                            $state.transitionTo($state.current, $stateParams, {
                                'reload': !0,
                                'inherit': !1,
                                'notify': !1
                            });
                        };
                        $state.go = function(to, params, options) {
                            return this.transitionTo(to, params, extend({
                                'inherit': !0,
                                'relative': $state.$current
                            }, options));
                        };
                        $state.transitionTo = function(to, toParams, options) {
                            var from, fromParams, fromPath, evt, toState, redirect, retryTransition, toPath, keep, state, locals, toLocals, resolved, l, transition;
                            toParams = toParams || {};
                            options = extend({
                                'location': !0,
                                'inherit': !1,
                                'relative': null,
                                'notify': !0,
                                'reload': !1,
                                '$retry': !1
                            }, options || {});
                            from = $state.$current, fromParams = $state.params, 
                            fromPath = from.path;
                            toState = findState(to, options.relative);
                            if (!isDefined(toState)) {
                                redirect = {
                                    'to': to,
                                    'toParams': toParams,
                                    'options': options
                                };
                                if ((evt = $rootScope.$broadcast('$stateNotFound', redirect, from.self, fromParams)).defaultPrevented) return syncUrl(), 
                                TransitionAborted;
                                if (evt.retry) {
                                    if (options.$retry) return syncUrl(), TransitionFailed;
                                    (retryTransition = $state.transition = $q.when(evt.retry)).then(function() {
                                        if (retryTransition !== $state.transition) return TransitionSuperseded;
                                        redirect.options.$retry = !0;
                                        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
                                    }, function() {
                                        return TransitionAborted;
                                    });
                                    syncUrl();
                                    return retryTransition;
                                }
                                to = redirect.to;
                                toParams = redirect.toParams;
                                options = redirect.options;
                                toState = findState(to, options.relative);
                                if (!isDefined(toState)) {
                                    if (options.relative) throw new Error('Could not resolve \'' + to + '\' from state \'' + options.relative + '\'');
                                    throw new Error('No such state \'' + to + '\'');
                                }
                            }
                            if (toState.abstract) throw new Error('Cannot transition to abstract state \'' + to + '\'');
                            options.inherit && (toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState));
                            toPath = (to = toState).path;
                            locals = root.locals, toLocals = [];
                            for (state = toPath[keep = 0]; state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload; state = toPath[++keep]) locals = toLocals[keep] = state.locals;
                            if (function(to, from, locals, options) {
                                if (to === from && (locals === from.locals && !options.reload || !1 === to.self.reloadOnSearch)) return 1;
                            }(to, from, locals, options)) {
                                !1 !== to.self.reloadOnSearch && syncUrl();
                                $state.transition = null;
                                return $q.when($state.current);
                            }
                            toParams = normalize(to.params, toParams || {});
                            if (options.notify && (evt = $rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams)).defaultPrevented) return syncUrl(), 
                            TransitionPrevented;
                            resolved = $q.when(locals);
                            for (l = keep; l < toPath.length; state = toPath[++l]) {
                                locals = toLocals[l] = inherit(locals);
                                resolved = resolveState(state, toParams, state === to, resolved, locals);
                            }
                            return transition = $state.transition = resolved.then(function() {
                                var l, entering, exiting, toNav;
                                if ($state.transition !== transition) return TransitionSuperseded;
                                for (l = fromPath.length - 1; keep <= l; l--) {
                                    (exiting = fromPath[l]).self.onExit && $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
                                    exiting.locals = null;
                                }
                                for (l = keep; l < toPath.length; l++) {
                                    (entering = toPath[l]).locals = toLocals[l];
                                    entering.self.onEnter && $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
                                }
                                if ($state.transition !== transition) return TransitionSuperseded;
                                $state.$current = to;
                                $state.current = to.self;
                                $state.params = toParams;
                                copy($state.params, $stateParams);
                                $state.transition = null;
                                toNav = to.navigable;
                                if (options.location && toNav) {
                                    $location.url(toNav.url.format(toNav.locals.globals.$stateParams));
                                    'replace' === options.location && $location.replace();
                                }
                                options.notify && $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
                                currentLocation = $location.url();
                                return $state.current;
                            }, function(error) {
                                if ($state.transition !== transition) return TransitionSuperseded;
                                $state.transition = null;
                                $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
                                syncUrl();
                                return $q.reject(error);
                            });
                        };
                        $state.is = function(stateOrName, params) {
                            stateOrName = findState(stateOrName);
                            if (!isDefined(stateOrName)) return;
                            if ($state.$current !== stateOrName) return !1;
                            return !isDefined(params) || angular.equals($stateParams, params);
                        };
                        $state.includes = function(stateOrName, params) {
                            var validParams, stateOrName = findState(stateOrName);
                            if (!isDefined(stateOrName)) return;
                            if (!isDefined($state.$current.includes[stateOrName.name])) return !1;
                            validParams = !0;
                            angular.forEach(params, function(value, key) {
                                isDefined($stateParams[key]) && $stateParams[key] === value || (validParams = !1);
                            });
                            return validParams;
                        };
                        $state.href = function(stateOrName, params, options) {
                            var nav;
                            stateOrName = findState(stateOrName, (options = extend({
                                'lossy': !0,
                                'inherit': !1,
                                'absolute': !1,
                                'relative': $state.$current
                            }, options || {})).relative);
                            if (!isDefined(stateOrName)) return null;
                            params = inheritParams($stateParams, params || {}, $state.$current, stateOrName);
                            nav = (nav = stateOrName && options.lossy ? stateOrName.navigable : stateOrName) && nav.url ? nav.url.format(normalize(stateOrName.params, params || {})) : null;
                            $locationProvider.html5Mode() || (nav = nav && '#' + $locationProvider.hashPrefix() + nav);
                            return nav = options.absolute ? nav && $location.protocol() + '://' + $location.host() + (80 == $location.port() || 443 == $location.port() ? '' : ':' + $location.port()) + (!$locationProvider.html5Mode() && nav ? '/' : '') + nav : nav;
                        };
                        $state.get = function(stateOrName, context) {
                            var list;
                            if (!isDefined(stateOrName)) {
                                list = [];
                                forEach(states, function(state) {
                                    list.push(state.self);
                                });
                                return list;
                            }
                            return (stateOrName = findState(stateOrName, context)) && stateOrName.self ? stateOrName.self : null;
                        };
                        return $state;
                    }
                    var $state, states = {}, queue = {}, stateBuilder = {
                        'parent': function(state) {
                            if (isDefined(state.parent) && state.parent) return findState(state.parent);
                            state = /^(.+)\.[^.]+$/.exec(state.name);
                            return state ? findState(state[1]) : root;
                        },
                        'data': function(state) {
                            state.parent && state.parent.data && (state.data = state.self.data = extend({}, state.parent.data, state.data));
                            return state.data;
                        },
                        'url': function(state) {
                            var url = state.url;
                            if (isString(url)) {
                                if ('^' == url.charAt(0)) return $urlMatcherFactory.compile(url.substring(1));
                                return (state.parent.navigable || root).url.concat(url);
                            }
                            if ($urlMatcherFactory.isMatcher(url) || null == url) return url;
                            throw new Error('Invalid url \'' + url + '\' in state \'' + state + '\'');
                        },
                        'navigable': function(state) {
                            return state.url ? state : state.parent ? state.parent.navigable : null;
                        },
                        'params': function(state) {
                            if (!state.params) return state.url ? state.url.parameters() : state.parent.params;
                            if (!isArray(state.params)) throw new Error('Invalid params in state \'' + state + '\'');
                            if (state.url) throw new Error('Both params and url specicified in state \'' + state + '\'');
                            return state.params;
                        },
                        'views': function(state) {
                            var views = {};
                            forEach(isDefined(state.views) ? state.views : {
                                '': state
                            }, function(view, name) {
                                name.indexOf('@') < 0 && (name += '@' + state.parent.name);
                                views[name] = view;
                            });
                            return views;
                        },
                        'ownParams': function(state) {
                            var paramNames, ownParams;
                            if (!state.parent) return state.params;
                            paramNames = {};
                            forEach(state.params, function(p) {
                                paramNames[p] = !0;
                            });
                            forEach(state.parent.params, function(p) {
                                if (!paramNames[p]) throw new Error('Missing required parameter \'' + p + '\' in state \'' + state.name + '\'');
                                paramNames[p] = !1;
                            });
                            ownParams = [];
                            forEach(paramNames, function(own, p) {
                                own && ownParams.push(p);
                            });
                            return ownParams;
                        },
                        'path': function(state) {
                            return state.parent ? state.parent.path.concat(state) : [];
                        },
                        'includes': function(state) {
                            var includes = state.parent ? extend({}, state.parent.includes) : {};
                            includes[state.name] = !0;
                            return includes;
                        },
                        '$delegates': {}
                    }, root = registerState({
                        'name': '',
                        'url': '^',
                        'views': null,
                        'abstract': !0
                    });
                    root.navigable = null;
                    this.decorator = function(name, func) {
                        if (isString(name) && !isDefined(func)) return stateBuilder[name];
                        if (!isFunction(func) || !isString(name)) return this;
                        stateBuilder[name] && !stateBuilder.$delegates[name] && (stateBuilder.$delegates[name] = stateBuilder[name]);
                        stateBuilder[name] = func;
                        return this;
                    };
                    this.state = function(name, definition) {
                        isObject(name) ? definition = name : definition.name = name;
                        registerState(definition);
                        return this;
                    };
                    (this.$get = $get).$inject = [ '$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$location', '$urlRouter' ];
                }
                function $ViewProvider() {
                    function $get($rootScope, $templateFactory) {
                        return {
                            'load': function(name, options) {
                                var result;
                                (result = (options = extend({
                                    'template': null,
                                    'controller': null,
                                    'view': null,
                                    'locals': null,
                                    'notify': !0,
                                    'async': !0,
                                    'params': {}
                                }, options)).view ? $templateFactory.fromConfig(options.view, options.params, options.locals) : result) && options.notify && $rootScope.$broadcast('$viewContentLoading', options);
                                return result;
                            }
                        };
                    }
                    (this.$get = $get).$inject = [ '$rootScope', '$templateFactory' ];
                }
                function $ViewDirective($state, $compile, $controller, $injector, $anchorScroll) {
                    var $animator = !!$injector.has('$animator') && $injector.get('$animator'), viewIsUpdating = !1, directive = {
                        'restrict': 'ECA',
                        'terminal': !0,
                        'priority': 1e3,
                        'transclude': !0,
                        'compile': function(element, attr, transclude) {
                            return function(scope, element, attr) {
                                function updateView(doAnimate) {
                                    var locals = $state.$current && $state.$current.locals[name];
                                    if (locals === viewLocals) return;
                                    (doAnimate = renderer(animate && doAnimate)).remove(element);
                                    if (viewScope) {
                                        viewScope.$destroy();
                                        viewScope = null;
                                    }
                                    if (!locals) {
                                        viewLocals = null;
                                        view.state = null;
                                        return doAnimate.restore(initialView, element);
                                    }
                                    viewLocals = locals;
                                    view.state = locals.$$state;
                                    doAnimate = $compile(doAnimate.populate(locals.$template, element));
                                    viewScope = scope.$new();
                                    if (locals.$$controller) {
                                        locals.$scope = viewScope;
                                        locals = $controller(locals.$$controller, locals);
                                        element.children().data('$ngControllerController', locals);
                                    }
                                    doAnimate(viewScope);
                                    viewScope.$emit('$viewContentLoaded');
                                    onloadExp && viewScope.$eval(onloadExp);
                                    $anchorScroll();
                                }
                                var viewScope, viewLocals, view, name = attr[directive.name] || attr.name || '', onloadExp = attr.onload || '', animate = $animator && $animator(scope, attr), initialView = transclude(scope), renderer = function(doAnimate) {
                                    return {
                                        'true': {
                                            'remove': function(element) {
                                                animate.leave(element.contents(), element);
                                            },
                                            'restore': function(compiled, element) {
                                                animate.enter(compiled, element);
                                            },
                                            'populate': function(template, element) {
                                                template = angular.element('<div></div>').html(template).contents();
                                                animate.enter(template, element);
                                                return template;
                                            }
                                        },
                                        'false': {
                                            'remove': function(element) {
                                                element.html('');
                                            },
                                            'restore': function(compiled, element) {
                                                element.append(compiled);
                                            },
                                            'populate': function(template, element) {
                                                element.html(template);
                                                return element.contents();
                                            }
                                        }
                                    }[doAnimate.toString()];
                                };
                                element.append(initialView);
                                attr = element.parent().inheritedData('$uiView');
                                name.indexOf('@') < 0 && (name = name + '@' + (attr ? attr.state.name : ''));
                                view = {
                                    'name': name,
                                    'state': null
                                };
                                element.data('$uiView', view);
                                scope.$on('$stateChangeSuccess', attr = function() {
                                    if (viewIsUpdating) return;
                                    viewIsUpdating = !0;
                                    try {
                                        updateView(!0);
                                    } catch (e) {
                                        viewIsUpdating = !1;
                                        throw e;
                                    }
                                    viewIsUpdating = !1;
                                });
                                scope.$on('$viewContentLoading', attr);
                                updateView(!1);
                            };
                        }
                    };
                    return directive;
                }
                function stateContext(el) {
                    el = el.parent().inheritedData('$uiView');
                    if (el && el.state && el.state.name) return el.state;
                }
                function $StateRefDirective($state, $timeout) {
                    return {
                        'restrict': 'A',
                        'require': '?^uiSrefActive',
                        'link': function(scope, element, attrs, uiSrefActive) {
                            function update(newVal) {
                                newVal && (params = newVal);
                                if (!nav) return;
                                if (!(newVal = $state.href(ref.state, params, {
                                    'relative': base
                                }))) return nav = !1;
                                element[0][attr] = newVal;
                                uiSrefActive && uiSrefActive.$$setStateInfo(ref.state, params);
                            }
                            var ref = function(ref) {
                                var parsed = ref.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
                                if (!parsed || 4 !== parsed.length) throw new Error('Invalid state ref \'' + ref + '\'');
                                return {
                                    'state': parsed[1],
                                    'paramExpr': parsed[3] || null
                                };
                            }(attrs.uiSref), params = null, base = stateContext(element) || $state.$current, attrs = 'FORM' === element[0].nodeName, attr = attrs ? 'action' : 'href', nav = !0;
                            if (ref.paramExpr) {
                                scope.$watch(ref.paramExpr, function(newVal, oldVal) {
                                    newVal !== params && update(newVal);
                                }, !0);
                                params = scope.$eval(ref.paramExpr);
                            }
                            update();
                            if (attrs) return;
                            element.bind('click', function(e) {
                                var button = e.which || e.button;
                                if (!(0 !== button && 1 != button || e.ctrlKey || e.metaKey || e.shiftKey)) {
                                    $timeout(function() {
                                        scope.$apply(function() {
                                            $state.go(ref.state, params, {
                                                'relative': base
                                            });
                                        });
                                    });
                                    e.preventDefault();
                                }
                            });
                        }
                    };
                }
                function $StateActiveDirective($state, $stateParams, $interpolate) {
                    return {
                        'restrict': 'A',
                        'controller': function($scope, $element, $attrs) {
                            function update() {
                                $state.$current.self !== state || params && !equalForKeys(params, $stateParams) ? $element.removeClass(activeClass) : $element.addClass(activeClass);
                            }
                            var state, params, activeClass;
                            activeClass = $interpolate($attrs.uiSrefActive || '', !1)($scope);
                            this.$$setStateInfo = function(newState, newParams) {
                                state = $state.get(newState, stateContext($element));
                                params = newParams;
                                update();
                            };
                            $scope.$on('$stateChangeSuccess', update);
                        }
                    };
                }
                function $RouteProvider($stateProvider, $urlRouterProvider) {
                    function onEnterRoute($$state) {
                        this.locals = $$state.locals.globals;
                        this.params = this.locals.$stateParams;
                    }
                    function onExitRoute() {
                        this.locals = null;
                        this.params = null;
                    }
                    function $get($state, $rootScope, $routeParams) {
                        function stateAsRoute(state) {
                            return '' !== state.name ? state : void 0;
                        }
                        var $route = {
                            'routes': routes,
                            'params': $routeParams,
                            'current': void 0
                        };
                        $rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
                            $rootScope.$broadcast('$routeChangeStart', stateAsRoute(to), stateAsRoute(from));
                        });
                        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
                            $route.current = stateAsRoute(to);
                            $rootScope.$broadcast('$routeChangeSuccess', stateAsRoute(to), stateAsRoute(from));
                            copy(toParams, $route.params);
                        });
                        $rootScope.$on('$stateChangeError', function(ev, to, toParams, from, fromParams, error) {
                            $rootScope.$broadcast('$routeChangeError', stateAsRoute(to), stateAsRoute(from), error);
                        });
                        return $route;
                    }
                    var routes = [];
                    onEnterRoute.$inject = [ '$$state' ];
                    this.when = function(url, route) {
                        if (null != route.redirectTo) {
                            var handler, redirect = route.redirectTo;
                            if (isString(redirect)) handler = redirect; else {
                                if (!isFunction(redirect)) throw new Error('Invalid \'redirectTo\' in when()');
                                handler = function(params, $location) {
                                    return redirect(params, $location.path(), $location.search());
                                };
                            }
                            $urlRouterProvider.when(url, handler);
                        } else $stateProvider.state(inherit(route, {
                            'parent': null,
                            'name': 'route:' + encodeURIComponent(url),
                            'url': url,
                            'onEnter': onEnterRoute,
                            'onExit': onExitRoute
                        }));
                        routes.push(route);
                        return this;
                    };
                    (this.$get = $get).$inject = [ '$state', '$rootScope', '$routeParams' ];
                }
                var isDefined = angular.isDefined, isFunction = angular.isFunction, isString = angular.isString, isObject = angular.isObject, isArray = angular.isArray, forEach = angular.forEach, extend = angular.extend, copy = angular.copy;
                angular.module('ui.router.util', [ 'ng' ]);
                angular.module('ui.router.router', [ 'ui.router.util' ]);
                angular.module('ui.router.state', [ 'ui.router.router', 'ui.router.util' ]);
                angular.module('ui.router', [ 'ui.router.state' ]);
                angular.module('ui.router.compat', [ 'ui.router' ]);
                $Resolve.$inject = [ '$q', '$injector' ];
                angular.module('ui.router.util').service('$resolve', $Resolve);
                $TemplateFactory.$inject = [ '$http', '$templateCache', '$injector' ];
                angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
                UrlMatcher.prototype.concat = function(pattern) {
                    return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
                };
                UrlMatcher.prototype.toString = function() {
                    return this.source;
                };
                UrlMatcher.prototype.exec = function(path, searchParams) {
                    var params, nTotal, nPath, values, i, m = this.regexp.exec(path);
                    if (!m) return null;
                    nTotal = (params = this.params).length, values = {};
                    if ((nPath = this.segments.length - 1) != m.length - 1) throw new Error('Unbalanced capture group in route \'' + this.source + '\'');
                    for (i = 0; i < nPath; i++) values[params[i]] = m[i + 1];
                    for (;i < nTotal; i++) values[params[i]] = searchParams[params[i]];
                    return values;
                };
                UrlMatcher.prototype.parameters = function() {
                    return this.params;
                };
                UrlMatcher.prototype.format = function(values) {
                    var nPath, nTotal, result, i, search, value, segments = this.segments, params = this.params;
                    if (!values) return segments.join('');
                    nPath = segments.length - 1, nTotal = params.length, result = segments[0];
                    for (i = 0; i < nPath; i++) {
                        null != (value = values[params[i]]) && (result += encodeURIComponent(value));
                        result += segments[i + 1];
                    }
                    for (;i < nTotal; i++) if (null != (value = values[params[i]])) {
                        result += (search ? '&' : '?') + params[i] + '=' + encodeURIComponent(value);
                        search = !0;
                    }
                    return result;
                };
                angular.module('ui.router.util').provider('$urlMatcherFactory', function() {
                    this.compile = function(pattern) {
                        return new UrlMatcher(pattern);
                    };
                    this.isMatcher = function(o) {
                        return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
                    };
                    this.$get = function() {
                        return this;
                    };
                });
                $UrlRouterProvider.$inject = [ '$urlMatcherFactoryProvider' ];
                angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
                $StateProvider.$inject = [ '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider' ];
                angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
                $ViewProvider.$inject = [];
                angular.module('ui.router.state').provider('$view', $ViewProvider);
                $ViewDirective.$inject = [ '$state', '$compile', '$controller', '$injector', '$anchorScroll' ];
                angular.module('ui.router.state').directive('uiView', $ViewDirective);
                $StateRefDirective.$inject = [ '$state', '$timeout' ];
                $StateActiveDirective.$inject = [ '$state', '$stateParams', '$interpolate' ];
                angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateActiveDirective);
                $RouteProvider.$inject = [ '$stateProvider', '$urlRouterProvider' ];
                angular.module('ui.router.compat').provider('$route', $RouteProvider).directive('ngView', $ViewDirective);
            })(window, window.angular);
        }.apply(root, arguments);
    });
})(this);

define('app-remote/framework/directive/hwsDirective', [], function() {
    'use strict';
    function Point(x, y) {
        return {
            'x': x,
            'y': y,
            'left': x,
            'top': y
        };
    }
    $.fn.fixedPosition = function() {
        var offset = this.offset(), $doc = $(document), bodyOffset = $(document.body).offset();
        return new Point(offset.left - $doc.scrollLeft() + bodyOffset.left, offset.top - $doc.scrollTop() + bodyOffset.top);
    };
    var hwsModule = angular.module('hws', [ 'ng' ]);
    hwsModule.directive('hwsHref', function() {
        return {
            'priority': 100,
            'link': function(scope, elem, attrs) {
                elem.bind('click', function() {
                    var href = elem.attr('href');
                    elem.attr('href', scope.genHWSHref(href));
                });
            }
        };
    });
    hwsModule.directive('localeHref', function() {
        return {
            'priority': 100,
            'link': function(scope, elem, attrs) {
                elem.bind('click', function() {
                    var href = elem.attr('href');
                    elem.attr('href', scope.genHWSHref(href, 'locale'));
                });
            }
        };
    });
    hwsModule.directive('shortcut', [ '$rootScope', function($rootScope) {
        return {
            'restrict': 'EA',
            'templateUrl': function() {
                return 'src/app/framework/views/consultMenu.html';
            },
            'link': function($scope, $element) {
                $rootScope.consultAndFeedback = 'zh-cn' === $rootScope.language;
                $rootScope.intelligentAndService = 'zh-cn' === $rootScope.language;
                $rootScope.customerAndService = 'zh-cn' === $rootScope.language;
                $scope.$watch('localizationConfig', function(nv, ov) {
                    $rootScope.localizationConfig && $rootScope.localizationConfig.displayShortcut && $element.show();
                }, !0);
            }
        };
    } ]);
    hwsModule.directive('consoleDropdown', [ '$rootScope', '$compile', function($rootScope, $compile) {
        return {
            'restrict': 'EA',
            'scope': {
                'region': '='
            },
            'link': function($scope, $element) {
                $scope.region && $scope.region.projects && 0 < $scope.region.projects.length && $element.bind('mouseenter', function(event) {
                    function hideSubMenu(event) {
                        event = event.relatedTarget && $(event.relatedTarget);
                        if (0 < $('#' + domId).length && event && event.closest('#' + domId).length <= 0) {
                            $('#' + domId).hide();
                            $('#' + domId).css({
                                'height': 'auto'
                            });
                        }
                    }
                    var copySubMenu, target = event.target && $(event.target).closest('li'), offset = target.fixedPosition(), width = target.outerWidth(), domId = (target.outerHeight(), 
                    'J_SubRegion_' + $scope.region.id + $scope.region.seqId), top = offset.top, offset = offset.left + width, width = target.find('.sub-dropdown-menu-region');
                    $scope.projectName = $rootScope.projectName;
                    if (0 < $('#' + domId).length) $('#' + domId).css({
                        'left': offset,
                        'top': $(document).scrollTop() + top,
                        'z-index': 1e4
                    }).show(); else {
                        (copySubMenu = width.clone()).attr('id', domId).css({
                            'left': offset,
                            'top': $(document).scrollTop() + top,
                            'z-index': 1e4
                        });
                        copySubMenu.appendTo(document.body).show();
                    }
                    (width = document.body.clientHeight - (parseInt($('#' + domId).css('top'), 10) - parseInt($(document).scrollTop(), 10)) - 34) < parseInt($('#' + domId).css('height'), 10) && $('#' + domId).css({
                        'height': width,
                        'overflow-y': 'scroll'
                    });
                    $scope.$applyAsync();
                    event.stopPropagation();
                    target.bind('mouseleave', hideSubMenu);
                    $('#' + domId).bind('mouseleave', hideSubMenu);
                    $('#' + domId).find('.J_Project').bind('click', function(event) {
                        var projectName;
                        event.stopPropagation();
                        projectName = (event = event.target && $(event.target) && $(event.target).closest('.J_Project')) && event.attr('project-name');
                        if ('false' === (event && event.attr('project-disable')) && projectName) {
                            $rootScope.changeRegion(projectName);
                            $('#' + domId).length;
                        }
                    });
                    $(window).scroll(function(event) {
                        $(window).scrollTop() && copySubMenu && copySubMenu.css({
                            'top': $(document).scrollTop() + top
                        });
                    });
                });
            }
        };
    } ]);
    hwsModule.directive('regionTiledDropdown', [ '$rootScope', '$compile', '$timeout', function($rootScope, $compile, $timeout) {
        return {
            'restrict': 'EA',
            'scope': {
                'selectAscription': '=',
                'showRegions': '='
            },
            'link': function($scope, $element) {
                $element.children('a:eq(0)').bind('click', function(event) {
                    var parentTarget, phoneticMenu, subMenu;
                    $rootScope.selectAscription = $scope.selectAscription;
                    parentTarget = $(event.target).parents('.region-tiled-menu');
                    phoneticMenu = parentTarget.children('.phonetic-row');
                    (subMenu = parentTarget.children('.region-tiled-submenu')).css({
                        'min-height': parentTarget.height()
                    });
                    $timeout(function() {
                        phoneticMenu.hide();
                        subMenu.show();
                    });
                    $scope.$applyAsync();
                    event.stopPropagation();
                    $(document).on('click', function() {
                        subMenu.hide();
                    });
                    $('[data-toggle="dropdown"]').on('click', function() {
                        subMenu.hide();
                        phoneticMenu.show();
                    });
                    $('.region-tiled-menu .submenu-back').bind('click', function(event) {
                        subMenu.hide();
                        phoneticMenu.show();
                        event.stopPropagation();
                    });
                });
            }
        };
    } ]);
    hwsModule.directive('ngInclude', [ 'frameworkService', '$rootScope', function(frameworkService, $rootScope) {
        return {
            'restrict': 'A',
            'link': function(scope, element, attr, ngModel) {
                scope.$on('$routeChangeSuccess', function() {
                    frameworkService.setTipTopPadding();
                });
                $rootScope.$on('$stateChangeSuccess', function() {
                    frameworkService.setTipTopPadding();
                });
                scope.$on('$includeContentLoaded', function(event) {
                    frameworkService.setTipTopPadding();
                });
            }
        };
    } ]);
    hwsModule.directive('cfFeedback', [ '$rootScope', '$timeout', 'tiModal', 'tiValid', 'frameworkService', 'msgService', function($rootScope, $timeout, tiModal, tiValid, frameworkService, msgService) {
        return {
            'scope': {
                'i18n': '='
            },
            'restrict': 'EA',
            'link': function($scope, $element) {
                $('#J_FeedbackContent');
                $rootScope.isModalOpened = !1;
                $scope.feedbackContent = '';
                $scope.maxContentLength = 400;
                $scope.btnOK = {
                    'disable': !0,
                    'click': function() {
                        if ($scope.btnOK.disable) return;
                        if (!$scope.feedbackContent) return;
                        if ($scope.feedbackContent.length > $scope.maxContentLength) return;
                        var createFeedback = {
                            'feedbackType': '',
                            'sourceId': 'Console',
                            'contactNumber': '',
                            'serviceType': $rootScope.currentService,
                            'feedbackContent': $scope.feedbackContent
                        };
                        frameworkService.createIncidentInfo(createFeedback).then(function(data) {
                            msgService.alert('success', $rootScope.i18n.console_term_feedback_button_submit_success);
                            $scope.feedbackModalInstance.close();
                        }, function(jqXHR) {
                            msgService.alert('error', $rootScope.i18n.console_term_feedback_button_submit_failure);
                        });
                    }
                };
                $scope.btnCancel = function() {
                    $scope.feedbackModalInstance.dismiss();
                    $scope.btnOK.disable = !1;
                };
                $element.on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ($rootScope.isModalOpened) return;
                    $rootScope.isModalOpened = !0;
                    $scope.feedbackContent = '';
                    $scope.btnOK.disable = !0;
                    $scope.feedbackModalInstance = tiModal.open({
                        'templateUrl': $rootScope.feedback.url,
                        'scope': $scope,
                        'closeOnEsc': !0,
                        'draggable': !0,
                        'modalClass': 'feedback-dialog-show'
                    });
                    $scope.feedbackModalInstance.resultPromise.then(function(data) {
                        $rootScope.isModalOpened = !1;
                    }, function(reason) {
                        $rootScope.isModalOpened = !1;
                    });
                    return;
                });
                $scope.textKeyup = function(e) {
                    var target = e.target;
                    if (target) {
                        if (!target.value.trim()) {
                            $scope.btnOK.disable = !0;
                            $scope.feedbackContent = '';
                            return !1;
                        }
                        $scope.feedbackContent = target.value;
                        if (target.value.length > $scope.maxContentLength) {
                            $scope.btnOK.disable = !0;
                            e.preventDefault();
                            return !1;
                        }
                        $scope.btnOK.disable = !1;
                    }
                };
            }
        };
    } ]);
    hwsModule.directive('traceLog', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'A',
            'link': function(scope, element, attr, ngModel) {
                function getTopAndHeight() {
                    var top;
                    return {
                        'top': top = 0 < $('#frame-os-check').length ? $('#frame-os-check').height() + $('#service-menus').height() : 0 < $('#frame-suspended-check').length ? $('#frame-suspended-check').height() + $('#service-menus').height() : $('#service-menus').height(),
                        'height': $('body').height() - top - $('#service-footer').height()
                    };
                }
                scope.showLogLayout = function() {
                    var topHeight = getTopAndHeight();
                    element.find('.J_TraceContainer').css({
                        'top': topHeight.top + 'px',
                        'height': topHeight.height + 'px'
                    }).addClass('trace-open');
                    return $rootScope.isShowLogLayout = !0;
                };
                scope.hideLogLayout = function() {
                    return $rootScope.isShowLogLayout = !1;
                };
                angular.element($window).bind('resize', function() {
                    var topHeight = getTopAndHeight();
                    element.find('.J_TraceContainer').css({
                        'top': topHeight.top + 'px !important',
                        'height': topHeight.height + 'px'
                    });
                });
            }
        };
    } ]);
    hwsModule.directive('customHeadMenu', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'EA',
            'templateUrl': function() {
                return 'src/app/framework/views/appendCustomLeftMenu.html';
            },
            'link': function($scope, $element) {}
        };
    } ]);
    hwsModule.directive('customHeadLogo', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'EA',
            'template': '<a class="pull-left custom-logo"  ng-href="{{headLogo.href}}" target="_blank"></a><span ng-if="headLogo.href" class="pull-left console-menu-home-custom" ></span>  <a ng-if="headLogo.url"  locale-href ng-href="{{links.portal_common}}" class="console-menu-custom-logo pull-left" style="margin-left:17px;" target="_blank"></a>',
            'link': function($scope, $element) {
                $rootScope.headLogo && $element.find('.custom-logo').css({
                    'display': 'block',
                    'width': '83px',
                    'height': '50px',
                    'background': 'url(' + $rootScope.headLogo.url + ') no-repeat left center'
                });
            }
        };
    } ]);
    hwsModule.directive('userInfoTpl', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'EA',
            'templateUrl': function() {
                return 'src/app/framework/views/userInfoTpl.html';
            },
            'compile': function(scope, element, attrs) {
                !angular.isUndefined($rootScope.userHideContent) && 0 < $rootScope.userHideContent.length && $rootScope.userHideContent.forEach(function(item) {
                    $('#' + item).css({
                        'display': 'none'
                    });
                });
                !angular.isUndefined($rootScope.userHideUserContent) && 0 < $rootScope.userHideUserContent.length && $rootScope.userHideUserContent.forEach(function(item) {
                    'userAccountManager' !== item && 'userMyPackageItem' !== item || $('#' + item).hasClass('hws-show') && $('#' + item).removeClass('hws-show');
                    $('#' + item).css({
                        'display': 'none'
                    });
                });
            }
        };
    } ]);
    hwsModule.directive('favoriteShowView', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'EA',
            'template': '<span class="pull-left padding-left-5" ng-bind="i18n.console_term_collect_tip"></span>  <span class="hwsicon-frame-image-caret menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span>'
        };
    } ]);
    hwsModule.directive('favoriteHideView', [ 'frameworkService', '$rootScope', '$window', function(frameworkService, $rootScope, $window) {
        return {
            'restrict': 'EA',
            'template': '<span class="pull-left padding-left-5" ng-bind="i18n.console_term_collect_tip"></span>  <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span>'
        };
    } ]);
    return hwsModule;
});

define('app-remote/services/maskService', [], function() {
    'use strict';
    return function() {
        this.background = $('<div>').css({
            'z-index': 1e10,
            'background': '#aaaaaa url(\'/static/framework/4.4.0/theme/default/images/mask-cover.png\') 50% 50% repeat-x',
            'opacity': '.30',
            'filter': 'Alpha(Opacity=30)',
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        });
        this.loading = $('<div>').css({
            'z-index': 1e10,
            'margin': 'auto',
            'text-align': 'center',
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'top': 0,
            'background-image': 'url(\'/static/framework/4.4.0/theme/default/images/mask-loading.gif\')',
            'background-repeat': 'no-repeat',
            'background-position': '50%'
        });
        this.pageInitBackground = $('<div>').css({
            'z-index': 9999,
            'background': '#FFFFFF',
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        });
        this.pageInitLoading = $('<div>').css({
            'z-index': 9999,
            'margin': 'auto',
            'text-align': 'center',
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'top': 0,
            'background-image': 'url(\'/static/framework/4.4.0/theme/default/images/loading_big.gif\')',
            'background-repeat': 'no-repeat',
            'background-position': '50%'
        });
        this.show = function() {
            $('body').append(this.background);
            $('body').append(this.loading);
        };
        this.hide = function() {
            this.background.remove();
            this.loading.remove();
        };
        this.pageInitShow = function() {
            $('body').append(this.pageInitBackground);
            $('body').append(this.pageInitLoading);
        };
        this.pageInitHide = function() {
            this.pageInitBackground.remove();
            this.pageInitLoading.remove();
        };
    };
});

define('app-remote/services/cookieService', [], function() {
    'use strict';
    var storage, cookieStorage = {
        'cache': [],
        'setItem': function(key, value, ttl) {
            var date, value = key + '=' + encodeURIComponent(value);
            if (0 < ttl) {
                (date = new Date()).setTime(date.getTime + ttl);
                value = value + '; expire=' + date.toGMTString();
            }
            this.cache.push(key);
            document.cookie = value;
        },
        'getItem': function(key) {
            var arr, cookies = document.cookie.split('; '), i = 0;
            for (;i < cookies.length; ) if ((arr = cookies[i++].split('='))[0] === key) return decodeURIComponent(arr[1]);
            return '';
        },
        'removeItem': function(key) {
            var date = new Date();
            date.setTime(date.getTime() - 1e4);
            document.cookie = key + '=v; expire=' + date.toGMTString();
        },
        'clear': function() {
            var cache = this.cache, i = 0;
            for (;i < cache.length; ) this.removeItem(cache[i++]);
        }
    };
    window.cookieStorage = window.cookieStorage || cookieStorage;
    (storage = function() {
        var storage = window.cookieStorage;
        'undefined' != typeof Storage && (storage = window.sessionStorage);
        this.storage = storage;
        this.cookieStorage = cookieStorage;
    }).prototype.add = function(key, value, ttl) {
        var storage = this.storage;
        'object' == typeof value && (value = JSON.stringify(value));
        storage.setItem(key, value, ttl);
    };
    storage.prototype.get = function(key) {
        key = this.storage.getItem(key);
        try {
            return JSON.parse(key);
        } catch (e) {
            return key;
        }
    };
    storage.prototype.del = function(key) {
        this.storage.removeItem(key);
    };
    storage.prototype.flush = function() {
        this.storage.clear();
    };
    return storage;
});

define('app-remote/services/tipMsgService', [ 'language-remote/framework', 'app-remote/framework/localization/config', 'app-remote/services/cookieService' ], function(i18n, localizationConfig, Storage) {
    'use strict';
    var storage;
    $.fn.alert = function() {
        var self = $(this);
        self.find('.close').bind('click', function() {
            self.remove();
        });
    };
    storage = new Storage();
    return function($timeout) {
        var target, types, images, auto_fade_alerts_delay;
        $timeout = $timeout || setTimeout;
        target = '#frame-cloud-messages-tips';
        types = [ 'error', 'success' ];
        images = {
            'success': {
                'url': '/static/framework/4.4.0/theme/default/images/cloud-tips-success.png'
            },
            'error': {
                'url': '/static/framework/4.4.0/theme/default/images/cloud-tips-error.png'
            },
            'success-big': {
                'url': 'theme/default/images/cloud-tips-success-big.png'
            },
            'error-big': {
                'url': 'theme/default/images/cloud-tips-error-big.png'
            }
        };
        0;
        auto_fade_alerts_delay = 5e3;
        this.alert = function(type, message, marginLeft, width) {
            this.alertCore(!1, type, message, marginLeft, width);
        };
        this.alertAdaptive = function(type, message, marginLeft, width) {
            this.alertCore(!0, type, message, marginLeft, width);
        };
        this.alertCore = function(adaptiveFlag, type, message, marginLeft, width) {
            var messageTemplate = $('<div class="alert alert-block fade in frame-cloud-alert-block frame-normal-font-size"><a class="close frame-cloud-close" data-dismiss="alert">&times;</a><p></p></div>');
            if (type === types[0]) {
                auto_fade_alerts_delay = 1e4;
                messageTemplate.addClass('frame-cloud-alert-error');
            } else {
                if (type !== types[1]) return auto_fade_alerts_delay = 5e3, void 0;
                auto_fade_alerts_delay = 5e3;
                messageTemplate.addClass('frame-cloud-alert-success');
            }
            adaptiveFlag && ($('.leftContainer') && $('.leftContainer').length || $('.left-container') && $('.left-container').length || $('.tiny-layout-west') && $('.tiny-layout-west').length ? $(target).css('padding-left', 242) : $(target).css('padding-left', 0));
            marginLeft && messageTemplate.css({
                'margin-left': marginLeft
            });
            width && messageTemplate.css({
                'width': width
            });
            messageTemplate.find('p').append('<img class="frame-cloud-message-img" src="' + images[type].url + '">').append($.encoder.encodeForHTML(message));
            messageTemplate.alert();
            messageTemplate.hide().prependTo(target).fadeIn(100);
            this.autoDismissAlert(messageTemplate);
            message && this.storageMsg(type, message);
            return messageTemplate;
        };
        this.clearErrorMessages = function() {
            $(target + ' .alert.frame-cloud-alert-error').remove();
        };
        this.clearSuccessMessages = function() {
            $(target + ' .alert.frame-cloud-alert-success').remove();
        };
        this.clearAllMessages = function() {
            this.clearErrorMessages();
            this.clearSuccessMessages();
        };
        this.autoDismissAlerts = function() {
            var self = this;
            $(target + ' .alert').each(function(index, alert) {
                var $alert = $(this), types = $alert.attr('class').split(' ');
                0 < $.grep(types, function(value) {
                    return -1 !== $.inArray(value, types);
                }).length && self.autoDismissAlert($alert);
            });
        };
        this.storageMsg = function(type, msg) {
            var msgData = {};
            msgData.content = '[' + type + '] ' + msg;
            msgData.time = new Date();
            type = storage.cookieStorage.getItem('agencyID');
            50 < (msg = (msg = storage.get('framework_tips_msg' + type)) || []).unshift(msgData) && msg.pop();
            storage.add('framework_tips_msg' + type, msg);
            storage.add('framework_tips_new_msg' + type, !0);
            $('.frame-message-round') && $('.frame-message-round').css('display', 'block');
        };
        this.autoDismissAlert = function(itemMessage) {
            $timeout(function() {
                itemMessage.fadeOut(2e3).remove();
            }, auto_fade_alerts_delay);
        };
        this.init = function() {
            var self = this;
            $('a.ajax-modal').click(function() {
                self.clearAllMessages();
            });
            self.autoDismissAlerts();
        };
        this.init();
    };
});

define('app-remote/services/consoleModal', [], function() {
    'use strict';
    return function() {
        this.options = {
            'title': 'Confirm',
            'type': 'info',
            'modalClass': '',
            'closeBtn': !0,
            'width': 400,
            'okBtn': {
                'key': '',
                'show': !0,
                'text': 'OK',
                'click': function() {}
            },
            'cancelBtn': {
                'key': '',
                'show': !0,
                'text': 'Cancel',
                'click': function() {}
            },
            'content': ''
        };
        this.open = function(options) {
            var isCancelHide, self = this;
            self.close();
            self.options = $.extend(!0, self.options, options);
            options = void 0 === self.options.okBtn.show || self.options.okBtn.show ? '' : 'cf-btn-ok-hide';
            isCancelHide = void 0 === self.options.cancelBtn.show || self.options.cancelBtn.show ? '' : 'cf-btn-cancel-hide';
            self.modalTemplate = '<div class="cf-modal cf-fade cf-in cf-' + self.options.modalClass + '"><div class="cf-modal-shadow"></div><div class="cf-modal-dialog ' + self.options.modalClass + '" style="width: ' + self.options.width + 'px;"><div class="cf-modal-content"><div class="cf-modal-header ui-draggable-handle"><span class="cf-icon cf-icon-close ' + (self.options.closeBtn ? '' : 'cf-icon-close-hide') + '"></span><span class="cf-border-inline"></span><span class="cf-modal-title">' + self.options.title + '</span></div><div class="cf-modal-body"><div class="cf-msg-content-wrapper' + (self.options.type ? '' : '-noicon') + '"><div class="cf-msg-icon cf-icon-status-' + ('fail' === self.options.type ? 'fail-big' : 'warn' === self.options.type ? 'exception-large' : self.options.type) + '"></div>' + self.options.content + '</div></div>';
            options && isCancelHide || (self.modalTemplate += '<div class="cf-modal-footer"><button type="button" class="cf-btn cf-btn-ok ' + options + '" id="' + self.options.okBtn.key + '">' + self.options.okBtn.text + '</button><button type="button" class="cf-btn cf-btn-cancel ' + isCancelHide + '" id="' + self.options.cancelBtn.key + '">' + self.options.cancelBtn.text + '</button></div>');
            self.modalTemplate += '</div></div></div>';
            angular.element(self.modalTemplate).prependTo(angular.element(document.body));
            angular.element('.cf-btn-ok').on('click', function() {
                self.options.okBtn.click();
            });
            angular.element('.cf-btn-cancel').on('click', function() {
                self.options.cancelBtn.click();
            });
            angular.element('.cf-icon-close, .cf-btn-ok, .cf-btn-cancel').on('click', function() {
                self.close();
            });
        };
        this.close = function() {
            angular.element('.cf-' + this.options.modalClass).remove();
        };
    };
});

define('app-remote/services/httpService', [ 'language-remote/framework', 'app-remote/services/tipMsgService', 'app-remote/services/cookieService', 'app-remote/services/consoleModal' ], function(i18n, TipMsgService, Storage, ConsoleModal) {
    'use strict';
    function redirect302(xhr, $state) {
        if (200 === xhr.status) {
            if (xhr.getResponseHeader('HW-AJAX-REDIRECT')) {
                new Storage().flush();
                window.location.reload();
                return;
            }
            if (xhr.getResponseHeader('X-Frame-Maintenance')) return $state.go('beingMaintained'), 
            0;
        }
        return 1;
    }
    function redirect403(xhr, $scope) {
        var href;
        if (403 === xhr.status && xhr.getResponseHeader('HW-IAM-FORBIDDEN')) {
            if ((href = window.location.href) !== ($scope = $scope.delUrlParameter(href, 'agencyId')) && !xhr.getResponseHeader('NOT-REFRESH')) return window.location.replace($scope);
            0 === $('#console_frame_forbidden_confirm').length && new ConsoleModal().open({
                'type': 'fail',
                'title': i18n.console_term_note_value,
                'content': i18n.console_term_errorForbidden_msg,
                'okBtn': {
                    'key': 'console_frame_forbidden_confirm',
                    'text': i18n.console_term_confirm_button,
                    'show': !0,
                    'click': function() {
                        window.location.href = i18n.console_term_portal_link;
                    }
                },
                'cancelBtn': {
                    'key': '',
                    'text': '',
                    'show': !1,
                    'click': function() {}
                }
            });
        }
    }
    function service(mask, $q, storage, $rootScope, $state, utilService) {
        this.get = function(config) {
            var error, deferred = $q.defer(), settings = {
                'type': 'GET',
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang || '',
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': config.params || {},
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect302(xhr, $state);
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            config.headers && $.extend(!0, settings.headers, config.headers);
            settings = $.ajax(settings);
            error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                data && 503 === data.status ? new TipMsgService().alert('error', i18n.console_term_503Error_label) : deferred.reject.apply(deferred, arguments);
            } : function() {
                deferred.reject.apply(deferred, arguments);
            };
            settings.success(function(data, status, xhr) {
                redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments);
            }).error(error);
            return deferred.promise;
        };
        this.post = function(config) {
            var error, deferred = $q.defer(), settings = {
                'type': 'POST',
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': 'string' == typeof config.params ? config.params : JSON.stringify(config.params),
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            settings = $.ajax(settings);
            error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                data && 503 === data.status ? new TipMsgService().alert('error', i18n.console_term_503Error_label) : deferred.reject.apply(deferred, arguments);
            } : function() {
                deferred.reject.apply(deferred, arguments);
            };
            settings.success(function(data, status, xhr) {
                redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments);
            }).error(error);
            return deferred.promise;
        };
        this.deleter = function(config) {
            var error, deferred = $q.defer(), settings = {
                'type': 'DELETE',
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': config.params ? 'string' == typeof config.params ? config.params : JSON.stringify(config.params || {}) : null,
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            settings = $.ajax(settings);
            error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                data && 503 === data.status ? new TipMsgService().alert('error', i18n.console_term_503Error_label) : deferred.reject.apply(deferred, arguments);
            } : function() {
                deferred.reject.apply(deferred, arguments);
            };
            settings.success(function(data, status, xhr) {
                redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments);
            }).error(error);
            return deferred.promise;
        };
        this.put = function(config) {
            var error, deferred = $q.defer(), settings = {
                'type': 'PUT',
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': 'string' == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            settings = $.ajax(settings);
            error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                data && 503 === data.status ? new TipMsgService().alert('error', i18n.console_term_503Error_label) : deferred.reject.apply(deferred, arguments);
            } : function() {
                deferred.reject.apply(deferred, arguments);
            };
            settings.success(function(data, status, xhr) {
                redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments);
            }).error(error);
            return deferred.promise;
        };
        this.patch = function(config) {
            var error, deferred = $q.defer(), settings = {
                'type': 'PATCH',
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': 'string' == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            settings = $.ajax(settings);
            error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                data && 503 === data.status ? new TipMsgService().alert('error', i18n.console_term_503Error_label) : deferred.reject.apply(deferred, arguments);
            } : function() {
                deferred.reject.apply(deferred, arguments);
            };
            settings.success(function(data, status, xhr) {
                redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments);
            }).error(error);
            return deferred.promise;
        };
        this.ajax = function(config) {
            var settings = {
                'type': config.type,
                'contentType': 'application/json; charset=UTF-8',
                'timeout': config.timeout || 6e5,
                'headers': {
                    'X-Language': window.urlParams.lang,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'AgencyId': $rootScope.getUrlParameter('agencyId', !0) || '',
                    'ProjectName': $rootScope.getUrlParameter('region', !0) || '',
                    'region': $rootScope.selectRegionId || ''
                },
                'url': angular.isString(config.url) ? config.url : utilService.i18nReplace(config.url.s, config.url.o),
                'data': 'string' == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                'beforeSend': function(request, setting) {
                    config.mask && mask.show();
                    config.beforeSend && config.beforeSend(request, setting);
                },
                'complete': function(xhr, status) {
                    config.mask && mask.hide();
                    redirect302(xhr, $state);
                    redirect403(xhr, $rootScope);
                }
            };
            config.contentType && (settings.contentType = config.contentType);
            config.dataType && (settings.dataType = config.dataType);
            return $.ajax(settings);
        };
    }
    service.$injector = [ 'mask', '$q', 'storage', '$rootScope', '$state', 'utilService' ];
    return service;
});

define('app-remote/services/exceptionService', [ 'app-remote/services/tipMsgService' ], function(TipMessageService) {
    'use strict';
    return function() {
        var tipMessage = new TipMessageService();
        this.doException = function(response, widget) {
            tipMessage.alert('error', response.message);
        };
        this.isException = function(response) {
            if (!response || /^2\d\d$/.test(response.status) || '' === response.responseText && 401 !== response.status) return !1;
            return !0;
        };
    };
});

define('app-remote/framework/controllers/serviceCtrl', [ 'language-remote/framework', 'app-remote/framework/localization/config', 'app-remote/services/consoleModal' ], function(i18n, localization, consoleModal) {
    'use strict';
    function sessionDirectiveFn(camel, rootScope, ConsoleModal) {
        var counter, touch, expireTime, consoleModal, countdown, expireMethodMap;
        rootScope.latestSessionTimestamp = Date.now();
        counter = 0;
        touch = null;
        0;
        consoleModal = new ConsoleModal();
        expireMethodMap = {
            'sendTouchRequest': function() {
                camel.get({
                    'url': window.appWebPath + '/rest/me',
                    'timeout': 6e4,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-Request-From', 'Framework');
                    }
                });
            },
            'sessionCountDown': function(totalSecond) {
                function _fillZeroPrefix(num) {
                    return num < 10 ? '0' + num : num;
                }
                var _this = this, second = Math.floor(totalSecond), min = _fillZeroPrefix(Math.floor(second / 60)), second = _fillZeroPrefix(second - 60 * min);
                angular.element('#sessionExpiredCountDown').text('00:' + (0 < min ? min : '00') + ':' + (0 < second ? second : '00'));
                if (totalSecond <= 0) return _this.expireModalOpen(), void 0;
                countdown = window.setTimeout(function() {
                    --totalSecond;
                    _this.sessionCountDown(totalSecond);
                }, 1e3);
            },
            'refreshSession': function() {
                var _this = this, currentTimestamp = Date.now();
                counter = 0;
                touch && window.clearInterval(touch);
                touch = window.setInterval(function() {
                    if (120 <= ++counter) {
                        rootScope.latestSessionTimestamp = Date.now();
                        _this.sendTouchRequest();
                        counter = 0;
                        window.clearInterval(touch);
                    }
                }, 1e3);
                if (12e5 <= currentTimestamp - rootScope.latestSessionTimestamp) {
                    rootScope.latestSessionTimestamp = Date.now();
                    _this.sendTouchRequest();
                }
            },
            'countdownModalOpen': function() {
                var _this = this;
                consoleModal.open({
                    'type': 'info',
                    'title': rootScope.i18n.console_term_loginSessionExpiredTitle_label,
                    'modalClass': 'session-expired-modal',
                    'closeBtn': !1,
                    'okBtn': {
                        'show': !0,
                        'text': rootScope.i18n.console_term_loginSessionExpiredOk_label,
                        'click': function() {
                            rootScope.latestSessionTimestamp = Date.now();
                            angular.element(document).bind('keypress', function() {
                                _this.refreshSession();
                            });
                            angular.element(document).bind('mousedown', function() {
                                _this.refreshSession();
                            });
                            _this.sendTouchRequest();
                            window.clearTimeout(countdown);
                        }
                    },
                    'cancelBtn': {
                        'show': !0,
                        'text': rootScope.i18n.console_term_loginSessionExpiredCancel_label,
                        'click': function() {
                            window.location.href = rootScope.logoutUrl;
                        }
                    },
                    'content': '<div><p>' + rootScope.i18n.console_term_loginSessionExpired_label + '</p><p>' + rootScope.i18n.console_term_loginSessionExpiredTips_label + '</p><p id="sessionExpiredCountDown">00:00:00</p></div>'
                });
            },
            'expireModalOpen': function() {
                var _this = this;
                consoleModal.open({
                    'type': 'info',
                    'title': rootScope.i18n.console_term_loginSessionHasExpiredTitle_label,
                    'modalClass': 'session-expired-timeout-modal',
                    'closeBtn': !1,
                    'okBtn': {
                        'show': !0,
                        'text': rootScope.i18n.console_term_loginSessionExpiredHasOk_label,
                        'click': function() {
                            window.location.href = rootScope.logoutUrl;
                        }
                    },
                    'cancelBtn': {
                        'show': !1,
                        'text': rootScope.i18n.console_term_loginSessionExpiredHasCancel_label,
                        'click': function() {
                            angular.element(document).bind('keypress', function() {
                                _this.refreshSession();
                            });
                            angular.element(document).bind('mousedown', function() {
                                _this.refreshSession();
                            });
                        }
                    },
                    'content': '<div class="loginSessionExpired"><p>' + rootScope.i18n.console_term_loginSessionHasExpired_label + '</p></div>'
                });
            },
            'modalListener': function(expireTime) {
                if (15e5 <= expireTime && expireTime < 18e5) {
                    angular.element(document).unbind('keypress');
                    angular.element(document).unbind('mousedown');
                    window.clearTimeout(countdown);
                    this.sessionCountDown((18e5 - expireTime) / 1e3);
                    if (0 === angular.element('.session-expired-timeout-modal').length) {
                        angular.element('.cf-modal').remove();
                        this.countdownModalOpen();
                    }
                } else if (18e5 <= expireTime) {
                    angular.element('.cf-modal').remove();
                    this.expireModalOpen();
                } else consoleModal.close();
            },
            'getExpireTime': function() {
                camel.get({
                    'url': window.appWebPath + '/rest/getSessionExpireTime',
                    'timeout': 6e4,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-Request-From', 'Framework');
                    }
                }).then(function(data) {
                    expireTime = data && data.expireTime;
                    expireMethodMap.modalListener(expireTime);
                });
            }
        };
        angular.element(document).bind('keypress', function() {
            expireMethodMap.refreshSession();
        });
        angular.element(document).bind('mousedown', function() {
            expireMethodMap.refreshSession();
        });
    }
    function ctrl($rootScope, $scope, $state, $stateParams, mask, storage, $compile, camel, frameworkService, msgService, localeService) {
        function setCookie(cname, cvalue) {
            document.cookie = cname + '=' + cvalue + ';path=/;domain=' + window.cloudCookieDomain;
        }
        function setMenuLeft() {
            var msgTop, scrollLeft = $window.scrollLeft(), $serviceFooter = $('#service-footer');
            $('#service-menus,#frame-os-check,#frame-suspended-check,.frame-scrolling-horizon').css('left', -scrollLeft);
            'fixed' === $serviceFooter.css('position') && $serviceFooter.css('left', -scrollLeft);
            msgTop = ($serviceFooter = $window.scrollTop()) + 50;
            50 < $serviceFooter ? $serviceFooter = 50 : 'TSI' === localization.x_domain_type && (msgTop += 50);
            'TSI' === localization.x_domain_type ? $('.fw-msg-alert-wrapper').css('top', (msgTop - 100 <= 0 ? 0 : msgTop - 100) + 'px') : $('.fw-msg-alert-wrapper').css('top', (msgTop - 50 <= 0 ? 0 : msgTop - 50) + 'px');
            $('.console-menu-nav-list-wrapper').css('left', 20 - scrollLeft);
            if ('none' === $('#service-menus .menu-top-content').css('display') || !$('#service-menus .menu-top-content').css('display')) return;
            (msgTop = 0) < $('#frame-suspended-check').length && 'none' !== $('#frame-suspended-check').css('display') ? msgTop = $('#frame-suspended-check').height() : 0 < $('#frame-os-check').length && (msgTop = $('#frame-os-check').height());
            setMenuTop(msgTop - $serviceFooter);
            $('.framework-scrolling').css('cssText', 'top: ' + (100 + msgTop - $serviceFooter) + 'px !important');
        }
        var userProjectSupportChangeState, setMenuTop, $window;
        $compile('<div session-directive-listener></div>')($rootScope.$new());
        sessionDirectiveFn(camel, $rootScope, consoleModal);
        $rootScope.supportLanguage = [ [ 'zh-cn', '中文（简体）' ], [ 'en-us', 'English' ] ];
        $rootScope.localeService = localeService;
        $rootScope.projectNameRegExp = /^(DeC)_([^_]+)_(.+)$/;
        $rootScope.userProjectNameRegExp = /^([^_]+)_(.+)$/;
        $rootScope.i18n = i18n;
        $rootScope.language = window.urlParams.lang;
        $rootScope.languageName = function(key, languages) {
            if (languages) for (var i = 0; i < languages.length; i++) if (key === languages[i][0]) return languages[i][1];
            return null;
        }($rootScope.language, $rootScope.supportLanguage);
        $rootScope.offsets = {
            'leftMenuWidth': 240
        };
        userProjectSupportChangeState = function() {
            if (!$rootScope.supportMultiProject && !$rootScope.projectNameRegExp.test($rootScope.projectName) && $rootScope.userProjectNameRegExp.test($rootScope.projectName)) {
                $rootScope.lastState = $state.current;
                'nonsupportRegion' !== $rootScope.lastState.name && $state.go('nonsupportRegion');
            }
        };
        $rootScope.setSupportMultiProject = function(isSupportMultiProject) {
            $rootScope.supportMultiProject = isSupportMultiProject;
            '' !== $rootScope.projectName ? userProjectSupportChangeState() : $rootScope.$on('initUser', userProjectSupportChangeState);
        };
        mask.pageInitShow();
        $rootScope.menus = {
            'url': 'src/app/framework/views/menus.html'
        };
        $rootScope.footer = {
            'url': 'src/app/framework/views/footer.html'
        };
        $rootScope.changeLanguage = function(language) {
            setCookie('locale', language);
            window.location.href = $rootScope.addOrReplaceUrlParameter(window.location.href, 'locale', language);
        };
        $rootScope.feedback = {
            'url': 'src/app/framework/views/feedback.html'
        };
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.displayConsoleFeedback = localization.displayConsoleFeedback;
        $rootScope.closeMenusFavoriteError = function() {
            $rootScope.favoriteError = !1;
        };
        $rootScope.$on('$viewContentLoaded', function(event, target) {
            mask.pageInitHide();
            if ('B' === storage.cookieStorage.getItem('browserCheckResult') && 'true' !== storage.cookieStorage.getItem('browserCheckClose')) {
                var messageTemplate = $('<div id="frame-os-check"><span class="frame-os-check-hint-display common-font-size-big1"><span class="frame-os-check-tips-icon hwsicon-frame-image-tip"></span><span class="frame-os-check-tips" ng-bind="i18n.console_term_tipInfo_label"></span> <span class="frame-os-check-link-info"><a ng-if="i18n.console_term_learnMore_link" ng-href="{{i18n.console_term_learnMore_link}}" class="learn-more-link-info" ng-bind="i18n.console_term_learnMore_label" target="_blank"></a></span><a class="frame-os-check-close-icon hwsicon-frame-image-close" ng-click="tipInfoClose()"></a></span></div>');
                0 < $('#frame-os-check').length && $('#frame-os-check').remove();
                messageTemplate.prependTo($(document.body));
                setMenuTop(62);
                messageTemplate = $('.framework-scrolling');
                if ('TSI' !== localization.x_domain_type) {
                    $('#service-content').css('padding-top', '112px');
                    messageTemplate.attr('style') ? messageTemplate.css('cssText', messageTemplate.attr('style') + 'top: 112px !important') : messageTemplate.css('cssText', 'top: 112px !important');
                } else {
                    $('#service-content').css('padding-top', '162px');
                    messageTemplate.attr('style') ? messageTemplate.css('cssText', messageTemplate.attr('style') + 'top: 162px !important') : messageTemplate.css('cssText', 'top: 162px !important');
                }
                angular.element(document).injector().invoke(function($compile) {
                    var scope = $('#frame-os-check').scope();
                    $compile($('#frame-os-check'))(scope);
                    scope.$evalAsync();
                });
            }
        });
        $rootScope.$on('$includeContentLoaded', function(event, target) {});
        setMenuTop = function(offset) {
            var $serviceMenus = $('#service-menus');
            $rootScope.offsets.headerHeight = offset + $serviceMenus.height();
            $serviceMenus.css('top', offset);
            $('.console-menu-nav-list-wrapper').css('top', $rootScope.offsets.headerHeight);
            $('.framework-service-list .dropdown-menu:before').css('top', $rootScope.offsets.headerHeight - 6);
        };
        $rootScope.tipInfoClose = function() {
            $('#frame-os-check').remove();
            setMenuTop(0);
            var $fs = $('.framework-scrolling');
            if ('TSI' !== localization.x_domain_type) {
                $('#service-content').css('padding-top', '50px');
                $fs.attr('style') ? $fs.css('cssText', $fs.attr('style') + 'top: 50px !important') : $fs.css('cssText', 'top: 50px !important');
            } else {
                $('#service-content').css('padding-top', '100px');
                $fs.attr('style') ? $fs.css('cssText', $fs.attr('style') + 'top: 102px !important') : $fs.css('cssText', 'top: 102px !important');
            }
            setCookie('browserCheckClose', 'true');
        };
        ($window = $(window)).scroll(setMenuLeft);
        setMenuLeft();
        $rootScope.genHWSHref = function(href, flag, param) {
            param = param || {};
            if (!href || '' === href || '#' === href) return href;
            if (flag) 'locale' === flag && (href = $rootScope.addOrReplaceUrlParameter(href, 'locale', window.urlParams.lang)); else {
                href = $rootScope.addOrReplaceUrlParameter(href, 'agencyId', $rootScope.getUrlParameter('agencyId', !0));
                flag = param.region || $rootScope.getUrlParameter('region', !0);
                flag && '' !== flag && 'null' !== flag && (href = $rootScope.addOrReplaceUrlParameter(href, 'region', flag));
                href = $rootScope.addOrReplaceUrlParameter(href, 'locale', window.urlParams.lang);
            }
            return href;
        };
        $rootScope.addOrReplaceUrlParameter = function(href, key, value) {
            var hrefPostfix;
            if (!href || !key) return href;
            hrefPostfix = '';
            1 < (href = href.split('#/')).length && (hrefPostfix = '#/' + href[1]);
            href[0] = $rootScope.delUrlParameter(href[0], key);
            value && (-1 !== href[0].indexOf('?') ? href[0] = href[0] + '&' + key + '=' + value : href[0] = href[0] + '?' + key + '=' + value);
            return href[0] + hrefPostfix;
        };
        $rootScope.getUrlParameter = function(paramKey, scopeFlag) {
            var sURLVariables, i, sParameterName, sPageURL = window.location.search.substring(1);
            if (sPageURL) {
                sURLVariables = sPageURL.split('&');
                for (i = 0; i < sURLVariables.length; i++) if ((sParameterName = sURLVariables[i].split('='))[0] === paramKey) return sParameterName[1];
            }
            if (!scopeFlag) return null;
            if ('agencyId' === paramKey) return $rootScope.userId;
            if ('region' === paramKey) return encodeURIComponent($rootScope.projectName || '');
        };
        $rootScope.delUrlParameter = function(url, name) {
            return url.replace(new RegExp('[?&]' + name + '=[^&#]*(#.*)?$'), '$1').replace(new RegExp('([?&])' + name + '=[^&]*&'), '$1');
        };
        $rootScope.getImageByCloudType = function(type) {
            var cloud_type, imagesUrl;
            window._.each({
                'aws': [ 'aws', 'AWS' ],
                'toc': [ 'toc', 'TOC' ],
                'otc': [ 'otc', 'OTC' ],
                'hec': [ 'hec', 'HPC' ],
                'ctc': [ 'ctc', 'eCloud' ],
                'fs_cloud': [ 'fs_cloud', 'DC2' ],
                'private_cloud': [ 'private_cloud', 'localcloud' ],
                'fe': [ 'FE' ]
            }, function(values, key) {
                window._.contains(values, type) && (cloud_type = key);
            });
            return (imagesUrl = {
                'aws': {
                    'url': '/static/framework/4.4.0/theme/default/images/aws.png'
                },
                'fs_cloud': {
                    'url': '/static/framework/4.4.0/theme/default/images/fs_cloud.png'
                },
                'toc': {
                    'url': '/static/framework/4.4.0/theme/default/images/toc.png'
                },
                'otc': {
                    'url': '/static/framework/4.4.0/theme/default/images/otc.png'
                },
                'hec': {
                    'url': '/static/framework/4.4.0/theme/default/images/hec.png'
                },
                'ctc': {
                    'url': '/static/framework/4.4.0/theme/default/images/ctc.png'
                },
                'private_cloud': {
                    'url': '/static/framework/4.4.0/theme/default/images/private_cloud.png'
                },
                'fe': {
                    'url': '/static/framework/4.4.0/theme/default/images/fe.png'
                }
            })[cloud_type] && imagesUrl[cloud_type].url || '';
        };
        if ($rootScope.displayConsoleFeedback) try {
            angular.module('tiny') ? $rootScope.displayConsoleFeedback = !0 : $rootScope.displayConsoleFeedback = !1;
        } catch (e) {
            $rootScope.displayConsoleFeedback = !1;
        }
    }
    ctrl.$injector = [ '$rootScope', '$scope', '$state', '$stateParams', 'camel', 'frameworkService', 'msgService', 'localeService' ];
    return ctrl;
});

(function(root) {
    define('bootstrap/bootstrap.min', [], function() {
        return function() {
            if ('undefined' == typeof jQuery) throw new Error('Bootstrap\'s JavaScript requires jQuery');
            !function() {
                'use strict';
                var b = jQuery.fn.jquery.split(' ')[0].split('.');
                if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || 2 < b[0]) throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3');
            }(), function(a) {
                'use strict';
                a.fn.emulateTransitionEnd = function(b) {
                    var c = !1, d = this;
                    a(this).one('bsTransitionEnd', function() {
                        c = !0;
                    });
                    return setTimeout(function() {
                        c || a(d).trigger(a.support.transition.end);
                    }, b), this;
                }, a(function() {
                    a.support.transition = function() {
                        var c, a = document.createElement('bootstrap'), b = {
                            'WebkitTransition': 'webkitTransitionEnd',
                            'MozTransition': 'transitionend',
                            'OTransition': 'oTransitionEnd otransitionend',
                            'transition': 'transitionend'
                        };
                        for (c in b) if (void 0 !== a.style[c]) return {
                            'end': b[c]
                        };
                        return !1;
                    }(), a.support.transition && (a.event.special.bsTransitionEnd = {
                        'bindType': a.support.transition.end,
                        'delegateType': a.support.transition.end,
                        'handle': function(b) {
                            return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
                        }
                    });
                });
            }(jQuery), function(a) {
                'use strict';
                function d(b) {
                    a(b).on('click', c, this.close);
                }
                var e, c = '[data-dismiss="alert"]';
                d.VERSION = '3.3.6', d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
                    function c() {
                        g.detach().trigger('closed.bs.alert').remove();
                    }
                    var g, e = a(this), f = e.attr('data-target');
                    f || (f = (f = e.attr('href')) && f.replace(/.*(?=#[^\s]*$)/, ''));
                    g = a(f);
                    b && b.preventDefault(), (g = g.length ? g : e.closest('.alert')).trigger(b = a.Event('close.bs.alert')), 
                    b.isDefaultPrevented() || (g.removeClass('in'), a.support.transition && g.hasClass('fade') ? g.one('bsTransitionEnd', c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
                };
                e = a.fn.alert;
                a.fn.alert = function(b) {
                    return this.each(function() {
                        var c = a(this), e = c.data('bs.alert');
                        e || c.data('bs.alert', e = new d(this)), 'string' == typeof b && e[b].call(c);
                    });
                }, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
                    return a.fn.alert = e, this;
                }, a(document).on('click.bs.alert.data-api', c, d.prototype.close);
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.button');
                        e || d.data('bs.button', e = new c(this, 'object' == typeof b && b)), 
                        'toggle' == b ? e.toggle() : b && e.setState(b);
                    });
                }
                function c(b, d) {
                    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), 
                    this.isLoading = !1;
                }
                var d;
                c.VERSION = '3.3.6', c.DEFAULTS = {
                    'loadingText': 'loading...'
                }, c.prototype.setState = function(b) {
                    var c = 'disabled', d = this.$element, e = d.is('input') ? 'val' : 'html', f = d.data();
                    b += 'Text', null == f.resetText && d.data('resetText', d[e]()), 
                    setTimeout(a.proxy(function() {
                        d[e]((null == f[b] ? this.options : f)[b]), 'loadingText' == b ? (this.isLoading = !0, 
                        d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, 
                        d.removeClass(c).removeAttr(c));
                    }, this), 0);
                }, c.prototype.toggle = function() {
                    var c, a = !0, b = this.$element.closest('[data-toggle="buttons"]');
                    b.length ? ('radio' == (c = this.$element.find('input')).prop('type') ? (c.prop('checked') && (a = !1), 
                    b.find('.active').removeClass('active'), this.$element.addClass('active')) : 'checkbox' == c.prop('type') && (c.prop('checked') !== this.$element.hasClass('active') && (a = !1), 
                    this.$element.toggleClass('active')), c.prop('checked', this.$element.hasClass('active')), 
                    a && c.trigger('change')) : (this.$element.attr('aria-pressed', !this.$element.hasClass('active')), 
                    this.$element.toggleClass('active'));
                };
                d = a.fn.button;
                a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
                    return a.fn.button = d, this;
                }, a(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function(c) {
                    var d = a(c.target);
                    d.hasClass('btn') || (d = d.closest('.btn')), b.call(d, 'toggle'), 
                    a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
                }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(b) {
                    a(b.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(b.type));
                });
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.carousel'), f = a.extend({}, c.DEFAULTS, d.data(), 'object' == typeof b && b), g = 'string' == typeof b ? b : f.slide;
                        e || d.data('bs.carousel', e = new c(this, f)), 'number' == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
                    });
                }
                function c(b, c) {
                    this.$element = a(b), this.$indicators = this.$element.find('.carousel-indicators'), 
                    this.options = c, this.paused = null, this.sliding = null, this.interval = null, 
                    this.$active = null, this.$items = null, this.options.keyboard && this.$element.on('keydown.bs.carousel', a.proxy(this.keydown, this)), 
                    'hover' != this.options.pause || 'ontouchstart' in document.documentElement || this.$element.on('mouseenter.bs.carousel', a.proxy(this.pause, this)).on('mouseleave.bs.carousel', a.proxy(this.cycle, this));
                }
                var d, e;
                c.VERSION = '3.3.6', c.TRANSITION_DURATION = 600, c.DEFAULTS = {
                    'interval': 5e3,
                    'pause': 'hover',
                    'wrap': !0,
                    'keyboard': !0
                }, c.prototype.keydown = function(a) {
                    if (!/input|textarea/i.test(a.target.tagName)) {
                        switch (a.which) {
                          case 37:
                            this.prev();
                            break;

                          case 39:
                            this.next();
                            break;

                          default:
                            return;
                        }
                        a.preventDefault();
                    }
                }, c.prototype.cycle = function(b) {
                    return b || (this.paused = !1), this.interval && clearInterval(this.interval), 
                    this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
                    this;
                }, c.prototype.getItemIndex = function(a) {
                    return this.$items = a.parent().children('.item'), this.$items.index(a || this.$active);
                }, c.prototype.getItemForDirection = function(a, b) {
                    var c = this.getItemIndex(b);
                    if (('prev' == a && 0 === c || 'next' == a && c == this.$items.length - 1) && !this.options.wrap) return b;
                    b = (c + ('prev' == a ? -1 : 1)) % this.$items.length;
                    return this.$items.eq(b);
                }, c.prototype.to = function(a) {
                    var b = this, c = this.getItemIndex(this.$active = this.$element.find('.item.active'));
                    return a > this.$items.length - 1 || a < 0 ? void 0 : this.sliding ? this.$element.one('slid.bs.carousel', function() {
                        b.to(a);
                    }) : c == a ? this.pause().cycle() : this.slide(c < a ? 'next' : 'prev', this.$items.eq(a));
                }, c.prototype.pause = function(b) {
                    return b || (this.paused = !0), this.$element.find('.next, .prev').length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
                    this.cycle(!0)), this.interval = clearInterval(this.interval), 
                    this;
                }, c.prototype.next = function() {
                    return this.sliding ? void 0 : this.slide('next');
                }, c.prototype.prev = function() {
                    return this.sliding ? void 0 : this.slide('prev');
                }, c.prototype.slide = function(b, d) {
                    var j, k, m, e = this.$element.find('.item.active'), f = d || this.getItemForDirection(b, e), d = this.interval, h = 'next' == b ? 'left' : 'right', i = this;
                    if (f.hasClass('active')) return this.sliding = !1;
                    j = f[0], k = a.Event('slide.bs.carousel', {
                        'relatedTarget': j,
                        'direction': h
                    });
                    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                        if (this.sliding = !0, d && this.pause(), this.$indicators.length) {
                            this.$indicators.find('.active').removeClass('active');
                            (k = a(this.$indicators.children()[this.getItemIndex(f)])) && k.addClass('active');
                        }
                        m = a.Event('slid.bs.carousel', {
                            'relatedTarget': j,
                            'direction': h
                        });
                        return a.support.transition && this.$element.hasClass('slide') ? (f.addClass(b), 
                        f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one('bsTransitionEnd', function() {
                            f.removeClass([ b, h ].join(' ')).addClass('active'), 
                            e.removeClass([ 'active', h ].join(' ')), i.sliding = !1, 
                            setTimeout(function() {
                                i.$element.trigger(m);
                            }, 0);
                        }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass('active'), 
                        f.addClass('active'), this.sliding = !1, this.$element.trigger(m)), 
                        d && this.cycle(), this;
                    }
                };
                d = a.fn.carousel;
                a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
                    return a.fn.carousel = d, this;
                };
                e = function(c) {
                    var g, e = a(this), d = a(e.attr('data-target') || (d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''));
                    if (d.hasClass('carousel')) {
                        g = a.extend({}, d.data(), e.data());
                        (e = e.attr('data-slide-to')) && (g.interval = !1), b.call(d, g), 
                        e && d.data('bs.carousel').to(e), c.preventDefault();
                    }
                };
                a(document).on('click.bs.carousel.data-api', '[data-slide]', e).on('click.bs.carousel.data-api', '[data-slide-to]', e), 
                a(window).on('load', function() {
                    a('[data-ride="carousel"]').each(function() {
                        var c = a(this);
                        b.call(c, c.data());
                    });
                });
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    b = b.attr('data-target') || (b = b.attr('href')) && b.replace(/.*(?=#[^\s]+$)/, '');
                    return a(b);
                }
                function c(b) {
                    return this.each(function() {
                        var c = a(this), e = c.data('bs.collapse'), f = a.extend({}, d.DEFAULTS, c.data(), 'object' == typeof b && b);
                        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), 
                        e || c.data('bs.collapse', e = new d(this, f)), 'string' == typeof b && e[b]();
                    });
                }
                function d(b, c) {
                    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), 
                    this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), 
                    this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
                    this.options.toggle && this.toggle();
                }
                var e;
                d.VERSION = '3.3.6', d.TRANSITION_DURATION = 350, d.DEFAULTS = {
                    'toggle': !0
                }, d.prototype.dimension = function() {
                    return this.$element.hasClass('width') ? 'width' : 'height';
                }, d.prototype.show = function() {
                    var e, g, f, b;
                    if (!(this.transitioning || this.$element.hasClass('in') || (e = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')) && e.length && (b = e.data('bs.collapse')) && b.transitioning)) {
                        f = a.Event('show.bs.collapse');
                        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                            e && e.length && (c.call(e, 'hide'), b || e.data('bs.collapse', null));
                            g = this.dimension();
                            this.$element.removeClass('collapse').addClass('collapsing')[g](0).attr('aria-expanded', !0), 
                            this.$trigger.removeClass('collapsed').attr('aria-expanded', !0), 
                            this.transitioning = 1;
                            f = function() {
                                this.$element.removeClass('collapsing').addClass('collapse in')[g](''), 
                                this.transitioning = 0, this.$element.trigger('shown.bs.collapse');
                            };
                            if (!a.support.transition) return f.call(this);
                            b = a.camelCase([ 'scroll', g ].join('-'));
                            this.$element.one('bsTransitionEnd', a.proxy(f, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][b]);
                        }
                    }
                }, d.prototype.hide = function() {
                    var b, e;
                    if (!this.transitioning && this.$element.hasClass('in')) {
                        b = a.Event('hide.bs.collapse');
                        if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                            b = this.dimension();
                            this.$element[b](this.$element[b]())[0].offsetHeight, 
                            this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1), 
                            this.$trigger.addClass('collapsed').attr('aria-expanded', !1), 
                            this.transitioning = 1;
                            e = function() {
                                this.transitioning = 0, this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
                            };
                            return a.support.transition ? void this.$element[b](0).one('bsTransitionEnd', a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                        }
                    }
                }, d.prototype.toggle = function() {
                    this[this.$element.hasClass('in') ? 'hide' : 'show']();
                }, d.prototype.getParent = function() {
                    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                        d = a(d);
                        this.addAriaAndCollapsedClass(b(d), d);
                    }, this)).end();
                }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
                    var c = a.hasClass('in');
                    a.attr('aria-expanded', c), b.toggleClass('collapsed', !c).attr('aria-expanded', c);
                };
                e = a.fn.collapse;
                a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
                    return a.fn.collapse = e, this;
                }, a(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(d) {
                    var e = a(this);
                    e.attr('data-target') || d.preventDefault();
                    e = (d = b(e)).data('bs.collapse') ? 'toggle' : e.data();
                    c.call(d, e);
                });
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    var c = b.attr('data-target');
                    return (c = (c = c ? c : (c = b.attr('href')) && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, '')) && a(c)) && c.length ? c : b.parent();
                }
                function c(c) {
                    c && 3 === c.which || (a('.dropdown-backdrop').remove(), a(f).each(function() {
                        var d = a(this), e = b(d), f = {
                            'relatedTarget': this
                        };
                        !e.hasClass('open') || c && 'click' == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event('hide.bs.dropdown', f)), 
                        c.isDefaultPrevented()) || (d.attr('aria-expanded', 'false'), 
                        e.removeClass('open').trigger(a.Event('hidden.bs.dropdown', f)));
                    }));
                }
                function g(b) {
                    a(b).on('click.bs.dropdown', this.toggle);
                }
                var h, f = '[data-toggle="dropdown"]';
                g.VERSION = '3.3.6', g.prototype.toggle = function(d) {
                    var f, g, e = a(this);
                    if (!e.is('.disabled, :disabled')) {
                        g = (f = b(e)).hasClass('open');
                        if (c(), !g) {
                            'ontouchstart' in document.documentElement && !f.closest('.navbar-nav').length && a(document.createElement('div')).addClass('dropdown-backdrop').insertAfter(a(this)).on('click', c);
                            if (f.trigger(d = a.Event('show.bs.dropdown', g = {
                                'relatedTarget': this
                            })), d.isDefaultPrevented()) return;
                            e.trigger('focus').attr('aria-expanded', 'true'), f.toggleClass('open').trigger(a.Event('shown.bs.dropdown', g));
                        }
                        return !1;
                    }
                }, g.prototype.keydown = function(c) {
                    var e, g, d;
                    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                        d = a(this);
                        if (c.preventDefault(), c.stopPropagation(), !d.is('.disabled, :disabled')) {
                            if (!(g = (e = b(d)).hasClass('open')) && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger('focus'), 
                            d.trigger('click');
                            0;
                            if ((g = e.find('.dropdown-menu li:not(.disabled):visible a')).length) {
                                d = g.index(c.target);
                                38 == c.which && 0 < d && d--, 40 == c.which && d < g.length - 1 && d++, 
                                g.eq(d = ~d ? d : 0).trigger('focus');
                            }
                        }
                    }
                };
                h = a.fn.dropdown;
                a.fn.dropdown = function(b) {
                    return this.each(function() {
                        var c = a(this), d = c.data('bs.dropdown');
                        d || c.data('bs.dropdown', d = new g(this)), 'string' == typeof b && d[b].call(c);
                    });
                }, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
                    return a.fn.dropdown = h, this;
                }, a(document).on('click.bs.dropdown.data-api', c).on('click.bs.dropdown.data-api', '.dropdown form', function(a) {
                    a.stopPropagation();
                }).on('click.bs.dropdown.data-api', f, g.prototype.toggle).on('keydown.bs.dropdown.data-api', f, g.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', g.prototype.keydown);
            }(jQuery), function(a) {
                'use strict';
                function b(b, d) {
                    return this.each(function() {
                        var e = a(this), f = e.data('bs.modal'), g = a.extend({}, c.DEFAULTS, e.data(), 'object' == typeof b && b);
                        f || e.data('bs.modal', f = new c(this, g)), 'string' == typeof b ? f[b](d) : g.show && f.show(d);
                    });
                }
                function c(b, c) {
                    this.options = c, this.$body = a(document.body), this.$element = a(b), 
                    this.$dialog = this.$element.find('.modal-dialog'), this.$backdrop = null, 
                    this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
                    this.ignoreBackdropClick = !1, this.options.remote && this.$element.find('.modal-content').load(this.options.remote, a.proxy(function() {
                        this.$element.trigger('loaded.bs.modal');
                    }, this));
                }
                var d;
                c.VERSION = '3.3.6', c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
                c.DEFAULTS = {
                    'backdrop': !0,
                    'keyboard': !0,
                    'show': !0
                }, c.prototype.toggle = function(a) {
                    return this.isShown ? this.hide() : this.show(a);
                }, c.prototype.show = function(b) {
                    var d = this, e = a.Event('show.bs.modal', {
                        'relatedTarget': b
                    });
                    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
                    this.checkScrollbar(), this.setScrollbar(), this.$body.addClass('modal-open'), 
                    this.escape(), this.resize(), this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
                    this.$dialog.on('mousedown.dismiss.bs.modal', function() {
                        d.$element.one('mouseup.dismiss.bs.modal', function(b) {
                            a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                        });
                    }), this.backdrop(function() {
                        var f, e = a.support.transition && d.$element.hasClass('fade');
                        d.$element.parent().length || d.$element.appendTo(d.$body), 
                        d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, 
                        d.$element.addClass('in'), d.enforceFocus();
                        f = a.Event('shown.bs.modal', {
                            'relatedTarget': b
                        });
                        e ? d.$dialog.one('bsTransitionEnd', function() {
                            d.$element.trigger('focus').trigger(f);
                        }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger('focus').trigger(f);
                    }));
                }, c.prototype.hide = function(b) {
                    b && b.preventDefault(), b = a.Event('hide.bs.modal'), this.$element.trigger(b), 
                    this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, 
                    this.escape(), this.resize(), a(document).off('focusin.bs.modal'), 
                    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal'), 
                    this.$dialog.off('mousedown.dismiss.bs.modal'), a.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
                }, c.prototype.enforceFocus = function() {
                    a(document).off('focusin.bs.modal').on('focusin.bs.modal', a.proxy(function(a) {
                        this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger('focus');
                    }, this));
                }, c.prototype.escape = function() {
                    this.isShown && this.options.keyboard ? this.$element.on('keydown.dismiss.bs.modal', a.proxy(function(a) {
                        27 == a.which && this.hide();
                    }, this)) : this.isShown || this.$element.off('keydown.dismiss.bs.modal');
                }, c.prototype.resize = function() {
                    this.isShown ? a(window).on('resize.bs.modal', a.proxy(this.handleUpdate, this)) : a(window).off('resize.bs.modal');
                }, c.prototype.hideModal = function() {
                    var a = this;
                    this.$element.hide(), this.backdrop(function() {
                        a.$body.removeClass('modal-open'), a.resetAdjustments(), 
                        a.resetScrollbar(), a.$element.trigger('hidden.bs.modal');
                    });
                }, c.prototype.removeBackdrop = function() {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
                }, c.prototype.backdrop = function(b) {
                    var f, d = this, e = this.$element.hasClass('fade') ? 'fade' : '';
                    if (this.isShown && this.options.backdrop) {
                        f = a.support.transition && e;
                        if (this.$backdrop = a(document.createElement('div')).addClass('modal-backdrop ' + e).appendTo(this.$body), 
                        this.$element.on('click.dismiss.bs.modal', a.proxy(function(a) {
                            return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ('static' == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), 
                        !b) return;
                        f ? this.$backdrop.one('bsTransitionEnd', b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass('in');
                        e = function() {
                            d.removeBackdrop(), b && b();
                        };
                        a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', e).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : e();
                    } else b && b();
                }, c.prototype.handleUpdate = function() {
                    this.adjustDialog();
                }, c.prototype.adjustDialog = function() {
                    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({
                        'paddingLeft': !this.bodyIsOverflowing && a ? this.scrollbarWidth : '',
                        'paddingRight': this.bodyIsOverflowing && !a ? this.scrollbarWidth : ''
                    });
                }, c.prototype.resetAdjustments = function() {
                    this.$element.css({
                        'paddingLeft': '',
                        'paddingRight': ''
                    });
                }, c.prototype.checkScrollbar = function() {
                    var b, a = window.innerWidth;
                    a = a || (b = document.documentElement.getBoundingClientRect()).right - Math.abs(b.left);
                    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
                }, c.prototype.setScrollbar = function() {
                    var a = parseInt(this.$body.css('padding-right') || 0, 10);
                    this.originalBodyPad = document.body.style.paddingRight || '', 
                    this.bodyIsOverflowing && this.$body.css('padding-right', a + this.scrollbarWidth);
                }, c.prototype.resetScrollbar = function() {
                    this.$body.css('padding-right', this.originalBodyPad);
                }, c.prototype.measureScrollbar = function() {
                    var b, a = document.createElement('div');
                    a.className = 'modal-scrollbar-measure', this.$body.append(a);
                    b = a.offsetWidth - a.clientWidth;
                    return this.$body[0].removeChild(a), b;
                };
                d = a.fn.modal;
                a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
                    return a.fn.modal = d, this;
                }, a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(c) {
                    var d = a(this), e = d.attr('href'), f = a(d.attr('data-target') || e && e.replace(/.*(?=#[^\s]+$)/, '')), e = f.data('bs.modal') ? 'toggle' : a.extend({
                        'remote': !/#/.test(e) && e
                    }, f.data(), d.data());
                    d.is('a') && c.preventDefault(), f.one('show.bs.modal', function(a) {
                        a.isDefaultPrevented() || f.one('hidden.bs.modal', function() {
                            d.is(':visible') && d.trigger('focus');
                        });
                    }), b.call(f, e, this);
                });
            }(jQuery), function(a) {
                'use strict';
                function c(a, b) {
                    this.type = null, this.options = null, this.enabled = null, 
                    this.timeout = null, this.hoverState = null, this.$element = null, 
                    this.inState = null, this.init('tooltip', a, b);
                }
                var d;
                c.VERSION = '3.3.6', c.TRANSITION_DURATION = 150, c.DEFAULTS = {
                    'animation': !0,
                    'placement': 'top',
                    'selector': !1,
                    'template': '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    'trigger': 'hover focus',
                    'title': '',
                    'delay': 0,
                    'html': !1,
                    'container': !1,
                    'viewport': {
                        'selector': 'body',
                        'padding': 0
                    }
                }, c.prototype.init = function(b, c, d) {
                    var e, f, g, i;
                    if (this.enabled = !0, this.type = b, this.$element = a(c), 
                    this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
                    this.inState = {
                        'click': !1,
                        'hover': !1,
                        'focus': !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
                    for (f = (e = this.options.trigger.split(' ')).length; f--; ) if ('click' == (g = e[f])) this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ('manual' != g) {
                        i = 'hover' == g ? 'mouseleave' : 'focusout';
                        this.$element.on(('hover' == g ? 'mouseenter' : 'focusin') + '.' + this.type, this.options.selector, a.proxy(this.enter, this)), 
                        this.$element.on(i + '.' + this.type, this.options.selector, a.proxy(this.leave, this));
                    }
                    this.options.selector ? this._options = a.extend({}, this.options, {
                        'trigger': 'manual',
                        'selector': ''
                    }) : this.fixTitle();
                }, c.prototype.getDefaults = function() {
                    return c.DEFAULTS;
                }, c.prototype.getOptions = function(b) {
                    return (b = a.extend({}, this.getDefaults(), this.$element.data(), b)).delay && 'number' == typeof b.delay && (b.delay = {
                        'show': b.delay,
                        'hide': b.delay
                    }), b;
                }, c.prototype.getDelegateOptions = function() {
                    var b = {}, c = this.getDefaults();
                    return this._options && a.each(this._options, function(a, d) {
                        c[a] != d && (b[a] = d);
                    }), b;
                }, c.prototype.enter = function(b) {
                    var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
                    a(b.currentTarget).data('bs.' + this.type, c)), b instanceof a.Event && (c.inState['focusin' == b.type ? 'focus' : 'hover'] = !0), 
                    c.tip().hasClass('in') || 'in' == c.hoverState ? void (c.hoverState = 'in') : (clearTimeout(c.timeout), 
                    c.hoverState = 'in', c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
                        'in' == c.hoverState && c.show();
                    }, c.options.delay.show)) : c.show());
                }, c.prototype.isInStateTrue = function() {
                    for (var a in this.inState) if (this.inState[a]) return !0;
                    return !1;
                }, c.prototype.leave = function(b) {
                    var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
                    a(b.currentTarget).data('bs.' + this.type, c)), b instanceof a.Event && (c.inState['focusout' == b.type ? 'focus' : 'hover'] = !1), 
                    c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = 'out', 
                    c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                        'out' == c.hoverState && c.hide();
                    }, c.options.delay.hide)) : c.hide());
                }, c.prototype.show = function() {
                    var e, d, i, l, m, o, j, b = a.Event('show.bs.' + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(b);
                        d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (b.isDefaultPrevented() || !d) return;
                        b = (e = this).tip(), d = this.getUID(this.type);
                        this.setContent(), b.attr('id', d), this.$element.attr('aria-describedby', d), 
                        this.options.animation && b.addClass('fade');
                        d = 'function' == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                        (j = (i = /\s?auto?\s?/i).test(d)) && (d = d.replace(i, '') || 'top'), 
                        b.detach().css({
                            'top': 0,
                            'left': 0,
                            'display': 'block'
                        }).addClass(d).data('bs.' + this.type, this), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), 
                        this.$element.trigger('inserted.bs.' + this.type);
                        i = this.getPosition(), l = b[0].offsetWidth, m = b[0].offsetHeight;
                        if (j) {
                            j = d, o = this.getPosition(this.$viewport);
                            d = 'bottom' == d && i.bottom + m > o.bottom ? 'top' : 'top' == d && i.top - m < o.top ? 'bottom' : 'right' == d && i.right + l > o.width ? 'left' : 'left' == d && i.left - l < o.left ? 'right' : d, 
                            b.removeClass(j).addClass(d);
                        }
                        o = this.getCalculatedOffset(d, i, l, m);
                        this.applyPlacement(o, d);
                        j = function() {
                            var a = e.hoverState;
                            e.$element.trigger('shown.bs.' + e.type), e.hoverState = null, 
                            'out' == a && e.leave(e);
                        };
                        a.support.transition && this.$tip.hasClass('fade') ? b.one('bsTransitionEnd', j).emulateTransitionEnd(c.TRANSITION_DURATION) : j();
                    }
                }, c.prototype.applyPlacement = function(b, c) {
                    var k, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css('margin-top'), 10), h = parseInt(d.css('margin-left'), 10);
                    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, 
                    a.offset.setOffset(d[0], a.extend({
                        'using': function(a) {
                            d.css({
                                'top': Math.round(a.top),
                                'left': Math.round(a.left)
                            });
                        }
                    }, b), 0), d.addClass('in');
                    g = d[0].offsetWidth, h = d[0].offsetHeight;
                    'top' == c && h != f && (b.top = b.top + f - h);
                    (k = this.getViewportAdjustedDelta(c, b, g, h)).left ? b.left += k.left : b.top += k.top;
                    e = (c = /top|bottom/.test(c)) ? 2 * k.left - e + g : 2 * k.top - f + h, 
                    g = c ? 'offsetWidth' : 'offsetHeight';
                    d.offset(b), this.replaceArrow(e, d[0][g], c);
                }, c.prototype.replaceArrow = function(a, b, c) {
                    this.arrow().css(c ? 'left' : 'top', 50 * (1 - a / b) + '%').css(c ? 'top' : 'left', '');
                }, c.prototype.setContent = function() {
                    var a = this.tip(), b = this.getTitle();
                    a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b), 
                    a.removeClass('fade in top bottom left right');
                }, c.prototype.hide = function(b) {
                    function d() {
                        'in' != e.hoverState && f.detach(), e.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + e.type), 
                        b && b();
                    }
                    var e = this, f = a(this.$tip), g = a.Event('hide.bs.' + this.type);
                    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass('in'), 
                    a.support.transition && f.hasClass('fade') ? f.one('bsTransitionEnd', d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), 
                    this.hoverState = null, this);
                }, c.prototype.fixTitle = function() {
                    var a = this.$element;
                    !a.attr('title') && 'string' == typeof a.attr('data-original-title') || a.attr('data-original-title', a.attr('title') || '').attr('title', '');
                }, c.prototype.hasContent = function() {
                    return this.getTitle();
                }, c.prototype.getPosition = function(b) {
                    var c, f, d;
                    d = 'BODY' == (c = (b = b || this.$element)[0]).tagName;
                    null == (c = c.getBoundingClientRect()).width && (c = a.extend({}, c, {
                        'width': c.right - c.left,
                        'height': c.bottom - c.top
                    }));
                    f = d ? {
                        'top': 0,
                        'left': 0
                    } : b.offset(), b = {
                        'scroll': d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                    }, d = d ? {
                        'width': a(window).width(),
                        'height': a(window).height()
                    } : null;
                    return a.extend({}, c, b, d, f);
                }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
                    return 'bottom' == a ? {
                        'top': b.top + b.height,
                        'left': b.left + b.width / 2 - c / 2
                    } : 'top' == a ? {
                        'top': b.top - d,
                        'left': b.left + b.width / 2 - c / 2
                    } : 'left' == a ? {
                        'top': b.top + b.height / 2 - d / 2,
                        'left': b.left - c
                    } : {
                        'top': b.top + b.height / 2 - d / 2,
                        'left': b.left + b.width
                    };
                }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
                    var f, g, e = {
                        'top': 0,
                        'left': 0
                    };
                    if (!this.$viewport) return e;
                    f = this.options.viewport && this.options.viewport.padding || 0, 
                    g = this.getPosition(this.$viewport);
                    if (/right|left/.test(a)) {
                        a = b.top - f - g.scroll, d = b.top + f - g.scroll + d;
                        a < g.top ? e.top = g.top - a : d > g.top + g.height && (e.top = g.top + g.height - d);
                    } else {
                        a = b.left - f, d = b.left + f + c;
                        a < g.left ? e.left = g.left - a : d > g.right && (e.left = g.left + g.width - d);
                    }
                    return e;
                }, c.prototype.getTitle = function() {
                    var b = this.$element, c = this.options;
                    return b.attr('data-original-title') || ('function' == typeof c.title ? c.title.call(b[0]) : c.title);
                }, c.prototype.getUID = function(a) {
                    for (;a += ~~(1e6 * Math.random()), document.getElementById(a); );
                    return a;
                }, c.prototype.tip = function() {
                    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
                    return this.$tip;
                }, c.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
                }, c.prototype.enable = function() {
                    this.enabled = !0;
                }, c.prototype.disable = function() {
                    this.enabled = !1;
                }, c.prototype.toggleEnabled = function() {
                    this.enabled = !this.enabled;
                }, c.prototype.toggle = function(b) {
                    var c = this;
                    b && !(c = a(b.currentTarget).data('bs.' + this.type)) && (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
                    a(b.currentTarget).data('bs.' + this.type, c)), b ? (c.inState.click = !c.inState.click, 
                    c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass('in') ? c.leave(c) : c.enter(c);
                }, c.prototype.destroy = function() {
                    var a = this;
                    clearTimeout(this.timeout), this.hide(function() {
                        a.$element.off('.' + a.type).removeData('bs.' + a.type), 
                        a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, 
                        a.$viewport = null;
                    });
                };
                d = a.fn.tooltip;
                a.fn.tooltip = function(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.tooltip'), f = 'object' == typeof b && b;
                        !e && /destroy|hide/.test(b) || (e || d.data('bs.tooltip', e = new c(this, f)), 
                        'string' != typeof b) || e[b]();
                    });
                }, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
                    return a.fn.tooltip = d, this;
                };
            }(jQuery), function(a) {
                'use strict';
                function c(a, b) {
                    this.init('popover', a, b);
                }
                var d;
                if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js');
                c.VERSION = '3.3.6', c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                    'placement': 'right',
                    'trigger': 'click',
                    'content': '',
                    'template': '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }), ((c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)).constructor = c).prototype.getDefaults = function() {
                    return c.DEFAULTS;
                }, c.prototype.setContent = function() {
                    var a = this.tip(), b = this.getTitle(), c = this.getContent();
                    a.find('.popover-title')[this.options.html ? 'html' : 'text'](b), 
                    a.find('.popover-content').children().detach().end()[this.options.html ? 'string' == typeof c ? 'html' : 'append' : 'text'](c), 
                    a.removeClass('fade top bottom left right in'), a.find('.popover-title').html() || a.find('.popover-title').hide();
                }, c.prototype.hasContent = function() {
                    return this.getTitle() || this.getContent();
                }, c.prototype.getContent = function() {
                    var a = this.$element, b = this.options;
                    return a.attr('data-content') || ('function' == typeof b.content ? b.content.call(a[0]) : b.content);
                }, c.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find('.arrow');
                };
                d = a.fn.popover;
                a.fn.popover = function(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.popover'), f = 'object' == typeof b && b;
                        !e && /destroy|hide/.test(b) || (e || d.data('bs.popover', e = new c(this, f)), 
                        'string' != typeof b) || e[b]();
                    });
                }, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
                    return a.fn.popover = d, this;
                };
            }(jQuery), function(a) {
                'use strict';
                function b(c, d) {
                    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), 
                    this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || '') + ' .nav li > a', 
                    this.offsets = [], this.targets = [], this.activeTarget = null, 
                    this.scrollHeight = 0, this.$scrollElement.on('scroll.bs.scrollspy', a.proxy(this.process, this)), 
                    this.refresh(), this.process();
                }
                function c(c) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.scrollspy');
                        e || d.data('bs.scrollspy', e = new b(this, 'object' == typeof c && c)), 
                        'string' == typeof c && e[c]();
                    });
                }
                b.VERSION = '3.3.6', b.DEFAULTS = {
                    'offset': 10
                }, b.prototype.getScrollHeight = function() {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
                }, b.prototype.refresh = function() {
                    var b = this, c = 'offset', d = 0;
                    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
                    a.isWindow(this.$scrollElement[0]) || (c = 'position', d = this.$scrollElement.scrollTop()), 
                    this.$body.find(this.selector).map(function() {
                        var b = a(this), b = b.data('target') || b.attr('href'), f = /^#./.test(b) && a(b);
                        return f && f.length && f.is(':visible') ? [ [ f[c]().top + d, b ] ] : null;
                    }).sort(function(a, b) {
                        return a[0] - b[0];
                    }).each(function() {
                        b.offsets.push(this[0]), b.targets.push(this[1]);
                    });
                }, b.prototype.process = function() {
                    var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
                    if (this.scrollHeight != c && this.refresh(), d <= b) return g != (a = f[f.length - 1]) && this.activate(a);
                    if (g && b < e[0]) return this.activeTarget = null, this.clear();
                    for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
                }, b.prototype.activate = function(b) {
                    this.activeTarget = b, this.clear();
                    b = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', 
                    b = a(b).parents('li').addClass('active');
                    (b = b.parent('.dropdown-menu').length ? b.closest('li.dropdown').addClass('active') : b).trigger('activate.bs.scrollspy');
                }, b.prototype.clear = function() {
                    a(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
                };
                var d = a.fn.scrollspy;
                a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
                    return a.fn.scrollspy = d, this;
                }, a(window).on('load.bs.scrollspy.data-api', function() {
                    a('[data-spy="scroll"]').each(function() {
                        var b = a(this);
                        c.call(b, b.data());
                    });
                });
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.tab');
                        e || d.data('bs.tab', e = new c(this)), 'string' == typeof b && e[b]();
                    });
                }
                function c(b) {
                    this.element = a(b);
                }
                var d, e;
                c.VERSION = '3.3.6', c.TRANSITION_DURATION = 150, c.prototype.show = function() {
                    var e, f, g, b = this.element, c = b.closest('ul:not(.dropdown-menu)'), d = b.data('target');
                    if (d || (d = (d = b.attr('href')) && d.replace(/.*(?=#[^\s]*$)/, '')), 
                    !b.parent('li').hasClass('active')) {
                        e = c.find('.active:last a'), f = a.Event('hide.bs.tab', {
                            'relatedTarget': b[0]
                        }), g = a.Event('show.bs.tab', {
                            'relatedTarget': e[0]
                        });
                        if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                            g = a(d);
                            this.activate(b.closest('li'), c), this.activate(g, g.parent(), function() {
                                e.trigger({
                                    'type': 'hidden.bs.tab',
                                    'relatedTarget': b[0]
                                }), b.trigger({
                                    'type': 'shown.bs.tab',
                                    'relatedTarget': e[0]
                                });
                            });
                        }
                    }
                }, c.prototype.activate = function(b, d, e) {
                    function f() {
                        g.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1), 
                        b.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0), 
                        h ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'), 
                        b.parent('.dropdown-menu').length && b.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0), 
                        e && e();
                    }
                    var g = d.find('> .active'), h = e && a.support.transition && (g.length && g.hasClass('fade') || !!d.find('> .fade').length);
                    g.length && h ? g.one('bsTransitionEnd', f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), 
                    g.removeClass('in');
                };
                d = a.fn.tab;
                a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
                    return a.fn.tab = d, this;
                };
                e = function(c) {
                    c.preventDefault(), b.call(a(this), 'show');
                };
                a(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', e).on('click.bs.tab.data-api', '[data-toggle="pill"]', e);
            }(jQuery), function(a) {
                'use strict';
                function b(b) {
                    return this.each(function() {
                        var d = a(this), e = d.data('bs.affix');
                        e || d.data('bs.affix', e = new c(this, 'object' == typeof b && b)), 
                        'string' == typeof b && e[b]();
                    });
                }
                function c(b, d) {
                    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this)), 
                    this.$element = a(b), this.affixed = null, this.unpin = null, 
                    this.pinnedOffset = null, this.checkPosition();
                }
                var d;
                c.VERSION = '3.3.6', c.RESET = 'affix affix-top affix-bottom', c.DEFAULTS = {
                    'offset': 0,
                    'target': window
                }, c.prototype.getState = function(a, b, c, d) {
                    var h, e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
                    if (null != c && 'top' == this.affixed) return e < c && 'top';
                    if ('bottom' == this.affixed) return null != c ? !(e + this.unpin <= f.top) && 'bottom' : !(e + g <= a - d) && 'bottom';
                    f = (h = null == this.affixed) ? e : f.top;
                    return null != c && e <= c ? 'top' : null != d && a - d <= f + (h ? g : b) && 'bottom';
                }, c.prototype.getPinnedOffset = function() {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(c.RESET).addClass('affix');
                    var a = this.$target.scrollTop(), b = this.$element.offset();
                    return this.pinnedOffset = b.top - a;
                }, c.prototype.checkPositionWithEventLoop = function() {
                    setTimeout(a.proxy(this.checkPosition, this), 1);
                }, c.prototype.checkPosition = function() {
                    var b, f, g, d, e, j;
                    if (this.$element.is(':visible')) {
                        b = this.$element.height(), e = (d = this.options.offset).top, 
                        f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
                        'object' != typeof d && (f = e = d), 'function' == typeof e && (e = d.top(this.$element)), 
                        'function' == typeof f && (f = d.bottom(this.$element));
                        d = this.getState(g, b, e, f);
                        if (this.affixed != d) {
                            null != this.unpin && this.$element.css('top', '');
                            j = a.Event((e = 'affix' + (d ? '-' + d : '')) + '.bs.affix');
                            if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                            this.affixed = d, this.unpin = 'bottom' == d ? this.getPinnedOffset() : null, 
                            this.$element.removeClass(c.RESET).addClass(e).trigger(e.replace('affix', 'affixed') + '.bs.affix');
                        }
                        'bottom' == d && this.$element.offset({
                            'top': g - b - f
                        });
                    }
                };
                d = a.fn.affix;
                a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
                    return a.fn.affix = d, this;
                }, a(window).on('load', function() {
                    a('[data-spy="affix"]').each(function() {
                        var c = a(this), d = c.data();
                        d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
                        null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                    });
                });
            }(jQuery);
        }.apply(root, arguments);
    });
})(this);

define('app-remote/framework/controllers/menusCtrl', [ 'bootstrap/bootstrap.min', 'app-remote/framework/localization/config', 'app-remote/services/consoleModal' ], function(bootstrap, localizationConfig, ConsoleModal) {
    'use strict';
    function ctrl($rootScope, frameworkService, globalRegionName, currentService, $sce, $state, $location, storage, $window, utilService, $timeout, $filter, tiTipService) {
        var promiseRegion, initMessageBox, tipConfig, favoriteEndpointTips, choiceMessageType, detectImage;
        function initAllUserInfo() {
            frameworkService.getLoginUser().then(function(data) {
                $rootScope.userId = data.id;
                $rootScope.username = data.name;
                $rootScope.domainName = data.domainName;
                $rootScope.projectId = data.projectId;
                $rootScope.projectName = data.region;
                $rootScope.xDomainType = data.xDomainType;
                updateUserRoles(data.roles);
                data.nonsupportRegions && ($rootScope.nonsupportRegions = data.nonsupportRegions);
                if ($rootScope.nonsupportRegions && $rootScope.isNonsupportRegion($rootScope.nonsupportRegions, $rootScope.projectName)) {
                    $rootScope.lastState = $state.current;
                    'nonsupportRegion' !== $rootScope.lastState.name && $state.go('nonsupportRegion');
                }
                if (!$rootScope.supportMultiProject && !$rootScope.projectNameRegExp.test(data.region) && $rootScope.userProjectNameRegExp.test(data.region)) {
                    $rootScope.lastState = $state.current;
                    'nonsupportRegion' !== $rootScope.lastState.name && $state.go('nonsupportRegion');
                }
                $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    if (!$rootScope.supportMultiProject && !$rootScope.projectNameRegExp.test(data.region) && $rootScope.userProjectNameRegExp.test(data.region)) {
                        $rootScope.lastState = $state.current;
                        'nonsupportRegion' !== $rootScope.lastState.name && $state.go('nonsupportRegion');
                    }
                });
                if (0 <= $.inArray('op_vendor_sub_user', data.roles)) {
                    $rootScope.isVendorSubUser = !0;
                    $rootScope.isVendorUser = !0;
                }
                0 <= $.inArray('op_vendor', data.roles) && ($rootScope.isVendorUser = !0);
                if (0 <= $.inArray('op_suspended', data.roles)) {
                    $rootScope.isSuspendedUser = !0;
                    0 <= $.inArray('op_prj_disabled', data.roles) ? $rootScope.$watch('regionDisplayFlag', function(newVal, oldVal) {
                        $timeout(function() {
                            $rootScope.regionDisplayFlag && $rootScope.isServiceConsole && !$rootScope.globalRegionName ? $rootScope.showSuspendedProjectTipCtrl(!0) : $rootScope.showSuspendedProjectTipCtrl(!1);
                        }, 800);
                    }) : $rootScope.showSuspendedUserTipCtrl(!0);
                }
                0 <= $.inArray('op_legacy', data.roles) && localizationConfig.isOldUser && ($rootScope.isOldUser = !0);
                0 <= $.inArray('op_gated_pc_vendor_subuser', data.roles) || 0 <= $.inArray('op_pc_vendor_subuser', data.roles) ? $rootScope.isPcVendorSubuser = !0 : $rootScope.isPcVendorSubuser = !1;
                $rootScope.domainId = data.domainId;
                frameworkService.queryIamUser($rootScope.userId).then(function(data) {
                    if (data && data.user && data.user.img_path) {
                        $rootScope.user_head_all = data.user.img_path;
                        data.user.img_path.small && ($rootScope.user_head_href.url = data.user.img_path.small);
                    }
                });
                options = {
                    'domainId': $rootScope.domainId
                }, frameworkService.queryCustomerManangment(options).then(function(data) {
                    '1' === data.isEmPriCustomer ? $rootScope.BusinessManagementIsOpen = !0 : $rootScope.BusinessManagementIsOpen = !1;
                });
                var options;
                if (localizationConfig.userBalanceSwitch) {
                    initUserBalance();
                    if ($rootScope.localizationConfig.newHECMenu) {
                        frameworkService.queryCusBrief($rootScope.domainId).then(function(data) {
                            if (data && 0 <= data.totalCount) {
                                $rootScope.workOrderCount = data.totalCount;
                                $rootScope.workOrderTip = $rootScope.i18n.console_term_workOrder_process_label + ': ' + $rootScope.workOrderCount;
                            }
                        });
                        $rootScope.localizationConfig.isHecHk || localizationConfig.realNameAuthSwitch && frameworkService.queryRealNameAuth({
                            'customerId': $rootScope.domainId
                        }).then(function(data) {
                            $rootScope.realNameAuthOk = data && data.isVerified;
                        });
                    }
                }
                $rootScope.$broadcast('initUser');
                promiseRegion.then(function() {
                    options = {
                        'domain_id': $rootScope.domainId,
                        'userId': $rootScope.userId
                    }, frameworkService.getUserProjects(options).then(function(data) {
                        data && data.projects && genProjectList(data.projects);
                    }, function(data) {
                        genProjectList(null);
                    });
                    var options;
                });
                initDefaultRegion();
                (function() {
                    var options = {
                        'userId': $rootScope.userId,
                        'limit': $rootScope.limit
                    };
                    frameworkService.getAssumeRoles(options).then(function(data) {
                        if (data) {
                            if (data.account && data.account.id && data.account.id !== $rootScope.userId) {
                                $rootScope.isLoginUserFlag = !1;
                                $rootScope.hasAssumeRoleFlag = !0;
                                $rootScope.loginUserAccount = data.account;
                                var tmpIndex = $rootScope.username.indexOf('/');
                                if (0 < tmpIndex) {
                                    $rootScope.company = $rootScope.username.substring(tmpIndex + 1);
                                    $rootScope.shortName = $rootScope.username.substring(0, tmpIndex);
                                }
                            } else {
                                $rootScope.isLoginUserFlag = !0;
                                $rootScope.hasAssumeRoleFlag = !1;
                            }
                            if (data.xrole_history && 0 < data.xrole_history.length) {
                                $rootScope.assumeRoles = data.xrole_history;
                                $rootScope.hasAssumeRoleFlag = !0;
                            }
                        } else {
                            $rootScope.assumeRoles = [];
                            $rootScope.hasAssumeRoleFlag = !1;
                        }
                    });
                })();
                $rootScope.isMessageBoxEnabled && initMessageBox();
                return frameworkService.queryEndpoints({
                    'region': $rootScope.projectName
                });
            }).then(function(data) {
                (function(data) {
                    var endpoints, tmpEndpoints, endpoint, endpointScope, item;
                    if (!data || !data.endpoints) return;
                    endpoints = data.endpoints;
                    tmpEndpoints = [];
                    endpointScope = {};
                    for (item = 0; item < endpoints.length; item++) {
                        (endpoint = endpoints[item]).id === window.global_endpoint_id && ($rootScope.endpointName = endpoint.name);
                        'home' === endpoint.id ? $rootScope.homeEndpoint = endpoint : tmpEndpoints.push(endpoint);
                        endpointScope[endpoint.id] = endpoint.endpointScope;
                    }
                    $rootScope.$watch('displayRegionName', function(newValue) {
                        var item, nosupportRegionArr, j;
                        if (newValue) for (item = 0; item < endpoints.length; item++) {
                            endpoints[item].nonsupportCurrentRegion = !1;
                            if (endpoints[item].nonsupportRegion) {
                                0;
                                nosupportRegionArr = endpoints[item].nonsupportRegion.split(',');
                                for (j = 0; j < nosupportRegionArr.length; j++) $rootScope.isNonsupportRegion(nosupportRegionArr, $rootScope.projectName) && localizationConfig.ifSupportRegionsDisplay && (endpoints[item].nonsupportCurrentRegion = !0);
                            }
                        }
                    });
                    $rootScope.serviceEndpointList = tmpEndpoints;
                    $rootScope.endpointScopeMap = endpointScope;
                })(data);
                beautifierEndpoints();
                return getFavoriteEndpoints();
            }).then(function(data) {
                dealFavoriteEndpoints(data);
                initIsFavorite();
            });
        }
        function initAllLinks() {
            frameworkService.getLinks().then(function(data) {
                var links, index;
                if (data && data.links) {
                    links = {};
                    0;
                    for (index = 0; index < data.links.length; index++) links[data.links[index].key + '_' + data.links[index].type] = data.links[index].href;
                    window.doubleAuthenticate = links.doubleAuthenticate_identity;
                    $rootScope.links = links;
                    window.tinyPlus.constants.link_user_center = links.user_center_common + '/';
                    $rootScope.userCenterLink = $rootScope.links.user_center_common;
                    $rootScope.$watch('xDomainType', function(value) {
                        var str = localizationConfig.userCenterLinkSwitch ? $rootScope.xDomainType : '';
                        var result = '';
                        str = 'user_center_' + (result = str ? str.replace('-', '_') + '_' : result) + 'common';
                        $rootScope.links && 0 < Object.keys($rootScope.links).length && (str = 0 < Object.keys($rootScope.links).indexOf(str) ? str : 'user_center_common');
                        result = 'links.' + str;
                        $rootScope.userCenterLink = $rootScope.$eval(result);
                        return;
                    });
                }
            });
        }
        function getDateTime(dateValue) {
            var nowTime;
            if (!dateValue) return;
            0;
            nowTime = new Date();
            dateValue = new Date(dateValue);
            return nowTime.getFullYear() === dateValue.getFullYear() && nowTime.getMonth() === dateValue.getMonth() && nowTime.getDate() === dateValue.getDate() ? $filter('date')(dateValue, $rootScope.i18n.timeShortFormat) : nowTime.getFullYear() === dateValue.getFullYear() && nowTime.getMonth() === dateValue.getMonth() && nowTime.getDate() - 1 === dateValue.getDate() ? $rootScope.i18n.console_term_operate_log_label : nowTime.getFullYear() === dateValue.getFullYear() ? $filter('date')(dateValue, $rootScope.i18n.dateShortFormat) : $filter('date')(dateValue, $rootScope.i18n.localeRule.DATETIME_FORMATS.mediumDate);
        }
        function initUserBalance() {
            localizationConfig.newHECMenu ? frameworkService.queryBESumInfo().then(function(data) {
                var currentBe, i, j, domainId, beId, currentChoiceElement;
                if (!data) return;
                currentBe = [];
                for (i = 0; i < data.cusInfoList.length; i++) if (3 === data.cusInfoList[i].beType) {
                    currentBe.push(data.cusInfoList[i]);
                    $rootScope.DistributorList.push(data.cusInfoList[i]);
                    break;
                }
                if (0 === currentBe.length) for (j = 0; j < data.cusInfoList.length; j++) if (1 === data.cusInfoList[j].beType) {
                    currentBe.push(data.cusInfoList[j]);
                    break;
                }
                domainId = currentBe[0].domainId || '';
                beId = currentBe[0].beId || '0';
                $rootScope.DistributorList.forEach(function(item) {
                    item.beId === beId && item.domainId === domainId && item.beName === currentBe[0].beName && (currentChoiceElement = item);
                });
                $rootScope.isDistributor = !!currentChoiceElement;
                $rootScope.accountBalanceSum = data.cusInfoList;
                $rootScope.accountBalanceName = currentBe[0].beName + ('zh-cn' !== utilService.getCookie('locale') ? ' ' : '') + $rootScope.i18n.console_term_accountBalance_label.replace(':', '').replace('：', '');
                $rootScope.accountBalanceLink = $rootScope.links.recharge_userCenter + '?mybeId=' + beId;
                frameworkService.queryAccountBalance(domainId, beId).then(function(data) {
                    var n, accountBalance = 0;
                    for (n = 0; n < data.accountBalance.length; n++) {
                        accountBalance += data.accountBalance[n].amount;
                        2 === data.accountBalance[n].accountType && ($rootScope.debitBalance = data.accountBalance[n].amount);
                        5 === data.accountBalance[n].accountType && ($rootScope.bonusBalance = data.accountBalance[n].amount);
                    }
                    accountBalance = accountBalance.toFixed(2);
                    $rootScope.accountBalance = accountBalance;
                    $rootScope.showBalance = !0;
                }, function(data) {
                    $rootScope.showBalance = !1;
                });
            }) : frameworkService.queryAccountSum().then(function(data) {
                if (!data) return;
                var accountBalance = $.isNumeric(data.sumAmount) ? data.sumAmount : 0;
                accountBalance = accountBalance.toFixed(2);
                $rootScope.accountBalance = accountBalance;
                $rootScope.debitBalance = $.isNumeric(data.debitAmount) ? data.debitAmount : 0;
                $rootScope.bonusBalance = $.isNumeric(data.bonusAmount) ? data.bonusAmount : 0;
                $rootScope.showBalance = !0;
            }, function(data) {
                $rootScope.showBalance = !1;
            });
        }
        function getTraceLog() {
            frameworkService.queryTracker($rootScope.projectId).then(function(data) {
                $rootScope.trace.tracker = data || [];
                $rootScope.trace.hasTraceInRegion = !0;
                if (0 < $rootScope.trace.tracker.length) frameworkService.queryTraceList($rootScope.projectId, encodeURIComponent($rootScope.trace.tracker[0].tracker_name), {
                    'limit': 10
                }).then(function(data) {
                    $rootScope.trace.traceList = data && data.traces || [];
                    $rootScope.trace.traceList.sort(function(first, second) {
                        return second.record_time - first.record_time;
                    });
                    $rootScope.trace.traceList.forEach(function(item) {
                        item.showTime = getDateTime(item.record_time);
                    });
                }, function(jqXHR, textStatus, errorThrown) {
                    $rootScope.trace.traceList = [];
                }); else $rootScope.trace.tracker = [];
            }, function(jqXHR, textStatus, errorThrown) {
                $rootScope.trace.hasTraceInRegion = !1;
            });
        }
        function initDefaultRegion() {
            if (!$rootScope.projectName || $rootScope.regions.length <= 0) return;
            $rootScope.selectRegionId = function(projectName) {
                if (projectName) {
                    if ($rootScope.projectNameRegExp.test(projectName)) return projectName.match($rootScope.projectNameRegExp)[2];
                    if ($rootScope.userProjectNameRegExp.test(projectName)) return projectName.match($rootScope.userProjectNameRegExp)[1];
                }
                return projectName;
            }($rootScope.projectName);
            $rootScope.regionName = getRegionNameById($rootScope.selectRegionId);
            $rootScope.displayRegionName = globalRegionName + '' == '' ? function(regionId) {
                var projectElms;
                if (regionId && $rootScope.projectNameRegExp.test(regionId)) {
                    projectElms = regionId.match($rootScope.projectNameRegExp);
                    0 === regionId.indexOf('DeC') && ($rootScope.isVdcRegion = !0);
                    return getRegionNameById(projectElms[2]) + '(' + projectElms[3] + ')';
                }
                if (regionId && $rootScope.userProjectNameRegExp.test(regionId)) return getRegionNameById((projectElms = regionId.match($rootScope.userProjectNameRegExp))[1]) + '(' + projectElms[2] + ')';
                return getRegionNameById(regionId);
            }($rootScope.projectName) : globalRegionName;
            if ($rootScope.localizationConfig.newHECMenu) {
                getTraceLog();
                $rootScope.trace = {
                    'traceCount': 0,
                    'traceList': [],
                    'tracker': [],
                    'hasTraceInRegion': !1,
                    'enableClick': function() {
                        $rootScope.trace.ctsEndpoint && $rootScope.trace.ctsEndpoint.endpoint && (window.location.href = $rootScope.genHWSHref($rootScope.trace.ctsEndpoint.endpoint.split('#')[0] + '#/cts/manager/settingList'));
                    }
                };
                $rootScope.$watch('serviceEndpointList', function(newVal, oldVal) {
                    newVal && ($rootScope.trace.ctsEndpoint = _.find($rootScope.serviceEndpointList, function(item) {
                        return 'cts' === item.id;
                    }));
                });
                $rootScope.$watch('isShowLogLayout', function(newVal, oldVal) {
                    !0 === newVal && getTraceLog();
                });
            }
            $rootScope.$broadcast('initDefaultRegion');
        }
        function getRegionNameById(regionId) {
            for (var index in $rootScope.regions) if (regionId === $rootScope.regions[index].id) return $rootScope.regionColorIndex = index, 
            $rootScope.regions[index].name;
            return '';
        }
        function genProjectList(sProjects) {
            var index, projectElms, regions, i, getAscriptionSegment, regionGroup, projects = {};
            if (sProjects) for (index = 0; index < sProjects.length; index++) if (sProjects[index] && sProjects[index].name && $rootScope.projectNameRegExp.test(sProjects[index].name)) {
                projects[(projectElms = sProjects[index].name.match($rootScope.projectNameRegExp))[2]] = projects[projectElms[2]] || [];
                projects[projectElms[2]].push({
                    'id': sProjects[index].id,
                    'name': sProjects[index].name,
                    'userProjectNameFlag': !1,
                    'displayName': projectElms[3],
                    'disable': $rootScope.isNonsupportRegion($rootScope.nonsupportRegions, sProjects[index].name),
                    'maintence': isMaintainedRegion($rootScope.maintenanceRegions, sProjects[index].name)
                });
            } else if (sProjects[index] && sProjects[index].name && $rootScope.userProjectNameRegExp.test(sProjects[index].name)) {
                projects[(projectElms = sProjects[index].name.match($rootScope.userProjectNameRegExp))[1]] = projects[projectElms[1]] || [];
                projects[projectElms[1]].push({
                    'id': sProjects[index].id,
                    'name': sProjects[index].name,
                    'userProjectNameFlag': !0,
                    'displayName': projectElms[2],
                    'disable': $rootScope.isNonsupportRegion($rootScope.nonsupportRegions, sProjects[index].name),
                    'maintence': isMaintainedRegion($rootScope.maintenanceRegions, sProjects[index].name)
                });
            }
            $rootScope.projects = projects;
            regions = $rootScope.tmpRegions;
            for (index = 0; index < regions.length; index++) {
                regions[index].projects = projects[regions[index].id];
                if ($rootScope.nonsupportRegions && $rootScope.isNonsupportRegion($rootScope.nonsupportRegions, regions[index].id)) {
                    regions[index].disable = !0;
                    if (regions[index].projects && 0 < regions[index].projects.length && regions[index].disable) for (i = 0; i < regions[index].projects.length; i++) regions[index].projects[i].disable = !0;
                } else regions[index].disable = !1;
            }
            for (index = 0; index < regions.length; index++) {
                regions[index].projects = projects[regions[index].id];
                $rootScope.maintenanceRegions && isMaintainedRegion($rootScope.maintenanceRegions, regions[index].id) ? regions[index].maintence = !0 : regions[index].maintence = !1;
            }
            $rootScope.regions = regions;
            0 < $rootScope.regions.length && ($rootScope.regionFlag = !0);
            $rootScope.regionAscriptions = [ {
                'min': 'A',
                'max': 'G'
            }, {
                'min': 'H',
                'max': 'K'
            }, {
                'min': 'L',
                'max': 'S'
            }, {
                'min': 'T',
                'max': 'Z'
            } ];
            getAscriptionSegment = function(alphabet) {
                if (!alphabet) return null;
                alphabet = (alphabet + '').substr(0, 1).toUpperCase();
                return _.findIndex($rootScope.regionAscriptions, function(item) {
                    return alphabet >= item.min && alphabet <= item.max;
                });
            };
            regionGroup = _.groupBy($rootScope.regions, function(item) {
                return item.ascription;
            });
            _.each(regionGroup, function(item, key) {
                var regions, shortNameObj;
                if ('undefined' !== key) {
                    regions = regionGroup[key];
                    shortNameObj = _.find(regions, function(regionItem) {
                        return !!regionItem.shortName;
                    });
                    shortNameObj = getAscriptionSegment(shortNameObj && shortNameObj.shortName);
                    if ($rootScope.regionAscriptions[shortNameObj]) {
                        $rootScope.regionAscriptions[shortNameObj].ascriptionList = $rootScope.regionAscriptions[shortNameObj].ascriptionList || [];
                        $rootScope.regionAscriptions[shortNameObj].ascriptionList.push({
                            'displayName': key,
                            'regions': regions
                        });
                    }
                }
            });
            _.each($rootScope.regionAscriptions, function(item) {
                item.ascriptionList && (item.ascriptionList = _.sortBy(item.ascriptionList, function(ascription) {
                    ascription = _.find(ascription.regions || [], function(regionItem) {
                        return !!regionItem.shortName;
                    });
                    return ascription && ascription.shortName || '';
                }));
            });
            initDefaultRegion();
        }
        function getFavoriteEndpoints() {
            var options = {
                'user_id': $rootScope.userId
            };
            return frameworkService.favoriteEndpoints(options);
        }
        function dealFavoriteEndpoints(data) {
            var length, result, i;
            if (!data || !data.endpointCollects) return;
            length = data.endpointCollects.length;
            result = [];
            for (i = 0; i < $rootScope.favoriteServiceMax && i < length; i++) {
                data.endpointCollects[i].tooltip = {
                    'content': $.encoder.encodeForHTML(data.endpointCollects[i].shortName),
                    'customClass': 'frame-dropdown-tinyTip',
                    'position': 'bottom-right',
                    'maxWidth': 200
                };
                data.endpointCollects[i].tipsElementId = 'frameFavoriteEndpointId' + data.endpointCollects[i].endpointId + i;
                result.push(data.endpointCollects[i]);
            }
            $rootScope.favoriteEndpoints = result;
            $rootScope.console_term_clickhere_tips = $sce.trustAsHtml($rootScope.i18nReplace($rootScope.i18n.console_term_clickhere_tips, {
                '1': '<span class="hwsicon-frame-image-favorite-new menu-hwsicon-frame-service-favorite-tip"></span>',
                '2': $rootScope.favoriteServiceMax - $rootScope.favoriteEndpoints.length
            }));
        }
        function beautifierEndpoints(flag) {
            var catalogs, endpoint, catalog, item, result, index, endpoints = $rootScope.serviceEndpointList;
            if (!endpoints) return;
            catalogs = {};
            for (item = 0; item < endpoints.length; item++) {
                endpoint = endpoints[item];
                catalogs[catalog = $.trim(endpoint.catalog)] = catalogs[catalog] || [];
                catalogs[catalog].push(endpoint);
            }
            result = [];
            for (index in catalogs) catalogs.hasOwnProperty(index) && result.push({
                'catalog': index,
                'endpoints': catalogs[index]
            });
            $rootScope.serviceEndpoints = result;
            $rootScope.localizationConfig.newHECMenu && !$rootScope.localizationConfig.isCMC && ($rootScope.allSeviceList = subServiceListData(result));
            flag || ($rootScope.endpointInitFlag = !0);
        }
        function initIsFavorite() {
            ($rootScope.serviceEndpointList || []).forEach(function(item) {
                item.isFavorite = function(endpoint) {
                    if ($rootScope.favoriteEndpoints) for (var index = 0; index < $rootScope.favoriteEndpoints.length; index++) if (endpoint.id === $rootScope.favoriteEndpoints[index].endpointId) return $rootScope.favoriteEndpoints[index].serviceCss = endpoint.serviceCss, 
                    !0;
                    return !1;
                }(item);
            });
        }
        function subServiceListData(data) {
            var subServiceList = [], appendixHeight = 0, leftMenuHeight = 40 * ($rootScope.serviceEndpoints.length + 1);
            if (leftMenuHeight <= 660) {
                appendixHeight = 660 - leftMenuHeight;
                subServiceList = overDefaultServiceListHeightElement(data, 630);
            } else {
                appendixHeight = 0;
                subServiceList = overDefaultServiceListHeightElement(data, leftMenuHeight);
            }
            document.getElementById('serviceListLayout').style.paddingBottom = +appendixHeight + 10 + 'px';
            document.getElementById('serviceListLayout').style.backgroundColor = '#f7f8f8';
            return subServiceList;
        }
        function overDefaultServiceListHeightElement(data, leftMenuHeight) {
            var i, len = 0, result = [], subServiceList = [];
            for (i = 0; i < data.length; i++) if (28 * data[i].endpoints.length + 40 > leftMenuHeight) subServiceList.push(data[i]); else {
                len = len + 28 * data[i].endpoints.length + 40;
                result.push(data[i]);
                if (leftMenuHeight < len) {
                    result.pop();
                    subServiceList.push(result);
                    len = 28 * data[i].endpoints.length + 40;
                    (result = []).push(data[i]);
                }
            }
            subServiceList.push(result);
            return subServiceList;
        }
        function importantMessage() {
            if (!localizationConfig.getMessageFlag) return;
            frameworkService.getMessages().then(function(data) {
                if (!data || !data.messages) return;
                $rootScope.importantMessages = data.messages;
                $rootScope.noticeNum = data.total;
            });
        }
        function isMaintainedRegion(maintenanceRegions, regionId) {
            var i, result = !1;
            if (regionId && $rootScope.projectNameRegExp.test(regionId)) {
                for (i = 0; i < maintenanceRegions.length; i++) if (maintenanceRegions[i] && 0 === regionId.indexOf(maintenanceRegions[i])) {
                    result = !0;
                    break;
                }
            } else result = 0 <= maintenanceRegions.indexOf(regionId);
            return result;
        }
        function initMessageTypes() {
            if (!localizationConfig.getMessageFlag) return;
            var options = {
                'userId': $rootScope.userId,
                'type': choiceMessageType
            };
            frameworkService.getUserChoices(options).then(function(choices) {
                frameworkService.getMessagesTypes().then(function(types) {
                    (function(choices, types) {
                        var index, values = [], keys = [];
                        for (index = 0; index < types.length; index++) {
                            values.push({
                                'key': types[index].key,
                                'text': types[index].text,
                                'checked': function(key, choices) {
                                    if (choices && choices.preferences && choices.preferences[0] && choices.preferences[0].preferDisplayName) return choices = choices.preferences[0].preferDisplayName.split(','), 
                                    !_.contains(choices, key);
                                    return !0;
                                }(types[index].key, choices)
                            });
                            keys.push(types[index].key);
                        }
                        $rootScope.messageTypeKeys = keys;
                        $rootScope.messageTypes = {
                            'id': 'messageTypes',
                            'values': values,
                            'change': function() {
                                var index, options, checkedArray = $('#messageTypes').widget().opChecked('checked'), unChecked = [];
                                for (index = 0; index < $rootScope.messageTypeKeys.length; index++) _.contains(checkedArray, $rootScope.messageTypeKeys[index]) || unChecked.push($rootScope.messageTypeKeys[index]);
                                options = {
                                    'userId': $rootScope.userId,
                                    'type': choiceMessageType,
                                    'value': unChecked.join(','),
                                    'preferDesc': ''
                                };
                                frameworkService.updateUserChoices(options);
                                importantMessage();
                            }
                        };
                        importantMessage();
                    })(choices, types);
                });
            });
        }
        function updateUserRoles(roles) {
            $rootScope.userRoles = roles;
            0 <= $.inArray('op_restricted', roles) ? $rootScope.isRestrictedUser = !0 : $rootScope.isRestrictedUser = !1;
        }
        $rootScope.i18nReplace = utilService.i18nReplaceFull;
        $rootScope.widgetsLanguage = window.tinyLanguage.language;
        $rootScope.timeFormat = $rootScope.i18n.dateFormat + ' HH:mm:ss';
        $rootScope.tmpRegions = [];
        $rootScope.regions = [];
        $rootScope.projects = {};
        $rootScope.regionAscriptions = [];
        $rootScope.selectRegionId = '';
        $rootScope.projectName = '';
        $rootScope.displayRegionName = '';
        $rootScope.isVdcRegion = !1;
        $rootScope.noticeNum = 0;
        $rootScope.username = '';
        $rootScope.company = '';
        $rootScope.userId = '';
        $rootScope.projectId = '';
        $rootScope.domainId = '';
        $rootScope.userRoles = [];
        $rootScope.isOldUser = !1;
        $rootScope.accountBalance = 0;
        $rootScope.debitBalance = 0;
        $rootScope.bonusBalance = 0;
        $rootScope.importantMessages = [];
        $rootScope.homeEndpoint = null;
        $rootScope.serviceEndpoints = [];
        $rootScope.serviceEndpointList = [];
        $rootScope.favoriteEndpoints = [];
        $rootScope.favoriteError = !0;
        $rootScope.isCustomLogo = !1;
        $rootScope.isLoginUserFlag = !0;
        $rootScope.loginUserAccount = {};
        $rootScope.hasAssumeRoleFlag = !1;
        $rootScope.assumeRoles = [];
        $rootScope.links = [];
        $rootScope.favoriteServiceMax = 10;
        $rootScope.showBalance = !1;
        $rootScope.accountBalanceName = '';
        $rootScope.accountBalanceLink = '';
        $rootScope.accountBalanceSum = [];
        $rootScope.isBalanceAccountOpen = !1;
        $rootScope.isVendorSubUser = !1;
        $rootScope.isVendorUser = !1;
        $rootScope.isSuspendedUser = !1;
        $rootScope.isVerifiedUser = !1;
        $rootScope.endpointInitFlag = !1;
        $rootScope.elementDisplayFlag = !0;
        $rootScope.regionDisplayFlag = !0;
        $rootScope.globalRegionName = globalRegionName;
        $rootScope.currentService = currentService;
        $rootScope.bussinessConsoleList = [ 'authCenter', 'marketplace', 'userCenter' ];
        $rootScope.isServiceConsole = $.inArray($rootScope.currentService, $rootScope.bussinessConsoleList) < 0;
        $rootScope.currentServiceName = $rootScope.i18n['console_term_' + $rootScope.currentService + '_label'];
        $rootScope.logoutUrl = window.appWebPath + '/logout';
        $rootScope.lastState = '';
        $rootScope.localizationConfig = localizationConfig;
        $rootScope.canAssumeRole = localizationConfig.canAssumeRole;
        $rootScope.console_term_copyright_label = $sce.trustAsHtml($rootScope.i18n.console_term_copyright_label);
        $rootScope.isMessageBoxEnabled = localizationConfig.isMessageBoxEnabled;
        $rootScope.serviceCategoryFlag = !0;
        $rootScope.DistributorList = [];
        $rootScope.xDomainType = '';
        $rootScope.regionFlag = !1;
        $rootScope.selectServiceCategory = function(endpoints) {
            var i, len, leftMenuHeight = 40 * ($rootScope.serviceEndpoints.length + 1), cloumnElementCount = Math.round((leftMenuHeight - 60) / 80) + 1, result = [];
            for (i = 0, len = endpoints.length; i < len; i += cloumnElementCount) result.push(endpoints.slice(i, i + cloumnElementCount));
            $rootScope.serviceList = result;
            if ($('#allSevice').hasClass('default-selected-service-list-set-color') && !0 === $rootScope.serviceCategoryFlag) {
                $('#allSevice').removeClass('default-selected-service-list-set-color');
                $('#defaultAllServiceLabel').removeClass('service-list-all-service-category-family-hover');
                $('#serviceListLayout').addClass('service-layout-ul-set-new');
                document.getElementById('serviceListLayout').style.paddingBottom = '60px';
            }
            $rootScope.serviceCategoryFlag = !1;
            $rootScope.allSeviceList = [];
        };
        $rootScope.unselectServiceCategory = function() {
            if (!$('#allSevice').hasClass('default-selected-service-list-set-color') && !1 === $rootScope.serviceCategoryFlag) {
                $('#allSevice').addClass('default-selected-service-list-set-color');
                $('#defaultAllServiceLabel').addClass('service-list-all-service-category-family-hover');
                $('#serviceListLayout').removeClass('service-layout-ul-set-new');
            }
            $rootScope.serviceCategoryFlag = !0;
            $rootScope.allSeviceList = subServiceListData($rootScope.serviceEndpoints);
        };
        $rootScope.regionTpl = {
            'url': 'src/app/framework/views/region.html'
        };
        $rootScope.traceTpl = {
            'url': 'src/app/framework/views/traceTpl.html'
        };
        $rootScope.userInfoTpl = {
            'url': 'src/app/framework/views/userInfoTpl.html'
        };
        $rootScope.user_head_href = {
            'url': '/static/framework/4.4.0/theme/default/images/user-head.png'
        };
        $rootScope.user_head_all = {};
        $rootScope.my_quota_link = $rootScope.i18n.console_term_consoleHome_link + '#/quota';
        $rootScope.nonsupportRegions = [];
        $rootScope.endpointScopeMap = {};
        $rootScope.maintenanceRegions = [];
        $rootScope.regionHighlightColor = [ '#82b1ff', '#ea80fc', '#85f2a3', '#b388ff', '#80d8ff', '#39e749', '#5ff7d4', '#ff6e40', '#ffd180', '#ff9e80', '#ff8a80', '#ffff8d' ];
        $rootScope.displayMenuElements = function(flag) {
            $rootScope.regionDisplayFlag = flag;
        };
        $rootScope.displayMenusWithOutRegion = function(flag) {};
        $rootScope.logout = function() {
            storage.flush();
            window.location.href = $rootScope.logoutUrl;
        };
        currentService = {
            'selfDevelop': !!localizationConfig.ctcRegionTiledDisplay,
            'alliance': !0
        };
        promiseRegion = frameworkService.queryRegions(currentService);
        $rootScope.genFavTipOptions = function() {
            $rootScope.i18n.console_term_collectFull_tip = $sce.trustAsHtml($rootScope.i18nReplace($rootScope.i18n.console_term_collectFull_tip, {
                '1': $rootScope.favoriteServiceMax
            }));
            this.$index;
            var favTipOptions = this.favTipOptions = {
                'collect': {
                    'content': $rootScope.i18n.console_term_collectModal_tip,
                    'maxWidth': 300,
                    'customClass': 'frame-dropdown-tinyTip',
                    'position': 'bottom-right'
                },
                'cancel': {
                    'content': $rootScope.i18n.console_term_unCollect_tip,
                    'maxWidth': 300,
                    'customClass': 'frame-dropdown-tinyTip',
                    'position': 'bottom-right'
                },
                'collectFull': {
                    'content': $rootScope.i18n.console_term_collectFull_tip,
                    'maxWidth': 300,
                    'customClass': 'frame-dropdown-tinyTip',
                    'position': 'bottom-right'
                }
            };
            $(window).resize(function() {
                $rootScope.$apply(function() {
                    favTipOptions.collect.position = favTipOptions.cancel.position = favTipOptions.collectFull.position = 'bottom-right';
                });
            });
        };
        $rootScope.oldTips = {
            'tooltip': {
                'content': $rootScope.i18n.console_term_oldConsoleTips_label,
                'maxWidth': 180,
                'customClass': 'frame-dropdown-tinyTip old-console-tips',
                'position': 'bottom'
            }
        };
        $rootScope.helpTips = {
            'tooltip': {
                'content': $rootScope.i18n.console_term_helpcenter_label,
                'position': 'bottom-right'
            }
        };
        $rootScope.i18n.console_term_collectTip_valid = $sce.trustAsHtml($rootScope.i18nReplace($rootScope.i18n.console_term_collectTip_valid, {
            '1': $rootScope.favoriteServiceMax,
            '2': '<span class="hwsicon-frame-image-favorite-true menu-hwsicon-frame-service-favorite-tip"></span>'
        }));
        initMessageBox = function() {
            function requestInformation() {
                void 0 === $rootScope.messageBox.role && frameworkService.queryMcUserRole($rootScope.userId).then(function(data) {
                    $rootScope.messageBox.role = data.role;
                });
                return frameworkService.queryMcMessages($rootScope.domainId, {
                    'offset': 0,
                    'limit': 5,
                    'status': 0
                });
            }
            $rootScope.messageBox = {};
            function getUnreadCount(date) {
                lastRequestDate = date || new Date();
                frameworkService.queryMcUnreadCount($rootScope.domainId).then(function(data) {
                    $rootScope.messageBox.unreadCount = data;
                    $rootScope.$broadcast('mc.unreadCountTotalUpdated', data.total);
                });
            }
            var lastRequestDate;
            getUnreadCount();
            $rootScope.messageBox.getMessages = function() {
                requestInformation().then(function(data) {
                    $rootScope.messageBox.messages = data.messages || [];
                });
                return !0;
            };
            $rootScope.initHref = function(regionLink) {
                return $rootScope.genHWSHref(regionLink, 'locale');
            };
            $rootScope.ergodicAllMessage = !1;
            requestInformation().then(function(data) {
                $rootScope.messageBox.messages = data.messages || [];
                (function() {
                    var j, i;
                    if (0 < $rootScope.messageBox.messages.length && 0 < $window.importantMessageArr.length) for (j = 0; j < $rootScope.messageBox.messages.length; j++) for (i = 0; i < $window.importantMessageArr.length; i++) if ($rootScope.messageBox.messages[j].sub_category_id === Number($window.importantMessageArr[i]) && 0 === $rootScope.messageBox.messages[j].status) {
                        $rootScope.showMessageBox = !0;
                        $rootScope.importantMessageContent = $rootScope.messageBox.messages[j].title;
                        $rootScope.importantMessageHref = $rootScope.links.message_center_endpoint + '#/mc/messages/' + $rootScope.messageBox.messages[j].id;
                        $rootScope.importantMessageId = $rootScope.messageBox.messages[j].id;
                        $rootScope.ergodicAllMessage = !0;
                        return;
                    }
                })();
                $rootScope.ergodicAllMessage || $window.importantMessageArr.forEach(function(item) {
                    item = {
                        'sub_category_id': Number(item),
                        'status': 0,
                        'offset': 0,
                        'limit': 1
                    };
                    frameworkService.queryMcMessages($rootScope.domainId, item).then(function(data) {
                        $rootScope.messageBox.messages = data.messages;
                        if (0 < $rootScope.messageBox.messages.length && 0 < $window.importantMessageArr.length) {
                            $rootScope.showMessageBox = !0;
                            $rootScope.importantMessageContent = $rootScope.messageBox.messages[0].title;
                            $rootScope.importantMessageHref = $rootScope.links.message_center_endpoint + '#/mc/messages/' + $rootScope.messageBox.messages[0].id;
                            $rootScope.importantMessageId = $rootScope.messageBox.messages[0].id;
                            return;
                        }
                    });
                });
            });
            $rootScope.closeMessageBox = function() {
                var options = {
                    'domainId': $rootScope.domainId,
                    'messageIds': [ $rootScope.importantMessageId ]
                };
                frameworkService.messageStatus(options);
                $rootScope.showMessageBox = !1;
            };
            $rootScope.$on('$viewContentLoaded', function(event, viewConfig) {
                var date = new Date();
                3e4 < date - lastRequestDate && getUnreadCount(date);
            });
            angular.element($window).focus(function(event) {
                getUnreadCount(new Date());
            });
        };
        if (localizationConfig.customLogo) {
            currentService = '/theme/default/images/custom_logo.png';
            detectImage = new Image();
            detectImage.onload = function() {
                $rootScope.isCustomLogo = !0;
            };
            detectImage.onerror = function() {
                $rootScope.isCustomLogo = !1;
            };
            detectImage.src = currentService;
        }
        initAllUserInfo();
        promiseRegion.then(function(data) {
            if (!data || !data.regions) return;
            $rootScope.tmpRegions = data.regions;
        });
        importantMessage();
        initAllLinks();
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if ('nonsupportRegion' !== toState.name && $rootScope.nonsupportRegions && $rootScope.isNonsupportRegion($rootScope.nonsupportRegions, $rootScope.projectName)) {
                $rootScope.lastState = toState;
                event.preventDefault();
            }
        });
        $rootScope.getDateTimeMessage = function(dataTimeMessage) {
            return getDateTime(new Date(dataTimeMessage).getTime());
        };
        $rootScope.showSuspendedUserTipCtrl = function(show) {
            if (show || void 0 === show) {
                frameworkService.showSuspendedTip(localizationConfig, 'suspendedUser');
                angular.element(document).injector().invoke(function($compile) {
                    var scope = $('#frame-suspended-check').scope();
                    $compile($('#frame-suspended-check'))(scope);
                    scope.$evalAsync();
                });
            } else frameworkService.hideSuspendedTip(localizationConfig);
        };
        $rootScope.showSuspendedProjectTipCtrl = function(show) {
            if (show || void 0 === show) {
                frameworkService.showSuspendedTip(localizationConfig, 'suspendedProject');
                angular.element(document).injector().invoke(function($compile) {
                    var scope = $('#frame-suspended-check').scope();
                    $compile($('#frame-suspended-check'))(scope);
                    scope.$evalAsync();
                });
            } else frameworkService.hideSuspendedTip(localizationConfig);
        };
        $rootScope.isShowFeesLayout = function() {
            initUserBalance();
            return !0;
        };
        frameworkService.queryMaintenanceRegions().then(function(data) {
            data && ($rootScope.maintenanceRegions = data);
        });
        $rootScope.ifContainRegion = function(regions, projectName) {
            regions = regions || [];
            return !!_.find(regions, function(item) {
                return item.id === projectName || !!_.find(item.projects, function(projectItem) {
                    return projectItem.name === projectName;
                });
            });
        };
        tipConfig = {
            'customClass': 'frame-dropdown-tinyTip',
            'position': 'bottom-right',
            'maxWidth': 200
        };
        favoriteEndpointTips = {};
        $rootScope.favoriteEndpointMouseEnter = function(content, elementId) {
            tipConfig.content = $.encoder.encodeForHTML(content);
            (favoriteEndpointTips = tiTipService.createTip($('#' + elementId), tipConfig)).show = !0;
        };
        $rootScope.favoriteEndpointMouseLeave = function() {
            favoriteEndpointTips.show = !1;
        };
        $rootScope.favorite = function(endpointId, isFavorite) {
            $('.frame-dropdown-tinyTip').remove();
            $rootScope.favoriteError = !1;
            if (isFavorite && $rootScope.favoriteEndpoints.length >= $rootScope.favoriteServiceMax) return $rootScope.favoriteError = !0, 
            void 0;
            if ($rootScope.favoriteOperating) return;
            endpointId = {
                'user_id': $rootScope.userId,
                'id': endpointId
            };
            $rootScope.favoriteOperating = !0;
            (isFavorite ? frameworkService.addFavoriteEndpoint(endpointId) : frameworkService.deleteFavoriteEndpoint(endpointId)).then(function() {
                $rootScope.favoriteError = !1;
                return getFavoriteEndpoints();
            }, function(data) {
                if (data && 400 === data.status && data.responseText) {
                    data = JSON.parse(data.responseText);
                    data && '0000010002' === data.code && ($rootScope.favoriteError = !0);
                }
            }).then(function(data) {
                $rootScope.favoriteOperating = !1;
                dealFavoriteEndpoints(data);
                initIsFavorite();
                beautifierEndpoints(!0);
            });
        };
        $rootScope.isNonsupportRegion = function(nonsupportRegions, regionId) {
            var regionName, regionArray, i, j, result = !1;
            if (regionId && ($rootScope.projectNameRegExp.test(regionId) || $rootScope.userProjectNameRegExp.test(regionId))) {
                if ($rootScope.projectNameRegExp.test(regionId)) {
                    regionName = 2 <= (regionArray = regionId.split('_')).length ? regionArray[1] : regionArray[0];
                    for (i = 0; i < nonsupportRegions.length; i++) if (nonsupportRegions[i] && (0 === regionId.indexOf(nonsupportRegions[i]) || regionName === nonsupportRegions[i])) {
                        result = !0;
                        break;
                    }
                } else for (j = 0; j < nonsupportRegions.length; j++) if (nonsupportRegions[j] && 0 === regionId.indexOf(nonsupportRegions[j])) {
                    result = !0;
                    break;
                }
            } else result = 0 <= nonsupportRegions.indexOf(regionId);
            return result;
        };
        $rootScope.changeRegion = function(projectName, projectDisable) {
            if ($rootScope.isNonsupportRegion($rootScope.nonsupportRegions, projectName) || projectDisable) return;
            projectDisable = $rootScope.addOrReplaceUrlParameter(window.location.href, 'region', projectName);
            $rootScope.projectName = projectName;
            'nonsupportRegion' === $state.current.name || 'beingMaintained' === $state.current.name || 'accessDeclined' === $state.current.name ? window.location.href = projectDisable.replace('#' + $location.url(), '') : projectDisable === window.location.href ? window.location.reload() : window.location.href = projectDisable;
        };
        $rootScope.$watch('userId', function(newVal, oldVal) {
            newVal && newVal + '' != '' && newVal + '' != oldVal + '' && initMessageTypes();
        });
        choiceMessageType = 'frameworkMessageType';
        $rootScope.assumeRole = function(agencyId) {
            agencyId && frameworkService.assumeRole({
                'agencyId': agencyId
            }).then(function() {
                var href = $rootScope.delUrlParameter(window.location.href, 'agencyId');
                if (-1 !== (href = $rootScope.delUrlParameter(href, 'region')).indexOf('accessDeclined')) {
                    storage.cookieStorage.removeItem('agencyID');
                    window.location.href = href;
                    window.setTimeout(function() {
                        window.location.reload();
                        window.location.href = href.replace('#/accessDeclined', '');
                    }, 10);
                } else href === window.location.href ? window.location.reload() : window.location.href = href;
            });
        };
        $rootScope.assumeRoleToIAM = function() {
            var href;
            if ($rootScope.links.assume_role_iam + '' == '') return;
            href = $rootScope.delUrlParameter(window.location.href, 'agencyId');
            href = $rootScope.delUrlParameter(href, 'region');
            href = $rootScope.addOrReplaceUrlParameter($rootScope.links.assume_role_iam, 'callbackurl', encodeURIComponent(href));
            window.location.href = $rootScope.genHWSHref(href);
        };
        $rootScope.goHome = function() {
            $rootScope.isServiceConsole ? window.location.href = $rootScope.genHWSHref($rootScope.homeEndpoint.endpoint) : window.location.href = $rootScope.genHWSHref($rootScope.links.console_common, 'locale');
        };
        storage.get('framework_tips_new_msg' + storage.cookieStorage.getItem('agencyID')) && $('.frame-message-round') && $('.frame-message-round').css('display', 'block');
        $rootScope.showTipsMsg = function(page) {
            var tipsMessages, total;
            storage.add('framework_tips_new_msg' + storage.cookieStorage.getItem('agencyID'), !1);
            $('.frame-message-round').css('display', 'none');
            page = page < 1 ? 1 : page;
            tipsMessages = (tipsMessages = storage.get('framework_tips_msg' + storage.cookieStorage.getItem('agencyID'))) || [];
            total = Math.ceil(tipsMessages.length / 10);
            $rootScope.tipsMessagesTotal = 0 === total ? 1 : total;
            1 === (page = page > $rootScope.tipsMessagesTotal ? $rootScope.tipsMessagesTotal : page) ? $('.hwsicon-frame-image-pre-page').addClass('disabled') : $('.hwsicon-frame-image-pre-page').removeClass('disabled');
            page === $rootScope.tipsMessagesTotal ? $('.hwsicon-frame-image-next-page').addClass('disabled') : $('.hwsicon-frame-image-next-page').removeClass('disabled');
            $rootScope.tipsMessagesCurrent = page;
            $rootScope.tipsMessages = tipsMessages.slice(10 * (page - 1), 10 * page);
        };
        $rootScope.clearTipsMsg = function() {
            storage.add('framework_tips_msg' + storage.cookieStorage.getItem('agencyID'), []);
            $rootScope.showTipsMsg(1);
        };
        $rootScope.showCustomFavoriteMenu = function() {
            var top;
            if (!localizationConfig.newHECMenu || localizationConfig.isCMC) return;
            (top = document.getElementById('service-menus').style.top) && $timeout(function() {
                var offset = parseInt(top, 10) + 50 + 'px';
                $('.frame-favorite-service-list-options').css({
                    'top': offset
                });
            }, 10);
            $('.custom-favorite-menu').show();
            $('#service-content').css('padding-top', parseInt($('#service-menus').css('top'), 10) + 90 + 'px');
            $('.framework-scrolling').css('cssText', 'top: ' + (parseInt($('#service-menus').css('top'), 10) + 90) + 'px !important');
            $rootScope.$broadcast('cfNewTopAndHeight');
        };
        $rootScope.hideCustomFavoriteMenu = function() {
            if (!localizationConfig.newHECMenu) return;
            $('.custom-favorite-menu').hide();
            $('.frame-favorite-service-list .console-topbar-btn').show();
            $('.frame-favorite-service-list .console-topbar-btn-click').hide();
            $('#service-content').css('padding-top', parseInt($('#service-menus').css('top'), 10) + 50 + 'px');
            $('.framework-scrolling').css('cssText', 'top: ' + (parseInt($('#service-menus').css('top'), 10) + 50) + 'px !important');
            $rootScope.$broadcast('cfNewTopAndHeight');
        };
        $rootScope.showFavoriteModal = function() {
            function calcModalTop() {
                var menuTop = $('#service-menus').css('top'), modalTop = $('.favorite-modal-main').css('top'), bh = $('body').height();
                parseInt(modalTop, 10) < parseInt(menuTop, 10) ? $('.favorite-modal-main').css('top', menuTop) : 705 <= bh && modalTop === menuTop && $('.favorite-modal-main').css('top', '');
            }
            $('.favorite-modal').show();
            calcModalTop();
            $(document).on('keyup', function(e) {
                27 === (e || window.event).keyCode && $rootScope.hideFavoriteModal();
            });
            $(window).resize(function() {
                calcModalTop();
            });
        };
        $rootScope.hideFavoriteModal = function() {
            $('.favorite-modal').hide();
        };
        $rootScope.recharge = function() {
            window.open($rootScope.genHWSHref($rootScope.accountBalanceLink));
        };
        $rootScope.showBalanceAccount = function(ev) {
            ev = window.event || ev;
            ev && ev.stopPropagation ? ev.stopPropagation() : window.event && (window.event.cancelBubble = !0);
        };
        $rootScope.changeBalanceAccount = function(domainId, beId, beName) {
            var currentChoiceElement;
            $rootScope.DistributorList.forEach(function(item) {
                item.beId === beId && item.domainId === domainId && item.beName === beName && (currentChoiceElement = item);
            });
            $rootScope.isDistributor = !!currentChoiceElement;
            $rootScope.accountBalanceName = beName + ('zh-cn' !== utilService.getCookie('locale') ? ' ' : '') + $rootScope.i18n.console_term_accountBalance_label.replace(':', '').replace('：', '');
            $rootScope.accountBalanceLink = $rootScope.links.recharge_userCenter + '?mybeId=' + beId;
            $rootScope.isBalanceAccountOpen = !1;
            frameworkService.queryAccountBalance(domainId, beId).then(function(data) {
                var accountBalance, n;
                if (!data) return;
                for (n = accountBalance = 0; n < data.accountBalance.length; n++) {
                    accountBalance += data.accountBalance[n].amount;
                    2 === data.accountBalance[n].accountType && ($rootScope.debitBalance = data.accountBalance[n].amount);
                    5 === data.accountBalance[n].accountType && ($rootScope.bonusBalance = data.accountBalance[n].amount);
                }
                accountBalance = accountBalance.toFixed(2);
                $rootScope.accountBalance = accountBalance;
                $rootScope.showBalance = !0;
            }, function(data) {
                $rootScope.showBalance = !1;
            });
        };
        $rootScope.catalogLength = function(catalog) {
            var i = 0;
            catalog.forEach(function(item) {
                item.nonsupportCurrentRegion && i++;
            });
            return i !== catalog.length;
        };
        $rootScope.customContent = function() {
            var userHideUserContent, customLogo;
            if (window.customization && window.customization.CONTENT && window.customization.CONTENT.HEADER) {
                $rootScope.leftMenuAppend = [];
                window.customization.CONTENT.HEADER.LEFT_APPEND.forEach(function(item) {
                    $rootScope.leftMenuAppend.push(item[$rootScope.language]);
                });
                (customLogo = window.customization.CONTENT.HEADER.LOGO) && ($rootScope.headLogo = customLogo[$rootScope.language]);
                0 < (customLogo = window.customization.CONTENT.HEADER.HIDEEN || []).length && ($rootScope.userHideContent = customLogo);
                $rootScope.rightMenuAppend = [];
                window.customization.CONTENT.HEADER.RIGHT_APPEND.forEach(function(item) {
                    $rootScope.rightMenuAppend.push(item[$rootScope.language]);
                });
                $rootScope.rightMenuAppend.reverse();
                if (customLogo = window.customization.CONTENT.HEADER.USER_DROPDOWN) {
                    userHideUserContent = customLogo.HIDEEN || [];
                    customLogo = customLogo.APPEND || [];
                    0 < userHideUserContent.length && ($rootScope.userHideUserContent = userHideUserContent);
                    if (0 < customLogo.length) {
                        $rootScope.userMenuAppend = [];
                        customLogo.forEach(function(item) {
                            $rootScope.userMenuAppend.push(item[$rootScope.language]);
                        });
                    }
                }
            }
        };
        $rootScope.customContent();
        $rootScope.refreshUserInfo = function() {
            var promiseUser = frameworkService.getLoginUser(!0);
            promiseUser.then(function(data) {
                updateUserRoles(data.roles);
            });
            return promiseUser;
        };
        $rootScope.currentSelectedService = function(endpiont, serviceId) {
            $rootScope.setServiceInCookie(serviceId);
            window.location.href = $rootScope.genHWSHref(endpiont);
        };
        $rootScope.setServiceInCookie = function(serviceId) {
            var hasService, recentServiceList = storage.cookieStorage.getItem('recentServices');
            -1 < (hasService = (recentServiceList = '' === recentServiceList ? [] : JSON.parse(recentServiceList)).indexOf(serviceId)) && recentServiceList.splice(hasService, 1);
            recentServiceList.unshift(serviceId);
            6 < recentServiceList.length && (recentServiceList = recentServiceList.slice(0, 6));
            storage.cookieStorage.setItem('recentServices', JSON.stringify(recentServiceList));
        };
    }
    ctrl.$injector = [ '$rootScope', 'frameworkService', 'globalRegionName', 'currentService', '$state', '$location', '$window', 'utilService', '$timeout' ];
    return ctrl;
});

define('app-remote/framework/services/frameworkService', [ '', 'app-remote/framework/localization/config' ], function(fixtures, localizationConfig) {
    'use strict';
    function service($rootScope, $timeout, $q, camel) {
        this.queryEndpoints = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/endpoints',
                'timeout': 6e4,
                'params': {
                    'start': options.start || 0,
                    'limit': options.limit || 0,
                    'region': options.region
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('Frame-Domain-Type', localizationConfig.x_domain_type || '');
                    framework.beforeSend(request, setting);
                }
            });
        };
        this.favoriteEndpoints = function(options) {
            options = options || {};
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/silvan/rest/v1.0/users/{user_id}/endpoints',
                    'o': {
                        'user_id': options.user_id
                    }
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('Frame-Domain-Type', localizationConfig.x_domain_type || '');
                    framework.beforeSend(request, setting);
                }
            });
        };
        this.addFavoriteEndpoint = function(options) {
            options = options || {};
            return camel.post({
                'url': {
                    's': window.appWebPath + '/rest/silvan/rest/v1.0/users/{user_id}/endpoints/{id}',
                    'o': {
                        'user_id': options.user_id,
                        'id': options.id
                    }
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('Frame-Domain-Type', localizationConfig.x_domain_type || '');
                    framework.beforeSend(request, setting);
                }
            });
        };
        this.deleteFavoriteEndpoint = function(options) {
            options = options || {};
            return camel.deleter({
                'url': {
                    's': window.appWebPath + '/rest/silvan/rest/v1.0/users/{user_id}/endpoints/{id}',
                    'o': {
                        'user_id': options.user_id,
                        'id': options.id
                    }
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.queryRegions = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/regions',
                'timeout': 6e4,
                'params': {
                    'selfDevelop': options.selfDevelop,
                    'alliance': options.alliance
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('Frame-Domain-Type', localizationConfig.x_domain_type || '');
                    framework.beforeSend(request, setting);
                }
            });
        };
        this.changeRegion = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/changeRegion',
                'timeout': 6e4,
                'mask': !0,
                'params': {
                    'project': options.project
                },
                'beforeSend': framework.beforeSend
            });
        };
        this.queryMaintenanceRegions = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/maintenanceRegion',
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': framework.beforeSend
            });
        };
        this.getMessages = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/messages',
                'timeout': 6e4,
                'params': {
                    'start': options.start || 0,
                    'limit': options.limit || 0
                },
                'beforeSend': framework.beforeSend
            });
        };
        this.getLinks = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/links',
                'timeout': 6e4,
                'params': {
                    'key': options.key || '',
                    'type': options.type || ''
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('Frame-Domain-Type', localizationConfig.x_domain_type || '');
                    framework.beforeSend(request, setting);
                }
            });
        };
        this.getLoginUser = function(isRefreshToken) {
			return new Promise(resolve => {
				const data = {"projectId":"7c05f469ddeb45a4819cd3a9e9210156","domainId":"031bd4e0e78b4b4d80a13bffbe98cd34","domainName":"hw033958918","id":"d30d02c837b94f9a9f409b1495df3496","userId":"d30d02c837b94f9a9f409b1495df3496","name":"hw033958918","userName":"hw033958918","region":"cn-south-1","roles":["te_admin","te_agency","op_gated_ecs_spot_instance","op_gated_ivas_vcr_vca","op_gated_a_cn-south-4c","op_gated_ecs_kae1","op_gated_intl_oa","op_gated_KooSearchCOBT","op_gated_dws_poc","op_gated_cbr_file","op_gated_ecs_kc1_user_defined","op_gated_meeting_endpoint_buy","op_gated_map_nlp","op_gated_redis6-generic-intl","op_gated_dcs_dcs2-enterprise","op_gated_vcp","op_gated_cvr","op_gated_koophone","op_gated_multi_bind","op_gated_a_ap-southeast-3d","op_gated_project_del","op_gated_cer","op_gated_ces_resourcegroup_tag","op_gated_evs_retype","op_gated_koomap","op_gated_evs_essd2","op_gated_ecs_ir3x","op_gated_a_cn-southwest-2b","op_gated_cse_nacos","op_gated_hwdev","op_gated_sfsturbo","op_gated_hv_vendor","op_gated_a_cn-north-4e","op_gated_a_cn-north-4d","op_gated_dayu_dlm_cluster","op_gated_ecs_ac7","op_gated_cce_mcp_thai","op_gated_compass","op_gated_eds","op_gated_servicestage_mgr_dtm","op_gated_a_cn-north-4f","op_gated_oa","op_gated_sfs_lifecycle","op_gated_cph","op_gated_ga","op_gated_rms","op_gated_smn_application","op_gated_organizations","op_gated_ecs_gpu_g5r","op_gated_wks_kp","op_gated_ri_dws","op_gated_aad_beta_idc","op_gated_csbs_rep_acceleration","op_gated_ucs-intl","op_gated_ecs_diskAcc","op_gated_dss_month","op_gated_obs_deep_archive","op_gated_csg","op_gated_dec_month_user","op_gated_ief_edgeautonomy","op_gated_vip_bandwidth","op_gated_ecs_old_reource","op_gated_ucs_on_premises_intl","op_gated_welinkbridge_endpoint_buy","op_gated_ecs_third_image","op_gated_pstn_endpoint_buy","op_gated_map_ocr","op_gated_dlv_open_beta","op_gated_obs_dualstack","op_gated_edcm","op_gated_csbs_restore","op_gated_ivscs","op_gated_ecs_c6a","op_gated_EC_OBT","op_gated_vpn_vgw","op_gated_smn_callnotify","op_gated_op_gated_lakeformation_bet","op_gated_csbs_progressbar","op_gated_idt_dme","op_gated_ecs_offline_ac7","op_gated_evs_pool_ca","op_gated_ecs_offline_disk_4","op_gated_intl_compass","op_gated_ucs_on_aws_intl","op_gated_eps","op_gated_csbs_restore_all","op_gated_organizations_intl","op_gated_fcs_pay","op_gated_a_ap-southeast-1e","op_gated_a_ru-moscow-1b","op_gated_a_ap-southeast-1d","op_gated_a_ap-southeast-1g","op_gated_a_ap-southeast-1f","op_gated_ram","op_gated_op_gated_messageover5g","op_gated_ecs_c7","op_gated_map_vision","op_gated_ecs_ri","op_gated_ucs_onpremises","op_gated_a_ru-northwest-2c","op_gated_ram_intl","op_gated_ief_platinum"],"userVersion":"new"}
				resolve(data)
			})
        };
        this.queryAccountSum = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/BSS/OpenApi/v1/accounts/sum/accountinfo',
                'timeout': 1e4
            });
        };
        this.queryBESumInfo = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/BSS/OpenApi/v1/customers/get-beinfos?excludeUselessBe=1',
                'timeout': 1e4
            });
        };
        this.queryAccountBalance = function(customerId, beId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/csb-financial-service/v1/account/balances?customerId={customer_id}&accountType=-1&beId={be_id}',
                    'o': {
                        'customer_id': customerId,
                        'be_id': beId
                    }
                },
                'timeout': 1e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.heartbeat = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/heartbeat',
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.getMessagesTypes = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/messageTypes',
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.getUserChoices = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/user_choices',
                'params': {
                    'userId': options.userId || '',
                    'preferName': options.type || ''
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.updateUserChoices = function(options) {
            options = options || {};
            return camel.post({
                'url': window.appWebPath + '/rest/silvan/rest/v1.0/user_choices',
                'params': {
                    'userId': options.userId || '',
                    'preferName': options.type || '',
                    'preferDisplayName': options.value || '',
                    'preferDesc': options.preferDesc || ''
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.getAssumeRoles = function(options) {
            options = options || {};
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/iam/assumeRoles/{user_id}',
                    'o': {
                        'user_id': options.userId
                    }
                },
                'params': {
                    'limit': 5
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.assumeRole = function(options) {
            options = options || {};
            return camel.get({
                'url': window.appWebPath + '/rest/changeRole',
                'timeout': 6e4,
                'mask': !0,
                'params': {
                    'agencyId': options.agencyId
                },
                'beforeSend': framework.beforeSend
            });
        };
        this.getUserProjects = function(options) {
            options = options || {};
            return 'private' === localizationConfig.x_cloud_type ? camel.get({
                'url': {
                    's': window.appWebPath + '/rest/iam/v3/users/{user_id}/projects',
                    'o': {
                        'user_id': options.userId
                    }
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            }) : camel.get({
                'url': window.appWebPath + '/rest/iam/v3/projects',
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.queryIamUser = function(userId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/iam/service/user/{userId}',
                    'o': {
                        'userId': userId
                    }
                },
                'timeout': 1e4,
                'params': {
                    'scope': 'imgpaths'
                },
                'beforeSend': framework.beforeSend
            });
        };
        this.queryMcUserRole = function(userId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/mc/v1/{user_id}/role',
                    'o': {
                        'user_id': userId
                    }
                },
                'timeout': 1e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.messageStatus = function(options) {
            return camel.put({
                'url': {
                    's': window.appWebPath + '/rest/mc/v1/{domain_id}/messages/status',
                    'o': {
                        'domain_id': options.domainId
                    }
                },
                'timeout': 1e4,
                'params': {
                    'message_ids': options.messageIds,
                    'category_id': options.categoryId
                },
                'beforeSend': framework.beforeSend
            });
        };
        this.queryMcUnreadCount = function(domainId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/mc/v1/{domain_id}/messages/envelope/unread',
                    'o': {
                        'domain_id': domainId
                    }
                },
                'timeout': 1e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.queryMcMessages = function(domainId, params) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/mc/v1/{domain_id}/messages',
                    'o': {
                        'domain_id': domainId
                    }
                },
                'params': params,
                'timeout': 1e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.createIncidentInfo = function(createFeedback) {
            createFeedback = createFeedback || {};
            return camel.post({
                'url': window.appWebPath + '/rest/osm/incidentservice/api/v1/feedback',
                'params': {
                    'createFeedback': createFeedback
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.queryCusBrief = function(userId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/osm/incidentservice/api/v1/queryincident'
                },
                'params': {
                    'status': 1
                },
                'timeout': 1e4
            });
        };
        this.queryRealNameAuth = function(params) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/BSS/OpenApi/v1/extention/customer/customerverified/status'
                },
                'params': params
            });
        };
        this.queryTracker = function(projectId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/v1.0/{projectId}/tracker',
                    'o': {
                        'projectId': projectId
                    }
                },
                'params': {},
                'timeout': 6e4
            });
        };
        this.queryTraceList = function(projectId, trackerName, params, regionId) {
            params = params || {};
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/v2.0/{projectId}/{trackername}/trace',
                    'o': {
                        'trackername': trackerName,
                        'projectId': projectId
                    }
                },
                'params': params,
                'timeout': 6e4,
                'region': regionId
            });
        };
        this.customMaintenances = function() {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/silvan/rest/v1.0/customMaintenances/{region_id}/{service_id}?locale={locale}',
                    'o': {
                        'region_id': $rootScope.selectRegionId,
                        'service_id': window.location.pathname.split('/')[1],
                        'locale': window.urlParams.lang
                    }
                },
                'timeout': 6e4,
                'beforeSend': framework.beforeSend
            });
        };
        this.showSuspendedTip = function(localizationConfig, type) {
            var type = '<span class="frame-os-check-hint-display common-font-size-big1"> <span class="frame-os-check-tips-icon hwsicon-frame-image-tip dt-tip-background-color"></span><span class="frame-os-check-tips" ng-bind="i18n.console_term_tipInfo_' + type + '_label"></span><span class="frame-os-check-link-info"><a ng-if="i18n.console_term_learnMore_' + type + '_link" ng-href="{{i18n.console_term_learnMore_' + type + '_link}}"class="learn-more-link-info" ng-bind="i18n.console_term_learnMore_label" target="_blank"></a></span></span></div>', messageWrap = $('<div id="frame-suspended-check"></div>');
            $('#frame-suspended-check').length <= 0 && messageWrap.prependTo($(document.body));
            $('#frame-suspended-check').html(type);
            type = 62 + (messageWrap = $('#service-menus')).height();
            messageWrap.css('top', 62);
            $('.console-menu-nav-list-wrapper').css('top', type);
            $rootScope.tipPosition = {
                'paddingTop1': 112,
                'paddingTop2': 162
            };
            this.setTipTopPadding($rootScope.tipPosition.paddingTop1, $rootScope.tipPosition.paddingTop2);
            0 < $('#frame-suspended-check').length && $('#frame-suspended-check').show();
        };
        this.hideSuspendedTip = function(localizationConfig) {
            var $serviceMenus, headerHeight;
            $('#frame-suspended-check').hide();
            headerHeight = 0 + ($serviceMenus = $('#service-menus')).height();
            $serviceMenus.css('top', 0);
            $('.console-menu-nav-list-wrapper').css('top', headerHeight);
            0 < $('#frame-os-check').length && ($rootScope.tipPosition = {
                'paddingTop1': 112,
                'paddingTop2': 162
            });
            $rootScope.tipPosition = {
                'paddingTop1': 50,
                'paddingTop2': 100
            };
            this.setTipTopPadding($rootScope.tipPosition.paddingTop1, $rootScope.tipPosition.paddingTop2);
        };
        this.setTipTopPadding = function(paddingTop1, paddingTop2) {
            if (!paddingTop1 && !paddingTop2 && !$rootScope.tipPosition) return;
            paddingTop1 = paddingTop1 || $rootScope.tipPosition.paddingTop1;
            paddingTop2 = paddingTop2 || $rootScope.tipPosition.paddingTop2;
            $timeout(function() {
                var $fs = $('.framework-scrolling'), bodyHeight = $(document.body).height(), footerHeight = $('#footer').height();
                if (0 < $('#frame-os-check').length && 50 === paddingTop1) {
                    paddingTop1 = 112;
                    paddingTop2 = 162;
                }
                if ('TSI' !== localizationConfig.x_domain_type) {
                    $('#service-content').css('padding-top', paddingTop1 + 'px');
                    $fs.attr('style') ? $fs.css('cssText', $fs.attr('style') + 'top: ' + paddingTop1 + 'px !important') : $fs.css('cssText', 'top: ' + paddingTop1 + 'px !important');
                    $('.dropdown-menu').css({
                        'max-height': bodyHeight - paddingTop1 - footerHeight + 'px'
                    });
                } else {
                    $('#service-content').css('padding-top', paddingTop2 + 'px');
                    $fs.attr('style') ? $fs.css('cssText', $fs.attr('style') + 'top: ' + paddingTop2 + 'px !important') : $fs.css('cssText', 'top: ' + paddingTop2 + 'px !important');
                    $('.dropdown-menu').css({
                        'max-height': bodyHeight - paddingTop2 - footerHeight + 'px'
                    });
                }
            }, 10);
        };
        this.queryCustomerManangment = function(options) {
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/BSS/OpenApi/v1/customers/queryCusBrief/{userId}',
                    'o': {
                        'userId': options.domainId
                    }
                },
                'timeout': 1e4,
                'beforeSend': framework.beforeSend
            });
        };
    }
    var framework = {
        'beforeSend': function(request, setting) {
            request.setRequestHeader('X-Request-From', 'Framework');
        }
    };
    service.$injector = [ '$q', 'camel' ];
    return service;
});

define('app-remote/services/utilService', [], function() {
    'use strict';
    return function() {
        function trimEmpty(value) {
            if (!value) return '';
            return value.replace(/(^\s*)|(\s*$)/g, '');
        }
        var i18nSubRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;
        this.i18nReplace = function(s, o) {
            return s.replace ? s.replace(i18nSubRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key];
            }) : s;
        };
        this.i18nReplaceFull = function(s, o) {
            if (!s || !o) return;
            return s.replace ? s.replace(i18nSubRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key];
            }) : s;
        };
        this.getCookie = function(key) {
            var consoleCookies, cookie, i;
            if (!document.cookie) return null;
            consoleCookies = document.cookie.split(';');
            for (i = 0; i < consoleCookies.length; i++) if ((cookie = consoleCookies[i].split('=')) && 2 <= cookie.length && key === trimEmpty(cookie[0])) return trimEmpty(cookie[1]);
        };
        this.setCookie = function(cname, cvalue) {
            document.cookie = cname + '=' + cvalue + ';path=/;domain=' + window.cloudCookieDomain;
        };
    };
});

define('app-remote/services/messageService', [], function() {
    'use strict';
    var msgID = 1;
    return [ '$timeout', '$rootScope', 'storage', function($timeout, rootScope, storage) {
        rootScope.ctiMsgManager || (rootScope.ctiMsgManager = []);
        this.alert = function(type, message, duration, noTypeIcon, noCloseIcon) {
            var i, curLen = rootScope.ctiMsgManager.length;
            3 <= curLen && rootScope.ctiMsgManager.splice(2, curLen - 3 + 1);
            curLen = {
                'id': 'msg_' + msgID++,
                'show': !0,
                'label': message,
                'type': type,
                'typeIcon': !noTypeIcon,
                'closeIcon': !noCloseIcon,
                'duration': duration = duration || ('error' === type ? 1e4 : 5e3)
            };
            if (0 < rootScope.ctiMsgManager.length) for (i = 0; i < rootScope.ctiMsgManager.length; i++) if (message === rootScope.ctiMsgManager[i].label) {
                rootScope.ctiMsgManager[i].show = !1;
                rootScope.ctiMsgManager.splice(i, 1);
            }
            message && this.storageMsg(type, message);
            rootScope.ctiMsgManager.splice(0, 0, curLen);
        };
        this.showError = function(message, duration) {
            this.alert('error', message, duration);
        };
        this.showSuccess = function(message, duration) {
            this.alert('success', message, duration);
        };
        this.showPrompt = function(message, duration) {
            this.alert('prompt', message, duration);
        };
        this.showWarn = function(message, duration) {
            this.alert('warn', message, duration);
        };
        this.storageMsg = function(type, msg) {
            var msgData = {};
            msgData.content = '[' + type + '] ' + msg;
            msgData.time = new Date();
            type = storage.cookieStorage.getItem('agencyID');
            50 < (msg = (msg = storage.get('framework_tips_msg' + type)) || []).unshift(msgData) && msg.pop();
            storage.add('framework_tips_msg' + type, msg);
            storage.add('framework_tips_new_msg' + type, !0);
            $('.frame-message-round') && $('.frame-message-round').css('display', 'block');
        };
    } ];
});

define('app-remote/services/localeService', [ 'language-remote/framework' ], function(i18n) {
    'use strict';
    function service(tiService, $filter) {
        angular.extend(this, tiService);
        this.formatCurrency = function(currency, type) {
            var currentDecimalsCount, result, min, max, currencySymbol;
            currentDecimalsCount = function(currency) {
                var result = -1;
                return result = angular.isNumber(currency) ? (currency = currency.toString().split('.'))[1] ? currency[1].length : 0 : result;
            }(currency = !angular.isNumber(currency) && angular.isString(currency) ? Number(currency) : currency);
            result = '';
            if (-1 === currentDecimalsCount) return result;
            min = parseInt(i18n.localeRule.NUMBER_FORMATS.PATTERNS[1].minFrac, 10);
            max = parseInt(i18n.localeRule.NUMBER_FORMATS.PATTERNS[1].maxFrac, 10);
            currencySymbol = i18n.localeRule.NUMBER_FORMATS.CURRENCY_SYM;
            result = 0 <= currentDecimalsCount && currentDecimalsCount <= min ? $filter('currency')(currency, currencySymbol, min) : min < currentDecimalsCount && currentDecimalsCount <= max ? $filter('currency')(currency, currencySymbol, currentDecimalsCount) : $filter('currency')(currency, currencySymbol, max);
            return result = 'short' === type ? result.replace(i18n.localeRule.NUMBER_FORMATS.PATTERNS[1].posSuf, '') : result;
        };
        this.formatLocaleDateTime = function(dateTime) {
            return this.formatDateTime(dateTime) + ' ' + this.getZoneSuffix(dateTime);
        };
        this.getZoneSuffix = function(dateTime) {
            dateTime = $filter('date')(dateTime, 'Z');
            return 'GMT' + dateTime.substr(0, 1) + dateTime.substr(1, 2) + ':' + dateTime.substr(3, 4);
        };
    }
    service.$injector = [ 'tiService', '$filter' ];
    return service;
});

define('lazy-load/lazyLoad', [ 'ui-router/angular-ui-router' ], function(router) {
    var lazy = angular.module('lazy', [ 'ui.router' ]);
    lazy.makeLazy = function(module) {
        module.config(function($compileProvider, $filterProvider, $controllerProvider, $provide) {
            module.tinyDirective = lazy.register($compileProvider.directive);
            module.tinyFilter = lazy.register($filterProvider.register);
            module.tinyController = lazy.register($controllerProvider.register);
            module.tinyProvider = lazy.register($provide.provider);
            module.tinyService = lazy.register($provide.service);
            module.tinyFactory = lazy.register($provide.factory);
            module.tinyValue = lazy.register($provide.value);
            module.tinyConstant = lazy.register($provide.constant);
        });
        module.tinyStateConfig = function(routerConfig) {
            function isConfigArrayLike(config) {
                return angular.isArray(config) && 0 < config.length;
            }
            if (!angular.isObject(routerConfig)) return;
            module.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
                if (isConfigArrayLike(routerConfig.stateConfig)) {
                    var normalConfig;
                    angular.forEach(routerConfig.stateConfig, function(stateConfig, key) {
                        normalConfig = lazy.parseConfig(stateConfig);
                        $stateProvider.state(normalConfig);
                    });
                }
                isConfigArrayLike(routerConfig.urlMatch) && angular.forEach(routerConfig.urlMatch, function(urlMatch, key) {
                    2 === urlMatch.length ? $urlRouterProvider.when(urlMatch[0], urlMatch[1]) : 1 === urlMatch.length && $urlRouterProvider.otherwise(urlMatch[0]);
                });
            } ]);
        };
        return module;
    };
    lazy.register = function(registrationMethod) {
        return function(name, constructor) {
            registrationMethod(name, constructor);
        };
    };
    lazy.parseConfig = function(stateConfig) {
        if (!stateConfig.scripts) return stateConfig;
        stateConfig.resolve = stateConfig.resolve || {};
        stateConfig.resolve.deps = function($q, $rootScope) {
            function load(url) {
                var deferred = $q.defer();
                if (null === url) return deferred.resolve(), deferred.promise;
                require(url, function() {
                    $rootScope.$apply(function() {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            }
            return $q.all([ load(stateConfig.scripts.directives || null), load(stateConfig.scripts.controllers || null), load(stateConfig.scripts.services || null), load(stateConfig.scripts.factories || null), load(stateConfig.scripts.js || null) ]);
        };
        return stateConfig;
    };
    return lazy;
});

define('app-remote/framework/configures/frameworkRouterConfig', [ 'lazy-load/lazyLoad' ], function(lazyLoadModule) {
    'use strict';
    var configArr = [ {
        'name': 'frameworkIndex',
        'url': '/frameworkIndex'
    }, {
        'name': 'nonsupportRegion',
        'url': '/nonsupportRegion',
        'templateUrl': 'src/app/framework/views/nonsupportRegion.html',
        'controller': 'nonsupportRegion.ctrl',
        'scripts': {
            'controllers': [ 'app-remote/framework/controllers/nonsupportRegionCtrl' ]
        }
    }, {
        'name': 'beingMaintained',
        'url': '/beingMaintained',
        'templateUrl': 'src/app/framework/views/beingMaintained.html',
        'controller': 'beingMaintained.ctrl',
        'scripts': {
            'controllers': [ 'app-remote/framework/controllers/beingMaintainedCtrl' ]
        }
    }, {
        'name': 'accessDeclined',
        'url': '/accessDeclined',
        'templateUrl': 'src/app/framework/views/accessDeclined.html',
        'controller': 'accessDeclined.ctrl',
        'scripts': {
            'controllers': [ 'app-remote/framework/controllers/accessDeclinedCtrl' ]
        }
    } ], frmModule = angular.module('frm', [ 'ui.router' ]);
    (frmModule = lazyLoadModule.makeLazy(frmModule)).tinyStateConfig({
        'stateConfig': configArr
    });
    frmModule.filter('maxDigits', function() {
        return function(input, digits) {
            digits = Math.pow(10, digits) - 1;
            return input = digits < input ? digits + '+' : input;
        };
    });
    return frmModule;
});

define('app-remote/framework/controllers/nonsupportRegionCtrl', [], function() {
    'use strict';
    var nonsupportCtrl = [ '$rootScope', '$scope', '$sce', '$stateParams', function($rootScope, $scope, $sce, $stateParams) {
        function initNonsupportTips() {
            $scope.displayRegionName && $scope.endpointName && ($scope.console_term_nonsupportRegion_tips = $sce.trustAsHtml($scope.i18nReplace($scope.i18n.console_term_nonsupportRegion_tips, {
                'serviceName': '<span class="common-color-title">' + $scope.endpointName + '</span>',
                'regionName': '<span class="common-color-title">' + $scope.displayRegionName + '</span>'
            })));
        }
        $scope.$watch('endpointName', initNonsupportTips);
        $scope.$watch('displayRegionName', initNonsupportTips);
        $scope.$watch('regions', function(nv) {
            0 < nv.length && ($scope.console_term_nonsupport_label = function() {
                var i, isRegion = !1;
                for (i = 0; i < $rootScope.regions.length; i++) if ($rootScope.regions[i].id === $rootScope.projectName) {
                    isRegion = !0;
                    break;
                }
                return isRegion;
            }() ? $scope.i18n.console_term_nonsupportRegion_label : $scope.i18n.console_term_nonsupportProject_label);
        });
    } ], frameModule = angular.module('frm');
    frameModule.tinyController('nonsupportRegion.ctrl', nonsupportCtrl);
    return frameModule;
});

define('app-remote/framework/controllers/beingMaintainedCtrl', [], function() {
    'use strict';
    var frameModule = angular.module('frm');
    frameModule.tinyController('beingMaintained.ctrl', [ '$scope', '$sce', 'frameworkService', function($scope, $sce, frameworkService) {
        $scope.$watch('displayRegionName', function() {
            if ($scope.displayRegionName) {
                $scope.console_term_beingMaintained_label = $sce.trustAsHtml($scope.i18nReplace($scope.i18n.console_term_beingMaintained_label, {
                    'regionName': '<span class="common-color-title">' + $scope.displayRegionName + '</span>'
                }));
                frameworkService.customMaintenances().then(function(data) {
                    $scope.console_term_beingMaintained_describe_label = data.describe;
                    $scope.console_term_beingMaintained_time_label = $scope.i18n.console_term_beingMaintained_time_label + data.startTime + ' - ' + data.endTime;
                });
            }
        });
    } ]);
    return frameModule;
});

define('app-remote/framework/controllers/accessDeclinedCtrl', [], function() {
    'use strict';
    var frameModule = angular.module('frm');
    frameModule.tinyController('accessDeclined.ctrl', [ function() {} ]);
    return frameModule;
});

define('framework.tpls', [ 'app-remote/framework/directive/hwsDirective' ], function(module) {
    module.run([ '$templateCache', function($templateCache) {
        'use strict';
        $templateCache.put('src/app/framework/views/accessDeclined.html', '<div class="console-content-padding"><div class="special-content"><div class="special-content-left-image"><img src="/static/framework/4.4.0/theme/default/images/nonsupport-small.png"></div><div class="special-content-right-content"><p class="common-font-size-big4 common-color-title" ng-bind="i18n.console_term_accessDeclined_label"></p><p class="common-color-content"><span ng-bind="i18n.console_term_accessOpen_label"></span></p></div></div></div>');
        $templateCache.put('src/app/framework/views/appendCustomLeftMenu.html', '<ul><li class="dropdown pull-left menu-dropdown" ng-repeat="row in leftMenuAppend  track by $index"><div class="dropdown pull-left menu-dropdown" style="margin-left:40px" ng-mouseenter="isCustomLeftOpen = true" ng-mouseleave="isCustomLeftOpen = false" dropdown is-open="isCustomLeftOpen"><a class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate" ng-href="{{row.href}}" target="_blank"><span class="console-topbar-fixed-width-username append-menu-show-position" ng-bind="row.label"></span></a><ul ng-if="row.list&&row.list.length>0" class="dropdown-menu custom-activity-dropdown-menu common-dropdown-menu common-font-size-common"><li class="dropdown-menu-li-height frame-order-list" ng-repeat="list in row.list"><a ng-href="{{list.href}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="list.label"></span></a></li></ul></div></li></ul>');
        $templateCache.put('src/app/framework/views/beingMaintained.html', '<div class="console-content-padding"><div class="maintenance"><div class="maintained-image"><img src="/static/framework/4.4.0/theme/default/images/maintenance-small.png"></div><div class="maintenance-region"><div class="maintenance-region-plus"><p class="common-font-size-big7 common-color-title" ng-bind-html="console_term_beingMaintained_label"></p><p ng-bind="console_term_beingMaintained_describe_label" style="max-width:400px;word-break:break-all"></p><p ng-bind="console_term_beingMaintained_time_label"></p></div><div class="maintenance-region-support-list"><span class="common-color-prompt common-font-size-big8" ng-bind="i18n.console_term_supportRegion_label"></span><ul><li ng-repeat="region in regions" ng-if="!region.disable && !region.maintence && region.id !== selectRegionId"><div class="region-maintenance-circle"></div><a hws-href href="" ng-click="changeRegion(region.id)"><span class="common-font-size-big9" ng-bind="region.name"></span></a><ul style="padding-left:30px" ng-if="supportMultiProject"><li ng-repeat="project in region.projects" ng-if="project.userProjectNameFlag && !project.disable"><a hws-href href="" ng-click="changeRegion(project.name)"><span ng-bind="project.displayName" class="region-name"></span></a></li></ul></li></ul></div></div></div></div>');
        $templateCache.put('src/app/framework/views/consultMenu.html', '<div ng-if="localizationConfig.newHECMenu && !localizationConfig.isCMC" class="hide-consult-menu-russia-style"><div class="consult-box"><div class="consult-center consult-content"><div class="consult-icon-show"><div class="append_hec_icon"><i class="hwsicon-frame-image-consult feedback-icon"></i></div><div class="append_hec_online" ng-if="consultAndFeedback"><span class="hec_consult_value" ng-bind="i18n.console_term_customer_consult_value"></span> <em>.</em> <span class="hec_feedback_value" ng-bind="i18n.console_term_feedback_button"></span></div></div><div class="consult-content-item"><ul class="consult-content-show"><li class="consult-item-content" ng-if="links.intelligent_service_common && i18n.console_term_intelligent_service_label&&!localizationConfig.isHecHk&&intelligentAndService"><a class="consult-font-famliy" ng-href="{{links.intelligent_service_common}}" target="_blank"><span class="hwsicon-frame-image-intelligent-service consult-image-show" style="padding-right:10px"></span> <span ng-bind="i18n.console_term_intelligent_service_label"></span></a></li><li class="consult-item-content" ng-if="links.customer_service_common && i18n.console_term_customer_service_label&&!localizationConfig.isHecHk&&customerAndService"><a class="consult-font-famliy" ng-href="{{links.customer_service_common}}" target="_blank"><span class="hwsicon-frame-image-artificial-service consult-image-show" style="padding-right:10px"></span> <span ng-bind="i18n.console_term_customer_service_label"></span></a></li><li class="consult-item-content" ng-if="i18n.console_term_hot_wire_telephone && localizationConfig.isHecHk" style="position:relative"><span class="hwsicon-frame-image-pre-sales-advice consult-image-show" style="padding-right:4px"></span> <span class="consult-font-famliy" style="position:absolute;top:0;left:64px" ng-bind="i18n.console_term_hot_wire_telephone"></span> <span class="consult-font-famliy" style="position:absolute;top:20px;left:64px" ng-bind="i18n.console_term_hot_wire_telephone_number"></span></li><li class="consult-item-content" ng-if="links.help_center_common && i18n.console_term_helpcenter_label"><a hws-href ng-href="{{links.help_center_common}}" target="_blank" class="consult-font-famliy"><span class="hwsicon-frame-image-help-center consult-image-show" style="padding-right:10px"></span> <span ng-bind="i18n.console_term_helpcenter_label"></span></a></li><li class="consult-item-content" ng-if="i18n.console_term_suggestion_feedback" i18n="i18n" cf-feedback><a class="consult-font-famliy" style="cursor:pointer"><span class="hwsicon-frame-image-suggestion_feedback consult-image-show" style="padding-right:10px;padding-left:15px"></span> <span ng-bind="i18n.console_term_suggestion_feedback"></span></a></li></ul></div></div></div></div>');
        $templateCache.put('src/app/framework/views/feedback.html', '<div id="feedbackHtml" class="clearfix" ng-if="!localizationConfig.isHecHk"><form class="form"><div class="ti-modal-header"><span ng-bind="i18n.console_term_suggestion_feedback"></span> <span class="ti-close ti-icon ti-icon-close" ng-click="btnCancel()"></span></div><div class="ti-modal-body"><div class="feedback-content-tip"><span class="feedback-font-family-label append-hide-feedback-tip" ng-bind="i18n.console_term_feedback_tip"></span> <span class="feedback-font-family-label hec-hide-feedback-tip" ng-bind="i18n.console_term_feedback_tip_hk"></span> <a hws-href style="cursor:pointer" ng-href="{{i18n.console_term_feedback_kf_link}}" target="_blank" ng-bind="i18n.console_term_feedback_kf" class="append-hide-feedback-tip"></a></div><div class="field-content"><textarea style="resize:none;border-bottom-color:#fff" class="feedback-content-family" placeholder-text="{{i18n.console_term_feedback_placeholder}}" id="J_FeedbackContent" ng-model="parent.feedbackContent" ng-keyup="textKeyup($event)" ng-class="{\'feedback-content-border-over\': feedbackContent.length > maxContentLength}" maxlength="maxContentLength"></textarea><textarea style="border-top-color:#fff" class="feedback-bottom-dialog-border-show" ng-class="{\'feedback-content-border-over\': feedbackContent.length > maxContentLength}"></textarea><div class="feedback-content-limit feedback-bottom-count-position"><span class="feedback-content-count" id="J_Feedcount"><span ng-class="{\'feedback-input-font-color\':feedbackContent.length>0&&feedbackContent.length <= maxContentLength}"><span ng-class="{\'feedback-content-count-over\': feedbackContent.length > maxContentLength}" ng-bind="feedbackContent.length"></span></span>/<span ng-bind="maxContentLength"></span></span></div><div class="feedback-content-error-message" ng-show="feedbackContent.length > maxContentLength"><span class="ti-alert-type-icon ti-icon ti-icon-exclamation-circle" style="margin-right:0"></span> <span class="feedback-content-error-warn" ng-bind="i18n.console_term_feedback_warn"></span></div></div></div><div class="ti-modal-footer"><button type="button" ti-button ti-focused="true" ng-click="btnOK.click()" ng-disabled="btnOK.disable" ng-bind="i18n.console_term_feedback_button_submit" ng-class="{\'ti-btn-danger\':feedbackContent.length>0&&feedbackContent.length <= maxContentLength}"></button> <button type="button" ti-button ng-click="btnCancel()" ng-bind="i18n.console_term_feedback_button_cancle"></button></div></form></div>');
        $templateCache.put('src/app/framework/views/footer.html', '<div id="console-top-footer" ng-if="!localizationConfig.isCMC" class="console-top-footer common-page-footer frame-small-font-size"><div id="footer" class="footer-copyright-content common-link-inherit-color console-content-padding common-content-screen"><div class="dropup pull-left"><a class="console-footer-btn dropdown-toggle console-footer-btn-dropdown" data-toggle="dropdown"><span class="hwsicon-frame-image-footer-earth"></span> <span class="padding-left-20" ng-bind="languageName"></span></a><ul class="dropdown-menu dropdown-menu-language common-dropdown-menu common-font-size-common"><li ng-repeat="languageArr in supportLanguage" ng-if="languageArr[0] !== language"><a target="_self" ng-click="changeLanguage(languageArr[0])"><span ng-bind="languageArr[1]"></span></a></li></ul></div><div ng-if="i18n.console_term_face_book_link" class="pull-left"><a ng-href="{{i18n.console_term_face_book_link}}" class="console-footer-btn padding-left-10"><span class="pull-left" ng-bind="i18n.console_term_follow_us_label"></span> <span class="hwsicon-frame-image-face-book"></span></a></div><div class="pull-right" ng-if="localizationConfig.footerContentSwitch"><span ng-if="i18n.console_term_copyright_label" class="margin-left-3 pull-left margin-right4" ng-bind-html="console_term_copyright_label"></span><div ng-if="i18n.console_term_copyright_label && i18n.console_term_lawyerInCharge_link" class="pull-left console-footer-vertical-line"></div><a ng-if="i18n.console_term_paymentMethods_link" ng-href="{{i18n.console_term_paymentMethods_link}}" class="console-footer-btn pull-left" ng-bind="i18n.console_term_paymentMethods_label" target="_blank"></a><div ng-if="i18n.console_term_paymentMethods_link" class="pull-left console-footer-vertical-line"></div><a ng-if="i18n.console_term_lawyerInCharge_link" ng-href="{{i18n.console_term_lawyerInCharge_link}}" class="console-footer-btn pull-left" ng-bind="i18n.console_term_lawyerInCharge_label" target="_blank"></a><div ng-if="i18n.console_term_privacyProtect_link" class="pull-left console-footer-vertical-line"></div><a ng-if="i18n.console_term_privacyProtect_link" ng-href="{{i18n.console_term_privacyProtect_link}}" class="console-footer-btn pull-left" ng-bind="i18n.console_term_privacyProtect_label" target="_blank"></a><div ng-if="i18n.console_term_legalAgreement_link" class="pull-left console-footer-vertical-line"></div><a ng-if="i18n.console_term_legalAgreement_link" ng-href="{{i18n.console_term_legalAgreement_link}}" class="console-footer-btn pull-left" ng-bind="i18n.console_term_legalAgreement_label" target="_blank"></a><div ng-if="i18n.console_term_legalAgreement_link&&i18n.console_term_networkAccess_link" class="pull-left console-footer-vertical-line"></div><a ng-if="i18n.console_term_networkAccess_link" ng-href="{{i18n.console_term_networkAccess_link}}" class="console-footer-btn pull-left" ng-bind="i18n.console_term_networkAccess_label" target="_blank"></a></div></div></div>');
        $templateCache.put('src/app/framework/views/menus.html', '<div class="menu-top-content"><div id="menu-top" class="menu common-content-screen"><div><a locale-href ng-href="{{links.portal_common}}" class="console-nav-logo pull-left" target="_blank"></a> <a locale-href ng-href="{{links.portal_common}}" class="console-nav-logo-right pull-right" target="_blank"></a></div></div></div><div id="console-top-menu" class="console-top-menu common-page-header common-font-size-big1" ng-controller="menusCtrl"><div id="menu" class="menu console-content-padding common-content-screen custom-header"><div class="frame-menu-left common-link-inherit-color"><div class="hwsicon-frame-service-ecm icomoon-loading-div"></div><span custom-head-logo></span> <a ng-if="!headLogo.url" locale-href ng-href="{{links.portal_common}}" class="default-logo-show console-menu-logo pull-left" ng-class="{\'custom-menu-logo\': isCustomLogo}" target="_blank"></a> <a ng-if="!headLogo.url" locale-href ng-href="{{links.console_common}}" class="dt-logo-show console-menu-logo pull-left user-application-a-no-outline" style="cursor:pointer" target="_self"></a><div class="default-style pull-left common-link-inherit-color" ng-if="!localizationConfig.rightRegion" ng-include="regionTpl.url"></div><div class="custom-style pull-left common-link-inherit-color"><div class="dropdown nav-menu-dropdown console-menu-region" ng-class="{\'closed\':!regions || regions.length === 0}" ng-if="regionDisplayFlag && isServiceConsole && !globalRegionName"><a hws-href href class="dropdown-toggle console-topbar-btn console-topbar-region" data-toggle="dropdown"><span class="hwsicon-frame-image-position hwsicon-frame-position" ng-style="{ \'color\': regionHighlightColor[regionColorIndex % 12] }"></span> <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName" ng-attr-title="{{displayRegionName}}"></span> <span class="hwsicon-frame-image-caret menu-hwsicon-frame-region-caret"></span></a><ul role="menu" class="dropdown-menu dropdown-menu-region dropdown-menu-region-new common-dropdown-menu"><li console-dropdown region="region" ng-repeat="region in regions" class="region-item dropdown dropdown-submenu dropdown-menu-right" ng-class="{ \'region-disabled\': region.disable, \'current\': region.id == projectName}"><a ng-if="!region.isAlliance" hws-href href="" tabindex="-1" ng-click="changeRegion(region.id)" class="region-name-link"><div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div><div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div><span ng-bind="region.name" class="region-name"></span> <i class="right-icon" ng-show="region.projects && region.projects.length > 0"></i> </a><a ng-if="region.isAlliance" ng-href="{{region.regionLink}}" target="_blank" tabindex="-1" class="region-name-link"><div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div><div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div><span ng-bind="region.name" class="region-name"></span> <i class="right-icon" ng-show="region.projects && region.projects.length > 0"></i></a><ul class="dropdown-menu sub-dropdown-menu-region" ng-if="region.projects && region.projects.length > 0"><li ng-repeat="project in region.projects track by $index" ng-class="{ \'region-disabled\': project.disable || (project.userProjectNameFlag && !supportMultiProject), \'current\': project.name == projectName }"><a href="javascript:void(0);" project-name="{{project.name}}" class="sub-region-name-link J_Project" project-disable="{{project.disable || (project.userProjectNameFlag && !supportMultiProject)}}"><span ng-bind="project.displayName" class="region-name"></span></a></li></ul></li></ul></div></div><div class="pull-left console-menu-home"><a class="console-topbar-btn ctc-home-page-show"><span style="cursor:pointer" href ng-click="goHome()" class="console-menu-home-link-other"><span class="pull-left" ng-bind="i18n.console_term_console_label"></span> </span></a><a ng-if="!localizationConfig.newHECMenu" class="console-topbar-btn no-ctc-home-page-show"><span style="cursor:pointer" ng-click="goHome()" class="padding-left-15"><span class="pull-left padding-left-20" ng-bind="i18n.console_term_homePage_label"></span> </span></a><a ng-if="localizationConfig.newHECMenu" class="console-topbar-btn" href="javascript:void(0)" ng-click="goHome()"><span style="cursor:pointer" class="padding-left-15"><span class="pull-left padding-left-20" ng-bind="i18n.console_term_consolePage_label"></span></span></a></div><div class="dropdown pull-left menu-dropdown framework-service-list margin-left-20" ng-show="isServiceConsole && elementDisplayFlag"><a ng-if="!localizationConfig.newHECMenu || localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn console-menu-service-link" data-toggle="dropdown"><span class="pull-left padding-left-5" ng-bind="i18n.console_term_servicesList_label"></span> <span class="hwsicon-frame-image-caret menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span> </a><a ng-if="localizationConfig.newHECMenu&& !localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn console-menu-service-link" data-toggle="dropdown"><span class="pull-left padding-left-5" ng-bind="i18n.console_term_servicesList_label"></span> <span class="hwsicon-frame-image-caret menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span> </a><a ng-if="!localizationConfig.newHECMenu || localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn-click console-menu-service-link" data-toggle="dropdown"><span class="pull-left padding-left-5" ng-bind="i18n.console_term_servicesList_label"></span> <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span> </a><a ng-if="localizationConfig.newHECMenu&& !localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn-click console-menu-service-link" data-toggle="dropdown"><span class="pull-left padding-left-5" ng-bind="i18n.console_term_servicesList_label"></span> <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-main-caret console-topbar-fixed-width-div"></span></a><div class="dropdown-menu console-menu-nav-list-wrapper"><div ng-if="!localizationConfig.newHECMenu || localizationConfig.isCMC"><div class="console-menu-nav-list common-dropdown-menu"><div class="row service-list"><div ng-if="catalogLength(catalog.endpoints)" class="dropdown-submenu" ng-class="\'service-detail-\' + language" ng-repeat="catalog in serviceEndpoints"><div class="console-menu-nav-item"><legend class="console-topbar-nav-item-title common-content-title-service-catalog common-font-size-big2"><span ng-bind="catalog.catalog"></span></legend><ul class="margin-top-1"><li ng-repeat="endpoint in catalog.endpoints|filter:{nonsupportCurrentRegion:false}" class="clearfix" ng-init="genFavTipOptions()" ng-if="!endpoint.nonsupportCurrentRegion"><div class="pull-left dropdown-list-item-width"><a hws-href ng-href="{{endpoint.endpoint}}" target="_self" class="dropdown-menu-list-text"><span class="margin-left-1" title="{{endpoint.name}}" ng-bind="endpoint.name"></span></a></div><div class="pull-right padding-left-10"><a hws-href href="" data-stoppropagation="true" ng-click="favorite(endpoint.id,!endpoint.isFavorite)" class="service-list-item-icon"><div ng-if="endpoint.isFavorite" ti-tip="favTipOptions.cancel"><span class="hwsicon-frame-image-favorite-true menu-hwsicon-frame-service-favorite common-font-size-big2"></span></div><div ng-if="!endpoint.isFavorite" ti-tip="favTipOptions.collect"><div class="placeholder-div"></div><span class="hwsicon-frame-image-favorite-new menu-hwsicon-frame-service-favorite-false"></span></div></a></div></li></ul></div></div></div><div class="service-list-item-tr"><div class="div-tr"></div></div><div class="row favorite-menu-nav-tips"><div class="col-md-12 console-menu-nav-tips common-font-size-common padding-left-30" ng-if="!favoriteError"><span ng-bind-html="console_term_clickhere_tips"></span></div><div class="col-md-12 console-menu-nav-tips common-font-size-common padding-left-20 color-red" ng-if="favoriteError"><span ng-bind-html="i18n.console_term_collectTip_valid"></span></div></div></div></div><div ng-if="localizationConfig.newHECMenu && !localizationConfig.isCMC"><ul class="service-list-ul" id="serviceListLayout"><li id="allSevice" class="service-list-li default-selected-service-list-set-color"><a id="defaultAllServiceLabel" ng-bind="i18n.console_term_serviceList_allService" class="service-list-all-service-category-family-hover"></a><div class="service-list-category-submenu-layout service-list-all-service-default-show-all" style="overflow-y:auto"><div ng-repeat=" subSeviceList in allSeviceList "><div class="service-list-all-service-menu-show service-list-submen-all-service"><div class="service-list-category-item-show service-list-all-service" ng-repeat="catalog in subSeviceList track by $index "><div><div class="service-list-all-service-category"><span ng-bind="catalog.catalog" title="{{catalog.catalog}}"></span></div><div ng-repeat="endpoint in catalog.endpoints" class="service-list-category-show-margin"><a ng-click="currentSelectedService(endpoint.endpoint,endpoint.id)"><div class="service-all-service-item"><div class="service-list-all-service-name-show"><span ng-bind="endpoint.name" title="{{endpoint.name}}"></span></div></div></a></div></div></div></div></div></div></li><li id="categoryService" class="service-list-li" ng-repeat="catalog in serviceEndpoints track by $index " ng-mouseenter="selectServiceCategory(catalog.endpoints)" ng-mouseleave="unselectServiceCategory()"><div class="service-list-category-family"><a ng-bind="catalog.catalog"></a></div><div class="service-list-category-submenu-layout"><div ng-repeat=" list in serviceList "><div class="service-list-right-menu-show service-list-service-submen-category-service"><div class="service-list-dl"><div ng-repeat="endpoint in list "><a ng-click="currentSelectedService(endpoint.endpoint,endpoint.id)"><div class="service-item service-list-child-service-show"><div class="service-list-child-service-info-show"><div class="service-list-service-name-show"><span ng-bind="endpoint.name"></span></div><div class="service-list-service-des-show"><span ng-bind="endpoint.description"></span></div></div></div></a></div></div></div></div></div></li></ul></div></div></div><div class="dropdown pull-left menu-dropdown frame-favorite-service-list favorite-margin-left"><a ng-if="!localizationConfig.newHECMenu" hws-href href class="dropdown-toggle console-topbar-btn favorite-service-list-menu" data-toggle="dropdown" ng-click="showCustomFavoriteMenu()"><favorite-show-view></a><a ng-if="localizationConfig.newHECMenu&&!localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn" data-toggle="dropdown" ng-click="showCustomFavoriteMenu()"><favorite-show-view></a><a ng-if="localizationConfig.newHECMenu&&localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn favorite-service-list-menu" data-toggle="dropdown" ng-click="showCustomFavoriteMenu()"><favorite-show-view></a><a ng-if="!localizationConfig.newHECMenu" hws-href href class="dropdown-toggle console-topbar-btn-click favorite-service-list-menu" data-toggle="dropdown" ng-click="hideCustomFavoriteMenu()"><favorite-hide-view></a><a ng-if="localizationConfig.newHECMenu&&!localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn-click" data-toggle="dropdown" ng-click="hideCustomFavoriteMenu()"><favorite-hide-view></a><a ng-if="localizationConfig.newHECMenu&&localizationConfig.isCMC" hws-href href class="dropdown-toggle console-topbar-btn-click favorite-service-list-menu" data-toggle="dropdown" ng-click="hideCustomFavoriteMenu()"><favorite-hide-view></a><div ng-if="!localizationConfig.newHECMenu" class="dropdown-menu common-dropdown-menu frame-favorite-service-list-options common-favorite-menu"><a hws-href ng-if="favoriteEndpoints.length == 0" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" target="_self"><span class="console-menu-favorite-item-text" ng-bind="i18n.console_term_emptyFavoriteList_label"></span> </a><a hws-href ng-if="elementDisplayFlag && (isServiceConsole || currentService === \'marketplace\')" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" ng-repeat="favoriteEndpoint in favoriteEndpoints" ng-href="{{favoriteEndpoint.endpoint}}" target="_self" ng-attr-title="{{favoriteEndpoint.name}}"><span class="console-menu-favorite-item-text" id="{{favoriteEndpoint.tipsElementId}}" ng-bind="favoriteEndpoint.name"></span></a></div><div ng-if="localizationConfig.newHECMenu&&!localizationConfig.isCMC" class="frame-favorite-service-list-options custom-favorite-menu" id="favoriteListShow"><a hws-href ng-if="favoriteEndpoints.length == 0" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" target="_self"><span class="console-menu-favorite-item-text" ng-bind="i18n.console_term_emptyFavoriteList_label"></span> </a><a href="javascript:void(0);" ng-if="elementDisplayFlag && (isServiceConsole || currentService === \'marketplace\')" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" ng-repeat="favoriteEndpoint in favoriteEndpoints" ng-click="currentSelectedService(favoriteEndpoint.endpoint,favoriteEndpoint.endpointId)" target="_self" ng-attr-title="{{favoriteEndpoint.name}}"><span class="console-menu-favorite-item-text" id="{{favoriteEndpoint.tipsElementId}}" ng-bind="favoriteEndpoint.name"></span> </a><a hws-href class="add-favorite" ng-click="showFavoriteModal()"></a> <a hws-href class="add-favorite-close" ng-click="hideCustomFavoriteMenu()"></a></div><div ng-if="localizationConfig.newHECMenu&&!localizationConfig.isCMC" class="favorite-modal"><div class="favorite-modal-shadow"></div><div class="favorite-modal-main"><div class="favorite-modal-header"><div class="favorite-modal-title"><span ng-bind="i18n.console_term_collect_tip"></span> <span class="favorite-tips"><span ng-bind="i18n.console_term_favorite_modalTips_label"></span>(<span class="{{favoriteEndpoints.length >= favoriteServiceMax ? \'favorite-count favorite-overcount\' : \'favorite-count\'}}" ng-bind="favoriteEndpoints.length"></span>/<span ng-bind="favoriteServiceMax"></span>)</span></div><a class="favorite-modal-close" ng-click="hideFavoriteModal()"></a></div><div class="favorite-modal-content"><div class="favorite-modal-content-list"><div class="favorite-modal-catalog" ng-class="\'service-detail-\' + language" ng-repeat="catalog in serviceEndpoints"><div class="console-menu-nav-item"><legend class="console-topbar-nav-item-title common-content-title-service-catalog common-font-size-big2" ng-bind="catalog.catalog"></legend><ul><li ng-repeat="endpoint in catalog.endpoints" class="clearfix" ng-click="favorite(endpoint.id,!endpoint.isFavorite)" ng-init="genFavTipOptions()"><a hws-href href="" data-stoppropagation="true" ng-click="favorite(endpoint.id,!endpoint.isFavorite)" class="{{endpoint.isFavorite ? \'dropdown-menu-list-text-favorite\' : \'dropdown-menu-list-text\'}}" ti-tip="endpoint.isFavorite ? favTipOptions.cancel : (favoriteEndpoints.length >= favoriteServiceMax ? favTipOptions.collectFull : favTipOptions.collect)" title="{{endpoint.name}}" ng-bind="endpoint.name"></a></li></ul></div></div></div></div></div></div><div ng-if="localizationConfig.newHECMenu&&localizationConfig.isCMC" class="dropdown-menu common-dropdown-menu frame-favorite-service-list-options common-favorite-menu"><a hws-href ng-if="favoriteEndpoints.length == 0" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" target="_self"><span class="console-menu-favorite-item-text" ng-bind="i18n.console_term_emptyFavoriteList_label"></span> </a><a hws-href ng-if="elementDisplayFlag && (isServiceConsole || currentService === \'marketplace\')" ng-mouseleave="favoriteEndpointMouseLeave()" class="pull-left console-menu-favorite-item favorite-service-list common-font-size-common common-font-size-big1" ng-repeat="favoriteEndpoint in favoriteEndpoints" ng-href="{{favoriteEndpoint.endpoint}}" target="_self" ng-attr-title="{{favoriteEndpoint.name}}"><span class="console-menu-favorite-item-text" id="{{favoriteEndpoint.tipsElementId}}" ng-bind="favoriteEndpoint.name"></span></a></div></div><div class="dropdown pull-left menu-dropdown" custom-head-menu></div></div><div class="frame-menu-right common-page-header custom-header"><div class="default-style common-link-inherit-color"><a locale-href ng-if="!localizationConfig.isCMC && links.help_center_common" class="pull-right console-topbar-btn console-topbar-btn-help default-style common-help margin-left-7" ng-href="{{links.help_center_common}}" ti-tip="helpTips.tooltip" target="_blank"><span class="hwsicon-frame-image-help-new"></span></a><div class="dropdown pull-right menu-dropdown help-menu-dropdown custom-style"><a hws-href href class="console-topbar-btn dropdown-toggle console-topbar-btn-help" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span> </a><a hws-href href class="console-topbar-btn-click dropdown-toggle console-topbar-btn-help drodown-radius-click-bg" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span></a><ul class="dropdown-menu common-dropdown-menu common-font-size-common"><li class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.help_center_common}}" target="_blank"><span ng-bind="i18n.console_term_helpcenter_label"></span></a></li><li class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.hotline_Center_common}}" target="_blank"><span ng-bind="i18n.console_term_hotlineCenter_label"></span></a></li></ul></div><div class="dropdown pull-right menu-dropdown help-menu-dropdown default-style" ng-if="!localizationConfig.newHECMenu"><a hws-href href class="console-topbar-btn dropdown-toggle console-topbar-btn-help" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span> </a><a hws-href href class="console-topbar-btn-click dropdown-toggle console-topbar-btn-help drodown-radius-click-bg" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span></a><ul class="dropdown-menu common-dropdown-menu common-font-size-common"><li class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.help_center_common}}" target="_blank"><span ng-bind="i18n.console_term_helpcenter_label"></span></a></li><li class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{i18n.console_term_robot_link}}" target="_blank"><span ng-bind="i18n.console_term_robot_label"></span></a></li></ul></div><div class="dropdown pull-right menu-dropdown help-menu-dropdown ocb-custom-style"><a hws-href href class="console-topbar-btn dropdown-toggle console-topbar-btn-help" ng-attr-title="{{i18n.console_term_helpcenter_label}}" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span> </a><a hws-href href class="console-topbar-btn-click dropdown-toggle console-topbar-btn-help drodown-radius-click-bg" data-toggle="dropdown"><span class="hwsicon-frame-image-help-new hwsicon-frame-help"></span></a><ul class="dropdown-menu common-dropdown-menu common-font-size-common"><li class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.help_center_common}}" target="_blank"><span ng-bind="i18n.console_term_helpcenter_label"></span></a></li></ul></div><div class="pull-right" ng-if="localizationConfig.newHECMenu" ng-include="traceTpl.url"></div><div ng-if="localizationConfig.defaultHelpCenterSwitch&& links.help_center_common" class="console-topbar-btn pull-right nav-menu-dropdown margin-right-25"><a locale-href ng-href="{{links.help_center_common}}" target="_blank" ng-attr-title="{{i18n.console_term_helpcenter_label}}"><span class="hwsicon-frame-image-help-new"></span></a></div><div class="dropdown pull-right nav-menu-dropdown cmc-style"><a class="console-topbar-btn quota-icon-font-hec" ng-if="localizationConfig.newHECMenu && my_quota_link&&!localizationConfig.isCMC" locale-href ng-href="{{my_quota_link}}" target="_blank" ng-attr-title="{{i18n.console_term_myQuota_label}}"><span><i class="hwsicon-frame-image-quota-hec"></i></span> </a><a class="console-topbar-btn margin-left-2" ng-if="!localizationConfig.newHECMenu&&my_quota_link" locale-href ng-href="{{my_quota_link}}" target="_blank" ng-attr-title="{{i18n.console_term_myQuota_label}}"><span class="hwsicon-frame-image-quota"></span></a></div><div ng-show="links.message_list_message_center && !isMessageBoxEnabled" class="dropdown menu-dropdown console-menu-notice message-menu-dropdown pull-right cmc-style"><a href class="console-topbar-btn dropdown-toggle console-topbar-btn-notice console-menu-message" data-toggle="dropdown" ng-click="showTipsMsg(1)" ng-attr-title="{{i18n.console_term_msg_label}}"><span class="hwsicon-frame-image-message hwsicon-frame-email"></span><div class="frame-message-round"></div></a><a href class="console-topbar-btn-click dropdown-toggle console-topbar-btn-notice drodown-radius-click-bg" data-toggle="dropdown"><span class="hwsicon-frame-image-message hwsicon-frame-email"></span><div class="frame-message-round"></div></a><div class="dropdown-menu common-dropdown-menu console-notice-list clearfix margin-right--1"><ul class="frame-menu-tips-message-content" ng-show="tipsMessages.length > 0"><li class="dropdown-menu-li-height frame-menu-tips-message-list frame-menu-tips-message-list-content" ng-repeat="message in tipsMessages"><span class="frame-message-content" ng-bind="message.content" ng-attr-title="{{message.content}}"></span> <span class="frame-message-time pull-right common-color-prompt" ng-bind="localeService.formatDateTime(message.time)"></span></li></ul><div class="message-box-empty" ng-show="tipsMessages.length == 0"><img src="/static/framework/4.4.0/theme/default/images/empty-envelope.svg" alt="" style="width:45px"><span ng-bind="::i18n.console_term_emptyMessageBox_label" style="color:#666;vertical-align:middle"></span></div><div class="frame-menu-tips-message-list"><div class="frame-message-sep-line"></div></div><div class="frame-message-page-turning-out frame-menu-tips-message-list"><a href class="frame-message-page-turning hwsicon-frame-image-pre-page" data-stoppropagation="true" ng-click="showTipsMsg(tipsMessagesCurrent-1)"></a><div class="frame-message-page-turning-index common-color-prompt"><span ng-bind="tipsMessagesCurrent"></span> <span>/</span> <span ng-bind="tipsMessagesTotal"></span></div><a href class="frame-message-page-turning hwsicon-frame-image-next-page" data-stoppropagation="true" ng-click="showTipsMsg(tipsMessagesCurrent+1)"></a> <a href class="frame-message-msg-clear pull-right common-color-title" ng-click="clearTipsMsg()"><span class="hwsicon-frame-image-msg-delete"></span> <span class="frame-message-clear-text" ng-bind="i18n.console_term_clear_label"></span></a></div></div></div><div ng-if="isMessageBoxEnabled && !localizationConfig.isCMC" class="dropdown menu-dropdown console-menu-message-box pull-right cmc-style" ng-class="{new: messageBox.unreadCount.total > 0}" ng-mouseenter="isShowMessage=messageBox.getMessages()" ng-mouseleave="isShowMessage=false" dropdown is-open="isShowMessage"><a hws-href href ng-href="{{links.message_center_endpoint}}" target="_blank" class="console-topbar-btn dropdown-toggle console-topbar-btn-message-box no-animate"><div class="message-box-unread-count" ng-bind="messageBox.unreadCount.total | maxDigits:2"></div><i class="hwsicon-frame-image-message"></i></a><div class="dropdown-menu common-dropdown-menu console-message-box"><ul class="message-box-list" ng-show="messageBox.messages.length > 0"><li ng-repeat="message in messageBox.messages track by message.id"><a class="clearfix" ng-href="{{links.message_center_endpoint}}#/mc/messages/{{message.id}}"><i class="message-box-item-icon hwsicon-frame-image-message pull-left"></i> <span class="message-box-item-publish-time pull-right" ng-bind="getDateTimeMessage(message.publish_time)"></span> <span class="message-box-item-title" ng-bind="::message.title"></span></a></li></ul><div class="message-box-empty" ng-show="messageBox.messages.length === 0"><img src="/static/framework/4.4.0/theme/default/images/empty-envelope.svg" alt="" style="width:45px"><span ng-bind="::i18n.console_term_emptyMessageBox_label" style="color:#666;vertical-align:middle"></span></div><div class="message-box-links clearfix"><a ng-if="messageBox.role === \'owner\' || messageBox.role === \'admin\'" ng-href="{{links.message_center_endpoint}}#/mc/message-receive-management" ng-bind="::i18n.console_term_messageReceiveManagement_label"></a><a ng-href="{{links.message_center_endpoint}}#/mc/messages/?status=0" class="pull-right" ng-bind="::i18n.console_term_more_label"></a></div></div></div><div class="pull-right cmc-style user-info-tpl" user-info-tpl></div><a locale-href style="margin-right:10px" ng-if="links.old_console_home_link && i18n.console_term_oldConsole_label&&!localizationConfig.ctcRegionTiledDisplay" class="pull-right console-topbar-btn console-topbar-btn-oldConsole cmc-other-point-show" ti-tip="oldTips.tooltip" ng-href="{{links.old_console_home_link}}" target="_self"><span ng-bind="i18n.console_term_oldConsole_label" class="content-text"></span></a><div class="pull-right common-link-inherit-color cmc-style" style="margin-right:20px" ng-if="localizationConfig.rightRegion" ng-include="regionTpl.url"></div></div></div></div></div><div class="special-message" ng-if="showMessageBox"><div class="special-message-box"><span class="special-message-box-span" ng-bind="importantMessageContent"></span> <a class="special-message-box-a" ng-bind="i18n.console_term_click_check" ng-href="{{importantMessageHref}}"></a></div><span class="ti-alert-close-icon ti-icon ti-icon-close" ng-click="closeMessageBox()"></span></div><script>$(function(){"use strict";function e(){$("[data-toggle=dropdown]").each(function(){"block"===$(".frame-favorite-service-list-options")[0].style.display&&n($(this)).hasClass("frame-favorite-service-list")?($(".frame-favorite-service-list").addClass("open"),$(".frame-favorite-service-list .console-topbar-btn").hide(),$(".frame-favorite-service-list .console-topbar-btn-click").show()):n($(this)).hasClass("menu-dropdown")&&($(this).hasClass("console-topbar-btn-click")?$(this).css("display","none"):$(this).css("display","inline-block"))})}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\\s]*$)/,""));var s=n&&$(n);return s&&s.length?s:e.parent()}$(".console-menu-message").on("click",function(s){var o=$(this);s.stopPropagation(),n($(this)).hasClass("open")||$(".frame-menu-right").click(),$(".open").not(n(o)).removeClass("open"),n(o).toggleClass("open"),e()}),$(".menu-message-dropdown, .message-menu-dropdown").on("click",".dropdown-menu",function(e){e.stopPropagation()}),$(".dropdown-menu").on("click","[data-stopPropagation]",function(e){$(".frame-dropdown-tinyTip").remove(),e.stopPropagation()}),$(".console-menu-service-link,.favorite-service-list-menu").on("click",function(){n($(this)).hasClass("open")||$(".frame-menu-left").click()}),$(".console-menu-userinfo").on("click",function(){n($(this)).hasClass("open")||$(".frame-menu-right").click()}),$(".frame-menu-left").on("click",".console-menu-region",function(){$(this).hasClass("open")||$(".frame-menu-left").click()}),$(document).on("click.bs.dropdown.data-api",\'[data-toggle="dropdown"]\',function(){var s=$(this);if(!s.is(".disabled, :disabled")){e();var o=n(s);if(o.hasClass("menu-dropdown")){o.hasClass("open")?($(o.children()[0]).css("display","none"),$(o.children()[1]).css("display","inline-block")):($(o.children()[0]).css("display","inline-block"),$(o.children()[1]).css("display","none"))}}}),$(document).on("click.bs.dropdown.data-api",e)})<\/script>');
        $templateCache.put('src/app/framework/views/nonsupportRegion.html', '<div class="console-content-padding"><div class="nonsupport"><div class="nonsupport-region-other"><div class="nonsupport-region"><div class="nonsupport-image pull-left"><img src="/static/framework/4.4.0/theme/default/images/nonsupport-small.png"></div><p class="common-font-size-big7 common-color-title" ng-bind="console_term_nonsupport_label"></p><p class="nonsupport-region-p common-color-content common-font-size-big8" ng-bind-html="console_term_nonsupportRegion_tips"></p></div><div class="nonsupport-region-support-list"><span class="common-color-prompt common-font-size-big8" ng-bind="i18n.console_term_supportRegion_label"></span><ul><li ng-repeat="region in regions" ng-if="!region.disable"><a hws-href href="" ng-click="changeRegion(region.id)"><span class="common-font-size-big9" ng-bind="region.name"></span></a><ul style="padding-left:30px" ng-if="supportMultiProject"><li ng-repeat="project in region.projects" ng-if="project.userProjectNameFlag && !project.disable"><a hws-href href="" ng-click="changeRegion(project.name)"><span ng-bind="project.displayName" class="region-name"></span></a></li></ul></li></ul></div></div></div></div>');
        $templateCache.put('src/app/framework/views/region.html', '<div class="dropdown menu-dropdown region-menu-dropdown console-menu-region"\n     ng-class="{\'closed\':!regions || regions.length === 0}"\n     ng-if="regionDisplayFlag && isServiceConsole && !globalRegionName && !localizationConfig.newHECMenu && !localizationConfig.ctcRegionTiledDisplay">\n    <a hws-href href class="dropdown-toggle console-topbar-btn console-topbar-region"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position" ng-style="{ \'color\': regionHighlightColor[regionColorIndex % 12] }"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName" ng-attr-title="{{displayRegionName}}"></span>\n        <span class="hwsicon-frame-image-caret menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <a hws-href href\n       class="dropdown-toggle console-topbar-btn-click console-topbar-region drodown-radius-click-bg"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position" ng-style="{ \'color\': regionHighlightColor[regionColorIndex % 12] }"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName"></span>\n        <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <ul class="dropdown-menu dropdown-menu-region common-dropdown-menu">\n        <li ng-repeat="region in regions" ng-class="{ \'region-disabled\': region.disable, \'current\': region.id == projectName }">\n            <a ng-if="!region.isAlliance" hws-href href="" ng-click="changeRegion(region.id)" class="region-name-link">\n                <div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div>\n                <div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div>\n                <span ng-bind="region.name" class="region-name"></span>\n            </a>\n            <a ng-if="region.isAlliance" ng-href="{{region.regionLink}}" target="_blank" class="region-name-link">\n                <div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div>\n                <div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div>\n                <span ng-bind="region.name" class="region-name"></span>\n            </a>\n            <ul>\n                <li ng-repeat="project in region.projects" ng-hide="project.userProjectNameFlag && !supportMultiProject" ng-class="{ \'region-disabled\': project.disable, \'current\': project.name == projectName }">\n                    <a hws-href href="" ng-click="changeRegion(project.name,project.disable)" class="sub-region-name-link">\n                        <span ng-bind="project.displayName" class="region-name"></span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n<div class="dropdown menu-dropdown region-menu-dropdown console-menu-region"\n     ng-class="{\'closed\':!regions || regions.length === 0}"\n     ng-if="regionDisplayFlag && isServiceConsole && !globalRegionName && localizationConfig.newHECMenu">\n    <a hws-href href class="dropdown-toggle console-topbar-btn console-topbar-region"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position" ng-style="{ \'color\': regionHighlightColor[regionColorIndex % 12] }"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName" ng-attr-title="{{displayRegionName}}"></span>\n        <span class="hwsicon-frame-image-caret menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <a hws-href href\n       class="dropdown-toggle console-topbar-btn-click console-topbar-region drodown-radius-click-bg"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position" ng-style="{ \'color\': regionHighlightColor[regionColorIndex % 12] }"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName"></span>\n        <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <ul role="menu" class="dropdown-menu dropdown-menu-region dropdown-menu-region-new common-dropdown-menu">\n        <li console-dropdown region="region" ng-repeat="region in regions" class="region-item dropdown dropdown-submenu dropdown-menu-right" ng-class="{ \'region-disabled\': region.disable, \'current\': region.id == projectName}">\n            <a ng-if="!region.isAlliance" hws-href href="" tabindex="-1" ng-click="changeRegion(region.id)" class="region-name-link" >\n                <div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div>\n                <div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div>\n                <span ng-bind="region.name" class="region-name"></span>\n                <i class=" right-icon" ng-show="region.projects && region.projects.length > 0"></i>\n            </a>\n            <a ng-if="region.isAlliance"   ng-init = "cloudAllianceHref = initHref(region.regionLink)" ng-href="{{cloudAllianceHref}}" tabindex="-1"  target="_blank" class="region-name-link" >\n                <div class="region-before-position hwsicon-frame-image-position" ng-if="region.id == projectName" ng-style="{ \'color\': regionHighlightColor[$index % 12] }"></div>\n                <div class="region-before-position region-name-before-circle" ng-if="region.id !== projectName" ng-style="{ \'background\': regionHighlightColor[$index % 12] }"></div>\n                <span ng-bind="region.name" class="region-name"></span>\n                <i class=" right-icon" ng-show="region.projects && region.projects.length > 0"></i>\n            </a>\n            <ul class="dropdown-menu sub-dropdown-menu-region" ng-if="region.projects && region.projects.length > 0">\n                <li ng-repeat="project in region.projects"   ng-class="{ \'region-disabled\': project.disable||(project.userProjectNameFlag && !supportMultiProject), \'current\': project.name == projectName }">\n                    <a href="javascript:void(0);" project-name="{{project.name}}" class="sub-region-name-link J_Project" project-disable="{{project.disable || (project.userProjectNameFlag && !supportMultiProject)}}">\n                        <span ng-bind="project.displayName" class="region-name"></span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n\n<div id="J_RegionDropdown" class="dropdown pull-right menu-dropdown region-menu-dropdown console-menu-region"\n     ng-class="{\'closed\':!regions || regions.length === 0}"\n     ng-if="regionDisplayFlag && isServiceConsole && !globalRegionName && !localizationConfig.newHECMenu && localizationConfig.ctcRegionTiledDisplay">\n    <a hws-href href class="dropdown-toggle console-topbar-btn console-topbar-region"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position region-landmark-icon"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName" ng-attr-title="{{displayRegionName}}"></span>\n        <span class="hwsicon-frame-image-caret menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <a hws-href href\n       class="dropdown-toggle console-topbar-btn-click console-topbar-region drodown-radius-click-bg"\n       data-toggle="dropdown">\n        <span class="hwsicon-frame-image-position hwsicon-frame-position region-landmark-icon"></span>\n        <span class="console-topbar-fixed-width-region" ng-bind="displayRegionName"></span>\n        <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-region-caret console-topbar-fixed-width-div"></span>\n    </a>\n    <ul role="menu" class="dropdown-menu dropdown-menu-region dropdown-menu-region-new common-dropdown-menu region-tiled-menu clearfix">\n        <li class="phonetic-row clearfix" ng-repeat="phonetic in regionAscriptions" ng-show="phonetic.ascriptionList && phonetic.ascriptionList.length > 0">\n            <ul>\n                <li class="region-tiled-alphabet pull-left" ng-bind="phonetic.min + \'-\' + phonetic.max"></li>\n                <li region-tiled-dropdown\n                    select-ascription="ascription"\n                    class="pull-left region-tiled-ascription"\n                    ng-class="{\'current\': ifContainRegion(ascription.regions, projectName)}"\n                    ng-repeat="ascription in phonetic.ascriptionList">\n                    <a href="javascript:void(0);" class="sub-region-name-link">\n                        <span ng-bind="ascription.displayName" class="region-name"></span>\n                    </a>\n                </li>\n            </ul>\n\n        </li>\n        <li class="region-tiled-submenu">\n            <div class="region-tiled-bread">\n                <span class="current-ascription" ng-bind="selectAscription.displayName"></span>\x3c!--\n                --\x3e<a class="submenu-back" href="#"><span class="icon-cloud-action-goback"></span><span class="submenu-back-text" ng-bind="i18n.console_term_goBack_button"></span></a>\n            </div>\n\n            <div class="clearfix">\n                <ul ng-repeat="region in selectAscription.regions track by $index">\n                    <li class="region-tiled-region pull-left" ng-class="{ \'region-disabled\': region.disable, \'current\': region.id == projectName}">\n                        <a ng-if="!region.isSelfDevelop && !region.isAlliance" href="javascript:void(0);" ng-click="changeRegion(region.id)" class="sub-region-name-link J_Project">\n                            <div class="region-before-position hwsicon-frame-image-position region-landmark-icon" ng-class="{\'not-visibility\': region.id != projectName}"></div>\x3c!--\n                            --\x3e<span ng-bind="region.name" title={{region.name}} class="region-name"></span>\n                        </a>\n                        <a ng-if="!!region.isSelfDevelop" ng-href="{{region.regionLink}}" class="sub-region-name-link J_Project">\n                            <div class="region-before-position hwsicon-frame-image-position region-landmark-icon" ng-class="{\'not-visibility\': region.id != projectName}"></div>\x3c!--\n                            --\x3e<span ng-bind="region.name" title={{region.name}} class="region-name"></span>\n                        </a>\n                        <a ng-if="!!region.isAlliance && !region.isSelfDevelop" ng-href="{{region.regionLink}}" target="_blank" class="sub-region-name-link J_Project">\n                            <div class="region-before-position hwsicon-frame-image-position region-landmark-icon" ng-class="{\'not-visibility\': region.id != projectName}"></div>\x3c!--\n                            --\x3e<span ng-bind="region.name" title={{region.name}} class="region-name"></span>\n                        </a>\n                    </li>\n\n                    <li class="region-tiled-region pull-left" ng-repeat="project in region.projects"\n                        ng-class="{ \'region-disabled\': project.disable||(project.userProjectNameFlag && !supportMultiProject), \'current\': project.name == projectName }">\n                        <a ng-if="project.userProjectNameFlag && !supportMultiProject" href="javascript:void(0);" class="sub-region-name-link J_Project">\n                            <div class="region-before-position hwsicon-frame-image-position region-landmark-icon" ng-class="{\'not-visibility\': project.name != projectName}"></div>\x3c!--\n                            --\x3e<span ng-bind="region.name+\'(\'+project.displayName+\')\'" title={{region.name+\'(\'+project.displayName+\')\'}} class="region-name"></span>\n                        </a>\n                        <a ng-if="!project.userProjectNameFlag || supportMultiProject" href="javascript:void(0);" ng-click="changeRegion(project.name,project.disable)" class="sub-region-name-link J_Project">\n                            <div class="region-before-position hwsicon-frame-image-position region-landmark-icon" ng-class="{\'not-visibility\': project.name != projectName}"></div>\x3c!--\n' + '                            --\x3e<span ng-bind="region.name+\'(\'+project.displayName+\')\'" title={{region.name+\'(\'+project.displayName+\')\'}} class="region-name"></span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n\n        </li>\n\n    </ul>\n</div>');
        $templateCache.put('src/app/framework/views/traceTpl.html', '<div ng-if="trace.ctsEndpoint.endpoint" trace-log class="dropdown menu-dropdown trace-menu-show pull-right cmc-style" ng-mouseenter="isShowLog=showLogLayout()" ng-mouseleave="isShowLog=hideLogLayout()" dropdown is-open="isShowLog"><a hws-href href ng-href="{{trace.ctsEndpoint.endpoint}}" target="_blank" class="console-topbar-btn dropdown-toggle no-animate"><span class="J_TraceBtn console-topbar-fixed-width-log trace-log-icon-font-hec" title="{{i18n.console_term_trace_label}}"><i class="hwsicon-frame-image-time"></i></span></a><div class="dropdown-menu common-dropdown-menu"><div class="trace-container J_TraceContainer" ng-class="{\'trace-open\': trace.open}"><div class="trace-content-wrap"><div class="trace-title"><span ng-bind="i18n.console_term_trace_title"></span></div><div class="trace-content"><div ng-if="!trace.hasTraceInRegion" style="margin-top:100px"><div style="width:80px;height:80px;margin:auto;text-align:center"><img src="/static/framework/4.4.0/theme/default/images/nonsupport-small.png"></div><p style="color:#333;margin:0 auto;text-align:center" ng-bind="i18n.console_term_nonsupportRegion_label"></p></div><div ng-if="trace.hasTraceInRegion && trace.tracker.length <= 0" style="margin-top:100px"><p style="margin:20px auto;text-align:center;color:#666" ng-bind="i18n.console_term_trace_enable_label"></p><button ng-click="trace.enableClick()" style="margin:0 auto;text-align:center;display:block" ng-bind="i18n.console_term_trace_enable_btn" ti-button></button> <a ng-if="i18n.console_term_trace_log_learn_more_href" style="margin:20px auto;text-align:center;display:block" ng-href="{{i18n.console_term_trace_log_learn_more_href}}" target="_blank" ng-bind="i18n.console_term_trace_product_href_label"></a></div><div ng-if="trace.hasTraceInRegion && trace.tracker.length > 0&& trace.traceList.length === 0" style="margin-top:100px"><div><p class="no-track-list-data no-track-list-data-label"></p></div><div><p ng-bind="i18n.console_term_no_log_data_label" class="no-track-list-data-label"></p></div></div><div ng-if="trace.hasTraceInRegion && trace.tracker && trace.tracker.length > 0"><ul class="trace-ant-timeline"><li class="trace-ant-timeline-item" ng-repeat="traceItem in trace.traceList track by $index"><div class="trace-ant-timeline-item-tail" ng-hide="$index === trace.traceList.length - 1"></div><div class="trace-ant-timeline-item-head" ng-class="{\'trace-ant-timeline-item-head-blue\':$index===0}"></div><div class="trace-ant-timeline-item-content"><p class="trace-item-time"><span ng-bind="traceItem.showTime"></span></p><p class="trace-item-type"><span ng-bind="traceItem.trace_name" title="{{traceItem.trace_name}}"></span></p><p class="trace-item-resource-name"><span ng-bind="traceItem.resource_name" title="{{traceItem.resource_name}}"></span></p></div></li></ul><div><a class="trace-log-look-more-show" ng-if="trace.ctsEndpoint && trace.ctsEndpoint.endpoint && trace.traceList.length >= 10" ng-href="{{trace.ctsEndpoint.endpoint}}" target="_blank" ng-bind="i18n.console_term_trace_href_label"></a></div></div></div></div></div></div></div>');
        $templateCache.put('src/app/framework/views/userInfoTpl.html', '<div class="dropdown pull-right menu-dropdown margin-right-14 margin-right-0" ng-if="!localizationConfig.newHECMenu"><a ng-if="isLoginUserFlag" hws-href href class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate" data-toggle="dropdown" ng-attr-title="{{username}}"><img class="menu-hwsicon-frame-user-head" ng-src="{{user_head_href.url}}"><div ng-if="isVendorUser" class="console-topbar-fixed-width-username"><div class="console-topbar-fixed-width-vendoruser common-font-size-big2" ng-bind="i18n.console_term_isVendorUser_label"></div><div class="console-topbar-fixed-width-vendoruser" ng-bind="username"></div></div><span ng-if="!isVendorUser" class="console-topbar-fixed-width-username" ng-bind="username"></span> <span class="hwsicon-frame-image-caret menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span> </a><a ng-if="isLoginUserFlag" hws-href href class="console-topbar-btn-click dropdown-toggle console-topbar-username-text no-animate" data-toggle="dropdown"><img class="menu-hwsicon-frame-user-head" ng-src="{{user_head_href.url}}"><div ng-if="isVendorUser" class="console-topbar-fixed-width-username"><div class="console-topbar-fixed-width-vendoruser common-font-size-big2" ng-bind="i18n.console_term_isVendorUser_label"></div><div class="console-topbar-fixed-width-vendoruser" ng-bind="username"></div></div><span ng-if="!isVendorUser" class="console-topbar-fixed-width-username" ng-bind="username"></span> <span class="hwsicon-frame-image-caret-up menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span> </a><a ng-if="!isLoginUserFlag" hws-href href class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate" data-toggle="dropdown" ng-attr-title="{{username}}"><div class="console-topbar-fixed-width-div"><span class="hwsicon-frame-image-user console-topbar-multi-userhead"></span></div><ul class="console-topbar-multi-userinfo"><li class="username"><span ng-bind="shortName"></span></li><li><span ng-bind="company"></span></li></ul><span class="hwsicon-frame-image-caret menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span> </a><a ng-if="!isLoginUserFlag" hws-href href class="console-topbar-btn-click dropdown-toggle console-topbar-username-text" data-toggle="dropdown"><div class="console-topbar-fixed-width-div"><span class="hwsicon-frame-image-user console-topbar-multi-userhead"></span></div><ul class="console-topbar-multi-userinfo"><li class="username"><span ng-bind="shortName"></span></li><li><span ng-bind="company"></span></li></ul><span class="hwsicon-frame-image-caret menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span></a><ul class="dropdown-menu user-dropdown-menu common-dropdown-menu common-font-size-common"><div class="menu-user-balance hws-show"><div ng-if="showBalance" class="menu-user-balance-label" ng-bind="i18n.console_term_accountBalance_label"></div><div ng-if="showBalance" class="menu-user-balance-content"><div class="menu-user-balance-value"><span class="menu-user-balance-integer" ng-bind="localeService.formatCurrency(accountBalance)"></span></div><button class="menu-user-balance-recharge ti-btn-danger" ng-bind="i18n.console_term_recharge_button" click="recharge()" ti-button></button></div><div class="menu-user-balance-links-wrapper"><ul class="menu-user-balance-links common-link-inherit-color"><li ng-if="links.order_list_user_center"><a hws-href ng-href="{{links.order_list_user_center}}" target="_self" ng-bind="i18n.console_term_myOrder_label"></a></li><li ng-if="links.renewal_userCenter"><a ng-href="{{links.renewal_userCenter}}" target="_self" ng-bind="i18n.console_term_renewal_label"></a></li><li ng-if="links.package_userCenter"><a ng-href="{{links.package_userCenter}}" target="_self" ng-bind="i18n.console_term_package_label"></a></li></ul></div></div><li class="dropdown-menu-li-line hws-show"></li><li class="dropdown-menu-li-height" ng-if="links.homeResource_instance"><a hws-href ng-href="{{links.homeResource_instance}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myResource_label"></span></a></li><li ng-if="isLoginUserFlag && links.user_center_common" class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.user_center_common}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_userCenter_label"></span></a></li><li class="dropdown-menu-li-height frame-order-list hws-hide" ng-if="links.order_list_user_center"><a hws-href ng-href="{{links.order_list_user_center}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myOrder_label"></span></a></li><li class="dropdown-menu-li-height frame-bill-list" ng-if="links.billing_userCenter"><a hws-href ng-href="{{links.billing_userCenter}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_billDetails_label"></span></a></li><li class="dropdown-menu-li-height frame-user-application" ng-if="links.user_application_marketplace"><a hws-href ng-href="{{links.user_application_marketplace}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myApplication_label"></span></a></li><li class="dropdown-menu-li-height frame-user-credential" ng-if="links.user_credential_iam"><a hws-href ng-href="{{links.user_credential_iam}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_certificateAuthority_label"></span></a></li><li class="dropdown-menu-li-height frame-seller-center" ng-if="links.sellerCenter_marketplace"><a hws-href ng-href="{{links.sellerCenter_marketplace}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_sellercenter_label"></span></a></li><li class="dropdown-menu-li-height" ng-if="canAssumeRole && !hasAssumeRoleFlag && !isVendorSubUser"><a hws-href href="" ng-click="assumeRoleToIAM()"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_changeRole_label"></span></a></li><li class="dropdown-submenu dropdown-menu-li-height role-list" ng-if="canAssumeRole && hasAssumeRoleFlag && !isVendorSubUser"><a class="role-change" tabindex="-1"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_jump_label"></span></a><ul class="dropdown-menu dropdown-menu-left common-dropdown-menu"><li ng-if="!isLoginUserFlag"><a hws-href href ng-click="assumeRole(loginUserAccount.id)"><span class="circle-icon circle-icon-special"></span> <span ng-bind="loginUserAccount.name"></span></a></li><li ng-if="isLoginUserFlag" ng-repeat="roleInfo in assumeRoles"><a hws-href href ng-click="assumeRole(roleInfo.id)"><span class="circle-icon"></span> <span ng-bind="roleInfo.domain_name"></span> <span>/</span> <span ng-bind="roleInfo.name"></span></a></li><li ng-if="isLoginUserFlag"><a hws-href href ng-click="assumeRoleToIAM()"><span class="circle-icon"></span> <span ng-bind="i18n.console_term_others_label"></span></a></li></ul></li><li class="dropdown-menu-li-line"></li><li class="dropdown-menu-li-height frame-submit-workorder" ng-if="links.submitWorkOrder_userCenter"><a hws-href ng-href="{{links.submitWorkOrder_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_submitWorkOrder_label"></span></a></li><li class="dropdown-menu-li-height frame-icp-licence" ng-if="!localizationConfig.newHECMenu"><a ng-href="{{links.icpLicence_link}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_icpLicence_label"></span></a></li><li class="dropdown-menu-li-height"><a href="" ng-click="logout()"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_back_button"></span></a></li></ul></div><div class="dropdown pull-right menu-dropdown margin-right-14 margin-right-0"><div class="dropdown pull-right menu-dropdown margin-right-14" ng-if="localizationConfig.newHECMenu" ng-mouseenter="isUserOpen = true" ng-mouseleave="isUserOpen = false" dropdown is-open="isUserOpen"><a ng-if="isLoginUserFlag" hws-href href ng-href="{{links.spread_user_center_common}}" target="_self" class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate" ng-attr-title="{{username}}"><img class="menu-hwsicon-frame-user-head" style="display:none" ng-src="{{user_head_href.url}}"><div ng-if="isVendorUser" class="console-topbar-fixed-width-username"><div class="console-topbar-fixed-width-vendoruser common-font-size-big2" ng-bind="i18n.console_term_isVendorUser_label"></div><div style="display:none" class="console-topbar-fixed-width-vendoruser" ng-bind="username"></div></div><span ng-if="!isVendorUser" class="console-topbar-fixed-width-username" ng-bind="username"></span> <span style="display:none" class="hwsicon-frame-image-caret menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span> </a><a ng-if="!isLoginUserFlag" hws-href href ng-href="{{links.user_center_common}}" target="_blank" class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate" ng-attr-title="{{username}}"><div style="display:none" class="console-topbar-fixed-width-div"><span class="hwsicon-frame-image-user console-topbar-multi-userhead"></span></div><ul class="console-topbar-multi-userinfo"><li class="username"><span ng-bind="shortName"></span></li><li><span ng-bind="company"></span></li></ul><span style="display:none" class="hwsicon-frame-image-caret menu-hwsicon-frame-user-caret console-topbar-fixed-width-div"></span></a><ul class="dropdown-menu user-dropdown-menu common-dropdown-menu common-font-size-common user-center-padding"><li id="userCenterItem" ng-if="isLoginUserFlag && links.user_center_common" class="dropdown-menu-li-height frame-user-center"><a hws-href ng-href="{{links.user_center_common}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_userCenter_label"></span></a></li><li id="userAccountManager" ng-if="links.account_userCenter" class="dropdown-menu-li-height frame-user-center hws-show"><a hws-href ng-href="{{links.account_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_account_userCenter_label"></span></a></li><li id="useRrealNameAuthItem" class="dropdown-menu-li-height" ng-if="localizationConfig.realNameAuthSwitch && !realNameAuthOk"><span style="text-align:left;padding:0 20px!important;line-height:33px!important;font-size:14px;color:#666;white-space:nowrap"><span ng-bind="i18n.console_term_realName_usercenter_label"></span> <a hws-href style="margin-left:20px;text-decoration:none;cursor:pointer" ng-href="{{links.realNameAuth_userCenter}}" target="_self" ng-bind="i18n.console_term_goto_realName_usercenter_label"></a></span></li><li id="userCenterItemLine" class="dropdown-menu-li-line"></li><li id="userBussinessManange" ng-if="BusinessManagementIsOpen&&links.enterpriseMgr_userCenter" class="dropdown-menu-li-height"><a hws-href ng-href="{{links.enterpriseMgr_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_BusinessManage_label"></span></a></li><li id="userMyResource" ng-if="links.homeResource_instance" class="dropdown-menu-li-height"><a hws-href ng-href="{{links.homeResource_instance}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myResource_label"></span></a></li><li id="userMyPackageItem" ng-if="links.package_userCenter" class="dropdown-menu-li-height frame-user-package hws-show"><a hws-href ng-href="{{links.package_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_package_userCenter_label"></span></a></li><li id="userMyApplicationItem" ng-if="links.user_application_marketplace" class="dropdown-menu-li-height frame-user-application"><a hws-href ng-href="{{links.user_application_marketplace}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myApplication_label"></span></a></li><li id="userCredentialIam" ng-if="links.user_credential_iam" class="dropdown-menu-li-height frame-user-credential"><a hws-href ng-href="{{links.user_credential_iam}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_certificateAuthority_label"></span></a></li><li style="display:none!important" ng-if="links.sellerCenter_marketplace" class="dropdown-menu-li-height frame-seller-center"><a hws-href ng-href="{{links.sellerCenter_marketplace}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_sellercenter_label"></span></a></li><li class="dropdown-menu-li-height frame-seller-center" id="userMyPrivilegeItem" ng-if="links.privilege_userCenter"><a hws-href ng-href="{{links.privilege_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_privilege_usercenter_label"></span></a></li><li id="userChangeRoleItem" class="dropdown-menu-li-height" ng-if="canAssumeRole && !hasAssumeRoleFlag && !isVendorSubUser"><a hws-href href="" ng-click="assumeRoleToIAM()"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_changeRole_label"></span></a></li><li id="userChangeSubRoleItem" class="dropdown-submenu dropdown-menu-li-height role-list" ng-if="canAssumeRole && hasAssumeRoleFlag && !isVendorSubUser"><a class="role-change" tabindex="-1"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_changeRole_label"></span></a><ul class="dropdown-menu dropdown-menu-left common-dropdown-menu"><li ng-if="!isLoginUserFlag"><a hws-href href ng-click="assumeRole(loginUserAccount.id)"><span class="circle-icon circle-icon-special"></span> <span ng-bind="loginUserAccount.name"></span></a></li><li ng-if="isLoginUserFlag" ng-repeat="roleInfo in assumeRoles"><a hws-href href ng-click="assumeRole(roleInfo.id)"><span class="circle-icon"></span> <span style="max-width:560px;text-overflow:ellipsis;display:inline-block;white-space:nowrap;overflow:hidden;line-height:32px;vertical-align:middle" title="{{roleInfo.domain_name + \'/\' + roleInfo.name}}" ng-bind="roleInfo.domain_name + \'/\' + roleInfo.name"></span></a></li><li ng-if="isLoginUserFlag"><a hws-href href ng-click="assumeRoleToIAM()"><span class="circle-icon"></span> <span ng-bind="i18n.console_term_others_label"></span></a></li></ul></li><li class="dropdown-menu-li-height frame-submit-workorder" ng-if="links.submitWorkOrder_userCenter"><a hws-href ng-href="{{links.submitWorkOrder_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_submitWorkOrder_label"></span></a></li><li style="display:none" class="dropdown-menu-li-height frame-icp-licence" ng-if="links.icpLicence_link"><a locale-href ng-href="{{links.icpLicence_link}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_icpLicence_label"></span></a></li><li class="dropdown-menu-li-height frame-icp-licence" ng-repeat="row in userMenuAppend  track by $index"><a ng-href="{{row.href}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="row.label"></span></a></li><li class="dropdown-menu-li-line"></li><li id="userLogoutItem" class="dropdown-menu-li-height"><a href="" ng-click="logout()" style="text-align:center"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_back_button"></span></a></li></ul></div></div><div id="headerLicence" class="dropdown pull-right menu-dropdown distance-button margin-right-0"><div ng-if="localizationConfig.newHECMenu&& links.icpLicence_link" class="dropdown pull-right menu-dropdown margin-right-14"><a locale-href class="console-topbar-btn no-animate" ng-href="{{links.icpLicence_link}}" target="_blank"><span class="icp-licence-show-position" ng-bind="i18n.console_term_icpLicence_label"></span></a></div></div><div id="headerWorkOrder" class="menu-work-order pull-right distance-button margin-right-0"><div ng-if="localizationConfig.newHECMenu&&links.workOrder_userCenter" class="menu-work-order pull-right margin-right-14" ng-class="{\'work-order-count\': workOrderCount > 0}"><a hws-href class="console-topbar-btn no-animate user-application-a-no-outline console-topbar-btn-isnoicon" title="{{workOrderTip}}" ng-href="{{links.workOrder_userCenter}}" target="_self"><i class="" ng-if="workOrderCount > 0"></i> <span style="display:inline-block;vertical-align:middle" ng-bind="i18n.console_term_workOrder_label"></span></a></div></div><div id="headerBilling" class="dropdown pull-right menu-dropdown distance-button margin-right-0"><div ng-if="localizationConfig.newHECMenu&&links.fees_userCenter" class="dropdown pull-right menu-dropdown margin-right-14" ng-mouseenter="isFeesOpen = isShowFeesLayout()" ng-mouseleave="isFeesOpen = false" dropdown is-open="isFeesOpen"><a hws-href href ng-href="{{links.fees_userCenter}}" target="_self" class="console-topbar-btn dropdown-toggle console-topbar-username-text no-animate console-topbar-btn-isnoicon"><span class="console-topbar-fixed-width-username" ng-bind="i18n.console_term_fees_label"></span></a><ul class="dropdown-menu user-dropdown-menu common-dropdown-menu common-font-size-common user-dropdown-minwidth"><div class="menu-user-balance"><div ng-if="showBalance && accountBalanceSum.length > 1" class="menu-user-balance-label"><div class="menu-user-balance-account {{isBalanceAccountOpen ? \'menu-user-balance-account-open\' :\'menu-user-balance-account-close\'}}" ng-click="showBalanceAccount($event); isBalanceAccountOpen ? isBalanceAccountOpen = false : isBalanceAccountOpen = true" ng-mouseleave="isBalanceAccountOpen = false"><span class="menu-user-balance-account-curr" ng-attr-title="accountBalanceName" ng-bind="accountBalanceName"></span><ul class="{{isBalanceAccountOpen ? \'open\' : \'\'}}" ng-mouseleave="isBalanceAccountOpen = false"><li ng-repeat="abs in accountBalanceSum"><a hws-href href ng-click="isBalanceAccountOpen = false; showBalanceAccount($event); changeBalanceAccount(abs.domainId, abs.beId, abs.beName);" ng-bind="abs.beName"></a></li></ul></div></div><div ng-if="showBalance && accountBalanceSum.length <= 1" class="menu-user-balance-label"><div class="menu-user-balance-account"><span ng-bind="i18n.console_term_accountBalance_label"></span></div></div><div ng-if="showBalance" class="menu-user-balance-content user-blance-margin-show"><div class="menu-user-balance-value"><span class="menu-user-balance-integer" ng-bind="localeService.formatCurrency(accountBalance)"></span> <a href="javascript:void(0);" class="append-balance-recharge-button" ng-click="recharge()" ng-bind="i18n.console_term_recharge_button"></a></div></div></div><li ng-if="showBalance" class="dropdown-menu-li-line hws-show"></li><li ng-if="links.renewal_userCenter"><a hws-href ng-href="{{links.renewal_userCenter}}" target="_self" ng-bind="i18n.console_term_renewal_label"></a></li><li class="dropdown-menu-li-height frame-order-list hws-show" ng-if="links.order_list_user_center"><a hws-href ng-href="{{links.order_list_user_center}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_myOrder_label"></span></a></li><li style="display:none!important" class="dropdown-menu-li-height frame-bill-list hws-show" ng-if="links.billing_userCenter"><a hws-href ng-href="{{links.billing_userCenter}}" target="_blank"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_billDetails_label"></span></a></li><li class="dropdown-menu-li-height frame-bill-list hws-show" ng-if="links.consume_statistics_userCenter"><a hws-href ng-href="{{links.consume_statistics_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_consume_statistics"></span></a></li><li class="dropdown-menu-li-height frame-bill-list hws-show" ng-if="links.receipt_supervise_userCenter"><a hws-href ng-href="{{links.receipt_supervise_userCenter}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_receipt_supervise"></span></a></li><li style="display:none!important" class="dropdown-menu-li-height frame-user-credential hws-show"><a hws-href ng-href="{{links.user_credential_iam}}" target="_self"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_fees_transaction_label"></span></a></li><li class="dropdown-menu-li-height" style="display:none!important"><a hws-href ng-href="{{links.fees_userCenter}}" target="_self" style="text-align:center"><span class="user-center-dropdown-text" ng-bind="i18n.console_term_fees_more_label"></span></a></li></ul></div></div><div class="dropdown pull-right menu-dropdown" ng-repeat="row in rightMenuAppend  track by $index"><a class="dropdown-toggle console-topbar-btn console-menu-service-link" ng-href="{{row.href}}" target="_blank"><span class="append-menu-show-position" ng-bind="row.label"></span></a></div>');
    } ]);
    return module;
});

define('frameworkModules.build', function() {});
