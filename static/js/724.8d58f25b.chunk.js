"use strict";
(self.webpackChunk_uniswap_interface = self.webpackChunk_uniswap_interface || []).push([
    [724], {
        35724: function(e, a, t) {
            t.r(a), t.d(a, {
                validate: function() {
                    return r
                }
            });
            var r = v;
            a.default = v;
            var s = t(5358).default,
                i = new RegExp("^[\\w ]+$", "u"),
                n = new RegExp("^[\\w]+$", "u"),
                m = new RegExp("^[ \\w]+$", "u"),
                o = new RegExp("^[ \\w\\.,:]+$", "u"),
                p = t(18729).u5["date-time"],
                h = t(18729).u5.uri,
                u = new RegExp("^0x[a-fA-F0-9]{40}$", "u"),
                f = new RegExp("^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$", "u"),
                d = new RegExp("^[a-zA-Z0-9+\\-%/$.]+$", "u");

            function c(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    i = (a.parentData, a.parentDataProperty, a.rootData, null),
                    n = 0,
                    m = n,
                    o = !1,
                    p = n,
                    h = n,
                    u = !1,
                    f = n;
                if (n === f)
                    if ("string" === typeof e) {
                        if (s(e) > 42) {
                            var d = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                                keyword: "maxLength",
                                params: {
                                    limit: 42
                                },
                                message: "must NOT have more than 42 characters"
                            };
                            null === i ? i = [d] : i.push(d), n++
                        } else if (s(e) < 1) {
                            var y = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                                keyword: "minLength",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                            };
                            null === i ? i = [y] : i.push(y), n++
                        }
                    } else {
                        var l = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        };
                        null === i ? i = [l] : i.push(l), n++
                    }
                var g = f === n;
                if (!(u = u || g)) {
                    var P = n;
                    if ("boolean" !== typeof e) {
                        var v = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === i ? i = [v] : i.push(v), n++
                    }
                    g = P === n;
                    if (!(u = u || g)) {
                        var w = n;
                        if ("number" != typeof e || !isFinite(e)) {
                            var F = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === i ? i = [F] : i.push(F), n++
                        }
                        g = w === n;
                        if (!(u = u || g)) {
                            var k = n;
                            if (null !== e) {
                                var b = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === i ? i = [b] : i.push(b), n++
                            }
                            g = k === n;
                            u = u || g
                        }
                    }
                }
                if (u) n = h, null !== i && (h ? i.length = h : i = null);
                else {
                    var D = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === i ? i = [D] : i.push(D), n++
                }
                if (!(o = o || p === n)) {
                    var x = {
                        instancePath: r,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === i ? i = [x] : i.push(x), n++, c.errors = i, !1
                }
                return n = m, null !== i && (m ? i.length = m : i = null), c.errors = i, 0 === n
            }

            function y(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    i = (a.parentData, a.parentDataProperty, a.rootData),
                    m = void 0 === i ? e : i,
                    o = null,
                    p = 0,
                    h = p,
                    u = !1,
                    f = p,
                    d = p,
                    l = !1,
                    g = p;
                if (p === g)
                    if ("string" === typeof e) {
                        if (s(e) > 42) {
                            var P = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                                keyword: "maxLength",
                                params: {
                                    limit: 42
                                },
                                message: "must NOT have more than 42 characters"
                            };
                            null === o ? o = [P] : o.push(P), p++
                        } else if (s(e) < 1) {
                            var v = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                                keyword: "minLength",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                            };
                            null === o ? o = [v] : o.push(v), p++
                        }
                    } else {
                        var w = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        };
                        null === o ? o = [w] : o.push(w), p++
                    }
                var F = g === p;
                if (!(l = l || F)) {
                    var k = p;
                    if ("boolean" !== typeof e) {
                        var b = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === o ? o = [b] : o.push(b), p++
                    }
                    F = k === p;
                    if (!(l = l || F)) {
                        var D = p;
                        if ("number" != typeof e || !isFinite(e)) {
                            var x = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === o ? o = [x] : o.push(x), p++
                        }
                        F = D === p;
                        if (!(l = l || F)) {
                            var N = p;
                            if (null !== e) {
                                var O = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === o ? o = [O] : o.push(O), p++
                            }
                            F = N === p;
                            l = l || F
                        }
                    }
                }
                if (l) p = d, null !== o && (d ? o.length = d : o = null);
                else {
                    var $ = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === o ? o = [$] : o.push($), p++
                }
                var z = f === p;
                if (!(u = u || z)) {
                    var T = p;
                    if (p === T)
                        if (e && "object" == typeof e && !Array.isArray(e))
                            if (Object.keys(e).length > 10) {
                                var E = {
                                    instancePath: r,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === o ? o = [E] : o.push(E), p++
                            } else {
                                for (var I in e) {
                                    var L = p;
                                    if (p === p)
                                        if ("string" === typeof I) {
                                            if (s(I) > 40) {
                                                var j = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: I
                                                };
                                                null === o ? o = [j] : o.push(j), p++
                                            } else if (s(I) < 1) {
                                                var A = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: I
                                                };
                                                null === o ? o = [A] : o.push(A), p++
                                            } else if (!n.test(I)) {
                                                var V = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: I
                                                };
                                                null === o ? o = [V] : o.push(V), p++
                                            }
                                        } else {
                                            var _ = {
                                                instancePath: r,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: I
                                            };
                                            null === o ? o = [_] : o.push(_), p++
                                        }
                                    var R = L === p;
                                    if (!R) {
                                        var C = {
                                            instancePath: r,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: I
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === o ? o = [C] : o.push(C), p++;
                                        break
                                    }
                                }
                                if (R)
                                    for (var B in e) {
                                        var q = p;
                                        if (c(e[B], {
                                                instancePath: r + "/" + B.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: B,
                                                rootData: m
                                            }) || (p = (o = null === o ? c.errors : o.concat(c.errors)).length), !(q === p)) break
                                    }
                            }
                    else {
                        var U = {
                            instancePath: r,
                            schemaPath: "#/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "object"
                            },
                            message: "must be object"
                        };
                        null === o ? o = [U] : o.push(U), p++
                    }
                    z = T === p;
                    u = u || z
                }
                if (!u) {
                    var S = {
                        instancePath: r,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === o ? o = [S] : o.push(S), p++, y.errors = o, !1
                }
                return p = h, null !== o && (h ? o.length = h : o = null), y.errors = o, 0 === p
            }

            function l(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    i = (a.parentData, a.parentDataProperty, a.rootData),
                    m = void 0 === i ? e : i,
                    o = null,
                    p = 0,
                    h = p,
                    u = !1,
                    f = p,
                    d = p,
                    c = !1,
                    g = p;
                if (p === g)
                    if ("string" === typeof e) {
                        if (s(e) > 42) {
                            var P = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                                keyword: "maxLength",
                                params: {
                                    limit: 42
                                },
                                message: "must NOT have more than 42 characters"
                            };
                            null === o ? o = [P] : o.push(P), p++
                        } else if (s(e) < 1) {
                            var v = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                                keyword: "minLength",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                            };
                            null === o ? o = [v] : o.push(v), p++
                        }
                    } else {
                        var w = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        };
                        null === o ? o = [w] : o.push(w), p++
                    }
                var F = g === p;
                if (!(c = c || F)) {
                    var k = p;
                    if ("boolean" !== typeof e) {
                        var b = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === o ? o = [b] : o.push(b), p++
                    }
                    F = k === p;
                    if (!(c = c || F)) {
                        var D = p;
                        if ("number" != typeof e || !isFinite(e)) {
                            var x = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === o ? o = [x] : o.push(x), p++
                        }
                        F = D === p;
                        if (!(c = c || F)) {
                            var N = p;
                            if (null !== e) {
                                var O = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === o ? o = [O] : o.push(O), p++
                            }
                            F = N === p;
                            c = c || F
                        }
                    }
                }
                if (c) p = d, null !== o && (d ? o.length = d : o = null);
                else {
                    var $ = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === o ? o = [$] : o.push($), p++
                }
                var z = f === p;
                if (!(u = u || z)) {
                    var T = p;
                    if (p === T)
                        if (e && "object" == typeof e && !Array.isArray(e))
                            if (Object.keys(e).length > 10) {
                                var E = {
                                    instancePath: r,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === o ? o = [E] : o.push(E), p++
                            } else {
                                for (var I in e) {
                                    var L = p;
                                    if (p === p)
                                        if ("string" === typeof I) {
                                            if (s(I) > 40) {
                                                var j = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: I
                                                };
                                                null === o ? o = [j] : o.push(j), p++
                                            } else if (s(I) < 1) {
                                                var A = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: I
                                                };
                                                null === o ? o = [A] : o.push(A), p++
                                            } else if (!n.test(I)) {
                                                var V = {
                                                    instancePath: r,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: I
                                                };
                                                null === o ? o = [V] : o.push(V), p++
                                            }
                                        } else {
                                            var _ = {
                                                instancePath: r,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: I
                                            };
                                            null === o ? o = [_] : o.push(_), p++
                                        }
                                    var R = L === p;
                                    if (!R) {
                                        var C = {
                                            instancePath: r,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: I
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === o ? o = [C] : o.push(C), p++;
                                        break
                                    }
                                }
                                if (R)
                                    for (var B in e) {
                                        var q = p;
                                        if (y(e[B], {
                                                instancePath: r + "/" + B.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: B,
                                                rootData: m
                                            }) || (p = (o = null === o ? y.errors : o.concat(y.errors)).length), !(q === p)) break
                                    }
                            }
                    else {
                        var U = {
                            instancePath: r,
                            schemaPath: "#/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "object"
                            },
                            message: "must be object"
                        };
                        null === o ? o = [U] : o.push(U), p++
                    }
                    z = T === p;
                    u = u || z
                }
                if (!u) {
                    var S = {
                        instancePath: r,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === o ? o = [S] : o.push(S), p++, l.errors = o, !1
                }
                return p = h, null !== o && (h ? o.length = h : o = null), l.errors = o, 0 === p
            }

            function g(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    i = (a.parentData, a.parentDataProperty, a.rootData),
                    m = void 0 === i ? e : i,
                    o = null,
                    p = 0;
                if (0 === p) {
                    if (!e || "object" != typeof e || Array.isArray(e)) return g.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1;
                    if (Object.keys(e).length > 10) return g.errors = [{
                        instancePath: r,
                        schemaPath: "#/maxProperties",
                        keyword: "maxProperties",
                        params: {
                            limit: 10
                        },
                        message: "must NOT have more than 10 properties"
                    }], !1;
                    for (var h in e) {
                        var u = p;
                        if (p === p)
                            if ("string" === typeof h) {
                                if (s(h) > 40) {
                                    var f = {
                                        instancePath: r,
                                        schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                            limit: 40
                                        },
                                        message: "must NOT have more than 40 characters",
                                        propertyName: h
                                    };
                                    null === o ? o = [f] : o.push(f), p++
                                } else if (s(h) < 1) {
                                    var d = {
                                        instancePath: r,
                                        schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                        keyword: "minLength",
                                        params: {
                                            limit: 1
                                        },
                                        message: "must NOT have fewer than 1 characters",
                                        propertyName: h
                                    };
                                    null === o ? o = [d] : o.push(d), p++
                                } else if (!n.test(h)) {
                                    var c = {
                                        instancePath: r,
                                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                        keyword: "pattern",
                                        params: {
                                            pattern: "^[\\w]+$"
                                        },
                                        message: 'must match pattern "^[\\w]+$"',
                                        propertyName: h
                                    };
                                    null === o ? o = [c] : o.push(c), p++
                                }
                            } else {
                                var y = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionIdentifier/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string",
                                    propertyName: h
                                };
                                null === o ? o = [y] : o.push(y), p++
                            }
                        var P = u === p;
                        if (!P) {
                            var v = {
                                instancePath: r,
                                schemaPath: "#/propertyNames",
                                keyword: "propertyNames",
                                params: {
                                    propertyName: h
                                },
                                message: "property name must be valid"
                            };
                            return null === o ? o = [v] : o.push(v), p++, g.errors = o, !1
                        }
                    }
                    if (P)
                        for (var w in e) {
                            var F = p;
                            if (l(e[w], {
                                    instancePath: r + "/" + w.replace(/~/g, "~0").replace(/\//g, "~1"),
                                    parentData: e,
                                    parentDataProperty: w,
                                    rootData: m
                                }) || (p = (o = null === o ? l.errors : o.concat(l.errors)).length), !(F === p)) break
                        }
                }
                return g.errors = o, 0 === p
            }

            function P(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    i = (a.parentData, a.parentDataProperty, a.rootData),
                    m = void 0 === i ? e : i,
                    o = null,
                    p = 0;
                if (0 === p) {
                    if (!e || "object" != typeof e || Array.isArray(e)) return P.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1;
                    var c;
                    if (void 0 === e.chainId && (c = "chainId") || void 0 === e.address && (c = "address") || void 0 === e.decimals && (c = "decimals") || void 0 === e.name && (c = "name") || void 0 === e.symbol && (c = "symbol")) return P.errors = [{
                        instancePath: r,
                        schemaPath: "#/required",
                        keyword: "required",
                        params: {
                            missingProperty: c
                        },
                        message: "must have required property '" + c + "'"
                    }], !1;
                    var y = p;
                    for (var l in e)
                        if ("chainId" !== l && "address" !== l && "decimals" !== l && "name" !== l && "symbol" !== l && "logoURI" !== l && "tags" !== l && "extensions" !== l) return P.errors = [{
                            instancePath: r,
                            schemaPath: "#/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                                additionalProperty: l
                            },
                            message: "must NOT have additional properties"
                        }], !1;
                    if (y === p) {
                        if (void 0 !== e.chainId) {
                            var v = e.chainId,
                                w = p;
                            if ("number" != typeof v || v % 1 || isNaN(v) || !isFinite(v)) return P.errors = [{
                                instancePath: r + "/chainId",
                                schemaPath: "#/properties/chainId/type",
                                keyword: "type",
                                params: {
                                    type: "integer"
                                },
                                message: "must be integer"
                            }], !1;
                            if (p === w && "number" == typeof v && isFinite(v) && (v < 1 || isNaN(v))) return P.errors = [{
                                instancePath: r + "/chainId",
                                schemaPath: "#/properties/chainId/minimum",
                                keyword: "minimum",
                                params: {
                                    comparison: ">=",
                                    limit: 1
                                },
                                message: "must be >= 1"
                            }], !1;
                            var F = w === p
                        } else F = !0;
                        if (F) {
                            if (void 0 !== e.address) {
                                var k = e.address,
                                    b = p;
                                if (p === b) {
                                    if ("string" !== typeof k) return P.errors = [{
                                        instancePath: r + "/address",
                                        schemaPath: "#/properties/address/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    if (!u.test(k)) return P.errors = [{
                                        instancePath: r + "/address",
                                        schemaPath: "#/properties/address/pattern",
                                        keyword: "pattern",
                                        params: {
                                            pattern: "^0x[a-fA-F0-9]{40}$"
                                        },
                                        message: 'must match pattern "^0x[a-fA-F0-9]{40}$"'
                                    }], !1
                                }
                                F = b === p
                            } else F = !0;
                            if (F) {
                                if (void 0 !== e.decimals) {
                                    var D = e.decimals,
                                        x = p;
                                    if ("number" != typeof D || D % 1 || isNaN(D) || !isFinite(D)) return P.errors = [{
                                        instancePath: r + "/decimals",
                                        schemaPath: "#/properties/decimals/type",
                                        keyword: "type",
                                        params: {
                                            type: "integer"
                                        },
                                        message: "must be integer"
                                    }], !1;
                                    if (p === x && "number" == typeof D && isFinite(D)) {
                                        if (D > 255 || isNaN(D)) return P.errors = [{
                                            instancePath: r + "/decimals",
                                            schemaPath: "#/properties/decimals/maximum",
                                            keyword: "maximum",
                                            params: {
                                                comparison: "<=",
                                                limit: 255
                                            },
                                            message: "must be <= 255"
                                        }], !1;
                                        if (D < 0 || isNaN(D)) return P.errors = [{
                                            instancePath: r + "/decimals",
                                            schemaPath: "#/properties/decimals/minimum",
                                            keyword: "minimum",
                                            params: {
                                                comparison: ">=",
                                                limit: 0
                                            },
                                            message: "must be >= 0"
                                        }], !1
                                    }
                                    F = x === p
                                } else F = !0;
                                if (F) {
                                    if (void 0 !== e.name) {
                                        var N = e.name,
                                            O = p;
                                        if (p === O) {
                                            if ("string" !== typeof N) return P.errors = [{
                                                instancePath: r + "/name",
                                                schemaPath: "#/properties/name/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            if (s(N) > 40) return P.errors = [{
                                                instancePath: r + "/name",
                                                schemaPath: "#/properties/name/maxLength",
                                                keyword: "maxLength",
                                                params: {
                                                    limit: 40
                                                },
                                                message: "must NOT have more than 40 characters"
                                            }], !1;
                                            if (s(N) < 1) return P.errors = [{
                                                instancePath: r + "/name",
                                                schemaPath: "#/properties/name/minLength",
                                                keyword: "minLength",
                                                params: {
                                                    limit: 1
                                                },
                                                message: "must NOT have fewer than 1 characters"
                                            }], !1;
                                            if (!f.test(N)) return P.errors = [{
                                                instancePath: r + "/name",
                                                schemaPath: "#/properties/name/pattern",
                                                keyword: "pattern",
                                                params: {
                                                    pattern: "^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"
                                                },
                                                message: 'must match pattern "^[ \\w.\'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"'
                                            }], !1
                                        }
                                        F = O === p
                                    } else F = !0;
                                    if (F) {
                                        if (void 0 !== e.symbol) {
                                            var $ = e.symbol,
                                                z = p;
                                            if (p === z) {
                                                if ("string" !== typeof $) return P.errors = [{
                                                    instancePath: r + "/symbol",
                                                    schemaPath: "#/properties/symbol/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                if (s($) > 20) return P.errors = [{
                                                    instancePath: r + "/symbol",
                                                    schemaPath: "#/properties/symbol/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 20
                                                    },
                                                    message: "must NOT have more than 20 characters"
                                                }], !1;
                                                if (s($) < 1) return P.errors = [{
                                                    instancePath: r + "/symbol",
                                                    schemaPath: "#/properties/symbol/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters"
                                                }], !1;
                                                if (!d.test($)) return P.errors = [{
                                                    instancePath: r + "/symbol",
                                                    schemaPath: "#/properties/symbol/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[a-zA-Z0-9+\\-%/$.]+$"
                                                    },
                                                    message: 'must match pattern "^[a-zA-Z0-9+\\-%/$.]+$"'
                                                }], !1
                                            }
                                            F = z === p
                                        } else F = !0;
                                        if (F) {
                                            if (void 0 !== e.logoURI) {
                                                var T = e.logoURI,
                                                    E = p;
                                                if (p === E && p === E) {
                                                    if ("string" !== typeof T) return P.errors = [{
                                                        instancePath: r + "/logoURI",
                                                        schemaPath: "#/properties/logoURI/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    if (!h(T)) return P.errors = [{
                                                        instancePath: r + "/logoURI",
                                                        schemaPath: "#/properties/logoURI/format",
                                                        keyword: "format",
                                                        params: {
                                                            format: "uri"
                                                        },
                                                        message: 'must match format "uri"'
                                                    }], !1
                                                }
                                                F = E === p
                                            } else F = !0;
                                            if (F) {
                                                if (void 0 !== e.tags) {
                                                    var I = e.tags,
                                                        L = p;
                                                    if (p === L) {
                                                        if (!Array.isArray(I)) return P.errors = [{
                                                            instancePath: r + "/tags",
                                                            schemaPath: "#/properties/tags/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "array"
                                                            },
                                                            message: "must be array"
                                                        }], !1;
                                                        if (I.length > 10) return P.errors = [{
                                                            instancePath: r + "/tags",
                                                            schemaPath: "#/properties/tags/maxItems",
                                                            keyword: "maxItems",
                                                            params: {
                                                                limit: 10
                                                            },
                                                            message: "must NOT have more than 10 items"
                                                        }], !1;
                                                        for (var j = I.length, A = 0; A < j; A++) {
                                                            var V = I[A],
                                                                _ = p;
                                                            if (p === p) {
                                                                if ("string" !== typeof V) return P.errors = [{
                                                                    instancePath: r + "/tags/" + A,
                                                                    schemaPath: "#/definitions/TagIdentifier/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string"
                                                                }], !1;
                                                                if (s(V) > 10) return P.errors = [{
                                                                    instancePath: r + "/tags/" + A,
                                                                    schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                    keyword: "maxLength",
                                                                    params: {
                                                                        limit: 10
                                                                    },
                                                                    message: "must NOT have more than 10 characters"
                                                                }], !1;
                                                                if (s(V) < 1) return P.errors = [{
                                                                    instancePath: r + "/tags/" + A,
                                                                    schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                    keyword: "minLength",
                                                                    params: {
                                                                        limit: 1
                                                                    },
                                                                    message: "must NOT have fewer than 1 characters"
                                                                }], !1;
                                                                if (!n.test(V)) return P.errors = [{
                                                                    instancePath: r + "/tags/" + A,
                                                                    schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                    keyword: "pattern",
                                                                    params: {
                                                                        pattern: "^[\\w]+$"
                                                                    },
                                                                    message: 'must match pattern "^[\\w]+$"'
                                                                }], !1
                                                            }
                                                            if (!(_ === p)) break
                                                        }
                                                    }
                                                    F = L === p
                                                } else F = !0;
                                                if (F)
                                                    if (void 0 !== e.extensions) {
                                                        var R = p;
                                                        g(e.extensions, {
                                                            instancePath: r + "/extensions",
                                                            parentData: e,
                                                            parentDataProperty: "extensions",
                                                            rootData: m
                                                        }) || (p = (o = null === o ? g.errors : o.concat(g.errors)).length);
                                                        F = R === p
                                                    } else F = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return P.errors = o, 0 === p
            }

            function v(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t,
                    u = (a.parentData, a.parentDataProperty, a.rootData),
                    f = void 0 === u ? e : u,
                    d = null,
                    c = 0;
                if (0 === c) {
                    if (!e || "object" != typeof e || Array.isArray(e)) return v.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1;
                    var y;
                    if (void 0 === e.name && (y = "name") || void 0 === e.timestamp && (y = "timestamp") || void 0 === e.version && (y = "version") || void 0 === e.tokens && (y = "tokens")) return v.errors = [{
                        instancePath: r,
                        schemaPath: "#/required",
                        keyword: "required",
                        params: {
                            missingProperty: y
                        },
                        message: "must have required property '" + y + "'"
                    }], !1;
                    var l = c;
                    for (var g in e)
                        if ("name" !== g && "timestamp" !== g && "version" !== g && "tokens" !== g && "keywords" !== g && "tags" !== g && "logoURI" !== g) return v.errors = [{
                            instancePath: r,
                            schemaPath: "#/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                                additionalProperty: g
                            },
                            message: "must NOT have additional properties"
                        }], !1;
                    if (l === c) {
                        if (void 0 !== e.name) {
                            var w = e.name,
                                F = c;
                            if (c === F) {
                                if ("string" !== typeof w) return v.errors = [{
                                    instancePath: r + "/name",
                                    schemaPath: "#/properties/name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                if (s(w) > 30) return v.errors = [{
                                    instancePath: r + "/name",
                                    schemaPath: "#/properties/name/maxLength",
                                    keyword: "maxLength",
                                    params: {
                                        limit: 30
                                    },
                                    message: "must NOT have more than 30 characters"
                                }], !1;
                                if (s(w) < 1) return v.errors = [{
                                    instancePath: r + "/name",
                                    schemaPath: "#/properties/name/minLength",
                                    keyword: "minLength",
                                    params: {
                                        limit: 1
                                    },
                                    message: "must NOT have fewer than 1 characters"
                                }], !1;
                                if (!i.test(w)) return v.errors = [{
                                    instancePath: r + "/name",
                                    schemaPath: "#/properties/name/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^[\\w ]+$"
                                    },
                                    message: 'must match pattern "^[\\w ]+$"'
                                }], !1
                            }
                            var k = F === c
                        } else k = !0;
                        if (k) {
                            if (void 0 !== e.timestamp) {
                                var b = e.timestamp,
                                    D = c;
                                if (c === D && c === D) {
                                    if ("string" !== typeof b) return v.errors = [{
                                        instancePath: r + "/timestamp",
                                        schemaPath: "#/properties/timestamp/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    if (!p.validate(b)) return v.errors = [{
                                        instancePath: r + "/timestamp",
                                        schemaPath: "#/properties/timestamp/format",
                                        keyword: "format",
                                        params: {
                                            format: "date-time"
                                        },
                                        message: 'must match format "date-time"'
                                    }], !1
                                }
                                k = D === c
                            } else k = !0;
                            if (k) {
                                if (void 0 !== e.version) {
                                    var x = e.version,
                                        N = c;
                                    if (c === c) {
                                        if (!x || "object" != typeof x || Array.isArray(x)) return v.errors = [{
                                            instancePath: r + "/version",
                                            schemaPath: "#/definitions/Version/type",
                                            keyword: "type",
                                            params: {
                                                type: "object"
                                            },
                                            message: "must be object"
                                        }], !1;
                                        var O;
                                        if (void 0 === x.major && (O = "major") || void 0 === x.minor && (O = "minor") || void 0 === x.patch && (O = "patch")) return v.errors = [{
                                            instancePath: r + "/version",
                                            schemaPath: "#/definitions/Version/required",
                                            keyword: "required",
                                            params: {
                                                missingProperty: O
                                            },
                                            message: "must have required property '" + O + "'"
                                        }], !1;
                                        var $ = c;
                                        for (var z in x)
                                            if ("major" !== z && "minor" !== z && "patch" !== z) return v.errors = [{
                                                instancePath: r + "/version",
                                                schemaPath: "#/definitions/Version/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: {
                                                    additionalProperty: z
                                                },
                                                message: "must NOT have additional properties"
                                            }], !1;
                                        if ($ === c) {
                                            if (void 0 !== x.major) {
                                                var T = x.major,
                                                    E = c;
                                                if ("number" != typeof T || T % 1 || isNaN(T) || !isFinite(T)) return v.errors = [{
                                                    instancePath: r + "/version/major",
                                                    schemaPath: "#/definitions/Version/properties/major/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "integer"
                                                    },
                                                    message: "must be integer"
                                                }], !1;
                                                if (c === E && "number" == typeof T && isFinite(T) && (T < 0 || isNaN(T))) return v.errors = [{
                                                    instancePath: r + "/version/major",
                                                    schemaPath: "#/definitions/Version/properties/major/minimum",
                                                    keyword: "minimum",
                                                    params: {
                                                        comparison: ">=",
                                                        limit: 0
                                                    },
                                                    message: "must be >= 0"
                                                }], !1;
                                                var I = E === c
                                            } else I = !0;
                                            if (I) {
                                                if (void 0 !== x.minor) {
                                                    var L = x.minor,
                                                        j = c;
                                                    if ("number" != typeof L || L % 1 || isNaN(L) || !isFinite(L)) return v.errors = [{
                                                        instancePath: r + "/version/minor",
                                                        schemaPath: "#/definitions/Version/properties/minor/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "integer"
                                                        },
                                                        message: "must be integer"
                                                    }], !1;
                                                    if (c === j && "number" == typeof L && isFinite(L) && (L < 0 || isNaN(L))) return v.errors = [{
                                                        instancePath: r + "/version/minor",
                                                        schemaPath: "#/definitions/Version/properties/minor/minimum",
                                                        keyword: "minimum",
                                                        params: {
                                                            comparison: ">=",
                                                            limit: 0
                                                        },
                                                        message: "must be >= 0"
                                                    }], !1;
                                                    I = j === c
                                                } else I = !0;
                                                if (I)
                                                    if (void 0 !== x.patch) {
                                                        var A = x.patch,
                                                            V = c;
                                                        if ("number" != typeof A || A % 1 || isNaN(A) || !isFinite(A)) return v.errors = [{
                                                            instancePath: r + "/version/patch",
                                                            schemaPath: "#/definitions/Version/properties/patch/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "integer"
                                                            },
                                                            message: "must be integer"
                                                        }], !1;
                                                        if (c === V && "number" == typeof A && isFinite(A) && (A < 0 || isNaN(A))) return v.errors = [{
                                                            instancePath: r + "/version/patch",
                                                            schemaPath: "#/definitions/Version/properties/patch/minimum",
                                                            keyword: "minimum",
                                                            params: {
                                                                comparison: ">=",
                                                                limit: 0
                                                            },
                                                            message: "must be >= 0"
                                                        }], !1;
                                                        I = V === c
                                                    } else I = !0
                                            }
                                        }
                                    }
                                    k = N === c
                                } else k = !0;
                                if (k) {
                                    if (void 0 !== e.tokens) {
                                        var _ = e.tokens,
                                            R = c;
                                        if (c === R) {
                                            if (!Array.isArray(_)) return v.errors = [{
                                                instancePath: r + "/tokens",
                                                schemaPath: "#/properties/tokens/type",
                                                keyword: "type",
                                                params: {
                                                    type: "array"
                                                },
                                                message: "must be array"
                                            }], !1;
                                            if (_.length > 1e4) return v.errors = [{
                                                instancePath: r + "/tokens",
                                                schemaPath: "#/properties/tokens/maxItems",
                                                keyword: "maxItems",
                                                params: {
                                                    limit: 1e4
                                                },
                                                message: "must NOT have more than 10000 items"
                                            }], !1;
                                            if (_.length < 1) return v.errors = [{
                                                instancePath: r + "/tokens",
                                                schemaPath: "#/properties/tokens/minItems",
                                                keyword: "minItems",
                                                params: {
                                                    limit: 1
                                                },
                                                message: "must NOT have fewer than 1 items"
                                            }], !1;
                                            for (var C = _.length, B = 0; B < C; B++) {
                                                var q = c;
                                                if (P(_[B], {
                                                        instancePath: r + "/tokens/" + B,
                                                        parentData: _,
                                                        parentDataProperty: B,
                                                        rootData: f
                                                    }) || (c = (d = null === d ? P.errors : d.concat(P.errors)).length), !(q === c)) break
                                            }
                                        }
                                        k = R === c
                                    } else k = !0;
                                    if (k) {
                                        if (void 0 !== e.keywords) {
                                            var U = e.keywords,
                                                S = c;
                                            if (c === S) {
                                                if (!Array.isArray(U)) return v.errors = [{
                                                    instancePath: r + "/keywords",
                                                    schemaPath: "#/properties/keywords/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "must be array"
                                                }], !1;
                                                if (U.length > 20) return v.errors = [{
                                                    instancePath: r + "/keywords",
                                                    schemaPath: "#/properties/keywords/maxItems",
                                                    keyword: "maxItems",
                                                    params: {
                                                        limit: 20
                                                    },
                                                    message: "must NOT have more than 20 items"
                                                }], !1;
                                                for (var Z = !0, K = U.length, M = 0; M < K; M++) {
                                                    var H = U[M],
                                                        W = c;
                                                    if (c === W) {
                                                        if ("string" !== typeof H) return v.errors = [{
                                                            instancePath: r + "/keywords/" + M,
                                                            schemaPath: "#/properties/keywords/items/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (s(H) > 20) return v.errors = [{
                                                            instancePath: r + "/keywords/" + M,
                                                            schemaPath: "#/properties/keywords/items/maxLength",
                                                            keyword: "maxLength",
                                                            params: {
                                                                limit: 20
                                                            },
                                                            message: "must NOT have more than 20 characters"
                                                        }], !1;
                                                        if (s(H) < 1) return v.errors = [{
                                                            instancePath: r + "/keywords/" + M,
                                                            schemaPath: "#/properties/keywords/items/minLength",
                                                            keyword: "minLength",
                                                            params: {
                                                                limit: 1
                                                            },
                                                            message: "must NOT have fewer than 1 characters"
                                                        }], !1;
                                                        if (!i.test(H)) return v.errors = [{
                                                            instancePath: r + "/keywords/" + M,
                                                            schemaPath: "#/properties/keywords/items/pattern",
                                                            keyword: "pattern",
                                                            params: {
                                                                pattern: "^[\\w ]+$"
                                                            },
                                                            message: 'must match pattern "^[\\w ]+$"'
                                                        }], !1
                                                    }
                                                    if (!(Z = W === c)) break
                                                }
                                                if (Z) {
                                                    var Y, G = U.length;
                                                    if (G > 1)
                                                        for (var J = {}; G--;) {
                                                            var Q = U[G];
                                                            if ("string" === typeof Q) {
                                                                if ("number" == typeof J[Q]) return Y = J[Q], v.errors = [{
                                                                    instancePath: r + "/keywords",
                                                                    schemaPath: "#/properties/keywords/uniqueItems",
                                                                    keyword: "uniqueItems",
                                                                    params: {
                                                                        i: G,
                                                                        j: Y
                                                                    },
                                                                    message: "must NOT have duplicate items (items ## " + Y + " and " + G + " are identical)"
                                                                }], !1;
                                                                J[Q] = G
                                                            }
                                                        }
                                                }
                                            }
                                            k = S === c
                                        } else k = !0;
                                        if (k) {
                                            if (void 0 !== e.tags) {
                                                var X = e.tags,
                                                    ee = c;
                                                if (c === ee) {
                                                    if (!X || "object" != typeof X || Array.isArray(X)) return v.errors = [{
                                                        instancePath: r + "/tags",
                                                        schemaPath: "#/properties/tags/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }], !1;
                                                    if (Object.keys(X).length > 20) return v.errors = [{
                                                        instancePath: r + "/tags",
                                                        schemaPath: "#/properties/tags/maxProperties",
                                                        keyword: "maxProperties",
                                                        params: {
                                                            limit: 20
                                                        },
                                                        message: "must NOT have more than 20 properties"
                                                    }], !1;
                                                    for (var ae in X) {
                                                        var te = c;
                                                        if (c === c)
                                                            if ("string" === typeof ae) {
                                                                if (s(ae) > 10) {
                                                                    var re = {
                                                                        instancePath: r + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                        keyword: "maxLength",
                                                                        params: {
                                                                            limit: 10
                                                                        },
                                                                        message: "must NOT have more than 10 characters",
                                                                        propertyName: ae
                                                                    };
                                                                    null === d ? d = [re] : d.push(re), c++
                                                                } else if (s(ae) < 1) {
                                                                    var se = {
                                                                        instancePath: r + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                        keyword: "minLength",
                                                                        params: {
                                                                            limit: 1
                                                                        },
                                                                        message: "must NOT have fewer than 1 characters",
                                                                        propertyName: ae
                                                                    };
                                                                    null === d ? d = [se] : d.push(se), c++
                                                                } else if (!n.test(ae)) {
                                                                    var ie = {
                                                                        instancePath: r + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                        keyword: "pattern",
                                                                        params: {
                                                                            pattern: "^[\\w]+$"
                                                                        },
                                                                        message: 'must match pattern "^[\\w]+$"',
                                                                        propertyName: ae
                                                                    };
                                                                    null === d ? d = [ie] : d.push(ie), c++
                                                                }
                                                            } else {
                                                                var ne = {
                                                                    instancePath: r + "/tags",
                                                                    schemaPath: "#/definitions/TagIdentifier/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string",
                                                                    propertyName: ae
                                                                };
                                                                null === d ? d = [ne] : d.push(ne), c++
                                                            }
                                                        var me = te === c;
                                                        if (!me) {
                                                            var oe = {
                                                                instancePath: r + "/tags",
                                                                schemaPath: "#/properties/tags/propertyNames",
                                                                keyword: "propertyNames",
                                                                params: {
                                                                    propertyName: ae
                                                                },
                                                                message: "property name must be valid"
                                                            };
                                                            return null === d ? d = [oe] : d.push(oe), c++, v.errors = d, !1
                                                        }
                                                    }
                                                    if (me)
                                                        for (var pe in X) {
                                                            var he = X[pe],
                                                                ue = c;
                                                            if (c === c) {
                                                                if (!he || "object" != typeof he || Array.isArray(he)) return v.errors = [{
                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "object"
                                                                    },
                                                                    message: "must be object"
                                                                }], !1;
                                                                var fe = void 0;
                                                                if (void 0 === he.name && (fe = "name") || void 0 === he.description && (fe = "description")) return v.errors = [{
                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/required",
                                                                    keyword: "required",
                                                                    params: {
                                                                        missingProperty: fe
                                                                    },
                                                                    message: "must have required property '" + fe + "'"
                                                                }], !1;
                                                                var de = c;
                                                                for (var ce in he)
                                                                    if ("name" !== ce && "description" !== ce) return v.errors = [{
                                                                        instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                        schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                                                        keyword: "additionalProperties",
                                                                        params: {
                                                                            additionalProperty: ce
                                                                        },
                                                                        message: "must NOT have additional properties"
                                                                    }], !1;
                                                                if (de === c) {
                                                                    if (void 0 !== he.name) {
                                                                        var ye = he.name,
                                                                            le = c;
                                                                        if (c === le) {
                                                                            if ("string" !== typeof ye) return v.errors = [{
                                                                                instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "must be string"
                                                                            }], !1;
                                                                            if (s(ye) > 20) return v.errors = [{
                                                                                instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                                                keyword: "maxLength",
                                                                                params: {
                                                                                    limit: 20
                                                                                },
                                                                                message: "must NOT have more than 20 characters"
                                                                            }], !1;
                                                                            if (s(ye) < 1) return v.errors = [{
                                                                                instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                                                keyword: "minLength",
                                                                                params: {
                                                                                    limit: 1
                                                                                },
                                                                                message: "must NOT have fewer than 1 characters"
                                                                            }], !1;
                                                                            if (!m.test(ye)) return v.errors = [{
                                                                                instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                                                keyword: "pattern",
                                                                                params: {
                                                                                    pattern: "^[ \\w]+$"
                                                                                },
                                                                                message: 'must match pattern "^[ \\w]+$"'
                                                                            }], !1
                                                                        }
                                                                        var ge = le === c
                                                                    } else ge = !0;
                                                                    if (ge)
                                                                        if (void 0 !== he.description) {
                                                                            var Pe = he.description,
                                                                                ve = c;
                                                                            if (c === ve) {
                                                                                if ("string" !== typeof Pe) return v.errors = [{
                                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "string"
                                                                                    },
                                                                                    message: "must be string"
                                                                                }], !1;
                                                                                if (s(Pe) > 200) return v.errors = [{
                                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                                                    keyword: "maxLength",
                                                                                    params: {
                                                                                        limit: 200
                                                                                    },
                                                                                    message: "must NOT have more than 200 characters"
                                                                                }], !1;
                                                                                if (s(Pe) < 1) return v.errors = [{
                                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                                                    keyword: "minLength",
                                                                                    params: {
                                                                                        limit: 1
                                                                                    },
                                                                                    message: "must NOT have fewer than 1 characters"
                                                                                }], !1;
                                                                                if (!o.test(Pe)) return v.errors = [{
                                                                                    instancePath: r + "/tags/" + pe.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                                                    keyword: "pattern",
                                                                                    params: {
                                                                                        pattern: "^[ \\w\\.,:]+$"
                                                                                    },
                                                                                    message: 'must match pattern "^[ \\w\\.,:]+$"'
                                                                                }], !1
                                                                            }
                                                                            ge = ve === c
                                                                        } else ge = !0
                                                                }
                                                            }
                                                            if (!(ue === c)) break
                                                        }
                                                }
                                                k = ee === c
                                            } else k = !0;
                                            if (k)
                                                if (void 0 !== e.logoURI) {
                                                    var we = e.logoURI,
                                                        Fe = c;
                                                    if (c === Fe && c === Fe) {
                                                        if ("string" !== typeof we) return v.errors = [{
                                                            instancePath: r + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (!h(we)) return v.errors = [{
                                                            instancePath: r + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/format",
                                                            keyword: "format",
                                                            params: {
                                                                format: "uri"
                                                            },
                                                            message: 'must match format "uri"'
                                                        }], !1
                                                    }
                                                    k = Fe === c
                                                } else k = !0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return v.errors = d, 0 === c
            }
        },
        18729: function(e, a, t) {
            var r = t(74063).default,
                s = t(62087).default;

            function i(e, a) {
                return {
                    validate: e,
                    compare: a
                }
            }
            a.u5 = void 0, a.u5 = {
                date: i(o, p),
                time: i(u, f),
                "date-time": i((function(e) {
                    var a = e.split(d);
                    return 2 === a.length && o(a[0]) && u(a[1], !0)
                }), c),
                duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
                uri: function(e) {
                    return y.test(e) && l.test(e)
                },
                "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                url: /^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i,
                email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
                regex: function(e) {
                    if (F.test(e)) return !1;
                    try {
                        return new RegExp(e), !0
                    } catch (a) {
                        return !1
                    }
                },
                uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
                byte: function(e) {
                    return g.lastIndex = 0, g.test(e)
                },
                int32: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e) && e <= v && e >= P
                    }
                },
                int64: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e)
                    }
                },
                float: {
                    type: "number",
                    validate: w
                },
                double: {
                    type: "number",
                    validate: w
                },
                password: !0,
                binary: !0
            }, s(s({}, a.u5), {}, {
                date: i(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, p),
                time: i(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, f),
                "date-time": i(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, c),
                uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
                "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
                email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
            }), Object.keys(a.u5);
            var n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                m = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function o(e) {
                var a = n.exec(e);
                if (!a) return !1;
                var t = +a[1],
                    r = +a[2],
                    s = +a[3];
                return r >= 1 && r <= 12 && s >= 1 && s <= (2 === r && function(e) {
                    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
                }(t) ? 29 : m[r])
            }

            function p(e, a) {
                if (e && a) return e > a ? 1 : e < a ? -1 : 0
            }
            var h = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;

            function u(e, a) {
                var t = h.exec(e);
                if (!t) return !1;
                var r = +t[1],
                    s = +t[2],
                    i = +t[3],
                    n = t[5];
                return (r <= 23 && s <= 59 && i <= 59 || 23 === r && 59 === s && 60 === i) && (!a || "" !== n)
            }

            function f(e, a) {
                if (e && a) {
                    var t = h.exec(e),
                        r = h.exec(a);
                    if (t && r) return (e = t[1] + t[2] + t[3] + (t[4] || "")) > (a = r[1] + r[2] + r[3] + (r[4] || "")) ? 1 : e < a ? -1 : 0
                }
            }
            var d = /t|\s/i;

            function c(e, a) {
                if (e && a) {
                    var t = e.split(d),
                        s = r(t, 2),
                        i = s[0],
                        n = s[1],
                        m = a.split(d),
                        o = r(m, 2),
                        h = o[0],
                        u = o[1],
                        c = p(i, h);
                    if (void 0 !== c) return c || f(n, u)
                }
            }
            var y = /\/|:/,
                l = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
            var g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
            var P = -Math.pow(2, 31),
                v = Math.pow(2, 31) - 1;

            function w() {
                return !0
            }
            var F = /[^\\]\\Z/
        },
        5358: function(e, a) {
            function t(e) {
                for (var a, t = e.length, r = 0, s = 0; s < t;) r++, (a = e.charCodeAt(s++)) >= 55296 && a <= 56319 && s < t && 56320 === (64512 & (a = e.charCodeAt(s))) && s++;
                return r
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = t, t.code = 'require("ajv/dist/runtime/ucs2length").default'
        }
    }
]);
//# sourceMappingURL=724.8d58f25b.chunk.js.map