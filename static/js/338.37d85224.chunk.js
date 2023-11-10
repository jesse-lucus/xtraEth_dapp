"use strict";
(self.webpackChunk_uniswap_interface = self.webpackChunk_uniswap_interface || []).push([
    [338], {
        58338: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return Qe
                }
            });
            var r = t(31303),
                s = t(27166),
                i = t(33032),
                a = t(50678),
                o = t(18489),
                c = t(98985),
                l = t(96812),
                u = t(83138),
                d = t(17248),
                f = t(48444),
                g = t(18568),
                p = t(73304),
                h = t(2559),
                x = t(38757),
                m = t(89191),
                w = t(56926),
                b = t(79146),
                v = t(72249),
                j = t(86388),
                I = t(71233),
                S = t(78264),
                k = t(59102),
                E = t(71336),
                N = t(92371),
                z = t(52954),
                A = (t(10602), t(53341), t(37881)),
                P = c.default.div.withConfig({
                    componentId: "sc-rcepl8-0"
                })(["border-top:1px solid ", ";color:", ";display:flex;flex-direction:column;margin-bottom:8px;padding:12px 16px;border-bottom-left-radius:12px;border-bottom-right-radius:12px;"], (function(e) {
                    return e.theme.backgroundOutline
                }), (function(e) {
                    return e.theme.textPrimary
                })),
                y = (0, c.default)(S.Z).withConfig({
                    componentId: "sc-rcepl8-1"
                })(["width:14px;margin-right:4px;color:", ";"], (function(e) {
                    return e.theme.accentWarning
                })),
                C = (0, c.default)(E.Tv.BodyPrimary).withConfig({
                    componentId: "sc-rcepl8-2"
                })(["align-items:center;color:", ";display:flex;justify-content:center;margin:12px 0 !important;text-align:center;"], (function(e) {
                    return e.theme.accentWarning
                })),
                R = function(e) {
                    var n = e.disabled,
                        t = e.children,
                        r = e.onClick;
                    return (0, A.jsx)(x.X2, {
                        as: "button",
                        color: "explicitWhite",
                        className: "m29kpj4 rgw6ezcq rgw6ezb2 rgw6ez7n2 rgw6ez2l8 rgw6ez24q rgw6ez4k2 rgw6ez7gu rgw6ez79e rgw6ezd2 rgw6ez77u rgw6ez442 rgw6ez3q8",
                        disabled: n,
                        onClick: r,
                        children: t
                    })
                },
                T = function(e) {
                    var n = e.children;
                    return n ? (0, A.jsxs)(C, {
                        fontSize: "14px",
                        lineHeight: "20px",
                        children: [(0, A.jsx)(y, {}), n]
                    }) : null
                },
                D = [v.s.FETCHING_ROUTE, v.s.CONFIRMING_IN_WALLET, v.s.FETCHING_FINAL_ROUTE, v.s.PROCESSING_TRANSACTION],
                Z = function(e) {
                    var n = e.totalEthPrice,
                        t = e.totalUsdPrice,
                        r = e.bagStatus,
                        s = e.fetchAssets,
                        i = (e.eventProperties, (0, k.IQ)()),
                        a = (0, d.useWeb3React)(),
                        o = a.account,
                        c = a.chainId,
                        l = a.connector,
                        f = Boolean(o && c),
                        S = (0, w.c)((function(e) {
                            return e.setBagExpanded
                        })),
                        y = (0, b.t)().balance,
                        C = (0, I.useMemo)((function() {
                            if (f && c === p.HL.MAINNET) return (0, u.parseEther)(y).gte(n)
                        }), [f, c, y, n]),
                        Z = (0, I.useMemo)((function() {
                            var e = s,
                                n = (0, A.jsx)(z.c, {
                                    children: "Something went wrong"
                                }),
                                t = !0,
                                a = null;
                            return f && c !== p.HL.MAINNET ? (e = function() {
                                return (0, N.c)(l, p.HL.MAINNET)
                            }, n = (0, A.jsx)(z.c, {
                                children: "Switch networks"
                            }), t = !1, a = (0, A.jsx)(z.c, {
                                children: "Wrong network"
                            })) : !1 === C ? (n = (0, A.jsx)(z.c, {
                                children: "Pay"
                            }), t = !0, a = (0, A.jsx)(z.c, {
                                children: "Insufficient funds"
                            })) : r === v.s.WARNING ? a = (0, A.jsx)(z.c, {
                                children: "Something went wrong. Please try again."
                            }) : f ? r === v.s.FETCHING_FINAL_ROUTE || r === v.s.CONFIRMING_IN_WALLET ? (t = !0, n = (0, A.jsx)(z.c, {
                                children: "Proceed in wallet"
                            })) : r === v.s.PROCESSING_TRANSACTION ? (t = !0, n = (0, A.jsx)(z.c, {
                                children: "Transaction pending"
                            })) : !0 === C && (t = !1, n = (0, A.jsx)(z.c, {
                                children: "Pay"
                            })) : (e = function() {
                                i(), S({
                                    bagExpanded: !1
                                })
                            }, t = !1, n = (0, A.jsx)(z.c, {
                                children: "Connect wallet"
                            })), {
                                buttonText: n,
                                disabled: t,
                                warningText: a,
                                handleClick: e
                            }
                        }), [r, c, f, l, s, S, C, i]),
                        L = Z.buttonText,
                        O = Z.disabled,
                        _ = Z.warningText,
                        M = Z.handleClick,
                        G = D.includes(r);
                    return (0, A.jsx)(x.sg, {
                        className: "rgw6ez2ak rgw6ez2g2",
                        children: (0, A.jsxs)(P, {
                            children: [(0, A.jsxs)(x.sg, {
                                gap: "4",
                                paddingTop: "8",
                                paddingBottom: "20",
                                children: [(0, A.jsxs)(x.X2, {
                                    justifyContent: "space-between",
                                    children: [(0, A.jsx)(h.n, {
                                        children: (0, A.jsx)(E.Tv.HeadlineSmall, {
                                            children: "Total"
                                        })
                                    }), (0, A.jsx)(h.n, {
                                        children: (0, A.jsxs)(E.Tv.HeadlineSmall, {
                                            children: [(0, j.zb)(n.toString()), "\xa0ETH"]
                                        })
                                    })]
                                }), (0, A.jsx)(x.X2, {
                                    justifyContent: "flex-end",
                                    color: "textSecondary",
                                    className: m.Km,
                                    children: "".concat((0, j._P)(t, !0))
                                })]
                            }), (0, A.jsx)(T, {
                                children: _
                            }), (0, A.jsxs)(R, {
                                onClick: M,
                                disabled: O,
                                children: [G && (0, A.jsx)(g.Z, {
                                    size: "20px",
                                    stroke: "white"
                                }), L]
                            })]
                        })
                    })
                },
                L = t(89472),
                O = t(90798),
                _ = t(58600),
                M = t(82530),
                G = t(86016),
                B = t(23433),
                F = t(7473),
                q = function(e) {
                    return 1 !== e ? "s" : ""
                },
                U = t(85172),
                H = "_13bxg46 rgw6ez18e rgw6ez152 rgw6ez42q rgw6ezcw rgw6ezaw rgw6ez418 rgw6ez3k rgw6ez442 rgw6ez4w rgw6ez79e",
                W = t(10633),
                X = t(62274),
                V = function(e) {
                    var n = e.listing,
                        t = e.newStatus,
                        s = e.rows,
                        i = e.setRows,
                        a = e.callback,
                        o = (0, r.Z)(s),
                        c = s.findIndex((function(e) {
                            return e === n
                        }));
                    n.status = t, a && (n.callback = a), o[c] = n, i(o)
                };

            function J(e, n, t, r, s, i) {
                return $.apply(this, arguments)
            }

            function $() {
                return ($ = (0, i.Z)((0, s.Z)().mark((function e(n, t, r, i, a, o) {
                    var c, l, u;
                    return (0, s.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return V({
                                    listing: n,
                                    newStatus: v.Sb.SIGNING,
                                    rows: t,
                                    setRows: r,
                                    callback: function() {
                                        return J(n, t, r, i, a, o)
                                    }
                                }), c = n.marketplace, l = n.collectionAddress, u = "OpenSea" === c.name ? W.Ir : "Rarible" === c.name ? B.RI : "X2Y2" === c.name ? B.Wl : a, e.next = 5, (0, X.Yb)(null !== u && void 0 !== u ? u : "", l, i, (function(e) {
                                    return V({
                                        listing: n,
                                        newStatus: e,
                                        rows: t,
                                        setRows: r
                                    })
                                }));
                            case 5:
                                n.status !== v.Sb.REJECTED && n.status !== v.Sb.FAILED || o();
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Q(e, n, t, r, s, i, a, o) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = (0, i.Z)((0, s.Z)().mark((function e(n, t, r, i, a, o, c, l) {
                    var u, d, f, g, p;
                    return (0, s.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = o(), V({
                                    listing: n,
                                    newStatus: v.Sb.SIGNING,
                                    rows: t,
                                    setRows: r,
                                    callback: function() {
                                        return Q(n, t, r, i, a, o, c, l)
                                    }
                                }), d = n.asset, f = n.marketplace, e.next = 5, (0, X.l7)(f, d, i, a, u, (function(e) {
                                    return V({
                                        listing: n,
                                        newStatus: e,
                                        rows: t,
                                        setRows: r
                                    })
                                }));
                            case 5:
                                g = e.sent, n.status === v.Sb.REJECTED ? l() : (g && "LooksRare" === n.marketplace.name && c(u + 1), p = g ? v.Sb.APPROVED : v.Sb.FAILED, V({
                                    listing: n,
                                    newStatus: p,
                                    rows: t,
                                    setRows: r
                                }));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Y = function(e) {
                    return e !== v.Sb.PAUSED && e !== v.Sb.APPROVED
                },
                ee = function(e, n, t) {
                    e.status !== v.Sb.PENDING && e.status !== v.Sb.DEFINED || V({
                        listing: e,
                        newStatus: v.Sb.PAUSED,
                        rows: n,
                        setRows: t
                    })
                },
                ne = function(e, n, t) {
                    e.status !== v.Sb.PAUSED && e.status !== v.Sb.FAILED && e.status !== v.Sb.REJECTED || V({
                        listing: e,
                        newStatus: v.Sb.DEFINED,
                        rows: n,
                        setRows: t
                    })
                },
                te = function(e) {
                    var n = e.onClick,
                        t = e.buttonText,
                        r = e.showWarningOverride,
                        s = void 0 !== r && r,
                        i = (0, G.Pc)((function(e) {
                            return e.sellAssets
                        })),
                        o = (0, G.Pc)((function(e) {
                            return e.addMarketplaceWarning
                        })),
                        c = (0, G.Pc)((function(e) {
                            return e.removeAllMarketplaceWarnings
                        })),
                        l = (0, G.zM)((function(e) {
                            return e.listingStatus
                        })),
                        u = (0, G.zM)((function(e) {
                            return e.setListingStatus
                        })),
                        d = (0, G.zM)((function(e) {
                            return e.setListings
                        })),
                        f = (0, G.zM)((function(e) {
                            return e.setCollectionsRequiringApproval
                        })),
                        g = (0, I.useState)(!1),
                        p = (0, a.Z)(g, 2),
                        w = p[0],
                        b = p[1],
                        j = (0, I.useState)(!1),
                        S = (0, a.Z)(j, 2),
                        k = S[0],
                        E = S[1],
                        N = (0, I.useRef)(null);
                    (0, U.t)(N, (function() {
                        b(!1)
                    })), (0, I.useEffect)((function() {
                        var e = function(e) {
                                var n = [],
                                    t = [];
                                return e.forEach((function(e) {
                                    var r;
                                    null === (r = e.marketplaces) || void 0 === r || r.forEach((function(r) {
                                        var s, i, a = {
                                            images: [e.smallImageUrl, r.icon],
                                            name: e.name || "#".concat(e.tokenId),
                                            status: v.Sb.DEFINED,
                                            asset: e,
                                            marketplace: r,
                                            price: null === (s = e.newListings) || void 0 === s || null === (i = s.find((function(e) {
                                                return e.marketplace.name === r.name
                                            }))) || void 0 === i ? void 0 : i.price
                                        };
                                        if (t.push(a), !n.some((function(n) {
                                                return n.collectionAddress === e.asset_contract.address && n.marketplace.name === r.name
                                            }))) {
                                            var o = {
                                                images: [e.asset_contract.image_url, r.icon],
                                                name: e.asset_contract.name,
                                                status: v.Sb.DEFINED,
                                                collectionAddress: e.asset_contract.address,
                                                marketplace: r
                                            };
                                            n.push(o)
                                        }
                                    }))
                                })), [n, t]
                            }(i),
                            n = (0, a.Z)(e, 2),
                            t = n[0],
                            r = n[1];
                        d(r), f(t), u(v.Sb.DEFINED)
                    }), [i]);
                    var z = (0, I.useMemo)((function() {
                            var e, n = i.some((function(e) {
                                    return void 0 === e.marketplaces
                                })),
                                t = i.some((function(e) {
                                    return null != e.expirationTime && 1e3 * e.expirationTime - Date.now() < 6e4
                                })),
                                r = i.some((function(e) {
                                    return null != e.expirationTime && isNaN(e.expirationTime)
                                })),
                                s = i.some((function(e) {
                                    return null != e.expirationTime && e.expirationTime - Date.now() > 15552e6
                                })),
                                a = [],
                                o = [],
                                c = [],
                                l = [],
                                u = (0, L.Z)(i);
                            try {
                                for (u.s(); !(e = u.n()).done;) {
                                    var d = e.value;
                                    if (d.newListings) {
                                        var f, g = (0, L.Z)(d.newListings);
                                        try {
                                            for (g.s(); !(f = g.n()).done;) {
                                                var p = f.value;
                                                p.price ? isNaN(p.price) || p.price < 0 ? l.push([d, p]) : p.price < d.floorPrice && !p.overrideFloorPrice ? o.push([d, p]) : d.floor_sell_order_price && p.price > d.floor_sell_order_price && c.push([d, p]) : a.push([d, p])
                                            }
                                        } catch (x) {
                                            g.e(x)
                                        } finally {
                                            g.f()
                                        }
                                    }
                                }
                            } catch (x) {
                                u.e(x)
                            } finally {
                                u.f()
                            }
                            var h = 0 === o.length && 0 === c.length;
                            return E(h), [n, t, r, s, a, o, c, l]
                        }), [i]),
                        P = (0, a.Z)(z, 8),
                        y = P[0],
                        C = P[1],
                        R = P[2],
                        T = P[3],
                        D = P[4],
                        Z = P[5],
                        O = P[6],
                        M = P[7],
                        B = (0, I.useMemo)((function() {
                            return [y || C || R || T || M.length > 0 || D.length > 0, y ? "No marketplaces selected" : C ? "Set duration" : R ? "Invalid duration" : T ? "Max duration is 6 months" : D.length > 0 ? "".concat(D.length, " item price").concat(q(D.length), " not set") : M.length > 0 ? "".concat(M.length, " price").concat(q(M.length), " are invalid") : Z.length > 0 ? "".concat(Z.length, " item").concat(q(Z.length), " listed below floor") : O.length > 0 ? "".concat(O.length, " item").concat(q(O.length), " already listed") : ""]
                        }), [y, C, R, T, D, M, Z, O]),
                        F = (0, a.Z)(B, 2),
                        W = F[0],
                        X = F[1];
                    (0, I.useEffect)((function() {
                        b(!1)
                    }), [X]);
                    var V = function() {
                        !W && k || s ? n() : function() {
                            if (c(), !C && !y)
                                if (D.length > 0) {
                                    var e, n = (0, L.Z)(D);
                                    try {
                                        for (n.s(); !(e = n.n()).done;) {
                                            var t = (0, a.Z)(e.value, 2),
                                                r = t[0],
                                                s = t[1];
                                            o(r, {
                                                message: "PLEASE SET A PRICE",
                                                marketplace: s.marketplace
                                            })
                                        }
                                    } catch (g) {
                                        n.e(g)
                                    } finally {
                                        n.f()
                                    }
                                } else if (M.length > 0) {
                                var i, l = (0, L.Z)(M);
                                try {
                                    for (l.s(); !(i = l.n()).done;) {
                                        var u = (0, a.Z)(i.value, 2),
                                            d = u[0],
                                            f = u[1];
                                        !f.overrideFloorPrice && o(d, {
                                            message: "INVALID PRICE",
                                            marketplace: f.marketplace
                                        })
                                    }
                                } catch (g) {
                                    l.e(g)
                                } finally {
                                    l.f()
                                }
                            }
                            b(!0)
                        }()
                    };
                    return (0, A.jsxs)(h.n, {
                        position: "relative",
                        width: "full",
                        children: [!s && w && X.length > 0 && (0, A.jsxs)(x.X2, {
                            className: "".concat(m.Km, " ").concat("_13bxg4a rgw6ez2kw rgw6ez2fe rgw6ez24e rgw6ez2a8"),
                            transition: "250",
                            onClick: function() {
                                return b(!1)
                            },
                            color: "textSecondary",
                            zIndex: "3",
                            borderRadius: "4",
                            backgroundColor: "backgroundSurface",
                            height: W ? "36" : "64",
                            maxWidth: "276",
                            position: "absolute",
                            left: "24",
                            bottom: "52",
                            flexWrap: W ? "nowrap" : "wrap",
                            style: {
                                maxWidth: W ? "" : "225px"
                            },
                            ref: N,
                            children: [(0, A.jsx)(_.re, {}), (0, A.jsx)(h.n, {
                                marginLeft: "4",
                                marginRight: "8",
                                children: X
                            }), W ? (0, A.jsx)(h.n, {
                                paddingTop: "6",
                                children: (0, A.jsx)(_.DX, {
                                    fill: "textSecondary",
                                    height: "20",
                                    width: "20"
                                })
                            }) : (0, A.jsxs)(x.X2, {
                                marginLeft: "72",
                                cursor: "pointer",
                                color: "genieBlue",
                                onClick: function() {
                                    b(!1), E(!0), n()
                                },
                                children: ["Continue", (0, A.jsx)(_.LZ, {
                                    height: "20",
                                    width: "20"
                                })]
                            })]
                        }), (0, A.jsx)(h.n, {
                            as: "button",
                            border: "none",
                            backgroundColor: "genieBlue",
                            cursor: [v.Sb.APPROVED, v.Sb.PENDING, v.Sb.SIGNING].includes(l) || W ? "default" : "pointer",
                            color: "explicitWhite",
                            className: H,
                            onClick: function() {
                                return l !== v.Sb.APPROVED && V()
                            },
                            type: "button",
                            style: {
                                opacity: ![v.Sb.DEFINED, v.Sb.FAILED, v.Sb.CONTINUE].includes(l) || W ? .3 : 1
                            },
                            children: l === v.Sb.SIGNING || l === v.Sb.PENDING ? (0, A.jsxs)(x.X2, {
                                gap: "8",
                                children: [(0, A.jsx)(_.Ho, {
                                    stroke: "backgroundSurface",
                                    height: "20",
                                    width: "20"
                                }), l === v.Sb.PENDING ? "Pending" : "Proceed in wallet"]
                            }) : l === v.Sb.APPROVED ? "Complete!" : l === v.Sb.PAUSED ? "Paused" : l === v.Sb.FAILED ? "Try again" : l === v.Sb.CONTINUE ? "Continue" : t
                        })]
                    })
                },
                re = t(6833),
                se = t(29463),
                ie = function(e) {
                    var n = e.sectionTitle,
                        t = e.caption,
                        r = void 0 === t ? void 0 : t,
                        o = e.title,
                        c = void 0 === o ? void 0 : o,
                        l = e.rows,
                        u = e.index,
                        d = e.openIndex,
                        f = e.isSuccessScreen,
                        g = void 0 !== f && f,
                        p = (0, I.useState)(!1),
                        w = (0, a.Z)(p, 2),
                        b = w[0],
                        j = w[1],
                        S = l.some((function(e) {
                            return e.status !== v.Sb.APPROVED
                        })),
                        k = (0, G.Pc)((function(e) {
                            return e.sellAssets
                        })),
                        E = (0, G.Pc)((function(e) {
                            return e.removeAssetMarketplace
                        })),
                        N = function(e) {
                            if (1 === u) {
                                var n, t = (0, L.Z)(k);
                                try {
                                    for (t.s(); !(n = t.n()).done;) {
                                        var r = n.value;
                                        r.asset_contract.address === e.collectionAddress && E(r, e.marketplace)
                                    }
                                } catch (s) {
                                    t.e(s)
                                } finally {
                                    t.f()
                                }
                            } else E(e.asset, e.marketplace)
                        };

                    function z(e) {
                        var n, t, r = e,
                            s = r.asset.newListings;
                        return null !== (n = null === s || void 0 === s || null === (t = s.find((function(e) {
                            return e.marketplace.name === r.marketplace.name
                        }))) || void 0 === t ? void 0 : t.price) && void 0 !== n ? n : 0
                    }(0, I.useEffect)((function() {
                        j(u === d)
                    }), [u, d]);
                    var P = !S && l.length > 0 && !g;
                    return (0, A.jsxs)(x.X2, {
                        flexWrap: "wrap",
                        className: m.v4,
                        marginTop: "10",
                        marginBottom: "10",
                        onClick: function() {
                            return l.length > 0 && j(!b)
                        },
                        color: P ? "accentSuccess" : "textPrimary",
                        children: [P && (0, A.jsx)(_.Pd, {
                            style: {
                                marginRight: "8px"
                            }
                        }), n, !g && (0, A.jsx)(_.g8, {
                            className: (0, re.default)("".concat(b ? "" : "_13bxg42", " ").concat("rgw6ez17w rgw6ez118 rgw6ez7nq rgw6ezo8 rgw6ezok"))
                        }), (b || g) && (0, A.jsxs)(x.sg, {
                            gap: "12",
                            width: "full",
                            paddingTop: g ? "28" : "auto",
                            className: (0, re.default)(!g && "rgw6ez2qe rgw6ez796 rgw6ez4xq rgw6ez786 rgw6ez7hm"),
                            children: [r && (0, A.jsx)(h.n, {
                                color: "textPrimary",
                                fontWeight: "normal",
                                className: r,
                                children: r
                            }), c && (0, A.jsx)(h.n, {
                                color: "textSecondary",
                                className: m.R0,
                                children: c
                            }), (0, A.jsx)(x.sg, {
                                gap: "8",
                                children: l.map((function(e, n) {
                                    var t;
                                    return (0, A.jsxs)(x.sg, {
                                        gap: "8",
                                        children: [(0, A.jsxs)(x.X2, {
                                            children: [e.images.map((function(n, t) {
                                                return (0, A.jsx)(h.n, {
                                                    as: "img",
                                                    height: "20",
                                                    width: "20",
                                                    borderRadius: 0 === t && e.collectionAddress ? "round" : "4",
                                                    style: {
                                                        zIndex: 2 - t
                                                    },
                                                    className: "_13bxg48 rgw6ez7hm rgw6ez786 rgw6ez4xw",
                                                    src: n,
                                                    alt: e.name
                                                }, t)
                                            })), (0, A.jsx)(h.n, {
                                                marginLeft: "8",
                                                marginRight: "auto",
                                                fontWeight: "normal",
                                                color: "textPrimary",
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                whiteSpace: "nowrap",
                                                maxWidth: {
                                                    sm: "max",
                                                    md: e.status === v.Sb.REJECTED || e.status === v.Sb.FAILED ? "120" : "full"
                                                },
                                                className: m.Km,
                                                children: e.name
                                            }), g ? z(e) && "".concat((0, se.IA)((0, se.o0)(null !== (t = z(e)) && void 0 !== t ? t : 0).toString()), " ETH") : e.status === v.Sb.APPROVED ? (0, A.jsx)(_.Pd, {
                                                height: "20",
                                                width: "20"
                                            }) : e.status === v.Sb.FAILED || e.status === v.Sb.REJECTED ? (0, A.jsxs)(x.X2, {
                                                gap: "4",
                                                children: [(0, A.jsx)(h.n, {
                                                    fontWeight: "normal",
                                                    fontSize: "14",
                                                    color: "textSecondary",
                                                    children: e.status
                                                }), (0, A.jsx)(_.L6, {})]
                                            }) : e.status === v.Sb.SIGNING && (0, A.jsx)(_.Ho, {
                                                height: "20",
                                                width: "20",
                                                stroke: "#4673FA"
                                            })]
                                        }), (e.status === v.Sb.FAILED || e.status === v.Sb.REJECTED) && (0, A.jsxs)(x.X2, {
                                            gap: "8",
                                            justifyContent: "center",
                                            children: [(0, A.jsx)(h.n, {
                                                width: "120",
                                                as: "button",
                                                className: m.LA,
                                                borderRadius: "12",
                                                border: "none",
                                                color: "red400",
                                                height: "32",
                                                cursor: "pointer",
                                                style: {
                                                    backgroundColor: "#FA2B391A"
                                                },
                                                onClick: function() {
                                                    var n = (0, i.Z)((0, s.Z)().mark((function n(t) {
                                                        return (0, s.Z)().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    t.stopPropagation(), N(e);
                                                                case 2:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })));
                                                    return function(e) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }(),
                                                children: "Remove"
                                            }), (0, A.jsx)(h.n, {
                                                width: "120",
                                                as: "button",
                                                className: m.LA,
                                                borderRadius: "12",
                                                border: "none",
                                                color: "genieBlue",
                                                height: "32",
                                                cursor: "pointer",
                                                style: {
                                                    backgroundColor: "#4C82FB29"
                                                },
                                                onClick: function() {
                                                    var n = (0, i.Z)((0, s.Z)().mark((function n(t) {
                                                        return (0, s.Z)().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    if (t.stopPropagation(), !e.callback) {
                                                                        n.next = 4;
                                                                        break
                                                                    }
                                                                    return n.next = 4, e.callback();
                                                                case 4:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })));
                                                    return function(e) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }(),
                                                children: "Try again"
                                            })]
                                        })]
                                    }, n)
                                }))
                            })]
                        })]
                    })
                },
                ae = function() {
                    var e = (0, d.useWeb3React)().provider,
                        n = (0, G.Pc)((function(e) {
                            return e.sellAssets
                        })),
                        t = null === e || void 0 === e ? void 0 : e.getSigner(),
                        r = (0, G.zM)((function(e) {
                            return e.listings
                        })),
                        o = (0, G.zM)((function(e) {
                            return e.setListings
                        })),
                        c = (0, G.zM)((function(e) {
                            return e.collectionsRequiringApproval
                        })),
                        l = (0, G.zM)((function(e) {
                            return e.setCollectionsRequiringApproval
                        })),
                        u = (0, I.useState)(0),
                        f = (0, a.Z)(u, 2),
                        g = f[0],
                        p = f[1],
                        w = (0, G.zM)((function(e) {
                            return e.listingStatus
                        })),
                        b = (0, G.zM)((function(e) {
                            return e.setListingStatus
                        })),
                        j = (0, I.useState)(!1),
                        S = (0, a.Z)(j, 2),
                        k = S[0],
                        E = S[1],
                        N = (0, G.zM)((function(e) {
                            return e.looksRareNonce
                        })),
                        z = (0, G.zM)((function(e) {
                            return e.setLooksRareNonce
                        })),
                        P = (0, G.zM)((function(e) {
                            return e.getLooksRareNonce
                        })),
                        y = (0, G.cP)((function(e) {
                            return e.toggleBag
                        })),
                        C = (0, I.useRef)(N),
                        R = (0, G.dD)();
                    (0, I.useEffect)((function() {
                        G.zM.subscribe((function(e) {
                            return C.current = e.looksRareNonce
                        }))
                    }), []);
                    var T = (0, I.useMemo)((function() {
                            return function(e) {
                                var n = e.reduce((function(e, n) {
                                    var t;
                                    if (null !== (t = n.newListings) && void 0 !== t && t.length) {
                                        var r, s, i = n.newListings.reduce((function(e, n) {
                                                var t, r;
                                                return (null !== (t = e.price) && void 0 !== t ? t : 0) > (null !== (r = n.price) && void 0 !== r ? r : 0) ? e : n
                                            })),
                                            a = i.marketplace.fee + ("LooksRare" === i.marketplace.name ? X.fg : n.basisPoints) / 100;
                                        return e + (null !== (r = i.price) && void 0 !== r ? r : 0) - (null !== (s = i.price) && void 0 !== s ? s : 0) * (a / 100)
                                    }
                                    return e
                                }), 0);
                                return n ? Math.round(100 * n + Number.EPSILON) / 100 : 0
                            }(n)
                        }), [n]),
                        D = (0, I.useState)(0),
                        Z = (0, a.Z)(D, 2),
                        U = (Z[0], Z[1]);
                    (0, I.useEffect)((function() {
                        (0, F.tw)().then((function(e) {
                            U(e || 0)
                        }))
                    }), []), (0, I.useEffect)((function() {
                        (null === c || void 0 === c ? void 0 : c.length) && E(c.every((function(e) {
                            return e.status === v.Sb.APPROVED
                        }))), !k || w !== v.Sb.PENDING && w !== v.Sb.CONTINUE && w !== v.Sb.SIGNING || (se(), K())
                    }), [c, k]);
                    var W = (0, I.useMemo)((function() {
                            return c.every((function(e) {
                                return e.status === v.Sb.APPROVED || e.status === v.Sb.PAUSED
                            }))
                        }), [c]),
                        V = (0, I.useMemo)((function() {
                            return r.every((function(e) {
                                return e.status === v.Sb.APPROVED || e.status === v.Sb.PAUSED
                            }))
                        }), [r]);
                    (0, I.useEffect)((function() {
                        w === v.Sb.SIGNING && W && V && se()
                    }), [W, V]);
                    var $ = function() {
                            var e = (0, i.Z)((0, s.Z)().mark((function e() {
                                var n, r, i, a, o, u, d;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return b(v.Sb.SIGNING), n = O.Xg[O.HL.MAINNET], e.next = 6, t.getAddress();
                                        case 6:
                                            return r = e.sent, e.next = 9, (0, B.$n)(r);
                                        case 9:
                                            i = e.sent, z(null !== i && void 0 !== i ? i : 0), null !== c && void 0 !== c && c.some((function(e) {
                                                return e.status === v.Sb.PAUSED
                                            })) || (b(v.Sb.SIGNING), p(1)), a = n.TRANSFER_MANAGER_ERC721, o = (0, L.Z)(c), e.prev = 14, o.s();
                                        case 16:
                                            if ((u = o.n()).done) {
                                                e.next = 28;
                                                break
                                            }
                                            if (d = u.value, e.t0 = Y(d.status), !e.t0) {
                                                e.next = 26;
                                                break
                                            }
                                            if (!R) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.next = 23, J(d, c, l, t, a, re);
                                        case 23:
                                            e.next = 26;
                                            break;
                                        case 25:
                                            J(d, c, l, t, a, re);
                                        case 26:
                                            e.next = 16;
                                            break;
                                        case 28:
                                            e.next = 33;
                                            break;
                                        case 30:
                                            e.prev = 30, e.t1 = e.catch(14), o.e(e.t1);
                                        case 33:
                                            return e.prev = 33, o.f(), e.finish(33);
                                        case 36:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [14, 30, 33, 36]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        K = function() {
                            var n = (0, i.Z)((0, s.Z)().mark((function n() {
                                var i, a, c, l, u, d;
                                return (0, s.Z)().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t && e) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            b(v.Sb.SIGNING), p(2), a = (0, L.Z)(r), n.prev = 5, a.s();
                                        case 7:
                                            if ((c = a.n()).done) {
                                                n.next = 15;
                                                break
                                            }
                                            if (l = c.value, n.t0 = Y(l.status), !n.t0) {
                                                n.next = 13;
                                                break
                                            }
                                            return n.next = 13, Q(l, r, o, t, e, P, z, re);
                                        case 13:
                                            n.next = 7;
                                            break;
                                        case 15:
                                            n.next = 20;
                                            break;
                                        case 17:
                                            n.prev = 17, n.t1 = n.catch(5), a.e(n.t1);
                                        case 20:
                                            return n.prev = 20, a.f(), n.finish(20);
                                        case 23:
                                            return u = r.every((function(e) {
                                                return e.status === v.Sb.APPROVED
                                            })), d = r.some((function(e) {
                                                return e.status === v.Sb.PAUSED
                                            })), u ? (p(0), b(v.Sb.APPROVED)) : d || b(v.Sb.FAILED), n.t2 = B.wd, n.t3 = r, n.next = 30, null === t || void 0 === t ? void 0 : t.getAddress();
                                        case 30:
                                            if (n.t5 = i = n.sent, n.t4 = null !== n.t5, !n.t4) {
                                                n.next = 34;
                                                break
                                            }
                                            n.t4 = void 0 !== i;
                                        case 34:
                                            if (!n.t4) {
                                                n.next = 38;
                                                break
                                            }
                                            n.t6 = i, n.next = 39;
                                            break;
                                        case 38:
                                            n.t6 = "";
                                        case 39:
                                            return n.t7 = n.t6, n.next = 42, (0, n.t2)(n.t3, n.t7);
                                        case 42:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [5, 17, 20, 23]
                                ])
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        re = function() {
                            var e, n = (0, L.Z)(c);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var t = e.value;
                                    ee(t, c, l)
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            var s, i = (0, L.Z)(r);
                            try {
                                for (i.s(); !(s = i.n()).done;) {
                                    var a = s.value;
                                    ee(a, r, o)
                                }
                            } catch (u) {
                                i.e(u)
                            } finally {
                                i.f()
                            }
                        },
                        se = function() {
                            var e, n = (0, L.Z)(c);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var t = e.value;
                                    ne(t, c, l)
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            var s, i = (0, L.Z)(r);
                            try {
                                for (i.s(); !(s = i.n()).done;) {
                                    var a = s.value;
                                    ne(a, r, o)
                                }
                            } catch (u) {
                                i.e(u)
                            } finally {
                                i.f()
                            }
                        },
                        ae = (0, I.useMemo)((function() {
                            return w === v.Sb.APPROVED
                        }), [w]);
                    return (0, A.jsxs)(x.sg, {
                        paddingTop: "20",
                        paddingBottom: "20",
                        paddingLeft: "12",
                        paddingRight: "12",
                        children: [(0, A.jsxs)(x.X2, {
                            className: m.td,
                            marginBottom: "10",
                            children: [R && !ae && (0, A.jsx)(h.n, {
                                paddingTop: "4",
                                marginRight: "4",
                                onClick: y,
                                children: (0, A.jsx)(_.wy, {
                                    height: 28,
                                    width: 28
                                })
                            }), ae ? "Success!" : "Listing ".concat(n.length, " NFTs"), (0, A.jsx)(h.n, {
                                as: "button",
                                border: "none",
                                color: "textSecondary",
                                backgroundColor: "backgroundSurface",
                                marginLeft: "auto",
                                marginRight: "0",
                                paddingRight: "0",
                                display: {
                                    sm: "flex",
                                    md: "none"
                                },
                                cursor: "pointer",
                                onClick: y,
                                children: (0, A.jsx)(_.DX, {
                                    height: 28,
                                    width: 28,
                                    fill: M.Z4.colors.textPrimary
                                })
                            })]
                        }), (0, A.jsx)(x.sg, {
                            overflowX: "hidden",
                            overflowY: "auto",
                            style: {
                                maxHeight: "60vh"
                            },
                            children: ae ? (0, A.jsx)(ie, {
                                sectionTitle: "Listed ".concat(r.length, " item").concat(q(r.length), " for sale"),
                                rows: r,
                                index: 0,
                                openIndex: g,
                                isSuccessScreen: !0
                            }) : (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(ie, {
                                    sectionTitle: "Approve ".concat(c.length, " collection").concat(q(c.length)),
                                    title: "COLLECTIONS",
                                    rows: c,
                                    index: 1,
                                    openIndex: g
                                }), (0, A.jsx)(ie, {
                                    sectionTitle: "Confirm ".concat(r.length, " listing").concat(q(r.length)),
                                    caption: "Now you can sign to list each item",
                                    title: "NFTS",
                                    rows: r,
                                    index: 2,
                                    openIndex: g
                                })]
                            })
                        }), (0, A.jsx)("hr", {
                            className: "rgw6ez79q rgw6ezuw rgw6ez152 rgw6ez7hi rgw6ez786 rgw6ez4xq"
                        }), (0, A.jsxs)(x.X2, {
                            className: m.v4,
                            marginTop: "12",
                            marginBottom: ae ? "8" : "20",
                            children: ["Return if sold", (0, A.jsxs)(x.X2, {
                                className: m.Nf,
                                marginLeft: "auto",
                                marginRight: "0",
                                children: [T, "\xa0ETH"]
                            })]
                        }), ae ? (0, A.jsxs)(h.n, {
                            as: "span",
                            className: m.VJ,
                            color: "textSecondary",
                            children: ["Status:", " ", (0, A.jsx)(h.n, {
                                as: "span",
                                color: "accentSuccess",
                                children: "Confirmed"
                            })]
                        }) : (0, A.jsx)(te, {
                            onClick: function() {
                                se(), k ? K() : $()
                            },
                            buttonText: "Start listing",
                            showWarningOverride: R
                        }), (w === v.Sb.PENDING || w === v.Sb.SIGNING) && (0, A.jsx)(h.n, {
                            as: "button",
                            border: "none",
                            backgroundColor: "backgroundSurface",
                            cursor: "pointer",
                            color: "orange",
                            className: H,
                            onClick: function() {
                                re()
                            },
                            type: "button",
                            children: "Stop listing"
                        })]
                    })
                },
                oe = t(73276),
                ce = function(e) {
                    var n = e.onClick,
                        t = void 0 === n ? function() {
                            return null
                        } : n;
                    return (0, A.jsx)(h.n, {
                        className: "_199qdl71 rgw6ez3bk rgw6ez30k rgw6ez15q rgw6ez1c8 rgw6ez458 rgw6ez412 rgw6ez4o2 rgw6ez3nq",
                        onClick: t
                    })
                },
                le = t(40519),
                ue = t(80989);

            function de(e, n) {
                if (Object.is(e, n)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof n || null === n) return !1;
                var t = Object.keys(e);
                if (t.length !== Object.keys(n).length) return !1;
                for (var r = 0; r < t.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(n, t[r]) || !Object.is(e[t[r]], n[t[r]])) return !1;
                return !0
            }
            var fe, ge = t(27591),
                pe = t(17186),
                he = (0, c.keyframes)(fe || (fe = (0, pe.Z)(["\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n"]))),
                xe = c.default.circle.withConfig({
                    componentId: "sc-5ix82i-0"
                })(["stroke-dasharray:1000;stroke-dashoffset:0;-webkit-animation:", " linear;animation:", " linear;animation-duration:160s;stroke:", ";"], he, he, (function(e) {
                    return e.theme.accentAction
                })),
                me = function() {
                    return (0, A.jsx)(h.n, {
                        display: "flex",
                        position: "absolute",
                        children: (0, A.jsx)("svg", {
                            height: "18px",
                            width: "18px",
                            children: (0, A.jsx)(xe, {
                                strokeWidth: "".concat(1.5),
                                strokeLinecap: "round",
                                style: {
                                    transform: "rotate(90deg)",
                                    transformOrigin: "50% 50%"
                                },
                                fill: "transparent",
                                r: "8px",
                                cx: "9px",
                                cy: "9px"
                            })
                        })
                    })
                },
                we = t(49815),
                be = t(97002),
                ve = (t(21991), t(59900)),
                je = "12",
                Ie = (c.default.a.withConfig({
                    componentId: "sc-1xq4e4s-0"
                })(["display:flex;align-items:center;flex-shrink:0;text-decoration:none;font-size:14px;font-weight:500;border:1px solid;color:", ";border-color:", ";padding:2px 6px;border-radius:6px;", ";"], (function(e) {
                    return e.theme.accentAction
                }), (function(e) {
                    return e.theme.accentActionSoft
                }), we.c), (0, c.default)(S.Z).withConfig({
                    componentId: "sc-1xq4e4s-1"
                })(["width:16px;height:16px;color:", ";"], (function(e) {
                    return e.theme.accentFailure
                }))),
                Se = (c.default.div.withConfig({
                    componentId: "sc-1xq4e4s-2"
                })(["position:absolute;display:flex;width:100%;bottom:12px;z-index:2;justify-content:center;"]), c.default.div.withConfig({
                    componentId: "sc-1xq4e4s-3"
                })(["display:flex;border:1px solid ", ";border-radius:", "px;overflow:hidden;"], (function(e) {
                    return e.theme.backgroundOutline
                }), je), (0, c.default)(E.Tv.HeadlineSmall).withConfig({
                    componentId: "sc-1xq4e4s-4"
                })(["display:flex;padding:6px 8px;width:60px;background:", ";justify-content:center;cursor:default;"], (function(e) {
                    return e.theme.backgroundBackdrop
                })), c.default.div.withConfig({
                    componentId: "sc-1xq4e4s-5"
                })(["display:flex;justify-content:center;align-items:center;width:40px;background:", ";color:", ";:hover{color:", ";}"], (function(e) {
                    return e.theme.backgroundInteractive
                }), (function(e) {
                    return e.theme.textPrimary
                }), (function(e) {
                    return e.theme.accentAction
                })), c.default.div.withConfig({
                    componentId: "sc-1xq4e4s-6"
                })(["position:absolute;top:12px;left:12px;z-index:2;"]), c.default.div.withConfig({
                    componentId: "sc-1xq4e4s-7"
                })(["position:relative;pointer-events:auto;&:hover{opacity:", ";}cursor:", ";"], (function(e) {
                    var n = e.isDisabled,
                        t = e.theme;
                    return n ? t.opacity.disabled : t.opacity.enabled
                }), (function(e) {
                    return e.isDisabled ? "default" : "pointer"
                })), (0, c.default)(x.X2).withConfig({
                    componentId: "sc-1xq4e4s-8"
                })(["padding:2px;white-space:pre;text-overflow:ellipsis;display:block;overflow:hidden;"]), function() {
                    return (0, A.jsx)(be.ud, {
                        text: (0, A.jsx)(h.n, {
                            className: m.Km,
                            children: "Blocked on OpenSea"
                        }),
                        placement: "top",
                        children: (0, A.jsx)(h.n, {
                            display: "flex",
                            flexShrink: "0",
                            marginLeft: "4",
                            children: (0, A.jsx)(Ie, {})
                        })
                    })
                }),
                ke = t(6261),
                Ee = "_1kuawcb rgw6ezb2 rgw6ezcw rgw6ez7jy rgw6ez428 rgw6ez422",
                Ne = "_1kuawc1 rgw6ez2a8 rgw6ez2fq rgw6ez2kw rgw6ez24e rgw6ez4ak rgw6ez3pw rgw6ez77u rgw6ez1bq rgw6ez79e",
                ze = "rgw6ez12q rgw6ez19e rgw6ez462 rgw6ez796",
                Ae = "rgw6ezcq rgw6ezaw rgw6ez7my rgw6ez7jy rgw6ez422 rgw6ez428 rgw6ez4aq",
                Pe = "_1kuawc7",
                ye = "rgw6ez3u8",
                Ce = "rgw6ez452 rgw6ez36k rgw6ez3c2",
                Re = (0, c.default)(ge.UH).withConfig({
                    componentId: "sc-iebvtt-0"
                })(["border-radius:12px;font-size:14px;line-height:16px;margin-left:16px;padding:12px 14px;"]),
                Te = (0, c.default)(ge.UH).withConfig({
                    componentId: "sc-iebvtt-1"
                })(["border-radius:12px;flex:1 1 auto;font-size:14px;padding:8px;width:50%;"]),
                De = function() {
                    return (0, A.jsx)(h.n, {
                        position: "relative",
                        background: "loadingBackground",
                        className: ze,
                        children: (0, A.jsxs)(h.n, {
                            position: "absolute",
                            textAlign: "center",
                            left: "1/2",
                            top: "1/2",
                            style: {
                                transform: "translate3d(-50%, -50%, 0)"
                            },
                            color: "gray500",
                            fontSize: "12",
                            fontWeight: "normal",
                            children: ["Image", (0, A.jsx)("br", {}), "not", (0, A.jsx)("br", {}), "available"]
                        })
                    })
                },
                Ze = function(e) {
                    var n, t = e.asset,
                        r = e.usdPrice,
                        s = e.removeAsset,
                        i = e.showRemove,
                        o = e.grayscale,
                        c = e.isMobile,
                        l = (0, I.useState)(!1),
                        d = (0, a.Z)(l, 2),
                        f = d[0],
                        g = d[1],
                        p = (0, I.useState)(!t.smallImageUrl),
                        m = (0, a.Z)(p, 2),
                        w = m[0],
                        b = m[1],
                        v = (0, I.useState)(!1),
                        S = (0, a.Z)(v, 2),
                        k = S[0],
                        E = S[1],
                        N = (0, I.useCallback)((function() {
                            return E(!0)
                        }), []),
                        z = (0, I.useCallback)((function() {
                            return E(!1)
                        }), []),
                        P = Boolean(i && k && !c),
                        y = t.updatedPriceInfo ? t.updatedPriceInfo.ETHPrice : t.priceInfo.ETHPrice,
                        C = (0, j.zb)(y),
                        R = (0, j._P)(r ? parseFloat((0, u.formatEther)(y)) * r : r, !0),
                        T = (0, I.useCallback)((function(e) {
                            e.preventDefault(), e.stopPropagation(), s([t])
                        }), [t, s]);
                    return (0, A.jsx)(ke.rU, {
                        to: (0, j.PZ)(t),
                        style: {
                            textDecoration: "none"
                        },
                        children: (0, A.jsxs)(x.X2, {
                            className: Ne,
                            onMouseEnter: N,
                            onMouseLeave: z,
                            children: [(0, A.jsxs)(h.n, {
                                position: "relative",
                                display: "flex",
                                children: [(0, A.jsx)(h.n, {
                                    display: i && c ? "block" : "none",
                                    className: Ce,
                                    onClick: T,
                                    transition: "250",
                                    zIndex: "1",
                                    children: (0, A.jsx)(_.Xv, {})
                                }), !w && (0, A.jsx)(h.n, {
                                    as: "img",
                                    src: t.smallImageUrl,
                                    alt: t.name,
                                    className: (0, re.default)(ze, o && !k && Pe),
                                    onLoad: function() {
                                        g(!0)
                                    },
                                    onError: function() {
                                        b(!0)
                                    },
                                    visibility: f ? "visible" : "hidden"
                                }), !f && (0, A.jsx)(h.n, {
                                    position: "absolute",
                                    className: "".concat(ze, " ").concat("_2kdvfw1")
                                }), w && (0, A.jsx)(De, {})]
                            }), (0, A.jsxs)(x.sg, {
                                overflow: "hidden",
                                width: "full",
                                color: o ? "textSecondary" : "textPrimary",
                                children: [(0, A.jsxs)(x.X2, {
                                    overflow: "hidden",
                                    width: "full",
                                    whiteSpace: "nowrap",
                                    children: [(0, A.jsx)(h.n, {
                                        className: Ee,
                                        children: null !== (n = t.name) && void 0 !== n ? n : "#".concat(t.tokenId)
                                    }), t.susFlag && (0, A.jsx)(Se, {})]
                                }), (0, A.jsxs)(x.X2, {
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    gap: "2",
                                    children: [(0, A.jsx)(h.n, {
                                        className: Ae,
                                        children: t.collectionName
                                    }), t.collectionIsVerified && (0, A.jsx)(_.SA, {
                                        className: ye
                                    })]
                                })]
                            }), P && (0, A.jsx)(Re, {
                                onClick: T,
                                emphasis: ge.eI.medium,
                                size: ge.qE.medium,
                                children: "Remove"
                            }), (!P || c) && (0, A.jsxs)(x.sg, {
                                flexShrink: "0",
                                alignItems: "flex-end",
                                children: [(0, A.jsxs)(h.n, {
                                    className: "_1kuawc9 rgw6ez3p8 rgw6ezb2 rgw6ezd2 rgw6ez3u8",
                                    children: [C, "\xa0ETH"]
                                }), (0, A.jsx)(h.n, {
                                    className: Ae,
                                    children: R
                                })]
                            })]
                        })
                    })
                },
                Le = function(e) {
                    var n, t = e.asset,
                        r = e.usdPrice,
                        s = e.markAssetAsReviewed,
                        i = e.top,
                        a = e.isMobile,
                        o = l.O$.from(null === (n = t.updatedPriceInfo) || void 0 === n ? void 0 : n.ETHPrice).gt(l.O$.from(t.priceInfo.ETHPrice)),
                        c = (0, I.useCallback)((function(e) {
                            e.preventDefault(), e.stopPropagation();
                            s(t, !1)
                        }), [t, s]),
                        u = (0, I.useCallback)((function(e) {
                            e.preventDefault(), e.stopPropagation();
                            s(t, !0)
                        }), [t, s]);
                    return (0, A.jsxs)(x.sg, {
                        className: "rgw6ez2lk rgw6ez252 rgw6ezjw rgw6ezpe rgw6ez4p2 rgw6ez3pk rgw6ez4ak rgw6ez786 rgw6ez7hm rgw6ez50w rgw6ez5lq rgw6ez1bq rgw6ez77u",
                        borderTopColor: i ? "backgroundOutline" : "transparent",
                        children: [(0, A.jsxs)(x.X2, {
                            className: "rgw6ezcq rgw6ezaw rgw6ez7my rgw6ez48q rgw6ez3p8",
                            children: [o ? (0, A.jsx)(_.PH, {}) : (0, A.jsx)(_.HE, {}), (0, A.jsx)(h.n, {
                                children: "Price ".concat(o ? "increased" : "decreased", " from ").concat((0, j.zb)(t.priceInfo.ETHPrice), " ETH")
                            })]
                        }), (0, A.jsx)(h.n, {
                            style: {
                                marginLeft: "-8px",
                                marginRight: "-8px"
                            },
                            children: (0, A.jsx)(Ze, {
                                asset: t,
                                usdPrice: r,
                                removeAsset: function() {},
                                isMobile: a
                            })
                        }), (0, A.jsxs)(x.X2, {
                            gap: "8",
                            justifyContent: "space-between",
                            children: [(0, A.jsx)(Te, {
                                onClick: c,
                                emphasis: ge.eI.medium,
                                size: ge.qE.small,
                                children: "Remove"
                            }), (0, A.jsx)(Te, {
                                onClick: u,
                                emphasis: ge.eI.high,
                                size: ge.qE.small,
                                children: "Keep"
                            })]
                        })]
                    })
                },
                Oe = function(e) {
                    var n = e.assets;
                    return (0, A.jsx)(x.sg, {
                        display: "grid",
                        style: {
                            gridTemplateColumns: "repeat(".concat(n.length, ", 20px)"),
                            width: "".concat(32 + 20 * (n.length - 1), "px")
                        },
                        children: n.map((function(e, n) {
                            return (0, A.jsx)(h.n, {
                                as: "img",
                                src: e.smallImageUrl,
                                width: "32",
                                height: "32",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "backgroundSurface",
                                borderRadius: "4",
                                style: {
                                    zIndex: n
                                },
                                className: Pe
                            }, "".concat(e.address, "-").concat(e.tokenId))
                        }))
                    })
                },
                _e = function(e) {
                    var n = e.assets,
                        t = e.usdPrice,
                        r = e.clearUnavailableAssets,
                        s = e.didOpenUnavailableAssets,
                        i = e.setDidOpenUnavailableAssets,
                        o = e.isMobile,
                        c = (0, I.useReducer)((function(e) {
                            return !e
                        }), !1),
                        l = (0, a.Z)(c, 2),
                        u = l[0],
                        d = l[1],
                        f = (0, I.useState)(8),
                        g = (0, a.Z)(f, 2),
                        p = g[0],
                        h = g[1];
                    if ((0, I.useEffect)((function() {
                            if (p) {
                                var e = setInterval((function() {
                                    h(p - 1)
                                }), 1e3);
                                return function() {
                                    return clearInterval(e)
                                }
                            }
                            s || (r(), i(!1))
                        }), [p, r, s, i]), !n || 0 === n.length) return null;
                    var w = n.length > 1,
                        b = u || !w;
                    return (0, A.jsx)(x.sg, {
                        className: "rgw6ez2lk rgw6ez252 rgw6ezjw rgw6ezpe rgw6ez4p2 rgw6ez3pw rgw6ez4ak rgw6ez786 rgw6ez7hm rgw6ez50w rgw6ez5xq rgw6ez5lq rgw6ez1bq",
                        children: (0, A.jsxs)(x.sg, {
                            children: [(0, A.jsxs)(x.X2, {
                                justifyContent: "space-between",
                                marginBottom: b ? "12" : "0",
                                cursor: w ? "pointer" : "default",
                                onClick: function() {
                                    w && (!s && i(!0), d())
                                },
                                children: [(0, A.jsxs)(x.X2, {
                                    gap: "12",
                                    color: "textSecondary",
                                    className: m.Km,
                                    children: [!b && (0, A.jsx)(Oe, {
                                        assets: n.slice(0, 5)
                                    }), "No longer available"]
                                }), w && (0, A.jsx)(x.X2, {
                                    color: "textSecondary",
                                    children: u ? (0, A.jsx)(_.X_, {}) : (0, A.jsx)(_.Xs, {})
                                }), !s && (0, A.jsxs)(x.X2, {
                                    position: "relative",
                                    width: "20",
                                    height: "20",
                                    color: "textPrimary",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    onClick: r,
                                    children: [(0, A.jsx)(me, {}), (0, A.jsx)(_.Nb, {})]
                                })]
                            }), (0, A.jsx)(x.sg, {
                                gap: "8",
                                style: {
                                    marginLeft: "-8px",
                                    marginRight: "-8px"
                                },
                                children: b && n.map((function(e) {
                                    return (0, A.jsx)(Ze, {
                                        asset: e,
                                        usdPrice: t,
                                        removeAsset: function() {},
                                        grayscale: !0,
                                        isMobile: o
                                    }, e.id)
                                }))
                            })]
                        })
                    })
                },
                Me = function() {
                    var e = (0, G.cP)((function(e) {
                            return e.bagStatus
                        })),
                        n = (0, G.cP)((function(e) {
                            return e.setBagStatus
                        })),
                        t = (0, G.cP)((function(e) {
                            return e.markAssetAsReviewed
                        })),
                        r = (0, G.cP)((function(e) {
                            return e.didOpenUnavailableAssets
                        })),
                        s = (0, G.cP)((function(e) {
                            return e.setDidOpenUnavailableAssets
                        })),
                        i = (0, G.cP)((function(e) {
                            return e.itemsInBag
                        })),
                        a = (0, G.cP)((function(e) {
                            return e.setItemsInBag
                        })),
                        o = (0, G.cP)((function(e) {
                            return e.removeAssetsFromBag
                        })),
                        c = (0, G.dD)(),
                        l = (0, I.useMemo)((function() {
                            return (0, j.G7)(i)
                        }), [i]),
                        u = (0, ue.useQuery)(["fetchPrice", {}], (function() {
                            return (0, j.tw)()
                        }), {}).data,
                        d = (0, I.useMemo)((function() {
                            return {
                                unchangedAssets: l.filter((function(e) {
                                    return e.status === v.ZJ.ADDED_TO_BAG || e.status === v.ZJ.REVIEWED
                                })).map((function(e) {
                                    return e.asset
                                })),
                                priceChangedAssets: l.filter((function(e) {
                                    return e.status === v.ZJ.REVIEWING_PRICE_CHANGE
                                })).map((function(e) {
                                    return e.asset
                                })),
                                unavailableAssets: l.filter((function(e) {
                                    return e.status === v.ZJ.UNAVAILABLE
                                })).map((function(e) {
                                    return e.asset
                                })),
                                availableItems: l.filter((function(e) {
                                    return e.status !== v.ZJ.UNAVAILABLE
                                }))
                            }
                        }), [l]),
                        f = d.unchangedAssets,
                        g = d.priceChangedAssets,
                        p = d.unavailableAssets,
                        h = d.availableItems;
                    return (0, I.useEffect)((function() {
                        var t = g.length > 0,
                            r = l.length > 0;
                        t && (e !== v.s.IN_REVIEW || t || n(r ? v.s.CONFIRM_REVIEW : v.s.ADDING_TO_BAG)), e !== v.s.CONFIRM_REVIEW || r || n(v.s.ADDING_TO_BAG)
                    }), [e, l, g, n, u]), (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsxs)(x.sg, {
                            display: g.length > 0 || p.length > 0 ? "flex" : "none",
                            children: [p.length > 0 && (0, A.jsx)(_e, {
                                assets: p,
                                usdPrice: u,
                                clearUnavailableAssets: function() {
                                    return a(h)
                                },
                                didOpenUnavailableAssets: r,
                                setDidOpenUnavailableAssets: s,
                                isMobile: c
                            }), g.map((function(e, n) {
                                return (0, A.jsx)(Le, {
                                    asset: e,
                                    usdPrice: u,
                                    markAssetAsReviewed: t,
                                    top: 0 === n && 0 === p.length,
                                    isMobile: c
                                }, e.id)
                            }))]
                        }), (0, A.jsx)(x.sg, {
                            gap: "8",
                            children: f.slice(0).reverse().map((function(e) {
                                return (0, A.jsx)(Ze, {
                                    asset: e,
                                    usdPrice: u,
                                    removeAsset: o,
                                    showRemove: !0,
                                    isMobile: c
                                }, e.id)
                            }))
                        })]
                    })
                },
                Ge = (0, c.default)(E.oD).withConfig({
                    componentId: "sc-bq6y8h-0"
                })(["color:", ";cursor:pointer;font-weight:600;font-size:14px;line-height:16px;:active{text-decoration:none;}"], (function(e) {
                    return e.theme.textSecondary
                })),
                Be = c.default.button.withConfig({
                    componentId: "sc-bq6y8h-1"
                })(["align-items:center;background-color:transparent;border-radius:8px;border:none;color:", ";cursor:pointer;display:flex;flex-direction:row;justify-content:flex-end;margin-left:auto;padding:2px;opacity:1;", ""], (function(e) {
                    return e.theme.textPrimary
                }), we.c),
                Fe = c.default.div.withConfig({
                    componentId: "sc-bq6y8h-2"
                })(["align-items:center;background-color:", ";border-radius:100px;font-weight:bold;color:", ";display:flex;font-size:10px;justify-content:center;min-width:", ";min-height:", ";padding:4px 6px;"], (function(e) {
                    return e.theme.accentAction
                }), (function(e) {
                    return e.theme.accentTextLightPrimary
                }), (function(e) {
                    return e.sizing
                }), (function(e) {
                    return e.sizing
                })),
                qe = c.default.div.withConfig({
                    componentId: "sc-bq6y8h-3"
                })(["align-items:center;display:flex;flex-direction:row;gap:8px;justify-content:flex-start;margin:16px 20px;text-align:center;"]),
                Ue = function(e) {
                    var n = e.numberOfAssets,
                        t = e.closeBag,
                        r = e.resetFlow,
                        s = e.isProfilePage,
                        i = (0, I.useMemo)((function() {
                            return function(e) {
                                var n = e.toString().length;
                                return "".concat(14 + 6 * n, "px")
                            }(n)
                        }), [n]);
                    return (0, A.jsxs)(qe, {
                        children: [(0, A.jsx)(E.Tv.HeadlineSmall, {
                            children: s ? (0, A.jsx)(z.c, {
                                children: "Sell"
                            }) : (0, A.jsx)(z.c, {
                                children: "Bag"
                            })
                        }), n > 0 && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(Fe, {
                                sizing: i,
                                children: n
                            }), (0, A.jsx)(Ge, {
                                onClick: r,
                                children: "Clear all"
                            })]
                        }), (0, A.jsx)(Be, {
                            onClick: t,
                            children: (0, A.jsx)(_.BW, {})
                        })]
                    })
                },
                He = (0, c.default)(x.sg).withConfig({
                    componentId: "sc-xhr1rt-0"
                })(["gap:12px;margin-top:68px;"]),
                We = function() {
                    var e = (0, f.e5)();
                    return (0, A.jsxs)(He, {
                        children: [(0, A.jsx)(x.M5, {
                            children: e ? (0, A.jsx)(_.JP, {
                                color: M.Z4.colors.textTertiary
                            }) : (0, A.jsx)(_.Ln, {
                                color: M.Z4.colors.textTertiary,
                                height: "96px",
                                width: "96px",
                                strokeWidth: "1px"
                            })
                        }), e ? (0, A.jsx)(x.M5, {
                            className: m.v4,
                            children: "No NFTs selected"
                        }) : (0, A.jsxs)(x.sg, {
                            gap: "16",
                            children: [(0, A.jsx)(x.M5, {
                                className: m.v4,
                                style: {
                                    lineHeight: "24px"
                                },
                                children: "Your bag is empty"
                            }), (0, A.jsx)(x.M5, {
                                fontSize: "12",
                                fontWeight: "normal",
                                color: "textSecondary",
                                style: {
                                    lineHeight: "16px"
                                },
                                children: "Selected NFTs will appear here"
                            })]
                        })]
                    })
                },
                Xe = function(e) {
                    var n = e.asset,
                        t = (0, G.Pc)((function(e) {
                            return e.removeSellAsset
                        })),
                        r = (0, G.dD)(),
                        s = (0, I.useState)(!1),
                        i = (0, a.Z)(s, 2),
                        o = i[0],
                        c = i[1],
                        l = function() {
                            return c(!o)
                        },
                        u = function(e) {
                            e.preventDefault(), e.stopPropagation(), t(n)
                        };
                    return (0, A.jsxs)(x.X2, {
                        className: Ne,
                        onMouseEnter: l,
                        onMouseLeave: l,
                        children: [(0, A.jsxs)(h.n, {
                            position: "relative",
                            display: "flex",
                            children: [(0, A.jsx)(h.n, {
                                display: r ? "block" : "none",
                                className: Ce,
                                onClick: u,
                                transition: "250",
                                zIndex: "1",
                                children: (0, A.jsx)(_.Xv, {})
                            }), (0, A.jsx)("img", {
                                src: n.smallImageUrl,
                                alt: n.name,
                                className: ze
                            })]
                        }), (0, A.jsxs)(x.sg, {
                            overflow: "hidden",
                            width: "full",
                            color: "textPrimary",
                            children: [(0, A.jsx)(x.X2, {
                                overflow: "hidden",
                                width: "full",
                                justifyContent: "space-between",
                                whiteSpace: "nowrap",
                                gap: "16",
                                children: (0, A.jsx)(h.n, {
                                    className: Ee,
                                    children: n.name || "#".concat(n.tokenId)
                                })
                            }), (0, A.jsxs)(x.X2, {
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                gap: "2",
                                children: [(0, A.jsx)(h.n, {
                                    className: Ae,
                                    children: n.asset_contract.name
                                }), n.collectionIsVerified && (0, A.jsx)(_.SA, {
                                    className: ye,
                                    fill: ve.O9.magentaVibrant
                                })]
                            })]
                        }), o && !r && (0, A.jsx)(Re, {
                            onClick: u,
                            emphasis: ge.eI.medium,
                            size: ge.qE.medium,
                            children: "Remove"
                        })]
                    })
                },
                Ve = function() {
                    var e = (0, G.Pc)((function(e) {
                        return e.sellAssets
                    }));
                    return (0, A.jsx)(x.sg, {
                        children: e.length ? e.map((function(e, n) {
                            return (0, A.jsx)(Xe, {
                                asset: e
                            }, n)
                        })) : null
                    })
                },
                Je = c.default.div.withConfig({
                    componentId: "sc-1cpp7nx-0"
                })(["position:fixed;background:rgba(0,0,0,0.7);backdrop-filter:blur(12px);top:72px;width:100%;height:100%;"]),
                $e = function(e) {
                    var n = e.top,
                        t = e.show;
                    return (0, A.jsx)(h.n, {
                        marginX: "16",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        borderTopColor: n ? "transparent" : "backgroundOutline",
                        borderBottomColor: n ? "backgroundOutline" : "transparent",
                        opacity: t ? "1" : "0",
                        transition: "250"
                    })
                },
                Qe = function() {
                    var e = (0, d.useWeb3React)(),
                        n = e.account,
                        t = e.provider,
                        c = (0, G.Pc)((function(e) {
                            return {
                                resetSellAssets: e.reset,
                                sellAssets: e.sellAssets
                            }
                        }), de),
                        g = c.resetSellAssets,
                        p = c.sellAssets,
                        w = (0, G.aO)((function(e) {
                            var n = e.setProfilePageState;
                            return {
                                profilePageState: e.state,
                                setProfilePageState: n
                            }
                        }), de),
                        b = w.profilePageState,
                        S = w.setProfilePageState,
                        k = (0, G.cP)((function(e) {
                            return (0, o.Z)((0, o.Z)({}, e), {}, {
                                bagIsLocked: e.isLocked,
                                uncheckedItemsInBag: e.itemsInBag
                            })
                        }), de),
                        E = k.bagStatus,
                        N = k.setBagStatus,
                        z = k.didOpenUnavailableAssets,
                        P = k.setDidOpenUnavailableAssets,
                        y = k.bagIsLocked,
                        C = k.setLocked,
                        R = k.reset,
                        T = k.setItemsInBag,
                        D = k.bagExpanded,
                        L = k.toggleBag,
                        O = k.setTotalEthPrice,
                        _ = k.setTotalUsdPrice,
                        M = k.setBagExpanded,
                        F = (0, G.cP)((function(e) {
                            return {
                                uncheckedItemsInBag: e.itemsInBag
                            }
                        })).uncheckedItemsInBag,
                        q = (0, f.e5)(),
                        U = (0, f._3)(),
                        H = (0, f.GZ)(),
                        W = (0, G.dD)(),
                        X = (0, G.pQ)((function(e) {
                            return e.sendTransaction
                        })),
                        V = (0, G.pQ)((function(e) {
                            return e.state
                        })),
                        J = (0, G.pQ)((function(e) {
                            return e.setState
                        })),
                        $ = (0, I.useRef)(V),
                        Q = (0, G.JC)((function(e) {
                            return [e.setTransactionResponse]
                        })),
                        K = (0, a.Z)(Q, 1)[0],
                        Y = (0, ue.useQueryClient)(),
                        ee = (0, I.useMemo)((function() {
                            return (0, j.G7)(F)
                        }), [F]),
                        ne = (0, I.useState)(!1),
                        te = (0, a.Z)(ne, 2),
                        re = te[0],
                        se = te[1],
                        ie = (0, I.useState)(!1),
                        fe = (0, a.Z)(ie, 2),
                        ge = fe[0],
                        pe = fe[1],
                        he = (0, I.useState)(0),
                        xe = (0, a.Z)(he, 2),
                        me = xe[0],
                        we = xe[1],
                        be = (0, ue.useQuery)(["fetchPrice", {}], (function() {
                            return (0, j.tw)()
                        }), {}).data,
                        ve = (0, I.useMemo)((function() {
                            var e = ee.reduce((function(e, n) {
                                return n.status !== v.ZJ.UNAVAILABLE ? e.add(l.O$.from(n.asset.updatedPriceInfo ? n.asset.updatedPriceInfo.ETHPrice : n.asset.priceInfo.ETHPrice)) : e
                            }), l.O$.from(0));
                            return {
                                totalEthPrice: e,
                                totalUsdPrice: be ? parseFloat((0, u.formatEther)(e)) * be : void 0
                            }
                        }), [ee, be]),
                        je = ve.totalEthPrice,
                        Ie = ve.totalUsdPrice,
                        Se = function() {
                            var e = (0, i.Z)((0, s.Z)().mark((function e(n) {
                                var r;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t && n) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, X(null === t || void 0 === t ? void 0 : t.getSigner(), ee.filter((function(e) {
                                                return e.status !== v.ZJ.UNAVAILABLE
                                            })).map((function(e) {
                                                return e.asset
                                            })), n);
                                        case 4:
                                            !(r = e.sent) || $.current !== v.c$.Success && $.current !== v.c$.Failed || (C(!1), se(!1), K(r), M({
                                                bagExpanded: !1
                                            }), R());
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ke = (0, I.useCallback)((function() {
                            M({
                                bagExpanded: !1,
                                manualClose: !0
                            })
                        }), [M]),
                        Ee = function() {
                            var e = (0, i.Z)((0, s.Z)().mark((function e() {
                                var t, i, a, o, c, u, d, f, g, p, h, x;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = ee.filter((function(e) {
                                                return e.status !== v.ZJ.UNAVAILABLE
                                            })).map((function(e) {
                                                return e.asset
                                            })), i = (0, j.Jg)(t.reduce((function(e, n) {
                                                return e.add(l.O$.from(n.priceInfo.ETHPrice))
                                            }), l.O$.from(0)).toString()), z && P(!1), !y && C(!0), N(v.s.FETCHING_ROUTE), e.prev = 5, e.next = 8, Y.fetchQuery(["assetsRoute", i, t, n], (function() {
                                                return (0, B.D8)({
                                                    toSell: [i],
                                                    toBuy: t,
                                                    senderAddress: null !== n && void 0 !== n ? n : ""
                                                })
                                            }));
                                        case 8:
                                            a = e.sent, o = (0, le.M)(t, a.route), c = o.filter((function(e) {
                                                return e.updatedPriceInfo
                                            })).sort(j.IX), u = o.filter((function(e) {
                                                return e.isUnavailable
                                            })), d = o.filter((function(e) {
                                                return !e.updatedPriceInfo && !e.isUnavailable
                                            })), f = d.length > 0, g = c.length > 0, p = u.length > 0, h = f || g || p, x = g || p, T([].concat((0, r.Z)(u.map((function(e) {
                                                return {
                                                    asset: e,
                                                    status: v.ZJ.UNAVAILABLE
                                                }
                                            }))), (0, r.Z)(c.map((function(e) {
                                                return {
                                                    asset: e,
                                                    status: v.ZJ.REVIEWING_PRICE_CHANGE
                                                }
                                            }))), (0, r.Z)(d.map((function(e) {
                                                return {
                                                    asset: e,
                                                    status: v.ZJ.REVIEWED
                                                }
                                            }))))), C(!1), h ? x ? N(g ? v.s.IN_REVIEW : v.s.CONFIRM_REVIEW) : (Se(a), N(v.s.CONFIRMING_IN_WALLET)) : N(v.s.ADDING_TO_BAG), e.next = 26;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(5), N(v.s.ADDING_TO_BAG);
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 23]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, I.useEffect)((function() {
                        G.pQ.subscribe((function(e) {
                            return $.current = e.state
                        }))
                    }), []), (0, I.useEffect)((function() {
                        y && !re && se(!0)
                    }), [y, re]), (0, I.useEffect)((function() {
                        $.current === v.c$.Confirming && N(v.s.PROCESSING_TRANSACTION), $.current !== v.c$.Denied && $.current !== v.c$.Invalid || ($.current === v.c$.Invalid ? N(v.s.WARNING) : N(v.s.CONFIRM_REVIEW), J(v.c$.New), C(!1), se(!1))
                    }), [$.current]), (0, I.useEffect)((function() {
                        O(je), _(Ie)
                    }), [je, Ie, O, _]);
                    var Ne = ee.length > 0,
                        ze = ee.length > 0,
                        Ae = p.length > 0,
                        Pe = Boolean(!q && !ze && E === v.s.ADDING_TO_BAG || q && !Ae),
                        ye = (0, I.useMemo)((function() {
                            return (0, o.Z)({
                                usd_value: Ie
                            }, (0, j.Hj)(ee.map((function(e) {
                                return e.asset
                            }))))
                        }), [ee, Ie]);
                    return D && H ? (0, A.jsxs)(oe.h, {
                        children: [(0, A.jsx)(x.sg, {
                            zIndex: W || re ? "modalOverTooltip" : "3",
                            className: "_1jcz50r1 rgw6ez458 rgw6ez3bk rgw6ez3ff rgw6ez152 rgw6ez1bq rgw6ez362 rgw6ez4lw rgw6ez78e rgw6ez4xq rgw6ez7hm rgw6ez4ak",
                            children: q && b === v.HA.LISTING ? (0, A.jsx)(ae, {}) : (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(Ue, {
                                    numberOfAssets: q ? p.length : ee.length,
                                    closeBag: ke,
                                    resetFlow: q ? g : R,
                                    isProfilePage: q
                                }), Pe && (0, A.jsx)(We, {}), (0, A.jsx)($e, {
                                    top: !0,
                                    show: ge && me > 0
                                }), (0, A.jsx)(x.sg, {
                                    ref: function(e) {
                                        if (null !== e) {
                                            var n = e.scrollHeight > e.clientHeight;
                                            n !== ge && pe(n)
                                        }
                                    },
                                    className: "_1jcz50r3 rgw6ez2ak rgw6ez2g2 rgw6ez1vq rgw6ez7la",
                                    onScroll: function(e) {
                                        var n = e.currentTarget.scrollTop,
                                            t = e.currentTarget.clientHeight,
                                            r = e.currentTarget.scrollHeight;
                                        we(n ? (n + t) / r * 100 : 0)
                                    },
                                    gap: "12",
                                    children: q ? (0, A.jsx)(Ve, {}) : (0, A.jsx)(Me, {})
                                }), Ne && !q && (0, A.jsx)(Z, {
                                    totalEthPrice: je,
                                    totalUsdPrice: Ie,
                                    bagStatus: E,
                                    fetchAssets: Ee,
                                    eventProperties: ye
                                }), Ae && q && (0, A.jsx)(h.n, {
                                    marginTop: "32",
                                    marginX: "28",
                                    paddingY: "10",
                                    className: "".concat(m.km, " ").concat(m.oU),
                                    backgroundColor: "accentAction",
                                    color: "white",
                                    textAlign: "center",
                                    onClick: function() {
                                        W && L(), S(v.HA.LISTING)
                                    },
                                    children: "Continue"
                                })]
                            })
                        }), U ? (0, A.jsx)(Je, {
                            onClick: L
                        }) : re && (0, A.jsx)(ce, {
                            onClick: function() {
                                return y ? void 0 : se(!1)
                            }
                        })]
                    }) : null
                }
        }
    }
]);
//# sourceMappingURL=338.37d85224.chunk.js.map