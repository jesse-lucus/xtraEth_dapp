"use strict";
(self.webpackChunk_uniswap_interface = self.webpackChunk_uniswap_interface || []).push([
    [445], {
        86761: function(e, t, r) {
            r.r(t), r.d(t, {
                Multicall: function() {
                    return F
                },
                providers: function() {
                    return G
                }
            });
            var n, a = r(6148),
                i = r(81020),
                o = r(18992),
                s = r(27166),
                u = r(50678),
                l = r(27853),
                c = r(84531),
                p = r(33032),
                d = r(56986),
                f = r(63235),
                y = r(45462),
                m = r(30417),
                h = {
                    erc1271: Object.freeze({
                        __proto__: null,
                        abi: [{
                            type: "function",
                            name: "isValidSignature",
                            constant: !0,
                            inputs: [{
                                type: "bytes32"
                            }, {
                                type: "bytes"
                            }],
                            outputs: [{
                                type: "bytes4"
                            }],
                            payable: !1,
                            stateMutability: "view"
                        }],
                        returns: {
                            isValidSignatureBytes32: "0x1626ba7e"
                        }
                    }),
                    factory: Object.freeze({
                        __proto__: null,
                        abi: [{
                            type: "function",
                            name: "deploy",
                            constant: !1,
                            inputs: [{
                                type: "address"
                            }, {
                                type: "bytes32"
                            }],
                            outputs: [],
                            payable: !0,
                            stateMutability: "payable"
                        }]
                    }),
                    mainModule: Object.freeze({
                        __proto__: null,
                        abi: [{
                            type: "function",
                            name: "nonce",
                            constant: !0,
                            inputs: [],
                            outputs: [{
                                type: "uint256"
                            }],
                            payable: !1,
                            stateMutability: "view"
                        }, {
                            type: "function",
                            name: "readNonce",
                            constant: !0,
                            inputs: [{
                                type: "uint256"
                            }],
                            outputs: [{
                                type: "uint256"
                            }],
                            payable: !1,
                            stateMutability: "view"
                        }, {
                            type: "function",
                            name: "updateImplementation",
                            constant: !1,
                            inputs: [{
                                type: "address"
                            }],
                            outputs: [],
                            payable: !1,
                            stateMutability: "nonpayable"
                        }, {
                            type: "function",
                            name: "selfExecute",
                            constant: !1,
                            inputs: [{
                                components: [{
                                    type: "bool",
                                    name: "delegateCall"
                                }, {
                                    type: "bool",
                                    name: "revertOnError"
                                }, {
                                    type: "uint256",
                                    name: "gasLimit"
                                }, {
                                    type: "address",
                                    name: "target"
                                }, {
                                    type: "uint256",
                                    name: "value"
                                }, {
                                    type: "bytes",
                                    name: "data"
                                }],
                                type: "tuple[]"
                            }],
                            outputs: [],
                            payable: !1,
                            stateMutability: "nonpayable"
                        }, {
                            type: "function",
                            name: "execute",
                            constant: !1,
                            inputs: [{
                                components: [{
                                    type: "bool",
                                    name: "delegateCall"
                                }, {
                                    type: "bool",
                                    name: "revertOnError"
                                }, {
                                    type: "uint256",
                                    name: "gasLimit"
                                }, {
                                    type: "address",
                                    name: "target"
                                }, {
                                    type: "uint256",
                                    name: "value"
                                }, {
                                    type: "bytes",
                                    name: "data"
                                }],
                                type: "tuple[]"
                            }, {
                                type: "uint256"
                            }, {
                                type: "bytes"
                            }],
                            outputs: [],
                            payable: !1,
                            stateMutability: "nonpayable"
                        }, {
                            type: "function",
                            name: "createContract",
                            inputs: [{
                                type: "bytes"
                            }],
                            payable: !0,
                            stateMutability: "payable"
                        }]
                    }),
                    mainModuleUpgradable: Object.freeze({
                        __proto__: null,
                        abi: [{
                            type: "function",
                            name: "updateImageHash",
                            constant: !0,
                            inputs: [{
                                type: "bytes32"
                            }],
                            outputs: [],
                            payable: !1,
                            stateMutability: "view"
                        }, {
                            type: "function",
                            name: "imageHash",
                            constant: !0,
                            inputs: [],
                            outputs: [{
                                type: "bytes32"
                            }],
                            payable: !1,
                            stateMutability: "view"
                        }]
                    }),
                    sequenceUtils: Object.freeze({
                        __proto__: null,
                        abi: [{
                            inputs: [{
                                internalType: "address",
                                name: "_factory",
                                type: "address"
                            }, {
                                internalType: "address",
                                name: "_mainModule",
                                type: "address"
                            }],
                            stateMutability: "nonpayable",
                            type: "constructor"
                        }, {
                            anonymous: !1,
                            inputs: [{
                                indexed: !0,
                                internalType: "address",
                                name: "_wallet",
                                type: "address"
                            }, {
                                indexed: !0,
                                internalType: "bytes32",
                                name: "_imageHash",
                                type: "bytes32"
                            }, {
                                indexed: !1,
                                internalType: "uint256",
                                name: "_threshold",
                                type: "uint256"
                            }, {
                                indexed: !1,
                                internalType: "bytes",
                                name: "_signers",
                                type: "bytes"
                            }],
                            name: "RequiredConfig",
                            type: "event"
                        }, {
                            anonymous: !1,
                            inputs: [{
                                indexed: !0,
                                internalType: "address",
                                name: "_wallet",
                                type: "address"
                            }, {
                                indexed: !0,
                                internalType: "address",
                                name: "_signer",
                                type: "address"
                            }],
                            name: "RequiredSigner",
                            type: "event"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_addr",
                                type: "address"
                            }],
                            name: "callBalanceOf",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callBlockNumber",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "uint256",
                                name: "_i",
                                type: "uint256"
                            }],
                            name: "callBlockhash",
                            outputs: [{
                                internalType: "bytes32",
                                name: "",
                                type: "bytes32"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callChainId",
                            outputs: [{
                                internalType: "uint256",
                                name: "id",
                                type: "uint256"
                            }],
                            stateMutability: "pure",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_addr",
                                type: "address"
                            }],
                            name: "callCode",
                            outputs: [{
                                internalType: "bytes",
                                name: "code",
                                type: "bytes"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_addr",
                                type: "address"
                            }],
                            name: "callCodeHash",
                            outputs: [{
                                internalType: "bytes32",
                                name: "codeHash",
                                type: "bytes32"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_addr",
                                type: "address"
                            }],
                            name: "callCodeSize",
                            outputs: [{
                                internalType: "uint256",
                                name: "size",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callCoinbase",
                            outputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callDifficulty",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callGasLeft",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callGasLimit",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callGasPrice",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callOrigin",
                            outputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [],
                            name: "callTimestamp",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            name: "knownImageHashes",
                            outputs: [{
                                internalType: "bytes32",
                                name: "",
                                type: "bytes32"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "bytes32",
                                name: "",
                                type: "bytes32"
                            }],
                            name: "lastImageHashUpdate",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            name: "lastSignerUpdate",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            name: "lastWalletUpdate",
                            outputs: [{
                                internalType: "uint256",
                                name: "",
                                type: "uint256"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                components: [{
                                    internalType: "bool",
                                    name: "delegateCall",
                                    type: "bool"
                                }, {
                                    internalType: "bool",
                                    name: "revertOnError",
                                    type: "bool"
                                }, {
                                    internalType: "uint256",
                                    name: "gasLimit",
                                    type: "uint256"
                                }, {
                                    internalType: "address",
                                    name: "target",
                                    type: "address"
                                }, {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                }, {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                }],
                                internalType: "struct IModuleCalls.Transaction[]",
                                name: "_txs",
                                type: "tuple[]"
                            }],
                            name: "multiCall",
                            outputs: [{
                                internalType: "bool[]",
                                name: "_successes",
                                type: "bool[]"
                            }, {
                                internalType: "bytes[]",
                                name: "_results",
                                type: "bytes[]"
                            }],
                            stateMutability: "payable",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_wallet",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "_threshold",
                                type: "uint256"
                            }, {
                                components: [{
                                    internalType: "uint256",
                                    name: "weight",
                                    type: "uint256"
                                }, {
                                    internalType: "address",
                                    name: "signer",
                                    type: "address"
                                }],
                                internalType: "struct RequireUtils.Member[]",
                                name: "_members",
                                type: "tuple[]"
                            }, {
                                internalType: "bool",
                                name: "_index",
                                type: "bool"
                            }],
                            name: "publishConfig",
                            outputs: [],
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_wallet",
                                type: "address"
                            }, {
                                internalType: "bytes32",
                                name: "_hash",
                                type: "bytes32"
                            }, {
                                internalType: "uint256",
                                name: "_sizeMembers",
                                type: "uint256"
                            }, {
                                internalType: "bytes",
                                name: "_signature",
                                type: "bytes"
                            }, {
                                internalType: "bool",
                                name: "_index",
                                type: "bool"
                            }],
                            name: "publishInitialSigners",
                            outputs: [],
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "address",
                                name: "_wallet",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "_nonce",
                                type: "uint256"
                            }],
                            name: "requireMinNonce",
                            outputs: [],
                            stateMutability: "view",
                            type: "function"
                        }, {
                            inputs: [{
                                internalType: "uint256",
                                name: "_expiration",
                                type: "uint256"
                            }],
                            name: "requireNonExpired",
                            outputs: [],
                            stateMutability: "view",
                            type: "function"
                        }]
                    }),
                    requireFreshSigner: Object.freeze({
                        __proto__: null,
                        abi: [{
                            inputs: [{
                                internalType: "address",
                                name: "",
                                type: "address"
                            }],
                            name: "requireFreshSigner",
                            outputs: [],
                            stateMutability: "nonpayable",
                            type: "function"
                        }]
                    })
                };
            r(87195), r(1839);

            function v() {
                return v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, v.apply(this, arguments)
            }! function(e) {
                e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.DISABLED = 5] = "DISABLED"
            }(n || (n = {}));
            var b = function() {
                function e(t) {
                    (0, l.Z)(this, e), this.config = t, this.logLevel = void 0, this.configure(t)
                }
                return (0, c.Z)(e, [{
                    key: "configure",
                    value: function(e) {
                        switch (this.config = v({}, this.config, e), this.config.logLevel) {
                            case "DEBUG":
                                this.logLevel = n.DEBUG;
                                break;
                            case "INFO":
                            default:
                                this.logLevel = n.INFO;
                                break;
                            case "WARN":
                                this.logLevel = n.WARN;
                                break;
                            case "ERROR":
                                this.logLevel = n.ERROR;
                                break;
                            case "DISABLED":
                                this.logLevel = n.DISABLED
                        }
                        void 0 === this.config.silence && (this.config.silence = !1)
                    }
                }, {
                    key: "debug",
                    value: function(e) {
                        if (!0 !== this.config.silence && this.logLevel === n.DEBUG) {
                            for (var t, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            (t = console).log.apply(t, [e].concat(a))
                        }
                    }
                }, {
                    key: "info",
                    value: function(e) {
                        if (!0 !== this.config.silence && this.logLevel <= n.INFO) {
                            for (var t, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            (t = console).log.apply(t, [e].concat(a))
                        }
                    }
                }, {
                    key: "warn",
                    value: function(e) {
                        if (!0 !== this.config.silence && this.logLevel <= n.WARN) {
                            for (var t, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            (t = console).warn.apply(t, [e].concat(a)), this.config.onwarn && this.config.onwarn(e, a)
                        }
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (!0 !== this.config.silence && this.logLevel <= n.ERROR) {
                            for (var t, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            (t = console).error.apply(t, [e].concat(a)), this.config.onerror && this.config.onerror(e, a)
                        }
                    }
                }]), e
            }();
            new b({
                logLevel: "INFO",
                silence: !0
            });

            function g(e, t) {
                return function() {
                    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    var i = Array.prototype.slice.call(n);
                    return new Promise(function() {
                        var r = (0, p.Z)((0, s.Z)().mark((function r(n, a) {
                            return (0, s.Z)().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, i.push((function(e, t) {
                                            return e ? a(e) : n(t)
                                        })), r.next = 4, e.apply(t, i);
                                    case 4:
                                        r.next = 9;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), a(r.t0);
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 6]
                            ])
                        })));
                        return function(e, t) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
            }
            var E = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
                return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
            };
            var w = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            };
            var A, I = r(36222),
                S = r(31303);

            function T() {
                return T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, T.apply(this, arguments)
            }
            var _, P = function(e) {
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!e) throw new Error("invalid network config: empty config");
                        var n = [];
                        if (Array.isArray(e) ? n.push.apply(n, (0, S.Z)(e)) : n.push(e), 0 === n.length) {
                            if (t) throw new Error("invalid network config: empty config");
                            return !1
                        }
                        var a = n.map((function(e) {
                                return e.chainId
                            })).sort(),
                            i = a.filter((function(e, t) {
                                return a.indexOf(e) !== t
                            }));
                        if (i.length > 0) {
                            if (t) throw new Error("invalid network config: duplicate chainIds ".concat(i));
                            return !1
                        }
                        n.forEach((function(e) {
                            return e.name = e.name.toLowerCase()
                        }));
                        var o = n.map((function(e) {
                                return e.name
                            })).sort(),
                            s = o.filter((function(e, t) {
                                return o.indexOf(e) !== t
                            }));
                        if (s.length > 0) {
                            if (t) throw new Error("invalid network config: duplicate network names ".concat(s));
                            return !1
                        }
                        for (var u = !1, l = !1, c = 0; c < n.length; c++) {
                            var p = n[c];
                            if ((!p.rpcUrl || "" === p.rpcUrl) && !p.provider) {
                                if (t) throw new Error("invalid network config for chainId ".concat(p.chainId, ": rpcUrl or provider must be provided"));
                                return !1
                            }
                            if (!r && !p.relayer) {
                                if (t) throw new Error("invalid network config for chainId ".concat(p.chainId, ": relayer must be provided"));
                                return !1
                            }
                            if (p.isDefaultChain) {
                                if (u) {
                                    if (t) throw new Error("invalid network config for chainId ".concat(p.chainId, ": DefaultChain is already set by another config"));
                                    return !1
                                }
                                u = !0
                            }
                            if (p.isAuthChain) {
                                if (l && t) throw new Error("invalid network config for chainId ".concat(p.chainId, ": AuthChain is already set by another config"));
                                l = !0
                            }
                        }
                        if (!u) {
                            if (t) throw new Error("invalid network config: DefaultChain must be set");
                            return !1
                        }
                        if (!l) {
                            if (t) throw new Error("invalid network config: AuthChain must be set");
                            return !1
                        }
                    }(e, !0, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), e
                },
                M = function(e, t, r) {
                    var n = [];
                    if (n = "function" === typeof e && r ? e(r) : e, t) {
                        n.forEach((function(e) {
                            return e.isDefaultChain = !1
                        }));
                        var a = n.filter((function(e) {
                            return e.chainId === t
                        }));
                        if (!a || 0 === a.length) throw new Error("defaultChainId ".concat(t, " cannot be found in network list"));
                        a[0].isDefaultChain = !0
                    }
                    return P(O(n))
                },
                O = function(e) {
                    if (!e) return [];
                    var t = e.sort((function(e, t) {
                            return e.chainId === t.chainId ? 0 : e.chainId < t.chainId ? -1 : 1
                        })),
                        r = t.findIndex((function(e) {
                            return e.isDefaultChain
                        }));
                    r > 0 && t.splice(0, 0, t.splice(r, 1)[0]);
                    var n = t.findIndex((function(e) {
                        return e.isAuthChain && !0 !== e.isDefaultChain
                    }));
                    return n > 0 && t.splice(1, 0, t.splice(n, 1)[0]), t
                };
            ! function(e) {
                e[e.MAINNET = 1] = "MAINNET", e[e.ROPSTEN = 3] = "ROPSTEN", e[e.RINKEBY = 4] = "RINKEBY", e[e.GOERLI = 5] = "GOERLI", e[e.KOVAN = 42] = "KOVAN", e[e.POLYGON = 137] = "POLYGON", e[e.POLYGON_MUMBAI = 80001] = "POLYGON_MUMBAI", e[e.BSC = 56] = "BSC", e[e.BSC_TESTNET = 97] = "BSC_TESTNET", e[e.OPTIMISM = 10] = "OPTIMISM", e[e.OPTIMISM_TESTNET = 69] = "OPTIMISM_TESTNET", e[e.ARBITRUM = 42161] = "ARBITRUM", e[e.ARBITRUM_TESTNET = 421611] = "ARBITRUM_TESTNET", e[e.AVALANCHE = 43114] = "AVALANCHE", e[e.AVALANCHE_TESTNET = 43113] = "AVALANCHE_TESTNET", e[e.FANTOM = 250] = "FANTOM", e[e.FANTOM_TESTNET = 4002] = "FANTOM_TESTNET", e[e.GNOSIS = 100] = "GNOSIS", e[e.AURORA = 1313161554] = "AURORA", e[e.AURORA_TESTNET = 1313161556] = "AURORA_TESTNET"
            }(_ || (_ = {}));
            var k = (A = {}, (0, I.Z)(A, _.MAINNET, {
                    chainId: _.MAINNET,
                    name: "mainnet",
                    title: "Ethereum",
                    blockExplorer: {
                        name: "Etherscan",
                        rootUrl: "https://etherscan.io/"
                    }
                }), (0, I.Z)(A, _.ROPSTEN, {
                    chainId: _.ROPSTEN,
                    name: "ropsten",
                    title: "Ropsten",
                    testnet: !0,
                    blockExplorer: {
                        name: "Etherscan (Ropsten)",
                        rootUrl: "https://ropsten.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.RINKEBY, {
                    chainId: _.RINKEBY,
                    name: "rinkeby",
                    title: "Rinkeby",
                    testnet: !0,
                    blockExplorer: {
                        name: "Etherscan (Rinkeby)",
                        rootUrl: "https://rinkeby.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.GOERLI, {
                    chainId: _.GOERLI,
                    name: "goerli",
                    title: "Goerli",
                    testnet: !0,
                    blockExplorer: {
                        name: "Etherscan (Goerli)",
                        rootUrl: "https://goerli.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.KOVAN, {
                    chainId: _.KOVAN,
                    name: "kovan",
                    title: "Kovan",
                    testnet: !0,
                    blockExplorer: {
                        name: "Etherscan (Kovan)",
                        rootUrl: "https://kovan.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.POLYGON, {
                    chainId: _.POLYGON,
                    name: "polygon",
                    title: "Polygon",
                    blockExplorer: {
                        name: "Polygonscan",
                        rootUrl: "https://polygonscan.com/"
                    }
                }), (0, I.Z)(A, _.POLYGON_MUMBAI, {
                    chainId: _.POLYGON_MUMBAI,
                    name: "mumbai",
                    title: "Polygon Mumbai",
                    testnet: !0,
                    blockExplorer: {
                        name: "Polygonscan (Mumbai)",
                        rootUrl: "https://mumbai.polygonscan.com/"
                    }
                }), (0, I.Z)(A, _.BSC, {
                    chainId: _.BSC,
                    name: "bsc",
                    title: "BNB Smart Chain",
                    blockExplorer: {
                        name: "BSCScan",
                        rootUrl: "https://bscscan.com/"
                    }
                }), (0, I.Z)(A, _.BSC_TESTNET, {
                    chainId: _.BSC_TESTNET,
                    name: "bsc-testnet",
                    title: "BNB Smart Chain Testnet",
                    testnet: !0,
                    blockExplorer: {
                        name: "BSCScan (Testnet)",
                        rootUrl: "https://testnet.bscscan.com/"
                    }
                }), (0, I.Z)(A, _.OPTIMISM, {
                    chainId: _.OPTIMISM,
                    name: "optimism",
                    title: "Optimism",
                    blockExplorer: {
                        name: "Etherscan (Optimism)",
                        rootUrl: "https://optimistic.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.OPTIMISM_TESTNET, {
                    chainId: _.OPTIMISM_TESTNET,
                    name: "optimism-testnet",
                    title: "Optimistic Kovan",
                    testnet: !0,
                    blockExplorer: {
                        name: "Etherscan (Optimism Testnet)",
                        rootUrl: "https://kovan-optimistic.etherscan.io/"
                    }
                }), (0, I.Z)(A, _.ARBITRUM, {
                    chainId: _.ARBITRUM,
                    name: "arbitrum",
                    title: "Arbitrum",
                    blockExplorer: {
                        name: "Arbiscan",
                        rootUrl: "https://arbiscan.io/"
                    }
                }), (0, I.Z)(A, _.ARBITRUM_TESTNET, {
                    chainId: _.ARBITRUM_TESTNET,
                    name: "arbitrum-testnet",
                    title: "Arbitrum Testnet",
                    testnet: !0,
                    blockExplorer: {
                        name: "Arbiscan (Testnet)",
                        rootUrl: "https://testnet.arbiscan.io/"
                    }
                }), (0, I.Z)(A, _.AVALANCHE, {
                    chainId: _.AVALANCHE,
                    name: "avalanche",
                    title: "Avalanche",
                    blockExplorer: {
                        name: "Snowtrace",
                        rootUrl: "https://snowtrace.io/"
                    }
                }), (0, I.Z)(A, _.AVALANCHE_TESTNET, {
                    chainId: _.AVALANCHE_TESTNET,
                    name: "avalanche-testnet",
                    title: "Avalanche Testnet",
                    testnet: !0,
                    blockExplorer: {
                        name: "Snowtrace (Testnet)",
                        rootUrl: "https://testnet.snowtrace.io/"
                    }
                }), (0, I.Z)(A, _.FANTOM, {
                    chainId: _.FANTOM,
                    name: "fantom",
                    title: "Fantom",
                    blockExplorer: {
                        name: "FTMScan",
                        rootUrl: "https://ftmscan.com/"
                    }
                }), (0, I.Z)(A, _.FANTOM_TESTNET, {
                    chainId: _.FANTOM_TESTNET,
                    name: "fantom-testnet",
                    title: "Fantom Testnet",
                    testnet: !0,
                    blockExplorer: {
                        name: "FTMScan (Testnet)",
                        rootUrl: "https://testnet.ftmscan.com/"
                    }
                }), (0, I.Z)(A, _.GNOSIS, {
                    chainId: _.GNOSIS,
                    name: "gnosis",
                    title: "Gnosis Chain",
                    blockExplorer: {
                        name: "Gnosis Chain Explorer",
                        rootUrl: "https://blockscout.com/xdai/mainnet/"
                    }
                }), (0, I.Z)(A, _.AURORA, {
                    chainId: _.AURORA,
                    name: "aurora",
                    title: "Aurora",
                    blockExplorer: {
                        name: "Aurora Explorer",
                        rootUrl: "https://aurorascan.dev/"
                    }
                }), (0, I.Z)(A, _.AURORA_TESTNET, {
                    chainId: _.AURORA_TESTNET,
                    name: "aurora-testnet",
                    title: "Aurora Testnet",
                    blockExplorer: {
                        name: "Aurora Explorer (Testnet)",
                        rootUrl: "https://testnet.aurorascan.dev/"
                    }
                }), A),
                x = (M((function(e) {
                    return [T({}, k[_.MAINNET], {
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        rpcUrl: w("".concat(e.baseRpcUrl, "/mainnet")),
                        relayer: {
                            url: w("".concat(e.baseRelayerUrl, "/mainnet"))
                        },
                        isDefaultChain: !0
                    }), T({}, k[_.POLYGON], {
                        rpcUrl: "https://rpc-mainnet.matic.network",
                        relayer: {
                            url: w("".concat(e.baseRelayerUrl, "/matic"))
                        },
                        isAuthChain: !0
                    })]
                }), 1, {
                    baseRpcUrl: "https://nodes.sequence.app",
                    baseRelayerUrl: "https://relayers.sequence.app"
                }), M((function(e) {
                    return [T({}, k[_.RINKEBY], {
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        rpcUrl: w("".concat(e.baseRpcUrl, "/rinkeby")),
                        relayer: {
                            url: w("".concat(e.baseRelayerUrl, "/rinkeby"))
                        },
                        isDefaultChain: !0
                    }), T({}, k[_.GOERLI], {
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        rpcUrl: w("".concat(e.baseRpcUrl, "/goerli")),
                        relayer: {
                            url: w("".concat(e.baseRelayerUrl, "/goerli"))
                        },
                        isAuthChain: !0
                    })]
                }), void 0, {
                    baseRpcUrl: "https://nodes.sequence.app",
                    baseRelayerUrl: "https://relayers.sequence.app"
                }), "2.0");
            var C;

            function R() {
                return R = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, R.apply(this, arguments)
            }

            function B(e, t) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = (0, p.Z)((0, s.Z)().mark((function e(t, r) {
                    var n;
                    return (0, s.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, t;
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.prev = 6, e.t0 = e.catch(0), n = r instanceof Function ? r(e.t0) : r, e.abrupt("return", n);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 6]
                    ])
                })))).apply(this, arguments)
            }

            function U(e, t) {
                return e.reduce((function(e, r, n) {
                    return t(r, n) ? e[0].push(r) : e[1].push(r), e
                }), [
                    [],
                    []
                ])
            }

            function j(e) {
                if (void 0 === e) return "latest";
                switch (e) {
                    case "earliest":
                    case "latest":
                    case "pending":
                        return e
                }
                return d.O$.from(e)
            }! function(e) {
                e.ethCall = "eth_call", e.ethGetBalance = "eth_getBalance", e.ethGetCode = "eth_getCode"
            }(C || (C = {}));
            var Z = {
                    batchSize: 50,
                    timeWindow: 50,
                    contract: "0xd130B43062D875a4B7aF3f8fc036Bc6e9D3E1B3E",
                    verbose: !1
                },
                F = function() {
                    function e(t) {
                        var r = this;
                        (0, l.Z)(this, e);
                        var n = this;
                        if (this.batchableJsonRpcMethods = [C.ethCall, C.ethGetCode, C.ethGetBalance], this.multicallInterface = new f.vU(h.sequenceUtils.abi), this.options = void 0, this.timeout = void 0, this.queue = [], this.scheduleExecution = function() {
                                r.queue.length > 0 && (r.timeout && clearTimeout(r.timeout), r.timeout = setTimeout(r.run, r.options.timeWindow))
                            }, this.handle = function(e, t, n) {
                                return r.batchableJsonRpcMethods.find((function(e) {
                                    return e === t.method
                                })) ? (r.queue.push({
                                    request: t,
                                    callback: n,
                                    next: e
                                }), r.options.verbose && console.log("Scheduling call", t.method), void r.scheduleExecution()) : (r.options.verbose && console.log("Forwarded call", t.method), e(t, n))
                            }, this.run = (0, p.Z)((0, s.Z)().mark((function e() {
                                var t, r, a, i, o, l, c, p, f, m, h, v, b, w;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n.options.verbose && console.log("Processing multicall"), 0 !== (t = Math.min(n.options.batchSize, n.queue.length))) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (1 !== t) {
                                                e.next = 9;
                                                break
                                            }
                                            return n.forward(n.queue[0]), n.queue = [], n.options.verbose && console.log("Skip multicall, single item"), e.abrupt("return");
                                        case 9:
                                            if (n.options.verbose && console.log("Resolving", t), r = n.queue.slice(0, t), n.queue = t === n.queue.length ? [] : n.queue.slice(t), n.options.verbose && console.log("Updated queue", n.queue.length), 0 !== n.queue.length && n.scheduleExecution(), a = r[0].next, o = U(r, (function(e) {
                                                    try {
                                                        if (e.next !== a) return !1;
                                                        switch (e.request.method) {
                                                            case C.ethCall:
                                                                if (e.request.params[0].from || e.request.params[0].gasPrice || e.request.params[0].value) return !1;
                                                            case C.ethGetBalance:
                                                            case C.ethGetCode:
                                                                var t = j(e.request.params[1]);
                                                                if (void 0 === i && (i = t), (r = t) !== (n = i) && !(d.O$.isBigNumber(r) ? d.O$.isBigNumber(n) && r.eq(n) : !d.O$.isBigNumber(n) && r === n)) return !1
                                                        }
                                                        return !0
                                                    } catch (o) {
                                                        return !1
                                                    }
                                                    var r, n
                                                })), l = (0, u.Z)(o, 2), r = l[0], 0 === (c = l[1]).length) {
                                                e.next = 21;
                                                break
                                            }
                                            if (n.options.verbose && console.log("Forwarding incompatible calls", c.length), n.forward(c), 0 !== r.length) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 21:
                                            if (p = r.map((function(e) {
                                                    try {
                                                        switch (e.request.method) {
                                                            case C.ethCall:
                                                                return {
                                                                    delegateCall: !1,
                                                                    revertOnError: !1,
                                                                    target: e.request.params[0].to,
                                                                    data: e.request.params[0].data,
                                                                    gasLimit: e.request.params[0].gas ? e.request.params[0].gas : 0,
                                                                    value: 0
                                                                };
                                                            case C.ethGetCode:
                                                                return {
                                                                    delegateCall: !1,
                                                                    revertOnError: !1,
                                                                    target: n.options.contract,
                                                                    gasLimit: 0,
                                                                    value: 0,
                                                                    data: n.multicallInterface.encodeFunctionData(n.multicallInterface.getFunction("callCode"), [e.request.params[0]])
                                                                };
                                                            case C.ethGetBalance:
                                                                return {
                                                                    delegateCall: !1,
                                                                    revertOnError: !1,
                                                                    target: n.options.contract,
                                                                    gasLimit: 0,
                                                                    value: 0,
                                                                    data: n.multicallInterface.encodeFunctionData(n.multicallInterface.getFunction("callBalanceOf"), [e.request.params[0]])
                                                                };
                                                            default:
                                                                return null
                                                        }
                                                    } catch (t) {
                                                        return null
                                                    }
                                                })), f = U(r, (function(e, t) {
                                                    return void 0 !== p[t]
                                                })), m = (0, u.Z)(f, 2), r = m[0], c = m[1], p = p.filter((function(e) {
                                                    return e
                                                })), 0 === c.length) {
                                                e.next = 29;
                                                break
                                            }
                                            if (n.options.verbose && console.log("Forwarding calls on error", c.length), n.forward(c), 0 !== r.length) {
                                                e.next = 29;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 29:
                                            e.prev = 29, h = n.multicallInterface.encodeFunctionData(n.multicallInterface.getFunction("multiCall"), [p]), e.next = 37;
                                            break;
                                        case 33:
                                            return e.prev = 33, e.t0 = e.catch(29), n.forward(r), e.abrupt("return");
                                        case 37:
                                            return v = E(), e.next = 40, B(g(a)({
                                                id: v,
                                                jsonrpc: x,
                                                method: C.ethCall,
                                                params: [{
                                                    to: n.options.contract,
                                                    value: 0,
                                                    data: h
                                                }, d.O$.isBigNumber(i) ? i.toNumber() : i]
                                            }), (function(e) {
                                                return {
                                                    jsonrpc: x,
                                                    id: v,
                                                    result: void 0,
                                                    error: e
                                                }
                                            }));
                                        case 40:
                                            if (!(b = e.sent).error) {
                                                e.next = 43;
                                                break
                                            }
                                            return e.abrupt("return", n.forward(r));
                                        case 43:
                                            e.prev = 43, w = n.multicallInterface.decodeFunctionResult(n.multicallInterface.getFunction("multiCall"), b.result), e.next = 51;
                                            break;
                                        case 47:
                                            return e.prev = 47, e.t1 = e.catch(43), n.forward(r), e.abrupt("return");
                                        case 51:
                                            n.options.verbose && console.log("Got response for", r.length), r.forEach((function(e, t) {
                                                if (w[0][t]) switch (e.request.method) {
                                                    case C.ethCall:
                                                        e.callback(void 0, {
                                                            jsonrpc: e.request.jsonrpc,
                                                            id: e.request.id,
                                                            result: w[1][t]
                                                        });
                                                        break;
                                                    case C.ethGetCode:
                                                        e.callback(void 0, {
                                                            jsonrpc: e.request.jsonrpc,
                                                            id: e.request.id,
                                                            result: y.$.decode(["bytes"], w[1][t])[0]
                                                        });
                                                        break;
                                                    case C.ethGetBalance:
                                                        e.callback(void 0, {
                                                            jsonrpc: e.request.jsonrpc,
                                                            id: e.request.id,
                                                            result: y.$.decode(["uint256"], w[1][t])[0]
                                                        })
                                                } else n.forward(e)
                                            }));
                                        case 53:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [29, 33],
                                    [43, 47]
                                ])
                            }))), this.options = t ? R({}, e.DefaultOptions, t) : e.DefaultOptions, this.options.batchSize <= 0) throw new Error("Invalid batch size of ".concat(this.options.batchSize))
                    }
                    return (0, c.Z)(e, [{
                        key: "forward",
                        value: function(e) {
                            Array.isArray(e) ? e.forEach((function(e) {
                                return e.next(e.request, e.callback)
                            })) : e.next(e.request, e.callback)
                        }
                    }], [{
                        key: "isMulticall",
                        value: function(t) {
                            return t && void 0 !== t.handle && void 0 !== t.conf && e.isMulticallOptions(t.options)
                        }
                    }, {
                        key: "isMulticallOptions",
                        value: function(e) {
                            return void 0 !== e && void 0 !== e.batchSize && void 0 !== e.timeWindow && void 0 !== e.contract
                        }
                    }]), e
                }();
            F.DefaultOptions = R({}, Z);
            var z = ["getNetwork", "getBlockNumber", "getGasPrice", "getTransactionCount", "getStorageAt", "sendTransaction", "estimateGas", "getBlock", "getTransaction", "getTransactionReceipt", "getLogs", "emit", "litenerCount", "addListener", "removeListener", "waitForTransaction", "detectNetwork", "getBlockWithTransactions"],
                L = function(e) {
                    (0, i.Z)(r, e);
                    var t = (0, o.Z)(r);

                    function r(e, n) {
                        var i, o;
                        return (0, l.Z)(this, r), i = t.call(this, e.getNetwork()), o = (0, a.Z)(i), i.provider = e, i.multicall = void 0, i.listenerCount = i.provider.listenerCount, i.getResolver = function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t) {
                                var r, n;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(r = o.provider).getResolver) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.t0 = r, e.next = 5, t;
                                        case 5:
                                            return e.t1 = e.sent, e.next = 8, e.t0.getResolver.call(e.t0, e.t1);
                                        case 8:
                                            if (n = e.sent) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return", null);
                                        case 11:
                                            return e.abrupt("return", new m.Resolver(o, n.address, n.name));
                                        case 12:
                                            return e.t2 = r, e.next = 15, t;
                                        case 15:
                                            return e.t3 = e.sent, e.abrupt("return", e.t2.getResolver.call(e.t2, e.t3));
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), i.next = function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t, r) {
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, e.t0 = t.method, e.next = e.t0 === C.ethCall ? 4 : e.t0 === C.ethGetCode ? 12 : e.t0 === C.ethGetBalance ? 20 : 28;
                                            break;
                                        case 4:
                                            return e.t1 = o, e.t2 = t, e.t3 = r, e.next = 9, o.provider.call(t.params[0], t.params[1]);
                                        case 9:
                                            return e.t4 = e.sent, e.t1.callback.call(e.t1, e.t2, e.t3, e.t4), e.abrupt("break", 28);
                                        case 12:
                                            return e.t5 = o, e.t6 = t, e.t7 = r, e.next = 17, o.provider.getCode(t.params[0], t.params[1]);
                                        case 17:
                                            return e.t8 = e.sent, e.t5.callback.call(e.t5, e.t6, e.t7, e.t8), e.abrupt("break", 28);
                                        case 20:
                                            return e.t9 = o, e.t10 = t, e.t11 = r, e.next = 25, o.provider.getBalance(t.params[0], t.params[1]);
                                        case 25:
                                            return e.t12 = e.sent, e.t9.callback.call(e.t9, e.t10, e.t11, e.t12), e.abrupt("break", 28);
                                        case 28:
                                            e.next = 33;
                                            break;
                                        case 30:
                                            e.prev = 30, e.t13 = e.catch(0), o.callback(t, r, void 0, e.t13);
                                        case 33:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 30]
                                ])
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), i.multicall = F.isMulticall(n) ? n : new F(n), z.forEach((function(t) {
                            void 0 !== e[t] && (i[t] = function() {
                                return e[t].apply(e, arguments)
                            })
                        })), i
                    }
                    return (0, c.Z)(r, [{
                        key: "callback",
                        value: function(e, t, r, n) {
                            t(n, {
                                jsonrpc: x,
                                id: e.id,
                                result: r,
                                error: n
                            })
                        }
                    }, {
                        key: "call",
                        value: function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t, r) {
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.rpcCall(C.ethCall, t, r));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getCode",
                        value: function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t, r) {
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.rpcCall(C.ethGetCode, t, r));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBalance",
                        value: function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t, r) {
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.rpcCall(C.ethGetBalance, t, r));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "rpcCall",
                        value: function() {
                            var e = (0, p.Z)((0, s.Z)().mark((function e(t) {
                                var r, n, a, i, o, u = arguments;
                                return (0, s.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            for (r = E(), n = u.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = u[i];
                                            return e.next = 4, g(this.multicall.handle)(this.next, {
                                                jsonrpc: x,
                                                id: r,
                                                method: t,
                                                params: a
                                            });
                                        case 4:
                                            return o = e.sent, e.abrupt("return", o.result);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), r
                }(m.BaseProvider),
                q = function() {
                    function e(t, r) {
                        var n = this;
                        if ((0, l.Z)(this, e), this.provider = t, this.multicall = void 0, this.multicall = F.isMulticall(r) ? r : new F(r), t.send) {
                            var a = function() {
                                var e = (0, p.Z)((0, s.Z)().mark((function e(r, n) {
                                    return (0, s.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                t.send(r, n);
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, r) {
                                    return e.apply(this, arguments)
                                }
                            }();
                            this.send = function(e, t) {
                                n.multicall.handle(a, e, t)
                            }
                        }
                        if (t.sendAsync) {
                            var i = function() {
                                var e = (0, p.Z)((0, s.Z)().mark((function e(r, n) {
                                    return (0, s.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                t.sendAsync(r, n);
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, r) {
                                    return e.apply(this, arguments)
                                }
                            }();
                            this.sendAsync = function(e, t) {
                                n.multicall.handle(i, e, t)
                            }
                        }
                    }
                    return (0, c.Z)(e, [{
                        key: "isMetaMask",
                        get: function() {
                            return this.provider.isMetaMask
                        }
                    }, {
                        key: "isStatus",
                        get: function() {
                            return this.provider.isStatus
                        }
                    }]), e
                }(),
                G = Object.freeze({
                    __proto__: null,
                    ProxyMethods: z,
                    MulticallProvider: L,
                    MulticallExternalProvider: q,
                    multicallMiddleware: function(e) {
                        return function(t) {
                            var r = F.isMulticall(e) ? e : new F(e);
                            return function(e, n) {
                                return r.handle(t, e, n)
                            }
                        }
                    }
                })
        },
        90471: function(e) {
            ! function(t) {
                function r(e) {
                    return parseInt(e) === e
                }

                function n(e) {
                    if (!r(e.length)) return !1;
                    for (var t = 0; t < e.length; t++)
                        if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
                    return !0
                }

                function a(e, t) {
                    if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
                    if (Array.isArray(e)) {
                        if (!n(e)) throw new Error("Array contains invalid value: " + e);
                        return new Uint8Array(e)
                    }
                    if (r(e.length) && n(e)) return new Uint8Array(e);
                    throw new Error("unsupported array-like object")
                }

                function i(e) {
                    return new Uint8Array(e)
                }

                function o(e, t, r, n, a) {
                    null == n && null == a || (e = e.slice ? e.slice(n, a) : Array.prototype.slice.call(e, n, a)), t.set(e, r)
                }
                var s = {
                        toBytes: function(e) {
                            var t = [],
                                r = 0;
                            for (e = encodeURI(e); r < e.length;) {
                                var n = e.charCodeAt(r++);
                                37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
                            }
                            return a(t)
                        },
                        fromBytes: function(e) {
                            for (var t = [], r = 0; r < e.length;) {
                                var n = e[r];
                                n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                            }
                            return t.join("")
                        }
                    },
                    u = function() {
                        var e = "0123456789abcdef";
                        return {
                            toBytes: function(e) {
                                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                                return t
                            },
                            fromBytes: function(t) {
                                for (var r = [], n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    r.push(e[(240 & a) >> 4] + e[15 & a])
                                }
                                return r.join("")
                            }
                        }
                    }(),
                    l = {
                        16: 10,
                        24: 12,
                        32: 14
                    },
                    c = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
                    p = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                    d = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                    f = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
                    y = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
                    m = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
                    h = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
                    v = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
                    b = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
                    g = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
                    E = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
                    w = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
                    A = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
                    I = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
                    S = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

                function T(e) {
                    for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
                    return t
                }
                var _ = function e(t) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    Object.defineProperty(this, "key", {
                        value: a(t, !0)
                    }), this._prepare()
                };
                _.prototype._prepare = function() {
                    var e = l[this.key.length];
                    if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                    this._Ke = [], this._Kd = [];
                    for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
                    var r, n = 4 * (e + 1),
                        a = this.key.length / 4,
                        i = T(this.key);
                    for (t = 0; t < a; t++) r = t >> 2, this._Ke[r][t % 4] = i[t], this._Kd[e - r][t % 4] = i[t];
                    for (var o, s = 0, u = a; u < n;) {
                        if (o = i[a - 1], i[0] ^= p[o >> 16 & 255] << 24 ^ p[o >> 8 & 255] << 16 ^ p[255 & o] << 8 ^ p[o >> 24 & 255] ^ c[s] << 24, s += 1, 8 != a)
                            for (t = 1; t < a; t++) i[t] ^= i[t - 1];
                        else {
                            for (t = 1; t < a / 2; t++) i[t] ^= i[t - 1];
                            o = i[a / 2 - 1], i[a / 2] ^= p[255 & o] ^ p[o >> 8 & 255] << 8 ^ p[o >> 16 & 255] << 16 ^ p[o >> 24 & 255] << 24;
                            for (t = a / 2 + 1; t < a; t++) i[t] ^= i[t - 1]
                        }
                        for (t = 0; t < a && u < n;) d = u >> 2, f = u % 4, this._Ke[d][f] = i[t], this._Kd[e - d][f] = i[t++], u++
                    }
                    for (var d = 1; d < e; d++)
                        for (var f = 0; f < 4; f++) o = this._Kd[d][f], this._Kd[d][f] = w[o >> 24 & 255] ^ A[o >> 16 & 255] ^ I[o >> 8 & 255] ^ S[255 & o]
                }, _.prototype.encrypt = function(e) {
                    if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
                    for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = T(e), a = 0; a < 4; a++) n[a] ^= this._Ke[0][a];
                    for (var o = 1; o < t; o++) {
                        for (a = 0; a < 4; a++) r[a] = f[n[a] >> 24 & 255] ^ y[n[(a + 1) % 4] >> 16 & 255] ^ m[n[(a + 2) % 4] >> 8 & 255] ^ h[255 & n[(a + 3) % 4]] ^ this._Ke[o][a];
                        n = r.slice()
                    }
                    var s, u = i(16);
                    for (a = 0; a < 4; a++) s = this._Ke[t][a], u[4 * a] = 255 & (p[n[a] >> 24 & 255] ^ s >> 24), u[4 * a + 1] = 255 & (p[n[(a + 1) % 4] >> 16 & 255] ^ s >> 16), u[4 * a + 2] = 255 & (p[n[(a + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * a + 3] = 255 & (p[255 & n[(a + 3) % 4]] ^ s);
                    return u
                }, _.prototype.decrypt = function(e) {
                    if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
                    for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = T(e), a = 0; a < 4; a++) n[a] ^= this._Kd[0][a];
                    for (var o = 1; o < t; o++) {
                        for (a = 0; a < 4; a++) r[a] = v[n[a] >> 24 & 255] ^ b[n[(a + 3) % 4] >> 16 & 255] ^ g[n[(a + 2) % 4] >> 8 & 255] ^ E[255 & n[(a + 1) % 4]] ^ this._Kd[o][a];
                        n = r.slice()
                    }
                    var s, u = i(16);
                    for (a = 0; a < 4; a++) s = this._Kd[t][a], u[4 * a] = 255 & (d[n[a] >> 24 & 255] ^ s >> 24), u[4 * a + 1] = 255 & (d[n[(a + 3) % 4] >> 16 & 255] ^ s >> 16), u[4 * a + 2] = 255 & (d[n[(a + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * a + 3] = 255 & (d[255 & n[(a + 1) % 4]] ^ s);
                    return u
                };
                var P = function e(t) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new _(t)
                };
                P.prototype.encrypt = function(e) {
                    if ((e = a(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                    for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) o(e, r, 0, n, n + 16), o(r = this._aes.encrypt(r), t, n);
                    return t
                }, P.prototype.decrypt = function(e) {
                    if ((e = a(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                    for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) o(e, r, 0, n, n + 16), o(r = this._aes.decrypt(r), t, n);
                    return t
                };
                var M = function e(t, r) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Cipher Block Chaining", this.name = "cbc", r) {
                        if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                    } else r = i(16);
                    this._lastCipherblock = a(r, !0), this._aes = new _(t)
                };
                M.prototype.encrypt = function(e) {
                    if ((e = a(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                    for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
                        o(e, r, 0, n, n + 16);
                        for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
                        this._lastCipherblock = this._aes.encrypt(r), o(this._lastCipherblock, t, n)
                    }
                    return t
                }, M.prototype.decrypt = function(e) {
                    if ((e = a(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                    for (var t = i(e.length), r = i(16), n = 0; n < e.length; n += 16) {
                        o(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
                        for (var s = 0; s < 16; s++) t[n + s] = r[s] ^ this._lastCipherblock[s];
                        o(e, this._lastCipherblock, 0, n, n + 16)
                    }
                    return t
                };
                var O = function e(t, r, n) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Cipher Feedback", this.name = "cfb", r) {
                        if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 size)")
                    } else r = i(16);
                    n || (n = 1), this.segmentSize = n, this._shiftRegister = a(r, !0), this._aes = new _(t)
                };
                O.prototype.encrypt = function(e) {
                    if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
                    for (var t, r = a(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                        t = this._aes.encrypt(this._shiftRegister);
                        for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
                        o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                    }
                    return r
                }, O.prototype.decrypt = function(e) {
                    if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                    for (var t, r = a(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                        t = this._aes.encrypt(this._shiftRegister);
                        for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
                        o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                    }
                    return r
                };
                var k = function e(t, r) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    if (this.description = "Output Feedback", this.name = "ofb", r) {
                        if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                    } else r = i(16);
                    this._lastPrecipher = a(r, !0), this._lastPrecipherIndex = 16, this._aes = new _(t)
                };
                k.prototype.encrypt = function(e) {
                    for (var t = a(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
                    return t
                }, k.prototype.decrypt = k.prototype.encrypt;
                var x = function e(t) {
                    if (!(this instanceof e)) throw Error("Counter must be instanitated with `new`");
                    0 === t || t || (t = 1), "number" === typeof t ? (this._counter = i(16), this.setValue(t)) : this.setBytes(t)
                };
                x.prototype.setValue = function(e) {
                    if ("number" !== typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
                    for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e >>= 8
                }, x.prototype.setBytes = function(e) {
                    if (16 != (e = a(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
                    this._counter = e
                }, x.prototype.increment = function() {
                    for (var e = 15; e >= 0; e--) {
                        if (255 !== this._counter[e]) {
                            this._counter[e]++;
                            break
                        }
                        this._counter[e] = 0
                    }
                };
                var C = function e(t, r) {
                    if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                    this.description = "Counter", this.name = "ctr", r instanceof x || (r = new x(r)), this._counter = r, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new _(t)
                };
                C.prototype.encrypt = function(e) {
                    for (var t = a(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
                    return t
                }, C.prototype.decrypt = C.prototype.encrypt;
                var R = {
                    AES: _,
                    Counter: x,
                    ModeOfOperation: {
                        ecb: P,
                        cbc: M,
                        cfb: O,
                        ofb: k,
                        ctr: C
                    },
                    utils: {
                        hex: u,
                        utf8: s
                    },
                    padding: {
                        pkcs7: {
                            pad: function(e) {
                                var t = 16 - (e = a(e, !0)).length % 16,
                                    r = i(e.length + t);
                                o(e, r);
                                for (var n = e.length; n < r.length; n++) r[n] = t;
                                return r
                            },
                            strip: function(e) {
                                if ((e = a(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                                var t = e[e.length - 1];
                                if (t > 16) throw new Error("PKCS#7 padding byte out of range");
                                for (var r = e.length - t, n = 0; n < t; n++)
                                    if (e[r + n] !== t) throw new Error("PKCS#7 invalid padding byte");
                                var s = i(r);
                                return o(e, s, 0, 0, r), s
                            }
                        }
                    },
                    _arrayTest: {
                        coerceArray: a,
                        createArray: i,
                        copyArray: o
                    }
                };
                e.exports = R
            }()
        },
        9283: function(e, t, r) {
            var n = r(26899).default,
                a = r(72071).default,
                i = r(86976).default,
                o = r(21233).default,
                s = r(64302).default,
                u = r(40801).default,
                l = r(2188).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseError = void 0;
            var c = r(69589),
                p = function(e) {
                    s(r, e);
                    var t = u(r);

                    function r(e) {
                        var a, s, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, r);
                        var l = u.cause instanceof r ? u.cause.details : null !== (a = u.cause) && void 0 !== a && a.message ? u.cause.message : u.details,
                            p = u.cause instanceof r && u.cause.docsPath || u.docsPath,
                            d = [e || "An error occurred.", ""].concat(n(u.metaMessages ? [].concat(n(u.metaMessages), [""]) : []), n(p ? ["Docs: https://abitype.dev".concat(p)] : []), n(l ? ["Details: ".concat(l)] : []), ["Version: abitype@".concat(c.version)]).join("\n");
                        return s = t.call(this, d), Object.defineProperty(o(s), "details", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(o(s), "docsPath", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(o(s), "metaMessages", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(o(s), "shortMessage", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(o(s), "name", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: "AbiTypeError"
                        }), u.cause && (s.cause = u.cause), s.details = l, s.docsPath = p, s.metaMessages = u.metaMessages, s.shortMessage = e, s
                    }
                    return a(r)
                }(l(Error));
            t.BaseError = p
        },
        37666: function(e, t, r) {
            var n = r(72071).default,
                a = r(86976).default,
                i = r(21233).default,
                o = r(64302).default,
                s = r(40801).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UnknownSolidityTypeError = t.UnknownTypeError = t.InvalidAbiItemError = void 0;
            var u = r(9283),
                l = function(e) {
                    o(r, e);
                    var t = s(r);

                    function r(e) {
                        var n, o = e.signature;
                        return a(this, r), n = t.call(this, "Failed to parse ABI item.", {
                            details: "parseAbiItem(".concat(JSON.stringify(o, null, 2), ")"),
                            docsPath: "/api/human.html#parseabiitem-1"
                        }), Object.defineProperty(i(n), "name", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: "InvalidAbiItemError"
                        }), n
                    }
                    return n(r)
                }(u.BaseError);
            t.InvalidAbiItemError = l;
            var c = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.type;
                    return a(this, r), n = t.call(this, "Unknown type.", {
                        metaMessages: ['Type "'.concat(o, '" is not a valid ABI type. Perhaps you forgot to include a struct signature?')]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownTypeError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.UnknownTypeError = c;
            var p = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.type;
                    return a(this, r), n = t.call(this, "Unknown type.", {
                        metaMessages: ['Type "'.concat(o, '" is not a valid ABI type.')]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSolidityTypeError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.UnknownSolidityTypeError = p
        },
        26758: function(e, t, r) {
            var n = r(72071).default,
                a = r(86976).default,
                i = r(21233).default,
                o = r(64302).default,
                s = r(40801).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvalidAbiTypeParameterError = t.InvalidFunctionModifierError = t.InvalidModifierError = t.SolidityProtectedKeywordError = t.InvalidParameterError = t.InvalidAbiParametersError = t.InvalidAbiParameterError = void 0;
            var u = r(9283),
                l = function(e) {
                    o(r, e);
                    var t = s(r);

                    function r(e) {
                        var n, o = e.param;
                        return a(this, r), n = t.call(this, "Failed to parse ABI parameter.", {
                            details: "parseAbiParameter(".concat(JSON.stringify(o, null, 2), ")"),
                            docsPath: "/api/human.html#parseabiparameter-1"
                        }), Object.defineProperty(i(n), "name", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: "InvalidAbiParameterError"
                        }), n
                    }
                    return n(r)
                }(u.BaseError);
            t.InvalidAbiParameterError = l;
            var c = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.params;
                    return a(this, r), n = t.call(this, "Failed to parse ABI parameters.", {
                        details: "parseAbiParameters(".concat(JSON.stringify(o, null, 2), ")"),
                        docsPath: "/api/human.html#parseabiparameters-1"
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiParametersError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidAbiParametersError = c;
            var p = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.param;
                    return a(this, r), n = t.call(this, "Invalid ABI parameter.", {
                        details: o
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParameterError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidParameterError = p;
            var d = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.param,
                        s = e.name;
                    return a(this, r), n = t.call(this, "Invalid ABI parameter.", {
                        details: o,
                        metaMessages: ['"'.concat(s, '" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html')]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SolidityProtectedKeywordError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.SolidityProtectedKeywordError = d;
            var f = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.param,
                        s = e.type,
                        u = e.modifier;
                    return a(this, r), n = t.call(this, "Invalid ABI parameter.", {
                        details: o,
                        metaMessages: ['Modifier "'.concat(u, '" not allowed').concat(s ? ' in "'.concat(s, '" type') : "", ".")]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidModifierError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidModifierError = f;
            var y = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.param,
                        s = e.type,
                        u = e.modifier;
                    return a(this, r), n = t.call(this, "Invalid ABI parameter.", {
                        details: o,
                        metaMessages: ['Modifier "'.concat(u, '" not allowed').concat(s ? ' in "'.concat(s, '" type') : "", "."), 'Data location can only be specified for array, struct, or mapping types, but "'.concat(u, '" was given.')]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidFunctionModifierError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidFunctionModifierError = y;
            var m = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.abiParameter;
                    return a(this, r), n = t.call(this, "Invalid ABI parameter.", {
                        details: JSON.stringify(o, null, 2),
                        metaMessages: ["ABI parameter type is invalid."]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiTypeParameterError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidAbiTypeParameterError = m
        },
        62666: function(e, t, r) {
            var n = r(72071).default,
                a = r(86976).default,
                i = r(21233).default,
                o = r(64302).default,
                s = r(40801).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvalidStructSignatureError = t.UnknownSignatureError = t.InvalidSignatureError = void 0;
            var u = r(9283),
                l = function(e) {
                    o(r, e);
                    var t = s(r);

                    function r(e) {
                        var n, o = e.signature,
                            s = e.type;
                        return a(this, r), n = t.call(this, "Invalid ".concat(s, " signature."), {
                            details: o
                        }), Object.defineProperty(i(n), "name", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: "InvalidSignatureError"
                        }), n
                    }
                    return n(r)
                }(u.BaseError);
            t.InvalidSignatureError = l;
            var c = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.signature;
                    return a(this, r), n = t.call(this, "Unknown signature.", {
                        details: o
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSignatureError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.UnknownSignatureError = c;
            var p = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.signature;
                    return a(this, r), n = t.call(this, "Invalid struct signature.", {
                        details: o,
                        metaMessages: ["No properties exist."]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidStructSignatureError"
                    }), n
                }
                return n(r)
            }(u.BaseError);
            t.InvalidStructSignatureError = p
        },
        31485: function(e, t, r) {
            var n = r(72071).default,
                a = r(86976).default,
                i = r(21233).default,
                o = r(64302).default,
                s = r(40801).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvalidParenthesisError = void 0;
            var u = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.current,
                        s = e.depth;
                    return a(this, r), n = t.call(this, "Unbalanced parentheses.", {
                        metaMessages: ['"'.concat(o.trim(), '" has too many ').concat(s > 0 ? "opening" : "closing", " parentheses.")],
                        details: 'Depth "'.concat(s, '"')
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParenthesisError"
                    }), n
                }
                return n(r)
            }(r(9283).BaseError);
            t.InvalidParenthesisError = u
        },
        22056: function(e, t, r) {
            var n = r(72071).default,
                a = r(86976).default,
                i = r(21233).default,
                o = r(64302).default,
                s = r(40801).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CircularReferenceError = void 0;
            var u = function(e) {
                o(r, e);
                var t = s(r);

                function r(e) {
                    var n, o = e.type;
                    return a(this, r), n = t.call(this, "Circular reference detected.", {
                        metaMessages: ['Struct "'.concat(o, '" is a circular reference.')]
                    }), Object.defineProperty(i(n), "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CircularReferenceError"
                    }), n
                }
                return n(r)
            }(r(9283).BaseError);
            t.CircularReferenceError = u
        },
        99540: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatAbi = void 0;
            var n = r(88716);
            t.formatAbi = function(e) {
                for (var t = [], r = e.length, a = 0; a < r; a++) {
                    var i = e[a],
                        o = (0, n.formatAbiItem)(i);
                    t.push(o)
                }
                return t
            }
        },
        88716: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatAbiItem = void 0;
            var n = r(73560);
            t.formatAbiItem = function(e) {
                return "function" === e.type ? "function ".concat(e.name, "(").concat((0, n.formatAbiParameters)(e.inputs), ")").concat(e.stateMutability && "nonpayable" !== e.stateMutability ? " ".concat(e.stateMutability) : "").concat(e.outputs.length ? " returns (".concat((0, n.formatAbiParameters)(e.outputs), ")") : "") : "event" === e.type ? "event ".concat(e.name, "(").concat((0, n.formatAbiParameters)(e.inputs), ")") : "error" === e.type ? "error ".concat(e.name, "(").concat((0, n.formatAbiParameters)(e.inputs), ")") : "constructor" === e.type ? "constructor(".concat((0, n.formatAbiParameters)(e.inputs), ")").concat("payable" === e.stateMutability ? " payable" : "") : "fallback" === e.type ? "fallback()" : "receive() external payable"
            }
        },
        49782: function(e, t, r) {
            var n = r(62087).default,
                a = r(1454).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatAbiParameter = void 0;
            var i = r(51626),
                o = a(/^tuple((\[(\d*)\])*)$/, {
                    array: 1
                });
            t.formatAbiParameter = function e(t) {
                var r = t.type;
                if (o.test(t.type) && "components" in t) {
                    var a;
                    r = "(";
                    for (var s = t.components.length, u = 0; u < s; u++) {
                        r += e(t.components[u]), u < s - 1 && (r += ", ")
                    }
                    var l = (0, i.execTyped)(o, t.type);
                    return r += ")".concat(null !== (a = null === l || void 0 === l ? void 0 : l.array) && void 0 !== a ? a : ""), e(n(n({}, t), {}, {
                        type: r
                    }))
                }
                return "indexed" in t && t.indexed && (r = "".concat(r, " indexed")), t.name ? "".concat(r, " ").concat(t.name) : r
            }
        },
        73560: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatAbiParameters = void 0;
            var n = r(49782);
            t.formatAbiParameters = function(e) {
                for (var t = "", r = e.length, a = 0; a < r; a++) {
                    var i = e[a];
                    t += (0, n.formatAbiParameter)(i), a !== r - 1 && (t += ", ")
                }
                return t
            }
        },
        45860: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseAbi = void 0;
            var n = r(79811),
                a = r(74330),
                i = r(65412);
            t.parseAbi = function(e) {
                for (var t = (0, a.parseStructs)(e), r = [], o = e.length, s = 0; s < o; s++) {
                    var u = e[s];
                    (0, n.isStructSignature)(u) || r.push((0, i.parseSignature)(u, t))
                }
                return r
            }
        },
        6642: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseAbiItem = void 0;
            var n = r(30264),
                a = r(79811),
                i = r(74330),
                o = r(65412);
            t.parseAbiItem = function(e) {
                var t;
                if ("string" === typeof e) t = (0, o.parseSignature)(e);
                else
                    for (var r = (0, i.parseStructs)(e), s = e.length, u = 0; u < s; u++) {
                        var l = e[u];
                        if (!(0, a.isStructSignature)(l)) {
                            t = (0, o.parseSignature)(l, r);
                            break
                        }
                    }
                if (!t) throw new n.InvalidAbiItemError({
                    signature: e
                });
                return t
            }
        },
        33282: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseAbiParameter = void 0;
            var n = r(30264),
                a = r(79811),
                i = r(74330),
                o = r(65412);
            t.parseAbiParameter = function(e) {
                var t;
                if ("string" === typeof e) t = (0, o.parseAbiParameter)(e, {
                    modifiers: a.modifiers
                });
                else
                    for (var r = (0, i.parseStructs)(e), s = e.length, u = 0; u < s; u++) {
                        var l = e[u];
                        if (!(0, a.isStructSignature)(l)) {
                            t = (0, o.parseAbiParameter)(l, {
                                modifiers: a.modifiers,
                                structs: r
                            });
                            break
                        }
                    }
                if (!t) throw new n.InvalidAbiParameterError({
                    param: e
                });
                return t
            }
        },
        65670: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseAbiParameters = void 0;
            var n = r(30264),
                a = r(79811),
                i = r(74330),
                o = r(65412),
                s = r(65412);
            t.parseAbiParameters = function(e) {
                var t = [];
                if ("string" === typeof e)
                    for (var r = (0, o.splitParameters)(e), u = r.length, l = 0; l < u; l++) t.push((0, s.parseAbiParameter)(r[l], {
                        modifiers: a.modifiers
                    }));
                else
                    for (var c = (0, i.parseStructs)(e), p = e.length, d = 0; d < p; d++) {
                        var f = e[d];
                        if (!(0, a.isStructSignature)(f))
                            for (var y = (0, o.splitParameters)(f), m = y.length, h = 0; h < m; h++) t.push((0, s.parseAbiParameter)(y[h], {
                                modifiers: a.modifiers,
                                structs: c
                            }))
                    }
                if (0 === t.length) throw new n.InvalidAbiParametersError({
                    params: e
                });
                return t
            }
        },
        35896: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parameterCache = t.getParameterCacheKey = void 0, t.getParameterCacheKey = function(e, t) {
                return t ? "".concat(t, ":").concat(e) : e
            }, t.parameterCache = new Map([
                ["address", {
                    type: "address"
                }],
                ["bool", {
                    type: "bool"
                }],
                ["bytes", {
                    type: "bytes"
                }],
                ["bytes32", {
                    type: "bytes32"
                }],
                ["int", {
                    type: "int256"
                }],
                ["int256", {
                    type: "int256"
                }],
                ["string", {
                    type: "string"
                }],
                ["uint", {
                    type: "uint256"
                }],
                ["uint8", {
                    type: "uint8"
                }],
                ["uint16", {
                    type: "uint16"
                }],
                ["uint24", {
                    type: "uint24"
                }],
                ["uint32", {
                    type: "uint32"
                }],
                ["uint64", {
                    type: "uint64"
                }],
                ["uint96", {
                    type: "uint96"
                }],
                ["uint112", {
                    type: "uint112"
                }],
                ["uint160", {
                    type: "uint160"
                }],
                ["uint192", {
                    type: "uint192"
                }],
                ["uint256", {
                    type: "uint256"
                }],
                ["address owner", {
                    type: "address",
                    name: "owner"
                }],
                ["address to", {
                    type: "address",
                    name: "to"
                }],
                ["bool approved", {
                    type: "bool",
                    name: "approved"
                }],
                ["bytes _data", {
                    type: "bytes",
                    name: "_data"
                }],
                ["bytes data", {
                    type: "bytes",
                    name: "data"
                }],
                ["bytes signature", {
                    type: "bytes",
                    name: "signature"
                }],
                ["bytes32 hash", {
                    type: "bytes32",
                    name: "hash"
                }],
                ["bytes32 r", {
                    type: "bytes32",
                    name: "r"
                }],
                ["bytes32 root", {
                    type: "bytes32",
                    name: "root"
                }],
                ["bytes32 s", {
                    type: "bytes32",
                    name: "s"
                }],
                ["string name", {
                    type: "string",
                    name: "name"
                }],
                ["string symbol", {
                    type: "string",
                    name: "symbol"
                }],
                ["string tokenURI", {
                    type: "string",
                    name: "tokenURI"
                }],
                ["uint tokenId", {
                    type: "uint256",
                    name: "tokenId"
                }],
                ["uint8 v", {
                    type: "uint8",
                    name: "v"
                }],
                ["uint256 balance", {
                    type: "uint256",
                    name: "balance"
                }],
                ["uint256 tokenId", {
                    type: "uint256",
                    name: "tokenId"
                }],
                ["uint256 value", {
                    type: "uint256",
                    name: "value"
                }],
                ["event:address indexed from", {
                    type: "address",
                    name: "from",
                    indexed: !0
                }],
                ["event:address indexed to", {
                    type: "address",
                    name: "to",
                    indexed: !0
                }],
                ["event:uint indexed tokenId", {
                    type: "uint256",
                    name: "tokenId",
                    indexed: !0
                }],
                ["event:uint256 indexed tokenId", {
                    type: "uint256",
                    name: "tokenId",
                    indexed: !0
                }]
            ])
        },
        79811: function(e, t, r) {
            var n = r(1454).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.functionModifiers = t.eventModifiers = t.modifiers = t.isReceiveSignature = t.isFallbackSignature = t.execConstructorSignature = t.isConstructorSignature = t.execStructSignature = t.isStructSignature = t.execFunctionSignature = t.isFunctionSignature = t.execEventSignature = t.isEventSignature = t.execErrorSignature = t.isErrorSignature = void 0;
            var a = r(51626),
                i = n(/^error ([a-zA-Z0-9_]+)\((.*?)\)$/, {
                    name: 1,
                    parameters: 2
                });
            t.isErrorSignature = function(e) {
                return i.test(e)
            }, t.execErrorSignature = function(e) {
                return (0, a.execTyped)(i, e)
            };
            var o = n(/^event ([a-zA-Z0-9_]+)\((.*?)\)$/, {
                name: 1,
                parameters: 2
            });
            t.isEventSignature = function(e) {
                return o.test(e)
            }, t.execEventSignature = function(e) {
                return (0, a.execTyped)(o, e)
            };
            var s = n(/^function ([a-zA-Z0-9_]+)\((.*?)\)(?: (external|public{1}))?(?: (pure|view|nonpayable|payable{1}))?(?: returns\s?\((.*?)\))?$/, {
                name: 1,
                parameters: 2,
                scope: 3,
                stateMutability: 4,
                returns: 5
            });
            t.isFunctionSignature = function(e) {
                return s.test(e)
            }, t.execFunctionSignature = function(e) {
                return (0, a.execTyped)(s, e)
            };
            var u = n(/^struct ([a-zA-Z0-9_]+) \{(.*?)\}$/, {
                name: 1,
                properties: 2
            });
            t.isStructSignature = function(e) {
                return u.test(e)
            }, t.execStructSignature = function(e) {
                return (0, a.execTyped)(u, e)
            };
            var l = n(/^constructor\((.*?)\)(?:\s(payable{1}))?$/, {
                parameters: 1,
                stateMutability: 2
            });
            t.isConstructorSignature = function(e) {
                return l.test(e)
            }, t.execConstructorSignature = function(e) {
                return (0, a.execTyped)(l, e)
            };
            var c = /^fallback\(\)$/;
            t.isFallbackSignature = function(e) {
                return c.test(e)
            };
            var p = /^receive\(\) external payable$/;
            t.isReceiveSignature = function(e) {
                return p.test(e)
            }, t.modifiers = new Set(["memory", "indexed", "storage", "calldata"]), t.eventModifiers = new Set(["indexed"]), t.functionModifiers = new Set(["calldata", "memory", "storage"])
        },
        74330: function(e, t, r) {
            var n = r(26899).default,
                a = r(62087).default,
                i = r(1454).default,
                o = r(74063).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStructs = void 0;
            var s = r(51626),
                u = r(37666),
                l = r(26758),
                c = r(62666),
                p = r(22056),
                d = r(79811),
                f = r(65412);
            t.parseStructs = function(e) {
                for (var t = {}, r = e.length, n = 0; n < r; n++) {
                    var a = e[n];
                    if ((0, d.isStructSignature)(a)) {
                        var i = (0, d.execStructSignature)(a);
                        if (!i) throw new c.InvalidSignatureError({
                            signature: a,
                            type: "struct"
                        });
                        for (var s = i.properties.split(";"), u = [], l = s.length, p = 0; p < l; p++) {
                            var y = s[p].trim();
                            if (y) {
                                var h = (0, f.parseAbiParameter)(y, {
                                    type: "struct"
                                });
                                u.push(h)
                            }
                        }
                        if (!u.length) throw new c.InvalidStructSignatureError({
                            signature: a
                        });
                        t[i.name] = u
                    }
                }
                for (var v = {}, b = Object.entries(t), g = b.length, E = 0; E < g; E++) {
                    var w = o(b[E], 2),
                        A = w[0],
                        I = w[1];
                    v[A] = m(I, t)
                }
                return v
            };
            var y = i(/^([a-zA-Z0-9_]+?)((?:\[\d*?\])+?)?$/, {
                type: 1,
                array: 2
            });

            function m(e, t) {
                for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set, i = [], o = e.length, c = 0; c < o; c++) {
                    var d = e[c];
                    if (s.isTupleRegex.test(d.type)) i.push(d);
                    else {
                        var h = (0, s.execTyped)(y, d.type);
                        if (null === h || void 0 === h || !h.type) throw new l.InvalidAbiTypeParameterError({
                            abiParameter: d
                        });
                        var v = h.array,
                            b = h.type;
                        if (b in t) {
                            var g;
                            if (r.has(b)) throw new p.CircularReferenceError({
                                type: b
                            });
                            i.push(a(a({}, d), {}, {
                                type: "tuple".concat(null !== v && void 0 !== v ? v : ""),
                                components: m(null !== (g = t[b]) && void 0 !== g ? g : [], t, new Set([].concat(n(r), [b])))
                            }))
                        } else {
                            if (!(0, f.isSolidityType)(b)) throw new u.UnknownTypeError({
                                type: b
                            });
                            i.push(d)
                        }
                    }
                }
                return i
            }
        },
        65412: function(e, t, r) {
            var n = r(26899).default,
                a = r(62087).default,
                i = r(1454).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isValidDataLocation = t.isSolidityKeyword = t.isSolidityType = t.splitParameters = t.parseAbiParameter = t.parseSignature = void 0;
            var o = r(51626),
                s = r(37666),
                u = r(26758),
                l = r(62666),
                c = r(31485),
                p = r(35896),
                d = r(79811);
            t.parseSignature = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ((0, d.isFunctionSignature)(e)) {
                    var r, n = (0, d.execFunctionSignature)(e);
                    if (!n) throw new l.InvalidSignatureError({
                        signature: e,
                        type: "function"
                    });
                    for (var a = v(n.parameters), i = [], o = a.length, s = 0; s < o; s++) i.push(h(a[s], {
                        modifiers: d.functionModifiers,
                        structs: t,
                        type: "function"
                    }));
                    var u = [];
                    if (n.returns)
                        for (var c = v(n.returns), p = c.length, f = 0; f < p; f++) u.push(h(c[f], {
                            modifiers: d.functionModifiers,
                            structs: t,
                            type: "function"
                        }));
                    return {
                        name: n.name,
                        type: "function",
                        stateMutability: null !== (r = n.stateMutability) && void 0 !== r ? r : "nonpayable",
                        inputs: i,
                        outputs: u
                    }
                }
                if ((0, d.isEventSignature)(e)) {
                    var y = (0, d.execEventSignature)(e);
                    if (!y) throw new l.InvalidSignatureError({
                        signature: e,
                        type: "event"
                    });
                    for (var m = v(y.parameters), b = [], g = m.length, E = 0; E < g; E++) b.push(h(m[E], {
                        modifiers: d.eventModifiers,
                        structs: t,
                        type: "event"
                    }));
                    return {
                        name: y.name,
                        type: "event",
                        inputs: b
                    }
                }
                if ((0, d.isErrorSignature)(e)) {
                    var w = (0, d.execErrorSignature)(e);
                    if (!w) throw new l.InvalidSignatureError({
                        signature: e,
                        type: "error"
                    });
                    for (var A = v(w.parameters), I = [], S = A.length, T = 0; T < S; T++) I.push(h(A[T], {
                        structs: t,
                        type: "error"
                    }));
                    return {
                        name: w.name,
                        type: "error",
                        inputs: I
                    }
                }
                if ((0, d.isConstructorSignature)(e)) {
                    var _, P = (0, d.execConstructorSignature)(e);
                    if (!P) throw new l.InvalidSignatureError({
                        signature: e,
                        type: "constructor"
                    });
                    for (var M = v(P.parameters), O = [], k = M.length, x = 0; x < k; x++) O.push(h(M[x], {
                        structs: t,
                        type: "constructor"
                    }));
                    return {
                        type: "constructor",
                        stateMutability: null !== (_ = P.stateMutability) && void 0 !== _ ? _ : "nonpayable",
                        inputs: O
                    }
                }
                if ((0, d.isFallbackSignature)(e)) return {
                    type: "fallback"
                };
                if ((0, d.isReceiveSignature)(e)) return {
                    type: "receive",
                    stateMutability: "payable"
                };
                throw new l.UnknownSignatureError({
                    signature: e
                })
            };
            var f = i(/^([a-zA-Z0-9_]+?)((?:\[\d*?\])+?)?(?:\s(calldata|indexed|memory|storage{1}))?(?:\s([a-zA-Z0-9_]+))?$/, {
                    type: 1,
                    array: 2,
                    modifier: 3,
                    name: 4
                }),
                y = i(/^\((.+?)\)((?:\[\d*?\])+?)?(?:\s(calldata|indexed|memory|storage{1}))?(?:\s([a-zA-Z0-9_]+))?$/, {
                    type: 1,
                    array: 2,
                    modifier: 3,
                    name: 4
                }),
                m = /^u?int$/;

            function h(e, t) {
                var r, n, i = (0, p.getParameterCacheKey)(e, null === t || void 0 === t ? void 0 : t.type);
                if (p.parameterCache.has(i)) return p.parameterCache.get(i);
                var l = o.isTupleRegex.test(e),
                    c = (0, o.execTyped)(l ? y : f, e);
                if (!c) throw new u.InvalidParameterError({
                    param: e
                });
                if (c.name && E(c.name)) throw new u.SolidityProtectedKeywordError({
                    param: e,
                    name: c.name
                });
                var g, A = c.name ? {
                        name: c.name
                    } : {},
                    I = "indexed" === c.modifier ? {
                        indexed: !0
                    } : {},
                    S = null !== (r = null === t || void 0 === t ? void 0 : t.structs) && void 0 !== r ? r : {},
                    T = {};
                if (l) {
                    g = "tuple";
                    for (var _ = v(c.type), P = [], M = _.length, O = 0; O < M; O++) P.push(h(_[O], {
                        structs: S
                    }));
                    T = {
                        components: P
                    }
                } else if (c.type in S) g = "tuple", T = {
                    components: S[c.type]
                };
                else if (m.test(c.type)) g = "".concat(c.type, "256");
                else if (g = c.type, "struct" !== (null === t || void 0 === t ? void 0 : t.type) && !b(g)) throw new s.UnknownSolidityTypeError({
                    type: g
                });
                if (c.modifier) {
                    var k, x;
                    if (null === t || void 0 === t || null === (k = t.modifiers) || void 0 === k || null === (x = k.has) || void 0 === x || !x.call(k, c.modifier)) throw new u.InvalidModifierError({
                        param: e,
                        type: null === t || void 0 === t ? void 0 : t.type,
                        modifier: c.modifier
                    });
                    if (d.functionModifiers.has(c.modifier) && !w(g, !!c.array)) throw new u.InvalidFunctionModifierError({
                        param: e,
                        type: null === t || void 0 === t ? void 0 : t.type,
                        modifier: c.modifier
                    })
                }
                var C = a(a(a({
                    type: "".concat(g).concat(null !== (n = c.array) && void 0 !== n ? n : "")
                }, A), I), T);
                return p.parameterCache.set(i, C), C
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if ("" === e) {
                    if ("" === r) return t;
                    if (0 !== a) throw new c.InvalidParenthesisError({
                        current: r,
                        depth: a
                    });
                    return t.push(r.trim()), t
                }
                for (var i = e.length, o = 0; o < i; o++) {
                    var s = e[o],
                        u = e.slice(o + 1);
                    switch (s) {
                        case ",":
                            return 0 === a ? v(u, [].concat(n(t), [r.trim()])) : v(u, t, "".concat(r).concat(s), a);
                        case "(":
                            return v(u, t, "".concat(r).concat(s), a + 1);
                        case ")":
                            return v(u, t, "".concat(r).concat(s), a - 1);
                        default:
                            return v(u, t, "".concat(r).concat(s), a)
                    }
                }
                return []
            }

            function b(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || o.bytesRegex.test(e) || o.integerRegex.test(e)
            }
            t.parseAbiParameter = h, t.splitParameters = v, t.isSolidityType = b;
            var g = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;

            function E(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || "tuple" === e || o.bytesRegex.test(e) || o.integerRegex.test(e) || g.test(e)
            }

            function w(e, t) {
                return t || "bytes" === e || "string" === e || "tuple" === e
            }
            t.isSolidityKeyword = E, t.isValidDataLocation = w
        },
        30264: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CircularReferenceError = t.InvalidParenthesisError = t.UnknownSignatureError = t.InvalidSignatureError = t.InvalidStructSignatureError = t.InvalidAbiParameterError = t.InvalidAbiParametersError = t.InvalidParameterError = t.SolidityProtectedKeywordError = t.InvalidModifierError = t.InvalidFunctionModifierError = t.InvalidAbiTypeParameterError = t.UnknownSolidityTypeError = t.InvalidAbiItemError = t.UnknownTypeError = t.parseAbiParameters = t.parseAbiParameter = t.parseAbiItem = t.parseAbi = t.formatAbiParameters = t.formatAbiParameter = t.formatAbiItem = t.formatAbi = t.narrow = t.BaseError = void 0;
            var n = r(9283);
            Object.defineProperty(t, "BaseError", {
                enumerable: !0,
                get: function() {
                    return n.BaseError
                }
            });
            var a = r(68976);
            Object.defineProperty(t, "narrow", {
                enumerable: !0,
                get: function() {
                    return a.narrow
                }
            });
            var i = r(99540);
            Object.defineProperty(t, "formatAbi", {
                enumerable: !0,
                get: function() {
                    return i.formatAbi
                }
            });
            var o = r(88716);
            Object.defineProperty(t, "formatAbiItem", {
                enumerable: !0,
                get: function() {
                    return o.formatAbiItem
                }
            });
            var s = r(49782);
            Object.defineProperty(t, "formatAbiParameter", {
                enumerable: !0,
                get: function() {
                    return s.formatAbiParameter
                }
            });
            var u = r(73560);
            Object.defineProperty(t, "formatAbiParameters", {
                enumerable: !0,
                get: function() {
                    return u.formatAbiParameters
                }
            });
            var l = r(45860);
            Object.defineProperty(t, "parseAbi", {
                enumerable: !0,
                get: function() {
                    return l.parseAbi
                }
            });
            var c = r(6642);
            Object.defineProperty(t, "parseAbiItem", {
                enumerable: !0,
                get: function() {
                    return c.parseAbiItem
                }
            });
            var p = r(33282);
            Object.defineProperty(t, "parseAbiParameter", {
                enumerable: !0,
                get: function() {
                    return p.parseAbiParameter
                }
            });
            var d = r(65670);
            Object.defineProperty(t, "parseAbiParameters", {
                enumerable: !0,
                get: function() {
                    return d.parseAbiParameters
                }
            });
            var f = r(37666);
            Object.defineProperty(t, "UnknownTypeError", {
                enumerable: !0,
                get: function() {
                    return f.UnknownTypeError
                }
            }), Object.defineProperty(t, "InvalidAbiItemError", {
                enumerable: !0,
                get: function() {
                    return f.InvalidAbiItemError
                }
            }), Object.defineProperty(t, "UnknownSolidityTypeError", {
                enumerable: !0,
                get: function() {
                    return f.UnknownSolidityTypeError
                }
            });
            var y = r(26758);
            Object.defineProperty(t, "InvalidAbiTypeParameterError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidAbiTypeParameterError
                }
            }), Object.defineProperty(t, "InvalidFunctionModifierError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidFunctionModifierError
                }
            }), Object.defineProperty(t, "InvalidModifierError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidModifierError
                }
            }), Object.defineProperty(t, "SolidityProtectedKeywordError", {
                enumerable: !0,
                get: function() {
                    return y.SolidityProtectedKeywordError
                }
            }), Object.defineProperty(t, "InvalidParameterError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidParameterError
                }
            }), Object.defineProperty(t, "InvalidAbiParametersError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidAbiParametersError
                }
            }), Object.defineProperty(t, "InvalidAbiParameterError", {
                enumerable: !0,
                get: function() {
                    return y.InvalidAbiParameterError
                }
            });
            var m = r(62666);
            Object.defineProperty(t, "InvalidStructSignatureError", {
                enumerable: !0,
                get: function() {
                    return m.InvalidStructSignatureError
                }
            }), Object.defineProperty(t, "InvalidSignatureError", {
                enumerable: !0,
                get: function() {
                    return m.InvalidSignatureError
                }
            }), Object.defineProperty(t, "UnknownSignatureError", {
                enumerable: !0,
                get: function() {
                    return m.UnknownSignatureError
                }
            });
            var h = r(31485);
            Object.defineProperty(t, "InvalidParenthesisError", {
                enumerable: !0,
                get: function() {
                    return h.InvalidParenthesisError
                }
            });
            var v = r(22056);
            Object.defineProperty(t, "CircularReferenceError", {
                enumerable: !0,
                get: function() {
                    return v.CircularReferenceError
                }
            })
        },
        68976: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.narrow = void 0, t.narrow = function(e) {
                return e
            }
        },
        51626: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isTupleRegex = t.integerRegex = t.bytesRegex = t.execTyped = void 0, t.execTyped = function(e, t) {
                var r = e.exec(t);
                return null === r || void 0 === r ? void 0 : r.groups
            }, t.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, t.integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, t.isTupleRegex = /^\(.+?\).*?$/
        },
        69589: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.version = void 0, t.version = "0.8.11"
        }
    }
]);
//# sourceMappingURL=445.77825d5a.js.map