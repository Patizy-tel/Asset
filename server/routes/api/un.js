(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "./config/polyfills.js": function (e, n, t) {
            "use strict";
            "undefined" == typeof Promise && (t("./node_modules/promise/lib/rejection-tracking.js").enable(), window.Promise = t("./node_modules/promise/lib/es6-extensions.js")), t("./node_modules/whatwg-fetch/fetch.js"), Object.assign = t("./node_modules/object-assign/index.js"), Object.entries || t("./node_modules/object.entries/index.js").shim(), t("./node_modules/raf/polyfill.js"), t("./node_modules/core-js/fn/array/from.js"), t("./node_modules/core-js/fn/array/find.js"), t("./node_modules/core-js/fn/object/values.js"), t("./node_modules/core-js/fn/string/starts-with.js"), t("./node_modules/core-js/fn/promise/finally.js"), t("./node_modules/core-js/es6/map.js"), t("./node_modules/core-js/es6/set.js"), t("./node_modules/core-js/es6/symbol.js"), t("./node_modules/core-js/fn/array/find-index.js"), t("./node_modules/core-js/fn/array/includes.js"), t("./node_modules/core-js/fn/symbol/iterator.js"), t("./node_modules/url-polyfill/url-polyfill.js"), "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype || t("./node_modules/intersection-observer/intersection-observer.js")
        },
        "./src/components/branch-banner/helpers/index.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            }), t.d(n, "c", function () {
                return i
            }), t.d(n, "b", function () {
                return a
            });
            var r = function () {
                    var e = window.branch && window.branch.closeJourney && window.branch.setBranchViewData && window.branch.track && window.branch.link;
                    return e
                },
                o = function (e) {
                    r() && window.branch.closeJourney(function () {
                        e && e()
                    })
                },
                i = function (e) {
                    r() && window.branch.setBranchViewData(e)
                },
                a = function (e) {
                    r() && window.branch.track("pageview", {}, function () {
                        e && e()
                    })
                }
        },
        "./src/components/collection/CollectionAvatar.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return g
            }), t.d(n, "a", function () {
                return b
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./node_modules/react-redux/es/index.js"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/design-system/util/style/converters.js"),
                d = t("./src/components/ui/image/index.js"),
                m = t("./src/util/routes.js");

            function f() {
                var e = o()(["\n  fragment CollectionAvatar_collection on Collection {\n    name\n    avatar {\n      id\n    }\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
                return f = function () {
                    return e
                }, e
            }
            var p = 60,
                h = function (e) {
                    return function (n) {
                        return {
                            borderRadius: Object(u.b)(n.borderRadius.regular),
                            width: Object(u.b)(e),
                            height: Object(u.b)(e)
                        }
                    }
                };
            var g = c()(f(), m.x),
                b = Object(s.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.collection,
                        t = e.currentLocation,
                        r = e.size,
                        o = void 0 === r ? p : r,
                        a = e.link;
                    if (!n || !n.avatar || !n.avatar.id) return null;
                    var c = n.avatar,
                        s = n.name,
                        u = Object(m.w)(n, t),
                        f = i.createElement(d.b, {
                            rules: [h(o)],
                            miroId: c.id,
                            alt: s || "Publication avatar",
                            width: o,
                            height: o,
                            strategy: "CROP"
                        });
                    return a ? i.createElement(l.f, {
                        href: u
                    }, f) : f
                })
        },
        "./src/components/collection/CollectionLogo.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return p
            }), t.d(n, "b", function () {
                return h
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/components/ui/image/index.js"),
                c = t("./node_modules/graphql-tag/src/index.js"),
                s = t.n(c),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/design-system/type/Type.js"),
                d = t("./src/framework/design-system/type/Heading.js");

            function m() {
                var e = o()(["\n  fragment CollectionLogo_collection on Collection {\n    name\n    logo {\n      id\n      originalWidth\n      originalHeight\n    }\n  }\n"]);
                return m = function () {
                    return e
                }, e
            }
            var f = function (e) {
                return function (n) {
                    return {
                        color: n.baseColor.text[e]
                    }
                }
            };

            function p(e) {
                var n = e.collection,
                    t = e.maxWidth,
                    r = e.maxHeight,
                    o = e.textScale,
                    c = void 0 === o ? "S" : o,
                    s = e.withTextColorSubtle,
                    m = void 0 !== s && s;
                if (!n.logo || !n.logo.id) {
                    var p = d.c.INTERFACE_HEAVY[c],
                        h = d.b.INTERFACE_HEAVY[c];
                    return i.createElement(u.a, {
                        roleAndWeight: "INTERFACE_HEAVY",
                        fontSize: h,
                        lineHeight: p,
                        tag: "span",
                        additionalRules: f(m ? "normal" : "dark"),
                        clamp: 1
                    }, n.name || "")
                }
                var g = n.logo,
                    b = g.id,
                    v = g.originalWidth || 100,
                    x = g.originalHeight || 100;
                if (t && v > t) {
                    var E = v / t;
                    v = Math.floor(v / E), x = Math.floor(x / E)
                }
                if (r && x > r) {
                    var y = x / r;
                    v = Math.floor(v / y), x = Math.floor(x / y)
                }
                return i.createElement(l.b, {
                    width: "".concat(v, "px"),
                    height: "".concat(x, "px")
                }, i.createElement(a.b, {
                    miroId: b,
                    alt: n.name || "Publication logo",
                    width: v,
                    height: x,
                    strategy: "RESAMPLE"
                }))
            }
            var h = s()(m())
        },
        "./src/components/collection/CollectionMetabar.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./node_modules/react-redux/es/index.js"),
                l = t("./src/components/collection/CollectionLogo.jsx"),
                u = t("./src/components/metabar/constants.js"),
                d = t("./src/components/metabar/Logo.jsx"),
                m = t("./src/components/metabar/MetabarActions.jsx"),
                f = t("./src/components/metabar/MetabarActionsLO.jsx"),
                p = t("./src/components/navigation/Anchor.jsx"),
                h = t("./src/framework/design-system/components/index.js"),
                g = t("./src/styles/zIndex.js"),
                b = t("./src/util/routes.js");

            function v() {
                var e = o()(["\n  fragment CollectionMetabarTop_collection on Collection {\n    slug\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...MetabarActions_collection\n  }\n  ", "\n  ", "\n  ", "\n"]);
                return v = function () {
                    return e
                }, e
            }
            var x = c()(v(), l.b, b.x, m.a),
                E = Object(s.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.collection,
                        r = e.currentLocation,
                        o = e.isAmp,
                        a = e.post,
                        c = e.showCollectionLogo,
                        s = e.withMonogramDark;
                    return i.createElement(h.b, {
                        backgroundColor: "BACKGROUND"
                    }, i.createElement(h.C, {
                        columns: 12,
                        display: "flex",
                        alignItems: "center",
                        height: "".concat(u.a, "px"),
                        sm: {
                            display: "flex",
                            height: "".concat(u.c, "px")
                        }
                    }, i.createElement(h.b, {
                        display: "flex",
                        alignItems: "center",
                        flexGrow: "1",
                        zIndex: g.a.metabar
                    }, i.createElement(h.b, {
                        marginLeft: "-6px"
                    }, i.createElement(p.a, {
                        href: "https://".concat(n, "/"),
                        "aria-label": "Homepage"
                    }, i.createElement(d.a, {
                        dark: s
                    }))), c && i.createElement(i.Fragment, null, i.createElement(h.b, {
                        height: "24px",
                        width: "1px",
                        marginLeft: "10px",
                        marginRight: "14px",
                        borderLeft: "BASE_LIGHT",
                        sm: {
                            display: "none"
                        }
                    }), i.createElement(h.b, {
                        sm: {
                            display: "none"
                        }
                    }, i.createElement(p.a, {
                        href: Object(b.w)(t, r)
                    }, i.createElement(l.a, {
                        collection: t,
                        maxWidth: 240,
                        maxHeight: 36,
                        textScale: "M"
                    }))))), i.createElement(h.b, {
                        flexGrow: "0",
                        zIndex: g.a.metabar
                    }, o ? i.createElement(f.b, {
                        withoutConversionButton: !0
                    }) : i.createElement(m.c, {
                        post: a,
                        collection: t,
                        withoutConversionButton: !0
                    }))))
                }),
                y = t("./src/framework/design-system/components/Box.jsx"),
                j = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                _ = t.n(j),
                w = t("./src/framework/design-system/type/Type.js"),
                k = t("./src/styles/breakpoints.js");

            function S() {
                var e = o()(["\n  fragment CollectionNavItems_collection on Collection {\n    navItems {\n      title\n      url\n      type\n    }\n  }\n"]);
                return S = function () {
                    return e
                }, e
            }
            var C = function (e) {
                    var n;
                    return n = {
                        listStyleType: "none",
                        margin: 0,
                        lineHeight: "40px",
                        whiteSpace: "nowrap",
                        overflowX: "auto",
                        display: "flex",
                        alignItems: "flex-start"
                    }, _()(n, k.sm(e), {
                        display: "none"
                    }), _()(n, "marginTop", "".concat(20, "px")), _()(n, "paddingTop", "".concat(20, "px")), _()(n, "height", "".concat(80, "px")), n
                },
                O = {
                    display: "flex",
                    alignItems: "center",
                    height: "".concat(20, "px"),
                    marginRight: "15px",
                    marginLeft: "15px",
                    ":first-child": {
                        marginLeft: 0
                    }
                },
                I = function (e) {
                    return function (n) {
                        return {
                            color: n.baseColor.text[e],
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }
                    }
                },
                A = function (e) {
                    return {
                        height: "".concat(20, "px"),
                        minWidth: "1px",
                        backgroundColor: e.baseColor.border.normal
                    }
                };

            function L(e) {
                var n = e.navItems,
                    t = e.withTextColorSubtle;
                return n ? i.createElement(h.L, null, function (e) {
                    return i.createElement("ul", {
                        className: e(C)
                    }, n.map(function (n, r) {
                        return n.url && i.createElement(i.Fragment, {
                            key: r
                        }, "EXTERNAL_LINK_NAV_ITEM" === n.type && i.createElement("span", {
                            className: e(A)
                        }), i.createElement("li", {
                            className: e(O)
                        }, i.createElement(w.a, {
                            roleAndWeight: "INTERFACE",
                            fontSize: 15,
                            lineHeight: 21,
                            tag: "span",
                            additionalRules: I(t ? "lighter" : "normal")
                        }, i.createElement(h.v, {
                            href: n.url
                        }, n.title))))
                    }))
                }) : null
            }
            var N = c()(S()),
                T = t("./src/util/theme.js");

            function P() {
                var e = o()(["\n  fragment CollectionMetabarBottom_collection on Collection {\n    slug\n    ...CollectionNavItems_collection\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...ThemeUtilTintBackground_collection\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return P = function () {
                    return e
                }, e
            }
            var R = c()(P(), N, l.b, b.x, T.b),
                U = Object(s.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.collection,
                        t = e.currentLocation,
                        r = e.withBorderTop,
                        o = void 0 !== r && r,
                        a = e.withTextColorSubtle,
                        c = void 0 !== a && a,
                        s = n.navItems.slice().length > 0;
                    return i.createElement(y.a, {
                        backgroundColor: "BACKGROUND",
                        display: s ? "block" : "none",
                        sm: {
                            display: "block"
                        },
                        borderTop: o ? "BASE_LIGHTER" : "NONE"
                    }, i.createElement(h.C, {
                        columns: 12,
                        display: "flex",
                        alignItems: "center",
                        height: "54px",
                        overflow: "hidden"
                    }, i.createElement(y.a, {
                        flexShrink: "0",
                        marginRight: "40px"
                    }, i.createElement(p.a, {
                        href: Object(b.w)(n, t)
                    }, i.createElement(l.a, {
                        collection: n,
                        maxWidth: 300,
                        maxHeight: 36,
                        textScale: "S",
                        withTextColorSubtle: c
                    }))), i.createElement(y.a, {
                        flexShrink: "1",
                        overflow: "auto"
                    }, i.createElement(L, {
                        navItems: n.navItems,
                        withTextColorSubtle: c
                    }))))
                }),
                M = t("./src/components/metabar/MetabarLayout.jsx");

            function B() {
                var e = o()(["\n  fragment CollectionMetabar_collection on Collection {\n    colorBehavior\n    ...CollectionMetabarTop_collection\n    ...CollectionMetabarBottom_collection\n    ...ThemeUtilTintBackground_collection\n    ...ThemeUtilAccent_collection\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return B = function () {
                    return e
                }, e
            }

            function D(e) {
                var n = e && e.navItems && e.navItems.length > 0;
                return u.a + (n ? u.b : 0)
            }

            function H(e) {
                var n = e.post,
                    t = e.collection,
                    r = e.isAmp,
                    o = e.isFixed,
                    a = e.behavior,
                    c = t.navItems.length > 0,
                    s = Object(T.h)(t.colorPalette.tintBackgroundSpectrum),
                    l = Object(T.c)(t.colorPalette.defaultBackgroundSpectrum, t.colorPalette.highlightSpectrum),
                    d = "ACCENT_COLOR" === t.colorBehavior;
                return i.createElement(M.a, {
                    height: D(t),
                    heightSm: u.c + u.b,
                    isFixed: o,
                    behavior: a,
                    marginBottom: 0,
                    marginBottomSm: 0
                }, d || c ? i.createElement(h.H, {
                    theme: l
                }, i.createElement(E, {
                    post: n,
                    collection: t,
                    isAmp: r,
                    showCollectionLogo: !c,
                    withMonogramDark: !1
                })) : i.createElement(i.Fragment, null, i.createElement(h.H, {
                    theme: s
                }, i.createElement(h.b, {
                    display: "block",
                    sm: {
                        display: "none"
                    }
                }, i.createElement(E, {
                    post: n,
                    collection: t,
                    isAmp: r,
                    showCollectionLogo: !0,
                    withMonogramDark: !0
                }))), i.createElement(h.H, {
                    theme: l
                }, i.createElement(h.b, {
                    display: "none",
                    sm: {
                        display: "block"
                    }
                }, i.createElement(E, {
                    post: n,
                    collection: t,
                    isAmp: r,
                    showCollectionLogo: !1,
                    withMonogramDark: !1
                })))), i.createElement(h.H, {
                    theme: d ? l : s
                }, i.createElement(U, {
                    collection: t,
                    withBorderTop: d,
                    withTextColorSubtle: d
                })))
            }
            t.d(n, "a", function () {
                return H
            }), t.d(n, "b", function () {
                return F
            });
            var F = c()(B(), x, R, T.b, T.a)
        },
        "./src/components/debug/GoogleAnalytics.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return c
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/components/session/WithFlag.jsx"),
                i = t("./node_modules/react-redux/es/index.js"),
                a = t("./src/metadata/Helmet.jsx");
            n.a = Object(i.b)(function (e) {
                return {
                    googleAnalyticsCode: e.config.googleAnalyticsCode,
                    isBot: e.client.isBot,
                    isDnt: e.client.isDnt,
                    isAmp: e.config.isAmp
                }
            })(function (e) {
                var n = e.googleAnalyticsCode,
                    t = e.isBot,
                    i = e.isDnt,
                    c = e.isAmp;
                return t || i || c ? null : r.createElement(o.a, {
                    name: "dont_track_user"
                }, function (e) {
                    return e ? null : r.createElement(a.a, null, r.createElement("script", null, "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\nga('create', '".concat(n, "', 'auto');\nga('send', 'pageview');")))
                })
            });
            var c = function (e, n, t, o) {
                r.useEffect(function () {
                    var r = window ? window.ga : null;
                    n || t || o || !e || !r || e.forEach(function (e, n) {
                        var t = "tracker".concat(n);
                        r("create", e, "auto", t), r("".concat(t, ".send"), "pageview")
                    })
                }, [e, n, t, o])
            }
        },
        "./src/components/format/Date.jsx": function (e, n, t) {
            "use strict";
            (function (e) {
                t.d(n, "a", function () {
                    return o
                });
                var r = t("./node_modules/date-fns/index.js");

                function o(n) {
                    var t = n.timestamp;
                    return Object(r.getYear)(t) === Object(r.getYear)(e.Date.now()) ? Object(r.format)(t, "MMM D") : Object(r.format)(t, "MMM D, YYYY")
                }
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/format/TimeAgo.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            });
            var r = t("./node_modules/date-fns/index.js");

            function o(e) {
                var n = e.timestamp;
                return Object(r.distanceInWords)(Date.now(), n, {
                    addSuffix: !0
                })
            }
        },
        "./src/components/metabar/Logo.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r),
                i = t("./node_modules/react-loadable/lib/index.js"),
                a = t.n(i),
                c = t("./node_modules/react-redux/es/index.js"),
                s = t("./src/framework/style/useCx.js"),
                l = t("./src/styles/colors.js");

            function u() {
                return (u = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = o.a.createElement("path", {
                    d: "M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z"
                }),
                m = function (e) {
                    return o.a.createElement("svg", u({
                        width: 45,
                        height: 45,
                        viewBox: "0 0 45 45"
                    }, e), d)
                };

            function f() {
                return (f = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = o.a.createElement("path", {
                    d: "M56.3 19.5c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5V19c-.7 1.8-2.4 3-4.3 3-3.3 0-5.8-2.6-5.8-7.5 0-4.5 2.6-7.6 6.3-7.6 1.6-.1 3.1.8 3.8 2.4V3.2c0-.3-.1-.6-.3-.7l-1.4-1.4V1l6.5-.8v19.3zm-4.8-.8V9.5c-.5-.6-1.2-.9-1.9-.9-1.6 0-3.1 1.4-3.1 5.7 0 4 1.3 5.4 3 5.4.8.1 1.6-.3 2-1zm9.1 3.1V9.4c0-.3-.1-.6-.3-.7l-1.4-1.5v-.1h6.5v12.5c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5zm-.2-19.2C60.4 1.2 61.5 0 63 0c1.4 0 2.6 1.2 2.6 2.6S64.4 5.3 63 5.3a2.6 2.6 0 0 1-2.6-2.7zm22.5 16.9c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5v-3.2c-.6 2-2.4 3.4-4.5 3.4-2.9 0-4.4-2.1-4.4-6.2 0-1.9 0-4.1.1-6.5 0-.3-.1-.5-.3-.7L67.7 7v.1H74v8c0 2.6.4 4.4 2 4.4.9-.1 1.7-.6 2.1-1.3V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v12.4zm22 2.3c0-.5.1-6.5.1-7.9 0-2.6-.4-4.5-2.2-4.5-.9 0-1.8.5-2.3 1.3.2.8.3 1.7.3 2.5 0 1.8-.1 4.2-.1 6.5 0 .3.1.5.3.7l1.5 1.4v.1H96c0-.4.1-6.5.1-7.9 0-2.7-.4-4.5-2.2-4.5-.9 0-1.7.5-2.2 1.3v9c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v3.1a4.6 4.6 0 0 1 4.6-3.4c2.2 0 3.6 1.2 4.2 3.5.7-2.1 2.7-3.6 4.9-3.5 2.9 0 4.5 2.2 4.5 6.2 0 1.9-.1 4.2-.1 6.5-.1.3.1.6.3.7l1.4 1.4v.1h-6.6zm-81.4-2l1.9 1.9v.1h-9.8v-.1l2-1.9c.2-.2.3-.4.3-.7V7.3c0-.5 0-1.2.1-1.8L11.4 22h-.1L4.5 6.8c-.1-.4-.2-.4-.3-.6v10c-.1.7 0 1.3.3 1.9l2.7 3.6v.1H0v-.1L2.7 18c.3-.6.4-1.3.3-1.9v-11c0-.5-.1-1.1-.5-1.5L.7 1.1V1h7l5.8 12.9L18.6 1h6.8v.1l-1.9 2.2c-.2.2-.3.5-.3.7v15.2c0 .2.1.5.3.6zm7.6-5.9c0 3.8 1.9 5.3 4.2 5.3 1.9.1 3.6-1 4.4-2.7h.1c-.8 3.7-3.1 5.5-6.5 5.5-3.7 0-7.2-2.2-7.2-7.4 0-5.5 3.5-7.6 7.3-7.6 3.1 0 6.4 1.5 6.4 6.2v.8h-8.7zm0-.8h4.3v-.8c0-3.9-.8-4.9-2-4.9-1.4.1-2.3 1.6-2.3 5.7z"
                }),
                h = function (e) {
                    return o.a.createElement("svg", f({
                        height: 22,
                        width: 112,
                        viewBox: "0 0 111.5 22"
                    }, e), p)
                };
            t("./src/svg/logo-wordmark-138x27px.svg");

            function g() {
                return (g = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b = o.a.createElement("path", {
                    d: "M1 29V1",
                    stroke: "#D5D5D5",
                    strokeWidth: .5,
                    fill: "none",
                    strokeLinecap: "round"
                }),
                v = function (e) {
                    return o.a.createElement("svg", g({
                        width: 2,
                        height: 29
                    }, e), b)
                };
            t.d(n, "a", function () {
                return S
            }), t.d(n, "c", function () {
                return C
            }), t.d(n, "b", function () {
                return O
            });
            var x = a()({
                    loading: function () {
                        return null
                    },
                    loader: function () {
                        return t.e(7).then(t.bind(null, "./src/svg/hatch-monogram-45px.svg"))
                    },
                    modules: ["src/svg/hatch-monogram-45px.svg"],
                    webpack: function () {
                        return ["./src/svg/hatch-monogram-45px.svg"]
                    }
                }),
                E = a()({
                    loading: function () {
                        return null
                    },
                    loader: function () {
                        return t.e(7).then(t.bind(null, "./src/svg/hatch-79x22px.svg"))
                    },
                    modules: ["src/svg/hatch-79x22px.svg"],
                    webpack: function () {
                        return ["./src/svg/hatch-79x22px.svg"]
                    }
                }),
                y = function (e) {
                    return function (n) {
                        return {
                            fill: e ? n.baseColor.fill.dark : n.baseColor.fill.normal
                        }
                    }
                },
                j = function (e) {
                    return {
                        fill: l.v
                    }
                },
                _ = function (e) {
                    return {
                        fill: e.baseColor.fill.normal
                    }
                },
                w = function (e) {
                    return {
                        fill: l.v
                    }
                },
                k = function (e) {
                    return {
                        isHatch: "Hatch" === e.config.productName
                    }
                },
                S = Object(c.b)(k)(function (e) {
                    var n = e.isHatch,
                        t = e.dark,
                        o = Object(s.a)();
                    return n ? r.createElement(x, {
                        className: o(j)
                    }) : r.createElement(m, {
                        className: o(y(t))
                    })
                }),
                C = Object(c.b)(k)(function (e) {
                    var n = e.isHatch,
                        t = Object(s.a)();
                    return n ? r.createElement(E, {
                        className: t(w)
                    }) : r.createElement(h, {
                        className: t(_)
                    })
                }),
                O = function () {
                    return r.createElement(v, null)
                }
        },
        "./src/components/metabar/Metabar.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-redux/es/index.js"),
                c = t("./node_modules/graphql-tag/src/index.js"),
                s = t.n(c),
                l = t("./src/components/collection/CollectionMetabar.jsx"),
                u = t("./src/components/metabar/constants.js"),
                d = t("./src/components/metabar/MetabarActions.jsx"),
                m = t("./src/components/metabar/MetabarActionsLO.jsx"),
                f = t("./src/components/metabar/Logo.jsx"),
                p = t("./src/components/navigation/Anchor.jsx"),
                h = t("./src/framework/design-system/components/index.js"),
                g = t("./src/styles/flex.js"),
                b = t("./src/styles/position.js"),
                v = t("./src/styles/zIndex.js"),
                x = function () {
                    return {
                        zIndex: v.a.metabarCenter,
                        pointerEvents: "none"
                    }
                },
                E = function () {
                    return {
                        pointerEvents: "auto"
                    }
                },
                y = function () {
                    return i.createElement(h.L, null, function (e) {
                        return i.createElement("div", {
                            className: e([b.a, Object(g.a)({
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: ""
                            }), x])
                        }, i.createElement(p.a, {
                            href: "/",
                            "aria-label": "Homepage",
                            className: e(E)
                        }, i.createElement(f.c, null)))
                    })
                },
                j = t("./src/components/metabar/MetabarLayout.jsx"),
                _ = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                w = t.n(_),
                k = t("./src/framework/design-system/type/index.js"),
                S = t("./src/util/routes.js"),
                C = t("./src/styles/breakpoints.js"),
                O = function (e) {
                    return w()({
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontSize: "20px",
                        color: e.baseColor.text.normal,
                        marginTop: "7px",
                        marginLeft: "10px",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    }, C.sm(e), {
                        fontSize: "14px",
                        marginTop: "0px",
                        marginLeft: "4px",
                        WebkitLineClamp: "2"
                    })
                },
                I = function (e) {
                    var n = e.authDomain,
                        t = e.isDraft,
                        r = void 0 !== t && t,
                        o = e.isMonogramOnly,
                        a = void 0 !== o && o,
                        c = e.topic;
                    return i.createElement(h.b, {
                        display: "flex",
                        alignItems: "center"
                    }, i.createElement(p.a, {
                        href: "/",
                        "aria-label": "Homepage"
                    }, i.createElement(h.b, {
                        display: a || r ? "none" : "block",
                        sm: {
                            display: "none"
                        }
                    }, i.createElement(f.c, null)), i.createElement(h.b, {
                        display: a || r ? "block" : "none",
                        sm: {
                            display: "block",
                            marginLeft: "-5px"
                        }
                    }, i.createElement(f.a, null))), r ? i.createElement(h.b, {
                        marginLeft: "10px",
                        paddingTop: "2px"
                    }, i.createElement(k.a, {
                        color: "DARKER",
                        scale: "M",
                        tag: "div"
                    }, "Draft")) : null, !r && c && c.slug && c.name && i.createElement(i.Fragment, null, i.createElement(h.b, {
                        marginTop: "1px",
                        marginLeft: "10px",
                        sm: {
                            display: "none"
                        }
                    }, i.createElement(f.b, null)), i.createElement(p.a, {
                        href: Object(S.rb)(n, c.slug)
                    }, i.createElement(h.L, null, function (e) {
                        return i.createElement("div", {
                            className: e(O)
                        }, c.name)
                    }))))
                };

            function A() {
                var e = o()(["\n  fragment Metabar_post on Post {\n    id\n    creator {\n      id\n    }\n    primaryTopic {\n      name\n      slug\n    }\n    ...MetabarActions_post\n    ...MetabarActionsLO_post\n  }\n  ", "\n  ", "\n"]);
                return A = function () {
                    return e
                }, e
            }

            function L() {
                var e = o()(["\n  fragment Metabar_collection on Collection {\n    ...CollectionMetabar_collection\n  }\n  ", "\n"]);
                return L = function () {
                    return e
                }, e
            }
            t.d(n, "b", function () {
                return N
            }), t.d(n, "c", function () {
                return T
            }), t.d(n, "a", function () {
                return P
            });
            var N = s()(L(), l.b),
                T = s()(A(), d.b, m.a),
                P = Object(a.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        isNativeMedium: e.client.isNativeMedium
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.behavior,
                        r = e.post,
                        o = e.collection,
                        a = e.topic,
                        c = e.isAmp,
                        s = e.isDraft,
                        f = e.isFixed,
                        p = e.isLogoOnly,
                        g = e.isLogoCentered,
                        b = e.isMonogramOnly,
                        x = e.isTransparent,
                        E = e.isNativeMedium,
                        _ = e.marginBottom,
                        w = e.marginBottomSm;
                    if (E) return null;
                    if (o) return i.createElement(l.a, {
                        post: r,
                        collection: o,
                        isAmp: c,
                        isFixed: f,
                        behavior: t
                    });
                    var k = !p && !g;
                    return i.createElement(j.a, {
                        behavior: t,
                        height: u.a,
                        heightSm: u.c,
                        isFixed: f,
                        isTransparent: x,
                        marginBottom: _,
                        marginBottomSm: w
                    }, i.createElement(h.C, null, i.createElement(h.b, {
                        display: "flex",
                        alignItems: "center",
                        height: "".concat(u.a, "px"),
                        sm: {
                            display: "flex",
                            height: "".concat(u.c, "px")
                        }
                    }, g ? i.createElement(y, null) : i.createElement(h.b, {
                        flexGrow: "1",
                        zIndex: v.a.metabar
                    }, i.createElement(I, {
                        authDomain: n,
                        isDraft: s,
                        isMonogramOnly: b,
                        topic: a
                    })), k && i.createElement(h.b, {
                        flexGrow: "0",
                        zIndex: v.a.metabar
                    }, c ? i.createElement(m.b, {
                        post: r
                    }) : i.createElement(d.c, {
                        post: r
                    })))))
                })
        },
        "./src/components/metabar/MetabarActions.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t.n(i),
                c = t("./node_modules/graphql-tag/src/index.js"),
                s = t.n(c),
                l = t("./node_modules/react-redux/es/index.js"),
                u = t("./src/components/collection/CollectionAvatar.jsx"),
                d = t("./src/framework/design-system/components/index.js"),
                m = t("./src/components/ui/PopoverMenu.jsx"),
                f = t("./src/util/routes.js"),
                p = t("./src/components/style/BaseThemeProvider.js");

            function h() {
                var e = o()(["\n  fragment CollectionMetabarActionsPopover_collection on Collection {\n    id\n    slug\n    isEnrolledInHightower\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
                return h = function () {
                    return e
                }, e
            }
            var g = s()(h(), f.x),
                b = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.children,
                        r = e.collection,
                        o = e.currentLocation,
                        a = r.isEnrolledInHightower,
                        c = i.createElement(m.a, null, i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.n)(r, n)
                        }, "New story")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.v)(r, n)
                        }, "Stories")), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.u)(r, o)
                        }, "Stats")), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.r)(r, n)
                        }, "Letters")), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.q)(r, n)
                        }, "Followers")), a ? i.createElement(i.Fragment, null, i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.o)(r, n)
                        }, "Medium Partner Program"))) : null, i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.s)(r, n)
                        }, "Navigation")), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.p)(r, n)
                        }, "Feature pages")), i.createElement(m.b, null, i.createElement(d.v, {
                            href: Object(f.t)(r, n)
                        }, "Homepage and settings")));
                    return i.createElement(d.K, null, function (e) {
                        var n = e.isVisible,
                            r = e.toggle,
                            o = e.hide;
                        return i.createElement(p.a, null, i.createElement(d.y, {
                            isVisible: n,
                            hide: o,
                            popoverRenderFn: function () {
                                return c
                            },
                            display: "flex"
                        }, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }, i.createElement(d.v, {
                            onClick: r
                        }, t))))
                    })
                }),
                v = t("./src/components/user/UserAvatar.jsx"),
                x = t("./src/framework/reporter/index.js"),
                E = t("./src/log/index.js");
            var y = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        xsrf: e.session.xsrf
                    }
                })(function (e) {
                    var n, t, r = e.authDomain,
                        o = e.children,
                        a = e.viewer,
                        c = e.xsrf,
                        s = a.username,
                        l = a.mediumMemberAt,
                        u = a.isPartnerProgramEnrolled,
                        h = Object(x.c)();
                    if (!a || !s) return null;
                    c || E.a.error("No xsrf token found."), t = i.createElement("div", null, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "center",
                        marginTop: "12px",
                        marginBottom: "20px"
                    }, i.createElement(v.d, {
                        user: a,
                        scale: "S",
                        link: !0
                    }), i.createElement(d.b, {
                        marginLeft: "16px"
                    }, l > 0 && i.createElement(d.v, {
                        href: Object(f.P)(r),
                        linkStyle: "OBVIOUS"
                    }, "Member"), i.createElement(d.v, {
                        href: Object(f.O)(r, s),
                        linkStyle: "OBVIOUS"
                    }, i.createElement(d.d, {
                        strong: !0
                    }, a.name)), i.createElement(d.v, {
                        href: Object(f.O)(r, s),
                        linkStyle: "SUBTLE",
                        inline: !0
                    }, i.createElement(d.d, null, "@", a.username)))), l ? i.createElement(d.v, {
                        href: Object(f.H)(r)
                    }, "Gift membership") : i.createElement(d.v, {
                        href: Object(f.vb)(r),
                        linkStyle: "OBVIOUS"
                    }, "Become a member")), n = l ? i.createElement(d.v, {
                        href: Object(f.Mb)(r)
                    }, "Reading list") : i.createElement(d.v, {
                        href: Object(f.l)(r)
                    }, "Bookmarks");
                    var g = i.createElement(d.b, {
                        maxWidth: "220px"
                    }, i.createElement(m.a, null, i.createElement(m.b, null, t), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Q)(r)
                    }, "New story")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Vb)(r)
                    }, "Stories")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Nb)(r)
                    }, "Series")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Rb)(r)
                    }, "Stats")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                        href: u ? Object(f.Kb)(r) : Object(f.R)(r)
                    }, "Medium Partner Program")), i.createElement(m.c, null), i.createElement(m.b, null, n), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Lb)(r)
                    }, "Publications")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Ib)(r)
                    }, "Customize your interests")), i.createElement(m.c, null), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.O)(r, s)
                    }, "Profile")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Pb)(r)
                    }, "Settings")), i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.J)()
                    }, "Help")), c ? i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.eb)(c)
                    }, "Sign out")) : null));
                    return i.createElement(d.K, null, function (e) {
                        var n = e.isVisible,
                            t = e.toggle,
                            r = e.hide;
                        return i.createElement(p.a, null, i.createElement(d.y, {
                            isVisible: n,
                            hide: r,
                            popoverRenderFn: function () {
                                return g
                            },
                            display: "flex",
                            flip: !1,
                            setMaxHeight: !0
                        }, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }, i.createElement(d.v, {
                            onClick: function () {
                                h.event("nav.clicked", {
                                    element: "userActions"
                                }), t()
                            }
                        }, o))))
                    })
                }),
                j = t("./src/components/upsell/UpsellClickable.jsx"),
                _ = t("./src/components/session/WithViewer.jsx"),
                w = t("./src/framework/source/index.js"),
                k = t("./src/framework/track/UpsellPresentationTracker.jsx");

            function S() {
                var e = o()(["\n  fragment MetabarButtonConversionLI_post on Post {\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
                return S = function () {
                    return e
                }, e
            }
            var C = s()(S(), j.b),
                O = function (e) {
                    var n = e.post;
                    return i.createElement(w.b, {
                        source: {
                            name: "upgrade_membership",
                            dimension: "nav_full"
                        }
                    }, i.createElement(k.a, null, i.createElement(j.a, {
                        isButton: !0,
                        buttonStyle: "SUBTLE",
                        buttonSize: "SMALL",
                        post: n
                    }, i.createElement(_.a, null, function (e) {
                        return e && e.hasPastMemberships ? "Resume membership" : "Upgrade"
                    }))))
                },
                I = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                A = t.n(I),
                L = t("./node_modules/react-apollo/react-apollo.esm.js");

            function N() {
                return (N = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var T = a.a.createElement("path", {
                    d: "M2.26 10.19a5.97 5.97 0 0 0-.01.31l.01.32a1.7 1.7 0 0 1-.18.88l-1 1.96a.74.74 0 0 0 .03.73l1.03 1.67c.16.25.45.42.78.44l2.32.17c.28.02.55.11.8.26l.63.34c.27.13.49.3.66.54l1.32 1.8c.18.24.49.39.82.39h2.06c.33 0 .64-.15.82-.4l1.32-1.8c.17-.22.4-.4.65-.53.25-.12.45-.23.64-.34a1.81 1.81 0 0 1 .8-.26l2.32-.17a.98.98 0 0 0 .77-.44l1.04-1.67a.74.74 0 0 0 .03-.73l-1-1.96a1.7 1.7 0 0 1-.18-.89l.01-.31a6.16 6.16 0 0 0-.01-.32 1.7 1.7 0 0 1 .18-.88l1-1.96a.74.74 0 0 0-.03-.73l-1.03-1.67a.98.98 0 0 0-.78-.44l-2.32-.17a1.81 1.81 0 0 1-.8-.26 8.68 8.68 0 0 0-.63-.34 1.76 1.76 0 0 1-.66-.54l-1.32-1.8a1.02 1.02 0 0 0-.82-.39H9.47c-.33 0-.64.15-.82.4L7.33 3.2a1.76 1.76 0 0 1-.66.53 8.6 8.6 0 0 0-.63.34 1.81 1.81 0 0 1-.8.26l-2.33.17a.98.98 0 0 0-.77.44L1.11 6.61a.74.74 0 0 0-.03.73l1 1.96c.14.27.2.58.18.88zm-1.07-.43L.2 7.8a1.74 1.74 0 0 1 .07-1.72L1.3 4.42c.32-.53.9-.87 1.55-.92l2.32-.17a.83.83 0 0 0 .36-.12c.22-.13.45-.26.7-.38a.78.78 0 0 0 .3-.23L7.85.8C8.2.3 8.82 0 9.47 0h2.06c.65 0 1.26.3 1.62.8l1.32 1.8a.76.76 0 0 0 .3.23c.25.12.48.25.7.38a.82.82 0 0 0 .36.12l2.33.17a1.98 1.98 0 0 1 1.54.92l1.04 1.66c.32.53.35 1.17.07 1.72l-1 1.96a.71.71 0 0 0-.07.36 6.95 6.95 0 0 1 0 .75.72.72 0 0 0 .07.37l1 1.96c.28.55.25 1.2-.07 1.72l-1.04 1.66c-.32.53-.9.87-1.55.92l-2.32.17a.83.83 0 0 0-.36.12 9.79 9.79 0 0 1-.7.38.79.79 0 0 0-.3.23l-1.32 1.8c-.37.5-.97.8-1.62.8H9.47c-.65 0-1.26-.3-1.62-.8l-1.32-1.8a.79.79 0 0 0-.3-.23 9.66 9.66 0 0 1-.7-.38.82.82 0 0 0-.36-.12l-2.33-.17a1.98 1.98 0 0 1-1.55-.92L.26 14.92A1.74 1.74 0 0 1 .2 13.2l1-1.96a.71.71 0 0 0 .07-.36 6.95 6.95 0 0 1 0-.75.72.72 0 0 0-.07-.37zm9.12-1.95a2.75 2.75 0 0 0-2.75 2.75 2.75 2.75 0 0 0 2.75 2.75 2.75 2.75 0 0 0 2.75-2.75 2.75 2.75 0 0 0-2.75-2.75zm0-1a3.75 3.75 0 0 1 3.75 3.75 3.75 3.75 0 0 1-3.75 3.75 3.75 3.75 0 0 1-3.75-3.75 3.75 3.75 0 0 1 3.75-3.75z"
                }),
                P = function (e) {
                    return a.a.createElement("svg", N({
                        width: 21,
                        height: 21
                    }, e), T)
                },
                R = t("./src/framework/style/components/WithTheme.js"),
                U = t("./src/framework/design-system/type/Detail.js"),
                M = function (e) {
                    var n = e.url,
                        t = e.label,
                        r = e.labelAfterCopy,
                        o = e.postId,
                        a = i.useState(!1),
                        c = A()(a, 2),
                        s = c[0],
                        l = c[1],
                        u = i.useState(null),
                        m = A()(u, 2),
                        f = m[0],
                        p = m[1],
                        h = i.useRef(null),
                        g = Object(x.c)(),
                        b = i.useCallback(function () {
                            g.event("post.copyFriendLink", {
                                postId: o
                            })
                        });
                    i.useEffect(function () {
                        return function () {
                            clearTimeout(f)
                        }
                    }, []);
                    var v = i.useCallback(function () {
                        var e = h.current;
                        if (e) {
                            if (e.disabled = !1, e.select(), e) {
                                var n = document.createRange();
                                n.selectNode(e), window.getSelection().addRange(n), e.setSelectionRange(0, e.value.length), document.execCommand("copy"), window.getSelection().removeAllRanges()
                            }
                            e.disabled = !0, l(!0), clearTimeout(f), p(setTimeout(function () {
                                return l(!1)
                            }, 2e3))
                        }
                    });
                    return i.createElement(d.b, {
                        display: "flex",
                        alignItems: "flex-start"
                    }, i.createElement("form", null, i.createElement("input", {
                        id: "copy-url-input",
                        disabled: !0,
                        readOnly: !0,
                        type: "text",
                        ref: h,
                        value: n,
                        style: {
                            position: "absolute",
                            top: "-100vh"
                        }
                    }), i.createElement(d.v, {
                        onClick: function (e) {
                            e.preventDefault(), b(), v()
                        },
                        linkStyle: "OBVIOUS"
                    }, s ? r : t)))
                },
                B = function (e) {
                    var n = e.friendLink,
                        t = e.hideAndReset,
                        r = e.postId,
                        o = function (e) {
                            return e.target.select()
                        },
                        a = {
                            width: "100%",
                            border: 0,
                            ":focus": {
                                outline: "none"
                            },
                            ":hover": {
                                cursor: "default"
                            }
                        };
                    return i.createElement(R.a, null, function (e) {
                        return i.createElement(d.L, null, function (c) {
                            return i.createElement(d.b, {
                                width: "330px",
                                padding: "15px"
                            }, i.createElement(U.a, {
                                scale: "M"
                            }, "This link guarantees anyone free access to your story, even if they’ve read all of their complimentary stories for this month.", i.createElement("br", null), i.createElement(d.v, {
                                linkStyle: "OBVIOUS",
                                inline: !0,
                                href: Object(f.G)()
                            }, "Learn more")), i.createElement("div", {
                                style: {
                                    fontFamily: e.font.uiRegular.family,
                                    borderColor: e.baseColor.border.normal,
                                    borderStyle: "solid",
                                    borderBottomWidth: "2px",
                                    borderTopWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    marginTop: "20px",
                                    paddingBottom: "5px",
                                    display: "flex",
                                    position: "relative"
                                }
                            }, i.createElement("input", {
                                readOnly: !0,
                                value: n,
                                onFocus: o,
                                className: c(a),
                                style: {
                                    color: e.baseColor.text.lighter,
                                    fontSize: "15px",
                                    lineHeight: "21px",
                                    fontFamily: e.font.uiRegular.family,
                                    marginRight: "16px"
                                }
                            }), i.createElement(M, {
                                url: n,
                                label: "Copy",
                                labelAfterCopy: "Copied",
                                postId: r
                            })), i.createElement(d.b, {
                                marginTop: "20px"
                            }, i.createElement(U.a, {
                                scale: "M"
                            }, i.createElement(d.v, {
                                onClick: t
                            }, "Cancel"))))
                        })
                    })
                },
                D = t("./src/util/hooks/useUserAgentMobileOrTablet.js"),
                H = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.mediumUrl,
                        r = e.openFriendLinkPopover,
                        o = e.post,
                        a = e.shareKey,
                        c = !Object(D.a)(),
                        s = a && t ? i.createElement(m.b, null, i.createElement(d.v, {
                            onClick: r
                        }, "Share Friend Link")) : null;
                    return i.createElement(m.a, null, c ? i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.U)(n, o.id)
                    }, "Edit story")) : null, i.createElement(m.b, null, i.createElement(d.v, {
                        href: Object(f.Qb)(n, o.id)
                    }, "View stats")), s)
                });

            function F() {
                var e = o()(["\n  query ShareKey($id: ID!) {\n    post(id: $id) {\n      id\n      shareKey\n      mediumUrl\n    }\n  }\n"]);
                return F = function () {
                    return e
                }, e
            }
            var z = {
                    border: 0,
                    clip: "rect(1px, 1px, 1px, 1px)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    wordWrap: "normal !important"
                },
                V = s()(F()),
                q = function (e) {
                    var n = e.post,
                        t = Object(x.c)(),
                        r = i.useCallback(function () {
                            t.event("editor.writerControlsOpen", {
                                postId: n.id
                            })
                        }),
                        o = i.useCallback(function () {
                            t.event("editor.shareMeterBypassUrlOpen", {
                                postId: n.id
                            })
                        }),
                        a = i.useState(!1),
                        c = A()(a, 2),
                        s = c[0],
                        l = c[1],
                        u = function () {
                            l(!0), o()
                        };
                    return i.createElement(L.c, {
                        variables: {
                            id: n.id
                        },
                        query: V,
                        ssr: !1
                    }, function (e) {
                        var t = e.data,
                            o = (e.loading, e.error, t && t.post && t.post.shareKey),
                            a = t && t.post && t.post.mediumUrl,
                            c = "".concat(a, "?source=friends_link&sk=").concat(o);
                        return i.createElement(d.K, null, function (e) {
                            var t = e.isVisible,
                                m = e.toggle,
                                f = e.hide,
                                h = function () {
                                    l(!1), f()
                                };
                            return i.createElement(w.b, {
                                source: {
                                    name: "post_page",
                                    dimension: "writer_controls",
                                    postId: n.id
                                }
                            }, i.createElement(p.a, null, i.createElement(d.y, {
                                isVisible: t,
                                hide: h,
                                popoverRenderFn: function (e) {
                                    return s ? (e(), i.createElement(B, {
                                        friendLink: c,
                                        hideAndReset: h,
                                        postId: n.id
                                    })) : (e(), i.createElement(H, {
                                        mediumUrl: a,
                                        openFriendLinkPopover: u,
                                        post: n,
                                        shareKey: o
                                    }))
                                }
                            }, i.createElement(d.b, {
                                display: "flex",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                marginLeft: "16px",
                                marginRight: "16px",
                                sm: {
                                    display: "flex",
                                    marginLeft: "10px",
                                    marginRight: "10px"
                                }
                            }, i.createElement(d.v, {
                                onClick: function () {
                                    r(), m()
                                }
                            }, i.createElement(d.b, {
                                tag: P
                            }), i.createElement("span", {
                                style: z
                            }, "Post management tools menu"))))))
                        })
                    })
                },
                W = t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                G = t.n(W),
                Y = t("./node_modules/lodash/cloneDeep.js"),
                K = t.n(Y);

            function X() {
                return (X = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Q = a.a.createElement("path", {
                    d: "M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z"
                }),
                $ = function (e) {
                    return a.a.createElement("svg", X({
                        width: 25,
                        height: 25,
                        viewBox: "-293 409 25 25"
                    }, e), Q)
                },
                J = t("./src/framework/design-system/components/Button.jsx"),
                Z = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                ee = t.n(Z);

            function ne() {
                var e = o()(["\n  query NotificationsWidgetQuery {\n    notificationStatus {\n      unreadNotificationCount\n    }\n  }\n"]);
                return ne = function () {
                    return e
                }, e
            }

            function te() {
                var e = o()(["\n  mutation NotificationCountMutation {\n    updateActivityLastViewed\n  }\n"]);
                return te = function () {
                    return e
                }, e
            }
            var re = s()(te()),
                oe = s()(ne()),
                ie = function (e) {
                    var n = e.children;
                    return i.createElement(L.b, {
                        mutation: re,
                        optimisticResponse: {
                            updateActivityLastViewed: !0
                        },
                        update: function (e) {
                            var n = {
                                    query: oe
                                },
                                t = e.readQuery(n);
                            t.notificationStatus.unreadNotificationCount = 0, e.writeQuery(ee()({
                                data: t
                            }, n))
                        }
                    }, function (e) {
                        return n({
                            mutate: e
                        })
                    })
                },
                ae = t("./src/components/session/WithFlag.jsx");

            function ce() {
                var e = o()(["\n  fragment NotificationsBadge_notificationStatus on NotificationStatus {\n    unreadNotificationCount\n  }\n"]);
                return ce = function () {
                    return e
                }, e
            }

            function se(e) {
                var n = e.notificationStatus.unreadNotificationCount,
                    t = e.toggle;
                return n > 0 ? i.createElement(ie, null, function (e) {
                    var r = e.mutate;
                    return i.createElement(ae.a, {
                        name: "enable_lite_unread_notification_count_mutation"
                    }, function (e) {
                        var o = e ? function () {
                            t(), r()
                        } : t;
                        return i.createElement(J.a, {
                            buttonStyle: "STRONG",
                            size: "BADGE",
                            shape: "CIRCLE",
                            onClick: o,
                            width: "32px"
                        }, n)
                    })
                }) : i.createElement(d.v, {
                    onClick: t,
                    display: "block"
                }, i.createElement(d.b, {
                    tag: $,
                    margin: "15px 0"
                }))
            }
            var le = s()(ce()),
                ue = t("./src/components/notifications/notification-types/util/NotificationLayout.jsx");

            function de(e) {
                var n = e.post,
                    t = e.isYours,
                    r = e.isFirst;
                return n && n.title ? n.title : t ? r ? "Your story" : "your story" : r ? "A story" : "a story"
            }
            var me = t("./src/components/notifications/notification-types/util/NotificationStyles.jsx");

            function fe() {
                var e = o()(["\n  fragment NotificationQuote_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      startOffset\n      endOffset\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return fe = function () {
                    return e
                }, e
            }

            function pe(e) {
                var n = e.notification,
                    t = function (e, n) {
                        if (e.quote && e.quote.paragraphs.length > 1) return i.createElement(i.Fragment, null, "left " + e.quote.paragraphs.length + " highlights in ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })));
                        if (n) return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })));
                        if (e.quote && e.quote.quoteParagraphPreview && e.quote.quoteParagraphPreview.text && e.quote.endOffset) {
                            var t = e.quote.quoteParagraphPreview.text.slice(e.quote.startOffset || 0, e.quote.endOffset);
                            return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.c, {
                                text: t
                            }))
                        }
                        return i.createElement(i.Fragment, null, "highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n, e.isRollup),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var he = s()(fe(), ue.a);

            function ge() {
                var e = o()(["\n  fragment NotificationResponseCreated_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    responsePost {\n      id\n      mediumUrl\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return ge = function () {
                    return e
                }, e
            }

            function be(e) {
                var n = e.notification,
                    t = e.isRollup,
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: t && n.post ? Object(f.V)(n.post) : n.responsePost ? Object(f.V)(n.responsePost) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "responded to ", i.createElement(me.a, null, i.createElement(de, {
                    post: n.post,
                    isYours: !0
                }))))
            }
            var ve = s()(ge(), ue.a);

            function xe() {
                var e = o()(["\n  fragment NotificationPostRecommended_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return xe = function () {
                    return e
                }, e
            }

            function Ee(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "clapped for ", i.createElement(me.a, null, i.createElement(de, {
                    post: n.post
                }))))
            }
            var ye = s()(xe(), ue.a);

            function je(e) {
                var n = e.collection,
                    t = e.isYours,
                    r = e.isFirst;
                return n && n.name ? n.name : t ? r ? "Your publication" : "your publication" : r ? "A publication" : "a publication"
            }

            function _e() {
                var e = o()(["\n  fragment NotificationCollectionPostSubmitted_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return _e = function () {
                    return e
                }, e
            }
            var we = s()(_e(), ue.a, f.x),
                ke = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.collection ? Object(f.w)(t.collection, n) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "submitted ", i.createElement(me.a, null, i.createElement(de, {
                        post: t.post
                    })), " to ", i.createElement(me.a, null, i.createElement(je, {
                        collection: t.collection
                    }))))
                });

            function Se() {
                var e = o()(["\n  fragment NotificationCollectionDraftSubmitted_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Se = function () {
                    return e
                }, e
            }
            var Ce = s()(Se(), ue.a, f.x),
                Oe = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        },
                        o = function (e) {
                            return e.post && e.post.title ? i.createElement(i.Fragment, null, "submitted a draft ", i.createElement(me.a, null, e.post.title), " to ", i.createElement(me.a, null, i.createElement(je, {
                                collection: e.collection,
                                isYours: !0
                            }))) : i.createElement(i.Fragment, null, "submitted a draft to ", i.createElement(me.a, null, i.createElement(je, {
                                collection: e.collection,
                                isYours: !0
                            })))
                        }(t);
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.collection ? Object(f.w)(t.collection, n) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, o)
                });

            function Ie() {
                var e = o()(["\n  fragment NotificationCollectionPostApproved_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Ie = function () {
                    return e
                }, e
            }
            var Ae = s()(Ie(), ue.a, f.x),
                Le = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.collection ? Object(f.w)(t.collection, n) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "approved ", i.createElement(me.a, null, i.createElement(de, {
                        post: t.post,
                        isYours: !0
                    })), " to be added to ", i.createElement(me.a, null, i.createElement(je, {
                        collection: t.collection
                    }))))
                });

            function Ne() {
                var e = o()(["\n  fragment NotificationCollectionPostPublished_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Ne = function () {
                    return e
                }, e
            }
            var Te = s()(Ne(), ue.a, f.x),
                Pe = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.post ? Object(f.V)(t.post) : t.collection ? Object(f.w)(t.collection, n) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "published ", i.createElement(me.a, null, i.createElement(de, {
                        post: t.post,
                        isYours: !0
                    })), " in ", i.createElement(me.a, null, i.createElement(je, {
                        collection: t.collection
                    }))))
                });

            function Re() {
                var e = o()(["\n  fragment NotificationCollectionEditorAdded_notification on Notification {\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Re = function () {
                    return e
                }, e
            }
            var Ue = s()(Re(), ue.a, f.x),
                Me = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.collection ? Object(f.w)(t.collection, n) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "added you as an editor of ", i.createElement(me.a, null, i.createElement(je, {
                        collection: t.collection
                    }))))
                });

            function Be() {
                var e = o()(["\n  fragment NotificationPostCollaboratedPublished_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Be = function () {
                    return e
                }, e
            }

            function De(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.post && e.post.title ? i.createElement(i.Fragment, null, "published a story ", i.createElement(me.a, null, e.post.title), " that you collaborated on together") : i.createElement(i.Fragment, null, "published a story that you collaborated on together")
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var He = s()(Be(), ue.a);

            function Fe() {
                var e = o()(["\n  fragment NotificationPostNoted_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    note {\n      id\n      content\n    }\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Fe = function () {
                    return e
                }, e
            }

            function ze(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "left a note ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "left a note on ", i.createElement(me.a, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var Ve = s()(Fe(), ue.a);

            function qe() {
                var e = o()(["\n  fragment NotificationNoteReplied_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    noteReply {\n      content\n      id\n    }\n    actor {\n      id\n      name\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return qe = function () {
                    return e
                }, e
            }

            function We(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "replied to your private note ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "replied to your private note on ", i.createElement(me.a, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var Ge = s()(qe(), ue.a);

            function Ye() {
                var e = o()(["\n  fragment NotificationPostNoteReplied_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ye = function () {
                    return e
                }, e
            }

            function Ke(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "replied to a private note ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "replied to a private note on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var Xe = s()(Ye(), ue.a);

            function Qe() {
                var e = o()(["\n  fragment NotificationMentionInNote_notification on Notification {\n    note {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Qe = function () {
                    return e
                }, e
            }

            function $e(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "mentioned you in a note ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "mentioned you in a note on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var Je = s()(Qe(), ue.a);

            function Ze() {
                var e = o()(["\n  fragment NotificationMentionInNoteUpdate_notification on Notification {\n    note {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Ze = function () {
                    return e
                }, e
            }

            function en(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.note && e.note.content ? i.createElement(i.Fragment, null, "updated a note mentioning you ", i.createElement(me.d, {
                            text: e.note.content
                        })) : i.createElement(i.Fragment, null, "updated a note mentioning you on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var nn = s()(Ze(), ue.a);

            function tn() {
                var e = o()(["\n  fragment NotificationMentionInNoteReply_notification on Notification {\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return tn = function () {
                    return e
                }, e
            }

            function rn(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "mentioned you in a note reply ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "mentioned you in a note reply on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var on = s()(tn(), ue.a);

            function an() {
                var e = o()(["\n  fragment NotificationMentionInNoteReplyUpdate_notification on Notification {\n    noteReply {\n      content\n    }\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return an = function () {
                    return e
                }, e
            }

            function cn(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.noteReply && e.noteReply.content ? i.createElement(i.Fragment, null, "updated a reply mentioning you ", i.createElement(me.d, {
                            text: e.noteReply.content
                        })) : i.createElement(i.Fragment, null, "updated a reply mentioning you on ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var sn = s()(an(), ue.a);

            function ln() {
                var e = o()(["\n  fragment NotificationCollectionFollowedMilestone_notification on Notification {\n    milestoneArg\n    collection {\n      name\n      slug\n      id\n      ...collectionUrl_collection\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n  ", "\n"]);
                return ln = function () {
                    return e
                }, e
            }
            var un = s()(ln(), f.x),
                dn = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.notification,
                        r = function (e) {
                            return 1 === e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(je, {
                                collection: e.collection,
                                isYours: !0,
                                isFirst: !0
                            })), " has a follower") : e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(je, {
                                collection: e.collection
                            })), " has " + e.milestoneArg + " followers") : null
                        }(t);
                    return i.createElement(_.a, null, function (e) {
                        return i.createElement(ue.b, {
                            user: e,
                            url: t.collection ? Object(f.w)(t.collection, n) : "",
                            occurredAt: t.occurredAt,
                            isUnread: t.isUnread
                        }, r)
                    })
                });

            function mn() {
                var e = o()(["\n  fragment NotificationPostAddedToEditorsPicks_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return mn = function () {
                    return e
                }, e
            }

            function fn(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                    post: n.post,
                    isYours: !0,
                    isFirst: !0
                })), " has been selected by our editors as a Featured Story on the top of our homepage. Congratulations!"))
            }
            var pn = s()(mn(), ue.a);

            function hn() {
                var e = o()(["\n  fragment NotificationPostRecommendedMilestone_notification on Notification {\n    milestoneArg\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return hn = function () {
                    return e
                }, e
            }

            function gn(e) {
                var n = e.notification,
                    t = function (e) {
                        return 1 === e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " has a fan") : e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " has " + e.milestoneArg + " fans") : null
                    }(n);
                return i.createElement(_.a, null, function (e) {
                    return i.createElement(ue.b, {
                        user: e,
                        url: n.post ? Object(f.V)(n.post) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, t)
                })
            }
            var bn = s()(hn(), ue.a);

            function vn() {
                var e = o()(["\n  fragment NotificationPostClappedMilestone_notification on Notification {\n    milestoneArg\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return vn = function () {
                    return e
                }, e
            }

            function xn(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.milestoneArg ? i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0,
                            isFirst: !0
                        })), " got " + e.milestoneArg + " claps") : null
                    }(n);
                return i.createElement(_.a, null, function (e) {
                    return i.createElement(ue.b, {
                        user: e,
                        url: n.post ? Object(f.V)(n.post) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, t)
                })
            }
            var En = s()(vn());

            function yn() {
                var e = o()(["\n  fragment NotificationPostPublishedBySomeoneYouFollow_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return yn = function () {
                    return e
                }, e
            }

            function jn(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "published a new story ", i.createElement(me.b, null, n.post ? n.post.title : "")))
            }
            var _n = s()(yn(), ue.a);

            function wn() {
                var e = o()(["\n  fragment NotificationSeriesPublishedBySomeoneYouFollow_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return wn = function () {
                    return e
                }, e
            }

            function kn(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "started a series ", i.createElement(me.b, null, n.post && n.post.title)))
            }
            var Sn = s()(wn(), ue.a);

            function Cn() {
                var e = o()(["\n  fragment NotificationSeriesYouFollowUpdated_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Cn = function () {
                    return e
                }, e
            }

            function On(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "updated their series ", i.createElement(me.b, null, n.post ? n.post.title : "")))
            }
            var In = s()(Cn(), ue.a);

            function An() {
                var e = o()(["\n  fragment NotificationSeriesSubscribed_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return An = function () {
                    return e
                }, e
            }

            function Ln(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "subscribed to updates from your series ", i.createElement(me.a, null, n.post ? n.post.title : "")))
            }
            var Nn = s()(An(), ue.a),
                Tn = t("./src/framework/design-system/type/index.js"),
                Pn = t("./src/components/user/UserFollowButton.jsx");

            function Rn() {
                var e = o()(["\n  fragment NotificationsFollowersDialog_user on User {\n    username\n    name\n    imageId\n    bio\n    isFollowing\n    mediumMemberAt\n  }\n"]);
                return Rn = function () {
                    return e
                }, e
            }

            function Un(e) {
                var n = e.actors,
                    t = e.isVisible,
                    r = e.hide;
                return i.createElement(d.j, {
                    isVisible: t,
                    hide: r,
                    withAnimation: !0
                }, i.createElement(d.b, {
                    maxWidth: "550px",
                    sm: {
                        paddingTop: "0"
                    }
                }, i.createElement(d.b, {
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center"
                }, i.createElement(Tn.b, {
                    scale: "S"
                }, "Follows")), n && n.map(function (e) {
                    var n = e.actor;
                    return n && i.createElement(Mn, {
                        hide: r,
                        actor: n,
                        key: n.id
                    })
                })))
            }
            var Mn = function (e) {
                    var n = e.actor,
                        t = e.hide,
                        r = n.username,
                        o = n.name,
                        a = n.bio,
                        c = void 0 === a ? "" : a;
                    return o && r ? i.createElement(d.b, {
                        padding: "12px 0"
                    }, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }, i.createElement(d.b, {
                        display: "flex",
                        alignItems: "flex-start"
                    }, i.createElement(d.b, {
                        marginRight: "20px"
                    }, i.createElement(v.d, {
                        user: n,
                        scale: "S"
                    })), i.createElement(d.b, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }, i.createElement(Tn.b, {
                        scale: "XS"
                    }, i.createElement(d.v, {
                        href: Object(f.Fb)(r),
                        onClick: t
                    }, o)), i.createElement(Tn.a, {
                        scale: "S"
                    }, c))), i.createElement(d.b, {
                        marginLeft: "48px"
                    }, i.createElement(Pn.c, {
                        buttonSize: "SMALL",
                        user: n
                    })))) : null
                },
                Bn = s()(Rn());

            function Dn() {
                var e = o()(["\n  fragment NotificationUsersFollowingYou_notification on Notification {\n    actor {\n      id\n      name\n      username\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n        ...NotificationsFollowersDialog_user\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n  ", "\n"]);
                return Dn = function () {
                    return e
                }, e
            }

            function Hn(e) {
                var n = e.notification,
                    t = e.isRollup,
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return t ? i.createElement(d.K, null, function (e) {
                    var t = e.isVisible,
                        o = e.show,
                        a = e.hide;
                    return i.createElement(i.Fragment, null, i.createElement(ue.b, {
                        actors: r,
                        user: n.actor,
                        onClick: o,
                        url: "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "started following you")), i.createElement(Un, {
                        actors: r.rollupItems,
                        isVisible: t,
                        hide: a
                    }))
                }) : i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.actor && n.actor.username ? Object(f.Fb)(n.actor.username) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "started following you"))
            }
            var Fn = s()(Dn(), ue.a, Bn);

            function zn() {
                var e = o()(["\n  fragment NotificationMentionInPost_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return zn = function () {
                    return e
                }, e
            }

            function Vn(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "mentioned you in a story ", i.createElement(me.b, null, n.post && n.post.title)))
            }
            var qn = s()(zn(), ue.a);

            function Wn() {
                var e = o()(["\n  fragment NotificationMentionInSeries_notification on Notification {\n    actor {\n      id\n      name\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Wn = function () {
                    return e
                }, e
            }

            function Gn(e) {
                var n = e.notification,
                    t = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: t,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, i.createElement(i.Fragment, null, "mentioned you in a series ", i.createElement(me.b, null, n.post && n.post.title)))
            }
            var Yn = s()(Wn(), ue.a);

            function Kn() {
                var e = o()(["\n  fragment NotificationPostAddedToHomepageCatalog_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return Kn = function () {
                    return e
                }, e
            }

            function Xn(e) {
                var n = e.notification,
                    t = {
                        actorName: null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(_.a, null, function (e) {
                    return i.createElement(ue.b, {
                        actors: t,
                        user: e,
                        url: n.post ? Object(f.V)(n.post) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, i.createElement(me.a, null, i.createElement(de, {
                        post: n.post,
                        isYours: !0,
                        isFirst: !0
                    })), " was featured on the Medium homepage"))
                })
            }
            var Qn = s()(Kn(), ue.a);

            function $n() {
                var e = o()(["\n  fragment NotificationFastrakPostAccepted_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return $n = function () {
                    return e
                }, e
            }

            function Jn(e) {
                var n = e.notification,
                    t = {
                        actorName: null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(_.a, null, function (e) {
                    return i.createElement(ue.b, {
                        actors: t,
                        user: e,
                        url: n.post ? Object(f.V)(n.post) : "",
                        occurredAt: n.occurredAt,
                        isUnread: n.isUnread
                    }, i.createElement(i.Fragment, null, "Medium’s curators selected ", i.createElement(me.b, null, i.createElement(de, {
                        post: n.post,
                        isYours: !0
                    }))))
                })
            }
            var Zn = s()($n());

            function et() {
                var e = o()(["\n  fragment NotificationHighlightWasPiledOnto_notification on Notification {\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    actor {\n      id\n      name\n    }\n    quote {\n      quoteParagraphPreview {\n        text\n      }\n      paragraphs {\n        type\n      }\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return et = function () {
                    return e
                }, e
            }

            function nt(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.quote && e.quote.quoteParagraphPreview && e.quote.quoteParagraphPreview.text ? i.createElement(i.Fragment, null, "also highlighted ", i.createElement(me.c, {
                            text: e.quote.quoteParagraphPreview.text
                        })) : i.createElement(i.Fragment, null, "also highlighted ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post,
                            isYours: !0
                        })))
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post && n.post.id ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var tt = s()(et(), ue.a);

            function rt() {
                var e = o()(["\n  fragment NotificationPostMongerRequestSent_notification on Notification {\n    actor {\n      id\n      name\n      username\n    }\n    occurredAt\n    isUnread\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return rt = function () {
                    return e
                }, e
            }
            var ot = s()(rt(), ue.a),
                it = Object(l.b)(function (e) {
                    return {
                        productName: e.config.productName
                    }
                })(function (e) {
                    var n = e.productName,
                        t = e.notification,
                        r = {
                            actorName: t.actor ? t.actor.name : null,
                            rollupItems: t.rollupItems
                        };
                    return i.createElement(ue.b, {
                        actors: r,
                        user: t.actor,
                        url: t.post ? Object(f.V)(t.post) : "",
                        occurredAt: t.occurredAt,
                        isUnread: t.isUnread
                    }, i.createElement(i.Fragment, null, "Our curators would love to feature your story on ", n, ". We just emailed you with the details – check your inbox."))
                });

            function at() {
                var e = o()(["\n  fragment NotificationTaxes_notification on Notification {\n    actor {\n      name\n    }\n    notificationType\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n"]);
                return at = function () {
                    return e
                }, e
            }
            var ct = function (e, n) {
                return "tax_not_submitted_day_one" === e || "tax_not_submitted_post_earning_limit" === e || "tax_not_submitted_pre_earning_limit" === e ? "In order to receive payments through the ".concat(n, " Partner Program,\n    please take a moment to add your taxpayer information.") : "tax_not_submitted_final" === e ? "This is the final week to add your tax information to receive your withheld\n    ".concat(n, " payments.") : "tax_not_submitted_last_day" === e ? "Your ".concat(n, " Partner Program withholdings have been forfeited,\n    but you can begin earning again once you submit verified tax information.") : "tax_failed_tin_day_one" === e ? "We were not able to verify your taxpayer information.\n    In order to be paid, please take a moment to revisit your information." : "tax_failed_tin_post_earning_limit" === e || "tax_failed_tin_pre_earning_limit" === e ? "We were not able to verify your taxpayer information. In order to receive payments through\n    ".concat(n, " Partner Program, please revisit your information.") : "tax_failed_tin_final" === e ? "This is the final week to add your tax information to receive your withheld\n    ".concat(n, " Partner Program payments.") : "tax_failed_tin_last_day" === e ? "Your ".concat(n, " withholdings have been forfeited,\n    but you can begin earning again once you submit verified tax information.") : void 0
            };
            var st = s()(at()),
                lt = Object(l.b)(function (e) {
                    return {
                        productName: e.config.productName
                    }
                })(function (e) {
                    var n = e.productName,
                        t = e.notification,
                        r = t.notificationType;
                    return i.createElement(_.a, null, function (e) {
                        return i.createElement(ue.b, {
                            user: e,
                            url: Object(f.S)(),
                            occurredAt: t.occurredAt,
                            isUnread: t.isUnread
                        }, i.createElement(i.Fragment, null, ct(r, n)))
                    })
                });

            function ut() {
                var e = o()(["\n  fragment NotificationPostShared_notification on Notification {\n    actor {\n      id\n      name\n    }\n    post {\n      id\n      mediumUrl\n      title\n      visibility\n    }\n    occurredAt\n    isUnread\n    rollupItems {\n      actor {\n        id\n      }\n    }\n    ...NotificationLayout_notification\n  }\n  ", "\n"]);
                return ut = function () {
                    return e
                }, e
            }

            function dt(e) {
                var n = e.notification,
                    t = function (e) {
                        return e.post ? i.createElement(i.Fragment, null, " shared a post with you ", i.createElement(me.b, null, i.createElement(de, {
                            post: e.post
                        }))) : i.createElement(i.Fragment, null, " shared a post with you")
                    }(n),
                    r = {
                        actorName: n.actor ? n.actor.name : null,
                        rollupItems: n.rollupItems
                    };
                return i.createElement(ue.b, {
                    actors: r,
                    user: n.actor,
                    url: n.post ? Object(f.V)(n.post) : "",
                    occurredAt: n.occurredAt,
                    isUnread: n.isUnread
                }, t)
            }
            var mt = s()(ut(), ue.a);

            function ft() {
                var e = o()(["\n  fragment Notification_notification on Notification {\n    notificationType\n    ...NotificationQuote_notification\n    ...NotificationResponseCreated_notification\n    ...NotificationPostRecommended_notification\n    ...NotificationCollectionPostSubmitted_notification\n    ...NotificationCollectionDraftSubmitted_notification\n    ...NotificationCollectionPostApproved_notification\n    ...NotificationCollectionPostPublished_notification\n    ...NotificationCollectionEditorAdded_notification\n    ...NotificationPostCollaboratedPublished_notification\n    ...NotificationPostNoted_notification\n    ...NotificationNoteReplied_notification\n    ...NotificationPostNoteReplied_notification\n    ...NotificationMentionInNote_notification\n    ...NotificationMentionInNoteUpdate_notification\n    ...NotificationMentionInNoteReply_notification\n    ...NotificationMentionInNoteReplyUpdate_notification\n    ...NotificationCollectionFollowedMilestone_notification\n    ...NotificationPostAddedToEditorsPicks_notification\n    ...NotificationPostRecommendedMilestone_notification\n    ...NotificationPostClappedMilestone_notification\n    ...NotificationPostPublishedBySomeoneYouFollow_notification\n    ...NotificationSeriesPublishedBySomeoneYouFollow_notification\n    ...NotificationSeriesYouFollowUpdated_notification\n    ...NotificationSeriesSubscribed_notification\n    ...NotificationUsersFollowingYou_notification\n    ...NotificationMentionInPost_notification\n    ...NotificationMentionInSeries_notification\n    ...NotificationPostAddedToHomepageCatalog_notification\n    ...NotificationFastrakPostAccepted_notification\n    ...NotificationHighlightWasPiledOnto_notification\n    ...NotificationPostMongerRequestSent_notification\n    ...NotificationTaxes_notification\n    ...NotificationPostShared_notification\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return ft = function () {
                    return e
                }, e
            }

            function pt(e) {
                var n = e.notification,
                    t = n.notificationType.includes("_rollup");
                switch (t ? n.notificationType.replace("_rollup", "") : n.notificationType) {
                    case "quote":
                        return i.createElement(pe, {
                            notification: n,
                            isRollup: t
                        });
                    case "response_created":
                        return i.createElement(be, {
                            notification: n,
                            isRollup: t
                        });
                    case "post_recommended":
                        return i.createElement(Ee, {
                            notification: n
                        });
                    case "collection_post_submitted":
                        return i.createElement(ke, {
                            notification: n
                        });
                    case "collection_draft_submitted":
                        return i.createElement(Oe, {
                            notification: n
                        });
                    case "collection_post_approved":
                        return i.createElement(Le, {
                            notification: n
                        });
                    case "collection_post_published":
                        return i.createElement(Pe, {
                            notification: n
                        });
                    case "collection_editor_added":
                        return i.createElement(Me, {
                            notification: n
                        });
                    case "post_collaborated_published":
                        return i.createElement(De, {
                            notification: n
                        });
                    case "post_noted":
                        return i.createElement(ze, {
                            notification: n
                        });
                    case "note_replied":
                        return i.createElement(We, {
                            notification: n
                        });
                    case "post_note_replied":
                        return i.createElement(Ke, {
                            notification: n
                        });
                    case "mention_in_note":
                        return i.createElement($e, {
                            notification: n
                        });
                    case "mention_in_note_update":
                        return i.createElement(en, {
                            notification: n
                        });
                    case "mention_in_note_reply":
                        return i.createElement(rn, {
                            notification: n
                        });
                    case "mention_in_note_reply_update":
                        return i.createElement(cn, {
                            notification: n
                        });
                    case "collection_followed_milestone":
                        return i.createElement(dn, {
                            notification: n
                        });
                    case "post_added_to_editors_picks":
                        return i.createElement(fn, {
                            notification: n
                        });
                    case "post_recommended_milestone":
                        return i.createElement(gn, {
                            notification: n
                        });
                    case "post_clapped_milestone":
                        return i.createElement(xn, {
                            notification: n
                        });
                    case "post_published_by_someone_you_follow":
                        return i.createElement(jn, {
                            notification: n
                        });
                    case "series_published_by_someone_you_follow":
                        return i.createElement(kn, {
                            notification: n
                        });
                    case "series_you_follow_updated":
                        return i.createElement(On, {
                            notification: n
                        });
                    case "series_subscribed":
                        return i.createElement(Ln, {
                            notification: n
                        });
                    case "users_following_you":
                        return i.createElement(Hn, {
                            notification: n,
                            isRollup: t
                        });
                    case "mention_in_post":
                        return i.createElement(Vn, {
                            notification: n
                        });
                    case "mention_in_series":
                        return i.createElement(Gn, {
                            notification: n
                        });
                    case "post_added_to_homepage_catalog":
                        return i.createElement(Xn, {
                            notification: n
                        });
                    case "fastrak_post_accepted":
                        return i.createElement(Jn, {
                            notification: n
                        });
                    case "highlight_was_piled_onto":
                        return i.createElement(nt, {
                            notification: n
                        });
                    case "post_monger_request_sent":
                        return i.createElement(it, {
                            notification: n
                        });
                    case "post_shared":
                        return i.createElement(dt, {
                            notification: n
                        });
                    case "tax_not_submitted_day_one":
                    case "tax_not_submitted_pre_earning_limit":
                    case "tax_not_submitted_post_earning_limit":
                    case "tax_not_submitted_final":
                    case "tax_not_submitted_last_day":
                    case "tax_failed_tin_day_one":
                    case "tax_failed_tin_post_earning_limit":
                    case "tax_failed_tin_pre_earning_limit":
                    case "tax_failed_tin_final":
                    case "tax_failed_tin_last_day":
                        return i.createElement(lt, {
                            notification: n
                        });
                    default:
                        return null
                }
            }
            var ht = s()(ft(), he, ve, ye, we, Ce, Ae, Te, Ue, He, Ve, Ge, Xe, Je, nn, on, sn, un, pn, bn, En, _n, Sn, In, Nn, Fn, qn, Yn, Qn, Zn, tt, ot, st, mt);

            function gt(e) {
                var n = e.fetchMore;
                return n ? i.createElement(d.v, {
                    linkStyle: "OBVIOUS",
                    onClick: n
                }, "Older notifications") : i.createElement(i.Fragment, null, "You're all caught up.")
            }
            var bt = Object(l.b)(function (e) {
                return {
                    authDomain: e.config.authDomain
                }
            })(function (e) {
                var n = e.authDomain,
                    t = e.fetchMore;
                return i.createElement(d.b, {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginBottom: "10px",
                    padding: "10px 20px"
                }, i.createElement(Tn.a, {
                    scale: "M"
                }, i.createElement(gt, {
                    fetchMore: t
                })), i.createElement(Tn.a, {
                    scale: "M"
                }, i.createElement(d.v, {
                    linkStyle: "OBVIOUS",
                    href: Object(f.Rb)(n)
                }, "Your stats")))
            });

            function vt() {
                var e = o()(["\n  query NotificationsWidgetQuery($pagingOptions: PagingOptions) {\n    notificationsConnection(paging: $pagingOptions) {\n      notifications {\n        ...Notification_notification\n      }\n      pagingInfo {\n        next {\n          limit\n          page\n          source\n          to\n        }\n      }\n    }\n    notificationStatus {\n      ...NotificationsBadge_notificationStatus\n    }\n  }\n  ", "\n  ", "\n"]);
                return vt = function () {
                    return e
                }, e
            }
            var xt = s()(vt(), ht, le),
                Et = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = function () {};
                    return i.createElement(L.c, {
                        query: xt
                    }, function (e) {
                        e.loading, e.error;
                        var r = e.fetchMore,
                            o = e.data,
                            a = o.notificationsConnection,
                            c = o.notificationStatus;
                        if (!c || !a) return null;
                        var s, l = a.notifications;
                        l || (l = []);
                        var u = a.pagingInfo && a.pagingInfo.next;
                        if (u) {
                            var p = {
                                limit: u.limit,
                                page: u.page,
                                source: u.source,
                                to: u.to
                            };
                            s = function () {
                                return r({
                                    variables: {
                                        pagingOptions: p
                                    },
                                    updateQuery: function (e, n) {
                                        var t = n.fetchMoreResult,
                                            r = K()(t);
                                        return r.notificationsConnection.notifications = [].concat(G()(e.notificationsConnection.notifications), G()(t.notificationsConnection.notifications)), r
                                    }
                                })
                            }
                        }
                        return i.createElement(ae.a, {
                            name: "enable_lite_unread_notification_count"
                        }, function (e) {
                            return e ? i.createElement(d.v, {
                                href: Object(f.Jb)(n)
                            }, i.createElement(se, {
                                notificationStatus: c,
                                toggle: t
                            })) : i.createElement(d.K, null, function (e) {
                                var n = e.isVisible,
                                    t = e.hide,
                                    r = e.toggle;
                                return i.createElement(d.y, {
                                    flip: !1,
                                    hide: t,
                                    isVisible: n,
                                    popoverRenderFn: function () {
                                        return i.createElement(m.a, {
                                            padding: "0"
                                        }, i.createElement(i.Fragment, null, l.map(function (e, n) {
                                            return i.createElement(i.Fragment, {
                                                key: n
                                            }, i.createElement(m.b, {
                                                paddingTopBottom: "0",
                                                paddingLeftRight: "0"
                                            }, i.createElement(pt, {
                                                notification: e
                                            })), i.createElement(m.c, {
                                                paddingTopBottom: "0",
                                                width: "360px"
                                            }))
                                        }), i.createElement(bt, {
                                            fetchMore: s
                                        })))
                                    },
                                    setMaxHeight: !0,
                                    width: "360px"
                                }, i.createElement(se, {
                                    notificationStatus: c,
                                    toggle: r
                                }))
                            })
                        })
                    })
                }),
                yt = t("./src/components/session/RequireFlag.jsx");

            function jt() {
                return (jt = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var _t = a.a.createElement("path", {
                    d: "M16 6a2 2 0 0 1 2 2v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-5.67-4.13-5.66 4.13a.5.5 0 0 1-.7-.03.48.48 0 0 1-.13-.29H5V8c0-1.1.9-2 2-2h9zM6 8v12.64l5.16-3.67a.49.49 0 0 1 .68 0L17 20.64V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"
                }),
                wt = a.a.createElement("path", {
                    d: "M21 5v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-.17-.12V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1H8c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2z"
                }),
                kt = function (e) {
                    return a.a.createElement("svg", jt({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), _t, wt)
                };

            function St() {
                return (St = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ct = a.a.createElement("path", {
                    d: "M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                }),
                Ot = function (e) {
                    return a.a.createElement("svg", St({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), Ct)
                };

            function It() {
                var e = o()(["\n  fragment MetabarActionsLI_post on Post {\n    ...MetabarButtonConversionLI_post\n    isLocked\n  }\n  ", "\n"]);
                return It = function () {
                    return e
                }, e
            }

            function At() {
                var e = o()(["\n  fragment MetabarActionsLI_collection on Collection {\n    creator {\n      id\n    }\n    viewerCanManage\n    ...CollectionAvatar_collection\n    ...CollectionMetabarActionsPopover_collection\n  }\n  ", "\n  ", "\n"]);
                return At = function () {
                    return e
                }, e
            }
            var Lt = "16px",
                Nt = "10px";
            var Tt = s()(At(), u.b, g),
                Pt = s()(It(), C),
                Rt = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.collection,
                        r = e.post,
                        o = e.viewer,
                        a = !!o.mediumMemberAt,
                        c = t && t.creator && t.creator.id === o.id,
                        s = t && t.viewerCanManage,
                        l = c || s,
                        m = r && r.creator && r.creator.id === o.id,
                        h = r && (l || m);
                    return i.createElement(ae.a, {
                        name: "can_edit_members_only_posts"
                    }, function (e) {
                        var c = e && r && r.isLocked,
                            s = h || c;
                        return i.createElement(d.d, null, i.createElement(d.b, {
                            display: "flex",
                            alignItems: "center"
                        }, s && r && i.createElement(q, {
                            post: r
                        }), !s && i.createElement(d.v, {
                            href: Object(f.ab)()
                        }, i.createElement(d.b, {
                            tag: Ot,
                            marginLeft: Lt,
                            marginRight: Lt,
                            sm: {
                                marginLeft: Nt,
                                marginRight: Nt
                            }
                        })), !s && a && i.createElement(d.v, {
                            href: Object(f.Mb)(n)
                        }, i.createElement(d.b, {
                            tag: kt,
                            marginRight: Lt,
                            sm: {
                                display: "none"
                            }
                        })), i.createElement(d.b, {
                            marginRight: Lt,
                            display: "flex",
                            sm: {
                                marginRight: Nt
                            }
                        }, i.createElement(ae.a, {
                            name: "enable_lite_notifications"
                        }, function (e) {
                            return e ? i.createElement(p.a, null, i.createElement(Et, null)) : i.createElement(d.v, {
                                href: Object(f.Jb)(n)
                            }, i.createElement(d.b, {
                                tag: $
                            }))
                        })), !a && i.createElement(d.b, {
                            marginRight: Lt,
                            sm: {
                                display: "none"
                            }
                        }, i.createElement(O, {
                            post: r
                        })), i.createElement(y, {
                            viewer: o
                        }, i.createElement(v.d, {
                            user: o,
                            scale: "XS"
                        })), t && l && i.createElement(yt.a, {
                            name: "enable_lite_pub_header_menu"
                        }, i.createElement(d.b, {
                            marginLeft: Lt,
                            sm: {
                                marginLeft: Nt
                            }
                        }, i.createElement(b, {
                            collection: t
                        }, i.createElement(u.a, {
                            collection: t,
                            size: 32
                        }))))))
                    })
                }),
                Ut = t("./src/components/metabar/MetabarActionsLO.jsx");

            function Mt() {
                var e = o()(["\n  fragment MetabarActions_post on Post {\n    ...MetabarActionsLI_post\n  }\n  ", "\n"]);
                return Mt = function () {
                    return e
                }, e
            }

            function Bt() {
                var e = o()(["\n  fragment MetabarActions_collection on Collection {\n    ...MetabarActionsLI_collection\n  }\n  ", "\n"]);
                return Bt = function () {
                    return e
                }, e
            }

            function Dt(e) {
                var n = e.post,
                    t = e.collection,
                    r = e.withoutConversionButton,
                    o = void 0 !== r && r;
                return i.createElement(_.a, null, function (e) {
                    return e ? i.createElement(Rt, {
                        viewer: e,
                        post: n,
                        collection: t
                    }) : i.createElement(Ut.b, {
                        withoutConversionButton: o,
                        post: n
                    })
                })
            }
            t.d(n, "c", function () {
                return Dt
            }), t.d(n, "a", function () {
                return Ht
            }), t.d(n, "b", function () {
                return Ft
            });
            var Ht = s()(Bt(), Tt),
                Ft = s()(Mt(), Pt)
        },
        "./src/components/metabar/MetabarActionsLO.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./src/framework/design-system/components/index.js"),
                l = t("./src/components/susi/SusiClickable.jsx"),
                u = t("./src/framework/source/index.js"),
                d = t("./src/components/upsell/UpsellClickable.jsx"),
                m = t("./src/framework/track/UpsellPresentationTracker.jsx");

            function f() {
                var e = o()(["\n  fragment MetabarButtonConversionLO_post on Post {\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
                return f = function () {
                    return e
                }, e
            }
            var p = c()(f(), d.b),
                h = function (e) {
                    var n = e.post;
                    return i.createElement(u.b, {
                        source: {
                            name: "upgrade_membership",
                            dimension: "nav_full"
                        }
                    }, i.createElement(m.a, null, i.createElement(d.a, {
                        linkStyle: "SUBTLE",
                        post: n
                    }, i.createElement(s.d, null, "Become a member"))))
                };

            function g() {
                var e = o()(["\n  fragment MetabarActionsLO_post on Post {\n    ...MetabarButtonConversionLO_post\n  }\n  ", "\n"]);
                return g = function () {
                    return e
                }, e
            }
            t.d(n, "a", function () {
                return b
            });
            n.b = function (e) {
                var n = e.withoutConversionButton,
                    t = void 0 !== n && n,
                    r = e.post;
                return i.createElement(s.b, {
                    display: "flex",
                    alignItems: "center"
                }, i.createElement(s.b, {
                    display: "flex",
                    sm: {
                        display: "none"
                    }
                }, !t && i.createElement(h, {
                    post: r
                }), i.createElement(s.b, {
                    marginLeft: "16px"
                }, i.createElement(s.d, null, i.createElement(l.a, {
                    isObvious: !0,
                    operation: "login",
                    susiEntry: "nav_reg"
                }, "Sign in")))), i.createElement(s.b, {
                    marginLeft: "16px"
                }, i.createElement(l.a, {
                    isButton: !0,
                    operation: "register",
                    isObvious: !0,
                    susiEntry: "nav_reg"
                }, "Get started")))
            };
            var b = c()(g(), p)
        },
        "./src/components/metabar/MetabarLayout.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return h
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t("./src/framework/track/DomMonitorContext.js"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/styles/mediaTypes.js"),
                d = t("./src/styles/zIndex.js"),
                m = 25,
                f = 25,
                p = function (e, n) {
                    return function (t) {
                        return a()({
                            display: "block",
                            position: e ? "fixed" : "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            backgroundColor: n ? "transparent" : t.backgroundColor,
                            zIndex: d.a.metabar,
                            boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
                            transition: e ? "transform 300ms ease" : null,
                            willChange: e ? "transform" : null
                        }, Object(u.a)(t), {
                            display: "none"
                        })
                    }
                },
                h = function (e) {
                    var n = e.behavior,
                        t = void 0 === n ? "none" : n,
                        r = e.children,
                        i = e.height,
                        a = e.heightSm,
                        u = e.isFixed,
                        d = e.isTransparent,
                        h = e.marginBottom,
                        g = void 0 === h ? 64 : h,
                        b = e.marginBottomSm,
                        v = void 0 === b ? 24 : b,
                        x = Object(s.b)(),
                        E = c.useState(!0),
                        y = o()(E, 2),
                        j = y[0],
                        _ = y[1],
                        w = c.useState(0),
                        k = o()(w, 2),
                        S = k[0],
                        C = k[1];
                    return c.useEffect(function () {
                        if ("none" !== t && u) return x.on("scroll_down", n), x.on("scroll_up", e),
                            function () {
                                x.off("scroll_down", n), x.off("scroll_up", e)
                            };

                        function e() {
                            window.pageYOffset <= f && _(!0), "aggressive" === t && S - window.pageYOffset >= m && _(!0)
                        }

                        function n() {
                            window.pageYOffset > f && _(!1), C(window.pageYOffset)
                        }
                    }), c.createElement(l.L, null, function (e) {
                        return c.createElement(c.Fragment, null, c.createElement("nav", {
                            className: e(p(u, d)),
                            style: {
                                transform: j ? null : "translatey(-100%)"
                            }
                        }, c.createElement("div", {
                            className: "branch-journeys-top"
                        }, r)), c.createElement(l.b, {
                            height: "".concat(i, "px"),
                            marginBottom: "".concat(g, "px"),
                            sm: {
                                height: "".concat(a, "px"),
                                marginBottom: "".concat(v, "px")
                            }
                        }))
                    })
                }
        },
        "./src/components/metabar/constants.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            }), t.d(n, "c", function () {
                return o
            }), t.d(n, "b", function () {
                return i
            });
            var r = 65,
                o = 56,
                i = 54
        },
        "./src/components/navigation/Anchor.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                a = t.n(i),
                c = t("./node_modules/lodash/pick.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = t("./node_modules/react-router-dom/es/Link.js"),
                d = t("./node_modules/react-router/es/withRouter.js"),
                m = t("./node_modules/react-redux/es/index.js"),
                f = t("./src/components/session/WithFlag.jsx"),
                p = t("./src/framework/source/index.js"),
                h = t("./src/routes/getLiteRouteForPath.js"),
                g = t("./src/util/navigation.js");
            n.a = Object(d.a)(Object(m.b)(function (e) {
                return {
                    currentHostname: e.navigation.hostname,
                    isCustomDomain: e.client.isCustomDomain
                }
            })(function (e) {
                var n = e.href,
                    t = e.children,
                    r = (e.location, e.currentHostname),
                    i = e.isCustomDomain,
                    c = e.disableSourceParam,
                    d = void 0 !== c && c,
                    m = a()(e, ["href", "children", "location", "currentHostname", "isCustomDomain", "disableSourceParam"]),
                    b = Object(p.c)(),
                    v = Object(g.e)(n, r);
                b && !d && (n = Object(g.a)(n, {
                    source: b
                }));
                var x = s()(m, ["aria-label", "className", "onClick", "target", "rel"]),
                    E = l.createElement("a", o()({
                        href: n
                    }, x), t);
                if (!v || x.onClick) return E;
                var y = Object(g.c)(n),
                    j = Object(h.a)(y, {
                        isCustomDomain: i
                    });
                if (!j) return E;
                var _ = l.createElement(u.a, o()({
                    to: y
                }, x), t);
                return j.flagName ? l.createElement(f.a, {
                    name: j.flagName
                }, function (e) {
                    return !0 === e ? _ : E
                }) : _
            }))
        },
        "./src/components/navigation/Redirect.jsx": function (e, n, t) {
            "use strict";
            (function (e) {
                t.d(n, "a", function () {
                    return a
                });
                var r = t("./node_modules/react/index.js"),
                    o = t("./node_modules/react-router-dom/es/Redirect.js"),
                    i = t("./src/screens/LoadingScreen.jsx");

                function a(n) {
                    var t = n.to;
                    return e.window ? (e.window.location = t, r.createElement(i.a, null)) : r.createElement(o.a, {
                        to: t
                    })
                }
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/notifications/notification-types/util/NotificationLayout.jsx": function (e, n, t) {
            "use strict";
            (function (e) {
                t.d(n, "b", function () {
                    return E
                }), t.d(n, "a", function () {
                    return y
                });
                var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                    o = t.n(r),
                    i = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                    a = t.n(i),
                    c = t("./node_modules/react/index.js"),
                    s = t("./node_modules/graphql-tag/src/index.js"),
                    l = t.n(s),
                    u = t("./node_modules/date-fns/index.js"),
                    d = t("./src/components/format/Date.jsx"),
                    m = t("./src/components/format/TimeAgo.jsx"),
                    f = t("./src/components/notifications/notification-types/util/NotificationStyles.jsx"),
                    p = t("./src/components/user/UserAvatar.jsx"),
                    h = t("./src/framework/design-system/components/index.js");

                function g() {
                    var e = o()(["\n  fragment NotificationLayout_notification on Notification {\n    actor {\n      ...UserAvatar_user\n    }\n    rollupItems {\n      actor {\n        id\n      }\n    }\n  }\n  ", "\n"]);
                    return g = function () {
                        return e
                    }, e
                }

                function b(e) {
                    if (!e) return null;
                    var n, t = e.actorName ? e.actorName : "Unknown user";
                    if (e.rollupItems) {
                        var r = (n = e.rollupItems) ? new Set(n.map(function (e) {
                            return e.actor
                        })).size : 0;
                        if (r > 1) return r > 2 ? t + " + " + (r - 1) + " others " : t + " + 1 other "
                    }
                    return t + " "
                }

                function v(n) {
                    var t = n.timestamp;
                    return Object(u.differenceInDays)(e.Date.now(), t) >= 5 ? c.createElement(d.a, {
                        timestamp: t
                    }) : c.createElement(m.a, {
                        timestamp: t
                    })
                }

                function x(e) {
                    var n = e.onClick,
                        t = e.url,
                        r = e.children;
                    return n ? c.createElement(h.v, {
                        style: {
                            border: "none"
                        },
                        onClick: n
                    }, r) : t ? c.createElement(h.v, {
                        inheritBorder: !1,
                        href: t
                    }, r) : c.createElement(h.b, {
                        style: {
                            border: "none"
                        }
                    }, r)
                }

                function E(e) {
                    var n = e.url,
                        t = e.onClick,
                        r = e.user,
                        o = e.actors,
                        i = e.children,
                        s = e.occurredAt,
                        l = e.isUnread;
                    return c.createElement(h.N, null, function (e) {
                        return c.createElement("div", {
                            style: a()({
                                display: "flex",
                                flexDirection: "row",
                                padding: "20px",
                                width: "360px",
                                lineHeight: 1.4
                            }, l ? {
                                borderLeftColor: "".concat(e.accentColor.border.normal),
                                borderLeftStyle: "".concat(e.borderStyle),
                                borderLeftWidth: "3px"
                            } : {
                                border: "none"
                            })
                        }, c.createElement(h.b, {
                            marginRight: "16px",
                            marginTop: "auto",
                            marginBottom: "auto"
                        }, r ? c.createElement(p.d, {
                            scale: "XS",
                            user: r,
                            link: !0
                        }) : c.createElement(p.a, {
                            scale: "XS"
                        })), c.createElement(x, {
                            url: n,
                            onClick: t
                        }, c.createElement(h.b, {
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column"
                        }, c.createElement(h.b, null, o ? c.createElement(f.a, null, b(o)) : null, i), s && c.createElement(h.b, null, c.createElement(v, {
                            timestamp: s
                        })))))
                    })
                }
                var y = l()(g(), p.b)
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./src/components/notifications/notification-types/util/NotificationStyles.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            }), t.d(n, "b", function () {
                return s
            }), t.d(n, "c", function () {
                return d
            }), t.d(n, "d", function () {
                return m
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/style/components/WithCx.js"),
                i = t("./src/framework/style/components/WithTheme.js"),
                a = t("./src/framework/design-system/components/index.js");

            function c(e) {
                var n = e.children;
                return r.createElement(i.a, null, function (e) {
                    var t = {
                        color: e.baseColor.text.dark
                    };
                    return r.createElement(o.a, null, function (e) {
                        return r.createElement("span", {
                            className: e(t)
                        }, n, " ")
                    })
                })
            }

            function s(e) {
                var n = e.children;
                return r.createElement(i.a, null, function (e) {
                    var t = {
                        color: e.baseColor.text.dark
                    };
                    return r.createElement(o.a, null, function (e) {
                        return r.createElement("span", {
                            className: e(t)
                        }, r.createElement(a.b, null, n))
                    })
                })
            }

            function l(e) {
                var n = e.children;
                return r.createElement(i.a, null, function (e) {
                    var t = {
                        color: e.baseColor.text.dark,
                        textOverflow: "ellipsis"
                    };
                    return r.createElement(o.a, null, function (e) {
                        return r.createElement("span", {
                            className: e(t)
                        }, r.createElement(a.b, null, n))
                    })
                })
            }

            function u(e) {
                var n = e.children;
                return r.createElement(i.a, null, function (e) {
                    var t = {
                        color: e.baseColor.text.dark,
                        backgroundColor: "rgba(12,242,143,.2)",
                        display: "block",
                        width: "fit-content",
                        maxWidth: "250px",
                        padding: "2px 2px 1px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    };
                    return r.createElement(o.a, null, function (e) {
                        return r.createElement("span", {
                            className: e(t)
                        }, n, " ")
                    })
                })
            }

            function d(e) {
                var n = e.text;
                return r.createElement(u, null, n.substring(0, 50))
            }

            function m(e) {
                var n = e.text;
                return r.createElement(l, null, "“" + n.substring(0, 50) + "”")
            }
        },
        "./src/components/post-listing/PostListingItemBylineWithAvatar.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return v
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./node_modules/react-redux/es/index.js"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/components/format/Date.jsx"),
                d = t("./src/components/ui/MiddotContainer.jsx"),
                m = t("./src/util/routes.js"),
                f = t("./src/util/numbers.js"),
                p = t("./src/components/user/UserAvatar.jsx"),
                h = t("./src/svg/star-15px.svg"),
                g = t("./src/components/session/WithFlag.jsx");

            function b() {
                var e = o()(["\n  fragment PostListingItemBylineWithAvatar_post on Post {\n    creator {\n      username\n      name\n      id\n      imageId\n      mediumMemberAt\n    }\n    isLocked\n    readingTime\n    updatedAt\n    statusForCollection\n    collection {\n      id\n      name\n      ...collectionUrl_collection\n    }\n  }\n  ", "\n"]);
                return b = function () {
                    return e
                }, e
            }
            var v = c()(b(), m.x);
            n.b = Object(s.b)(function (e) {
                return {
                    currentLocation: e.navigation.currentLocation
                }
            })(function (e) {
                var n = e.currentLocation,
                    t = e.post,
                    r = t.creator,
                    o = t.readingTime;
                return r ? i.createElement(l.b, {
                    display: "flex",
                    alignItems: "center"
                }, i.createElement(p.d, {
                    user: r,
                    scale: "S",
                    link: !0
                }), i.createElement(l.b, {
                    marginLeft: "16px"
                }, i.createElement(l.d, {
                    strong: !0,
                    clamp: 2
                }, i.createElement(l.f, {
                    href: Object(m.Fb)(r.username || "")
                }, r.name), "APPROVED" === t.statusForCollection && t.collection && t.collection.name && i.createElement(l.f, {
                    href: Object(m.w)(t.collection, n)
                }, " in ", t.collection && t.collection.name)), i.createElement(l.d, null, i.createElement(l.b, {
                    display: "flex",
                    alignItems: "center"
                }, i.createElement(d.a, {
                    middotPadding: "4px",
                    marginTop: "3px",
                    display: "flex",
                    flexWrap: "wrap"
                }, t && t.updatedAt && i.createElement(u.a, {
                    timestamp: t.updatedAt
                }), "".concat(Object(f.d)(o || 0), " min read")), i.createElement(g.a, {
                    name: "remove_stars_ui"
                }, function (e) {
                    return !t.isLocked || e ? null : i.createElement(l.b, {
                        marginLeft: "4px",
                        alignSelf: "center",
                        marginTop: "1px"
                    }, i.createElement(h.a, null))
                }))))) : null
            })
        },
        "./src/components/post-listing/PostListingItemImage.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return v
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/typeof.js"),
                a = t.n(i),
                c = t("./node_modules/lodash/isPlainObject.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = t("./node_modules/graphql-tag/src/index.js"),
                d = t.n(u),
                m = t("./src/framework/design-system/components/index.js"),
                f = t("./src/styles/breakpoints.js"),
                p = t("./src/util/miroImage.js"),
                h = t("./src/util/routes.js");

            function g() {
                var e = o()(["\n  fragment PostListingItemImage_post on Post {\n    id\n    mediumUrl\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n  }\n"]);
                return g = function () {
                    return e
                }, e
            }
            var b = {
                display: "block",
                backgroundOrigin: "border-box",
                backgroundSize: "cover"
            };
            n.b = function (e) {
                var n = e.post,
                    t = e.width,
                    r = e.height,
                    o = e.miroWidth,
                    i = e.miroHeight,
                    c = t || o,
                    u = r || i,
                    d = n.previewImage;
                if (!d) return null;
                var g = Object(p.a)({
                        miroId: d ? d.id : "",
                        width: o,
                        height: i,
                        strategy: "RESAMPLE"
                    }),
                    v = d.focusPercentX || 50,
                    x = d.focusPercentY || 50,
                    E = c.base || c,
                    y = u.base || u,
                    j = function (e) {
                        var n = {
                            backgroundPosition: "".concat(v, "% ").concat(x, "%"),
                            backgroundImage: "url(".concat(g, ")"),
                            height: "number" == typeof y ? "".concat(y, "px") : y,
                            width: "number" == typeof E ? "".concat(E, "px") : E
                        };
                        return "object" === a()(c) && s()(c) && Object.keys(c).forEach(function (t) {
                            if ("base" !== t) {
                                var r = f[t](e);
                                if (c[t]) {
                                    n[r] = n[r] || {};
                                    var o = c[t];
                                    n[r].width = "number" == typeof o ? "".concat(o, "px") : o
                                }
                            }
                        }), "object" === a()(u) && s()(u) && Object.keys(u).forEach(function (t) {
                            if ("base" !== t) {
                                var r = f[t](e);
                                if (u[t]) {
                                    n[r] = n[r] || {};
                                    var o = u[t];
                                    n[r].height = "number" == typeof o ? "".concat(o, "px") : o
                                }
                            }
                        }), n
                    };
                return l.createElement(m.L, null, function (e) {
                    return l.createElement(m.f, {
                        href: Object(h.V)(n),
                        className: e([b, j])
                    })
                })
            };
            var v = d()(g())
        },
        "./src/components/post/helpers/loggedOutHistory.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return h
            }), t.d(n, "a", function () {
                return g
            }), t.d(n, "c", function () {
                return b
            });
            var r, o, i = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = t.n(i),
                c = t("./src/util/LocalStorage.js"),
                s = "post-view",
                l = "post-read",
                u = "topic-view",
                d = "medium-search",
                m = "external-search",
                f = (r = {}, a()(r, s, 200), a()(r, l, 200), a()(r, u, 200), a()(r, d, 200), a()(r, m, 200), r),
                p = (o = {}, a()(o, s, new c.a("pv")), a()(o, l, new c.a("pr")), a()(o, u, new c.a("tv")), a()(o, d, new c.a("ms")), a()(o, m, new c.a("es")), o),
                h = function (e) {
                    v(s, e, Date.now())
                },
                g = function (e) {
                    v(l, e, Date.now())
                },
                b = function (e) {
                    v(u, e, Date.now())
                },
                v = function (e, n, t) {
                    var r = p[e];
                    r.getCount() === f[e] && r.clean();
                    try {
                        r.set(n, t)
                    } catch (e) {
                        r.clean()
                    }
                }
        },
        "./src/components/privacy/EuPrivacyBannerLoader.js": function (e, n, t) {
            "use strict";
            t.d(n, "c", function () {
                return c
            }), t.d(n, "a", function () {
                return s
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./node_modules/react-redux/es/index.js"),
                i = t("./src/store/actions/navigation.js"),
                a = t("./src/util/LocalStorage.js"),
                c = "accepted",
                s = new a.a("201805-policy");
            n.b = Object(o.b)(function (e) {
                return {
                    isEu: e.client.isEu
                }
            })(function (e) {
                var n = e.dispatch,
                    t = e.isEu,
                    o = e.loggedIn,
                    a = t && !s.get(c) && !o;
                return r.useEffect(function () {
                    a && n(Object(i.j)({
                        duration: "FOREVER",
                        message: "",
                        toastStyle: "EU_PRIVACY_BANNER"
                    }))
                }, []), null
            })
        },
        "./src/components/session/RequireFlag.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/components/session/WithFlag.jsx");

            function i(e) {
                var n = e.name,
                    t = e.children,
                    i = e.requiredValue,
                    a = void 0 === i || i;
                return r.createElement(o.a, {
                    name: n
                }, function (e) {
                    return e === a ? t : null
                })
            }
        },
        "./src/components/session/WithFlag.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-apollo/react-apollo.esm.js"),
                c = t("./node_modules/graphql-tag/src/index.js");

            function s() {
                var e = o()(["\n  query WithFlagQuery {\n    variantFlags {\n      name\n      valueType {\n        __typename\n        ... on VariantFlagBoolean {\n          booleanValue: value\n        }\n        ... on VariantFlagString {\n          stringValue: value\n        }\n      }\n    }\n  }\n"]);
                return s = function () {
                    return e
                }, e
            }
            var l = t.n(c)()(s());

            function u(e) {
                var n = e.name,
                    t = e.children,
                    r = e.nonBlocking,
                    o = void 0 !== r && r;
                return i.createElement(a.c, {
                    query: l
                }, function (e) {
                    var r = e.data,
                        i = (r = void 0 === r ? {} : r).variantFlags,
                        a = void 0 === i ? [] : i,
                        c = e.loading,
                        s = e.error;
                    if (c || s) return o ? t(null) : null;
                    var l = a.find(function (e) {
                            return e.name === n
                        }),
                        u = null;
                    return l && "VariantFlagBoolean" === l.valueType.__typename && void 0 !== l.valueType.booleanValue ? u = l.valueType.booleanValue : l && "VariantFlagString" === l.valueType.__typename && void 0 !== l.valueType.stringValue && (u = l.valueType.stringValue), t(u)
                })
            }
        },
        "./src/components/session/WithViewer.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-apollo/react-apollo.esm.js"),
                c = t("./node_modules/graphql-tag/src/index.js");

            function s() {
                var e = o()(["\n  query WithViewerQuery {\n    viewer {\n      id\n      username\n      name\n      imageId\n      mediumMemberAt\n      hasPastMemberships\n      isPartnerProgramEnrolled\n      email\n      unverifiedEmail\n      twitterScreenName\n    }\n  }\n"]);
                return s = function () {
                    return e
                }, e
            }
            var l = t.n(c)()(s());

            function u(e) {
                var n = e.children,
                    t = e.nonBlocking;
                return i.createElement(a.c, {
                    query: l
                }, function (e) {
                    var r = e.loading,
                        o = e.error,
                        i = e.data;
                    if (t && (o || r)) return n(null);
                    if (r) return null;
                    if (i) return n(i.viewer);
                    throw new Error(o)
                })
            }
        },
        "./src/components/style/BaseThemeProvider.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/styles/theme.js"),
                c = t("./src/framework/design-system/components/index.js"),
                s = t("./src/components/session/WithFlag.jsx"),
                l = o()({}, a.a, {
                    grid: o()({}, a.a.grid, {
                        gutterSteps: {
                            xs: 6,
                            sm: 6,
                            md: 7,
                            lg: 8,
                            xl: 8
                        },
                        marginSteps: {
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 16,
                            xl: 16
                        },
                        xlMaxContentWidth: 1320
                    })
                }),
                u = function (e) {
                    var n = e.children;
                    return i.createElement(s.a, {
                        name: "enable_different_grid",
                        nonBlocking: !0
                    }, function (e) {
                        var t = e ? l : a.a;
                        return i.createElement(c.H, {
                            theme: t
                        }, n)
                    })
                }
        },
        "./src/components/style/RendererContext.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            });
            var r = t("./node_modules/react/index.js"),
                o = r.createContext()
        },
        "./src/components/style/useRenderer.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/components/style/RendererContext.js"),
                i = function () {
                    return r.useContext(o.a)
                }
        },
        "./src/components/susi/SusiClickable.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return w
            }), t.d(n, "b", function () {
                return k
            }), t.d(n, "c", function () {
                return S
            }), t.d(n, "d", function () {
                return C
            }), t.d(n, "e", function () {
                return O
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/extends.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t("./node_modules/react-redux/es/index.js"),
                l = t("./node_modules/graphql-tag/src/index.js"),
                u = t.n(l),
                d = t("./node_modules/react-apollo/react-apollo.esm.js"),
                m = t("./src/components/susi/susi-modal/SusiContainer.jsx"),
                f = t("./src/framework/design-system/components/index.js"),
                p = t("./src/framework/source/index.js"),
                h = t("./src/util/navigation.js"),
                g = t("./src/util/routes.js");

            function b() {
                var e = o()(["\n  query SusiClickableAccountTokenQuery {\n    ...SusiContainer_query\n  }\n  ", "\n"]);
                return b = function () {
                    return e
                }, e
            }

            function v() {
                var e = o()(["\n  query SusiClickableAccountTokenInlineQuery {\n    accountToken\n  }\n"]);
                return v = function () {
                    return e
                }, e
            }

            function x() {
                var e = o()(["\n  fragment SusiClickable_user on User {\n    ...SusiContainer_user\n  }\n  ", "\n"]);
                return x = function () {
                    return e
                }, e
            }

            function E() {
                var e = o()(["\n  fragment SusiClickable_topic on Topic {\n    ...SusiContainer_topic\n  }\n  ", "\n"]);
                return E = function () {
                    return e
                }, e
            }

            function y() {
                var e = o()(["\n  fragment SusiClickable_post on Post {\n    ...SusiContainer_post\n  }\n  ", "\n"]);
                return y = function () {
                    return e
                }, e
            }

            function j() {
                var e = o()(["\n  fragment SusiClickable_collection on Collection {\n    ...SusiContainer_collection\n  }\n  ", "\n"]);
                return j = function () {
                    return e
                }, e
            }
            var _ = function (e) {
                    e.actionUrl;
                    var n = e.authDomain,
                        t = e.buttonSize,
                        r = e.children,
                        o = e.currentLocation,
                        i = e.isButton,
                        a = e.isObvious,
                        s = e.operation,
                        l = e.show,
                        u = a ? "OBVIOUS" : "SUBTLE",
                        d = "login" === s ? Object(h.a)(Object(g.db)(n), {
                            redirect: o
                        }) : Object(h.a)(Object(g.fb)(n), {
                            redirect: o
                        }),
                        m = function (e) {
                            e.preventDefault(), l()
                        };
                    return i ? c.createElement(f.c, {
                        onClick: m,
                        buttonStyle: u,
                        size: t
                    }, r) : c.createElement(f.v, {
                        href: d,
                        onClick: function (e) {
                            e.metaKey || e.ctrlKey || m(e)
                        },
                        linkStyle: u,
                        inline: !1
                    }, r)
                },
                w = Object(s.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.actionUrl,
                        t = e.authDomain,
                        r = e.buttonSize,
                        o = e.children,
                        i = e.collection,
                        s = e.currentLocation,
                        l = e.isButton,
                        u = e.isObvious,
                        h = e.operation,
                        g = e.post,
                        b = e.susiEntry,
                        v = e.topic,
                        x = e.user,
                        E = Object(p.f)();
                    void 0 === b && (b = E || void 0);
                    var y = {
                        actionUrl: n,
                        authDomain: t,
                        buttonSize: r,
                        children: o,
                        currentLocation: s,
                        isButton: l,
                        isObvious: u,
                        operation: h
                    };
                    return c.createElement(p.b, {
                        source: {
                            susiEntry: b
                        },
                        extendSource: !0
                    }, c.createElement(f.K, null, function (e) {
                        var t = e.isVisible,
                            r = (e.toggle, e.hide),
                            o = e.show;
                        return c.createElement(c.Fragment, null, c.createElement(d.c, {
                            query: I,
                            skip: !n || !t,
                            fetchPolicy: "no-cache"
                        }, function (e) {
                            e.loading, e.error;
                            var o = e.data,
                                a = o && o.accountToken;
                            return c.createElement(m.a, {
                                actionUrl: n,
                                collection: i,
                                hide: r,
                                initOperation: h,
                                isVisible: t,
                                post: g,
                                topic: v,
                                user: x,
                                token: a
                            })
                        }), c.createElement(_, a()({
                            show: o
                        }, y)))
                    }))
                }),
                k = u()(j(), m.b),
                S = u()(y(), m.c),
                C = u()(E(), m.e),
                O = u()(x(), m.f),
                I = u()(v());
            u()(b(), m.d)
        },
        "./src/components/susi/helpers/index.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return c
            }), t.d(n, "a", function () {
                return s
            });
            var r = t("./src/screens/helpers/visits.js"),
                o = t("./src/util/navigation.js"),
                i = function (e) {
                    switch (e) {
                        case "bookmark":
                            return function () {
                                return {
                                    subheader: "Sign in to save stories to your personalized bookmarks and access them anytime, anywhere."
                                }
                            };
                        case "clap":
                            return function (e) {
                                var n = e.user,
                                    t = void 0 === n ? "" : n;
                                return {
                                    subheader: t ? "Sign in to clap for this story and show ".concat(t, " how much you appreciated it.") : "Sign in to clap for this story"
                                }
                            };
                        case "follow":
                            return function (e) {
                                var n = e.user,
                                    t = void 0 === n ? "" : n,
                                    r = e.topic,
                                    o = void 0 === r ? "" : r;
                                return {
                                    subheader: "Sign in to follow" + (t ? " ".concat(t) : o ? " ".concat(o) : "") + "."
                                }
                            };
                        case "follow_co_brand":
                            return function (e) {
                                var n = e.collection,
                                    t = void 0 === n ? "" : n,
                                    r = e.productName;
                                return {
                                    subheader: "Sign in to follow ".concat(t, "."),
                                    poweredBy: "".concat(t, " is powered by ").concat(r, ".")
                                }
                            };
                        case "highlight":
                            return function () {
                                return {
                                    subheader: "Sign in to highlight this passage and show the author it resonates with you."
                                }
                            };
                        case "read_exclusive":
                            return function (e) {
                                var n = e.productName;
                                return {
                                    subheader: "Sign in to read this story and get personalized recommendations from ".concat(n, ".")
                                }
                            };
                        case "respond":
                            return function () {
                                return {
                                    subheader: "Sign in to keep the conversation moving with a response."
                                }
                            };
                        case "check_your_inbox":
                            return function (e) {
                                var n = e.email,
                                    t = void 0 === n ? "" : n;
                                return {
                                    title: "Check your inbox",
                                    subheader: t ? "We just emailed a magic link to ".concat(t, ". Click the link to sign in.") : "We just emailed a magic link. Click the link to sign in."
                                }
                            };
                        case "post_prompt":
                        case "smart_meter_2":
                        case "smart_meter_3":
                        default:
                            return function () {
                                return {
                                    subheader: "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories."
                                }
                            }
                    }
                },
                a = function (e) {
                    switch (e) {
                        case "bookmark":
                            return function () {
                                return {
                                    title: "Create an account to bookmark this story.",
                                    subheader: "Save stories to your personalized bookmarks and access them anytime, anywhere."
                                }
                            };
                        case "clap":
                            return function (e) {
                                var n = e.user,
                                    t = void 0 === n ? "" : n;
                                return {
                                    title: "Create an account to clap for this story.",
                                    subheader: "Applause shows ".concat(t ? t + " " : "", "how much you appreciated this story.")
                                }
                            };
                        case "follow":
                            return function (e) {
                                var n = e.user,
                                    t = void 0 === n ? "" : n,
                                    r = e.productName,
                                    o = e.topic,
                                    i = void 0 === o ? "" : o;
                                return {
                                    title: "Never miss a story" + (t ? " from ".concat(t) : i ? " about ".concat(i) : "") + ".",
                                    subheader: "Create a ".concat(r, " account to follow your favorite authors, publications, and topics.")
                                }
                            };
                        case "follow_co_brand":
                            return function (e) {
                                var n = e.user,
                                    t = void 0 === n ? "" : n,
                                    r = e.collection,
                                    o = void 0 === r ? "" : r,
                                    i = e.productName,
                                    a = e.topic,
                                    c = void 0 === a ? "" : a;
                                return {
                                    title: "Never miss a story" + (t ? " from ".concat(t) : c ? " about ".concat(c) : "") + ".",
                                    subheader: "Create an account to follow your favorite authors, publications, and topics.",
                                    poweredBy: "".concat(o, " is powered by ").concat(i, ".")
                                }
                            };
                        case "highlight":
                            return function (e) {
                                var n = e.productName;
                                return {
                                    title: "Create an account to highlight this passage.",
                                    subheader: "Highlighting on ".concat(n, " shows the author and readers which ideas resonate with you.")
                                }
                            };
                        case "read_exclusive":
                            return function (e) {
                                var n = e.productName;
                                return {
                                    title: "Create an account to read this story.",
                                    subheader: "Signing up for ".concat(n, " is quick, easy, and free.")
                                }
                            };
                        case "respond":
                            return function () {
                                return {
                                    title: "Create an account to write a response.",
                                    subheader: "Build on this story’s ideas with your own – responses keep the conversation moving."
                                }
                            };
                        case "post_prompt":
                            return function (e) {
                                var n = e.productName,
                                    t = e.readCount,
                                    o = void 0 === t ? Object(r.c)() || 0 : t;
                                return {
                                    title: "Pardon the interruption.",
                                    subheader: o < 3 ? "We see you’ve read on ".concat(n, " before - there’s a personalized experience waiting just a few clicks away. Ready to make ").concat(n, " yours?") : "You’ve read ".concat(o, " stories this month. There’s a lot more where that came from. Ready to make ").concat(n, " yours?")
                                }
                            };
                        case "smart_meter_2":
                            return function (e) {
                                var n = e.productName;
                                return {
                                    title: "Extend your stay.",
                                    subheader: "Sign up for a free ".concat(n, " account, and you’ll get one more story in your member preview this month.")
                                }
                            };
                        case "smart_meter_3":
                            return function (e) {
                                var n = e.productName;
                                return {
                                    title: "Read to your mind’s desire.",
                                    subheader: "Sign up for a free ".concat(n, " account, and you’ll get one more story in your member preview this month.")
                                }
                            };
                        default:
                            return function (e) {
                                var n = e.productName;
                                return {
                                    title: "Join ".concat(void 0 === n ? "" : n, "."),
                                    subheader: "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love."
                                }
                            }
                    }
                },
                c = function (e, n, t, r) {
                    var o = function (e, n) {
                        switch (e) {
                            case "check_your_inbox":
                                return "check_your_inbox";
                            case "bookmark_footer":
                            case "bookmark_preview":
                            case "bookmark_sidebar":
                                return "bookmark";
                            case "clap_footer":
                            case "clap_preview":
                            case "clap_sidebar":
                                return "clap";
                            case "email_homepage":
                                return "direct_email_signup";
                            case "follow_custom_page":
                            case "follow_pub":
                            case "follow_sidebar":
                            case "follow_header":
                                return "follow_co_brand";
                            case "follow_byline":
                            case "follow_profile":
                            case "follow_list":
                            case "follow_topicgrid":
                            case "follow_topicpage":
                            case "follow_tag":
                                return "follow";
                            case "follow_card":
                            case "follow_footer":
                            case "follow_search":
                            case "follow_topicfeatured":
                                return n && n.collection ? "follow_co_brand" : "follow";
                            case "highlight_sidebar":
                            case "highlight_text":
                                return "highlight";
                            case "landing_benefits":
                                return "subscribe";
                            case "landing_creater":
                                return "writer";
                            case "landing_gift":
                                return "gift";
                            case "metered_view_2":
                                return "smart_meter_2";
                            case "metered_view_3":
                                return "smart_meter_3";
                            case "post_custom_domain":
                            case "post_free":
                                return "post_prompt";
                            case "post_paywall":
                            case "post_regwall":
                                return "read_exclusive";
                            case "privatenote_text":
                            case "respond_text":
                            case "respond_box":
                                return "respond";
                            case "homepage_banner":
                            case "nav_reg":
                            case "report_footer":
                            case "smart_meter":
                            default:
                                return "general"
                        }
                    }(n, t);
                    return ("login" === e ? i : a)(o)(t, r)
                },
                s = function (e, n, t, r) {
                    var i = Object(o.a)(e, {
                            source: n
                        }),
                        a = t && r ? Object(o.a)(t, {
                            token: r
                        }) : "";
                    return a ? Object(o.a)(a, {
                        redirectUrl: i
                    }) : i
                }
        },
        "./src/components/susi/oauth-buttons/FacebookSusiButton.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/extends.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = t.n(l),
                d = t("./node_modules/graphql-tag/src/index.js"),
                m = t.n(d),
                f = t("./node_modules/react-redux/es/index.js"),
                p = t("./src/components/susi/oauth-buttons/OAuthButton.jsx");

            function h() {
                return (h = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var g = u.a.createElement("path", {
                    d: "M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7",
                    fillRule: "evenodd"
                }),
                b = function (e) {
                    return u.a.createElement("svg", h({
                        width: 25,
                        height: 25,
                        fill: "#3B5998"
                    }, e), g)
                },
                v = t("./src/util/routes.js");

            function x() {
                var e = o()(["\n  fragment FacebookSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return x = function () {
                    return e
                }, e
            }
            t.d(n, "b", function () {
                return E
            }), t.d(n, "a", function () {
                return y
            });
            var E = m()(x(), p.b),
                y = Object(f.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = s()(e, ["authDomain"]);
                    return l.createElement(p.a, a()({}, t, {
                        icon: b,
                        service: "Facebook",
                        urlFragment: Object(v.hb)(n)
                    }))
                })
        },
        "./src/components/susi/oauth-buttons/GoogleSusiButton.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/extends.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = t.n(l),
                d = t("./node_modules/graphql-tag/src/index.js"),
                m = t.n(d),
                f = t("./node_modules/react-redux/es/index.js"),
                p = t("./src/components/susi/oauth-buttons/OAuthButton.jsx");

            function h() {
                return (h = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var g = u.a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u.a.createElement("path", {
                    d: "M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z",
                    fill: "#4285F4"
                }), u.a.createElement("path", {
                    d: "M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z",
                    fill: "#34A853"
                }), u.a.createElement("path", {
                    d: "M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z",
                    fill: "#FBBC05"
                }), u.a.createElement("path", {
                    d: "M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z",
                    fill: "#EA4335"
                })),
                b = function (e) {
                    return u.a.createElement("svg", h({
                        width: 25,
                        height: 25
                    }, e), g)
                },
                v = t("./src/util/routes.js");

            function x() {
                var e = o()(["\n  fragment GoogleSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return x = function () {
                    return e
                }, e
            }
            t.d(n, "b", function () {
                return E
            }), t.d(n, "a", function () {
                return y
            });
            var E = m()(x(), p.b),
                y = Object(f.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = s()(e, ["authDomain"]);
                    return l.createElement(p.a, a()({}, t, {
                        icon: b,
                        service: "Google",
                        urlFragment: Object(v.ib)(n)
                    }))
                })
        },
        "./src/components/susi/oauth-buttons/OAuthButton.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return h
            }), t.d(n, "b", function () {
                return g
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-redux/es/index.js"),
                c = t("./node_modules/graphql-tag/src/index.js"),
                s = t.n(c),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/source/index.js"),
                d = t("./src/framework/reporter/index.js"),
                m = t("./src/util/navigation.js"),
                f = t("./src/components/susi/helpers/index.js");

            function p() {
                var e = o()(["\n  fragment OAuthButton_query on Query {\n    accountToken\n  }\n"]);
                return p = function () {
                    return e
                }, e
            }
            var h = Object(a.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.actionUrl,
                        t = e.currentLocation,
                        r = e.icon,
                        o = e.redirectTo,
                        a = e.operation,
                        c = e.token,
                        s = e.service,
                        p = e.urlFragment,
                        h = e.width,
                        g = void 0 === h ? "212px" : h,
                        b = Object(d.c)(),
                        v = Object(u.f)(),
                        x = o || t,
                        E = {
                            state: ["", Object(f.a)(x, Object(u.c)(), n, c), a].join("|")
                        },
                        y = Object(m.a)(p, E),
                        j = r;
                    return i.createElement(l.c, {
                        buttonStyle: "SOCIAL",
                        href: y,
                        onClick: function () {
                            b.event("susi.methodClicked", {
                                entryPoint: v,
                                operation: a,
                                susiMethod: s.toLowerCase()
                            })
                        },
                        shape: "RECTANGLE",
                        size: "REGULAR",
                        width: g
                    }, i.createElement(l.b, {
                        display: "flex",
                        alignItems: "center"
                    }, i.createElement(l.b, {
                        marginRight: "8px",
                        marginTop: "-2px",
                        tag: j
                    }), "Sign ", "login" === a ? "in" : "up", " with ", s))
                }),
                g = s()(p())
        },
        "./src/components/susi/susi-modal/SusiContainer.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t.n(c),
                l = t("./node_modules/react-redux/es/index.js"),
                u = t("./node_modules/graphql-tag/src/index.js"),
                d = t.n(u),
                m = t("./src/framework/design-system/components/index.js"),
                f = t("./src/components/style/BaseThemeProvider.js"),
                p = t("./src/framework/reporter/index.js"),
                h = t("./src/styles/colors.js"),
                g = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                b = t.n(g),
                v = t("./src/components/susi/helpers/index.js"),
                x = t("./src/components/susi/susi-modal/SusiPanel.jsx"),
                E = {
                    bottomImageId: "1*yL5Sos_AmbQS9uHTd8PJVA.png",
                    ctaText: "Sign Up",
                    generator: function () {
                        return {
                            title: "Create an account to bookmark this story.",
                            subheader: "Save stories to your personalized bookmarks and access them anytime, anywhere."
                        }
                    },
                    hideDisclaimer: !0,
                    isSubHeaderResponsive: !1
                };

            function y(e) {
                var n = e.hide,
                    t = e.email,
                    r = Object(v.b)("login", "check_your_inbox", {
                        email: t
                    }, {}),
                    o = b()({}, E, r);
                return c.createElement(x.a, o, c.createElement(m.b, {
                    marginTop: "12px",
                    marginBottom: "28px"
                }, c.createElement(m.c, {
                    buttonStyle: "BRAND",
                    onClick: n
                }, "OK")))
            }
            var j = t("./src/components/session/WithFlag.jsx"),
                _ = t("./src/components/susi/oauth-buttons/FacebookSusiButton.jsx"),
                w = t("./src/components/susi/oauth-buttons/GoogleSusiButton.jsx"),
                k = t("./node_modules/@babel/runtime/helpers/extends.js"),
                S = t.n(k),
                C = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                O = t.n(C),
                I = t("./src/components/susi/oauth-buttons/OAuthButton.jsx"),
                A = t("./src/svg/twitter-filled-25px.svg"),
                L = t("./src/util/routes.js");

            function N() {
                var e = o()(["\n  fragment TwitterSusiButton_query on Query {\n    ...OAuthButton_query\n  }\n  ", "\n"]);
                return N = function () {
                    return e
                }, e
            }
            var T = {
                    fill: "#55ACEE"
                },
                P = function (e) {
                    var n = e.className;
                    return c.createElement(m.L, null, function (e) {
                        return c.createElement(A.a, {
                            className: e(T) + (n ? " " + n : "")
                        })
                    })
                },
                R = d()(N(), I.b),
                U = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = O()(e, ["authDomain"]);
                    return c.createElement(I.a, S()({}, t, {
                        icon: P,
                        service: "Twitter",
                        urlFragment: Object(L.jb)(n)
                    }))
                }),
                M = t("./src/framework/source/index.js"),
                B = t("./src/framework/design-system/type/index.js");

            function D() {
                return (D = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var H = s.a.createElement("path", {
                    d: "M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"
                }),
                F = function (e) {
                    return s.a.createElement("svg", D({
                        width: 25,
                        height: 25
                    }, e), H)
                },
                z = t("./src/util/navigation.js");

            function V() {
                var e = o()(["\n  fragment SignInOptions_query on Query {\n    ...FacebookSusiButton_query\n    ...GoogleSusiButton_query\n    ...TwitterSusiButton_query\n    ...EmailSusiButton_query\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return V = function () {
                    return e
                }, e
            }

            function q() {
                var e = o()(["\n  fragment EmailSusiButton_query on Query {\n    accountToken\n  }\n"]);
                return q = function () {
                    return e
                }, e
            }

            function W() {
                var e = o()(["\n  fragment SignInOptions_user on User {\n    id\n    name\n  }\n"]);
                return W = function () {
                    return e
                }, e
            }

            function G() {
                var e = o()(["\n  fragment SignInOptions_topic on Topic {\n    id\n    name\n  }\n"]);
                return G = function () {
                    return e
                }, e
            }

            function Y() {
                var e = o()(["\n  fragment SignInOptions_collection on Collection {\n    id\n    name\n  }\n"]);
                return Y = function () {
                    return e
                }, e
            }
            var K = Object(l.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.actionUrl,
                        t = e.authDomain,
                        r = e.currentLocation,
                        o = e.signInWithEmail,
                        i = e.token,
                        a = Object(p.c)(),
                        s = Object(M.f)(),
                        l = function () {
                            a.event("susi.methodClicked", {
                                entryPoint: s,
                                operation: "login",
                                susiMethod: "medium"
                            })
                        },
                        u = Object(v.a)(r, Object(M.c)(), n, i);
                    return c.createElement(j.a, {
                        name: "enable_lite_email_sign_in_flow"
                    }, function (e) {
                        return e ? c.createElement(m.c, {
                            buttonStyle: "SOCIAL",
                            href: "",
                            onClick: function () {
                                l(), o()
                            },
                            size: "REGULAR",
                            shape: "RECTANGLE",
                            width: "212px"
                        }, c.createElement(m.b, {
                            display: "flex",
                            alignItems: "center"
                        }, c.createElement(m.b, {
                            marginRight: "8px",
                            marginTop: "-2px",
                            tag: F
                        }), "Sign in with email")) : c.createElement(m.c, {
                            buttonStyle: "SOCIAL",
                            href: Object(z.a)(Object(L.db)(t), {
                                redirect: u,
                                type: "medium",
                                operation: "login"
                            }),
                            onClick: l,
                            size: "REGULAR",
                            shape: "RECTANGLE",
                            width: "212px"
                        }, c.createElement(m.b, {
                            display: "flex",
                            alignItems: "center"
                        }, c.createElement(m.b, {
                            marginRight: "8px",
                            marginTop: "-2px",
                            tag: F
                        }), "Sign in with email"))
                    })
                }),
                X = Object(l.b)(function (e) {
                    return {
                        productName: e.config.productName
                    }
                })(function (e) {
                    var n = e.actionUrl,
                        t = e.collection,
                        r = e.productName,
                        o = e.signInWithEmail,
                        i = e.toggleOperation,
                        a = e.token,
                        s = e.topic,
                        l = e.user,
                        u = {
                            actionUrl: n,
                            operation: "login",
                            token: a
                        },
                        d = t && t.name || "",
                        f = s && s.name || "",
                        p = l && l.name || "",
                        h = $(Object(M.f)(), {
                            collection: d,
                            productName: r,
                            topic: f,
                            user: p
                        }, {});
                    return c.createElement(x.a, h, c.createElement(w.a, u), c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "12px"
                    }, c.createElement(_.a, u)), c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "12px"
                    }, c.createElement(U, u)), c.createElement(m.b, {
                        marginBottom: "12px"
                    }, c.createElement(K, {
                        signInWithEmail: o
                    })), c.createElement(m.b, {
                        marginBottom: "28px"
                    }, c.createElement(B.a, {
                        color: "LIGHTER",
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "M",
                            lg: "L",
                            xl: "L"
                        }
                    }, "No account?", " ", c.createElement(m.v, {
                        onClick: i,
                        linkStyle: "OBVIOUS"
                    }, "Create one"))))
                }),
                Q = {
                    ctaText: "Sign In",
                    leftImageId: "1*4A5l12K8ize1400kV83dPw.png",
                    rightImageId: "1*XVLaTKHOGlnXqvnPe2Ahaw.png",
                    title: "Welcome back."
                },
                $ = function (e, n, t) {
                    var r = Object(v.b)("login", e, n, t);
                    return Object.assign({}, Q, r)
                },
                J = d()(Y()),
                Z = d()(G()),
                ee = d()(W()),
                ne = d()(q()),
                te = d()(V(), _.b, w.b, R, ne),
                re = t("./node_modules/react-apollo/react-apollo.esm.js"),
                oe = t("./src/util/hooks/useScript.js"),
                ie = "https://www.google.com/recaptcha/a                                                                                                                                                                                                                                                                                                                                                                                                                pi.js";
            var ae = Object(l.b)(function (e) {
                return {
                    recaptchaKey: e.config.recaptchaKey
                }
            })(function (e) {
                var n = e.callback,
                    t = e.enableLiteGoogleCaptcha,
                    r = e.recaptchaKey,
                    o = e.shouldExecuteRecaptcha;
                return Object(oe.a)(ie), c.useEffect(function () {
                    o && (t ? window && window.grecaptcha && (window.grecaptcha.render("g-recaptcha", {
                        sitekey: r,
                        callback: n,
                        size: "invisible"
                    }), window.grecaptcha.execute()) : n())
                }, [o]), c.createElement("div", {
                    id: "g-recaptcha"
                })
            });
            var ce = function (e) {
                return c.createElement(j.a, {
                    name: "enable_lite_google_captcha"
                }, function (n) {
                    return c.createElement(ae, S()({
                        enableLiteGoogleCaptcha: !!n
                    }, e))
                })
            };

            function se() {
                return (se = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var le = s.a.createElement("path", {
                    d: "M13.3 13.9l.14-7.08h-1.78l.15 7.08h1.48zm-.74 1.43c-.68 0-1.13.44-1.13 1.12 0 .67.45 1.12 1.13 1.12.68 0 1.13-.45 1.13-1.12 0-.68-.44-1.12-1.12-1.12"
                }),
                ue = s.a.createElement("path", {
                    d: "M12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"
                }),
                de = function (e) {
                    return s.a.createElement("svg", se({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 25 25"
                    }, e), le, ue)
                },
                me = function (e) {
                    return {
                        color: e.errorColor
                    }
                },
                fe = {
                    border: "none",
                    outline: "none",
                    width: "270px",
                    font: "inherit",
                    paddingLeft: "5px",
                    paddingRight: "5px"
                },
                pe = function (e) {
                    return {
                        position: "absolute",
                        right: "0px",
                        top: "7px",
                        width: "16px",
                        height: "16px",
                        fill: e.errorColor
                    }
                },
                he = function () {
                    return {
                        "0%": {
                            transform: "translateX(-1%)"
                        },
                        "20%": {
                            transform: "translateX(1%)"
                        },
                        "40%": {
                            transform: "translateX(-1%)"
                        },
                        "60%": {
                            transform: "translateX(1%)"
                        },
                        "80%": {
                            transform: "translateX(-1%)"
                        },
                        "100%": {
                            transform: "translateX(1%)"
                        }
                    }
                },
                ge = Object(l.b)()(function (e) {
                    var n, t = e.email,
                        r = e.errorMessage,
                        o = e.handleEmailChange,
                        i = e.handleSubmit,
                        s = e.isAnimating,
                        l = c.useState(!1),
                        u = a()(l, 2),
                        d = u[0],
                        f = u[1],
                        p = c.useState(!1),
                        h = a()(p, 2),
                        g = h[0],
                        b = h[1];
                    return n = r ? "ERROR" : d ? "BASE_DARKER" : g ? "BASE_DARK" : "BASE_NORMAL", c.createElement(m.L, null, function (e) {
                        return c.createElement("div", {
                            className: r && e(me)
                        }, c.createElement(m.b, {
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            paddingBottom: "1px",
                            width: "270px",
                            textAlign: "center"
                        }, c.createElement(m.b, {
                            marginBottom: "12px"
                        }, c.createElement(B.a, {
                            color: "DARKER",
                            scale: "S"
                        }, c.createElement("div", {
                            className: r && e(me)
                        }, "Your email"))), c.createElement(m.M, {
                            keyframes: {
                                errorKeyName: he
                            }
                        }, function (a) {
                            var l, u = a.errorKeyName;
                            return c.createElement("div", {
                                className: e([{
                                    position: "relative"
                                }, s ? (l = u, {
                                    animation: "".concat(l, " ").concat(400, "ms")
                                }) : {}])
                            }, c.createElement(m.b, {
                                borderBottom: n
                            }, c.createElement(B.a, {
                                scale: "L"
                            }, c.createElement("input", {
                                autoFocus: !0,
                                className: e([fe]),
                                type: "text",
                                onBlur: function () {
                                    return f(!1)
                                },
                                onFocus: function () {
                                    return f(!0)
                                },
                                onMouseOver: function () {
                                    return b(!0)
                                },
                                onMouseLeave: function () {
                                    return b(!1)
                                },
                                onChange: o,
                                onKeyDown: function (e) {
                                    13 === e.keyCode && i()
                                },
                                value: t
                            }), r && c.createElement(de, {
                                className: e(pe)
                            }))))
                        })), r && c.createElement(m.b, {
                            marginTop: "8px"
                        }, c.createElement(B.a, {
                            scale: "S"
                        }, c.createElement("div", {
                            className: e(me)
                        }, r))))
                    })
                }),
                be = t("./src/svg/arrow-left-19px.svg"),
                ve = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            function xe() {
                var e = o()(["\n  mutation SendAcctAuthEmail(\n    $email: String!\n    $redirect: String\n    $fullName: String\n    $captchaValue: String\n  ) {\n    sendAcctAuthEmail(\n      email: $email\n      redirect: $redirect\n      fullName: $fullName\n      captchaValue: $captchaValue\n    )\n  }\n"]);
                return xe = function () {
                    return e
                }, e
            }
            var Ee = d()(xe()),
                ye = {
                    height: "25px",
                    width: "25px",
                    marginBottom: "2px"
                },
                je = Object(l.b)(function (e) {
                    return {
                        currentLocation: e.navigation.currentLocation
                    }
                })(function (e) {
                    var n = e.currentLocation,
                        t = e.handleBack,
                        r = e.handleNext,
                        o = c.useState(""),
                        i = a()(o, 2),
                        s = i[0],
                        l = i[1],
                        u = c.useState(""),
                        d = a()(u, 2),
                        f = d[0],
                        h = d[1],
                        g = c.useState(!1),
                        b = a()(g, 2),
                        v = b[0],
                        E = b[1],
                        y = c.useState(!1),
                        j = a()(y, 2),
                        _ = j[0],
                        w = j[1],
                        k = Object(p.c)(),
                        S = function (e) {
                            l(e.target.value)
                        },
                        C = function (e) {
                            h(e), E(!0), setTimeout(function () {
                                return E(!1)
                            }, 400), w(!1)
                        },
                        O = function () {
                            s.trim() && function (e) {
                                return !!e.match(ve)
                            }(s) ? w(!0) : C("Please enter a valid email address.")
                        };
                    return c.createElement(re.b, {
                        mutation: Ee,
                        onCompleted: function (e) {
                            var n = e.sendAcctAuthEmail;
                            "login" === n || "register" === n ? r(n, s) : C(n)
                        },
                        onError: function (e) {
                            k.event("site.loginlinkSent", {
                                error: e
                            }), C("Please try again.")
                        }
                    }, function (e) {
                        return c.createElement(x.a, {
                            hideDisclaimer: !0,
                            title: "Sign in with email",
                            subheader: "Enter the email address associated with your account, and we’ll send a magic link to your inbox."
                        }, c.createElement(ce, {
                            callback: function (t) {
                                k.event("site.loginlinkSent"), e({
                                    variables: {
                                        email: s,
                                        redirect: n,
                                        captchaValue: t
                                    }
                                })
                            },
                            shouldExecuteRecaptcha: _
                        }), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "28px"
                        }, c.createElement(ge, {
                            email: s,
                            errorMessage: f,
                            isAnimating: v,
                            handleEmailChange: S,
                            handleSubmit: O
                        })), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "28px"
                        }, c.createElement(m.c, {
                            buttonStyle: "BRAND",
                            onClick: O
                        }, "Continue")), c.createElement(m.b, {
                            marginTop: "12px",
                            marginBottom: "28px",
                            paddingRight: "21px"
                        }, c.createElement(B.a, {
                            scale: "M"
                        }, c.createElement(m.v, {
                            linkStyle: "OBVIOUS",
                            onClick: t
                        }, c.createElement(m.L, null, function (e) {
                            return c.createElement(be.a, {
                                className: e(ye)
                            })
                        }), "All sign in options"))))
                    })
                });

            function _e() {
                var e = o()(["\n  fragment SignInContainer_query on Query {\n    ...SignInOptions_query\n  }\n  ", "\n"]);
                return _e = function () {
                    return e
                }, e
            }

            function we() {
                var e = o()(["\n  fragment SignInContainer_user on User {\n    ...SignInOptions_user\n  }\n  ", "\n"]);
                return we = function () {
                    return e
                }, e
            }

            function ke() {
                var e = o()(["\n  fragment SignInContainer_topic on Topic {\n    ...SignInOptions_topic\n  }\n  ", "\n"]);
                return ke = function () {
                    return e
                }, e
            }

            function Se() {
                var e = o()(["\n  fragment SignInContainer_collection on Collection {\n    ...SignInOptions_collection\n  }\n  ", "\n"]);
                return Se = function () {
                    return e
                }, e
            }
            var Ce = function (e) {
                    var n = e.actionUrl,
                        t = e.collection,
                        r = e.hide,
                        o = e.initStep,
                        i = e.toggleOperation,
                        s = e.token,
                        l = e.topic,
                        u = e.user,
                        d = c.useState(o || "SIGNIN_OPTIONS"),
                        m = a()(d, 2),
                        f = m[0],
                        p = m[1],
                        h = c.useState(""),
                        g = a()(h, 2),
                        b = g[0],
                        v = g[1];
                    switch (f) {
                        case "ENTER_EMAIL":
                            return c.createElement(je, {
                                handleBack: function () {
                                    p("SIGNIN_OPTIONS")
                                },
                                handleNext: function (e, n) {
                                    p("CHECK_YOUR_INBOX"), v(n)
                                }
                            });
                        case "CHECK_YOUR_INBOX":
                            return c.createElement(y, {
                                hide: r,
                                email: b
                            });
                        case "SIGNIN_OPTIONS":
                        default:
                            return c.createElement(X, {
                                actionUrl: n,
                                collection: t,
                                toggleOperation: i,
                                signInWithEmail: function () {
                                    return p("ENTER_EMAIL")
                                },
                                token: s,
                                topic: l,
                                user: u
                            })
                    }
                },
                Oe = d()(Se(), J),
                Ie = d()(ke(), Z),
                Ae = d()(we(), ee),
                Le = d()(_e(), te);

            function Ne() {
                var e = o()(["\n  fragment SignUpOptions_query on Query {\n    ...FacebookSusiButton_query\n    ...GoogleSusiButton_query\n  }\n  ", "\n  ", "\n"]);
                return Ne = function () {
                    return e
                }, e
            }

            function Te() {
                var e = o()(["\n  fragment SignUpOptions_user on User {\n    id\n    name\n  }\n"]);
                return Te = function () {
                    return e
                }, e
            }

            function Pe() {
                var e = o()(["\n  fragment SignUpOptions_collection on Collection {\n    id\n    name\n  }\n"]);
                return Pe = function () {
                    return e
                }, e
            }

            function Re() {
                var e = o()(["\n  fragment SignUpOptions_topic on Topic {\n    id\n    name\n  }\n"]);
                return Re = function () {
                    return e
                }, e
            }
            var Ue = {
                    leftImageId: "1*MQH4A5bsyRz4AWh5V4IfvQ.png",
                    rightImageId: "1*lhbp8cxKdkDB-MgmwIPE5w.png",
                    ctaText: "Sign Up"
                },
                Me = Object(l.b)(function (e) {
                    return {
                        productName: e.config.productName
                    }
                })(function (e) {
                    var n, t, r, o, i = e.actionUrl,
                        a = e.collection,
                        s = e.productName,
                        l = e.toggleOperation,
                        u = e.token,
                        d = e.topic,
                        f = e.user,
                        p = {
                            actionUrl: i,
                            operation: "register",
                            token: u
                        },
                        h = a && a.name || "",
                        g = d && d.name || "",
                        E = f && f.name || "",
                        y = (n = Object(M.f)(), t = {
                            collection: h,
                            productName: s,
                            topic: g,
                            user: E
                        }, r = {}, o = Object(v.b)("register", n, t, r), b()({}, Ue, o));
                    return c.createElement(x.a, y, c.createElement(w.a, p), c.createElement(m.b, {
                        marginTop: "12px",
                        marginBottom: "28px"
                    }, c.createElement(_.a, p)), c.createElement(m.b, {
                        marginBottom: "56px"
                    }, c.createElement(B.a, {
                        color: "LIGHTER",
                        scale: {
                            xs: "M",
                            sm: "M",
                            md: "M",
                            lg: "L",
                            xl: "L"
                        }
                    }, "Already have an account?", " ", c.createElement(m.v, {
                        onClick: l,
                        linkStyle: "OBVIOUS"
                    }, "Sign in"))))
                }),
                Be = d()(Re()),
                De = d()(Pe()),
                He = d()(Te()),
                Fe = d()(Ne(), _.b, w.b),
                ze = t("./src/store/actions/branch.js"),
                Ve = t("./src/store/actions/googleOneTap.js");

            function qe() {
                var e = o()(["\n  fragment SusiContainer_query on Query {\n    ...SignInContainer_query\n    ...SignUpOptions_query\n  }\n  ", "\n  ", "\n"]);
                return qe = function () {
                    return e
                }, e
            }

            function We() {
                var e = o()(["\n  fragment SusiContainer_user on User {\n    ...SignInContainer_user\n    ...SignUpOptions_user\n  }\n  ", "\n  ", "\n"]);
                return We = function () {
                    return e
                }, e
            }

            function Ge() {
                var e = o()(["\n  fragment SusiContainer_topic on Topic {\n    ...SignInContainer_topic\n    ...SignUpOptions_topic\n  }\n  ", "\n  ", "\n"]);
                return Ge = function () {
                    return e
                }, e
            }

            function Ye() {
                var e = o()(["\n  fragment SusiContainer_post on Post {\n    id\n  }\n"]);
                return Ye = function () {
                    return e
                }, e
            }

            function Ke() {
                var e = o()(["\n  fragment SusiContainer_collection on Collection {\n    ...SignInContainer_collection\n    ...SignUpOptions_collection\n  }\n  ", "\n  ", "\n"]);
                return Ke = function () {
                    return e
                }, e
            }
            t.d(n, "a", function () {
                return Qe
            }), t.d(n, "b", function () {
                return $e
            }), t.d(n, "c", function () {
                return Je
            }), t.d(n, "e", function () {
                return Ze
            }), t.d(n, "f", function () {
                return en
            }), t.d(n, "d", function () {
                return nn
            });
            var Xe = {
                    hideBranchBanner: ze.d,
                    hideGoogleOneTap: Ve.b,
                    resetShowBranchBanner: ze.e
                },
                Qe = Object(l.b)(null, Xe)(function (e) {
                    var n = e.actionUrl,
                        t = e.collection,
                        r = e.hide,
                        o = e.initOperation,
                        i = e.initStep,
                        s = e.isVisible,
                        l = e.post,
                        u = e.token,
                        d = e.topic,
                        g = e.user,
                        b = e.hideBranchBanner,
                        v = e.hideGoogleOneTap,
                        x = e.resetShowBranchBanner,
                        E = Object(p.c)(),
                        y = Object(M.f)();
                    c.useEffect(function () {
                        s && (v(), b(), E.event("susi.viewed", {
                            postId: l && l.id,
                            entryPoint: y,
                            operation: o
                        }), "post_free" === y && E.event("signInWall.dialogViewed", {}))
                    }, [s]);
                    var j = c.useState(o),
                        _ = a()(j, 2),
                        w = _[0],
                        k = _[1],
                        S = function () {
                            k(o), r(), x()
                        },
                        C = "login" === w ? Ce : Me,
                        O = {
                            actionUrl: n,
                            collection: t,
                            toggleOperation: function () {
                                return k("login" === w ? "register" : "login")
                            },
                            hide: r,
                            token: u,
                            topic: d,
                            user: g,
                            initStep: i
                        };
                    return c.createElement(m.L, null, function (e) {
                        return c.createElement(f.a, null, c.createElement(m.j, {
                            isVisible: s,
                            hide: S,
                            withAnimation: !0,
                            withCloseButton: !1
                        }, c.createElement(m.b, {
                            background: h.w,
                            borderRadius: "4px",
                            boxShadow: "0 2px 10px ".concat(Object(h.r)(.15)),
                            height: "550px",
                            md: {
                                width: "600px",
                                height: "auto"
                            },
                            sm: {
                                width: "95vw !important"
                            },
                            position: "relative",
                            width: "900px"
                        }, c.createElement(m.g, {
                            onClick: S,
                            size: "LARGE"
                        }), c.createElement(C, O))))
                    })
                }),
                $e = d()(Ke(), Oe, De),
                Je = d()(Ye()),
                Ze = d()(Ge(), Ie, Be),
                en = d()(We(), Ae, He),
                nn = d()(qe(), Le, Fe)
        },
        "./src/components/susi/susi-modal/SusiModal.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return h
            }), t.d(n, "b", function () {
                return g
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./src/components/susi/susi-modal/SusiContainer.jsx"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/source/index.js");

            function d() {
                var e = o()(["\n  fragment SusiModal_user on User {\n    ...SusiContainer_user\n  }\n  ", "\n"]);
                return d = function () {
                    return e
                }, e
            }

            function m() {
                var e = o()(["\n  fragment SusiModal_topic on Topic {\n    ...SusiContainer_topic\n  }\n  ", "\n"]);
                return m = function () {
                    return e
                }, e
            }

            function f() {
                var e = o()(["\n  fragment SusiModal_post on Post {\n    ...SusiContainer_post\n  }\n  ", "\n"]);
                return f = function () {
                    return e
                }, e
            }

            function p() {
                var e = o()(["\n  fragment SusiModal_collection on Collection {\n    ...SusiContainer_collection\n  }\n  ", "\n"]);
                return p = function () {
                    return e
                }, e
            }
            var h = function (e) {
                    var n = e.collection,
                        t = e.initialVisibility,
                        r = e.operation,
                        o = e.post,
                        a = e.susiEntry,
                        c = e.topic,
                        d = e.user;
                    return i.createElement(u.b, {
                        source: {
                            susiEntry: a
                        },
                        extendSource: !0
                    }, i.createElement(l.K, {
                        initialVisibility: t
                    }, function (e) {
                        var t = e.isVisible,
                            a = (e.toggle, e.hide);
                        return i.createElement(s.a, {
                            collection: n,
                            hide: a,
                            initOperation: r,
                            isVisible: t,
                            post: o,
                            topic: c,
                            user: d
                        })
                    }))
                },
                g = (c()(p(), s.b), c()(f(), s.c));
            c()(m(), s.e), c()(d(), s.f)
        },
        "./src/components/susi/susi-modal/SusiPanel.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return d
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./node_modules/react-redux/es/index.js"),
                i = t("./src/components/ui/image/index.js"),
                a = t("./src/framework/design-system/components/index.js"),
                c = t("./src/framework/design-system/type/index.js"),
                s = t("./src/util/routes.js"),
                l = t("./src/util/miroImage.js"),
                u = function (e) {
                    return e && r.createElement(a.b, {
                        md: {
                            display: "none"
                        },
                        paddingBottom: "16px"
                    }, r.createElement(i.b, {
                        alt: "",
                        height: 550,
                        miroId: e,
                        strategy: "RESAMPLE",
                        width: 214
                    }))
                },
                d = function (e, n) {
                    return r.createElement(r.Fragment, null, r.createElement(c.a, {
                        scale: "M"
                    }, "To make ", n, " work, we log user data and share it with service providers. Click “", e, "” above to accept ", n, "’s", " ", r.createElement(a.v, {
                        href: Object(s.qb)(),
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        target: "blank"
                    }, "Terms of Service"), " & ", r.createElement(a.v, {
                        href: Object(s.X)(),
                        linkStyle: "OBVIOUS",
                        inline: !0,
                        target: "blank"
                    }, "Privacy Policy"), "."))
                };
            n.a = Object(o.b)(function (e) {
                return {
                    productName: e.config.productName
                }
            })(function (e) {
                var n = e.children,
                    t = e.ctaText,
                    o = e.hideDisclaimer,
                    i = void 0 !== o && o,
                    s = e.leftImageId,
                    m = e.poweredBy,
                    f = e.productName,
                    p = e.rightImageId,
                    h = e.subheader,
                    g = e.title,
                    b = e.bottomImageId,
                    v = e.isSubHeaderResponsive,
                    x = void 0 === v || v;
                return r.createElement(r.Fragment, null, r.createElement(a.b, {
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: b ? "column" : "row",
                    background: "white",
                    height: "100%",
                    minHeight: "550px",
                    justifyContent: "space-between",
                    md: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    width: "100%"
                }, u(s), r.createElement(a.b, {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    justifyContent: "center",
                    padding: "44px 56px",
                    textAlign: "center",
                    width: b ? "100%" : "360px",
                    md: {
                        display: "flex",
                        width: "100%"
                    }
                }, r.createElement(a.t, {
                    size: "h3",
                    smSize: "h4"
                }, g), !!m && r.createElement(a.b, {
                    sm: {
                        display: "none"
                    }
                }, r.createElement(c.a, {
                    scale: "M",
                    color: "LIGHTER"
                }, m)), r.createElement(a.b, {
                    maxWidth: "360px",
                    marginTop: m ? "20px" : "8px",
                    sm: x ? {
                        display: "none"
                    } : {}
                }, r.createElement(c.a, {
                    scale: "L",
                    color: "LIGHTER"
                }, h)), r.createElement(a.b, {
                    marginTop: "28px"
                }, n), !i && d(t, f)), u(p), function (e) {
                    if (!e) return null;
                    var n = Object(l.a)({
                            width: 1800,
                            height: 212,
                            miroId: e,
                            strategy: "RESAMPLE"
                        }),
                        t = "url(".concat(n, ")");
                    return e && r.createElement(a.b, {
                        height: "212px",
                        maxWidth: "900px",
                        backgroundImage: t,
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundSize: "cover"
                    })
                }(b)))
            })
        },
        "./src/components/ui/AspectRatioPlaceholder.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/components/index.js");

            function i(e) {
                var n = e.height,
                    t = e.width,
                    i = e.backgroundColor,
                    a = void 0 === i ? "BASE_NORMAL" : i,
                    c = e.children,
                    s = t / n;
                return r.createElement(o.b, {
                    position: "relative",
                    margin: "auto",
                    backgroundColor: a
                }, r.createElement(o.b, {
                    paddingBottom: "".concat(100 / s, "%")
                }, c))
            }
        },
        "./src/components/ui/MiddotContainer.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                o = t.n(r),
                i = t("./node_modules/lodash/isArray.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t("./src/framework/design-system/components/index.js");

            function l() {
                return c.createElement(s.b, {
                    tag: "span"
                }, c.createElement(s.d, null, "·"))
            }

            function u(e) {
                var n = e.children,
                    t = e.middotPadding,
                    r = o()(e, ["children", "middotPadding"]),
                    i = (a()(n) ? n : [n]).filter(function (e) {
                        return !!e
                    }).reduce(function (e, n, r) {
                        return 0 !== r && e.push(c.createElement(s.b, {
                            paddingLeft: t,
                            paddingRight: t,
                            key: "middot-".concat(r)
                        }, c.createElement(l, null))), e.push(n), e
                    }, []);
                return c.createElement(s.b, r, i)
            }
            t.d(n, "a", function () {
                return u
            })
        },
        "./src/components/ui/PopoverMenu.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return i
            }), t.d(n, "c", function () {
                return a
            }), t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/components/index.js");

            function i(e) {
                var n = e.paddingTopBottom,
                    t = void 0 === n ? "8px" : n,
                    i = e.paddingLeftRight,
                    a = void 0 === i ? "20px" : i;
                return r.createElement(o.b, {
                    padding: "".concat(t, " ").concat(a),
                    tag: "li"
                }, r.createElement(o.d, null, e.children))
            }

            function a(e) {
                var n = e.width,
                    t = void 0 === n ? "220px" : n,
                    i = e.paddingTopBottom,
                    a = void 0 === i ? "8px" : i;
                return r.createElement(o.b, {
                    paddingTop: a,
                    paddingBottom: a,
                    tag: "li"
                }, r.createElement(o.L, null, function (e) {
                    return r.createElement("div", {
                        className: e([function (e) {
                            return {
                                borderTop: "1px solid ".concat(e.baseColor.border.lighter)
                            }
                        }, function () {
                            return {
                                width: t
                            }
                        }])
                    })
                }))
            }

            function c(e) {
                var n = e.padding,
                    t = e.children;
                return r.createElement(o.B, {
                    ui: "SMALL"
                }, r.createElement(o.b, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: n || "8px",
                    paddingBottom: n || "8px",
                    tag: "ul"
                }, t))
            }
        },
        "./src/components/ui/image/Image.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t("./node_modules/react-redux/es/index.js"),
                i = t("./src/framework/design-system/components/index.js");
            n.a = Object(o.b)(function (e) {
                return {
                    isAmp: e.config.isAmp
                }
            })(function (e) {
                var n = e.alt,
                    t = e.src,
                    o = e.height,
                    a = e.width,
                    c = e.isAmp,
                    s = e.rules,
                    l = e.imgRef,
                    u = o ? Math.round(o) : null,
                    d = Math.round(a);
                return r.createElement(i.L, null, function (e) {
                    return c ? r.createElement("amp-img", {
                        alt: n,
                        src: t,
                        class: e(s),
                        layout: "responsive",
                        width: d,
                        height: u
                    }) : r.createElement("img", {
                        ref: l,
                        alt: n,
                        src: t,
                        className: e(s),
                        width: d,
                        height: u
                    })
                })
            })
        },
        "./src/components/ui/image/MiroImage.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/components/ui/image/Image.jsx"),
                c = t("./src/util/miroImage.js");

            function s(e) {
                var n, t = e.alt,
                    r = e.rules,
                    s = e.miroId,
                    l = e.width,
                    u = e.height,
                    d = e.strategy,
                    m = {
                        miroId: s,
                        width: l,
                        darken: e.darken,
                        freezeGifs: e.freezeGifs,
                        focusPercentX: e.focusPercentX,
                        focusPercentY: e.focusPercentY
                    };
                return n = u ? Object(c.a)(o()({}, m, {
                    height: u,
                    strategy: d
                })) : Object(c.a)(o()({}, m, {
                    strategy: "RESAMPLE"
                })), i.createElement(a.a, {
                    src: n,
                    alt: t,
                    rules: r,
                    height: u,
                    width: l
                })
            }
        },
        "./src/components/ui/image/index.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t("./src/components/ui/image/MiroImage.jsx"),
                i = t("./src/framework/design-system/util/style/converters.js"),
                a = function (e) {
                    return {
                        display: "block",
                        borderRadius: "50%",
                        height: Object(i.b)(e),
                        width: Object(i.b)(e)
                    }
                };

            function c(e) {
                var n = e.alt,
                    t = e.diameter,
                    i = e.miroId,
                    c = e.freezeGifs,
                    s = e.rules,
                    l = [a(t)].concat(s);
                return r.createElement(o.a, {
                    rules: l,
                    alt: n,
                    miroId: i,
                    width: t,
                    height: t,
                    strategy: "CROP",
                    freezeGifs: c
                })
            }
            var s = t("./src/components/ui/image/Image.jsx"),
                l = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                u = t.n(l),
                d = t("./node_modules/react-redux/es/index.js"),
                m = t("./src/framework/track/index.js"),
                f = t("./src/components/ui/AspectRatioPlaceholder.jsx"),
                p = t("./src/framework/design-system/components/index.js"),
                h = t("./src/styles/colors.js"),
                g = t("./src/styles/position.js"),
                b = t("./src/util/miroImage.js"),
                v = function (e) {
                    return e ? {
                        opacity: 1,
                        transition: "opacity 400ms 0ms"
                    } : {
                        opacity: 0,
                        transition: "opacity 100ms 400ms"
                    }
                },
                x = {
                    overflow: "hidden",
                    willChange: "transform",
                    transform: "translateZ(0)"
                },
                E = {
                    filter: "blur(20px)",
                    transform: "scale(1.1)"
                },
                y = Object(d.b)(function (e) {
                    return {
                        isAmp: e.config.isAmp
                    }
                })(function (e) {
                    var n = e.isAmp,
                        t = e.alt,
                        o = e.rules,
                        i = e.miroId,
                        a = e.width,
                        c = e.height,
                        l = e.strategy,
                        d = e.darken,
                        y = e.freezeGifs,
                        j = e.focusPercentX,
                        _ = e.focusPercentY,
                        w = c ? Object(b.b)({
                            miroId: i,
                            height: c,
                            width: a
                        }) : null,
                        k = Object(b.a)({
                            miroId: i,
                            width: a,
                            height: c,
                            strategy: l,
                            darken: d,
                            freezeGifs: y,
                            focusPercentX: j,
                            focusPercentY: _
                        }),
                        S = r.createElement(s.a, {
                            src: k,
                            alt: t,
                            rules: o,
                            height: c,
                            width: a
                        }),
                        C = function (e) {
                            var n = !1,
                                t = r.useState(!1),
                                o = u()(t, 2),
                                i = o[0],
                                a = o[1],
                                c = r.useRef(null),
                                s = r.useCallback(function (t) {
                                    if (e && t.isIntersecting && !n) {
                                        n = !0;
                                        var r = new Image;
                                        r.src = e;
                                        var o = function () {
                                            a(!0), n = !1
                                        };
                                        r.decode ? r.decode().then(function () {
                                            return o()
                                        }).catch(function () {}) : r.onload = function () {
                                            return o()
                                        }, r.onerror = function () {}
                                    }
                                }, [e]);
                            return Object(m.g)({
                                onIntersect: s,
                                disconnect: function () {
                                    return !e || i
                                },
                                target: c,
                                threshold: .1,
                                rootMargin: "500px 0px 1000px 0px"
                            }, [i, s]), [i, c]
                        }(n ? null : k),
                        O = u()(C, 2),
                        I = O[0],
                        A = O[1],
                        L = r.useState(!1),
                        N = u()(L, 2),
                        T = N[0],
                        P = N[1],
                        R = r.useRef(null);
                    r.useEffect(function () {
                        var e = R.current;
                        e && (e.complete ? P(!0) : e.onload = function () {
                            return P(!0)
                        })
                    }, []);
                    var U = T && !I,
                        M = [v(I)];
                    return o && (M = M.concat(o).concat({
                        background: h.w
                    })), c ? n ? r.createElement(f.a, {
                        height: c,
                        width: a
                    }, S) : r.createElement(p.L, null, function (e) {
                        return r.createElement(f.a, {
                            height: c,
                            width: a
                        }, r.createElement("div", {
                            className: e([v(U), g.a, x])
                        }, r.createElement(s.a, {
                            src: w,
                            alt: t,
                            rules: [g.a, E],
                            height: c,
                            width: a,
                            imgRef: R
                        })), r.createElement(s.a, {
                            src: I ? k : null,
                            alt: t,
                            rules: M,
                            height: c,
                            width: a,
                            imgRef: A
                        }), r.createElement("noscript", null, S))
                    }) : r.createElement(s.a, {
                        src: k,
                        alt: t,
                        height: c,
                        width: a
                    })
                });
            t.d(n, "a", function () {
                return c
            }), t.d(n, "b", function () {
                return o.a
            }), t.d(n, "c", function () {
                return y
            })
        },
        "./src/components/upsell/UpsellClickable.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return p
            }), t.d(n, "a", function () {
                return h
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./node_modules/react-redux/es/index.js"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/util/routes.js"),
                d = t("./src/framework/reporter/index.js"),
                m = t("./src/framework/source/index.js");

            function f() {
                var e = o()(["\n  fragment UpsellClickable_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n    creator {\n      id\n    }\n  }\n"]);
                return f = function () {
                    return e
                }, e
            }
            var p = c()(f()),
                h = Object(s.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.buttonSize,
                        r = e.buttonStyle,
                        o = e.children,
                        a = (e.customTheme, e.inline),
                        c = void 0 !== a && a,
                        s = e.isButton,
                        f = void 0 !== s && s,
                        p = e.linkStyle,
                        h = void 0 === p ? "SUBTLE" : p,
                        g = e.post,
                        b = e.redirectUrl,
                        v = e.width,
                        x = b || Object(u.P)(n),
                        E = Object(d.c)(),
                        y = Object(m.d)(),
                        j = function () {
                            E.event("upsell.clicked", {
                                dimension: y && y.dimension,
                                locationId: y && y.dimension,
                                postId: g && g.id,
                                authorId: g && g.creator ? g.creator.id : "",
                                sequenceId: g && g.sequence ? g.sequence.sequenceId : ""
                            })
                        };
                    return f ? i.createElement(l.c, {
                        buttonStyle: r,
                        href: x,
                        onClick: j,
                        size: t,
                        width: v
                    }, o) : i.createElement(l.v, {
                        onClick: j,
                        href: x,
                        linkStyle: h,
                        inline: c
                    }, o)
                })
        },
        "./src/components/user/UserAvatar.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t.n(i),
                c = t("./node_modules/graphql-tag/src/index.js"),
                s = t.n(c),
                l = t("./src/components/ui/image/index.js"),
                u = t("./src/framework/design-system/components/index.js"),
                d = t("./src/framework/design-system/type/Detail.js"),
                m = t("./src/framework/design-system/components/Popover.jsx"),
                f = t("./src/framework/design-system/util/style/converters.js"),
                p = t("./src/framework/style/useCx.js"),
                h = t("./src/util/routes.js"),
                g = t("./src/framework/design-system/components/util/VisibilityController.jsx");

            function b() {
                return (b = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v = a.a.createElement("path", {
                    d: "M1.36 13.17C4.63 6.17 11.31 1.4 19 1.4V.6C10.96.6 4.02 5.59.64 12.83l.72.34zM19 1.4c7.69 0 14.37 4.77 17.64 11.77l.72-.34C33.98 5.6 27.04.6 19 .6v.8zm17.64 25.43c-3.27 7-9.95 11.77-17.64 11.77v.8c8.04 0 14.98-4.99 18.36-12.23l-.72-.34zM19 38.6c-7.69 0-14.37-4.77-17.64-11.77l-.72.34C4.02 34.4 10.96 39.4 19 39.4v-.8z"
                }),
                x = function (e) {
                    return a.a.createElement("svg", b({
                        width: 38,
                        height: 40,
                        viewBox: "0 0 38 40"
                    }, e), v)
                };

            function E() {
                return (E = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = a.a.createElement("path", {
                    d: "M1.45 15.22C5.43 7.07 13.59 1.5 23 1.5v-1C13.18.5 4.69 6.32.55 14.78l.9.44zM23 1.5c9.4 0 17.57 5.57 21.55 13.72l.9-.44C41.3 6.32 32.82.5 23 .5v1zm21.55 33.28C40.57 42.93 32.41 48.5 23 48.5v1c9.82 0 18.31-5.82 22.45-14.28l-.9-.44zM23 48.5c-9.4 0-17.57-5.57-21.55-13.72l-.9.44C4.7 43.68 13.18 49.5 23 49.5v-1z"
                }),
                j = function (e) {
                    return a.a.createElement("svg", E({
                        width: 46,
                        height: 50,
                        viewBox: "0 0 46 50"
                    }, e), y)
                };

            function _() {
                return (_ = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = a.a.createElement("path", {
                    d: "M1.49 16.25A27.53 27.53 0 0 1 26 1.55V.45A28.63 28.63 0 0 0 .51 15.75l.98.5zM26 1.55a27.53 27.53 0 0 1 24.51 14.7l.98-.5A28.63 28.63 0 0 0 26 .45v1.1zm24.51 40.2A27.53 27.53 0 0 1 26 56.45v1.1a28.63 28.63 0 0 0 25.49-15.3l-.98-.5zM26 56.45a27.53 27.53 0 0 1-24.51-14.7l-.98.5A28.63 28.63 0 0 0 26 57.55v-1.1z"
                }),
                k = function (e) {
                    return a.a.createElement("svg", _({
                        width: 52,
                        height: 58,
                        viewBox: "0 0 52 58"
                    }, e), w)
                };

            function S() {
                return (S = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var C = a.a.createElement("path", {
                    d: "M1.53 20.28C7.33 9.2 19.24 1.6 33 1.6V.4C18.8.4 6.48 8.25.47 19.72l1.06.56zM33 1.6c13.76 0 25.66 7.6 31.47 18.68l1.06-.56C59.52 8.25 47.2.4 33 .4v1.2zm31.47 52.12C58.67 64.8 46.76 72.4 33 72.4v1.2c14.2 0 26.52-7.85 32.53-19.32l-1.06-.56zM33 72.4c-13.76 0-25.66-7.6-31.47-18.68l-1.06.56C6.47 65.75 18.8 73.6 33 73.6v-1.2z"
                }),
                O = function (e) {
                    return a.a.createElement("svg", S({
                        width: 66,
                        height: 74,
                        viewBox: "0 0 66 74"
                    }, e), C)
                };

            function I() {
                return (I = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = a.a.createElement("path", {
                    d: "M1.58 26.29C8.86 11.67 23.78 1.65 41 1.65V.35C23.26.35 7.9 10.67.42 25.71l1.16.58zM41 1.65c17.22 0 32.14 10.02 39.42 24.64l1.16-.58C74.1 10.67 58.74.35 41 .35v1.3zm39.42 64.06C73.14 80.33 58.22 90.35 41 90.35v1.3c17.74 0 33.1-10.32 40.58-25.36l-1.16-.58zM41 90.35c-17.22 0-32.14-10.02-39.42-24.64l-1.16.58C7.9 81.33 23.26 91.65 41 91.65v-1.3z"
                }),
                L = function (e) {
                    return a.a.createElement("svg", I({
                        width: 82,
                        height: 92,
                        viewBox: "0 0 82 92"
                    }, e), A)
                };

            function N() {
                return (N = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var T = a.a.createElement("path", {
                    d: "M1.67 41.33C13.2 17.83 36.78 1.75 64 1.75V.25C36.17.25 12.07 16.7.33 40.67l1.34.66zM64 1.75c27.22 0 50.81 16.09 62.33 39.58l1.34-.66C115.93 16.7 91.83.25 64 .25v1.5zm62.33 100.92c-11.52 23.5-35.11 39.58-62.33 39.58v1.5c27.83 0 51.93-16.45 63.67-40.42l-1.34-.66zM64 142.25c-27.22 0-50.81-16.09-62.33-39.58l-1.34.66C12.07 127.3 36.17 143.75 64 143.75v-1.5z"
                }),
                P = function (e) {
                    return a.a.createElement("svg", N({
                        width: 128,
                        height: 144,
                        viewBox: "0 0 128 144"
                    }, e), T)
                },
                R = t("./src/components/style/BaseThemeProvider.js"),
                U = function (e) {
                    return function (n) {
                        return {
                            fill: n.accentColor.fill.normal,
                            position: "absolute",
                            width: "calc(100% + ".concat(e, "px)"),
                            height: "calc(100% + ".concat(e, "px)"),
                            top: "-".concat(e / 2, "px"),
                            left: "-".concat(e / 2, "px"),
                            pointerEvents: "none"
                        }
                    }
                },
                M = {
                    XS: 38,
                    S: 48,
                    M: 56,
                    L: 72,
                    XL: 90,
                    XXL: 142
                },
                B = {
                    XS: x,
                    S: j,
                    M: k,
                    L: O,
                    XL: L,
                    XXL: P
                };

            function D(e) {
                var n = e.scale,
                    t = z[n],
                    r = Math.round(M[n] - t),
                    o = B[n];
                return i.createElement(R.a, null, i.createElement(u.L, null, function (e) {
                    return i.createElement(o, {
                        className: e(U(r))
                    })
                }))
            }

            function H() {
                var e = o()(["\n  fragment UserAvatar_user on User {\n    username\n    id\n    name\n    imageId\n    mediumMemberAt\n  }\n"]);
                return H = function () {
                    return e
                }, e
            }
            t.d(n, "c", function () {
                return z
            }), t.d(n, "a", function () {
                return G
            }), t.d(n, "b", function () {
                return Y
            });
            var F = "1*dmbNkD5D-u45r44go_cf0g.png",
                z = {
                    XS: 32,
                    S: 40,
                    M: 48,
                    L: 64,
                    XL: 80,
                    XXL: 128
                },
                V = function (e) {
                    return {
                        color: e.backgroundColor,
                        display: "inline-block",
                        padding: "12px 16px",
                        whiteSpace: "nowrap"
                    }
                },
                q = function (e) {
                    var n = e.children,
                        t = e.href;
                    return e.link ? i.createElement(u.f, {
                        href: t
                    }, n) : n
                },
                W = function (e) {
                    var n = e.children,
                        t = e.hasPopover,
                        r = e.name,
                        o = Object(p.a)();
                    return t && r ? i.createElement(g.a, null, function (e) {
                        var t, a = e.isVisible,
                            c = e.show,
                            s = e.hide,
                            l = function () {
                                t && clearTimeout(t), c()
                            },
                            u = function () {
                                t = setTimeout(s, 100)
                            };
                        return i.createElement("span", {
                            onMouseOver: l,
                            onMouseOut: u
                        }, a && i.createElement(m.a, {
                            darkTheme: !0,
                            disablePortalOverlay: !0,
                            display: "block",
                            placement: "top",
                            hide: u,
                            isVisible: !0,
                            shouldAnimateOpen: !0,
                            popoverRenderFn: function () {
                                return i.createElement("div", {
                                    onMouseOver: l
                                }, i.createElement(d.a, {
                                    scale: "S"
                                }, i.createElement("span", {
                                    className: o(V)
                                }, r)))
                            }
                        }, i.createElement(i.Fragment, null)), n)
                    }) : n
                };

            function G(e) {
                var n = e.scale;
                return i.createElement(l.a, {
                    miroId: F,
                    alt: "Unknown user",
                    diameter: z[n],
                    freezeGifs: !1
                })
            }
            n.d = function (e) {
                var n = e.hasPopover,
                    t = void 0 !== n && n,
                    r = e.link,
                    o = void 0 !== r && r,
                    a = e.scale,
                    c = e.user,
                    s = c.username,
                    d = c.imageId,
                    m = c.name,
                    p = c.mediumMemberAt,
                    g = e.withHalo,
                    b = void 0 === g || g;
                if (!s) return null;
                var v = Object(h.Fb)(s),
                    x = !!p && b,
                    E = i.createElement(l.a, {
                        miroId: d || F,
                        alt: m || "",
                        diameter: z[a],
                        freezeGifs: !1
                    }),
                    y = E;
                return x && (y = i.createElement(u.L, null, function (e) {
                    return i.createElement("div", {
                        className: e((n = z[a], {
                            position: "relative",
                            width: Object(f.b)(n),
                            height: Object(f.b)(n)
                        }))
                    }, i.createElement(D, {
                        scale: a
                    }), E);
                    var n
                })), i.createElement(W, {
                    hasPopover: t,
                    name: m
                }, i.createElement(q, {
                    href: v,
                    link: o
                }, y))
            };
            var Y = s()(H())
        },
        "./src/components/user/UserFollowButton.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/graphql-tag/src/index.js"),
                c = t.n(a),
                s = t("./src/components/session/WithViewer.jsx"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./node_modules/react-apollo/react-apollo.esm.js"),
                d = t("./src/framework/source/index.js"),
                m = t("./src/framework/reporter/index.js");

            function f() {
                var e = o()(["\n  fragment UserFollowButtonSignedIn_user on User {\n    id\n    isFollowing\n  }\n"]);
                return f = function () {
                    return e
                }, e
            }

            function p() {
                var e = o()(["\n  mutation unfollowUser($targetUserId: ID!) {\n    unfollowUser(targetUserId: $targetUserId) {\n      id\n      isFollowing\n    }\n  }\n"]);
                return p = function () {
                    return e
                }, e
            }

            function h() {
                var e = o()(["\n  mutation followUser($targetUserId: ID!) {\n    followUser(targetUserId: $targetUserId) {\n      id\n      isFollowing\n    }\n  }\n"]);
                return h = function () {
                    return e
                }, e
            }
            var g = c()(h()),
                b = c()(p()),
                v = c()(f()),
                x = Object(u.d)(Object(u.f)(g, {
                    name: "followUser",
                    props: function (e) {
                        var n = e.ownProps,
                            t = e.followUser;
                        return {
                            followUser: function () {
                                return t({
                                    variables: {
                                        targetUserId: n.user.id
                                    },
                                    optimisticResponse: {
                                        __typename: "Mutation",
                                        followUser: {
                                            __typename: "User",
                                            id: n.user.id,
                                            isFollowing: !0
                                        }
                                    }
                                })
                            }
                        }
                    }
                }), Object(u.f)(b, {
                    name: "unfollowUser",
                    props: function (e) {
                        var n = e.ownProps,
                            t = e.unfollowUser;
                        return {
                            unfollowUser: function () {
                                return t({
                                    variables: {
                                        targetUserId: n.user.id
                                    },
                                    optimisticResponse: {
                                        __typename: "Mutation",
                                        unfollowUser: {
                                            __typename: "User",
                                            id: n.user.id,
                                            isFollowing: !1
                                        }
                                    }
                                })
                            }
                        }
                    }
                }))(function (e) {
                    var n = e.user,
                        t = e.followUser,
                        r = e.unfollowUser,
                        o = e.buttonSize,
                        a = void 0 === o ? "REGULAR" : o,
                        c = e.buttonStyleFn,
                        s = void 0 === c ? function (e) {
                            return e ? "STRONG" : "OBVIOUS"
                        } : c,
                        u = Object(m.c)(),
                        f = Object(d.e)(),
                        p = n.isFollowing,
                        h = s(!!p),
                        g = i.useCallback(function () {
                            return u.event("user.followed", {
                                targetUserId: n.id,
                                followSource: f
                            }), t()
                        }),
                        b = i.useCallback(function () {
                            return u.event("user.unfollowed", {
                                targetUserId: n.id,
                                followSource: f
                            }), r()
                        });
                    return i.createElement(l.c, {
                        onClick: p ? b : g,
                        buttonStyle: h,
                        size: a
                    }, p ? "Following" : "Follow")
                }),
                E = t("./src/components/susi/SusiClickable.jsx"),
                y = t("./src/util/routes.js");

            function j() {
                var e = o()(["\n  fragment UserFollowButtonSignedOut_post on Post {\n    ...SusiClickable_post\n  }\n  ", "\n"]);
                return j = function () {
                    return e
                }, e
            }

            function _() {
                var e = o()(["\n  fragment UserFollowButtonSignedOut_user on User {\n    id\n    ...SusiClickable_user\n  }\n  ", "\n"]);
                return _ = function () {
                    return e
                }, e
            }
            var w = function (e) {
                    var n = e.buttonSize,
                        t = void 0 === n ? "REGULAR" : n,
                        r = e.isObvious,
                        o = void 0 !== r && r,
                        a = e.user,
                        c = e.post;
                    return i.createElement(d.b, {
                        source: {
                            userId: a.id
                        },
                        extendSource: !0
                    }, i.createElement(E.a, {
                        buttonSize: t,
                        isButton: !0,
                        isObvious: o,
                        operation: "register",
                        post: c,
                        user: a,
                        actionUrl: c ? Object(y.ob)(a.id, c.id) : Object(y.nb)(a.id)
                    }, "Follow"))
                },
                k = c()(_(), E.e),
                S = c()(j(), E.c);

            function C() {
                var e = o()(["\n  fragment UserFollowButton_post on Post {\n    collection {\n      id\n    }\n    ...UserFollowButtonSignedOut_post\n  }\n  ", "\n"]);
                return C = function () {
                    return e
                }, e
            }

            function O() {
                var e = o()(["\n  fragment UserFollowButton_user on User {\n    ...UserFollowButtonSignedIn_user\n    ...UserFollowButtonSignedOut_user\n  }\n  ", "\n  ", "\n"]);
                return O = function () {
                    return e
                }, e
            }
            t.d(n, "b", function () {
                return I
            }), t.d(n, "a", function () {
                return A
            });
            n.c = function (e) {
                var n = e.user,
                    t = e.buttonSize,
                    r = void 0 === t ? "REGULAR" : t,
                    o = e.buttonStyleFn,
                    a = void 0 === o ? function (e) {
                        return e ? "STRONG" : "OBVIOUS"
                    } : o,
                    c = e.post,
                    l = !(!c || !c.collection);
                return i.createElement(s.a, null, function (e) {
                    return e ? e.id !== n.id && i.createElement(x, {
                        user: n,
                        buttonSize: r,
                        buttonStyleFn: a
                    }) : i.createElement(w, {
                        isObvious: l,
                        post: c,
                        user: n,
                        buttonSize: r
                    })
                })
            };
            var I = c()(O(), v, k),
                A = c()(C(), S)
        },
        "./src/fragmentTypes.json": function (e) {
            e.exports = {
                __schema: {
                    types: [{
                        kind: "UNION",
                        name: "UserResult",
                        possibleTypes: [{
                            name: "User"
                        }, {
                            name: "GraphqlEmptyId"
                        }, {
                            name: "NotFound"
                        }, {
                            name: "Suspended"
                        }, {
                            name: "Blocked"
                        }]
                    }, {
                        kind: "UNION",
                        name: "UserSuggestionReasonType",
                        possibleTypes: [{
                            name: "FolloweesWhoFollow"
                        }, {
                            name: "Topic"
                        }]
                    }, {
                        kind: "UNION",
                        name: "PostResult",
                        possibleTypes: [{
                            name: "Post"
                        }, {
                            name: "GraphqlEmptyId"
                        }, {
                            name: "NotFound"
                        }, {
                            name: "WithheldInCountry"
                        }]
                    }, {
                        kind: "UNION",
                        name: "MilestoneType",
                        possibleTypes: [{
                            name: "PostMilestoneDistributionUserDisabled"
                        }, {
                            name: "PostMilestoneDistributionUserEnabled"
                        }]
                    }, {
                        kind: "UNION",
                        name: "RecircItem",
                        possibleTypes: [{
                            name: "Post"
                        }, {
                            name: "SuggestedPost"
                        }]
                    }, {
                        kind: "UNION",
                        name: "UserNavItemType",
                        possibleTypes: [{
                            name: "UserNavItemTypeSystemItem"
                        }]
                    }, {
                        kind: "UNION",
                        name: "StreamItemType",
                        possibleTypes: [{
                            name: "StreamItemCompressedPostList"
                        }, {
                            name: "StreamItemHeading"
                        }, {
                            name: "StreamItemPostPreview"
                        }, {
                            name: "StreamItemQuoteList"
                        }, {
                            name: "StreamItemQuotePreview"
                        }, {
                            name: "StreamItemSeriesGridCard"
                        }, {
                            name: "StreamItemSeriesHeroCarousel"
                        }, {
                            name: "StreamItemSequence"
                        }]
                    }, {
                        kind: "UNION",
                        name: "HeadingType",
                        possibleTypes: [{
                            name: "HeadingBasic"
                        }, {
                            name: "HeadingWithLink"
                        }, {
                            name: "HeadingDismissible"
                        }]
                    }, {
                        kind: "UNION",
                        name: "VariantFlagValueType",
                        possibleTypes: [{
                            name: "VariantFlagBoolean"
                        }, {
                            name: "VariantFlagString"
                        }]
                    }]
                }
            }
        },
        "./src/framework/design-system/components/Body.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return a
            }), t.d(n, "b", function () {
                return s
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/components/index.js"),
                i = t("./src/framework/design-system/util/type/toRule.js"),
                a = function (e) {
                    var n = e.grid.yStep,
                        t = e.scale.ui,
                        r = 6 * n;
                    switch (t) {
                        case "SMALL":
                            return r - n;
                        case "REGULAR":
                            return r;
                        case "LARGE":
                            return r + n;
                        default:
                            throw new Error("Unknown value for UI scale: ".concat(t))
                    }
                },
                c = [function (e) {
                    return {
                        color: e.baseColor.text.light,
                        fill: e.baseColor.fill.light
                    }
                }, Object(i.a)(function (e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: a(e),
                        display: "block"
                    }
                })];

            function s(e) {
                var n = e.children,
                    t = e.tag,
                    i = void 0 === t ? "p" : t;
                return r.createElement(o.L, null, function (e) {
                    return r.createElement(i, {
                        className: e(c)
                    }, n)
                })
            }
        },
        "./src/framework/design-system/components/Box.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = t("./src/framework/design-system/components/index.js"),
                d = t("./src/log/index.js"),
                m = function (e, n, t) {
                    n.forEach(function (n) {
                        null != e[n] && t(n, e[n])
                    })
                },
                f = function (e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (e) {
                            return e
                        },
                        r = {};
                    return m(e, n, function (e, n) {
                        return r[e] = t(n)
                    }), r
                },
                p = function (e) {
                    return ["".concat(e, "Bottom"), "".concat(e, "Left"), "".concat(e, "Top"), "".concat(e, "Right")]
                },
                h = t("./src/styles/breakpoints.js"),
                g = t("./src/styles/mediaTypes.js");
            t.d(n, "a", function () {
                return M
            });
            var b = function (e) {
                    var n = p("padding");
                    return n.push("padding"), f(e, n)
                },
                v = function (e) {
                    return function (n) {
                        var t = p("border");
                        t.push("border");
                        var r = {
                            ACCENT_LIGHT: n.accentColor.border.light,
                            ACCENT_NORMAL: n.accentColor.border.normal,
                            ACCENT_DARK: n.accentColor.border.dark,
                            BASE_LIGHTER: n.baseColor.border.lighter,
                            BASE_LIGHT: n.baseColor.border.light,
                            BASE_NORMAL: n.baseColor.border.normal,
                            BASE_DARK: n.baseColor.border.dark,
                            BASE_DARKER: n.baseColor.border.darker,
                            BACKGROUND: n.backgroundColor,
                            ERROR: n.errorColor,
                            NONE: "none"
                        };
                        return f(e, t, function (e) {
                            var t = e && r[e];
                            return t === r.NONE ? r.NONE : t && "".concat(n.borderWidth, "px ").concat(n.borderStyle, " ").concat(t)
                        })
                    }
                },
                x = function (e) {
                    return f(e, ["borderRadius"])
                },
                E = function (e) {
                    return f(e, ["boxShadow"])
                },
                y = function (e) {
                    var n = p("margin");
                    return n.push("margin"), f(e, n)
                },
                j = function (e) {
                    return f(e, ["height", "width", "maxHeight", "maxWidth", "minHeight", "minWidth", "boxSizing"])
                },
                _ = function (e) {
                    return f(e, ["overflow"])
                },
                w = function (e) {
                    return f(e, ["position", "top", "right", "bottom", "left"])
                },
                k = function (e) {
                    return f(e, ["zIndex"])
                },
                S = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.allowFlexProps,
                        r = n.noDefault,
                        o = e.display,
                        i = void 0 === o ? r ? void 0 : "block" : o,
                        a = {
                            display: i,
                            float: e.float
                        },
                        c = ["alignItems", "flexDirection", "justifyContent", "flexWrap"];
                    return "flex" === i || t ? a = s()({}, a, f(e, c)) : function (e, n, t) {
                        m(e, n, function (e, n) {
                            return d.a.warn(t(e))
                        })
                    }(e, c, function (e) {
                        return "Cannot set ".concat(e, ' without setting `display="flex"`.')
                    }), a
                },
                C = function (e) {
                    if (void 0 === e.alignSelf && void 0 === e.flexGrow && void 0 === e.flexShrink && void 0 === e.flexBasis) return {};
                    var n = e.alignSelf,
                        t = e.flexGrow,
                        r = void 0 === t ? 0 : t,
                        o = e.flexShrink,
                        i = void 0 === o ? 0 : o,
                        a = e.flexBasis,
                        c = void 0 === a ? "auto" : a;
                    return {
                        alignSelf: n,
                        flex: "".concat(r, " ").concat(i, " ").concat(c)
                    }
                },
                O = function (e) {
                    var n = e.backgroundColor,
                        t = a()(e, ["backgroundColor"]);
                    return function (e) {
                        var r = f(t, ["background", "backgroundImage", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"]);
                        return s()({}, r, function (e) {
                            return function (n) {
                                var t = {
                                    ACCENT_LIGHT: n.accentColor.fill.light,
                                    ACCENT_NORMAL: n.accentColor.fill.normal,
                                    ACCENT_DARK: n.accentColor.fill.dark,
                                    BASE_LIGHT: n.baseColor.background.light,
                                    BASE_NORMAL: n.baseColor.background.normal,
                                    BASE_DARK: n.baseColor.background.dark,
                                    SAGE_LIGHT: n.brandColor.sage.light,
                                    SAGE_NORMAL: n.brandColor.sage.normal,
                                    SAGE_DARK: n.brandColor.sage.dark,
                                    ROSE_LIGHT: n.brandColor.rose.light,
                                    ROSE_NORMAL: n.brandColor.rose.normal,
                                    ROSE_DARK: n.brandColor.rose.dark,
                                    BACKGROUND: n.backgroundColor,
                                    NONE: void 0
                                };
                                return f(e, ["backgroundColor"], function (e) {
                                    return e && t[e]
                                })
                            }
                        }({
                            backgroundColor: n
                        })(e))
                    }
                },
                I = function (e) {
                    return f(e, ["textAlign"])
                },
                A = function (e) {
                    return f(e, ["whiteSpace"])
                },
                L = function (e) {
                    var n = e.xs;
                    return n ? function (e) {
                        return o()({}, h.xs(e), s()({}, b(n), v(n)(e), y(n), j(n), _(n), S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), C(n), w(n), k(n), I(n), O(n), A(n)))
                    } : {}
                },
                N = function (e) {
                    var n = e.sm;
                    return n ? function (e) {
                        return o()({}, h.sm(e), s()({}, b(n), v(n)(e), x(n), y(n), j(n), _(n), S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), C(n), w(n), k(n), I(n), O(n), A(n)))
                    } : {}
                },
                T = function (e) {
                    var n = e.md;
                    return n ? function (e) {
                        return o()({}, h.md(e), s()({}, b(n), v(n)(e), x(n), y(n), j(n), _(n), S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), C(n), w(n), k(n), I(n), O(n), A(n)))
                    } : {}
                },
                P = function (e) {
                    var n = e.lg;
                    return n ? function (e) {
                        return o()({}, h.lg(e), s()({}, b(n), v(n)(e), x(n), y(n), j(n), _(n), S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), C(n), w(n), k(n), I(n), O(n), A(n)))
                    } : {}
                },
                R = function (e) {
                    var n = e.xl;
                    return n ? function (e) {
                        return o()({}, h.xl(e), s()({}, b(n), v(n)(e), x(n), y(n), j(n), _(n), S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        }), C(n), w(n), k(n), I(n), O(n), A(n)))
                    } : {}
                },
                U = function (e) {
                    var n = e.print;
                    return n ? function (e) {
                        return o()({}, g.a(e), s()({}, S(n, {
                            allowFlexProps: !0,
                            noDefault: !0
                        })))
                    } : {}
                };

            function M(e) {
                var n = e.children,
                    t = e.tag,
                    r = void 0 === t ? "div" : t,
                    o = a()(e, ["children", "tag"]),
                    i = r,
                    c = [b(o), v(o), x(o), E(o), y(o), j(o), _(o), S(o), C(o), w(o), k(o), O(o), I(o), A(o), L(o), N(o), T(o), P(o), R(o), U(o)];
                return l.createElement(u.L, null, function (e) {
                    return l.createElement(i, {
                        className: e(c)
                    }, n)
                })
            }
        },
        "./src/framework/design-system/components/Button.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t("./src/framework/design-system/components/Clickable.jsx"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/design-system/util/type/toRule.js"),
                d = t("./src/styles/colors.js"),
                m = function () {
                    return {
                        borderWidth: "1px",
                        borderStyle: "solid",
                        boxSizing: "border-box",
                        display: "inline-block",
                        textDecoration: "none",
                        ":hover": {
                            cursor: "pointer"
                        },
                        ":focus": {
                            outline: "none"
                        }
                    }
                },
                f = function (e) {
                    return function () {
                        return e ? {
                            width: e
                        } : {}
                    }
                },
                p = {
                    SUBTLE: function (e) {
                        return {
                            color: e.baseColor.text.normal,
                            fill: e.baseColor.fill.normal,
                            background: 0,
                            borderColor: e.baseColor.border.dark,
                            ":hover": {
                                color: e.baseColor.text.darker,
                                fill: e.baseColor.fill.darker,
                                borderColor: e.baseColor.border.darker
                            },
                            ":disabled": {
                                color: e.baseColor.text.lighter,
                                fill: e.baseColor.fill.light,
                                borderColor: e.baseColor.border.light,
                                cursor: "inherit",
                                ":hover": {
                                    color: e.baseColor.text.lighter,
                                    fill: e.baseColor.fill.light,
                                    borderColor: e.baseColor.border.light
                                }
                            }
                        }
                    },
                    OBVIOUS: function (e) {
                        return {
                            background: 0,
                            color: e.accentColor.text.normal,
                            fill: e.accentColor.fill.normal,
                            borderColor: e.accentColor.border.normal,
                            ":hover": {
                                color: e.accentColor.text.dark,
                                fill: e.accentColor.fill.dark,
                                borderColor: e.accentColor.border.dark
                            }
                        }
                    },
                    STRONG: function (e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.accentColor.fill.normal,
                            borderColor: e.accentColor.fill.normal,
                            ":hover": {
                                background: e.accentColor.fill.dark,
                                borderColor: e.accentColor.fill.dark
                            }
                        }
                    },
                    BRAND: function (e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.baseColor.fill.dark,
                            borderColor: e.baseColor.fill.dark
                        }
                    },
                    ERROR: function (e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: e.errorColor,
                            borderColor: e.errorColor
                        }
                    },
                    WARN: function (e) {
                        return {
                            color: e.baseColor.text.lighter,
                            fill: e.baseColor.fill.lighter,
                            background: 0,
                            borderColor: e.baseColor.border.normal,
                            ":hover": {
                                borderColor: e.warnColor,
                                color: e.warnColor
                            }
                        }
                    },
                    FACEBOOK: function (e) {
                        return {
                            color: e.backgroundColor,
                            fill: e.backgroundColor,
                            background: d.i,
                            borderColor: d.i,
                            ":hover": {
                                background: d.j,
                                borderColor: d.j
                            }
                        }
                    },
                    SOCIAL: function (e) {
                        return {
                            color: e.baseColor.text.normal,
                            background: 0,
                            textAlign: "left",
                            borderColor: e.baseColor.border.normal,
                            ":hover": {
                                color: e.baseColor.text.normal,
                                borderColor: e.baseColor.border.dark
                            }
                        }
                    }
                },
                h = {
                    COMPACT: function () {
                        return {
                            padding: "0px 8px"
                        }
                    },
                    SMALL: function () {
                        return {
                            padding: "4px 12px"
                        }
                    },
                    REGULAR: function () {
                        return {
                            padding: "8px 16px"
                        }
                    },
                    LARGE: function () {
                        return {
                            padding: "8px 20px"
                        }
                    },
                    FULL: function () {
                        return {
                            padding: "12px"
                        }
                    },
                    BADGE: function () {
                        return {
                            padding: "4px 0px",
                            margin: "auto"
                        }
                    }
                },
                g = {
                    RECTANGLE: function () {
                        return {
                            borderRadius: "4px"
                        }
                    },
                    CIRCLE: function () {
                        return {
                            borderRadius: "99em"
                        }
                    }
                };

            function b(e) {
                return {
                    font: e.font.uiRegular,
                    lineHeight: 20
                }
            }
            var v = {
                COMPACT: Object(u.a)(function (e) {
                    return {
                        font: e.font.uiRegular,
                        fontSize: 15,
                        lineHeight: 18
                    }
                }),
                BADGE: Object(u.a)(function (e) {
                    return b(e)
                }),
                SMALL: Object(u.a)(function (e) {
                    return b(e)
                }),
                REGULAR: Object(u.a)(function (e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: 20
                    }
                }),
                LARGE: Object(u.a)(function (e) {
                    return {
                        font: e.font.uiRegular,
                        lineHeight: 24
                    }
                })
            };
            n.a = function (e) {
                var n = e.buttonStyle,
                    t = void 0 === n ? "SUBTLE" : n,
                    r = e.size,
                    i = void 0 === r ? "REGULAR" : r,
                    u = e.shape,
                    d = void 0 === u ? "RECTANGLE" : u,
                    b = e.width,
                    x = a()(e, ["buttonStyle", "size", "shape", "width"]),
                    E = [h[i], p[t], g[d], v[i], f(b), m];
                return c.createElement(l.L, null, function (e) {
                    return c.createElement(s.a, o()({
                        className: e(E)
                    }, x))
                })
            }
        },
        "./src/framework/design-system/components/Clickable.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/components/navigation/Anchor.jsx"),
                i = function (e) {
                    return r.createElement("button", e)
                },
                a = function (e) {
                    return r.createElement(o.a, e, e.children)
                };

            function c(e) {
                return e.href ? r.createElement(a, e) : e.onClick ? r.createElement(i, e) : null
            }
        },
        "./src/framework/design-system/components/Popover.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return y
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/styles/zIndex.js"),
                c = t("./node_modules/react-popper/lib/esm/index.js"),
                s = t("./src/framework/design-system/components/index.js"),
                l = t("./src/framework/design-system/components/portal/PopoverPortal.jsx"),
                u = t("./src/framework/design-system/util/events.js"),
                d = t("./src/framework/style/useTheme.js"),
                m = t("./src/util/dom.js"),
                f = {
                    bottom: "top center",
                    top: "bottom center"
                },
                p = function () {
                    return {
                        "0%": {
                            transform: "matrix(0.97, 0, 0, 1, 0, 12)",
                            opacity: 0
                        },
                        "20%": {
                            transform: "matrix(0.99, 0, 0, 1, 0, 2)",
                            opacity: .7
                        },
                        "40%": {
                            transform: "matrix(1, 0, 0, 1, 0, -1)",
                            opacity: 1
                        },
                        "70%": {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1
                        },
                        "100%": {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1
                        }
                    }
                },
                h = function (e, n, t, r) {
                    return function (o) {
                        return {
                            boxSizing: "border-box",
                            border: n ? void 0 : "".concat(o.borderWidth, "px solid ").concat(o.baseColor.border.lighter),
                            borderRadius: "".concat(o.borderRadius.regular, "px"),
                            boxShadow: "0 1px 4px ".concat(o.baseColor.border.lighter),
                            color: n ? "#fff" : void 0,
                            marginBottom: "top" === e ? "".concat(t, "px") : "inherit",
                            marginLeft: "right" === e ? "".concat(t, "px") : "inherit",
                            marginRight: "left" === e ? "".concat(t, "px") : "inherit",
                            marginTop: "bottom" === e ? "".concat(t, "px") : "inherit",
                            zIndex: r || a.a.popover
                        }
                    }
                },
                g = function (e, n) {
                    return function (t) {
                        return o()({
                            animation: "".concat(e, " 100ms forwards linear"),
                            transformOrigin: f[n],
                            willChange: "transform"
                        }, v(t))
                    }
                },
                b = function (e) {
                    return function (n) {
                        return {
                            background: e ? n.baseColor.fill.normal : n.backgroundColor,
                            borderRadius: "".concat(n.borderRadius.regular, "px")
                        }
                    }
                },
                v = function (e) {
                    return {
                        background: e.backgroundColor,
                        borderRadius: "".concat(e.borderRadius.regular, "px")
                    }
                },
                x = function (e, n) {
                    return function (t) {
                        return {
                            position: "absolute",
                            pointerEvents: "none",
                            top: "bottom" === e ? "-14px" : "top" === e ? void 0 : "50%",
                            right: "left" === e ? "-14px" : void 0,
                            bottom: "top" === e ? "-14px" : void 0,
                            left: "right" === e ? "-14px" : "left" === e ? void 0 : "50%",
                            clip: {
                                top: "rect(0px 18px 18px -4px)",
                                right: "rect(-4px 14px 18px 0px)",
                                bottom: "rect(0px 18px 14px -4px)",
                                left: "rect(-4px 14px 18px 0px)"
                            } [e],
                            ":after": {
                                content: "''",
                                display: "block",
                                width: "14px",
                                height: "14px",
                                background: n ? t.baseColor.fill.normal : t.backgroundColor,
                                transform: {
                                    top: "rotate(45deg) translate(-6px, -6px)",
                                    right: "rotate(45deg) translate(6px, -6px)",
                                    bottom: "rotate(45deg) translate(6px, 6px)",
                                    left: "rotate(45deg) translate(-6px, 6px)"
                                } [e],
                                boxShadow: {
                                    top: "1px 1px 1px -1px ".concat(t.baseColor.border.dark),
                                    right: "-1px 1px 1px -1px ".concat(t.baseColor.border.dark),
                                    bottom: "-1px -1px 1px -1px ".concat(t.baseColor.border.dark),
                                    left: "1px -1px 1px -1px ".concat(t.baseColor.border.dark)
                                } [e]
                            }
                        }
                    }
                };

            function E(e) {
                var n = e.children,
                    t = e.shouldAnimateOpen,
                    r = e.placement;
                return t ? i.createElement(s.M, {
                    keyframes: {
                        scaleUpKeyframes: p
                    }
                }, function (e) {
                    var t = e.scaleUpKeyframes;
                    return i.createElement(s.L, null, function (e) {
                        return i.createElement("div", {
                            className: e(g(t, r))
                        }, n)
                    })
                }) : i.createElement(s.L, null, function (e) {
                    return i.createElement("div", {
                        className: e(v)
                    }, n)
                })
            }

            function y(e) {
                var n = e.children,
                    t = e.darkTheme,
                    r = void 0 !== t && t,
                    o = e.disablePortalOverlay,
                    a = void 0 !== o && o,
                    f = e.display,
                    p = e.flip,
                    g = void 0 === p || p,
                    v = e.hide,
                    y = e.isVisible,
                    j = e.noArrow,
                    _ = void 0 !== j && j,
                    w = e.noPortal,
                    k = void 0 !== w && w,
                    S = e.overflowPadding,
                    C = void 0 === S ? 5 : S,
                    O = e.placement,
                    I = void 0 === O ? "bottom" : O,
                    A = e.popoverRenderFn,
                    L = e.referenceHeight,
                    N = e.refTag,
                    T = void 0 === N ? "div" : N,
                    P = e.setMaxHeight,
                    R = void 0 !== P && P,
                    U = e.shouldAnimateOpen,
                    M = void 0 !== U && U,
                    B = e.targetDistance,
                    D = void 0 === B ? 5 : B,
                    H = e.customZIndex,
                    F = {
                        display: f || "inline-block",
                        height: L
                    },
                    z = T,
                    V = Object(d.a)().borderWidth,
                    q = i.useCallback(function (e) {
                        var n = e.instance.popper.children[0];
                        if (n && "bottom" === I && !g) {
                            var t = window.innerHeight - (e.offsets.reference.top + e.offsets.reference.height - Object(m.c)().top) - D - 2 * V - C;
                            n.style.overflowY = "auto", n.style.maxHeight = "".concat(t, "px")
                        }
                    }, [V, g, m.c, I, C, D]);
                return i.createElement(s.L, null, function (e) {
                    var t = i.createElement(c.b, {
                        modifiers: {
                            flip: {
                                enabled: g
                            },
                            preventOverflow: {
                                enabled: !0,
                                padding: C
                            },
                            setMaxHeight: {
                                enabled: R,
                                fn: q,
                                order: 1e3
                            }
                        },
                        placement: I
                    }, function (n) {
                        var t = n.placement,
                            o = n.ref,
                            a = n.style,
                            c = n.arrowProps,
                            s = n.scheduleUpdate;
                        return i.createElement("div", {
                            ref: o,
                            style: a,
                            className: e(h(t, r, D, H))
                        }, i.createElement(E, {
                            placement: t,
                            shouldAnimateOpen: M
                        }, i.createElement("div", {
                            className: e(b(r))
                        }, A(s)), !_ && i.createElement("div", {
                            className: e(x(t, r)),
                            ref: c.ref,
                            style: c.style
                        })))
                    });
                    return k || (t = i.createElement(l.a, {
                        disableOverlay: a,
                        onClick: function (e) {
                            return Object(u.a)(v, e)
                        },
                        onKeyDown: function (e) {
                            return Object(u.b)(v, e)
                        },
                        customZIndex: H
                    }, t)), i.createElement(c.a, null, i.createElement(c.c, null, function (t) {
                        var r = t.ref;
                        return i.createElement(z, {
                            ref: r,
                            className: e(F)
                        }, n)
                    }), y ? t : null)
                })
            }
        },
        "./src/framework/design-system/components/SvgButton.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t("./src/framework/style/components/WithCx.js"),
                l = function (e) {
                    return function (n) {
                        return a()({
                            color: "inherit",
                            fill: n.baseColor.fill.lighter,
                            fontSize: "inherit",
                            border: "inherit",
                            fontFamily: "inherit",
                            letterSpacing: "inherit",
                            fontWeight: "inherit",
                            padding: 0,
                            margin: 0,
                            outline: "none",
                            ":hover": {
                                cursor: "pointer"
                            }
                        }, e)
                    }
                };

            function u(e) {
                var n = e.ariaLabel,
                    t = void 0 === n ? "" : n,
                    r = e.children,
                    i = e.onClick,
                    a = e.onTouchStart,
                    u = e.onTouchEnd,
                    d = e.rules,
                    m = void 0 === d ? {} : d,
                    f = {
                        onClick: i,
                        onTouchEnd: u,
                        onTouchStart: a
                    };
                return t && (f["aria-label"] = t), c.createElement(s.a, null, function (e) {
                    return c.createElement("button", o()({}, f, {
                        className: e(l(m))
                    }), r)
                })
            }
        },
        "./src/framework/design-system/components/index.js": function (e, n, t) {
            "use strict";
            var r = t("./src/framework/style/components/ThemeProvider.js"),
                o = t("./src/framework/style/components/WithCx.js"),
                i = t("./node_modules/lodash/mapValues.js"),
                a = t.n(i),
                c = t("./node_modules/react/index.js"),
                s = t.n(c),
                l = t("./src/components/style/useRenderer.js"),
                u = t("./src/framework/style/useTheme.js");

            function d(e) {
                var n = e.children,
                    t = e.keyframes,
                    r = Object(u.a)(),
                    o = Object(l.a)();
                return n(a()(t, function (e) {
                    var n = "function" == typeof e ? e : function () {
                        return e
                    };
                    return o.renderKeyframe(n, r)
                }))
            }
            var m = t("./src/framework/style/components/WithTheme.js"),
                f = t("./src/framework/design-system/components/Body.jsx"),
                p = t("./src/framework/design-system/components/Box.jsx"),
                h = t("./src/framework/design-system/components/Button.jsx");

            function g() {
                return (g = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b = s.a.createElement("path", {
                    d: "M13.8 4.6L9.5 8.89 5.21 4.6l-.61.61 4.29 4.3-4.29 4.28.61.62 4.3-4.3 4.28 4.3.62-.62-4.3-4.29 4.3-4.29",
                    fillRule: "evenodd"
                }),
                v = function (e) {
                    return s.a.createElement("svg", g({
                        width: 19,
                        height: 19,
                        viewBox: "0 0 19 19"
                    }, e), b)
                },
                x = t("./src/svg/x-25px.svg");

            function E() {
                return (E = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = s.a.createElement("path", {
                    d: "M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62",
                    fillRule: "evenodd"
                }),
                j = function (e) {
                    return s.a.createElement("svg", E({
                        className: "x-29px_svg__svgIcon-use",
                        width: 29,
                        height: 29
                    }, e), y)
                },
                _ = {
                    SMALL: v,
                    REGULAR: x.a,
                    LARGE: j
                };

            function w(e) {
                var n = e.onClick,
                    t = e.size,
                    r = void 0 === t ? "SMALL" : t,
                    o = e.isPositionAbsolute,
                    i = void 0 === o || o,
                    a = _[r];
                return c.createElement(p.a, {
                    position: !0 === i ? "absolute" : "relative",
                    right: "0",
                    margin: !0 === i ? "12px" : "0"
                }, c.createElement(q, null, c.createElement(He, {
                    onClick: n
                }, c.createElement(a, null))))
            }
            var k = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                S = t.n(k),
                C = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                O = t.n(C),
                I = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                A = t.n(I),
                L = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                N = t.n(L),
                T = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                P = t.n(T),
                R = t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                U = t.n(R),
                M = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                B = t.n(M),
                D = t("./src/styles/font.js"),
                H = function () {
                    return {
                        padding: "8px 12px",
                        textAlign: "center"
                    }
                },
                F = (c.Component, t("./src/framework/design-system/util/type/toRule.js")),
                z = function (e) {
                    return Object(F.a)(function (n) {
                        return {
                            font: n.font.uiRegular,
                            lineHeight: 20,
                            display: "block",
                            clamp: e
                        }
                    })
                },
                V = function (e) {
                    return function (n) {
                        return {
                            color: e ? n.baseColor.text.normal : n.baseColor.text.lighter,
                            fill: e ? n.baseColor.fill.normal : n.baseColor.fill.lighter
                        }
                    }
                };

            function q(e) {
                var n = e.children,
                    t = e.tag,
                    r = void 0 === t ? "span" : t,
                    i = e.strong,
                    a = void 0 !== i && i,
                    s = e.clamp,
                    l = [z(s), V(a)],
                    u = r;
                return c.createElement(o.a, null, function (e) {
                    return c.createElement(u, {
                        className: e(l)
                    }, n)
                })
            }
            var W = t("./src/framework/design-system/components/Clickable.jsx"),
                G = function (e) {
                    var n = e.containerWidth;
                    return {
                        position: "relative",
                        width: "".concat(n, "px"),
                        height: "".concat(n, "px")
                    }
                },
                Y = function (e) {
                    var n = e.radius;
                    return {
                        "100%": {
                            strokeDashoffset: "".concat(6.28 * n, "px")
                        }
                    }
                },
                K = function (e) {
                    var n = e.animationDelay,
                        t = e.animationDuration,
                        r = e.animationName,
                        o = e.radius,
                        i = e.strokeWidth;
                    return function (e) {
                        return {
                            r: o,
                            cx: "50%",
                            cy: "50%",
                            fill: "none",
                            stroke: e.baseColor.border.light,
                            strokeWidth: i,
                            strokeDasharray: "".concat(6.28 * o, "px ").concat(6.28 * o, "px"),
                            strokeDashoffset: "0",
                            transformOrigin: "50% 50%",
                            transform: "rotate(-90deg)",
                            animation: "".concat(r, " ").concat(t, "ms linear forwards"),
                            animationDelay: "".concat(n, "ms")
                        }
                    }
                };

            function X(e) {
                var n = e.delay,
                    t = e.duration,
                    r = e.radius,
                    i = void 0 === r ? 8 : r,
                    a = e.strokeWidth,
                    s = void 0 === a ? 4 : a,
                    l = 2 * (i + s);
                return c.createElement(d, {
                    keyframes: {
                        countdownCircleKeyframe: Y({
                            radius: i
                        })
                    }
                }, function (e) {
                    var r = e.countdownCircleKeyframe;
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement("figure", {
                            className: e(G({
                                containerWidth: l
                            }))
                        }, c.createElement("svg", {
                            role: "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%"
                        }, c.createElement("circle", {
                            className: e(K({
                                animationDelay: n,
                                animationDuration: t,
                                animationName: r,
                                radius: i,
                                strokeWidth: s
                            })),
                            cx: "50%",
                            cy: "50%",
                            r: "8px"
                        })))
                    })
                })
            }
            var Q = t("./node_modules/@babel/runtime/helpers/extends.js"),
                $ = t.n(Q),
                J = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                Z = t.n(J),
                ee = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                ne = t.n(ee),
                te = new Map([
                    [6, "xs"],
                    [8, "sm"],
                    [10, "md"],
                    [12, "lg"]
                ]),
                re = function (e) {
                    var n, t = e.centered,
                        r = e.columns,
                        o = e.gutter,
                        i = e.theme,
                        a = r ? te.get(r) : null,
                        c = {
                            xs: "".concat(i.breakpoints.sm, "px"),
                            sm: "".concat(i.breakpoints.md, "px"),
                            md: "".concat(i.breakpoints.lg, "px"),
                            lg: "".concat(i.breakpoints.xl, "px"),
                            xl: "".concat(i.grid.xlMaxContentWidth, "px")
                        },
                        s = {
                            xs: "".concat(i.grid.marginSteps.xs * i.grid.xStep, "px"),
                            sm: "".concat(i.grid.marginSteps.sm * i.grid.xStep, "px"),
                            md: "".concat(i.grid.marginSteps.md * i.grid.xStep, "px"),
                            lg: "".concat(i.grid.marginSteps.lg * i.grid.xStep, "px"),
                            xl: "".concat(i.grid.marginSteps.xl * i.grid.xStep, "px")
                        };
                    return n = a ? ne()({
                        maxWidth: c[a]
                    }, o ? {
                        paddingLeft: s[a],
                        paddingRight: s[a]
                    } : {}) : {
                        xs: ne()({
                            maxWidth: c.xs
                        }, o ? {
                            paddingLeft: s.xs,
                            paddingRight: s.xs
                        } : {}),
                        sm: ne()({
                            maxWidth: c.sm
                        }, o ? {
                            paddingLeft: s.sm,
                            paddingRight: s.sm
                        } : {}),
                        md: ne()({
                            maxWidth: c.md
                        }, o ? {
                            paddingLeft: s.md,
                            paddingRight: s.md
                        } : {}),
                        lg: ne()({
                            maxWidth: c.lg
                        }, o ? {
                            paddingLeft: s.lg,
                            paddingRight: s.lg
                        } : {}),
                        xl: ne()({
                            maxWidth: c.xl
                        }, o ? {
                            paddingLeft: s.xl,
                            paddingRight: s.xl
                        } : {})
                    }, ne()({
                        boxSizing: "border-box"
                    }, t ? {
                        marginLeft: "auto",
                        marginRight: "auto"
                    } : {}, n, {
                        width: "100%"
                    })
                };

            function oe(e) {
                var n = e.tag,
                    t = void 0 === n ? "section" : n,
                    r = e.columns,
                    o = e.gutter,
                    i = void 0 === o || o,
                    a = e.centered,
                    s = void 0 === a || a,
                    l = Z()(e, ["tag", "columns", "gutter", "centered"]),
                    d = Object(u.a)(),
                    m = re({
                        centered: s,
                        columns: r,
                        gutter: i,
                        theme: d
                    });
                return c.createElement(p.a, $()({
                    tag: t
                }, ne()({}, m, l)))
            }
            var ie = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                ae = t("./src/framework/style/useCx.js"),
                ce = function (e) {
                    return function (n) {
                        var t = {
                                xs: "0 ".concat(n.grid.marginSteps.xs * n.grid.xStep, "px"),
                                sm: "0 ".concat(n.grid.marginSteps.sm * n.grid.xStep, "px"),
                                md: "0 ".concat(n.grid.marginSteps.md * n.grid.xStep, "px"),
                                lg: "0 ".concat(n.grid.marginSteps.lg * n.grid.xStep, "px"),
                                xl: "0 ".concat(n.grid.marginSteps.xl * n.grid.xStep, "px")
                            },
                            r = {
                                xs: "".concat(n.breakpoints.sm, "px"),
                                sm: "".concat(n.breakpoints.md, "px"),
                                md: "".concat(n.breakpoints.lg, "px"),
                                lg: "".concat(n.breakpoints.xl, "px"),
                                xl: "".concat(n.grid.xlMaxContentWidth, "px")
                            };
                        return Object(ie.a)(n, {
                            margin: "0 auto",
                            maxWidth: e ? r[e] : r,
                            padding: e ? t[e] : t,
                            width: "100%"
                        })
                    }
                },
                se = function (e) {
                    var n = e.children,
                        t = e.size,
                        r = Object(ae.a)();
                    return c.createElement("div", {
                        className: r(ce(t))
                    }, n)
                },
                le = c.createContext({
                    gutters: !0
                }),
                ue = function (e) {
                    return "".concat(Math.round(e / 12 * 1e8) / 1e6, "%")
                },
                de = function (e) {
                    return function (n) {
                        var t = Object(ie.b)(e, function (e) {
                                return "flex" === e ? 0 : ue(e)
                            }),
                            r = Object(ie.b)(e, function (e) {
                                return "flex" === e ? 1 : 0
                            }),
                            o = Object(ie.b)(e, function (e) {
                                return "flex" === e ? "100%" : ue(e)
                            });
                        return Object(ie.a)(n, {
                            flexBasis: t,
                            flexGrow: r,
                            maxWidth: o
                        })
                    }
                },
                me = function (e) {
                    return function (n) {
                        var t = {
                                xs: n.grid.gutterSteps.xs * n.grid.xStep,
                                sm: n.grid.gutterSteps.sm * n.grid.xStep,
                                md: n.grid.gutterSteps.md * n.grid.xStep,
                                lg: n.grid.gutterSteps.lg * n.grid.xStep,
                                xl: n.grid.gutterSteps.xl * n.grid.xStep
                            },
                            r = e ? Object(ie.b)(t, function (e) {
                                return "".concat(e / 2, "px")
                            }) : "0px";
                        return Object(ie.a)(n, {
                            paddingLeft: r,
                            paddingRight: r
                        })
                    }
                },
                fe = function (e) {
                    var n = e.children,
                        t = e.size,
                        r = e.tag,
                        o = void 0 === r ? "div" : r;
                    void 0 === t && (t = "flex");
                    var i = c.useContext(le).gutters,
                        a = Object(ae.a)(),
                        s = [me(i), de(t)];
                    return c.createElement(o, {
                        className: a(s)
                    }, n)
                },
                pe = function (e) {
                    var n = e.alignItems,
                        t = void 0 === n ? "center" : n,
                        r = e.children,
                        o = e.direction,
                        i = void 0 === o ? "row" : o,
                        a = e.gutters,
                        s = void 0 === a || a,
                        l = e.justifyContent,
                        u = void 0 === l ? "center" : l,
                        d = e.tag,
                        m = void 0 === d ? "div" : d,
                        f = Object(ae.a)(),
                        p = function (e) {
                            var n = e.alignItems,
                                t = e.direction,
                                r = e.gutters,
                                o = e.justifyContent;
                            return function (e) {
                                var i = {
                                        xs: e.grid.gutterSteps.xs * e.grid.xStep,
                                        sm: e.grid.gutterSteps.sm * e.grid.xStep,
                                        md: e.grid.gutterSteps.md * e.grid.xStep,
                                        lg: e.grid.gutterSteps.lg * e.grid.xStep,
                                        xl: e.grid.gutterSteps.xl * e.grid.xStep
                                    },
                                    a = r ? Object(ie.b)(i, function (e) {
                                        return "-".concat(e / 2, "px")
                                    }) : 0;
                                return Object(ie.a)(e, {
                                    alignItems: n && Object(ie.b)(n, function (e) {
                                        return e
                                    }),
                                    display: "flex",
                                    flexDirection: t && Object(ie.b)(t, function (e) {
                                        return e
                                    }),
                                    flexWrap: "wrap",
                                    justifyContent: o && Object(ie.b)(o, function (e) {
                                        return e
                                    }),
                                    width: r ? Object(ie.b)(i, function (e) {
                                        return "calc(100% + ".concat(e, "px)")
                                    }) : "100%",
                                    marginLeft: a,
                                    marginRight: a
                                })
                            }
                        }({
                            alignItems: t,
                            direction: i,
                            gutters: s,
                            justifyContent: u
                        });
                    return c.createElement(le.Provider, {
                        value: {
                            gutters: s
                        }
                    }, c.createElement(m, {
                        className: f(p)
                    }, r))
                },
                he = function (e, n, t) {
                    return Object(F.a)(function (r) {
                        return {
                            font: e ? r.font.uiHeavy : r.font.uiRegular,
                            lineHeight: 18,
                            letterSpacing: t,
                            display: "block",
                            clamp: n
                        }
                    })
                },
                ge = function (e, n, t) {
                    return function (r) {
                        var o = "light";
                        return t && (o = "normal"), n && (o = "lighter"), e && !n && (o = "light"), {
                            color: r.baseColor.text[o],
                            fill: r.baseColor.fill[o]
                        }
                    }
                },
                be = {
                    textTransform: "uppercase"
                };

            function ve(e) {
                var n = e.children,
                    t = e.tag,
                    r = void 0 === t ? "span" : t,
                    i = e.strong,
                    a = void 0 !== i && i,
                    s = e.lighter,
                    l = void 0 !== s && s,
                    u = e.darker,
                    d = void 0 !== u && u,
                    m = e.clamp,
                    f = e.letterSpacing,
                    p = [he(a, m, f), ge(a, l, d), be],
                    h = r;
                return c.createElement(o.a, null, function (e) {
                    return c.createElement(h, {
                        className: e(p)
                    }, n)
                })
            }
            var xe = Object(F.a)(function (e) {
                    return {
                        font: e.font.uiHeavy,
                        fontSize: 15,
                        lineHeight: 16
                    }
                }),
                Ee = function (e) {
                    return {
                        color: e.baseColor.text.normal,
                        fill: e.baseColor.fill.normal,
                        borderBottom: "1px solid ".concat(e.baseColor.border.light),
                        paddingBottom: "8px",
                        textTransform: "uppercase"
                    }
                },
                ye = function (e) {
                    var n = e.tag,
                        t = void 0 === n ? "h1" : n,
                        r = e.children,
                        i = t,
                        a = [xe, Ee];
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(i, {
                            className: e(a)
                        }, r)
                    })
                },
                je = t("./src/framework/design-system/util/type/headingSizeRule.js"),
                _e = t("./src/styles/breakpoints.js"),
                we = function (e) {
                    return {
                        color: e.baseColor.text.normal,
                        fill: e.baseColor.fill.normal
                    }
                },
                ke = function (e, n, t) {
                    if (!n) return {};
                    var r = {};
                    return r[e(t)] = Object(je.a)(n), r
                },
                Se = function (e) {
                    var n = e.children,
                        t = e.size,
                        r = e.lgSize,
                        i = e.mdSize,
                        a = e.smSize,
                        s = e.tag,
                        l = void 0 === s ? t : s;
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(m.a, null, function (o) {
                            return c.createElement(l, {
                                className: e([we, Object(je.a)(t), ke(_e.lg, r, o), ke(_e.md, i, o), ke(_e.sm, a, o)])
                            }, n)
                        })
                    })
                },
                Ce = function (e) {
                    return {
                        color: e.baseColor.text.normal,
                        fill: e.baseColor.fill.normal
                    }
                },
                Oe = function (e, n, t) {
                    if (!n) return {};
                    var r = {};
                    return r[e(t)] = Object(je.b)(n), r
                },
                Ie = function (e) {
                    var n = e.children,
                        t = e.size,
                        r = e.smSize,
                        i = e.tag,
                        a = void 0 === i ? t : i,
                        s = e.textAlign,
                        l = a,
                        u = {
                            textAlign: s || "inherit"
                        };
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(m.a, null, function (o) {
                            return c.createElement(l, {
                                className: e([Ce, Object(je.b)(t), Oe(_e.sm, r, o), u])
                            }, n)
                        })
                    })
                },
                Ae = function (e) {
                    return function (n) {
                        return e ? {
                            color: n.baseColor.text.dark,
                            fill: n.baseColor.fill.dark
                        } : {
                            color: n.baseColor.text.normal,
                            fill: n.baseColor.fill.normal
                        }
                    }
                },
                Le = function (e) {
                    var n = e.children,
                        t = e.size,
                        r = e.tag,
                        i = void 0 === r ? t : r,
                        a = e.textAlign,
                        s = e.clamp,
                        l = e.dark,
                        u = i,
                        d = {
                            textAlign: a || "inherit"
                        };
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(u, {
                            className: e([Ae(l), d, Object(je.c)(t, function (e) {
                                return e.font.uiHeavy
                            }, s)])
                        }, n)
                    })
                };

            function Ne(e) {
                var n = e.tag,
                    t = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return c.createElement(Le, {
                    tag: n,
                    size: "h1",
                    textAlign: r,
                    clamp: o
                }, t)
            }

            function Te(e) {
                var n = e.tag,
                    t = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return c.createElement(Le, {
                    tag: n,
                    size: "h2",
                    textAlign: r,
                    clamp: o
                }, t)
            }

            function Pe(e) {
                var n = e.tag,
                    t = e.children,
                    r = e.textAlign,
                    o = e.clamp;
                return c.createElement(Le, {
                    tag: n,
                    size: "h3",
                    textAlign: r,
                    clamp: o
                }, t)
            }

            function Re(e) {
                var n = e.tag,
                    t = e.children,
                    r = e.textAlign,
                    o = e.clamp,
                    i = e.dark;
                return c.createElement(Le, {
                    tag: n,
                    size: "h4",
                    textAlign: r,
                    clamp: o,
                    dark: i
                }, t)
            }
            var Ue = function (e) {
                function n(e) {
                    var t;
                    return S()(this, n), t = A()(this, N()(n).call(this, e)), B()(U()(U()(t)), "mouseEnter", function (e) {
                        t.timeout && clearTimeout(t.timeout), t.props.onMouseEnter(e)
                    }), B()(U()(U()(t)), "mouseLeave", function (e) {
                        t.timeout = setTimeout(function () {
                            return t.props.onMouseLeave(e)
                        }, t.props.mouseLeaveDelay)
                    }), t.mouseEnter = t.mouseEnter.bind(U()(U()(t))), t.mouseLeave = t.mouseLeave.bind(U()(U()(t))), t
                }
                return P()(n, e), O()(n, [{
                    key: "render",
                    value: function () {
                        return c.createElement("div", {
                            onMouseEnter: this.mouseEnter,
                            onMouseLeave: this.mouseLeave
                        }, this.props.children)
                    }
                }]), n
            }(c.Component);
            B()(Ue, "defaultProps", {
                mouseLeaveDelay: 0
            });
            var Me = function (e) {
                    return function (n) {
                        return ne()({
                            color: "inherit",
                            fill: "inherit",
                            fontSize: "inherit"
                        }, e ? {
                            border: "inherit"
                        } : {}, {
                            fontFamily: "inherit",
                            letterSpacing: "inherit",
                            fontWeight: "inherit",
                            padding: 0,
                            margin: 0,
                            ":hover": {
                                cursor: "pointer"
                            },
                            ":focus": {
                                outline: "none"
                            },
                            ":disabled": {
                                cursor: "default",
                                color: n.baseColor.text.lighter,
                                fill: n.baseColor.fill.lighter
                            }
                        })
                    }
                },
                Be = function (e) {
                    return e ? {
                        display: e
                    } : {}
                },
                De = {
                    INLINE: {
                        SUBTLE: function (e) {
                            return {
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }
                        },
                        OBVIOUS: function (e) {
                            return {
                                textDecoration: "underline"
                            }
                        }
                    },
                    STANDALONE: {
                        SUBTLE: function (e) {
                            return {
                                ":hover": {
                                    color: e.baseColor.text.dark,
                                    fill: e.baseColor.fill.dark
                                }
                            }
                        },
                        OBVIOUS: function (e) {
                            return {
                                color: e.accentColor.text.normal,
                                fill: e.accentColor.fill.normal,
                                ":hover": {
                                    color: e.accentColor.text.dark,
                                    fill: e.accentColor.fill.dark
                                },
                                ":disabled": {
                                    color: e.accentColor.fillTransparent.light,
                                    fill: e.accentColor.fillTransparent.light
                                }
                            }
                        }
                    }
                },
                He = function (e) {
                    var n = e.display,
                        t = e.inline,
                        r = void 0 !== t && t,
                        i = e.linkStyle,
                        a = void 0 === i ? "SUBTLE" : i,
                        s = e.inheritBorder,
                        l = void 0 === s || s,
                        u = Z()(e, ["display", "inline", "linkStyle", "inheritBorder"]),
                        d = r ? "INLINE" : "STANDALONE",
                        m = [Me(l), De[d][a], Be(n)];
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(W.a, $()({
                            className: e(m)
                        }, u))
                    })
                },
                Fe = t("./src/framework/design-system/components/Popover.jsx"),
                ze = function (e) {
                    function n(e) {
                        var t;
                        return S()(this, n), t = A()(this, N()(n).call(this, e)), B()(U()(U()(t)), "onMouseEnter", function (e) {
                            t.props.onMouseEnter && t.props.onMouseEnter(e), t.setState({
                                isHovered: !0
                            })
                        }), B()(U()(U()(t)), "onMouseLeave", function (e) {
                            t.props.onMouseLeave && t.props.onMouseLeave(e), t.setState({
                                isHovered: !1
                            })
                        }), t.onMouseEnter = t.onMouseEnter.bind(U()(U()(t))), t.onMouseLeave = t.onMouseLeave.bind(U()(U()(t))), t.state = {
                            isHovered: !1
                        }, t
                    }
                    return P()(n, e), O()(n, [{
                        key: "render",
                        value: function () {
                            var e = this.props,
                                n = e.isVisible,
                                t = e.darkTheme,
                                r = e.hide,
                                o = e.noArrow,
                                i = e.placement,
                                a = e.targetDistance,
                                s = e.popoverRenderFn,
                                l = e.mouseLeaveDelay,
                                u = e.children,
                                d = this.state.isHovered;
                            return c.createElement(Ue, {
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                mouseLeaveDelay: l
                            }, c.createElement(Fe.a, {
                                isVisible: n && d,
                                darkTheme: t,
                                hide: r,
                                noArrow: o,
                                noPortal: !0,
                                placement: i,
                                popoverRenderFn: s,
                                targetDistance: a
                            }, u))
                        }
                    }]), n
                }(c.Component);
            B()(ze, "defaultProps", {
                isVisible: !0,
                hide: function () {},
                noArrow: !1,
                onMouseEnter: function () {},
                onMouseLeave: function () {},
                mouseLeaveDelay: 1e3
            });
            var Ve = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                qe = t.n(Ve),
                We = t("./node_modules/@babel/runtime/helpers/typeof.js"),
                Ge = t.n(We),
                Ye = t("./src/framework/design-system/components/portal/Portal.jsx"),
                Ke = function (e) {
                    return ! function (e) {
                        return (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && document.activeElement === e || e.contains(document.activeElement)
                    }(e, !0) && (e.focus(), !0)
                },
                Xe = t("./src/styles/zIndex.js"),
                Qe = function (e) {
                    return {
                        position: "fixed",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        zIndex: Xe.a.modal
                    }
                },
                $e = {
                    "0%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: 0
                    }
                },
                Je = {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    }
                },
                Ze = function (e) {
                    function n() {
                        return S()(this, n), A()(this, N()(n).apply(this, arguments))
                    }
                    return P()(n, e), O()(n, [{
                        key: "componentDidUpdate",
                        value: function () {
                            this.focusRef()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            this.focusRef()
                        }
                    }, {
                        key: "focusRef",
                        value: function () {
                            this.ref && Ke(this.ref)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                n = this.props,
                                t = n.children,
                                r = n.container,
                                i = n.isVisible,
                                a = n.onClick,
                                s = n.onKeyDown,
                                l = n.rules,
                                u = n.withAnimation;
                            return c.createElement(Ye.a, {
                                container: r
                            }, c.createElement(o.a, null, function (n) {
                                return c.createElement(d, {
                                    keyframes: {
                                        animation: i ? Je : $e
                                    }
                                }, function (r) {
                                    var o, i = r.animation;
                                    return c.createElement("div", {
                                        className: n(u ? [l, Qe, (o = i, {
                                            animation: "".concat(o, " 300ms forwards cubic-bezier(.25, .1, .25, 1)")
                                        })] : [l, Qe]),
                                        onClick: a,
                                        onKeyDown: s,
                                        tabIndex: "-1",
                                        ref: function (n) {
                                            return e.ref = n
                                        },
                                        "aria-modal": "true"
                                    }, t)
                                })
                            }))
                        }
                    }]), n
                }(c.Component);
            B()(Ze, "defaultProps", {
                onClick: function () {
                    return null
                },
                onKeyDown: function () {
                    return null
                }
            });
            var en = t("./src/framework/design-system/util/events.js"),
                nn = function (e) {
                    return {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: e.baseColor.overlay.dark,
                        overflowX: "hidden",
                        overflowY: "auto"
                    }
                },
                tn = function (e) {
                    return {
                        padding: "".concat(e.grid.columnWidth, "px"),
                        marginTop: "auto",
                        marginBottom: "auto"
                    }
                },
                rn = {
                    "0%": {
                        opacity: 0
                    },
                    "25%": {
                        transform: "scale(.9)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                },
                on = {
                    "0%": {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    "25%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 0,
                        transform: "scale(.9)"
                    }
                };

            function an(e) {
                "undefined" !== !("undefined" == typeof document || Ge()(document)) && (document.documentElement && document.documentElement.style && (document.documentElement.style.overflowY = e ? "hidden" : ""))
            }
            var cn = function (e) {
                    var n = e.children,
                        t = e.hide,
                        r = e.isVisible,
                        i = e.withCloseButton,
                        a = void 0 === i || i,
                        s = e.withAnimation,
                        l = void 0 !== s && s,
                        u = c.useState(!1),
                        m = qe()(u, 2),
                        f = m[0],
                        h = m[1];
                    return c.useEffect(function () {
                        r && l && h(!0)
                    }, [r, l]), c.useEffect(function () {
                        return an(r),
                            function () {
                                an(!1)
                            }
                    }, [r]), r || f ? c.createElement(Ze, {
                        rules: nn,
                        isVisible: r,
                        onClick: function (e) {
                            return Object(en.a)(t, e)
                        },
                        onKeyDown: function (e) {
                            return Object(en.b)(t, e)
                        },
                        withAnimation: l
                    }, c.createElement(o.a, null, function (e) {
                        return l ? c.createElement(d, {
                            keyframes: {
                                animation: r ? rn : on
                            }
                        }, function (t) {
                            var o, i = t.animation;
                            return c.createElement("div", {
                                className: e([tn, (o = i, function () {
                                    return {
                                        transformOrigin: "bottom center",
                                        animation: "".concat(o, " 300ms forwards cubic-bezier(.25, .1, .25, 1)")
                                    }
                                })]),
                                onAnimationEnd: function () {
                                    r || h(!1)
                                }
                            }, n)
                        }) : c.createElement("div", {
                            className: e(tn)
                        }, n)
                    }), a && c.createElement(p.a, {
                        display: "flex",
                        alignSelf: "flex-start"
                    }, c.createElement(p.a, {
                        position: "absolute",
                        top: "100px",
                        right: "200px",
                        sm: {
                            top: "0px",
                            right: "0px"
                        },
                        md: {
                            top: "100px",
                            right: "40px"
                        },
                        lg: {
                            right: "100px"
                        }
                    }, c.createElement(w, {
                        onClick: t,
                        size: "LARGE"
                    })))) : null
                },
                sn = t("./src/framework/design-system/components/SvgButton.jsx");

            function ln() {
                return (ln = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var un = s.a.createElement("g", {
                    fillRule: "evenodd"
                }, s.a.createElement("path", {
                    d: "M13 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-12 0a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
                }), s.a.createElement("path", {
                    d: "M4.81 5.74h1.6c.03-.65.47-1.07 1.15-1.07.66 0 1.11.4 1.11.94s-.23.82-.98 1.27c-.81.48-1.14 1-1.06 1.94l.01.33H8.2v-.31c0-.57.22-.85 1-1.3.83-.5 1.26-1.1 1.26-1.99 0-1.35-1.11-2.28-2.79-2.28-1.8 0-2.82 1-2.85 2.47zm2.67 6.24c.66 0 1.06-.39 1.06-1 0-.62-.4-1-1.06-1s-1.07.38-1.07 1c0 .61.41 1 1.07 1z"
                })),
                dn = function (e) {
                    return s.a.createElement("svg", ln({
                        width: 15,
                        height: 15,
                        viewBox: "0 0 15 15"
                    }, e), un)
                },
                mn = function (e) {
                    function n(e) {
                        var t;
                        return S()(this, n), t = A()(this, N()(n).call(this, e)), B()(U()(U()(t)), "onTouchStart", function (e) {
                            t.setState({
                                isClicked: !0
                            })
                        }), B()(U()(U()(t)), "hideDialog", function () {
                            t.setState({
                                isClicked: !1
                            })
                        }), t.onTouchStart = t.onTouchStart.bind(U()(U()(t))), t.hideDialog = t.hideDialog.bind(U()(U()(t))), t.state = {
                            isClicked: !1
                        }, t
                    }
                    return P()(n, e), O()(n, [{
                        key: "render",
                        value: function () {
                            var e = this.props,
                                n = e.mouseLeaveDelay,
                                t = e.placement,
                                r = e.tooltipContents;
                            return c.createElement(p.a, {
                                display: "inline"
                            }, c.createElement(ze, {
                                mouseLeaveDelay: n,
                                placement: t,
                                popoverRenderFn: function () {
                                    return c.createElement(p.a, {
                                        maxWidth: "250px",
                                        padding: "18px"
                                    }, r())
                                },
                                noArrow: !0
                            }, c.createElement(sn.a, {
                                onTouchStart: this.onTouchStart
                            }, c.createElement(dn, null))), c.createElement(cn, {
                                isVisible: this.state.isClicked,
                                hide: this.hideDialog
                            }, c.createElement(p.a, {
                                height: "100vh",
                                padding: "102px 82px",
                                sm: {
                                    padding: "64px 0",
                                    margin: "0 -32px"
                                }
                            }, c.createElement(p.a, {
                                position: "absolute",
                                top: "18px",
                                right: "18px"
                            }, c.createElement(sn.a, {
                                onClick: this.hideDialog
                            }, c.createElement(x.a, null))), r())))
                        }
                    }]), n
                }(c.Component);
            B()(mn, "defaultProps", {
                mouseLeaveDelay: 250
            });
            var fn = function (e, n) {
                return ne()({}, e, {
                    scale: ne()({}, e.scale, n)
                })
            };

            function pn(e) {
                var n = e.children,
                    t = Z()(e, ["children"]);
                return c.createElement(m.a, null, function (e) {
                    return c.createElement(r.a, {
                        theme: fn(e, t)
                    }, n)
                })
            }
            var hn = function (e) {
                    return {
                        color: e.baseColor.text.lighter,
                        fill: e.baseColor.fill.lighter
                    }
                },
                gn = function (e, n, t) {
                    return Object(F.a)(function (r) {
                        return {
                            font: n ? r.font.uiHeavy : r.font.uiRegular,
                            lineHeight: Object(f.a)(r),
                            clamp: e,
                            breakWord: t,
                            display: "block"
                        }
                    })
                };

            function bn(e) {
                var n = e.children,
                    t = e.tag,
                    r = void 0 === t ? "p" : t,
                    i = e.clamp,
                    a = e.bold,
                    s = e.breakWord,
                    l = r,
                    u = [hn, gn(i, a, void 0 === s || s)];
                return c.createElement(o.a, null, function (e) {
                    return c.createElement(l, {
                        className: e(u)
                    }, n)
                })
            }
            var vn = function (e) {
                    var n = e.columns,
                        t = e.spacing,
                        r = e.bordered,
                        i = [_n[t]];
                    return r && i.push(wn), c.createElement(o.a, null, function (e) {
                        return c.createElement("thead", {
                            className: e(yn)
                        }, c.createElement("tr", null, n.map(function (n, t) {
                            return c.createElement("th", {
                                key: t,
                                className: e(i)
                            }, n.name)
                        })))
                    })
                },
                xn = function (e) {
                    var n = e.columns,
                        t = e.data,
                        r = e.spacing,
                        i = e.bordered,
                        a = e.striped,
                        s = e.hoverable,
                        l = [jn];
                    s && l.push(Sn), a && l.push(kn);
                    var u = [_n[r]];
                    return i && u.push(wn), c.createElement(o.a, null, function (e) {
                        return c.createElement("tr", {
                            className: e(l)
                        }, n && n.length ? n.map(function (n, r) {
                            return c.createElement("td", {
                                key: r,
                                className: e(u)
                            }, t[n.accessor])
                        }) : Object.keys(t).map(function (n, r) {
                            return c.createElement("td", {
                                key: r,
                                className: e(u)
                            }, t[n])
                        }))
                    })
                },
                En = function (e) {
                    return ne()({}, Object(F.a)(function (e) {
                        return {
                            font: e.font.uiRegular,
                            fontSize: 20,
                            lineHeight: 22
                        }
                    })(e), {
                        color: e.baseColor.text.lighter,
                        display: "table",
                        width: "100%",
                        borderCollapse: "collapse"
                    })
                },
                yn = function (e) {
                    return ne()({}, Object(F.a)(function (e) {
                        return {
                            font: e.font.uiHeavy,
                            fontSize: 20,
                            lineHeight: 22
                        }
                    })(e), {
                        color: e.baseColor.text.normal,
                        display: "table-header-group",
                        textAlign: "left",
                        borderBottom: "2px ".concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    })
                },
                jn = function (e) {
                    return {
                        borderBottom: "".concat(e.borderWidth, "px ").concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    }
                },
                _n = {
                    DEFAULT: function (e) {
                        return {
                            padding: "10px"
                        }
                    },
                    COMPACT: function (e) {
                        return {
                            padding: "4px"
                        }
                    },
                    COMFORTABLE: function (e) {
                        return {
                            padding: "16px"
                        }
                    }
                },
                wn = function (e) {
                    return {
                        border: "".concat(e.borderWidth, "px ").concat(e.borderStyle, " ").concat(e.baseColor.border.light)
                    }
                },
                kn = function (e) {
                    return {
                        ":nth-child(odd)": {
                            backgroundColor: e.baseColor.background.light
                        }
                    }
                },
                Sn = function (e) {
                    return {
                        ":hover": {
                            backgroundColor: e.baseColor.background.normal
                        },
                        ":nth-child(odd):hover": {
                            backgroundColor: e.baseColor.background.normal
                        }
                    }
                },
                Cn = function (e) {
                    var n = e.data,
                        t = e.columns,
                        r = e.spacing,
                        i = void 0 === r ? "DEFAULT" : r,
                        a = e.bordered,
                        s = void 0 !== a && a,
                        l = e.striped,
                        u = void 0 !== l && l,
                        d = e.hoverable,
                        m = void 0 !== d && d,
                        f = [En];
                    return s && f.push(wn), c.createElement(o.a, null, function (e) {
                        return c.createElement("table", {
                            className: e(f)
                        }, t && t.length && c.createElement(vn, {
                            spacing: i,
                            columns: t,
                            bordered: s
                        }), c.createElement("tbody", null, n.map(function (e, n) {
                            return c.createElement(xn, {
                                key: n,
                                columns: t,
                                data: e,
                                spacing: i,
                                bordered: s,
                                striped: u,
                                hoverable: m
                            })
                        })))
                    })
                },
                On = t("./node_modules/react-router/es/withRouter.js"),
                In = t("./node_modules/react-redux/es/index.js"),
                An = t("./src/util/navigation.js"),
                Ln = Object(On.a)(Object(In.b)(function (e) {
                    return {
                        currentHostname: e.navigation.hostname
                    }
                })(function (e) {
                    var n = e.href,
                        t = e.children,
                        r = e.location,
                        o = e.currentHostname;
                    return t(Object(An.d)(n, o, r))
                })),
                Nn = function (e) {
                    return {
                        borderBottom: "1px solid ".concat(e.baseColor.border.lighter)
                    }
                },
                Tn = {
                    listStyleType: "none",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflowX: "auto",
                    marginBottom: "-1px"
                },
                Pn = function (e) {
                    return function (n) {
                        return {
                            display: "inline-block",
                            lineHeight: "40px",
                            marginRight: "20px",
                            paddingBottom: "8px",
                            borderBottom: e ? "1px solid ".concat(n.baseColor.border.dark) : "none"
                        }
                    }
                },
                Rn = function (e) {
                    var n = e.items;
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement("nav", {
                            className: e(Nn)
                        }, c.createElement("ul", {
                            className: e(Tn)
                        }, n.map(function (n, t) {
                            var r = n.title,
                                o = n.href;
                            return c.createElement(Ln, {
                                key: t,
                                href: o
                            }, function (n) {
                                return c.createElement("li", {
                                    className: e(Pn(n))
                                }, c.createElement(q, {
                                    strong: n
                                }, c.createElement(He, {
                                    href: o
                                }, r)))
                            })
                        })))
                    })
                },
                Un = function (e) {
                    return {
                        marginRight: "5px"
                    }
                },
                Mn = function (e) {
                    var n = e.children,
                        t = e.checked,
                        r = e.onChange;
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(p.a, {
                            tag: "label",
                            display: "flex",
                            alignItems: "baseline"
                        }, c.createElement("input", {
                            className: e(Un),
                            type: "checkbox",
                            checked: t,
                            onChange: r
                        }), c.createElement(q, null, n))
                    })
                },
                Bn = t("./src/framework/design-system/type/index.js"),
                Dn = function (e) {
                    var n = e.checked,
                        t = (e.key, e.name),
                        r = e.onChange,
                        i = e.value,
                        a = e.content;
                    return c.createElement(o.a, null, function (e) {
                        return c.createElement(p.a, {
                            tag: "label",
                            display: "flex",
                            paddingBottom: "10px",
                            alignItems: "center"
                        }, c.createElement("input", {
                            type: "radio",
                            className: e(Hn),
                            checked: n,
                            onChange: r,
                            name: t,
                            value: i
                        }), c.createElement(p.a, {
                            paddingTop: "2px"
                        }, a || c.createElement(Bn.a, {
                            scale: "M"
                        }, i)))
                    })
                },
                Hn = function (e) {
                    return {
                        width: "16px",
                        height: "16px",
                        border: "solid 1px ".concat(e.baseColor.border.normal),
                        borderRadius: "100%",
                        marginRight: "4px"
                    }
                },
                Fn = function (e) {
                    var n = e.options,
                        t = e.onChange,
                        r = c.useState(0),
                        o = qe()(r, 2),
                        i = o[0],
                        a = o[1],
                        s = function (e, n) {
                            return function () {
                                a(n), t && t(e)
                            }
                        };
                    return c.createElement("div", null, n.map(function (e, n) {
                        return c.createElement("span", {
                            key: n
                        }, c.createElement(Dn, {
                            checked: i === n,
                            onChange: s(e.name, n),
                            name: e.name,
                            value: e.value,
                            content: e.content
                        }))
                    }))
                };
            var zn = function (e) {
                function n() {
                    var e, t;
                    S()(this, n);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return t = A()(this, (e = N()(n)).call.apply(e, [this].concat(o))), B()(U()(U()(t)), "handleConfirm", function () {
                        t.props.onConfirm(), t.props.hide()
                    }), t
                }
                return P()(n, e), O()(n, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            n = e.buttonStyle,
                            t = e.children,
                            r = e.isVisible,
                            o = e.hide,
                            i = e.titleText,
                            a = e.cancelText,
                            s = e.confirmText,
                            l = e.footer;
                        return c.createElement(cn, {
                            isVisible: r,
                            hide: o
                        }, c.createElement(p.a, {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }, c.createElement(Ne, null, i), c.createElement(p.a, {
                            paddingTop: "8px",
                            paddingBottom: "24px"
                        }, c.createElement(bn, null, t)), c.createElement(p.a, null, c.createElement(h.a, {
                            buttonStyle: n,
                            onClick: this.handleConfirm
                        }, s), c.createElement(p.a, {
                            paddingLeft: "8px",
                            display: "inline-block"
                        }, c.createElement(h.a, {
                            buttonStyle: "SUBTLE",
                            onClick: o
                        }, a))), l ? c.createElement(p.a, {
                            paddingTop: "48px"
                        }, c.createElement(q, null, l)) : null))
                    }
                }]), n
            }(c.Component);
            B()(zn, "defaultProps", {
                footer: null,
                buttonStyle: "OBVIOUS"
            });
            var Vn = t("./src/framework/design-system/components/portal/FloatingPortal.jsx"),
                qn = function () {
                    return {
                        "0%": {
                            transform: "translateX(-100%)"
                        },
                        "40%": {
                            transform: "translateX(0%)"
                        },
                        "60%": {
                            transform: "translateX(0%)"
                        },
                        "100%": {
                            transform: "translateX(100%)"
                        }
                    }
                },
                Wn = function (e) {
                    function n() {
                        return S()(this, n), A()(this, N()(n).apply(this, arguments))
                    }
                    return P()(n, e), O()(n, [{
                        key: "render",
                        value: function () {
                            return c.createElement(d, {
                                keyframes: {
                                    translateRight: qn
                                }
                            }, function (e) {
                                var n, t = e.translateRight;
                                return c.createElement(Vn.a, {
                                    rules: (n = t, function (e) {
                                        return {
                                            position: "fixed",
                                            top: "0",
                                            left: "0",
                                            right: "0",
                                            height: "2px",
                                            backgroundColor: e.accentColor.border.light,
                                            transform: "translateX(100%)",
                                            animation: "".concat(n, " 1s ease-in-out infinite"),
                                            animationDelay: ".8s"
                                        }
                                    }),
                                    zIndex: Xe.a.loading
                                })
                            })
                        }
                    }]), n
                }(c.Component),
                Gn = t("./src/framework/design-system/components/portal/ui/Toast.jsx"),
                Yn = t("./src/framework/design-system/components/util/VisibilityController.jsx");
            t.d(n, "H", function () {
                return r.a
            }), t.d(n, "L", function () {
                return o.a
            }), t.d(n, "M", function () {
                return d
            }), t.d(n, "N", function () {
                return m.a
            }), t.d(n, "a", function () {
                return f.b
            }), t.d(n, "b", function () {
                return p.a
            }), t.d(n, "c", function () {
                return h.a
            }), t.d(n, "g", function () {
                return w
            }), t.d(n, "d", function () {
                return q
            }), t.d(n, "f", function () {
                return W.a
            }), t.d(n, "i", function () {
                return X
            }), t.d(n, "C", function () {
                return oe
            }), t.d(n, "k", function () {
                return pe
            }), t.d(n, "l", function () {
                return fe
            }), t.d(n, "x", function () {
                return se
            }), t.d(n, "q", function () {
                return ve
            }), t.d(n, "r", function () {
                return ye
            }), t.d(n, "s", function () {
                return Se
            }), t.d(n, "t", function () {
                return Ie
            }), t.d(n, "m", function () {
                return Ne
            }), t.d(n, "n", function () {
                return Te
            }), t.d(n, "o", function () {
                return Pe
            }), t.d(n, "p", function () {
                return Re
            }), t.d(n, "u", function () {
                return Ue
            }), t.d(n, "v", function () {
                return He
            }), t.d(n, "y", function () {
                return Fe.a
            }), t.d(n, "J", function () {
                return ze
            }), t.d(n, "z", function () {
                return mn
            }), t.d(n, "B", function () {
                return pn
            }), t.d(n, "D", function () {
                return bn
            }), t.d(n, "E", function () {
                return sn.a
            }), t.d(n, "G", function () {
                return Cn
            }), t.d(n, "F", function () {
                return Rn
            }), t.d(n, "e", function () {
                return Mn
            }), t.d(n, "A", function () {
                return Fn
            }), t.d(n, "h", function () {
                return zn
            }), t.d(n, "j", function () {
                return cn
            }), t.d(n, "w", function () {
                return Wn
            }), t.d(n, "I", function () {
                return Gn.a
            }), t.d(n, "K", function () {
                return Yn.a
            })
        },
        "./src/framework/design-system/components/portal/FloatingPortal.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                p = t.n(f),
                h = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                g = t.n(h),
                b = t("./node_modules/react/index.js"),
                v = t("./src/framework/design-system/components/index.js"),
                x = t("./src/framework/design-system/components/portal/Portal.jsx"),
                E = function e(n, t) {
                    var r = this;
                    o()(this, e), g()(this, "complete", function () {
                        r.pause(), r.completed = !0, r.onComplete()
                    }), g()(this, "resume", function () {
                        if (!(r.resumedAt || r.timeoutId || r.completed)) {
                            var e = r.duration - r.elapsed;
                            e <= 0 ? r.complete() : (r.resumedAt = Date.now(), r.timeoutId = setTimeout(r.complete, e))
                        }
                    }), g()(this, "pause", function () {
                        r.timeoutId && !r.completed && (r.elapsed += Date.now() - r.resumedAt, clearTimeout(r.timeoutId), r.resumedAt = 0, delete r.timeoutId)
                    }), g()(this, "setDuration", function (e) {
                        e !== r.duration && (r.duration = e, r.timeoutId && (r.pause(), r.resume()))
                    }), this.resumedAt = 0, this.elapsed = 0, this.duration = n, this.completed = !1, this.onComplete = t
                },
                y = function (e) {
                    function n(e) {
                        var t;
                        return o()(this, n), t = s()(this, u()(n).call(this, e)), g()(p()(p()(t)), "onComplete", function () {
                            t.props.onComplete()
                        }), t.timer = new E(e.duration, t.onComplete), t
                    }
                    return m()(n, e), a()(n, [{
                        key: "componentDidMount",
                        value: function () {
                            this.timer.resume()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.timer.pause()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            e.duration !== this.props.duration && this.timer.setDuration(e.duration)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.timer,
                                n = this.props.children,
                                t = n && n(e);
                            return t || null
                        }
                    }]), n
                }(b.Component),
                j = t("./src/styles/zIndex.js");
            t.d(n, "a", function () {
                return _
            });
            var _ = function (e) {
                function n() {
                    var e, t;
                    o()(this, n);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return t = s()(this, (e = u()(n)).call.apply(e, [this].concat(i))), g()(p()(p()(t)), "onMouseEnter", function () {
                        t.timer && t.timer.pause()
                    }), g()(p()(p()(t)), "onMouseLeave", function () {
                        t.timer && t.timer.resume()
                    }), t
                }
                return m()(n, e), a()(n, [{
                    key: "render",
                    value: function () {
                        var e = this,
                            n = this.props,
                            t = n.children,
                            r = n.container,
                            o = n.duration,
                            i = n.onComplete,
                            a = n.rules,
                            c = n.zIndex,
                            s = b.createElement(x.a, {
                                container: r
                            }, b.createElement(v.L, null, function (n) {
                                return b.createElement("div", {
                                    className: n([a, {
                                        zIndex: c
                                    }]),
                                    ref: function (n) {
                                        return e.ref = n
                                    },
                                    onMouseEnter: e.onMouseEnter,
                                    onMouseLeave: e.onMouseLeave
                                }, t)
                            }));
                        return o && i ? b.createElement(y, {
                            duration: o,
                            onComplete: i
                        }, function (n) {
                            return e.timer = n, s
                        }) : s
                    }
                }]), n
            }(b.Component);
            g()(_, "defaultProps", {
                zIndex: j.a.floating
            })
        },
        "./src/framework/design-system/components/portal/PopoverPortal.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return E
            });
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                p = t.n(f),
                h = t("./node_modules/react/index.js"),
                g = t("./src/framework/design-system/components/index.js"),
                b = t("./src/framework/design-system/components/portal/Portal.jsx"),
                v = t("./src/styles/zIndex.js"),
                x = function (e, n) {
                    return function (t) {
                        return {
                            position: "absolute",
                            top: "0",
                            bottom: e ? "unset" : "0",
                            left: "0",
                            right: e ? "unset" : "0",
                            zIndex: n || v.a.metabar,
                            ":focus": {
                                outline: "none"
                            }
                        }
                    }
                },
                E = function (e) {
                    function n() {
                        return o()(this, n), s()(this, u()(n).apply(this, arguments))
                    }
                    return m()(n, e), a()(n, [{
                        key: "render",
                        value: function () {
                            var e = this.props,
                                n = e.children,
                                t = e.customZIndex,
                                r = e.disableOverlay,
                                o = e.onClick,
                                i = e.onKeyDown;
                            return h.createElement(b.a, null, h.createElement(g.L, null, function (e) {
                                return h.createElement("div", {
                                    className: e(x(r, t)),
                                    onClick: o,
                                    onKeyDown: i,
                                    tabIndex: "-1"
                                }, n)
                            }))
                        }
                    }]), n
                }(h.Component);
            p()(E, "defaultProps", {
                onClick: function () {
                    return null
                },
                onKeyDown: function () {
                    return null
                }
            })
        },
        "./src/framework/design-system/components/portal/Portal.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return v
            });
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                p = t.n(f),
                h = t("./node_modules/react/index.js"),
                g = t("./node_modules/react-dom/index.js"),
                b = t.n(g),
                v = (t("./src/log/index.js"), function (e) {
                    function n(e) {
                        var t;
                        return o()(this, n), (t = s()(this, u()(n).call(this, e))).portalEl = document.createElement("div"), t
                    }
                    return m()(n, e), a()(n, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props.container;
                            e && e.appendChild(this.portalEl)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            var e = this.props.container;
                            e && e.removeChild(this.portalEl)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            0
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return b.a.createPortal(this.props.children, this.portalEl)
                        }
                    }]), n
                }(h.Component));
            p()(v, "defaultProps", {
                container: "undefined" == typeof document ? null : document.body
            })
        },
        "./src/framework/design-system/components/portal/ui/Toast.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                p = t.n(f),
                h = t("./node_modules/react/index.js"),
                g = t("./src/framework/design-system/components/index.js"),
                b = t("./src/framework/design-system/components/portal/FloatingPortal.jsx"),
                v = t("./src/svg/x-25px.svg");

            function x(e) {
                var n = e.children,
                    t = e.hide;
                return h.createElement(g.b, {
                    display: "flex",
                    alignItems: "center"
                }, h.createElement(g.b, {
                    flexGrow: "1",
                    flexBasis: "0",
                    paddingLeft: "4px",
                    paddingRight: "4px"
                }, n), h.createElement(g.b, {
                    paddingLeft: "16px"
                }, h.createElement(g.d, null, h.createElement(g.v, {
                    onClick: t,
                    display: "block"
                }, h.createElement(g.b, {
                    tag: v.a
                })))))
            }
            var E = t("./src/components/privacy/EuPrivacyBannerLoader.js"),
                y = t("./node_modules/react-redux/es/index.js"),
                j = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                _ = t("./src/framework/reporter/index.js"),
                w = t("./src/util/routes.js"),
                k = function (e) {
                    return Object(j.a)(e, {
                        maxWidth: "none",
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "640px",
                            lg: "640px",
                            xl: "640px"
                        },
                        left: {
                            xs: "initial",
                            sm: "initial",
                            md: "50%",
                            lg: "50%",
                            xl: "50%"
                        },
                        transform: {
                            xs: "none",
                            sm: "none",
                            md: "translateX(-50%)",
                            lg: "translateX(-50%)",
                            xl: "translateX(-50%)"
                        },
                        margin: {
                            xs: "0 8px",
                            sm: "0 8px",
                            md: "0",
                            lg: "0",
                            xl: "0"
                        },
                        backgroundColor: e.baseColor.overlay.dark,
                        padding: {
                            xs: "8px 0 8px 12px",
                            sm: "8px 0 8px 12px",
                            md: "12px 0 12px 24px",
                            lg: "12px 0 12px 24px",
                            xl: "12px 0 12px 24px"
                        }
                    })
                },
                S = Object(y.b)(function (e) {
                    return {
                        productName: e.config.productName
                    }
                })(function (e) {
                    e.children;
                    var n = e.hide,
                        t = e.productName,
                        r = Object(_.c)();
                    return h.useEffect(function () {
                        r.event("privacyBanner.shown", {})
                    }, []), h.createElement(g.b, {
                        display: "flex",
                        justifyContent: "space-between"
                    }, h.createElement(g.B, {
                        ui: "SMALL"
                    }, h.createElement(g.a, null, "To make ", t, " work, we log user data. By using ", t, ", you agree to our", " ", h.createElement(g.v, {
                        href: Object(w.X)(),
                        inline: !0,
                        linkStyle: "OBVIOUS",
                        target: "_blank"
                    }, "Privacy Policy"), ", including cookie policy.")), h.createElement(g.b, {
                        padding: "0 12px 12px",
                        sm: {
                            padding: "0 8px 8px"
                        }
                    }, h.createElement(g.g, {
                        onClick: function () {
                            n(), E.a.set(E.c, 1), r.event("privacyBanner.accepted", {})
                        },
                        isPositionAbsolute: !1,
                        size: "SMALL"
                    })))
                }),
                C = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                O = t.n(C),
                I = t("./node_modules/react-apollo/react-apollo.esm.js"),
                A = t("./node_modules/graphql-tag/src/index.js"),
                L = t.n(A),
                N = t("./src/store/actions/navigation.js"),
                T = t("./src/components/session/WithViewer.jsx");

            function P() {
                var e = O()(["\n  mutation SendVerificationEmailMutation {\n    sendVerificationEmail\n  }\n"]);
                return P = function () {
                    return e
                }, e
            }
            var R = L()(P()),
                U = Object(y.b)()(function (e) {
                    var n = e.children,
                        t = e.dispatch;
                    return h.createElement(T.a, null, function (e) {
                        return h.createElement(I.b, {
                            mutation: R,
                            onCompleted: function (e) {
                                t(Object(N.j)({
                                    duration: "FOREVER",
                                    message: "",
                                    toastStyle: "SENT_VERIFICATION_EMAIL"
                                }))
                            }
                        }, function (e) {
                            return n({
                                mutate: e
                            })
                        })
                    })
                }),
                M = t("./src/framework/design-system/type/Detail.js"),
                B = function (e) {
                    return Object(j.a)(e, {
                        margin: {
                            xs: "0",
                            sm: "0",
                            md: "0",
                            lg: "0",
                            xl: "0"
                        },
                        left: {
                            xs: "50%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                            xl: "50%"
                        },
                        maxWidth: "none",
                        minWidth: "300px",
                        padding: "12px 20px",
                        transform: {
                            xs: "translateX(-50%)",
                            sm: "translateX(-50%)",
                            md: "translateX(-50%)",
                            lg: "translateX(-50%)",
                            xl: "translateX(-50%)"
                        },
                        width: {
                            xs: "auto",
                            sm: "420px",
                            md: "420px",
                            lg: "420px",
                            xl: "420px"
                        }
                    })
                },
                D = function () {
                    var e = Object(_.c)();
                    return h.useEffect(function () {
                        e.event("user.sendVerificationEmailButterShown", {})
                    }, []), h.createElement(g.b, {
                        display: "flex",
                        alignItems: "center",
                        xs: {
                            flexDirection: "column"
                        }
                    }, h.createElement(g.b, {
                        marginRight: "5px",
                        xs: {
                            marginRight: "0"
                        }
                    }, h.createElement(M.a, {
                        scale: "M"
                    }, "Complete your account registration.")), h.createElement(M.a, {
                        scale: "M"
                    }, h.createElement(U, null, function (n) {
                        var t = n.mutate;
                        return h.createElement(g.v, {
                            onClick: function () {
                                e.event("user.sendVerificationEmailButterClicked", {}), t()
                            },
                            linkStyle: "OBVIOUS"
                        }, "Send verification email")
                    })))
                },
                H = {
                    whiteSpace: "nowrap",
                    minWidth: "93px"
                },
                F = function (e) {
                    return Object(j.a)(e, {
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "auto",
                            lg: "auto",
                            xl: "auto"
                        }
                    })
                },
                z = function () {
                    return h.createElement(T.a, null, function (e) {
                        return h.createElement(g.b, {
                            textAlign: "center"
                        }, h.createElement(g.b, {
                            marginRight: "5px",
                            xs: {
                                marginRight: "0"
                            },
                            display: "inline-block"
                        }, h.createElement(M.a, {
                            scale: "M"
                        }, "Verification email sent to ", e && e.unverifiedEmail, ".")), h.createElement(g.b, {
                            display: "inline-block"
                        }, h.createElement(M.a, {
                            scale: "M"
                        }, h.createElement(g.v, {
                            href: Object(w.Ob)(),
                            linkStyle: "OBVIOUS",
                            target: "_blank"
                        }, h.createElement("span", {
                            style: H
                        }, "Change email")))))
                    })
                },
                V = t("./src/framework/design-system/util/style/converters.js"),
                q = t("./src/styles/zIndex.js"),
                W = t("./src/util/theme.js");
            t.d(n, "a", function () {
                return X
            });
            var G = function (e) {
                    return {
                        position: "fixed",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        maxWidth: "".concat(Object(V.a)(e, 8), "px"),
                        padding: "12px 24px",
                        borderRadius: "0 0 ".concat(e.borderRadius.regular, "px ").concat(e.borderRadius.regular, "px"),
                        backgroundColor: e.backgroundColor,
                        boxShadow: "0 0 2px ".concat(e.baseColor.border.light)
                    }
                },
                Y = function (e, n) {
                    switch (n) {
                        case "ERROR":
                            return Object(W.e)(e);
                        case "MESSAGE":
                        case "EU_PRIVACY_BANNER":
                        default:
                            return e
                    }
                },
                K = function (e) {
                    switch (e) {
                        case "EU_PRIVACY_BANNER":
                            return [G, k];
                        case "VERIFY_EMAIL":
                            return [G, B];
                        case "SENT_VERIFICATION_EMAIL":
                            return [G, B, F];
                        default:
                            return [G]
                    }
                },
                X = function (e) {
                    function n() {
                        return o()(this, n), s()(this, u()(n).apply(this, arguments))
                    }
                    return m()(n, e), a()(n, [{
                        key: "render",
                        value: function () {
                            var e, n = this.props,
                                t = n.children,
                                r = n.duration,
                                o = n.hide,
                                i = n.isVisible,
                                a = n.toastStyle;
                            if (!i) return null;
                            switch (a) {
                                case "EU_PRIVACY_BANNER":
                                    e = S;
                                    break;
                                case "VERIFY_EMAIL":
                                    e = D;
                                    break;
                                case "SENT_VERIFICATION_EMAIL":
                                    e = z;
                                    break;
                                case "ERROR":
                                case "MESSAGE":
                                default:
                                    e = x
                            }
                            return h.createElement(g.N, null, function (n) {
                                return h.createElement(g.H, {
                                    theme: Y(n, a)
                                }, h.createElement(b.a, {
                                    duration: r,
                                    onComplete: o,
                                    rules: K(a),
                                    zIndex: q.a.toast
                                }, h.createElement("div", null, h.createElement("div", {
                                    className: "branch-journeys-top"
                                }, h.createElement(e, {
                                    hide: o
                                }, t || null)))))
                            })
                        }
                    }]), n
                }(h.Component);
            p()(X, "defaultProps", {
                toastStyle: "MESSAGE"
            })
        },
        "./src/framework/design-system/components/util/VisibilityController.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return v
            });
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),
                p = t.n(f),
                h = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                g = t.n(h),
                b = t("./node_modules/react/index.js"),
                v = function (e) {
                    function n(e) {
                        var t;
                        return o()(this, n), t = s()(this, u()(n).call(this, e)), g()(p()(p()(t)), "show", function () {
                            t.setState({
                                isVisible: !0
                            })
                        }), g()(p()(p()(t)), "hide", function () {
                            t.setState({
                                isVisible: !1
                            })
                        }), g()(p()(p()(t)), "toggle", function () {
                            return t.state.isVisible ? t.hide() : t.show()
                        }), t.state = {
                            isVisible: e.initialVisibility || !1
                        }, t
                    }
                    return m()(n, e), a()(n, [{
                        key: "render",
                        value: function () {
                            var e = this.show,
                                n = this.hide,
                                t = this.toggle,
                                r = this.state.isVisible;
                            return this.props.children({
                                isVisible: r,
                                show: e,
                                hide: n,
                                toggle: t
                            })
                        }
                    }]), n
                }(b.Component)
        },
        "./src/framework/design-system/type/Body.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            t("./node_modules/react/index.js"), t("./src/framework/design-system/type/Type.js"), t("./src/framework/design-system/util/style/responsiveStyles.js");
            var r = {
                S: 28,
                M: 32
            }
        },
        "./src/framework/design-system/type/Detail.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return l
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/type/Type.js"),
                i = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                a = function (e) {
                    return function (n) {
                        return {
                            color: {
                                DARKER: n.baseColor.text.normal,
                                LIGHTER: n.baseColor.text.lighter,
                                ERROR: n.errorColor
                            } [e]
                        }
                    }
                },
                c = {
                    XS: 13,
                    S: 15,
                    M: 16,
                    L: 18
                },
                s = {
                    XS: 16,
                    S: 20,
                    M: 20,
                    L: 24
                },
                l = function (e) {
                    var n = e.scale,
                        t = e.color,
                        l = void 0 === t ? "LIGHTER" : t,
                        u = e.children,
                        d = e.tag,
                        m = e.clamp,
                        f = Object(i.d)(n, function (e) {
                            return c[e]
                        }),
                        p = Object(i.d)(n, function (e) {
                            return s[e]
                        });
                    return d || (d = "h4"), r.createElement(o.a, {
                        roleAndWeight: "INTERFACE",
                        fontSize: f,
                        lineHeight: p,
                        tag: d,
                        additionalRules: a(l),
                        clamp: m
                    }, u)
                }
        },
        "./src/framework/design-system/type/Heading.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return c
            }), t.d(n, "c", function () {
                return s
            }), t.d(n, "a", function () {
                return l
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/type/Type.js"),
                i = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                a = function (e) {
                    return {
                        color: e.baseColor.text.normal
                    }
                },
                c = {
                    INTERFACE_HEAVY: {
                        XS: 18,
                        S: 22,
                        M: 28,
                        L: 36,
                        XL: 48
                    },
                    MARKETING: {
                        XS: 18,
                        S: 24,
                        M: 28,
                        L: 32,
                        XL: 0
                    }
                },
                s = {
                    INTERFACE_HEAVY: {
                        XS: 20,
                        S: 28,
                        M: 36,
                        L: 40,
                        XL: 56
                    },
                    MARKETING: {
                        XS: 24,
                        S: 28,
                        M: 32,
                        L: 36,
                        XL: 0
                    }
                },
                l = function (e) {
                    var n = e.scale,
                        t = e.roleAndWeight,
                        l = void 0 === t ? "INTERFACE_HEAVY" : t,
                        u = e.children,
                        d = e.tag,
                        m = Object(i.d)(n, function (e) {
                            return c[l][e]
                        }),
                        f = Object(i.d)(n, function (e) {
                            return s[l][e]
                        });
                    return d || (d = "h2"), r.createElement(o.a, {
                        roleAndWeight: l,
                        fontSize: m,
                        lineHeight: f,
                        tag: d,
                        additionalRules: a
                    }, u)
                }
        },
        "./src/framework/design-system/type/Overline.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return l
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/type/Type.js"),
                i = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                a = function (e) {
                    return {
                        color: e.baseColor.text.lighter,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                    }
                },
                c = {
                    M: 15
                },
                s = {
                    M: 20
                },
                l = function (e) {
                    var n = e.children,
                        t = e.tag,
                        l = Object(i.d)("M", function (e) {
                            return c[e]
                        }),
                        u = Object(i.d)("M", function (e) {
                            return s[e]
                        });
                    return t || (t = "p"), r.createElement(o.a, {
                        roleAndWeight: "INTERFACE",
                        fontSize: l,
                        lineHeight: u,
                        tag: t,
                        additionalRules: a
                    }, n)
                }
        },
        "./src/framework/design-system/type/Title.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return l
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/type/Type.js"),
                i = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                a = function (e) {
                    return {
                        color: e.baseColor.text.normal
                    }
                },
                c = {
                    XS: 24,
                    S: 30,
                    M: 40,
                    L: 48,
                    XL: 66
                },
                s = {
                    XS: 32,
                    S: 40,
                    M: 48,
                    L: 60,
                    XL: 72
                },
                l = function (e) {
                    var n = e.scale,
                        t = e.children,
                        l = e.tag,
                        u = Object(i.d)(n, function (e) {
                            return c[e]
                        }),
                        d = Object(i.d)(n, function (e) {
                            return s[e]
                        });
                    return l || (l = "h2"), r.createElement(o.a, {
                        roleAndWeight: "TITLE",
                        fontSize: u,
                        lineHeight: d,
                        tag: l,
                        additionalRules: a
                    }, t)
                }
        },
        "./src/framework/design-system/type/Type.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/components/index.js"),
                i = t("./src/styles/font.js"),
                a = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                c = t("./src/framework/design-system/util/type/createClampRule.js"),
                s = function (e) {
                    var n = e.roleAndWeight,
                        t = e.fontSize,
                        s = e.lineHeight,
                        l = e.tag,
                        u = e.children,
                        d = e.additionalRules,
                        m = e.clamp,
                        f = l,
                        p = i.r[n],
                        h = function (e) {
                            var n = e.fontSize,
                                t = e.lineHeight;
                            return function (e) {
                                return Object(a.a)(e, {
                                    fontSize: Object(a.b)(n, function (e) {
                                        return "".concat(e, "px")
                                    }),
                                    lineHeight: Object(a.b)(t, function (e) {
                                        return "".concat(e, "px")
                                    })
                                })
                            }
                        }({
                            fontSize: t,
                            lineHeight: s
                        }),
                        g = m ? Object(c.a)({
                            clamp: m,
                            lineHeight: s
                        }) : void 0;
                    return r.createElement(o.L, null, function (e) {
                        return r.createElement(f, {
                            className: e([p, h, g, d])
                        }, u)
                    })
                }
        },
        "./src/framework/design-system/type/index.js": function (e, n, t) {
            "use strict";
            t("./src/framework/design-system/type/Body.js");
            var r = t("./src/framework/design-system/type/Detail.js"),
                o = t("./src/framework/design-system/type/Heading.js"),
                i = t("./src/framework/design-system/type/Overline.js"),
                a = t("./src/framework/design-system/type/Title.js"),
                c = t("./node_modules/react/index.js"),
                s = t("./src/framework/design-system/type/Type.js"),
                l = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                u = function (e) {
                    return {
                        color: e.baseColor.text.lighter
                    }
                },
                d = {
                    S: 16,
                    M: 18,
                    L: 24
                },
                m = {
                    S: 20,
                    M: 24,
                    L: 32
                },
                f = function (e) {
                    var n = e.scale,
                        t = e.children,
                        r = e.tag,
                        o = Object(l.d)(n, function (e) {
                            return d[e]
                        }),
                        i = Object(l.d)(n, function (e) {
                            return m[e]
                        });
                    return r || (r = "h3"), c.createElement(s.a, {
                        roleAndWeight: "INTERFACE",
                        fontSize: o,
                        lineHeight: i,
                        tag: r,
                        additionalRules: u
                    }, t)
                };
            t.d(n, "a", function () {
                return r.a
            }), t.d(n, "b", function () {
                return o.a
            }), t.d(n, "c", function () {
                return i.a
            }), t.d(n, "e", function () {
                return a.a
            }), t.d(n, "d", function () {
                return f
            })
        },
        "./src/framework/design-system/util/events.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            }), t.d(n, "b", function () {
                return o
            });
            var r = function (e, n) {
                    n.target === n.currentTarget && e(n)
                },
                o = function (e, n) {
                    27 === n.keyCode && e(n)
                }
        },
        "./src/framework/design-system/util/fonts.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = function () {
                    function e(n) {
                        var t = this,
                            r = n.family,
                            i = n.style,
                            a = n.weight,
                            c = n.metrics,
                            s = n.lineHeightToFontSize,
                            l = n.fontSizeToLetterSpacing,
                            u = void 0 === l ? function () {
                                return 0
                            } : l;
                        o()(this, e), this.family = r, this.style = i, this.weight = a, this.metrics = c, this.lineHeightToFontSize = s || function (e) {
                            return e / (t.ascender() - t.descender())
                        }, this.fontSizeToLetterSpacing = u
                    }
                    return a()(e, [{
                        key: "xHeight",
                        value: function () {
                            var e = this.metrics,
                                n = e.xHeight;
                            return n / e.unitsPerEm
                        }
                    }, {
                        key: "capHeight",
                        value: function () {
                            var e = this.metrics,
                                n = e.capHeight;
                            return n / e.unitsPerEm
                        }
                    }, {
                        key: "ascender",
                        value: function () {
                            var e = this.metrics,
                                n = e.ascender;
                            return n / e.unitsPerEm
                        }
                    }, {
                        key: "descender",
                        value: function () {
                            var e = this.metrics,
                                n = e.descender;
                            return n / e.unitsPerEm
                        }
                    }]), e
                }();

            function s(e) {
                var n = e.initialRatio,
                    t = e.finalRatio,
                    r = e.lowerBound,
                    o = e.upperBound,
                    i = e.easing,
                    a = void 0 === i ? function (e) {
                        return e
                    } : i;
                return function (e) {
                    var i = a(Math.min(1, Math.max(0, e - r) / (o - r)));
                    return e * (n + (t - n) * i)
                }
            }
            var l = t("./src/styles/font.js");
            t.d(n, "a", function () {
                return u
            }), t.d(n, "b", function () {
                return d
            }), t.d(n, "c", function () {
                return m
            }), t.d(n, "d", function () {
                return f
            });
            var u = new c({
                    family: l.n,
                    weight: 500,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    }
                }),
                d = new c({
                    family: l.e,
                    weight: 600,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    },
                    lineHeightToFontSize: s({
                        initialRatio: .9,
                        finalRatio: 1,
                        lowerBound: 32,
                        upperBound: 128
                    }),
                    fontSizeToLetterSpacing: function (e) {
                        return Math.min(-1 * (e - 14) / 24, 0)
                    }
                }),
                m = new c({
                    family: l.e,
                    weight: 400,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    },
                    lineHeightToFontSize: s({
                        initialRatio: .79,
                        finalRatio: .85,
                        lowerBound: 28,
                        upperBound: 96
                    })
                }),
                f = new c({
                    family: l.o,
                    weight: 500,
                    style: "normal",
                    metrics: {
                        unitsPerEm: 1e3,
                        xHeight: 453,
                        capHeight: 625,
                        ascender: 900,
                        descender: -300
                    }
                })
        },
        "./src/framework/design-system/util/style/converters.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return i
            }), t.d(n, "a", function () {
                return a
            });
            var r = t("./node_modules/lodash/round.js"),
                o = t.n(r),
                i = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return "".concat(o()(e, n), "px")
                },
                a = function (e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = (e.grid.columnWidth + e.grid.gutterWidth) * n - e.grid.gutterWidth;
                    return t && (r += 2 * e.grid.gutterWidth), r
                }
        },
        "./src/framework/design-system/util/style/responsiveStyles.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return m
            }), t.d(n, "d", function () {
                return f
            }), t.d(n, "b", function () {
                return p
            }), t.d(n, "c", function () {
                return h
            });
            var r = t("./node_modules/@babel/runtime/helpers/typeof.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = t.n(i),
                c = t("./node_modules/lodash/isPlainObject.js"),
                s = t.n(c),
                l = t("./src/styles/newBreakpoints.js"),
                u = new Set(["xs", "sm", "md", "lg", "xl"]),
                d = function (e) {
                    if (!s()(e)) return !1;
                    var n = Object.keys(e);
                    return n.length === u.size && n.every(function (e) {
                        return u.has(e)
                    })
                },
                m = function (e, n) {
                    for (var t = {}, r = Object.entries(n), i = 0; i < r.length; i++) {
                        var c = a()(r[i], 2),
                            s = c[0],
                            u = c[1];
                        if (d(u))
                            for (var m = Object.entries(u), f = 0; f < m.length; f++) {
                                var p = a()(m[f], 2),
                                    h = p[0],
                                    g = p[1],
                                    b = l[h](e);
                                if (t[b] = t[b] || {}, "object" === o()(t[b]) && t[b]) t[b][s] = g
                            } else t[s] = u
                    }
                    return t
                },
                f = function (e, n) {
                    if (!d(e)) return n(e);
                    for (var t = {}, r = Object.entries(e), o = 0; o < r.length; o++) {
                        var i = a()(r[o], 2),
                            c = i[0],
                            s = i[1];
                        t[c] = n(s)
                    }
                    return t
                },
                p = function (e, n) {
                    return f(e, n)
                };

            function h(e, n) {
                if (e.some(d)) {
                    var t = {};
                    return u.forEach(function (r) {
                        var o = e.map(function (e) {
                            return d(e) ? e[r] : e
                        });
                        t[r] = n(o)
                    }), t
                }
                return n(e)
            }
        },
        "./src/framework/design-system/util/type/createClampRule.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return a
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                a = function (e) {
                    var n = e.clamp,
                        t = e.lineHeight;
                    return function (e) {
                        return Object(i.a)(e, {
                            overflow: "hidden",
                            maxHeight: Object(i.c)([n, t], function (e) {
                                var n = o()(e, 2),
                                    t = n[0],
                                    r = n[1];
                                return "".concat(r * t, "px")
                            }),
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: Object(i.b)(n, function (e) {
                                return e
                            }),
                            WebkitBoxOrient: "vertical"
                        })
                    }
                }
        },
        "./src/framework/design-system/util/type/headingSizeRule.js": function (e, n, t) {
            "use strict";
            t.d(n, "c", function () {
                return s
            }), t.d(n, "b", function () {
                return l
            }), t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/lodash/assign.js"),
                o = t.n(r),
                i = t("./src/framework/design-system/util/type/toRule.js"),
                a = t("./src/framework/design-system/components/Body.jsx"),
                c = t("./src/framework/design-system/util/fonts.js"),
                s = function (e, n, t) {
                    return Object(i.a)(function (r) {
                        return {
                            font: n(r),
                            lineHeight: "h1" === e ? Object(a.a)(r) + r.grid.yStep * ("LARGE" === r.scale.ui ? 5 : 4) : "h2" === e ? Object(a.a)(r) + 2 * r.grid.yStep : "h3" === e ? Object(a.a)(r) + r.grid.yStep : Object(a.a)(r),
                            clamp: t,
                            display: "block"
                        }
                    })
                },
                l = function (e) {
                    var n = c.d,
                        t = {
                            fontFamily: n.family,
                            fontWeight: n.weight,
                            fontStyle: n.style
                        };
                    return o()(t, function (e) {
                        switch (e) {
                            case "h1":
                                return {
                                    fontSize: "52px", lineHeight: "60px", letterSpacing: "0em"
                                };
                            case "h2":
                                return {
                                    fontSize: "42px", lineHeight: "48px", letterSpacing: "0em"
                                };
                            case "h3":
                                return {
                                    fontSize: "32px", lineHeight: "36px", letterSpacing: "0em"
                                };
                            case "h4":
                            default:
                                return {
                                    fontSize: "24px", lineHeight: "28px", letterSpacing: "0em"
                                }
                        }
                    }(e))
                },
                u = function (e) {
                    var n = c.a,
                        t = {
                            fontFamily: n.family,
                            fontWeight: n.weight,
                            fontStyle: n.style
                        };
                    return o()(t, function (e) {
                        switch (e) {
                            case "h1":
                                return {
                                    fontSize: "56px", lineHeight: "64px", letterSpacing: "0em"
                                };
                            case "h2":
                                return {
                                    fontSize: "44px", lineHeight: "49px", letterSpacing: "0em"
                                };
                            case "h3":
                                return {
                                    fontSize: "32px", lineHeight: "36px", letterSpacing: "0em"
                                };
                            case "h4":
                            default:
                                return {
                                    fontSize: "24px", lineHeight: "32px", letterSpacing: "0em"
                                }
                        }
                    }(e))
                }
        },
        "./src/framework/design-system/util/type/toRule.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/lodash/round.js"),
                a = t.n(i),
                c = t("./src/framework/design-system/util/type/createClampRule.js");

            function s(e) {
                return function (n) {
                    var t = e(n),
                        r = t.clamp,
                        i = t.breakWord,
                        s = t.font,
                        l = t.display,
                        u = function (e, n) {
                            var t = n.lineHeight,
                                r = n.fontSize,
                                o = n.letterSpacing;
                            return {
                                lineHeight: t,
                                fontSize: r = void 0 === r ? e.lineHeightToFontSize(t) : r,
                                letterSpacing: o = void 0 === o ? e.fontSizeToLetterSpacing(r) : o
                            }
                        }(s, t),
                        d = u.lineHeight,
                        m = u.fontSize,
                        f = u.letterSpacing,
                        p = r ? Object(c.a)({
                            clamp: r,
                            lineHeight: d
                        })(n) : {},
                        h = {};
                    return i && (h = {
                        wordBreak: "break-word",
                        overflowWrap: "break-word"
                    }), o()({
                        fontFamily: s.family,
                        fontWeight: s.weight,
                        fontStyle: s.style,
                        lineHeight: "".concat(a()(d, 2), "px"),
                        fontSize: "".concat(a()(m, 2), "px"),
                        letterSpacing: "".concat(a()(f, 2), "px")
                    }, l && {
                        display: l
                    }, p, h)
                }
            }
            t.d(n, "a", function () {
                return s
            })
        },
        "./src/framework/reporter/ReporterContext.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            }), t.d(n, "c", function () {
                return l
            }), t.d(n, "b", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/util/invariant.js"),
                c = i.createContext(null),
                s = function (e) {
                    return i.createElement(c.Provider, {
                        value: e.reporter
                    }, e.children)
                },
                l = function (e) {
                    return function (n) {
                        return i.createElement(c.Consumer, null, function (t) {
                            return i.createElement(e, o()({}, n, {
                                reporter: t
                            }), n.children)
                        })
                    }
                },
                u = function () {
                    var e = i.useContext(c);
                    return Object(a.a)(!!e, "Expected reporter not to be null"), e
                }
        },
        "./src/framework/reporter/index.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                s = t.n(c),
                l = t("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
                u = t.n(l),
                d = t("./src/util/routes.js"),
                m = function () {
                    return Date.now().toString(36) + Math.round(1e16 * Math.random()).toString(36)
                },
                f = t("./node_modules/@babel/runtime/regenerator/index.js"),
                p = t.n(f),
                h = t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
                g = t.n(h),
                b = t("./src/util/LocalStorage.js"),
                v = "Lite_BatchReporter",
                x = function () {
                    function e(n) {
                        var t = this,
                            r = n.userId,
                            o = n.authDomain,
                            i = n.reduxStore;
                        a()(this, e), this._localStorage = new b.a(v), this._userId = r, this._authDomain = o, this._reduxStore = i, window.addEventListener("beforeunload", function () {
                            t.flush()
                        })
                    }
                    return s()(e, [{
                        key: "event",
                        value: function (e, n) {
                            return this._send({
                                key: e,
                                data: n,
                                type: "e"
                            })
                        }
                    }, {
                        key: "flush",
                        value: function () {
                            return this._sendNow({
                                beforeUnload: !0
                            })
                        }
                    }, {
                        key: "_send",
                        value: function () {
                            var e = g()(p.a.mark(function e(n) {
                                var t, r, i = this;
                                return p.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this._getCommonData(), n.data = o()({}, n.data || {}, t), r = m(), this._localStorage.set(r, o()({}, n, {
                                                    timestamp: Date.now(),
                                                    eventId: r,
                                                    userId: this._userId
                                                })), !this._sending) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, this._fetchPromise;
                                        case 7:
                                            return void 0 === this._fetchPromise && (this._fetchPromise = new Promise(function (e) {
                                                return setTimeout(function () {
                                                    return i._sendNow().then(e)
                                                }, 5e3)
                                            })), e.abrupt("return", this._fetchPromise);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_sendNow",
                        value: function () {
                            var e = this,
                                n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    beforeUnload: !1
                                }).beforeUnload,
                                t = this._localStorage.getItems(),
                                r = Object.values(t);
                            if (!r) return Promise.resolve();
                            var i = "".concat(this._authDomain || "").concat(Object(d.j)());
                            return this._sending = !0, u()(i, o()({
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "x-xsrf-token": "1",
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(r)
                            }, n ? {
                                mode: "same-origin",
                                keepalive: !0
                            } : {})).then(function (n) {
                                n.ok && Object.keys(t).forEach(function (n) {
                                    return e._localStorage.remove(n)
                                })
                            }).finally(function () {
                                delete e._fetchPromise, e._sending = !1
                            })
                        }
                    }, {
                        key: "_getCommonData",
                        value: function () {
                            var e = this._reduxStore.getState().navigation,
                                n = e.referrer,
                                t = e.referrerSource,
                                r = window ? window.location.href : void 0,
                                o = window ? window.innerWidth : void 0;
                            return {
                                userId: this._userId,
                                service: "lite",
                                location: r,
                                browserWidth: o,
                                referrer: n,
                                referrerSource: t
                            }
                        }
                    }]), e
                }(),
                E = t("./src/framework/reporter/ReporterContext.jsx");
            t("./src/framework/reporter/performance.jsx");
            t.d(n, "b", function () {
                return E.a
            }), t.d(n, "d", function () {
                return E.c
            }), t.d(n, "c", function () {
                return E.b
            }), t.d(n, "a", function () {
                return x
            })
        },
        "./src/framework/reporter/performance.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return y
            }), t.d(n, "a", function () {
                return j
            }), t.d(n, "c", function () {
                return _
            });
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                m = t.n(d),
                f = t("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
                p = t.n(f),
                h = t("./node_modules/opentracing/lib/index.js"),
                g = t("./node_modules/react/index.js"),
                b = t("./src/log/index.js"),
                v = t("./src/util/routes.js"),
                x = g.createContext(null),
                E = function (e) {
                    for (var n = {}, t = Object.keys(e), r = 0; r < t.length; r++) {
                        var o = t[r],
                            i = e[o];
                        null != i && (n[o] = i.duration)
                    }
                    return n
                },
                y = function () {
                    function e(n) {
                        var t = n.host,
                            r = n.version;
                        u()(this, e), this.baseURL = t ? "".concat(window.location.protocol, "//").concat(t) : "", this.version = r, this.parentSpan = null
                    }
                    return m()(e, [{
                        key: "reportRender",
                        value: function (e, n) {
                            this._send("render", s()({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: E(n)
                            }))
                        }
                    }, {
                        key: "reportInput",
                        value: function (e, n) {
                            this._send("input", s()({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: E(n)
                            }))
                        }
                    }, {
                        key: "reportClientReady",
                        value: function (e, n) {
                            this._send("client-ready", s()({}, e, {
                                version: this.version,
                                service: "lite",
                                metrics: E(n)
                            }))
                        }
                    }, {
                        key: "setParentSpan",
                        value: function (e) {
                            this.parentSpan = e
                        }
                    }, {
                        key: "_send",
                        value: function (e, n) {
                            var t = {
                                tags: a()({
                                    report: e,
                                    "component.version": n.version,
                                    "req.route_name": n.route
                                }, h.Tags.SPAN_KIND, h.Tags.SPAN_KIND_RPC_CLIENT)
                            };
                            null != this.parentSpan && (t.childOf = this.parentSpan);
                            var r = Object(h.globalTracer)().startSpan("client.performance.report", t),
                                o = "".concat(this.baseURL).concat(Object(v.T)(e));
                            p()(o, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(n)
                            }).then(function (e) {
                                r.setTag(h.Tags.HTTP_STATUS_CODE, e.status), 200 !== e.status && r.setTag(h.Tags.ERROR, "true"), r.finish()
                            }).catch(function (e) {
                                b.a.warn({
                                    err: e
                                }, "Error submitting performance report"), r.setTag(h.Tags.ERROR, "true"), r.log({
                                    error: String(e)
                                }), r.finish()
                            })
                        }
                    }]), e
                }(),
                j = function (e) {
                    return g.createElement(x.Provider, {
                        value: e.reporter
                    }, e.children)
                },
                _ = function (e) {
                    return function (n) {
                        return g.createElement(x.Consumer, null, function (t) {
                            return g.createElement(e, o()({}, n, {
                                perf: t
                            }), n.children)
                        })
                    }
                }
        },
        "./src/framework/source/SourceContext.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            }), t.d(n, "c", function () {
                return f
            }), t.d(n, "b", function () {
                return h
            }), t.d(n, "e", function () {
                return g
            }), t.d(n, "d", function () {
                return b
            }), t.d(n, "f", function () {
                return v
            }), t.d(n, "g", function () {
                return x
            });
            t("./node_modules/@babel/runtime/helpers/extends.js");
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = t.n(i),
                c = t("./node_modules/lodash/forIn.js"),
                s = t.n(c),
                l = t("./node_modules/react/index.js"),
                u = {
                    NONE: 1,
                    FEATURED_STORIES: 20,
                    FEATURED_WRITER: 21,
                    MOST_POPULAR_STORIES_IN_TOPIC: 23
                },
                d = {
                    name: 1,
                    userId: 2,
                    dimension: 4,
                    postId: 6,
                    index: 10,
                    topicId: 21,
                    susiEntry: 27,
                    sectionType: 28
                };

            function m(e) {
                var n = [];
                return s()(d, function (t, r) {
                    var o = e[r];
                    null != o && (o = o.toString().replace(/-/g, "_")), n[t - 1] = o
                }), n.join("-")
            }

            function f(e) {
                var n = e.split("-");
                return Object.entries(d).reduce(function (e, t) {
                    var r = a()(t, 2),
                        o = r[0],
                        i = r[1],
                        c = n[Number(i) - 1];
                    return c && (e[o] = function (e, n) {
                        switch (n) {
                            case "index":
                            case "sectionType":
                                return Number(e);
                            default:
                                return e
                        }
                    }(c, o)), e
                }, {})
            }
            var p = l.createContext(null),
                h = function (e) {
                    var n = e.source,
                        t = e.extendSource,
                        r = void 0 !== t && t,
                        i = e.children,
                        a = g();
                    return r && a && (n = o()({}, a, n)), l.createElement(p.Provider, {
                        value: n
                    }, i)
                },
                g = function () {
                    return l.useContext(p)
                },
                b = function () {
                    var e = l.useContext(p);
                    return e ? m(e) : ""
                },
                v = function () {
                    var e = l.useContext(p);
                    return e && e.name ? e.name : ""
                },
                x = function () {
                    var e = l.useContext(p);
                    return e && e.susiEntry
                }
        },
        "./src/framework/source/index.js": function (e, n, t) {
            "use strict";
            var r = t("./src/framework/source/SourceContext.jsx");
            t.d(n, "a", function () {
                return r.a
            }), t.d(n, "b", function () {
                return r.b
            }), t.d(n, "d", function () {
                return r.e
            }), t.d(n, "c", function () {
                return r.d
            }), t.d(n, "e", function () {
                return r.f
            }), t.d(n, "f", function () {
                return r.g
            })
        },
        "./src/framework/style/components/ThemeContext.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/styles/theme.js"),
                i = r.createContext(o.a)
        },
        "./src/framework/style/components/ThemeProvider.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/style/components/ThemeContext.js");
            n.a = function (e) {
                var n = e.theme,
                    t = e.children;
                return r.createElement(o.a.Provider, {
                    value: n
                }, t)
            }
        },
        "./src/framework/style/components/WithCx.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            });
            t("./node_modules/react/index.js");
            var r = t("./src/framework/style/useCx.js");

            function o(e) {
                return (0, e.children)(Object(r.a)())
            }
        },
        "./src/framework/style/components/WithTheme.js": function (e, n, t) {
            "use strict";
            var r = t("./src/framework/style/components/ThemeContext.js").a.Consumer;
            n.a = r
        },
        "./src/framework/style/useCx.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                o = t.n(r),
                i = t("./node_modules/lodash/flattenDeep.js"),
                a = t.n(i),
                c = t("./node_modules/fela/es/index.js"),
                s = t("./src/components/style/useRenderer.js"),
                l = t("./src/framework/style/useTheme.js"),
                u = function () {
                    var e = Object(l.a)(),
                        n = Object(s.a)();
                    return function (t) {
                        var r = a()([t]).filter(Boolean).map(function (e) {
                                return "function" == typeof e ? e : function () {
                                    return e
                                }
                            }),
                            i = c.a.apply(void 0, o()(r));
                        return n.renderRule(i, e)
                    }
                }
        },
        "./src/framework/style/useTheme.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/style/components/ThemeContext.js"),
                i = function () {
                    return r.useContext(o.a)
                }
        },
        "./src/framework/track/DomMonitorContext.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            }), t.d(n, "b", function () {
                return l
            }), t.d(n, "c", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/extends.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/util/invariant.js"),
                c = i.createContext(null),
                s = function (e) {
                    return i.createElement(c.Provider, {
                        value: e.domMonitor
                    }, e.children)
                },
                l = function () {
                    var e = i.useContext(c);
                    return Object(a.a)(!!e, "Expected DomMonitor not to be null"), e
                },
                u = function (e) {
                    return function (n) {
                        return i.createElement(c.Consumer, null, function (t) {
                            return i.createElement(e, o()({}, n, {
                                domMonitor: t
                            }), n.children)
                        })
                    }
                }
        },
        "./src/framework/track/IntersectionObserver.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return a
            });
            var r = t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = function (e, n) {
                    var t = e.onIntersect,
                        r = e.root,
                        a = e.disconnect,
                        c = e.target,
                        s = e.threshold,
                        l = e.rootMargin;
                    i.useEffect(function () {
                        if ((!a || !a()) && c.current) {
                            var e = {
                                    root: r ? r.current : null,
                                    rootMargin: l,
                                    threshold: s
                                },
                                n = new IntersectionObserver(function (e) {
                                    t(e[0])
                                }, e);
                            return n.observe(c.current),
                                function () {
                                    n.unobserve(c.current)
                                }
                        }
                    }, [].concat(o()(n), [r, s, l]))
                }
        },
        "./src/framework/track/PresentationTracker.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/framework/track/IntersectionObserver.js"),
                c = function (e) {
                    var n = e.onPresentedFn,
                        t = i.useState(!1),
                        r = o()(t, 2),
                        c = r[0],
                        s = r[1],
                        l = i.useRef(null),
                        u = i.useCallback(function (e) {
                            !c && e.isIntersecting && (s(!0), n())
                        }, [n, c]);
                    return Object(a.a)({
                        onIntersect: u,
                        target: l,
                        disconnect: function () {
                            return c
                        },
                        threshold: .25
                    }, [c, u]), l
                }
        },
        "./src/framework/track/UpsellPresentationTracker.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/source/index.js"),
                i = t("./src/framework/reporter/ReporterContext.jsx"),
                a = t("./src/framework/track/PresentationTracker.js");

            function c(e) {
                if (! function (e) {
                        if (!e) return !1;
                        if (e.name && "upgrade_membership" !== e.name) throw new Error("Unstandardized upsell source, source_name: ".concat(e.name));
                        if (!e.dimension) throw new Error("Upsell source without source location.");
                        return !0
                    }(e)) return {};
                var n = {};
                return e && (n.dimension = e.dimension, n.locationId = e.dimension), n
            }

            function s(e) {
                var n = e.children,
                    t = Object(i.b)(),
                    s = c(Object(o.d)()),
                    l = Object(a.a)({
                        onPresentedFn: function () {
                            t.event("upsell.viewed", s)
                        }
                    });
                return r.createElement("div", {
                    ref: l
                }, n)
            }
        },
        "./src/framework/track/index.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/lodash/throttle.js"),
                s = t.n(c),
                l = t("./node_modules/lodash/debounce.js"),
                u = t.n(l),
                d = t("./node_modules/mitt/dist/mitt.es.js"),
                m = 100,
                f = function () {
                    function e() {
                        var n = this;
                        o()(this, e), this._emitter = Object(d.a)(), this._onScrollEnd = u()(function () {
                            n._emitter.emit("scroll_end")
                        }, m), this._onScrollThrottled = s()(function () {
                            n._emitter.emit("scroll_throttled")
                        }, m), this._onResizeThrottled = s()(function () {
                            n._emitter.emit("resize_throttled")
                        }, m), window.addEventListener("scroll", this._onScroll.bind(this)), window.addEventListener("resize", this._onResize.bind(this), {
                            passive: !0
                        })
                    }
                    return a()(e, [{
                        key: "on",
                        value: function (e, n) {
                            this._emitter.on(e, n)
                        }
                    }, {
                        key: "off",
                        value: function (e, n) {
                            this._emitter.off(e, n)
                        }
                    }, {
                        key: "_onScroll",
                        value: function () {
                            this._emitter.emit("scroll"), this._onScrollThrottled(), this._onScrollEnd(), "number" == typeof this._lastKnownPageYOffset && (this._lastKnownPageYOffset > window.pageYOffset ? this._emitter.emit("scroll_up") : this._emitter.emit("scroll_down")), this._lastKnownPageYOffset = window.pageYOffset
                        }
                    }, {
                        key: "_onResize",
                        value: function () {
                            this._emitter.emit("resize"), this._onResizeThrottled()
                        }
                    }]), e
                }(),
                p = t("./src/framework/track/DomMonitorContext.js"),
                h = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                g = t.n(h),
                b = t("./node_modules/react/index.js"),
                v = t("./node_modules/graphql-tag/src/index.js"),
                x = t.n(v),
                E = t("./src/framework/reporter/ReporterContext.jsx"),
                y = t("./src/framework/source/index.js"),
                j = t("./src/util/dom.js");

            function _() {
                var e = g()(["\n  fragment PostScrollTracker_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);
                return _ = function () {
                    return e
                }, e
            }
            var w = 1e3;

            function k(e, n) {
                var t = Object(E.b)(),
                    r = Object(p.b)(),
                    o = Object(y.e)(),
                    i = null,
                    a = null,
                    c = b.useCallback(s()(function () {
                        if (e.current) {
                            var r = Object(j.a)(e.current);
                            if (Object(j.g)(r)) {
                                var c = Date.now(),
                                    s = Object(j.d)(r),
                                    l = Object(j.c)(),
                                    u = Object(j.e)(),
                                    d = Math.round(s.top),
                                    m = Math.round(s.top + s.height),
                                    f = l.top,
                                    p = l.top + u.height,
                                    h = l.height;
                                t.event("post.streamScrolled", {
                                    postIds: [n.id],
                                    collectionIds: [n.collection ? n.collection.id : ""],
                                    sequenceIds: [n.sequence ? n.sequence.sequenceId : ""],
                                    sources: [o],
                                    tops: [d],
                                    bottoms: [m],
                                    areFullPosts: [!0],
                                    loggedAt: c,
                                    timeDiff: null !== a ? Math.round(c - a) : 0,
                                    scrollTop: f,
                                    scrollBottom: p,
                                    scrollableHeight: h,
                                    viewStartedAt: i
                                }), a = c
                            }
                        }
                    }, w), [n]);
                b.useEffect(function () {
                    return i = Date.now(), c(), r.on("scroll_end", c),
                        function () {
                            r.off("scroll_end", c)
                        }
                }, [c])
            }
            var S = x()(_()),
                C = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                O = t.n(C),
                I = t("./src/components/post/helpers/loggedOutHistory.js"),
                A = t("./src/framework/reporter/index.js");

            function L() {
                var e = g()(["\n  fragment PostReadTracker_post on Post {\n    id\n    collection {\n      slug\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);
                return L = function () {
                    return e
                }, e
            }
            var N = 100;

            function T(e, n, t, r) {
                var o = Object(A.c)(),
                    i = Object(p.b)(),
                    a = b.useState(!1),
                    c = O()(a, 2),
                    s = c[0],
                    l = c[1];
                b.useEffect(function () {
                    if (!s) {
                        var a = function () {
                            if (t.current && !s) {
                                var i = Object(j.a)(t.current),
                                    a = Object(j.d)(i),
                                    c = a.top + a.height,
                                    u = Object(j.d)(Object(j.e)());
                                u.top + u.height >= c - N && (l(!0), o.event("post.clientRead", {
                                    postId: r.id,
                                    collectionSlug: r.collection ? r.collection.slug : "",
                                    sequenceId: r.sequence ? r.sequence.sequenceId : ""
                                }), e || n || Object(I.a)(r.id))
                            }
                        };
                        return i.on("scroll_end", a),
                            function () {
                                i.off("scroll_end", a)
                            }
                    }
                }, [s, r])
            }
            var P = x()(L()),
                R = t("./src/framework/track/IntersectionObserver.js"),
                U = t("./src/framework/design-system/components/index.js"),
                M = t("./src/framework/track/PresentationTracker.js");

            function B() {
                var e = g()(["\n  fragment PostPresentationTracker_post on Post {\n    id\n    visibility\n    previewContent {\n      isFullContent\n    }\n    collection {\n      id\n    }\n  }\n"]);
                return B = function () {
                    return e
                }, e
            }
            var D = {
                    width: "100%",
                    height: "100%"
                },
                H = 0,
                F = 1,
                z = 2;

            function V(e) {
                var n = e.post,
                    t = e.presentationContext,
                    r = e.suppressEvents,
                    o = e.children,
                    i = Object(E.b)(),
                    a = Object(y.c)(),
                    c = b.useCallback(function () {
                        if (n && !r) {
                            var e, o = n.visibility,
                                c = n.previewContent,
                                s = n.collection,
                                l = c && c.isFullContent;
                            switch (o) {
                                case "PUBLIC":
                                    e = H;
                                    break;
                                case "UNLISTED":
                                    e = F;
                                    break;
                                case "LOCKED":
                                    e = z
                            }
                            i.event("post.clientPresented", {
                                postId: n.id,
                                source: a,
                                collectionId: s ? s.id : null,
                                isFullPost: l,
                                postVisibility: e,
                                context: "POST_PREVIEW" !== t ? t.toLowerCase() : null
                            })
                        }
                    }, [n, r, t]),
                    s = Object(M.a)({
                        onPresentedFn: c
                    });
                return b.createElement(U.L, null, function (e) {
                    return b.createElement("div", {
                        className: e(D),
                        ref: s
                    }, o)
                })
            }
            var q = x()(B());
            t.d(n, "f", function () {
                return f
            }), t.d(n, "a", function () {
                return p.a
            }), t.d(n, "j", function () {
                return p.c
            }), t.d(n, "i", function () {
                return k
            }), t.d(n, "e", function () {
                return S
            }), t.d(n, "h", function () {
                return T
            }), t.d(n, "d", function () {
                return P
            }), t.d(n, "g", function () {
                return R.a
            }), t.d(n, "b", function () {
                return V
            }), t.d(n, "c", function () {
                return q
            })
        },
        "./src/index.js": function (e, n, t) {
            "use strict";
            t.r(n);
            var r = t("./node_modules/react/index.js"),
                o = t("./node_modules/react-apollo/react-apollo.esm.js"),
                i = t("./node_modules/react-dom/index.js"),
                a = t.n(i),
                c = t("./node_modules/react-helmet-async/lib/index.js"),
                s = t("./node_modules/react-hot-loader/index.js"),
                l = t("./node_modules/react-loadable/lib/index.js"),
                u = t.n(l),
                d = t("./node_modules/react-redux/es/index.js"),
                m = t("./node_modules/react-router-dom/es/BrowserRouter.js"),
                f = t("./node_modules/@sentry/browser/dist/index.js"),
                p = t("./node_modules/@babel/runtime/regenerator/index.js"),
                h = t.n(p),
                g = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                b = t.n(g),
                v = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                x = t.n(v),
                E = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                y = t.n(E),
                j = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                _ = t.n(j),
                w = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                k = t.n(w),
                S = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                C = t.n(S),
                O = t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
                I = t.n(O),
                A = t("./node_modules/react-router/es/withRouter.js"),
                L = t("./node_modules/@babel/runtime/helpers/typeof.js"),
                N = t.n(L),
                T = t("./node_modules/@babel/runtime/helpers/extends.js"),
                P = t.n(T),
                R = t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),
                U = t.n(R),
                M = t("./src/util/hooks/useScript.js"),
                B = t("./src/components/session/RequireFlag.jsx"),
                D = t("./src/components/session/WithFlag.jsx"),
                H = t("./src/components/session/WithViewer.jsx"),
                F = t("./src/framework/source/SourceContext.jsx");

            function z(e) {
                var n = e.currentLocation,
                    t = e.referrer,
                    r = e.referrerSource,
                    o = function (e) {
                        return e ? e.mediumMemberAt ? "member" : "user" : "visitor"
                    }(e.viewer);
                return V(n, t, r, o), null
            }
            var V = function (e, n, t, o) {
                var i = Object(M.a)("//d1z2jf7jlzjs58.cloudfront.net/keys/medium.com/p.js", {
                        id: "parsely-cf"
                    }),
                    a = b()(i, 2),
                    c = a[0],
                    s = a[1];
                r.useEffect(function () {
                    c && !s && void 0 !== ("undefined" == typeof window ? "undefined" : N()(window)) && window.PARSELY.beacon && window.PARSELY.beacon.trackPageView({
                        url: q(e, t),
                        urlref: n,
                        js: 1,
                        data: {
                            viewerStatus: o
                        }
                    })
                }, [e, n, c, s])
            };

            function q(e, n) {
                if (!e) return "";
                if (!n) return e;
                var t = new URL(e),
                    r = Object(F.c)(n),
                    o = r.name,
                    i = r.dimension;
                if (o && t.searchParams.set("utm_medium", o), i) {
                    var a = i.split("."),
                        c = b()(a, 3),
                        s = c[0],
                        l = c[1],
                        u = c[2];
                    s && t.searchParams.set("utm_source", s), l && t.searchParams.set("utm_term", l), u && t.searchParams.set("utm_content", u)
                }
                return t.toString()
            }
            var W = Object(d.b)(function (e) {
                    var n = e.client,
                        t = n.isBot,
                        r = n.isDnt,
                        o = e.navigation;
                    return {
                        isBot: t,
                        isDnt: r,
                        currentLocation: o.currentLocation,
                        referrer: o.referrer,
                        referrerSource: o.referrerSource
                    }
                })(function (e) {
                    var n = e.isBot,
                        t = e.isDnt,
                        o = U()(e, ["isBot", "isDnt"]);
                    return n || t ? null : r.createElement(B.a, {
                        name: "enable_parsely"
                    }, r.createElement(D.a, {
                        name: "dont_track_user"
                    }, function (e) {
                        return e ? null : r.createElement(r.Fragment, null, r.createElement("script", null, "window.PARSELY = window.PARSELY || {autotrack: false}"), r.createElement(H.a, null, function (e) {
                            return r.createElement(z, P()({}, o, {
                                viewer: e
                            }))
                        }))
                    }))
                }),
                G = t("./src/components/debug/GoogleAnalytics.jsx"),
                Y = u()({
                    loader: function () {
                        return t.e(6).then(t.bind(null, "./src/components/debug/DebugInfo.jsx"))
                    },
                    modules: ["src/components/debug/DebugInfo"],
                    webpack: function () {
                        return ["./src/components/debug/DebugInfo.jsx"]
                    },
                    loading: function () {
                        return null
                    }
                });

            function K() {
                return r.createElement(B.a, {
                    name: "trace_ui"
                }, r.createElement(Y, null))
            }
            var X = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                Q = t.n(X),
                $ = t("./src/framework/design-system/components/index.js"),
                J = t("./src/styles/breakpoints.js"),
                Z = t("./src/styles/newBreakpoints.js"),
                ee = function (e) {
                    var n;
                    return n = {}, Q()(n, J.xl(e), {
                        display: "none"
                    }), Q()(n, J.lg(e), {
                        display: "none"
                    }), Q()(n, J.md(e), {
                        display: "none"
                    }), Q()(n, J.sm(e), {
                        display: "none"
                    }), Q()(n, J.xs(e), {
                        display: "none"
                    }), Q()(n, Z.xl(e), {
                        display: "none"
                    }), Q()(n, Z.lg(e), {
                        display: "none"
                    }), Q()(n, Z.md(e), {
                        display: "none"
                    }), Q()(n, Z.sm(e), {
                        display: "none"
                    }), Q()(n, Z.xs(e), {
                        display: "none"
                    }), n
                };

            function ne() {
                return r.createElement($.L, null, function (e) {
                    return r.createElement("div", {
                        className: e(ee)
                    })
                })
            }
            var te = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                re = t.n(te),
                oe = t("./node_modules/graphql-tag/src/index.js"),
                ie = t.n(oe),
                ae = t("./src/components/navigation/Redirect.jsx"),
                ce = t("./src/components/susi/susi-modal/SusiPanel.jsx"),
                se = t("./src/components/susi/helpers/index.js"),
                le = t("./src/framework/design-system/type/index.js"),
                ue = t("./src/framework/source/index.js"),
                de = t("./src/styles/zIndex.js"),
                me = t("./src/util/navigation.js"),
                fe = t("./src/util/routes.js"),
                pe = Object(d.b)(function (e) {
                    return {
                        authDomain: e.config.authDomain,
                        currentLocation: e.navigation.currentLocation,
                        productName: e.config.productName
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.currentLocation,
                        o = e.idToken,
                        i = e.onClose,
                        a = void 0 === i ? function () {} : i,
                        c = e.openSignIn,
                        s = e.productName,
                        l = e.signInHref,
                        u = {
                            state: ["", Object(se.a)(t, Object(ue.c)()), "register"].join("|")
                        },
                        d = Object(fe.I)(n),
                        m = Object(me.a)(d, u);
                    return m = "".concat(m, "#id_token=").concat(o), r.createElement($.b, {
                        border: "BASE_LIGHT",
                        backgroundColor: "BACKGROUND",
                        borderRadius: "4px",
                        height: "183px",
                        padding: "12px 26px 12px 16px",
                        position: "fixed",
                        top: "34px",
                        right: "22px",
                        width: "378px",
                        zIndex: de.a.floating,
                        sm: {
                            top: "initial",
                            bottom: "0px",
                            right: "initial",
                            left: "0px",
                            width: "100%"
                        }
                    }, r.createElement($.b, {
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: "-16px"
                    }, r.createElement(le.b, {
                        scale: "S"
                    }, "Continue to ", s), r.createElement($.g, {
                        isPositionAbsolute: !1,
                        onClick: a,
                        size: "LARGE"
                    })), r.createElement($.b, {
                        marginTop: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }, r.createElement($.b, {
                        marginRight: "12px"
                    }, r.createElement($.c, {
                        buttonStyle: "STRONG",
                        href: m
                    }, "Sign up")), r.createElement(le.a, {
                        scale: "M"
                    }, "Already have an account?", " ", r.createElement($.b, {
                        display: "inline",
                        marginLeft: "6px"
                    }, r.createElement($.v, {
                        href: l,
                        linkStyle: "OBVIOUS",
                        onClick: function (e) {
                            e.preventDefault(), c()
                        }
                    }, "Sign in")))), r.createElement($.b, {
                        marginTop: "16px"
                    }, Object(ce.b)("Sign Up", s)))
                }),
                he = t("./src/components/susi/susi-modal/SusiModal.jsx"),
                ge = t("./src/framework/reporter/index.js"),
                be = t("./src/routes/getLiteRouteForPath.js"),
                ve = t("./src/screens/ErrorScreen.jsx"),
                xe = t("./src/screens/helpers/visits.js"),
                Ee = t("./src/util/referrers.js"),
                ye = t("./src/framework/style/useTheme.js");

            function je() {
                var e = re()(["\n  query EmailAvailability($email: String) {\n    emailAvailability(email: $email)\n  }\n"]);
                return je = function () {
                    return e
                }, e
            }
            var _e = "https://smartlock.google.com/client",
                we = function (e) {
                    return {
                        supportedAuthMethods: ["https://accounts.google.com"],
                        supportedIdTokenProviders: [{
                            uri: "https://accounts.google.com",
                            clientId: e
                        }]
                    }
                },
                ke = 6048e5,
                Se = new Set(["post", "profile", "sequence-library", "sequence-post"]);

            function Ce(e) {
                var n = e.authGoogleClientId,
                    t = e.setCredential,
                    r = e.verifyEmail;
                return window.onGoogleYoloLoad = function (e) {
                    return window.onGoogleYoloHide = e.cancelLastOperation, e.hint(we(n)).then(function (e) {
                        t(e), r()
                    }).catch(function (e) {
                        switch (e.type) {
                            case "userCanceled":
                                Object(xe.d)();
                                break;
                            case "noCredentialsAvailable":
                            case "unsupportedBrowser":
                            case "requestFailed":
                            case "operationCanceled":
                                break;
                            default:
                                throw new Error("Google One-tap hint error: ".concat(e.type))
                        }
                    })
                }, Object(M.a)(_e), null
            }
            var Oe = ie()(je()),
                Ie = Object(d.b)(function (e) {
                    var n = e.client,
                        t = n.isDnt,
                        r = n.isCustomDomain,
                        o = e.config,
                        i = o.authDomain,
                        a = o.authGoogleClientId,
                        c = e.navigation,
                        s = c.currentLocation,
                        l = c.hideGoogleOneTap;
                    return {
                        authDomain: i,
                        authGoogleClientId: a,
                        currentLocation: s,
                        isDnt: t,
                        referrer: c.referrer,
                        hideGoogleOneTap: l,
                        isCustomDomain: r
                    }
                })(function (e) {
                    var n = e.authDomain,
                        t = e.authGoogleClientId,
                        i = e.currentLocation,
                        a = e.isDnt,
                        c = e.initialPageLoaded,
                        s = e.isLoggedIn,
                        l = e.hideGoogleOneTap,
                        u = e.referrer,
                        d = e.isCustomDomain,
                        m = Object(ge.c)(),
                        f = r.useState(!1),
                        p = b()(f, 2),
                        h = p[0],
                        g = p[1],
                        v = r.useState("SHOW_GOOGLE_ONE_TAP"),
                        x = b()(v, 2),
                        E = x[0],
                        y = x[1],
                        j = r.useState({
                            id: "",
                            idToken: ""
                        }),
                        _ = b()(j, 2),
                        w = _[0],
                        k = _[1],
                        S = Object(ye.a)();
                    if (r.useEffect(function () {
                            var e, n;
                            s || a || (n = Object(xe.a)()) && n > Date.now() - ke || d || Object(Ee.a)(u) && window.innerWidth < Object(J.createBreakpointMaxWidths)(S).sm || !(e = Object(be.a)(window.location.pathname)) || !Se.has(e.name) || g(!0)
                        }, []), r.useEffect(function () {
                            l && h && c && window && window.onGoogleYoloHide && window.onGoogleYoloHide()
                        }, [l, h, c]), r.useEffect(function () {
                            h && !l && "SHOW_GOOGLE_ONE_TAP" === E && m.event("susi.viewed", {
                                entryPoint: "google_one_tap",
                                operation: "connect"
                            })
                        }, [E, h, l]), !h || l && "SHOW_SIGN_IN" !== E) return null;
                    switch (E) {
                        case "SHOW_GOOGLE_ONE_TAP":
                            return r.createElement(B.a, {
                                name: "enable_google_one_tap"
                            }, r.createElement(Ce, {
                                authGoogleClientId: t,
                                setCredential: k,
                                verifyEmail: function () {
                                    return y("VERIFY_EMAIL")
                                }
                            }));
                        case "VERIFY_EMAIL":
                            return r.createElement(o.c, {
                                query: Oe,
                                variables: {
                                    email: w.id
                                }
                            }, function (e) {
                                var n = e.loading,
                                    t = e.error,
                                    o = e.data,
                                    i = (o = void 0 === o ? {} : o).emailAvailability;
                                return n ? null : t ? r.createElement(ve.a, {
                                    error: t
                                }) : (y(i ? "CONFIRM_SIGNUP" : "SUCCESSFUL_SIGNIN"), null)
                            });
                        case "CONFIRM_SIGNUP":
                            return r.createElement(ue.b, {
                                source: {
                                    susiEntry: "google_one_tap"
                                }
                            }, r.createElement(pe, {
                                idToken: w.idToken,
                                onClose: function () {
                                    return y("")
                                },
                                openSignIn: function () {
                                    y("SHOW_SIGN_IN")
                                },
                                signInHref: Object(fe.db)(n, i)
                            }));
                        case "SUCCESSFUL_SIGNIN":
                            var C = "".concat(Object(fe.I)(n), "?state=|").concat(i, "|#id_token=").concat(w.idToken);
                            return r.createElement(ae.a, {
                                to: C
                            });
                        case "SHOW_SIGN_IN":
                            return r.createElement(he.a, {
                                initialVisibility: !0,
                                operation: "login",
                                susiEntry: "google_one_tap"
                            });
                        default:
                            return null
                    }
                }),
                Ae = t("./src/components/branch-banner/helpers/index.js"),
                Le = t("./src/metadata/Helmet.jsx"),
                Ne = Object(d.b)(function (e) {
                    var n = e.config,
                        t = n.branchKey,
                        r = n.isAmp,
                        o = e.navigation.showBranchBanner,
                        i = e.client;
                    return {
                        branchKey: t,
                        isAmp: r,
                        isBot: i.isBot,
                        isDnt: i.isDnt,
                        showBranchBanner: o
                    }
                })(function (e) {
                    var n = e.branchKey,
                        t = e.initialPageLoaded,
                        o = e.isAmp,
                        i = e.isBot,
                        a = e.isDnt,
                        c = e.showBranchBanner,
                        s = r.useState(!1),
                        l = b()(s, 2),
                        u = l[0],
                        d = l[1];
                    return r.useEffect(function () {
                        c && !u ? Object(Ae.a)(function () {
                            d(!0)
                        }) : Object(Ae.a)()
                    }, [c]), r.useEffect(function () {
                        return u && c && Object(Ae.b)(),
                            function () {
                                d(!1)
                            }
                    }, [u]), i || o ? null : !t && r.createElement(B.a, {
                        name: "enable_lite_branch_io"
                    }, r.createElement(D.a, {
                        name: "dont_track_user"
                    }, function (e) {
                        return r.createElement(Le.a, null, r.createElement("script", {
                            type: "text/javascript"
                        }, '(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent".split(" "), 0);\n  branch.init(\''.concat(n, "', {'no_journeys': true, 'disable_exit_animation': true, 'disable_entry_animation': true, 'tracking_disabled': ").concat(String(e || a), "}, function(err, data) {});")))
                    }))
                }),
                Te = t("./src/framework/design-system/components/util/VisibilityController.jsx"),
                Pe = t("./src/store/actions/navigation.js"),
                Re = function (e) {
                    function n(e) {
                        var t;
                        x()(this, n), t = _()(this, k()(n).call(this, e));
                        var r = e.enqueuedToast;
                        return r && t.props.dispatch(Object(Pe.i)()), t.state = {
                            currentToast: r || void 0,
                            toastCount: 1
                        }, t
                    }
                    return C()(n, e), y()(n, [{
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            var n = e.enqueuedToast;
                            n && (this.props.dispatch(Object(Pe.i)()), this.setState(function (e) {
                                return {
                                    currentToast: n || void 0,
                                    toastCount: e.toastCount + 1
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                n = e.currentToast,
                                t = e.toastCount;
                            return n ? [r.createElement(Te.a, {
                                key: t,
                                initialVisibility: !0
                            }, function (e) {
                                var t = e.isVisible,
                                    o = (e.show, e.hide);
                                return r.createElement($.I, {
                                    isVisible: t,
                                    hide: o,
                                    duration: "FOREVER" === n.duration ? void 0 : n.duration,
                                    toastStyle: n.toastStyle
                                }, r.createElement($.d, {
                                    strong: !0
                                }, n.message))
                            })] : null
                        }
                    }]), n
                }(r.Component),
                Ue = Object(d.b)(function (e) {
                    return {
                        enqueuedToast: e.navigation.enqueuedToast
                    }
                })(Re),
                Me = t("./src/framework/reporter/performance.jsx"),
                Be = Object(d.b)(function (e) {
                    return {
                        favicon: e.config.favicon
                    }
                })(function (e) {
                    var n;
                    switch (e.favicon) {
                        case "development":
                            n = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-dev.54LRTCXUTDayvTFg89Y4Jg.ico";
                            break;
                        case "staging":
                            n = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-hatch.32p0KZZCd4GflMcncXTXGA.ico";
                            break;
                        case "production":
                        default:
                            n = "https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico"
                    }
                    return r.createElement(Le.a, null, r.createElement("link", {
                        rel: "icon",
                        href: n
                    }))
                }),
                De = t("./src/util/miroImage.js"),
                He = Object(d.b)(function (e) {
                    return {
                        faviconImageId: e.metadata.faviconImageId
                    }
                })(function (e) {
                    var n = e.faviconImageId;
                    if (!n) return r.createElement(Be, null);
                    var t = Object(De.a)({
                        miroId: n,
                        width: 128,
                        height: 128,
                        strategy: "CROP"
                    });
                    return n ? r.createElement(Le.a, null, r.createElement("link", {
                        rel: "icon",
                        href: t
                    })) : r.createElement(Be, null)
                }),
                Fe = function (e) {
                    var n = e.productName;
                    return r.createElement(r.Fragment, null, r.createElement(Le.a, {
                        htmlAttributes: {
                            lang: "en"
                        }
                    }, r.createElement("meta", {
                        charset: "utf-8"
                    }), r.createElement("meta", {
                        name: "viewport",
                        content: "width=device-width,minimum-scale=1,initial-scale=1"
                    }), r.createElement("title", null, n), r.createElement("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }), r.createElement("meta", {
                        name: "twitter:app:name:iphone",
                        content: "Medium"
                    }), r.createElement("meta", {
                        name: "twitter:app:id:iphone",
                        content: "828256236"
                    }), r.createElement("meta", {
                        property: "al:ios:app_name",
                        content: "Medium"
                    }), r.createElement("meta", {
                        property: "al:ios:app_store_id",
                        content: "828256236"
                    }), r.createElement("meta", {
                        property: "al:android:package",
                        content: "com.medium.reader"
                    }), r.createElement("meta", {
                        property: "al:android:app_name",
                        content: "Medium"
                    }), r.createElement("meta", {
                        property: "fb:app_id",
                        content: "542599432471018"
                    }), r.createElement("meta", {
                        property: "og:site_name",
                        content: "Medium"
                    }), r.createElement("link", {
                        rel: "publisher",
                        href: "https://plus.google.com/103654360130207659246"
                    }), r.createElement("link", {
                        rel: "search",
                        type: "application/opensearchdescription+xml",
                        title: "Medium",
                        href: "/osd.xml"
                    }), '\x3c!--[if lt IE 9]><script charset="UTF-8" src="https://cdn-static-1.medium.com/_/fp/js/shiv.RI2ePTZ5gFmMgLzG5bEVAA.js"><\/script><![endif]--\x3e', r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "https://cdn-images-1.medium.com/fit/c/152/152/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "https://cdn-images-1.medium.com/fit/c/120/120/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "https://cdn-images-1.medium.com/fit/c/60/60/1*8I-HPL0bfoIzGied-dzOvA.png"
                    }), r.createElement("link", {
                        rel: "mask-icon",
                        href: "https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg",
                        color: "#171717"
                    })), r.createElement(He, null))
                },
                ze = function (e, n, t) {
                    var r = (t || {}).isAmp,
                        o = "".concat(e, "/css"),
                        i = r ? "" : "/e/sr/latin/e/ssr/latin/e/ssb/latin";
                    return "".concat(o).concat(i, "/").concat(n, ".css")
                },
                Ve = function (e) {
                    function n() {
                        return x()(this, n), _()(this, k()(n).apply(this, arguments))
                    }
                    return C()(n, e), y()(n, [{
                        key: "render",
                        value: function () {
                            var e = this;
                            return r.createElement(D.a, {
                                name: "glyph_font_set"
                            }, function (n) {
                                return r.createElement(Le.a, null, r.createElement("link", {
                                    id: "glyph_link",
                                    rel: "stylesheet",
                                    type: "text/css",
                                    href: ze(e.props.glyphUrl, String(n), {
                                        isAmp: e.props.isAmp
                                    })
                                }))
                            })
                        }
                    }]), n
                }(r.Component),
                qe = Object(d.b)(function (e) {
                    return {
                        isAmp: e.config.isAmp
                    }
                })(Ve),
                We = t("./node_modules/lodash/entries.js"),
                Ge = t.n(We),
                Ye = t("./src/routes/index.js"),
                Ke = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                Xe = t.n(Ke),
                Qe = t("./src/screens/LoadingScreen.jsx"),
                $e = {
                    delay: 300,
                    timeout: 2e4,
                    loading: function (e) {
                        return e.error ? r.createElement(ve.a, {
                            error: e.error
                        }) : e.timedOut ? r.createElement(ve.a, {
                            error: {}
                        }) : e.pastDelay ? r.createElement(Qe.a, null) : null
                    }
                },
                Je = function (e) {
                    return function (n, t) {
                        var o = n[e];
                        return r.createElement(o, t)
                    }
                },
                Ze = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(3), t.e(14)]).then(t.bind(null, "./src/handlers/AMPPostHandler.jsx"))
                    },
                    modules: ["src/handlers/AMPPostHandler"],
                    webpack: function () {
                        return ["./src/handlers/AMPPostHandler.jsx"]
                    }
                })),
                en = u()(Xe()({}, $e, {
                    loader: function () {
                        return t.e(19).then(t.bind(null, "./src/handlers/BillingHistoryHandler.jsx"))
                    },
                    modules: ["src/handlers/BillingHistoryHandler"],
                    webpack: function () {
                        return ["./src/handlers/BillingHistoryHandler.jsx"]
                    }
                })),
                nn = u()(Xe()({}, $e, {
                    loader: function () {
                        return t.e(12).then(t.bind(null, "./src/handlers/NotAvailableHandler.jsx"))
                    },
                    modules: ["src/handlers/NotAvailableHandler"],
                    webpack: function () {
                        return ["./src/handlers/NotAvailableHandler.jsx"]
                    }
                })),
                tn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(3), t.e(13)]).then(t.bind(null, "./src/handlers/PostHandler.jsx"))
                    },
                    modules: ["src/handlers/PostHandler"],
                    webpack: function () {
                        return ["./src/handlers/PostHandler.jsx"]
                    }
                })),
                rn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(17)]).then(t.bind(null, "./src/handlers/SequenceLibraryHandler.jsx"))
                    },
                    modules: ["src/handlers/SequenceLibraryHandler"],
                    webpack: function () {
                        return ["./src/handlers/SequenceLibraryHandler.jsx"]
                    }
                })),
                on = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(3), t.e(18)]).then(t.bind(null, "./src/handlers/SequencePostHandler.jsx"))
                    },
                    modules: ["src/handlers/SequencePostHandler"],
                    webpack: function () {
                        return ["./src/handlers/SequencePostHandler.jsx"]
                    }
                })),
                an = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(25), t.e(0), t.e(1), t.e(15)]).then(t.bind(null, "./src/handlers/SeriesHandler.jsx"))
                    },
                    modules: ["src/handlers/SeriesHandler"],
                    webpack: function () {
                        return ["./src/handlers/SeriesHandler.jsx"]
                    }
                })),
                cn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(26), t.e(20)]).then(t.bind(null, "./src/handlers/StatsPostHandler.jsx"))
                    },
                    modules: ["src/handlers/StatsPostHandler"],
                    webpack: function () {
                        return ["./src/handlers/StatsPostHandler.jsx"]
                    }
                })),
                sn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(0), t.e(5), t.e(21)]).then(t.bind(null, "./src/handlers/YourStoriesHandler.jsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function () {
                        return ["./src/handlers/YourStoriesHandler.jsx"]
                    },
                    render: function (e, n) {
                        var t = e.default;
                        return r.createElement(t, P()({
                            tab: "DRAFT"
                        }, n))
                    }
                })),
                ln = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(0), t.e(5), t.e(21)]).then(t.bind(null, "./src/handlers/YourStoriesHandler.jsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function () {
                        return ["./src/handlers/YourStoriesHandler.jsx"]
                    },
                    render: function (e, n) {
                        var t = e.default;
                        return r.createElement(t, P()({
                            tab: "PUBLIC"
                        }, n))
                    }
                })),
                un = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(0), t.e(5), t.e(21)]).then(t.bind(null, "./src/handlers/YourStoriesHandler.jsx"))
                    },
                    modules: ["src/handlers/YourStoriesHandler"],
                    webpack: function () {
                        return ["./src/handlers/YourStoriesHandler.jsx"]
                    },
                    render: function (e, n) {
                        var t = e.default;
                        return r.createElement(t, P()({
                            tab: "UNLISTED"
                        }, n))
                    }
                })),
                dn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(0), t.e(5), t.e(22)]).then(t.bind(null, "./src/handlers/TopicHandler.jsx"))
                    },
                    modules: ["src/handlers/TopicHandler"],
                    webpack: function () {
                        return ["./src/handlers/TopicHandler.jsx"]
                    }
                })),
                mn = u()(Xe()({}, $e, {
                    loader: function () {
                        return t.e(10).then(t.bind(null, "./src/landing-pages/ticks/TickLandingPageHandler.jsx"))
                    },
                    modules: ["src/landing-pages/ticks/TickLandingPageHandler"],
                    webpack: function () {
                        return ["./src/landing-pages/ticks/TickLandingPageHandler.jsx"]
                    }
                })),
                fn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(1), t.e(11)]).then(t.bind(null, "./src/landing-pages/trumpland/TrumplandLandingPageHandler.jsx"))
                    },
                    modules: ["src/landing-pages/trumpland/TrumplandLandingPageHandler"],
                    webpack: function () {
                        return ["./src/landing-pages/trumpland/TrumplandLandingPageHandler.jsx"]
                    }
                })),
                pn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function () {
                        return ["./src/handlers/userProfileHandlers.js"]
                    },
                    render: Je("UserProfileOverviewHandler")
                })),
                hn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function () {
                        return ["./src/handlers/userProfileHandlers.js"]
                    },
                    render: Je("UserProfileLatestHandler")
                })),
                gn = u()(Xe()({}, $e, {
                    loader: function () {
                        return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                    },
                    modules: ["src/handlers/userProfileHandlers"],
                    webpack: function () {
                        return ["./src/handlers/userProfileHandlers.js"]
                    },
                    render: Je("UserProfileSeriesHandler")
                })),
                bn = {
                    "amp-post": Ze,
                    "amp-post/custom-domain": Ze,
                    "billing-history": en,
                    "not-available": nn,
                    "post-by-id": tn,
                    "post-by-slug": tn,
                    "post-by-id/custom-domain": tn,
                    "post-by-slug/custom-domain": tn,
                    "post-by-id-under-collection": tn,
                    "post-by-id-under-user": tn,
                    "post-by-slug-under-collection": tn,
                    "post-by-slug-under-user": tn,
                    profile: pn,
                    "profile/claps": u()(Xe()({}, $e, {
                        loader: function () {
                            return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function () {
                            return ["./src/handlers/userProfileHandlers.js"]
                        },
                        render: Je("UserProfileClapsHandler")
                    })),
                    "profile/highlights": u()(Xe()({}, $e, {
                        loader: function () {
                            return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function () {
                            return ["./src/handlers/userProfileHandlers.js"]
                        },
                        render: Je("UserProfileHighlightsHandler")
                    })),
                    "profile/latest": hn,
                    "profile/responses": u()(Xe()({}, $e, {
                        loader: function () {
                            return Promise.all([t.e(2), t.e(0), t.e(1), t.e(4), t.e(16)]).then(t.bind(null, "./src/handlers/userProfileHandlers.js"))
                        },
                        modules: ["src/handlers/userProfileHandlers"],
                        webpack: function () {
                            return ["./src/handlers/userProfileHandlers.js"]
                        },
                        render: Je("UserProfileResponsesHandler")
                    })),
                    "profile/series": gn,
                    "sequence-library": rn,
                    "sequence-post": on,
                    series: an,
                    "stats-post": cn,
                    stories: sn,
                    "stories/drafts": sn,
                    "stories/public": ln,
                    "stories/unlisted": un,
                    "landing-pages/ticks": mn,
                    "landing-pages/trumpland": fn,
                    topic: dn
                },
                vn = t("./node_modules/lodash/isEqual.js"),
                xn = t.n(vn),
                En = t("./node_modules/react-router-dom/es/Route.js"),
                yn = t("./node_modules/react-router-dom/es/Redirect.js"),
                jn = t("./node_modules/querystring-es3/index.js"),
                _n = Object(d.b)()(function (e) {
                    var n = e.dispatch;
                    return (0, e.children)(n)
                }),
                wn = function (e) {
                    var n = e.name,
                        t = e.component,
                        o = e.render,
                        i = U()(e, ["name", "component", "render"]);
                    return r.createElement(_n, null, function (e) {
                        return r.createElement(En.a, P()({}, i, {
                            render: function (i) {
                                var a;
                                if (i.location) {
                                    if (a = Xe()({}, i.location), e(Object(Pe.k)(i.location.hash)), a.search) {
                                        var c = Object(jn.parse)(a.search.slice(1));
                                        c.source && e(Object(Pe.m)(c.source)), c.redirectUrl && e(Object(Pe.n)(c.redirectUrl)), delete a.search
                                    }
                                    a.pathname.match(/.+\/$/) && (a.pathname = a.pathname.replace(/\/$/, ""))
                                }
                                if (i.staticContext) i.staticContext.route = {
                                    name: n
                                }, a && e(Object(Pe.l)(a.pathname));
                                else {
                                    if (a && !xn()(i.location, a)) return r.createElement(yn.a, {
                                        to: a
                                    });
                                    e(Object(Pe.l)(i.location.pathname))
                                }
                                return t ? r.createElement(t, i) : o ? o(i) : null
                            }
                        }))
                    })
                },
                kn = t("./node_modules/react-router/es/StaticRouter.js"),
                Sn = t("./node_modules/react-router/es/Switch.js"),
                Cn = t("./node_modules/prop-types/index.js"),
                On = t.n(Cn),
                In = t("./src/components/style/RendererContext.js"),
                An = t("./node_modules/fela-dom/es/index.js"),
                Ln = function (e) {
                    function n() {
                        return x()(this, n), _()(this, k()(n).apply(this, arguments))
                    }
                    return C()(n, e), y()(n, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this.props,
                                n = e.ssrMode,
                                t = e.renderer;
                            n || Object(An.b)(t)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return r.createElement(In.a.Provider, {
                                value: this.props.renderer
                            }, r.Children.only(this.props.children))
                        }
                    }]), n
                }(r.Component),
                Nn = t("./src/framework/track/index.js"),
                Tn = t("./src/components/style/BaseThemeProvider.js"),
                Pn = t("./node_modules/redux/es/redux.js"),
                Rn = t("./src/store/actions/config.js"),
                Un = {
                    nodeEnv: "production",
                    version: "",
                    productName: "",
                    authDomain: "",
                    authGoogleClientId: "",
                    branchKey: "",
                    favicon: "production",
                    glyphUrl: "",
                    iTunesAppId: "",
                    lightStep: {
                        name: "",
                        host: "",
                        token: "",
                        appVersion: ""
                    },
                    algolia: {
                        appId: "",
                        apiKeySearch: "",
                        indexPrefix: "",
                        host: ""
                    },
                    isAmp: !1,
                    publicUrl: "",
                    googleAnalyticsCode: "",
                    recaptchaKey: "",
                    signInWallCustomDomainCollectionIds: [],
                    sentry: {
                        dsn: "",
                        environment: "production"
                    }
                },
                Mn = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case Rn.a:
                            return Xe()({}, e, {
                                isAmp: n.isAmp
                            });
                        default:
                            return e
                    }
                },
                Bn = t("./src/store/actions/debug.js");

            function Dn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case Bn.b:
                        return Xe()({}, e, {
                            performanceTraceUrl: n.performanceTraceUrl
                        });
                    case Bn.a:
                        return Xe()({}, e, {
                            originalSpanCarrier: n.originalSpanCarrier
                        });
                    default:
                        return e
                }
            }
            var Hn = "POPULATE_SESSION";
            var Fn = {
                user: {
                    id: ""
                },
                xsrf: ""
            };

            function zn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case Hn:
                        return Xe()({}, e, {
                            user: {
                                id: n.userId
                            },
                            xsrf: n.xsrf
                        });
                    default:
                        return e
                }
            }
            var Vn = "INC_ITEM_COUNT",
                qn = "DEC_ITEM_COUNT",
                Wn = "SET_ITEM_COUNT",
                Gn = "SET_SENDING",
                Yn = "ADD_TO_BACKUP",
                Kn = "CLEAR_BACKUP",
                Xn = "SET_TIMEOUT_ID";

            function Qn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        itemCount: 0,
                        sending: !1,
                        timeout: null,
                        backup: {}
                    },
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (n.type) {
                    case Vn:
                        return Xe()({}, e, {
                            itemCount: e.itemCount + 1
                        });
                    case qn:
                        return Xe()({}, e, {
                            itemCount: e.itemCount - 1
                        });
                    case Wn:
                        return Xe()({}, e, {
                            itemCount: n.itemCount
                        });
                    case Gn:
                        return Xe()({}, e, {
                            sending: n.sending
                        });
                    case Yn:
                        var t = Xe()({}, e.backup);
                        return t[n.key] = n.value, Xe()({}, e, {
                            backup: t
                        });
                    case Kn:
                        return Xe()({}, e, {
                            backup: {}
                        });
                    case Xn:
                        return Xe()({}, e, {
                            timeout: n.timeout
                        });
                    default:
                        return e
                }
            }
            var $n = t("./src/store/reducers/navigation.js"),
                Jn = {
                    isBot: !1,
                    isDnt: !1,
                    isEu: !1,
                    isNativeMedium: !1,
                    isCustomDomain: !1
                },
                Zn = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn;
                    return (arguments.length > 1 ? arguments[1] : void 0).type, e
                },
                et = t("./src/store/actions/multiVote.js");

            function nt(e) {
                var n = function (e, n) {
                    if ("object" !== N()(e) || null === e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" !== N()(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(e, "string");
                return "symbol" === N()(n) ? n : String(n)
            }
            var tt = {
                clapsPerPost: {}
            };

            function rt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (n.type) {
                    case et.b:
                        return Xe()({}, e, {
                            clapsPerPost: Xe()({}, e.clapsPerPost, Q()({}, n.postId, {
                                clapCount: n.clapCount,
                                viewerClapCount: n.viewerClapCount,
                                viewerHasClappedSinceFetch: n.viewerHasClappedSinceFetch
                            }))
                        });
                    case et.a:
                        var t = e.clapsPerPost;
                        t[n.postId];
                        return {
                            clapsPerPost: U()(t, [n.postId].map(nt))
                        };
                    default:
                        return e
                }
            }
            var ot = t("./src/store/actions/metadata.js"),
                it = {
                    faviconImageId: null
                };

            function at() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (n.type) {
                    case ot.a:
                        var t = n.faviconImageId;
                        return Xe()({}, e, {
                            faviconImageId: t
                        });
                    default:
                        return e
                }
            }
            var ct = function (e) {
                var n = Pn.b({
                        config: Mn,
                        debug: Dn,
                        session: zn,
                        stats: Qn,
                        navigation: $n.a,
                        client: Zn,
                        multiVote: rt,
                        metadata: at
                    }),
                    t = Pn.c("undefined" != typeof window && void 0 !== window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (e) {
                        return e
                    });
                return Pn.d(n, e, t)
            };

            function st() {
                void 0 !== ("undefined" == typeof window ? "undefined" : N()(window)) && window.scrollTo(0, 0)
            }
            var lt = function (e) {
                function n(e) {
                    var t;
                    return x()(this, n), (t = _()(this, k()(n).call(this, e))).state = {
                        loadedLocation: e.location
                    }, t._loadedPathnames = new Set([e.location.pathname]), t
                }
                return C()(n, e), y()(n, [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var n = this;
                        if (e.location !== this.props.location) return this._loadedPathnames.has(e.location.pathname) ? (st(), void this.setState({
                            loadedLocation: e.location
                        })) : void Object(o.e)(r.createElement(kn.a, {
                            location: e.location,
                            context: {}
                        }, r.createElement(o.a, {
                            client: e.client
                        }, r.createElement(d.a, {
                            store: ct(this.context.store.getState())
                        }, r.createElement(Ln, {
                            renderer: e.renderer
                        }, r.createElement(Nn.a, {
                            domMonitor: e.domMonitor
                        }, r.createElement(ge.b, {
                            reporter: e.reporter
                        }, r.createElement(Tn.a, null, r.createElement(Sn.a, null, e.children))))))))).then(function () {
                            n._loadedPathnames.add(e.location.pathname), n.setState(function (n, t) {
                                if (t.location === e.location) return st(), {
                                    loadedLocation: t.location
                                }
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            n = e.location,
                            t = e.loading,
                            o = this.state.loadedLocation;
                        return r.createElement(r.Fragment, null, t && n.pathname !== o.pathname ? r.createElement(t, null) : null, r.createElement(Sn.a, {
                            location: o
                        }, this.props.children))
                    }
                }]), n
            }(r.Component);
            Q()(lt, "contextTypes", {
                store: On.a.object
            });
            var ut = Object(A.a)(Object(Nn.j)(Object(o.g)(Object(ge.d)(lt)))),
                dt = t("./src/components/metabar/Metabar.jsx"),
                mt = Object(d.b)(function (e) {
                    return {
                        config: e.config
                    }
                })(function (e) {
                    return r.createElement(r.Fragment, null, r.createElement(dt.a, null), r.createElement("h2", null, "Here are ", e.config.productName, " posts, by data environment:"), r.createElement("ul", null, r.createElement("li", null, r.createElement("h3", null, "Prod"), r.createElement("ul", null, r.createElement("li", null, r.createElement($.v, {
                        href: "/p/7799910315af"
                    }, "Hot dog boyfriend")), r.createElement("li", null, r.createElement($.v, {
                        href: "/p/fd08c0babb57"
                    }, "Burrito complaining")))), r.createElement("li", null, r.createElement("h3", null, "Hatch"), r.createElement("ul", null, r.createElement("li", null, r.createElement($.v, {
                        href: "/p/e0d132bef9cc"
                    }, "SEO 101")), r.createElement("li", null, r.createElement($.v, {
                        href: "/p/f22654c1f51"
                    }, "Strategy post")))), r.createElement("li", null, r.createElement("h3", null, "Dev"), r.createElement("ul", null, r.createElement("li", null, r.createElement($.v, {
                        href: "/p/64448e1122c0"
                    }, "Ornithology Basics")), r.createElement("li", null, r.createElement($.v, {
                        href: "/p/bf8b23e0565d"
                    }, "Snowy plovers"))))))
                }),
                ft = t("./src/screens/NotFoundScreen.jsx");

            function pt(e) {
                var n = e.customDomain,
                    t = void 0 !== n && n,
                    o = Object(Ye.a)(t);
                return r.createElement(In.a.Consumer, null, function (e) {
                    return r.createElement(ut, {
                        loading: $.w,
                        renderer: e
                    }, r.createElement(wn, {
                        name: "home",
                        exact: !0,
                        path: "/",
                        component: mt
                    }), Ge()(o).map(function (e) {
                        var n = b()(e, 2),
                            t = n[0],
                            o = n[1],
                            i = o.name,
                            a = o.path,
                            c = bn[t];
                        return c ? r.createElement(wn, {
                            key: t,
                            name: i,
                            exact: !0,
                            path: a,
                            component: c
                        }) : null
                    }), r.createElement(wn, {
                        name: "unknown",
                        render: function (e) {
                            return r.createElement(ft.a, {
                                loggingData: {
                                    reason: 3,
                                    props: e
                                }
                            })
                        }
                    }))
                })
            }
            var ht = t("./src/store/selectors/session.js"),
                gt = t("./src/styles/font.js"),
                bt = t("./src/util/performance.js"),
                vt = t("./src/components/privacy/EuPrivacyBannerLoader.js");
            var xt = Object(d.b)()(function (e) {
                var n = e.email,
                    t = e.dispatch,
                    o = e.isLoggedin && !n;
                return r.useEffect(function () {
                    o && t(Object(Pe.j)({
                        duration: "FOREVER",
                        message: "",
                        toastStyle: "VERIFY_EMAIL"
                    }))
                }, []), null
            });

            function Et() {
                return (Et = I()(h.a.mark(function e(n, r, o, i, a, c) {
                    var s, l, u;
                    return h.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([t.e(27), t.e(23)]).then(t.bind(null, "./src/util/tracing.js"));
                            case 2:
                                s = e.sent, l = s.init(n), u = s.extractSpan(l, r), s.instrumentAppPerformance(l, u, o, i, a, c);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }))).apply(this, arguments)
            }
            var yt = function (e) {
                    return {
                        backgroundColor: e.backgroundColor
                    }
                },
                jt = function (e) {
                    function n() {
                        return x()(this, n), _()(this, k()(n).apply(this, arguments))
                    }
                    return C()(n, e), y()(n, [{
                        key: "componentDidMount",
                        value: function () {
                            this.instrumentApp()
                        }
                    }, {
                        key: "instrumentApp",
                        value: function () {
                            if (this.props.perf && !this.props.isBot) {
                                var e = Object(be.a)(window.location.pathname, {
                                        isCustomDomain: this.props.isCustomDomain
                                    }),
                                    n = {
                                        route: e ? e.name : "unidentified",
                                        loggedIn: Object(ht.a)(this.props.userId)
                                    },
                                    t = window.performance && window.performance.timing ? {
                                        duration: new bt.a(window.performance.timing.navigationStart, Date.now())
                                    } : {};
                                this.props.perf.reportClientReady(n, t),
                                    function (e, n, t, r, o, i) {
                                        Et.apply(this, arguments)
                                    }(this.props.lightStepConfig, this.props.originalSpanCarrier, this.props.dispatch, this.props.perf, this.props.userId, e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return r.createElement(_t, this.props)
                        }
                    }]), n
                }(r.Component),
                _t = function (e) {
                    var n = r.useState(!1),
                        t = b()(n, 2),
                        o = t[0],
                        i = t[1];
                    return r.useEffect(function () {
                        i(!0)
                    }, []), r.createElement(Tn.a, null, r.createElement($.L, null, function (n) {
                        return r.createElement("div", {
                            className: n([Object(gt.s)(), yt])
                        }, r.createElement(Fe, {
                            productName: e.productName
                        }), r.createElement(Ue, null), r.createElement(qe, {
                            glyphUrl: e.glyphUrl
                        }), r.createElement(ne, null), r.createElement(H.a, null, function () {
                            return null
                        }), r.createElement(D.a, {
                            name: ""
                        }, function () {
                            return null
                        }), r.createElement(H.a, null, function (e) {
                            var n = !!e;
                            return r.createElement(r.Fragment, null, r.createElement(vt.b, {
                                loggedIn: n
                            }), r.createElement(Ie, {
                                initialPageLoaded: o,
                                isLoggedIn: n
                            }), r.createElement(B.a, {
                                name: "enable_lite_verify_email_butter_bar"
                            }, r.createElement(xt, {
                                email: e && e.email,
                                isLoggedin: n
                            })))
                        }), r.createElement(pt, {
                            customDomain: e.isCustomDomain
                        }), r.createElement(K, null), r.createElement(G.a, null), r.createElement(W, null), r.createElement(Ne, {
                            initialPageLoaded: o
                        }))
                    }))
                },
                wt = Object(A.a)(Object(Me.c)(Object(d.b)(function (e) {
                    return {
                        nodeEnv: e.config.nodeEnv,
                        productName: e.config.productName,
                        glyphUrl: e.config.glyphUrl,
                        isBot: e.client.isBot,
                        lightStepConfig: e.config.lightStep,
                        originalSpanCarrier: e.debug.originalSpanCarrier,
                        stats: e.stats,
                        userId: e.session.user.id,
                        isCustomDomain: e.client.isCustomDomain
                    }
                })(jt))),
                kt = t("./node_modules/apollo-client/bundle.esm.js"),
                St = t("./node_modules/apollo-link-http/lib/index.js"),
                Ct = t("./node_modules/apollo-cache-inmemory/lib/fragmentMatcher.js"),
                Ot = t("./node_modules/apollo-cache-inmemory/lib/inMemoryCache.js"),
                It = t("./src/fragmentTypes.json"),
                At = t("./node_modules/apollo-link/lib/bundle.esm.js");

            function Lt() {
                var e = re()(["\n  query userResultByUsernameNormalizingQuery($username: ID!) {\n    userResult(username: $username) {\n      ... on User {\n        id\n      }\n    }\n  }\n"]);
                return Lt = function () {
                    return e
                }, e
            }

            function Nt() {
                var e = re()(["\n  query userResultByUserIdNormalizingQuery($userId: ID!) {\n    userResult(id: $userId) {\n      ... on User {\n        id\n      }\n    }\n  }\n"]);
                return Nt = function () {
                    return e
                }, e
            }

            function Tt() {
                var e = re()(["\n  query userByUsernameNormalizingQuery($username: ID!) {\n    user(username: $username) {\n      id\n    }\n  }\n"]);
                return Tt = function () {
                    return e
                }, e
            }

            function Pt() {
                var e = re()(["\n  query userByUserIdNormalizingQuery($userId: ID!) {\n    user(id: $userId) {\n      id\n    }\n  }\n"]);
                return Pt = function () {
                    return e
                }, e
            }
            var Rt = ie()(Pt()),
                Ut = ie()(Tt()),
                Mt = ie()(Nt()),
                Bt = ie()(Lt());
            var Dt = function (e) {
                    var n = e.uri,
                        t = e.state,
                        r = e.ssrMode,
                        o = e.transformLink,
                        i = e.version,
                        a = Object(St.a)({
                            uri: n,
                            credentials: "same-origin"
                        });
                    a = new At.a(function (e, n) {
                        var t = e.operationName;
                        return t && e.setContext(function (e) {
                            return {
                                headers: Xe()({}, e.headers || {}, {
                                    "Graphql-Operation": t
                                })
                            }
                        }), n(e)
                    }).concat(a), o && (a = o(a));
                    var c = new Ct.b({
                            introspectionQueryResultData: It
                        }),
                        s = new Ot.a({
                            addTypename: !0,
                            fragmentMatcher: c,
                            dataIdFromObject: function (e) {
                                switch (e.__typename) {
                                    case "Topic":
                                        return e.topicId || e.slug;
                                    case "MeteringInfo":
                                        return "MeteringInfo:singleton";
                                    case "PostPreview":
                                        var n = e.postId || e.post && e.post.id;
                                        if (n) return "".concat(e.__typename, ":").concat(n);
                                        break;
                                    default:
                                        return Object(Ot.b)(e)
                                }
                            }
                        });
                    return a = function (e) {
                        return new At.a(function (n, t) {
                            return t(n).map(function (t) {
                                if (n.query.definitions.find(function (e) {
                                        return "query" === e.operation && e.selectionSet.selections && ("user" === e.selectionSet.selections[0].name.value || "userResult" === e.selectionSet.selections[0].name.value) && ("username" === e.selectionSet.selections[0].arguments[0].name.value || "id" === e.selectionSet.selections[0].arguments[0].name.value)
                                    })) {
                                    var r = t.data.user || t.data.userResult;
                                    if (r) {
                                        var o = {
                                                user: r
                                            },
                                            i = {
                                                userResult: r
                                            };
                                        r.id && (e.writeQuery({
                                            query: Rt,
                                            data: o,
                                            variables: {
                                                userId: r.id
                                            }
                                        }), e.writeQuery({
                                            query: Mt,
                                            data: i,
                                            variables: {
                                                userId: r.id
                                            }
                                        })), r.username && (e.writeQuery({
                                            query: Ut,
                                            data: o,
                                            variables: {
                                                username: r.username
                                            }
                                        }), e.writeQuery({
                                            query: Bt,
                                            data: i,
                                            variables: {
                                                username: r.username
                                            }
                                        }))
                                    }
                                }
                                return t
                            })
                        })
                    }(s).concat(a), {
                        cache: s,
                        client: new kt.a({
                            link: a,
                            cache: !r && t ? s.restore(t) : s,
                            ssrMode: r,
                            connectToDevTools: !0,
                            name: "lite",
                            version: i,
                            defaultOptions: {
                                watchQuery: {
                                    errorPolicy: "all"
                                },
                                query: {
                                    errorPolicy: "all"
                                },
                                mutate: {
                                    errorPolicy: "all"
                                }
                            }
                        })
                    }
                },
                Ht = "Medium-Frontend-App",
                Ft = "Medium-Frontend-Route";
            var zt = function (e) {
                    return "lite/".concat(e)
                },
                Vt = t("./node_modules/fela/es/index.js"),
                qt = {
                    html: {
                        boxSizing: "border-box"
                    },
                    "*, *:before, *:after": {
                        boxSizing: "inherit"
                    },
                    body: {
                        margin: 0,
                        padding: 0,
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        color: "rgba(0,0,0,0.8)",
                        position: "relative",
                        minHeight: "100vh"
                    },
                    "h1, h2, h3, h4, h5, h6, dl, dd, ol, ul, menu, figure, blockquote, p, pre, form": {
                        margin: 0
                    },
                    "menu, ol, ul": {
                        padding: 0,
                        listStyle: "none",
                        listStyleImage: "none"
                    },
                    main: {
                        display: "block"
                    },
                    a: {
                        color: "inherit",
                        textDecoration: "none"
                    },
                    "a, button, input": {
                        WebkitTapHighlightColor: "transparent"
                    },
                    "img, svg": {
                        verticalAlign: "middle"
                    },
                    button: {
                        background: "transparent",
                        overflow: "visible"
                    },
                    "button, input, optgroup, select, textarea": {
                        margin: 0
                    }
                },
                Wt = t("./node_modules/fela-plugin-fallback-value/es/index.js");
            var Gt = function (e) {
                    function n(e) {
                        var t;
                        return x()(this, n), (t = _()(this, k()(n).call(this, e))).state = {
                            caughtError: !1
                        }, t
                    }
                    return C()(n, e), y()(n, [{
                        key: "componentDidCatch",
                        value: function (e, n) {
                            var t = n.componentStack,
                                r = this.props.reporter;
                            this.setState({
                                caughtError: !0
                            }), r.report(e, {
                                via: "componentDidCatch",
                                componentStack: t
                            }), f.withScope(function (n) {
                                n.setExtra("componentStack", t), n.setLevel("error"), f.captureException(e)
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.props,
                                n = e.children,
                                t = e.whenError;
                            return this.state.caughtError ? t : n
                        }
                    }]), n
                }(r.Component),
                Yt = 50,
                Kt = 10,
                Xt = function () {
                    function e(n) {
                        var t = n.userId,
                            r = n.authDomain;
                        x()(this, e), this.userId = t, this.authDomain = r, this._queue = [], this._reported = 0
                    }
                    return y()(e, [{
                        key: "report",
                        value: function (e, n) {
                            var t = this;
                            this._queue.length >= Kt || this._reported >= Yt || (this._queue.push({
                                name: e.name,
                                message: e.message,
                                stack: e.stack,
                                timestamp: Date.now(),
                                fileName: e.fileName,
                                lineNumber: e.lineNumber,
                                extra: Xe()({
                                    client: "lite",
                                    build: window.__BUILD_ID__,
                                    userId: this.userId,
                                    userAgent: navigator.userAgent,
                                    location: window.location.href
                                }, n)
                            }), void 0 === this._timeout && (this._timeout = setTimeout(function () {
                                return t._send()
                            }, 5e3)))
                        }
                    }, {
                        key: "_send",
                        value: function () {
                            delete this._timeout;
                            var e = "".concat(this.authDomain || "").concat(Object(fe.C)());
                            fetch(e, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    "x-xsrf-token": "1"
                                },
                                body: JSON.stringify(this._queue)
                            }), this._reported += this._queue.length, this._queue = []
                        }
                    }]), e
                }(),
                Qt = t("./src/svg/logo-wordmark-138x27px.svg"),
                $t = ["medium-content-sans-serif-font", '"Lucida Grande"', '"Lucida Sans Unicode"', '"Lucida Sans"', "Geneva", "Arial", "sans-serif"].join(", "),
                Jt = {
                    layout: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh"
                    },
                    header: {
                        paddingTop: "20px"
                    },
                    logo: {
                        display: "block",
                        width: "138px",
                        height: "27px",
                        margin: "auto"
                    },
                    container: {
                        display: "flex",
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    main: {
                        boxSizing: "border-box",
                        paddingBottom: "20px",
                        paddingLeft: "24px",
                        paddingRight: "24px"
                    },
                    heading: {
                        fontFamily: $t,
                        fontSize: "44px",
                        lineHeight: 1.1,
                        marginBottom: "0.3em"
                    },
                    paragraph: {
                        fontFamily: $t,
                        fontSize: "22px",
                        lineHeight: 1.25,
                        marginBottom: "0.3em"
                    }
                },
                Zt = function (e) {
                    var n = e.children;
                    return r.createElement("div", {
                        style: Jt.layout
                    }, n)
                },
                er = function (e) {
                    var n = e.children;
                    return r.createElement("header", {
                        style: Jt.header
                    }, n)
                },
                nr = function () {
                    return r.createElement("a", {
                        href: "/"
                    }, r.createElement(Qt.a, {
                        style: Jt.logo
                    }))
                },
                tr = function (e) {
                    var n = e.children;
                    return r.createElement("div", {
                        style: Jt.container
                    }, n)
                },
                rr = function (e) {
                    var n = e.children;
                    return r.createElement("main", {
                        style: Jt.main
                    }, n)
                },
                or = function (e) {
                    var n = e.children;
                    return r.createElement("h1", {
                        style: Jt.heading
                    }, n)
                },
                ir = function (e) {
                    var n = e.children;
                    return r.createElement("p", {
                        style: Jt.paragraph
                    }, n)
                };

            function ar() {
                return r.createElement(Zt, null, r.createElement(er, null, r.createElement(nr, null)), r.createElement(tr, null, r.createElement(rr, null, r.createElement(or, null, "Error"), r.createElement(ir, null, "We’re sorry, but there was a problem displaying this page."), r.createElement(ir, null, "Please reload and try again."))))
            }
            var cr = function () {
                console.log("-+++++=        .+++++=\n.+@@@@@+       #@@@@*:\n  .@@@@@=     *@@@@@  \n   @+@@@@-   =#@@@@@  \n   @ +@@@@: :% @@@@@  \n   @  *@@@@-%: @@@@@  \n   @   *@@@@-  @@@@@  \n  -@-   #@@+  :@@@@@: \n-#@@@#-  ##  =@@@@@@@=\n.......      .........\n"), console.log("We're hiring! https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e");
                var e = window.__PRELOADED_STATE__;
                if (!e) throw new Error("Expected window.__PRELOADED_STATE__ to exist.");
                var n = ct(e),
                    t = n.getState(),
                    i = t.config.version,
                    l = t.client.isCustomDomain,
                    u = t.navigation.host,
                    p = window.__GRAPHQL_URI__;
                if (!p) throw new Error("Expected window.__GRAPHQL_URI__ to exist.");
                var h = window.__APOLLO_STATE__;
                if (!h) throw new Error("Expected window.__APOLLO_STATE__ to exist.");
                var g, b = Dt({
                        uri: p,
                        ssrMode: !1,
                        state: h,
                        transformLink: function (e) {
                            return function (e, n) {
                                var t = zt(e);
                                return new At.a(function (e, r) {
                                    var o = Object(be.a)(window.location.pathname, {
                                        isCustomDomain: n
                                    });
                                    return e.setContext(function (e) {
                                        var n;
                                        return {
                                            headers: Xe()({}, e.headers || {}, (n = {}, Q()(n, Ht, t), Q()(n, Ft, o ? o.name : "unidentified"), n))
                                        }
                                    }), r(e)
                                })
                            }(i, l).concat(e)
                        },
                        version: i
                    }).client,
                    v = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.noGlobals,
                            t = e.ssrMode,
                            r = Object(Vt.b)({
                                plugins: [Object(Wt.a)()],
                                mediaQueryOrder: ["all and (min-width: 1080px)", "all and (max-width: 1079.98px)", "all and (max-width: 903.98px)", "all and (max-width: 727.98px)", "all and (max-width: 551.98px)", "all and (min-width: 904px) and (max-width: 1079.98px)", "all and (min-width: 728px) and (max-width: 903.98px)", "all and (min-width: 552px) and (max-width: 727.98px)", "print"]
                            });
                        return t || Object(An.a)(r), n || Object.keys(qt).forEach(function (e) {
                            return r.renderStatic(qt[e], e)
                        }), r
                    }(),
                    x = t.session.user.id,
                    E = new ge.a({
                        userId: x,
                        reduxStore: n
                    }),
                    y = new Xt({
                        userId: x
                    }),
                    j = new Me.b({
                        host: u,
                        version: i
                    });
                window.onerror = (g = y, function (e, n, t, r, o) {
                    if (null != o) g.report(o, {
                        via: "window.onerror"
                    });
                    else {
                        var i = String(n).split(/[\/\\]/).pop();
                        g.report({
                            message: e,
                            fileName: i,
                            lineNumber: t
                        })
                    }
                }), f.init({
                    beforeSend: function (e, n) {
                        var t = Object(be.a)(window.location.pathname, {
                            isCustomDomain: l
                        });
                        return e.tags.route = t ? t.name : "unidentified", e
                    },
                    dsn: t.config.sentry.dsn,
                    environment: "".concat(t.config.sentry.environment, "-client"),
                    release: t.config.version
                }), f.configureScope(function (e) {
                    e.setUser({
                        id: t.session.user.id
                    }).setTag("version", i)
                });
                var _, w = new Nn.f;
                (_ = a.a.hydrate, function (e) {
                    var t = document.getElementById("root");
                    t && _(r.createElement(Gt, {
                        reporter: y,
                        whenError: r.createElement(ar, {
                            error: {}
                        })
                    }, r.createElement(Nn.a, {
                        domMonitor: w
                    }, r.createElement(ge.b, {
                        reporter: E
                    }, r.createElement(Me.a, {
                        reporter: j
                    }, r.createElement(Ln, {
                        renderer: v
                    }, r.createElement(o.a, {
                        client: b
                    }, r.createElement(d.a, {
                        store: n
                    }, r.createElement(c.HelmetProvider, null, r.createElement(m.a, null, r.createElement(s.AppContainer, {
                        warnings: !1
                    }, r.createElement(e, null))))))))))), t)
                })(wt)
            };
            window.main = function () {
                Object(bt.c)(), u.a.preloadReady().then(cr)
            }
        },
        "./src/log/index.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return a
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = function (e, n) {
                    return "string" == typeof e ? {
                        msg: e
                    } : o()({
                        msg: n
                    }, e)
                },
                a = {
                    debug: function (e, n) {
                        console.debug(i(e, n))
                    },
                    info: function (e, n) {
                        console.log(i(e, n))
                    },
                    warn: function (e, n) {
                        console.warn(i(e, n))
                    },
                    error: function (e, n) {
                        console.error(i(e, n))
                    }
                }
        },
        "./src/metadata/Helmet.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return E
            });
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
                s = t.n(c),
                l = t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                u = t.n(l),
                d = t("./node_modules/@babel/runtime/helpers/inherits.js"),
                m = t.n(d),
                f = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                p = t.n(f),
                h = t("./node_modules/react/index.js"),
                g = t("./node_modules/react-helmet-async/lib/index.js"),
                b = t.n(g),
                v = t("./node_modules/prop-types/index.js"),
                x = t.n(v),
                E = function (e) {
                    function n() {
                        return o()(this, n), s()(this, u()(n).apply(this, arguments))
                    }
                    return m()(n, e), a()(n, [{
                        key: "render",
                        value: function () {
                            return this.context.helmetInstances ? h.createElement(b.a, this.props) : null
                        }
                    }]), n
                }(h.Component);
            p()(E, "contextTypes", {
                helmetInstances: x.a.object
            })
        },
        "./src/routes/getLiteRouteForPath.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            });
            var r = t("./src/routes/index.js");

            function o(e) {
                var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isCustomDomain,
                    t = void 0 !== n && n,
                    o = e.replace(/\?.*$/, ""),
                    i = Object(r.a)(t);
                for (var a in i) {
                    var c = i[a];
                    if (c.pattern.test(o)) return c
                }
            }
        },
        "./src/routes/index.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return s
            });
            var r = t("./node_modules/path-to-regexp/index.js"),
                o = t.n(r);

            function i(e, n, t) {
                return {
                    name: e,
                    path: n,
                    flagName: t,
                    pattern: o()(n)
                }
            }
            var a = {
                    "amp-post": i("amp-post", "/amp/p/:postId"),
                    "billing-history": i("billing-history", "/me/billing-history"),
                    "not-available": i("not-available", "/not-available"),
                    "post-by-id": i("post", "/p/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug": i("post", "/p/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post"),
                    profile: i("profile", "/@:username"),
                    "profile/claps": i("profile", "/@:username/has-recommended"),
                    "profile/highlights": i("profile", "/@:username/highlights"),
                    "profile/latest": i("profile", "/@:username/latest"),
                    "profile/responses": i("profile", "/@:username/responses"),
                    "profile/series": i("profile", "/@:username/series"),
                    "sequence-library": i("sequence-library", "/collections"),
                    series: i("series", "/series/:postSlug"),
                    "stats-post": i("stats-post", "/me/stats/post/:postId"),
                    stories: i("stories", "/me/stories", "enable_lite_stories"),
                    "stories/drafts": i("stories", "/me/stories/drafts", "enable_lite_stories"),
                    "stories/public": i("stories", "/me/stories/public", "enable_lite_stories"),
                    "stories/unlisted": i("stories", "/me/stories/unlisted", "enable_lite_stories"),
                    topic: i("topic", "/topic/:topicSlug"),
                    "landing-pages/ticks": i("landing-pages/ticks", "/l/ticks", "enable_tick_landing_page"),
                    "sequence-post": i("sequence-post", "/s/:sequenceSlug/:postIdOrSlug", "enable_lite_post"),
                    "landing-pages/trumpland": i("landing-pages/trumpland", "/l/the-trump-45", "enable_trumpland_landing_page"),
                    "post-by-id-under-user": i("post", "/@:username/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug-under-user": i("post", "/@:username/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post"),
                    "post-by-id-under-collection": i("post", "/:collectionSlug([^\\/]{3,})/:postId([0-9a-f]+)", "enable_lite_post"),
                    "post-by-slug-under-collection": i("post", "/:collectionSlug([^\\/]{3,})/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post")
                },
                c = {
                    "amp-post/custom-domain": i("amp-post", "/amp/p/:postId"),
                    "post-by-slug/custom-domain": i("post", "/:postSlug([^\\/]+-[0-9a-f]+)", "enable_lite_post_cd"),
                    "post-by-id/custom-domain": i("post", "/:postId([0-9a-f]+)", "enable_lite_post_cd")
                };

            function s() {
                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? c : a
            }
        },
        "./src/screens/ErrorScreen.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-router/es/Route.js"),
                c = t("./src/components/metabar/Metabar.jsx"),
                s = t("./src/components/ui/image/index.js"),
                l = t("./src/framework/design-system/components/index.js"),
                u = t("./src/framework/design-system/util/type/toRule.js"),
                d = t("./src/styles/font.js"),
                m = t("./src/util/routes.js"),
                f = function (e) {
                    e.error;
                    return !1
                },
                p = i.createContext(null),
                h = function (e) {
                    var n = i.useContext(p);
                    e && n && n.report(e)
                };
            t.d(n, "a", function () {
                return w
            });
            var g = [{
                    miroId: "1*68KIGncmOpxM2EVuJEjE4Q.png",
                    title: "How To Change Your Mind",
                    author: "Michael Pollan",
                    p1: "Michael Pollan is about to change the way you think about psychedelics.",
                    p2: "Find a comfortable and familiar plance to read this book — maybe a peaceful meadow, or a quiet room with good vibes if it’s your first time. Make sure someone you trust is there to look after you and talk you through the incredible insights you will discover on each page."
                }, {
                    miroId: "1*_ixNg02kNq8guwfncUeJ4g.png",
                    title: "Hunger",
                    author: "Roxane Gay",
                    p1: "Take a moment to reflect on what it means to be in your body. Wiggle your toes. Press your tongue against the roof of your mouth. Pinch the folds of your belly — easy there, not that hard.",
                    p2: 'Roxane Gay tells the story of her relationship to her weight, and the world’s reactions to it. "This is not a book that will offer motivation," she warns. "Mine is not a success story. Mine is, simply, a true story."'
                }, {
                    miroId: "1*a4WZocgSsJwBEsTaHlAMhw.png",
                    title: "The Mars Room",
                    author: "Rachel Kushner",
                    p1: "What’s the worst situation you’ve ever found yourself in? Romy, the subject of Rachel Kushner’s latest novel, has you beat. After murdering her stalker, this single mother lands two lifetime sentences (plus six years). Yeah, told you so.",
                    p2: "Inside the women’s correctional facility, Romy crosses paths with others whose lives have been short on choices and long on consequences. Read this book if you could use a reality check."
                }],
                b = {
                    fontSize: "20px",
                    textTransform: "uppercase"
                },
                v = function (e) {
                    return o()({}, Object(u.a)(function (e) {
                        return {
                            font: e.font.elevate,
                            fontSize: 192,
                            lineHeight: 200,
                            display: "block"
                        }
                    })(e))
                },
                x = {
                    fontSize: "24px"
                },
                E = function (e) {
                    return o()({}, Object(u.a)(function (e) {
                        return {
                            font: e.font.uiHeavy,
                            fontSize: 24,
                            lineHeight: 28,
                            display: "block"
                        }
                    })(e))
                },
                y = {
                    fontSize: "20px",
                    fontStyle: "italic"
                },
                j = function (e) {
                    return i.createElement(l.L, null, function (n) {
                        return i.createElement(l.b, {
                            display: "flex",
                            alignItems: "flex-start",
                            marginTop: "40px"
                        }, i.createElement(s.b, {
                            miroId: e.bookItem.miroId,
                            width: 160,
                            height: 244,
                            alt: "".concat(e.bookItem.title, " by ").concat(e.bookItem.author),
                            strategy: "RESAMPLE"
                        }), i.createElement(l.b, {
                            marginLeft: "40px"
                        }, i.createElement(l.b, {
                            marginBottom: "20px"
                        }, i.createElement("div", {
                            className: n(E)
                        }, e.bookItem.title), i.createElement("div", {
                            className: n(y)
                        }, e.bookItem.author)), i.createElement(l.b, {
                            marginBottom: "16px"
                        }, i.createElement(l.a, null, e.bookItem.p1)), i.createElement(l.a, null, e.bookItem.p2)))
                    })
                },
                _ = function () {
                    return i.createElement(i.Fragment, null, g.map(function (e, n) {
                        return i.createElement(j, {
                            key: n,
                            bookItem: e
                        })
                    }))
                };

            function w(e) {
                return h(e.error), i.createElement(a.a, {
                    render: function (n) {
                        var t = n.staticContext;
                        return t && (t.status = 500), i.createElement(l.L, null, function (n) {
                            return i.createElement("div", null, i.createElement(c.a, null), i.createElement(l.b, {
                                tag: "section",
                                paddingTop: "60px",
                                paddingBottom: "60px"
                            }, i.createElement(l.C, {
                                columns: 8
                            }, i.createElement(l.b, {
                                display: "flex",
                                alignItems: "flex-start",
                                flexWrap: "wrap"
                            }, i.createElement(l.b, {
                                display: "flex",
                                flexDirection: "column"
                            }, i.createElement("div", {
                                className: n(b)
                            }, "Error"), i.createElement("div", {
                                className: n(v)
                            }, "500")), i.createElement("div", {
                                className: n(Object(d.k)())
                            }, i.createElement(l.b, {
                                marginBottom: "28px"
                            }, i.createElement("div", {
                                className: n(x)
                            }, "Our nimblest minds and quickest coders are scrambling to bring Medium back — so hold tight.")), i.createElement("div", {
                                className: n(x)
                            }, "What can you do? Try refreshing this page or check", " ", i.createElement(l.v, {
                                href: Object(m.kb)(),
                                display: "inline-block",
                                inline: !0,
                                target: "_blank",
                                linkStyle: "OBVIOUS"
                            }, "Medium's status"), "."))))), i.createElement(l.b, {
                                tag: "section",
                                paddingTop: "60px",
                                paddingBottom: "120px",
                                backgroundColor: "BASE_LIGHT"
                            }, i.createElement(l.C, {
                                columns: 8
                            }, i.createElement(l.m, null, "Is ‘refresh’ not working?"), i.createElement(l.b, {
                                marginTop: "24px",
                                marginBottom: "36px"
                            }, i.createElement(l.a, null, "We suggest you get your hands on one of these books and settle down on a park bench or under a tree. Get away from your screen and enjoy the simple pleasures of print media. Then, try refreshing Medium again.")), i.createElement(_, null))), f(e))
                        })
                    }
                })
            }
        },
        "./src/screens/LoadingScreen.jsx": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return a
            });
            var r = t("./node_modules/react/index.js"),
                o = t("./src/framework/design-system/components/index.js"),
                i = t("./src/components/metabar/Logo.jsx");

            function a() {
                return r.createElement(o.b, {
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }, r.createElement(i.a, null))
            }
        },
        "./src/screens/NotFoundScreen.jsx": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-router/es/Route.js"),
                c = t("./src/framework/design-system/components/index.js"),
                s = t("./src/components/metabar/Metabar.jsx"),
                l = t("./src/util/routes.js"),
                u = t("./src/components/post-listing/PostListingItemImage.jsx"),
                d = t("./src/components/post-listing/PostListingItemBylineWithAvatar.jsx"),
                m = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                f = t.n(m),
                p = t("./src/framework/design-system/util/type/toRule.js"),
                h = t("./src/styles/breakpoints.js"),
                g = {
                    fontSize: "20px",
                    textTransform: "uppercase"
                },
                b = function (e) {
                    return o()({}, Object(p.a)(function (e) {
                        return {
                            font: e.font.marketing,
                            lineHeight: 200,
                            display: "block"
                        }
                    })(e), f()({
                        fontSize: "192px"
                    }, h.sm(e), {
                        fontSize: "150px"
                    }))
                },
                v = function (e) {
                    return i.createElement(c.L, null, function (n) {
                        return i.createElement(c.b, {
                            display: "flex",
                            flexDirection: "column"
                        }, i.createElement("div", {
                            className: n(g)
                        }, "Error"), i.createElement("div", {
                            className: n(b)
                        }, e))
                    })
                },
                x = t("./src/styles/font.js");
            t.d(n, "a", function () {
                return C
            });
            var E = function (e) {
                    return {
                        marginTop: "-20px",
                        fontSize: "48px",
                        color: "#aaa",
                        letterSpacing: "normal",
                        lineHeight: "48px"
                    }
                },
                y = {
                    display: "flex",
                    flexDirection: "row",
                    "@media (max-width: 767px)": {
                        flexDirection: "column"
                    }
                },
                j = function (e, n) {
                    return function (t) {
                        var r = {
                            border: "1px solid ".concat(t.baseColor.border.lighter),
                            borderRadius: "5px",
                            boxShadow: "0 1px 4px ".concat(t.baseColor.border.lighter),
                            margin: "8px",
                            width: "calc(calc(100% / 3) - 8px)",
                            overflow: "hidden",
                            "@media (max-width: 767px)": {
                                width: "100%",
                                marginLeft: "0",
                                marginRight: "0"
                            }
                        };
                        return 0 === e ? o()({}, r, {
                            marginLeft: "0px"
                        }) : e === n ? o()({}, r, {
                            marginRight: "0px"
                        }) : r
                    }
                },
                _ = [{
                    id: "52e72e10614",
                    previewImage: {
                        id: "1*6XM15VaWbf7HK1HmiRkv1Q.png",
                        focusPercentX: 0,
                        focusPercentY: 20
                    },
                    title: "All the Mugs I’ve Loved and Lost",
                    creator: {
                        id: "6a0cce7d484d",
                        imageId: "1*ErUzRtpA1KJr93I-T5kCpQ@2x.jpeg",
                        name: "Danielle Morgan",
                        username: "danielleaamorgan",
                        mediumMemberAt: 0
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "544c7006046e",
                        domain: "humanparts.medium.com",
                        name: "Human Parts",
                        slug: "human-parts"
                    },
                    readingTime: 6.69559748427673,
                    isLocked: !0,
                    updatedAt: 1556564895449
                }, {
                    id: "596d1a826429",
                    previewImage: {
                        id: "1*WPMRCdxJhe4cvefeJ5FbmQ.jpeg",
                        focusPercentX: 45,
                        focusPercentY: 50
                    },
                    title: "Lost in Conversation",
                    creator: {
                        id: "f65f67f321fe",
                        imageId: "1*HJS2Dolxg5B0n7u1oJ213w.jpeg",
                        name: "Omar Merza",
                        username: "MerzaOmar",
                        mediumMemberAt: 0
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "d415956deb14",
                        domain: void 0,
                        name: "The Coffeelicious",
                        slug: "the-coffeelicious"
                    },
                    readingTime: 5,
                    isLocked: !1,
                    updatedAt: 1505826905e3
                }, {
                    id: "3f942a018492",
                    previewImage: {
                        id: "1*tKP4kGZhSa-H0wroJxY3fQ.jpeg",
                        focusPercentX: 50,
                        focusPercentY: 50
                    },
                    title: "The Lost Photographs of Penang",
                    creator: {
                        id: "f867736dc389",
                        imageId: "1*AuwihOv-G6udHbXes_-rhA.jpeg",
                        name: "Ted Anthony",
                        username: "anthonyted",
                        mediumMemberAt: 1490944652e3
                    },
                    statusForCollection: "APPROVED",
                    collection: {
                        id: "2293067a9eb2",
                        domain: "stuff.life",
                        name: "Stuff Dot Life",
                        slug: "stuff-dot-life"
                    },
                    readingTime: 10,
                    isLocked: !0,
                    updatedAt: 1505826905e3
                }],
                w = function (e) {
                    return i.createElement(i.Fragment, null, i.createElement(u.b, {
                        post: e,
                        miroWidth: 767,
                        miroHeight: 271
                    }), i.createElement(c.b, {
                        marginTop: "16px",
                        marginLeft: "16px"
                    }, function (e) {
                        return i.createElement(c.f, {
                            href: Object(l.V)(e)
                        }, i.createElement(c.p, {
                            clamp: 2
                        }, e.title))
                    }(e)), i.createElement(c.b, {
                        marginTop: "20px",
                        marginBottom: "20px",
                        paddingLeft: "29px",
                        paddingRight: "20px"
                    }, i.createElement(d.b, {
                        post: e
                    })))
                },
                k = function () {
                    return i.createElement(c.L, null, function (e) {
                        return i.createElement(i.Fragment, null, i.createElement("div", null, i.createElement(c.m, null, "Feeling lost? You’re not alone."), i.createElement(c.b, {
                            marginTop: "16px",
                            marginBottom: "16px"
                        }, i.createElement(c.a, null, "Enjoy these stories about getting lost, losing things, and finding what you never knew you were looking for"))), i.createElement("div", {
                            className: e(y)
                        }, i.createElement(c.L, null, function (e) {
                            return _.map(function (n, t) {
                                return i.createElement("div", {
                                    key: t,
                                    className: e(j(t, _.length - 1))
                                }, w(n))
                            })
                        })))
                    })
                },
                S = function () {
                    return i.createElement(c.L, null, function (e) {
                        return i.createElement(i.Fragment, null, v(404), i.createElement("div", {
                            className: e(Object(x.k)())
                        }, i.createElement("h2", {
                            className: e(E)
                        }, "We couldn’t find this page.")))
                    })
                };

            function C(e) {
                return i.createElement(a.a, {
                    render: function (n) {
                        var t = n.staticContext;
                        return t && (t.loggingData = e.loggingData, t.status = 404), i.createElement(i.Fragment, null, i.createElement(s.a, null), i.createElement(c.C, null, S()), i.createElement(c.b, {
                            tag: "section",
                            marginTop: "100px",
                            paddingTop: "20px",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            paddingBottom: "120px",
                            backgroundColor: "BASE_LIGHT"
                        }, i.createElement(c.C, null, i.createElement(c.B, {
                            ui: "REGULAR"
                        }, k()))))
                    }
                })
            }
        },
        "./src/screens/helpers/visits.js": function (e, n, t) {
            "use strict";
            t.d(n, "e", function () {
                return c
            }), t.d(n, "c", function () {
                return s
            }), t.d(n, "f", function () {
                return l
            }), t.d(n, "b", function () {
                return u
            }), t.d(n, "d", function () {
                return m
            }), t.d(n, "a", function () {
                return f
            });
            var r = t("./src/util/LocalStorage.js"),
                o = new r.a("post-article"),
                i = function (e) {
                    return new Date(e).setUTCHours(0, 0, 0, 0) - 86400 * new Date(e).getDay() * 1e3
                },
                a = function (e) {
                    var n = new Date(e);
                    return Date.UTC(n.getFullYear(), n.getMonth(), 1)
                };

            function c() {
                var e, n, t = Date.now();
                Number(o.get("first-post-viewed-timestamp", "0")) < i(t) ? (e = 1, o.set("first-post-viewed-timestamp", t)) : e = o.get("posts-viewed-count", "0") + 1, o.set("posts-viewed-count", e), Number(o.get("first-post-viewed-month-timestamp", "0")) < a(t) ? (n = 1, o.set("first-post-viewed-month-timestamp", t)) : n = o.get("posts-viewed-month-count", "0") + 1, o.set("posts-viewed-month-count", n)
            }

            function s() {
                var e = parseInt(o.get("posts-viewed-month-count", "0"), 10);
                return isNaN(e) && (e = 0), e
            }

            function l() {
                o.set("last-seen-prompt-timestamp", Date.now())
            }

            function u() {
                return Number(o.get("last-seen-prompt-timestamp", "0"))
            }
            var d = new r.a("google-one-tap");

            function m() {
                d.set("hide-at", Date.now())
            }

            function f() {
                return Number(d.get("hide-at", "0"))
            }
        },
        "./src/store/actions/branch.js": function (e, n, t) {
            "use strict";
            t.d(n, "c", function () {
                return r
            }), t.d(n, "a", function () {
                return o
            }), t.d(n, "b", function () {
                return i
            }), t.d(n, "f", function () {
                return a
            }), t.d(n, "d", function () {
                return c
            }), t.d(n, "e", function () {
                return s
            });
            var r = "SHOW_BRANCH_BANNER",
                o = "HIDE_BRANCH_BANNER",
                i = "RESET_SHOW_BRANCH_BANNER";

            function a() {
                return {
                    type: r
                }
            }

            function c() {
                return {
                    type: o
                }
            }

            function s() {
                return {
                    type: i
                }
            }
        },
        "./src/store/actions/config.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            }), t.d(n, "b", function () {
                return o
            });
            var r = "SET_IS_AMP";

            function o(e) {
                return {
                    type: r,
                    isAmp: e
                }
            }
        },
        "./src/store/actions/debug.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return r
            }), t.d(n, "a", function () {
                return o
            }), t.d(n, "c", function () {
                return i
            });
            var r = "SET_TRACE_URL",
                o = "SET_ORIGINAL_SPAN_CARRIER";

            function i(e) {
                return {
                    type: r,
                    performanceTraceUrl: e
                }
            }
        },
        "./src/store/actions/googleOneTap.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            }), t.d(n, "b", function () {
                return o
            });
            var r = "HIDE_GOOGLE_ONE_TAP";

            function o() {
                return {
                    type: r,
                    hideGoogleOneTap: !0
                }
            }
        },
        "./src/store/actions/metadata.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            }), t.d(n, "b", function () {
                return o
            });
            var r = "SET_FAVICON_IMAGE_ID";

            function o(e) {
                return {
                    type: r,
                    faviconImageId: e
                }
            }
        },
        "./src/store/actions/multiVote.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return r
            }), t.d(n, "d", function () {
                return o
            }), t.d(n, "a", function () {
                return i
            }), t.d(n, "c", function () {
                return a
            });
            var r = "SET_CLAP_COUNTS_FOR_POST";

            function o(e) {
                var n = e.postId,
                    t = e.clapCount,
                    o = e.viewerClapCount,
                    i = e.viewerHasClappedSinceFetch;
                return {
                    type: r,
                    postId: n,
                    clapCount: t,
                    viewerClapCount: o,
                    viewerHasClappedSinceFetch: i
                }
            }
            var i = "CLEAR_CLAP_COUNTS_FOR_POST";

            function a(e) {
                var n = e.postId;
                return {
                    type: i,
                    postId: n
                }
            }
        },
        "./src/store/actions/navigation.js": function (e, n, t) {
            "use strict";
            t.d(n, "e", function () {
                return r
            }), t.d(n, "l", function () {
                return o
            }), t.d(n, "d", function () {
                return i
            }), t.d(n, "k", function () {
                return a
            }), t.d(n, "f", function () {
                return c
            }), t.d(n, "m", function () {
                return s
            }), t.d(n, "g", function () {
                return l
            }), t.d(n, "n", function () {
                return u
            }), t.d(n, "c", function () {
                return d
            }), t.d(n, "j", function () {
                return m
            }), t.d(n, "b", function () {
                return f
            }), t.d(n, "i", function () {
                return p
            }), t.d(n, "a", function () {
                return h
            }), t.d(n, "h", function () {
                return g
            });
            var r = "SET_CURRENT_PATH";

            function o(e) {
                return {
                    type: r,
                    path: e
                }
            }
            var i = "SET_CURRENT_HASH";

            function a(e) {
                return {
                    type: i,
                    hash: e.length > 1 ? e.substring(1) : e
                }
            }
            var c = "SET_REFERRER_SOURCE";

            function s(e) {
                return {
                    type: c,
                    referrerSource: e
                }
            }
            var l = "SET_UNSAFE_REDIRECT_URL";

            function u(e) {
                return {
                    type: l,
                    unsafeRedirectUrl: e
                }
            }
            var d = "ENQUEUE_TOAST";

            function m(e) {
                var n = e.duration,
                    t = e.message,
                    r = e.toastStyle,
                    o = n;
                return n || 0 === n || (o = 5e3), {
                    type: d,
                    duration: o,
                    message: t,
                    toastStyle: void 0 === r ? "MESSAGE" : r
                }
            }
            var f = "CLEAR_TOASTS";

            function p() {
                return {
                    type: f
                }
            }
            var h = "CLEAR_POST_PUBLISHED_TYPE";

            function g() {
                return {
                    type: h
                }
            }
        },
        "./src/store/reducers/navigation.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return u
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./src/store/actions/navigation.js"),
                a = t("./src/store/actions/branch.js"),
                c = t("./src/store/actions/googleOneTap.js"),
                s = t("./src/util/navigation.js"),
                l = {
                    host: "",
                    hostname: "",
                    currentLocation: ""
                };

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (n.type) {
                    case i.d:
                        return o()({}, e, {
                            currentHash: n.hash
                        });
                    case i.e:
                        var t = Object(s.b)(e.host, n.path),
                            r = e.currentLocation !== t;
                        return o()({}, e, {
                            currentLocation: r ? t : e.currentLocation,
                            referrer: r ? e.currentLocation : e.referrer
                        });
                    case i.f:
                        return o()({}, e, {
                            referrerSource: n.referrerSource
                        });
                    case i.g:
                        return o()({}, e, {
                            unsafeRedirectUrl: n.unsafeRedirectUrl
                        });
                    case i.c:
                        var u = n.duration,
                            d = n.message,
                            m = n.toastStyle;
                        return o()({}, e, {
                            enqueuedToast: {
                                duration: u,
                                message: d,
                                toastStyle: m
                            }
                        });
                    case i.b:
                        return o()({}, e, {
                            enqueuedToast: null
                        });
                    case a.c:
                        return o()({}, e, {
                            showBranchBanner: !0
                        });
                    case a.a:
                        return o()({}, e, {
                            showBranchBanner: !1
                        });
                    case a.b:
                        return o()({}, e, {
                            showBranchBanner: null
                        });
                    case c.a:
                        var f = n.hideGoogleOneTap;
                        return o()({}, e, {
                            hideGoogleOneTap: f
                        });
                    case i.a:
                        return o()({}, e, {
                            postPublishedType: null
                        });
                    default:
                        return e
                }
            }
        },
        "./src/store/selectors/session.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            var r = function (e) {
                return !e.match(/^lo_/)
            }
        },
        "./src/styles/breakpoints.js": function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, "createBreakpointMaxWidths", function () {
                return r
            }), t.d(n, "getTabletBreakpoint", function () {
                return o
            }), t.d(n, "xs", function () {
                return i
            }), t.d(n, "sm", function () {
                return a
            }), t.d(n, "md", function () {
                return c
            }), t.d(n, "lg", function () {
                return s
            }), t.d(n, "xl", function () {
                return l
            });
            var r = function (e) {
                    return {
                        xs: e.breakpoints.sm,
                        sm: e.breakpoints.md,
                        md: e.breakpoints.lg,
                        lg: e.breakpoints.xl,
                        xl: e.grid.xlMaxContentWidth
                    }
                },
                o = function (e) {
                    return r(e).md
                },
                i = function (e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.sm - .02, "px)")
                },
                a = function (e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.md - .02, "px)")
                },
                c = function (e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.lg - .02, "px)")
                },
                s = function (e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.xl - .02, "px)")
                },
                l = function (e) {
                    return "@media all and (min-width: ".concat(e.breakpoints.xl, "px)")
                }
        },
        "./src/styles/colors.js": function (e, n, t) {
            "use strict";
            t.d(n, "s", function () {
                return r
            }), t.d(n, "t", function () {
                return o
            }), t.d(n, "k", function () {
                return i
            }), t.d(n, "l", function () {
                return a
            }), t.d(n, "m", function () {
                return c
            }), t.d(n, "n", function () {
                return s
            }), t.d(n, "r", function () {
                return l
            }), t.d(n, "u", function () {
                return u
            }), t.d(n, "w", function () {
                return d
            }), t.d(n, "p", function () {
                return m
            }), t.d(n, "q", function () {
                return f
            }), t.d(n, "o", function () {
                return p
            }), t.d(n, "d", function () {
                return h
            }), t.d(n, "f", function () {
                return g
            }), t.d(n, "e", function () {
                return b
            }), t.d(n, "g", function () {
                return v
            }), t.d(n, "c", function () {
                return x
            }), t.d(n, "a", function () {
                return E
            }), t.d(n, "b", function () {
                return y
            }), t.d(n, "h", function () {
                return j
            }), t.d(n, "v", function () {
                return _
            }), t.d(n, "i", function () {
                return w
            }), t.d(n, "j", function () {
                return k
            });
            var r = function (e) {
                    return "rgba(3, 168, 124, ".concat(e, ")")
                },
                o = function (e) {
                    return "rgba(1, 143, 105, ".concat(e, ")")
                },
                i = "rgba(52, 231, 154, ".concat(1, ")"),
                a = r(1),
                c = function (e) {
                    return "rgba(2, 158, 116, ".concat(e, ")")
                }(1),
                s = o(1),
                l = function (e) {
                    return "rgba(0, 0, 0, ".concat(e, ")")
                },
                u = function (e) {
                    return "rgba(255, 255, 255, ".concat(e, ")")
                },
                d = (l(1), u(1)),
                m = "rgba(12, 242, 143, .2)",
                f = "rgba(12, 242, 150, .5)",
                p = "rgba(12, 235, 160, .9)",
                h = "#D3E9DA",
                g = "#E8F3EC",
                b = "#01B595",
                v = "#218799",
                x = "#FEF2ED",
                E = "#FCE7DD",
                y = "#EE6F70",
                j = "rgb(204, 84, 84)",
                _ = "rgb(204, 84, 84)",
                w = "rgb(59, 89, 152)",
                k = "rgb(29, 49, 91)"
        },
        "./src/styles/flex.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            var r = function (e) {
                return {
                    display: "flex",
                    flexDirection: e.flexDirection,
                    justifyContent: e.justifyContent,
                    alignItems: e.alignItems
                }
            }
        },
        "./src/styles/font.js": function (e, n, t) {
            "use strict";
            t.d(n, "e", function () {
                return a
            }), t.d(n, "n", function () {
                return l
            }), t.d(n, "o", function () {
                return u
            }), t.d(n, "m", function () {
                return p
            }), t.d(n, "f", function () {
                return h
            }), t.d(n, "d", function () {
                return g
            }), t.d(n, "g", function () {
                return b
            }), t.d(n, "k", function () {
                return v
            }), t.d(n, "i", function () {
                return x
            }), t.d(n, "c", function () {
                return E
            }), t.d(n, "b", function () {
                return y
            }), t.d(n, "q", function () {
                return j
            }), t.d(n, "s", function () {
                return _
            }), t.d(n, "h", function () {
                return k
            }), t.d(n, "j", function () {
                return S
            }), t.d(n, "a", function () {
                return C
            }), t.d(n, "p", function () {
                return O
            }), t.d(n, "l", function () {
                return I
            }), t.d(n, "r", function () {
                return A
            });
            var r = t("./src/framework/design-system/util/style/responsiveStyles.js"),
                o = function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return n.map(function (e) {
                        return -1 === e.indexOf(" ") ? e : '"'.concat(e, '"')
                    }).join(", ")
                },
                i = o("medium-content-title-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                a = o("medium-content-sans-serif-font", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Geneva", "Arial", "sans-serif"),
                c = o("medium-content-serif-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                s = o("medium-content-slab-serif-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                l = o("medium-content-title-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                u = o("medium-marketing-display-font", "Georgia", "Cambria", "Times New Roman", "Times", "serif"),
                d = o("Menlo", "Monaco", "Courier New", "Courier", "monospace"),
                m = o("medium-content-sans-serif-font", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"),
                f = function (e, n) {
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return function (o) {
                            var i = (t || {}).fontSize,
                                a = {
                                    fontFamily: e,
                                    fontWeight: n
                                };
                            if (i && o) {
                                var c = Object(r.b)(i, function (e) {
                                        return "".concat(e, "px")
                                    }),
                                    s = Object(r.a)(o, {
                                        fontSize: c
                                    });
                                Object.assign(a, s)
                            }
                            return a
                        }
                    }
                },
                p = f(i, 400),
                h = f(a, 600),
                g = f(a, 700),
                b = f(a, 300),
                v = f(c, 400),
                x = f(c, 700),
                E = f(d, 700),
                y = f(s, 300),
                j = f(d, 400),
                _ = f(m, 400),
                w = (f(l, 500), f(u, 500)),
                k = {
                    xHeight: .342,
                    baseline: .22
                },
                S = {
                    xHeight: .375,
                    baseline: .17
                },
                C = {
                    xHeight: .342,
                    baseline: .22
                },
                O = {
                    xHeight: 0,
                    baseline: 0
                },
                I = {
                    xHeight: .5,
                    baseline: .16
                },
                A = {
                    INTERFACE: b(),
                    INTERFACE_HEAVY: h(),
                    STORY: v(),
                    STORY_HEAVY: x(),
                    MARKETING: w(),
                    TITLE: p(),
                    MONOSPACE: j()
                }
        },
        "./src/styles/mediaTypes.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            var r = function (e) {
                return "@media print"
            }
        },
        "./src/styles/newBreakpoints.js": function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, "xs", function () {
                return r
            }), t.d(n, "sm", function () {
                return o
            }), t.d(n, "md", function () {
                return i
            }), t.d(n, "lg", function () {
                return a
            }), t.d(n, "xl", function () {
                return c
            });
            var r = function (e) {
                    return "@media all and (max-width: ".concat(e.breakpoints.sm - .02, "px)")
                },
                o = function (e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.sm, "px) and ") + "(max-width: ".concat(e.breakpoints.md - .02, "px)")
                },
                i = function (e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.md, "px) and ") + "(max-width: ".concat(e.breakpoints.lg - .02, "px)")
                },
                a = function (e) {
                    return "@media all and " + "(min-width: ".concat(e.breakpoints.lg, "px) and ") + "(max-width: ".concat(e.breakpoints.xl - .02, "px)")
                },
                c = function (e) {
                    return "@media all and (min-width: ".concat(e.breakpoints.xl, "px)")
                }
        },
        "./src/styles/position.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            var r = function () {
                return {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%"
                }
            }
        },
        "./src/styles/theme.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return i
            });
            var r = t("./src/framework/design-system/util/fonts.js"),
                o = t("./src/styles/colors.js"),
                i = {
                    scale: {
                        ui: "REGULAR"
                    },
                    breakpoints: {
                        xs: 0,
                        sm: 552,
                        md: 728,
                        lg: 904,
                        xl: 1080
                    },
                    grid: {
                        xStep: 4,
                        yStep: 4,
                        gutterSteps: {
                            xs: 6,
                            sm: 6,
                            md: 6,
                            lg: 6,
                            xl: 6
                        },
                        marginSteps: {
                            xs: 6,
                            sm: 6,
                            md: 6,
                            lg: 6,
                            xl: 6
                        },
                        xlMaxContentWidth: 1080,
                        columnWidth: 64,
                        gutterWidth: 24
                    },
                    font: {
                        elevate: r.a,
                        marketing: r.d,
                        uiHeavy: r.b,
                        uiRegular: r.c
                    },
                    borderRadius: {
                        regular: 4
                    },
                    borderWidth: 1,
                    borderWidthThick: 2,
                    borderStyle: "solid",
                    backgroundColor: o.w,
                    accentColor: {
                        border: {
                            light: o.k,
                            normal: o.l,
                            dark: o.m,
                            darker: o.n
                        },
                        fill: {
                            light: o.k,
                            normal: o.l,
                            dark: o.m
                        },
                        fillTransparent: {
                            light: o.s(.5),
                            normal: o.s(.75),
                            dark: o.t(.75)
                        },
                        text: {
                            light: o.l,
                            normal: o.m,
                            dark: o.n
                        }
                    },
                    baseColor: {
                        background: {
                            light: o.r(.02),
                            normal: o.r(.05),
                            dark: o.r(.07)
                        },
                        border: {
                            lighter: o.r(.1),
                            light: o.r(.2),
                            normal: o.r(.34),
                            dark: o.r(.54),
                            darker: o.r(.84)
                        },
                        text: {
                            lighter: o.r(.54),
                            light: o.r(.76),
                            normal: o.r(.84),
                            dark: o.r(.9),
                            darker: o.r(.97)
                        },
                        fill: {
                            lighter: o.r(.54),
                            light: o.r(.76),
                            normal: o.r(.84),
                            dark: o.r(.9),
                            darker: o.r(.97)
                        },
                        overlay: {
                            lighter: o.u(.2),
                            light: o.u(.4),
                            normal: o.u(.5),
                            dark: o.u(.95)
                        }
                    },
                    brandColor: {
                        sage: {
                            light: o.f,
                            normal: o.d,
                            dark: o.e
                        },
                        rose: {
                            light: o.c,
                            normal: o.a,
                            dark: o.b
                        }
                    },
                    errorColor: o.h,
                    warnColor: o.v,
                    highlightColor: {
                        light: o.p,
                        normal: o.q,
                        dark: o.o
                    }
                }
        },
        "./src/styles/zIndex.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return r
            });
            var r = {
                cardTop1: 11,
                cardTop2: 8,
                cardTop3: 7,
                cardCur: 10,
                cardBottom1: 9,
                cardBottom2: 8,
                cardBottom3: 7,
                foreground: 1,
                cardContainer: 2,
                authorLockup: 3,
                cursor: 1e3
            };
            n.a = {
                metabar: 500,
                metabarProgress: 510,
                metabarCenter: 600,
                popover: 700,
                modal: 800,
                floating: 900,
                toast: 900,
                loading: 1e3,
                debug: 1100,
                selectionMenu: 400
            }
        },
        "./src/svg/arrow-left-19px.svg": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z",
                fillRule: "evenodd"
            });
            n.a = function (e) {
                return o.a.createElement("svg", i({
                    className: "arrow-left-19px_svg__svgIcon-use",
                    width: 19,
                    height: 19,
                    viewBox: "0 0 19 19"
                }, e), a)
            }
        },
        "./src/svg/logo-wordmark-138x27px.svg": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M130 27V16.96c0-3.26-.15-5.47-2.44-5.47-1.16 0-2.13.57-2.86 1.51.22.9.3 1.97.3 3.13 0 2.24.04 5.1 0 7.97 0 .47-.05.58.24.87L127 27h-8V16.96c0-3.3-.46-5.47-2.7-5.47-1.17 0-1.65.65-2.3 1.6V24.1c0 .47-.03.58.3.87L116 27h-8V11.56c0-.47-.07-.58-.36-.9L106 9h8v3.61c.9-2.53 2.44-4.11 5.37-4.11 2.68 0 4.5 1.47 5.26 4.26.83-2.4 3-4.26 6.05-4.26 3.59 0 5.32 2.63 5.32 7.63 0 2.39.04 5.1 0 7.97 0 .47 0 .65.25.87L138 27h-8zm-27-3.04c0 .47-.15.61.18.9L105 27h-8v-4c-.9 2.46-2.96 4-5.64 4-3.58 0-5.36-2.61-5.36-7.54 0-2.39-.04-5 0-7.94 0-.47-.11-.58-.4-.87L84 9h8v9.63c0 3.22.27 5.4 2.3 5.4 1.16 0 2.08-.73 2.7-1.63V11.56c0-.47-.13-.58-.42-.9L95 9h8v14.96zM78 .24a3.25 3.25 0 0 1 3.25 3.25A3.25 3.25 0 1 1 78 .25zM75 27V11.56c0-.47.17-.58-.12-.9L73 9h8v15.1c0 .47-.01.68.24.9L83 27h-8zM64 11.7a3.1 3.1 0 0 0-2.4-1.12c-1.95 0-3.84 1.78-3.84 7.03 0 4.93 1.63 6.67 3.66 6.67.9 0 1.85-.43 2.58-1.38V11.7zM70 24c0 .46-.03.57.3.86L72 27h-8v-3.7c-1.09 2.5-3.05 3.7-5.37 3.7-4.13 0-7.13-3.26-7.13-9.2 0-5.59 3.25-9.32 7.78-9.32 2.36 0 3.92 1.12 4.72 2.9v-7.5c0-.47-.08-.62-.4-.9L62 1.3 70 .3v23.7zm-26.1-8c.04-.47.04-.67.04-.81 0-4.75-.94-5.44-2.44-5.44s-2.85 1-2.93 6.25h5.33zm-5.33 1c0 4.71 2.4 6.63 5.19 6.63 2.17 0 4.3-.94 5.5-3.33h.08c-.95 4.56-3.77 6.7-8.01 6.7-4.57 0-8.88-2.75-8.88-9.13 0-6.7 4.28-9.39 9.1-9.39 3.84 0 7.93 1.81 7.93 7.65 0 .1 0 .44-.03.87H38.57zM31.5 27h-12l2.39-2.65c.08-.08.11-.4.11-.87V7l-7.87 20L5.58 8.37c-.22-.47-.4-1.08-.58-1.6v13.85c0 .58-.04.65.36 1.2L9 27H0l3.64-5.18c.4-.55.36-.62.36-1.2V6.27c0-.62.1-.69-.2-1.05L1 1h8.5l7.35 16.3L23.24 1h8.26l-2.2 2.75c-.33.33-.3.6-.3 1.1V23.5c0 .47 0 .75.14.87L31.5 27z"
            });
            n.a = function (e) {
                return o.a.createElement("svg", i({
                    width: 138,
                    height: 27,
                    viewBox: "0 0 138 27"
                }, e), a)
            }
        },
        "./src/svg/star-15px.svg": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"
            });
            n.a = function (e) {
                return o.a.createElement("svg", i({
                    className: "star-15px_svg__svgIcon-use",
                    width: 15,
                    height: 15,
                    viewBox: "0 0 15 15"
                }, e), a)
            }
        },
        "./src/svg/twitter-filled-25px.svg": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M20.5 6.25c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .27.03.54.07.8a9.91 9.91 0 0 1-7.17-3.67 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44v.06c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.5L4 18.24a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.48 1.28-1.1 1.74-1.8-.63.29-1.3.48-2 .55a3.33 3.33 0 0 0 1.5-1.93"
            });
            n.a = function (e) {
                return o.a.createElement("svg", i({
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25"
                }, e), a)
            }
        },
        "./src/svg/x-25px.svg": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/react/index.js"),
                o = t.n(r);

            function i() {
                return (i = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = o.a.createElement("path", {
                d: "M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            });
            n.a = function (e) {
                return o.a.createElement("svg", i({
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25"
                }, e), a)
            }
        },
        "./src/util/LocalStorage.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return m
            });
            var r = t("./node_modules/@babel/runtime/helpers/defineProperty.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                s = t.n(c),
                l = t("./src/log/index.js"),
                u = function () {
                    var e = !1;
                    try {
                        window.localStorage || (e = !1), window.localStorage.setItem("storage-test", "1"), e = !!window.localStorage.getItem("storage-test")
                    } catch (n) {
                        e = !1
                    } finally {
                        return e && window.localStorage.removeItem("storage-test"), e
                    }
                }(),
                d = function () {
                    function e() {
                        a()(this, e), this.data = {}
                    }
                    return s()(e, [{
                        key: "setItem",
                        value: function (e, n) {
                            this.data[e] = n
                        }
                    }, {
                        key: "getItem",
                        value: function (e) {
                            return this.data[e]
                        }
                    }, {
                        key: "removeItem",
                        value: function (e) {
                            delete this.data[e]
                        }
                    }]), e
                }(),
                m = function () {
                    function e(n) {
                        a()(this, e), this.prefix = n, this.storage = u ? window.localStorage : e.fallbackStorage
                    }
                    return s()(e, [{
                        key: "withPrefix",
                        value: function (e) {
                            return "".concat(this.prefix, "|").concat(e)
                        }
                    }, {
                        key: "set",
                        value: function (e, n) {
                            this.storage.setItem(this.withPrefix(e), JSON.stringify(n))
                        }
                    }, {
                        key: "get",
                        value: function (e, n) {
                            var t = this.storage.getItem(this.withPrefix(e));
                            if (t) try {
                                return JSON.parse(t)
                            } catch (n) {
                                l.a.warn({
                                    msg: "Error parsing JSON from LocalStorage",
                                    err: n,
                                    key: e
                                })
                            }
                            return n
                        }
                    }, {
                        key: "getItems",
                        value: function (e) {
                            var n = this,
                                t = this.storage instanceof d ? this.storage.data : this.storage,
                                r = Object.keys(t);
                            return r.sort(), r.reduce(function (t, r) {
                                return void 0 !== e && Object.keys(t).length >= e ? t : r.startsWith(n.prefix) && (r = r.split("|")[1]) ? (t[r] = n.get(r), t) : t
                            }, {})
                        }
                    }, {
                        key: "remove",
                        value: function (e) {
                            this.storage.removeItem(this.withPrefix(e))
                        }
                    }, {
                        key: "getKeys",
                        value: function () {
                            var e = [],
                                n = this.withPrefix(""),
                                t = this.storage;
                            for (var r in t) 0 === r.indexOf(n) && e.push(r.slice(n.length));
                            return e.sort(), e
                        }
                    }, {
                        key: "getCount",
                        value: function () {
                            return this.getKeys().length
                        }
                    }, {
                        key: "clean",
                        value: function () {
                            var e = this;
                            this.getKeys().forEach(function (n) {
                                return e.remove(n)
                            })
                        }
                    }]), e
                }();
            o()(m, "fallbackStorage", new d)
        },
        "./src/util/dom.js": function (e, n, t) {
            "use strict";

            function r(e) {
                return e.getBoundingClientRect()
            }

            function o(e) {
                var n = c();
                return {
                    left: e.left + n.left,
                    top: e.top + n.top,
                    width: e.width,
                    height: e.height
                }
            }

            function i(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.left || 0,
                    r = n.top || 0,
                    o = n.right || 0,
                    i = n.bottom || 0;
                return {
                    left: e.left + t,
                    top: e.top + r,
                    width: e.width - t + o,
                    height: e.height - r + i
                }
            }

            function a() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }

            function c() {
                var e = document.documentElement || {},
                    n = document.body || {};
                return {
                    left: e.scrollLeft || n.scrollLeft || 0,
                    top: e.scrollTop || n.scrollTop || 0,
                    width: e.scrollWidth || n.scrollWidth || 0,
                    height: e.scrollHeight || n.scrollHeight || 0
                }
            }

            function s(e) {
                return l(a(), e)
            }

            function l(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = Math.max(e.left, n.left),
                    o = Math.max(e.top, n.top),
                    i = Math.min(e.left + e.width, n.left + n.width);
                return Math.min(e.top + e.height, n.top + n.height) - o >= -t && i - r >= -t
            }

            function u() {
                return "undefined" != typeof window && window.devicePixelRatio || 2
            }
            t.d(n, "a", function () {
                return r
            }), t.d(n, "d", function () {
                return o
            }), t.d(n, "h", function () {
                return i
            }), t.d(n, "e", function () {
                return a
            }), t.d(n, "c", function () {
                return c
            }), t.d(n, "g", function () {
                return s
            }), t.d(n, "f", function () {
                return l
            }), t.d(n, "b", function () {
                return u
            })
        },
        "./src/util/hooks/useScript.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = new Set,
                c = function (e, n) {
                    var t = i.useState({
                            loaded: !1,
                            error: !1
                        }),
                        r = o()(t, 2),
                        c = r[0],
                        s = r[1];
                    return i.useEffect(function () {
                        if (!a.has(e)) {
                            a.add(e);
                            var t = document.createElement("script");
                            t.src = e, t.async = !0, n && (t = Object.assign(t, n));
                            var r = function () {
                                    s({
                                        loaded: !0,
                                        error: !1
                                    })
                                },
                                o = function () {
                                    a.has(e) && a.delete(e), t.remove(), s({
                                        loaded: !0,
                                        error: !0
                                    })
                                };
                            return t.addEventListener("load", r), t.addEventListener("error", o), document.body.appendChild(t),
                                function () {
                                    t.removeEventListener("load", r), t.removeEventListener("error", o)
                                }
                        }
                        s({
                            loaded: !0,
                            error: !1
                        })
                    }, [e]), [c.loaded, c.error]
                }
        },
        "./src/util/hooks/useUserAgentMobileOrTablet.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./node_modules/react/index.js"),
                a = t("./src/util/useragent.js"),
                c = function () {
                    var e = i.useState(!1),
                        n = o()(e, 2),
                        t = n[0],
                        r = n[1];
                    return i.useEffect(function () {
                        r(Object(a.b)(navigator.userAgent))
                    }, []), t
                }
        },
        "./src/util/invariant.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return r
            });
            var r = function (e, n) {
                var t;
                if (!e) throw void 0 === n ? t = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.") : (t = new Error(n)).name = "Invariant Violation", t.framesToPop = 1, t
            }
        },
        "./src/util/miroImage.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return o
            }), t.d(n, "b", function () {
                return i
            });
            var r = t("./src/util/dom.js"),
                o = function (e) {
                    var n = e.miroId,
                        t = e.width,
                        o = e.height,
                        i = e.strategy,
                        a = e.cropType,
                        c = void 0 === a ? "c" : a,
                        s = e.blur,
                        l = e.verticalGradient,
                        u = e.darken,
                        d = e.lighten,
                        m = e.freezeGifs,
                        f = void 0 === m || m,
                        p = e.focusPercentX,
                        h = e.focusPercentY,
                        g = e.ignorePixelRatio,
                        b = void 0 !== g && g,
                        v = e.leftPosition,
                        x = void 0 === v ? 0 : v,
                        E = e.topPosition,
                        y = void 0 === E ? 0 : E,
                        j = e.quality;
                    if (void 0 === o && i && !["RESAMPLE", "PROXY"].includes(i)) throw new Error("MiroUrl: Expected a height param when using ".concat(i, " but none given."));
                    o = Math.round(o || 0), t = Math.round(t);
                    var _ = [],
                        w = [];
                    _.push("https://miro.medium.com");
                    var k = p && p >= 0 && h && h >= 0;
                    /\.gif$/.test(n) && f && _.push("freeze");
                    var S = b ? 1 : Object(r.b)(),
                        C = Math.round(t * S),
                        O = Math.round(o * S);
                    switch (i) {
                        case "CROP":
                            k ? (p = Math.round(p || 0), h = Math.round(h || 0), _.push("focal", C, O, p, h)) : _.push("fit", c, C, O);
                            break;
                        case "LETTERBOX":
                            _.push("letterbox", C, O, x, y);
                            break;
                        case "RESAMPLE":
                            _.push("max", C);
                            break;
                        case "PROXY":
                        default:
                            _.push("proxy")
                    }
                    if (l) {
                        var I = l.start,
                            A = l.end,
                            L = l.opacity;
                        _.push("gradv", I, A, L)
                    }
                    u && _.push("darken", u), d && _.push("lighten", d), s && _.push("blur", s), j && w.push("q=".concat(j)), _.push(n);
                    var N = w.join("&");
                    return _.join("/") + (N ? "?".concat(N) : "")
                },
                i = function (e) {
                    var n = e.miroId,
                        t = e.width,
                        r = e.height;
                    return o({
                        miroId: n,
                        width: t * (t / r > 1 ? 30 / t : 30 / r),
                        freezeGifs: !0,
                        strategy: "RESAMPLE",
                        quality: 20
                    })
                }
        },
        "./src/util/navigation.js": function (e, n, t) {
            "use strict";
            t.d(n, "e", function () {
                return s
            }), t.d(n, "c", function () {
                return l
            }), t.d(n, "d", function () {
                return u
            }), t.d(n, "a", function () {
                return d
            }), t.d(n, "b", function () {
                return m
            });
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/url/url.js"),
                a = t.n(i),
                c = t("./node_modules/querystring-es3/index.js");

            function s(e, n) {
                var t = a.a.parse(e, !1, !0);
                return !!t && (!t.hostname || t.hostname === n)
            }

            function l(e) {
                var n = a.a.parse(e, !1, !0);
                return n && n.path ? n.path : ""
            }

            function u(e, n, t) {
                var r = a.a.parse(e, !1, !0);
                return t.pathname + (t.search || "") === r.path && (!r.hostname || r.hostname === n)
            }

            function d(e, n) {
                var t = Object(i.parse)(e),
                    r = o()({}, Object(c.parse)(t.query || ""), n);
                return t.search = "?".concat(Object(c.stringify)(r)), Object(i.format)(t)
            }

            function m(e, n) {
                return "https://".concat(e).concat(n)
            }
        },
        "./src/util/numbers.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return c
            }), t.d(n, "d", function () {
                return s
            }), t.d(n, "a", function () {
                return l
            }), t.d(n, "e", function () {
                return u
            }), t.d(n, "c", function () {
                return d
            });
            var r = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),
                a = t.n(i);

            function c(e) {
                if (isNaN(e)) return String(e);
                for (var n = ["", "K", "M"], t = e = e ? Math.round(e) : 0, r = e % 1e3 / 1e3, o = 0; e > 999 && o < n.length; o++) r = e % 1e3, t = e, e = Math.floor(e / 1e3);
                if (o >= n.length) return t + n[n.length - 1];
                for (var i = e + 1, a = 0; i % 10 == 0 && a < 9; a++) i /= 10;
                var c = -1 !== [1, 2, 5, null].indexOf(i),
                    s = e < 100 && c,
                    l = e < 20 || c && !s;
                return e + (s && r >= 990 ? ".99" : s && r >= 980 ? ".98" : s && r >= 970 ? ".97" : s && r >= 960 ? ".96" : s && r >= 950 ? ".95" : s && r >= 940 ? ".94" : s && r >= 930 ? ".93" : s && r >= 920 ? ".92" : s && r >= 910 ? ".91" : (s || l) && r >= 900 ? ".9" : l && r >= 800 ? ".8" : l && r >= 700 ? ".7" : l && r >= 600 ? ".6" : l && r >= 500 ? ".5" : l && r >= 400 ? ".4" : l && r >= 300 ? ".3" : l && r >= 200 ? ".2" : l && r >= 100 ? ".1" : "") + n[o]
            }

            function s(e) {
                return Math.max(1, Math.ceil(e))
            }

            function l(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD",
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("USD" === n) {
                    var r = parseFloat(e / 100);
                    return r = t || e % 100 ? r.toFixed(2) : parseInt(r, 10), "$".concat(r)
                }
                throw new Error("Unsupported currency: ".concat(n))
            }

            function u(e) {
                return e.toLocaleString()
            }

            function d(e) {
                var n, t = function (e) {
                        return Number(e) || 0
                    },
                    r = function (e) {
                        return 0 === e.length
                    },
                    i = function (e) {
                        return function (n) {
                            return n.slice(0, e)
                        }
                    },
                    c = function (e) {
                        return function (n) {
                            return function (t) {
                                return e(n(t))
                            }
                        }
                    },
                    s = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
                    l = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
                    u = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"],
                    d = String(e);
                return "0" === d ? "zero" : c(function e(n) {
                    return function (t) {
                        return r(t) ? [] : [i(n)(t)].concat(a()(e(n)(function (e) {
                            return function (n) {
                                return n.slice(e)
                            }
                        }(n)(t))))
                    }
                }(3))(function (e) {
                    return e.slice(0).reverse()
                })((n = d, n.split(""))).map(function (e) {
                    var n = o()(e, 3),
                        r = n[0],
                        i = n[1],
                        a = n[2];
                    return [0 === t(a) ? "" : s[a] + " hundred ", 0 === t(r) ? l[i] : l[i] && l[i] + "-" || "", s[i + r] || s[r]].join("")
                }).map(function (e, n) {
                    return "" === e ? e : "".concat(e, " ").concat(u[n])
                }).filter(c(function (e) {
                    return !e
                })(r)).reverse().join(" ").trim()
            }
        },
        "./src/util/performance.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            }), t.d(n, "d", function () {
                return l
            }), t.d(n, "b", function () {
                return u
            }), t.d(n, "c", function () {
                return m
            });
            var r = t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/createClass.js"),
                a = t.n(i),
                c = function () {
                    function e(n, t) {
                        o()(this, e), this.start = n, this.end = t
                    }
                    return a()(e, null, [{
                        key: "fromTiming",
                        value: function (n, t) {
                            var r = window.performance.timing;
                            return new e(r[n], r[t])
                        }
                    }, {
                        key: "fromEntry",
                        value: function (n, t) {
                            var r = window.performance.timing,
                                o = r.navigationStart + t.startTime + t.duration;
                            return new e(r[n], o)
                        }
                    }]), a()(e, [{
                        key: "duration",
                        get: function () {
                            return this.end - this.start
                        }
                    }]), e
                }(),
                s = function () {
                    function e() {
                        o()(this, e), this.result = null, this.observers = []
                    }
                    return a()(e, [{
                        key: "observe",
                        value: function (e) {
                            null != this.result ? e(this.result) : this.observers.push(e)
                        }
                    }, {
                        key: "set",
                        value: function (e) {
                            this.result = e;
                            var n = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var o, i = this.observers[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                                    (0, o.value)(e)
                                }
                            } catch (e) {
                                t = !0, r = e
                            } finally {
                                try {
                                    n || null == i.return || i.return()
                                } finally {
                                    if (t) throw r
                                }
                            }
                        }
                    }]), e
                }(),
                l = new s,
                u = new s,
                d = function () {
                    if (!window.performance || !window.performance.timing) return null;
                    var e = null;
                    if (window.performance.getEntriesByName) {
                        var n = window.performance.getEntriesByName("first-contentful-paint", "paint");
                        n.length > 0 && (e = n[0])
                    }
                    var t = {
                        beforeDomainLookup: c.fromTiming("navigationStart", "domainLookupStart"),
                        domainLookup: c.fromTiming("domainLookupStart", "domainLookupEnd"),
                        connect: c.fromTiming("connectStart", "connectEnd"),
                        request: c.fromTiming("requestStart", "responseStart"),
                        response: c.fromTiming("responseStart", "responseEnd"),
                        load: c.fromTiming("navigationStart", "loadEventStart"),
                        processing: c.fromTiming("domLoading", "loadEventStart")
                    };
                    return null != e && Object.assign(t, {
                        overallFCP: c.fromEntry("navigationStart", e),
                        client: c.fromEntry("responseStart", e),
                        render: c.fromEntry("responseEnd", e)
                    }), t
                };
            var m = function () {
                new Promise(function (e) {
                    document && "complete" !== document.readyState ? document.addEventListener("readystatechange", function n() {
                        "complete" === document.readyState && (document.removeEventListener("readystatechange", n), e())
                    }) : e()
                }).then(function () {
                    setTimeout(function () {
                        return null != (e = d()) && l.set(e), void(window.perfMetrics && window.perfMetrics.onFirstInputDelay(function (e, n) {
                            var t = window.performance.timing,
                                r = n.timeStamp > 1e12 ? n.timeStamp : t.navigationStart + n.timeStamp,
                                o = r + e;
                            u.set({
                                first: new c(r, o)
                            })
                        }));
                        var e
                    }, 0)
                })
            }
        },
        "./src/util/referrers.js": function (e, n, t) {
            "use strict";
            t.d(n, "a", function () {
                return c
            });
            var r = t("./node_modules/url/url.js"),
                o = t.n(r),
                i = ["twitter.com", "t.co", "twitterrific.com"],
                a = function (e) {
                    return o.a.parse(e).hostname
                },
                c = function (e) {
                    return !!e && i.includes(a(e))
                }
        },
        "./src/util/routes.js": function (e, n, t) {
            "use strict";
            t.d(n, "c", function () {
                return u
            }), t.d(n, "e", function () {
                return d
            }), t.d(n, "b", function () {
                return m
            }), t.d(n, "d", function () {
                return f
            }), t.d(n, "l", function () {
                return p
            }), t.d(n, "k", function () {
                return h
            }), t.d(n, "C", function () {
                return g
            }), t.d(n, "D", function () {
                return b
            }), t.d(n, "E", function () {
                return v
            }), t.d(n, "N", function () {
                return x
            }), t.d(n, "a", function () {
                return E
            }), t.d(n, "Q", function () {
                return y
            }), t.d(n, "K", function () {
                return j
            }), t.d(n, "P", function () {
                return _
            }), t.d(n, "H", function () {
                return w
            }), t.d(n, "R", function () {
                return k
            }), t.d(n, "V", function () {
                return S
            }), t.d(n, "U", function () {
                return C
            }), t.d(n, "W", function () {
                return O
            }), t.d(n, "Z", function () {
                return I
            }), t.d(n, "ab", function () {
                return A
            }), t.d(n, "bb", function () {
                return L
            }), t.d(n, "cb", function () {
                return N
            }), t.d(n, "eb", function () {
                return T
            }), t.d(n, "db", function () {
                return P
            }), t.d(n, "fb", function () {
                return R
            }), t.d(n, "gb", function () {
                return U
            }), t.d(n, "lb", function () {
                return M
            }), t.d(n, "mb", function () {
                return B
            }), t.d(n, "nb", function () {
                return D
            }), t.d(n, "ob", function () {
                return H
            }), t.d(n, "pb", function () {
                return F
            }), t.d(n, "sb", function () {
                return z
            }), t.d(n, "rb", function () {
                return V
            }), t.d(n, "tb", function () {
                return q
            }), t.d(n, "wb", function () {
                return W
            }), t.d(n, "xb", function () {
                return G
            }), t.d(n, "Fb", function () {
                return Y
            }), t.d(n, "zb", function () {
                return K
            }), t.d(n, "Eb", function () {
                return X
            }), t.d(n, "Hb", function () {
                return Q
            }), t.d(n, "yb", function () {
                return $
            }), t.d(n, "Cb", function () {
                return J
            }), t.d(n, "Gb", function () {
                return Z
            }), t.d(n, "Bb", function () {
                return ee
            }), t.d(n, "Ab", function () {
                return ne
            }), t.d(n, "Db", function () {
                return te
            }), t.d(n, "vb", function () {
                return re
            }), t.d(n, "O", function () {
                return oe
            }), t.d(n, "Sb", function () {
                return ie
            }), t.d(n, "Tb", function () {
                return ae
            }), t.d(n, "Ub", function () {
                return ce
            }), t.d(n, "Ob", function () {
                return se
            }), t.d(n, "Jb", function () {
                return le
            }), t.d(n, "Ib", function () {
                return ue
            }), t.d(n, "Mb", function () {
                return de
            }), t.d(n, "Kb", function () {
                return me
            }), t.d(n, "Lb", function () {
                return fe
            }), t.d(n, "Nb", function () {
                return pe
            }), t.d(n, "Pb", function () {
                return he
            }), t.d(n, "Rb", function () {
                return ge
            }), t.d(n, "Qb", function () {
                return be
            }), t.d(n, "Vb", function () {
                return ve
            }), t.d(n, "w", function () {
                return Ee
            }), t.d(n, "n", function () {
                return ye
            }), t.d(n, "v", function () {
                return je
            }), t.d(n, "u", function () {
                return _e
            }), t.d(n, "o", function () {
                return we
            }), t.d(n, "r", function () {
                return ke
            }), t.d(n, "q", function () {
                return Se
            }), t.d(n, "s", function () {
                return Ce
            }), t.d(n, "p", function () {
                return Oe
            }), t.d(n, "t", function () {
                return Ie
            }), t.d(n, "x", function () {
                return Ae
            }), t.d(n, "J", function () {
                return Le
            }), t.d(n, "M", function () {
                return Ne
            }), t.d(n, "F", function () {
                return Te
            }), t.d(n, "G", function () {
                return Pe
            }), t.d(n, "y", function () {
                return Re
            }), t.d(n, "z", function () {
                return Ue
            }), t.d(n, "A", function () {
                return Me
            }), t.d(n, "B", function () {
                return Be
            }), t.d(n, "Y", function () {
                return De
            }), t.d(n, "qb", function () {
                return He
            }), t.d(n, "X", function () {
                return Fe
            }), t.d(n, "ub", function () {
                return ze
            }), t.d(n, "kb", function () {
                return Ve
            }), t.d(n, "i", function () {
                return qe
            }), t.d(n, "L", function () {
                return We
            }), t.d(n, "g", function () {
                return Ge
            }), t.d(n, "m", function () {
                return Ye
            }), t.d(n, "hb", function () {
                return Ke
            }), t.d(n, "ib", function () {
                return Xe
            }), t.d(n, "jb", function () {
                return Qe
            }), t.d(n, "j", function () {
                return $e
            }), t.d(n, "T", function () {
                return Je
            }), t.d(n, "h", function () {
                return Ze
            }), t.d(n, "f", function () {
                return en
            }), t.d(n, "I", function () {
                return nn
            }), t.d(n, "S", function () {
                return tn
            });
            var r = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                o = t.n(r),
                i = t("./node_modules/graphql-tag/src/index.js"),
                a = t.n(i),
                c = t("./node_modules/url/url.js"),
                s = t.n(c);

            function l() {
                var e = o()(["\n  fragment collectionUrl_collection on Collection {\n    id\n    domain\n    slug\n  }\n"]);
                return l = function () {
                    return e
                }, e
            }
            var u = function (e) {
                    return "/amp/p/".concat(e)
                },
                d = function (e) {
                    return "//".concat(e, "/_/stat?referrerSource=acceleratedMobilePages")
                },
                m = function (e) {
                    return "${base}&postId=${postId}&event=post.clientViewed&pageViewId=${pageViewId}&requestCount=${requestCount}&timestamp=${timestamp}"
                },
                f = function (e) {
                    return "${base}&postId=${postId}&event=amp.scrollPing&collectionId=${collectionId}&scrollTop=${scrollTop}&scrollableHeight=${scrollableHeight}&totalEngagedTime=${totalEngagedTime}&verticalScrollBoundary=${verticalScrollBoundary}&location=${canonicalUrl}&scrollWidth=${scrollWidth}&pageViewId=${pageViewId}&requestCount=${requestCount}&timestamp=${timestamp}"
                },
                p = function (e) {
                    return "https://".concat(e, "/browse/bookmarks")
                },
                h = function (e) {
                    return "/_/bookmark/p/".concat(e)
                },
                g = function () {
                    return "/_/oh-noes"
                },
                b = function (e, n) {
                    return "//".concat(e, "/p/").concat(n, "/share/facebook")
                },
                v = function (e) {
                    return "/_/subscriptions/topic/".concat(e, "/")
                },
                x = function (e, n) {
                    return "https://".concat(e, "/media/").concat(n)
                },
                E = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.authDomain,
                        t = e.autoplay,
                        r = void 0 === t || t;
                    return "https://".concat(n, "/about").concat(r ? "?autoplay=1" : "")
                },
                y = function (e, n) {
                    return "https://".concat(e, "/new-story") + (n && n.inResponseToQuoteId ? "?inResponseToQuoteId=".concat(n.inResponseToQuoteId) : "")
                },
                j = function () {
                    return "/p/import"
                },
                _ = function (e) {
                    return "https://".concat(e, "/membership")
                },
                w = function (e) {
                    return "https://".concat(e, "/gift-checkout")
                },
                k = function (e) {
                    return "https://".concat(e, "/creators")
                },
                S = function (e) {
                    return e ? e.mediumUrl || "/p/".concat(e.id) : ""
                },
                C = function (e, n) {
                    return "https://".concat(e, "/p/").concat(n, "/edit")
                },
                O = function (e, n) {
                    return "https://".concat(e, "/p/").concat(n)
                },
                I = function (e) {
                    return "/_/p/".concat(e, "/quotes/create")
                },
                A = function () {
                    return "/search"
                },
                L = function (e) {
                    return "/s/".concat(e)
                },
                N = function (e) {
                    return "/series/".concat(e)
                },
                T = function (e) {
                    return "/m/signout/".concat(e)
                },
                P = function (e, n) {
                    return "https://".concat(e, "/m/signin?operation=login").concat(n ? "&redirect=".concat(encodeURIComponent(n)) : "")
                },
                R = function (e, n) {
                    return "https://".concat(e, "/m/signin?operation=register").concat(n ? "&redirect=".concat(encodeURIComponent(n)) : "")
                },
                U = function (e, n) {
                    return "https://".concat(e, "/p/").concat(n, "/responses/show")
                },
                M = function (e) {
                    return "/_/subscribe/collection/".concat(e)
                },
                B = function (e, n) {
                    return "/_/subscribe/collection/".concat(e, "/").concat(n)
                },
                D = function (e) {
                    return "/_/subscribe/user/".concat(e)
                },
                H = function (e, n) {
                    return "/_/subscribe/user/".concat(e, "/").concat(n)
                },
                F = function (e) {
                    return "/tag/".concat(e)
                },
                z = function (e) {
                    return "https://".concat(e, "/topics")
                },
                V = function (e, n) {
                    return "https://".concat(e, "/topic/").concat(n)
                },
                q = function (e, n) {
                    return "//".concat(e, "/p/").concat(n, "/share/twitter")
                },
                W = function (e) {
                    return "/_/vote/p/".concat(e)
                },
                G = function (e, n) {
                    return "/_/vote/".concat(e, "/").concat(n)
                },
                Y = function (e) {
                    return "/@".concat(e)
                },
                K = function (e) {
                    return "/@".concat(e, "/edit")
                },
                X = function (e) {
                    return "/@".concat(e, "/latest")
                },
                Q = function (e) {
                    return "/@".concat(e, "/series")
                },
                $ = function (e) {
                    return "/@".concat(e, "/has-recommended")
                },
                J = function (e) {
                    return "/@".concat(e, "/highlights")
                },
                Z = function (e) {
                    return "/@".concat(e, "/responses")
                },
                ee = function (e) {
                    return "/@".concat(e, "/following")
                },
                ne = function (e) {
                    return "/@".concat(e, "/followers")
                },
                te = function (e) {
                    return "/u/".concat(e)
                },
                re = function (e) {
                    return "https://".concat(e, "/upgrade")
                },
                oe = function (e, n) {
                    return "https://".concat(e).concat(Y(n))
                },
                ie = function () {
                    return "/me/stories/drafts"
                },
                ae = function () {
                    return "/me/stories/public"
                },
                ce = function () {
                    return "/me/stories/unlisted"
                },
                se = function () {
                    return "/me/settings#account"
                },
                le = function (e) {
                    return "https://".concat(e, "/me/activity")
                },
                ue = function (e) {
                    return "https://".concat(e, "/me/following/suggestions")
                },
                de = function (e) {
                    return "https://".concat(e, "/me/list/queue")
                },
                me = function (e) {
                    return "https://".concat(e, "/me/partner/dashboard")
                },
                fe = function (e) {
                    return "https://".concat(e, "/me/publications")
                },
                pe = function (e) {
                    return "https://".concat(e, "/me/series/drafts")
                },
                he = function (e) {
                    return "https://".concat(e, "/me/settings")
                },
                ge = function (e) {
                    return "https://".concat(e, "/me/stats")
                },
                be = function (e, n) {
                    return "https://".concat(e, "/me/stats/post/").concat(n)
                },
                ve = function (e) {
                    return "https://".concat(e, "/me/stories")
                },
                xe = function (e) {
                    return e.slug ? "/".concat(e.slug) : "/c/".concat(e.id)
                },
                Ee = function (e, n) {
                    var t = s.a.parse(n).port;
                    return e.domain ? "https://".concat(e.domain).concat(t ? ":".concat(t) : "") : xe(e)
                },
                ye = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/new-story")
                },
                je = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/stories/submissions")
                },
                _e = function (e, n) {
                    return "".concat(Ee(e, n), "/stats/overview")
                },
                we = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings/dashboard")
                },
                ke = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings/letters")
                },
                Se = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings/followers")
                },
                Ce = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings/navigation")
                },
                Oe = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings/feature-pages")
                },
                Ie = function (e, n) {
                    return "https://".concat(n).concat(xe(e), "/settings")
                },
                Ae = a()(l()),
                Le = function () {
                    return "https://help.medium.com"
                },
                Ne = function () {
                    return "https://medium.com/policy/9db0094a1e0f"
                },
                Te = function () {
                    return "https://help.medium.com/hc/en-us/articles/360006543813"
                },
                Pe = function () {
                    return "https://help.medium.com/hc/en-us/articles/360006543813-Friend-Links"
                },
                Re = function () {
                    return "https://help.medium.com/hc/en-us/articles/360006362473"
                },
                Ue = function () {
                    return "https://help.medium.com/hc/en-us/articles/360009297694-Frequently-asked-questions-about-distribution-on-Medium"
                },
                Me = function () {
                    return "https://help.medium.com/hc/en-us/articles/360018834314"
                },
                Be = function () {
                    return "https://help.medium.com/hc/en-us/articles/360018834334"
                },
                De = function () {
                    return "https://help.medium.com/hc/en-us/articles/214035868-Leave-a-note"
                },
                He = function () {
                    return "https://medium.com/policy/9db0094a1e0f"
                },
                Fe = function () {
                    return "https://medium.com/policy/f03bf92035c9"
                },
                ze = function (e) {
                    return "https://twitter.com/".concat(e)
                },
                Ve = function () {
                    return "https://medium.statuspage.io"
                },
                qe = function () {
                    return "/m/app"
                },
                We = function () {
                    return "https://itunes.apple.com/app/medium-everyones-stories/id828256236?pt=698524&mt=8"
                },
                Ge = function () {
                    return "https://play.google.com/store/apps/details?id=com.medium.reader"
                },
                Ye = function (e) {
                    return "https://cdn-videos-1.medium.com/".concat(e[0], "/").concat(e[1], "/").concat(e[2], "/").concat(e, "/dash/manifest.mpd")
                },
                Ke = function (e) {
                    return "//".concat(e, "/m/connect/facebook")
                },
                Xe = function (e) {
                    return "//".concat(e, "/m/connect/google")
                },
                Qe = function (e) {
                    return "//".concat(e, "/m/account/authenticate-twitter")
                },
                $e = function () {
                    return "/_/batch"
                },
                Je = function (e) {
                    return "/_/lite/performance/".concat(e)
                },
                Ze = function (e) {
                    return "medium://p/".concat(e)
                },
                en = function (e) {
                    return "android-app://com.medium.reader/".concat(e.replace("https://", "https/"))
                },
                nn = function (e) {
                    return "//".concat(e, "/m/callback/google")
                },
                tn = function () {
                    return "/me/partner/taxes"
                }
        },
        "./src/util/theme.js": function (e, n, t) {
            "use strict";
            var r = t("./node_modules/@babel/runtime/helpers/objectSpread.js"),
                o = t.n(r),
                i = t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                a = t.n(i),
                c = t("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),
                s = t.n(c),
                l = t("./node_modules/graphql-tag/src/index.js"),
                u = t.n(l),
                d = t("./src/styles/theme.js"),
                m = t("./node_modules/lodash/round.js"),
                f = t.n(m),
                p = t("./node_modules/lodash/clamp.js"),
                h = t.n(p),
                g = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{6})$/,
                b = function (e) {
                    if (! function (e) {
                            return g.test(e)
                        }(e)) throw new Error("Invalid color string");
                    return [parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16), parseInt(e.slice(7, 9), 16), parseInt(e.slice(1, 3), 16) / 255]
                },
                v = function (e) {
                    return "rgba(".concat(function (e) {
                        var n = a()(e, 4),
                            t = n[0],
                            r = n[1],
                            o = n[2],
                            i = n[3];
                        return [f()(t), f()(r), f()(o), f()(i, 3)]
                    }(e).join(", "), ")")
                },
                x = function (e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
                    return e * (t = h()(t, 0, 1)) + n * (1 - t)
                },
                E = t("./src/styles/colors.js");

            function y() {
                var e = s()(["\n  fragment ThemeUtilTintBackground_collection on Collection {\n    colorPalette {\n      tintBackgroundSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n    }\n  }\n  ", "\n"]);
                return y = function () {
                    return e
                }, e
            }

            function j() {
                var e = s()(["\n  fragment ThemeUtilAccent_collection on Collection {\n    colorPalette {\n      defaultBackgroundSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n      highlightSpectrum {\n        ...ThemeUtil_colorSpectrum\n      }\n    }\n  }\n  ", "\n"]);
                return j = function () {
                    return e
                }, e
            }

            function _() {
                var e = s()(["\n  fragment ThemeUtil_colorSpectrum on ColorSpectrum {\n    backgroundColor\n    ...ThemeUtilInterpolateHelpers_colorSpectrum\n  }\n  ", "\n"]);
                return _ = function () {
                    return e
                }, e
            }

            function w() {
                var e = s()(["\n  fragment ThemeUtilInterpolateHelpers_colorSpectrum on ColorSpectrum {\n    colorPoints {\n      ...ThemeUtil_colorPoint\n    }\n  }\n  ", "\n"]);
                return w = function () {
                    return e
                }, e
            }

            function k() {
                var e = s()(["\n  fragment ThemeUtil_colorPoint on ColorPoint {\n    color\n    point\n  }\n"]);
                return k = function () {
                    return e
                }, e
            }
            t.d(n, "a", function () {
                return I
            }), t.d(n, "b", function () {
                return A
            }), t.d(n, "c", function () {
                return T
            }), t.d(n, "h", function () {
                return P
            }), t.d(n, "f", function () {
                return R
            }), t.d(n, "e", function () {
                return U
            }), t.d(n, "g", function () {
                return M
            }), t.d(n, "d", function () {
                return B
            });
            var S = u()(k()),
                C = u()(w(), S),
                O = u()(_(), C),
                I = u()(j(), O),
                A = u()(y(), O),
                L = function (e, n) {
                    var t = e.colorPoints;
                    if (!t.length) return [255, 255, 255, 0];
                    for (var r = t.slice().sort(function (e, n) {
                            return e.point === n.point ? 0 : e.point < n.point ? -1 : 1
                        }), o = 0; r[o + 1] && Math.abs(n - r[o + 1].point) < Math.abs(n - r[o].point);) o += 1;
                    var i = r[o];
                    if (n === i.point) return b(i.color);
                    var c = n > i.point ? [r[o], r[o + 1]] : [r[o - 1], r[o]],
                        s = a()(c, 2),
                        l = s[0],
                        u = s[1];
                    if (null == l || null == u || l.point === u.point) return b(i.color);
                    var d = (n - l.point) / (u.point - l.point);
                    return function (e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                            r = a()(e, 4),
                            o = r[0],
                            i = r[1],
                            c = r[2],
                            s = r[3],
                            l = a()(n, 4),
                            u = l[0],
                            d = l[1],
                            m = l[2],
                            f = l[3];
                        return [x(o, u, t), x(i, d, t), x(c, m, t), x(s, f, t)]
                    }(b(l.color), b(u.color), d)
                },
                N = function (e, n) {
                    return v(L(e, n))
                },
                T = function (e, n) {
                    return e && n ? o()({}, d.a, {
                        accentColor: o()({}, d.a.accentColor, {
                            text: {
                                light: N(e, .2),
                                normal: N(e, .2),
                                dark: N(e, .3)
                            },
                            border: {
                                light: N(e, 0),
                                normal: N(e, 0),
                                dark: N(e, .2),
                                darker: N(e, .2)
                            },
                            fill: {
                                light: N(e, 0),
                                normal: N(e, 0),
                                dark: N(e, .2)
                            }
                        }),
                        highlightColor: {
                            light: N(n, .1),
                            normal: N(n, .6),
                            dark: N(n, 1)
                        }
                    }) : d.a
                },
                P = function (e) {
                    return e ? o()({}, d.a, {
                        backgroundColor: (n = e.backgroundColor, v(b(n))),
                        accentColor: o()({}, d.a.accentColor, {
                            text: {
                                light: N(e, .5),
                                normal: N(e, .7),
                                dark: N(e, 1)
                            },
                            border: {
                                light: N(e, .5),
                                normal: N(e, .7),
                                dark: N(e, .9),
                                darker: N(e, 1)
                            },
                            fill: {
                                light: N(e, .5),
                                normal: N(e, .7),
                                dark: N(e, .9)
                            }
                        }),
                        baseColor: o()({}, d.a.baseColor, {
                            background: {
                                light: N(e, .5),
                                normal: N(e, .7),
                                dark: N(e, .9)
                            },
                            border: {
                                lighter: N(e, .5),
                                light: N(e, .5),
                                normal: N(e, .7),
                                dark: N(e, .9),
                                darker: N(e, 1)
                            },
                            text: {
                                lighter: N(e, .45),
                                light: N(e, .6),
                                normal: N(e, .7),
                                dark: N(e, 1)
                            },
                            fill: {
                                lighter: N(e, .45),
                                light: N(e, .6),
                                normal: N(e, .7),
                                dark: N(e, .9)
                            }
                        })
                    }) : d.a;
                    var n
                },
                R = function (e) {
                    return o()({}, e, {
                        backgroundColor: Object(E.u)(1),
                        accentColor: o()({}, e.accentColor, {
                            text: {
                                light: Object(E.u)(.8),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            border: {
                                light: Object(E.u)(.65),
                                normal: Object(E.u)(.8),
                                dark: Object(E.u)(.9),
                                darker: Object(E.u)(1)
                            },
                            fill: {
                                light: Object(E.u)(.6),
                                normal: Object(E.u)(.7),
                                dark: Object(E.u)(.9)
                            }
                        }),
                        baseColor: o()({}, e.baseColor, {
                            background: {
                                light: Object(E.u)(.9),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            border: {
                                lighter: Object(E.u)(.4),
                                light: Object(E.u)(.65),
                                normal: Object(E.u)(.8),
                                dark: Object(E.u)(.9),
                                darker: Object(E.u)(1)
                            },
                            text: {
                                lighter: Object(E.u)(.6),
                                light: Object(E.u)(.8),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            fill: {
                                lighter: Object(E.u)(.45),
                                light: Object(E.u)(.6),
                                normal: Object(E.u)(.7),
                                dark: Object(E.u)(.9)
                            }
                        })
                    })
                },
                U = function (e) {
                    return o()({}, R(e), {
                        backgroundColor: e.errorColor
                    })
                },
                M = function (e) {
                    return o()({}, e, {
                        backgroundColor: Object(E.u)(.2),
                        accentColor: o()({}, e.accentColor, {
                            text: {
                                light: Object(E.u)(.8),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            border: {
                                light: Object(E.u)(.65),
                                normal: Object(E.u)(.8),
                                dark: Object(E.u)(.9),
                                darker: Object(E.u)(1)
                            },
                            fill: {
                                light: Object(E.u)(.6),
                                normal: Object(E.u)(.7),
                                dark: Object(E.u)(.9)
                            }
                        }),
                        baseColor: o()({}, e.baseColor, {
                            background: {
                                light: Object(E.u)(.9),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            border: {
                                lighter: Object(E.u)(.2),
                                light: Object(E.u)(.65),
                                normal: Object(E.u)(.8),
                                dark: Object(E.u)(.9),
                                darker: Object(E.u)(1)
                            },
                            text: {
                                lighter: Object(E.u)(.8),
                                light: Object(E.u)(.9),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            fill: {
                                lighter: Object(E.u)(.45),
                                light: Object(E.u)(.6),
                                normal: Object(E.u)(.7),
                                dark: Object(E.u)(.9)
                            }
                        })
                    })
                },
                B = function (e) {
                    return o()({}, e, {
                        backgroundColor: Object(E.u)(1),
                        baseColor: o()({}, e.baseColor, {
                            background: {
                                light: Object(E.u)(.9),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            border: {
                                lighter: Object(E.u)(.4),
                                light: Object(E.u)(.65),
                                normal: Object(E.u)(.8),
                                dark: Object(E.u)(.9),
                                darker: Object(E.u)(1)
                            },
                            text: {
                                lighter: Object(E.u)(.6),
                                light: Object(E.u)(.8),
                                normal: Object(E.u)(.95),
                                dark: Object(E.u)(1)
                            },
                            fill: {
                                lighter: Object(E.u)(.45),
                                light: Object(E.u)(.6),
                                normal: Object(E.u)(.7),
                                dark: Object(E.u)(.9)
                            }
                        })
                    })
                }
        },
        "./src/util/useragent.js": function (e, n, t) {
            "use strict";
            t.d(n, "b", function () {
                return a
            }), t.d(n, "a", function () {
                return c
            });
            var r = "donkey",
                o = "hangtag";

            function i(e, n) {
                return n.some(function (n) {
                    return -1 !== e.indexOf(n)
                })
            }

            function a(e) {
                if (!e) return !1;
                if (function (e) {
                        return !!e && (function (e) {
                            return !!e && -1 !== e.indexOf(r)
                        }(e) || function (e) {
                            return !!e && -1 !== e.indexOf(o)
                        }(e))
                    }(e)) return !0;
                var n = i(e, ["iPad", "Nexus 10"]),
                    t = !n && i(e, ["iPhone", "iphone", "Android", "BlackBerry"]);
                return n || t
            }

            function c(e) {
                return !!e && -1 !== e.indexOf("Macintosh")
            }
        },
        0: function (e, n, t) {
            t("./config/polyfills.js"), e.exports = t("./src/index.js")
        }
    },
    [
        [0, 9, 24]
    ]
]);
//# sourceMappingURL=main.bf4718e7.chunk.js.map