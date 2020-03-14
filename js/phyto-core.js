function toggle_card_data(t, e) {
    var i = "#" + t,
        n = "#" + e;
    $(n).slideToggle("slow", function() {
        var t = $(n).is(":visible");
        1 == t ? $(i).removeClass("uk-icon-chevron-down").addClass("uk-icon-close") : $(i).removeClass("uk-icon-close").addClass("uk-icon-chevron-down")
    })
}

function toggle_card_data_new(t, e) {
    var i = "#" + t,
        n = "#" + e;
    $(n).slideToggle("slow", function() {
        var t = $(n).is(":visible");
        1 == t ? $(i).removeClass("uk-icon-plus").addClass("uk-icon-close") : $(i).removeClass("uk-icon-close").addClass("uk-icon-plus")
    })
}

function commit_form_addition(t, e, i, n, o) {
    if ("pest_card_data_new_form" == t) {
        var s = t + "_" + o,
            a = $("#" + s + " #com_name_div_" + o).html();
        $("#" + s + " #com_name_" + o).val(a);
        var r = $("#" + s + " #sci_name_div_" + o).html();
        $("#" + s + " #sci_name_" + o).val(r);
        var l = $("#" + s + " #acrynom_div_" + o).html();
        $("#" + s + " #acrynom_" + o).val(l);
        var c = $("#" + s + " #type_div").html();
        $("#" + s + " #type").val(c);
        var d = $("#" + s + " #other_names_div").html();
        $("#" + s + " #other_names").val(d);
        var h = $("#" + s + " #dist_div").html();
        $("#" + s + " #dist").val(h);
        var u = $("#" + s + " #us_dist_div").html();
        $("#" + s + " #us_dist").val(u);
        var p = $("#" + s + " #countries_div").html();
        $("#" + s + " #countries").val(p);
        var f = $("#" + s + " #other_div").html();
        $("#" + s + " #other").val(f);
        var m = $("#" + s + " #host_range_div").html();
        $("#" + s + " #host_range").val(m)
    }
    if ("pest_host_data_new_form" == t) {
        var s = t + "_" + o,
            r = $("#" + s + " #host_sci_name_div_" + o).html();
        $("#" + s + " #host_sci_name_" + o).val(r);
        var v = $("#" + s + " #host_crop_div_" + o).html();
        $("#" + s + " #host_crop_" + o).val(v);
        var g = $("#" + s + " #host_seed_pathway_div").html();
        $("#" + s + " #host_seed_pathway").val(g);
        var _ = $("#" + s + " #host_seed_ref_div").html();
        $("#" + s + " #host_seed_ref").val(_);
        var k = $("#" + s + " #host_seed_comments_div").html();
        $("#" + s + " #host_seed_comments").val(k);
        var w = $("#" + s + " #host_seed_detect_test_div").html();
        $("#" + s + " #host_seed_detect_test").val(w);
        var b = $("#" + s + " #host_seed_detect_type_div").html();
        $("#" + s + " #host_seed_detect_type").val(b);
        var y = $("#" + s + " #host_seed_detect_ref_div").html();
        $("#" + s + " #host_seed_detect_ref").val(y);
        var C = $("#" + s + " #host_seed_detect_comments_div").html();
        $("#" + s + " #host_seed_detect_comments").val(C);
        var x = $("#" + s + " #host_risk_mit_type_div").html();
        $("#" + s + " #host_risk_mit_type").val(x);
        var U = $("#" + s + " #host_risk_mit_ref_div").html();
        $("#" + s + " #host_risk_mit_ref").val(U);
        var T = $("#" + s + " #host_risk_mit_comments_div").html();
        $("#" + s + " #host_risk_mit_comments").val(T);
        var D = $("#" + s + " #host_rec_health_test_div").html();
        $("#" + s + " #host_rec_health_test").val(D)
    }
    var M = return_valid_form_entry(t, o);
    if (1 == M) {
        $("#" + n + "_" + o).attr("disabled", !0), $("#" + i + "_" + o).removeClass("toggle_hidden");
        var S = $("#" + t + "_" + o).serialize();
        "pest_host_data_new_form" == t && (t = "pest_host_data_new_form_" + o), $.ajax({
            type: "POST",
            url: "app/actions/app_savedata.php",
            data: S,
            success: function(e) {
                if ($("#" + n + "_" + o).attr("disabled", !1), $("#" + i + "_" + o).addClass("toggle_hidden"), t == "pest_host_data_new_form_" + o) {
                    toggle_card_data_new("toggle_new_host_add_" + o, "host_data_entry_form_" + o), $("#pest_host_data_new_form_" + o).find("input[type=hidden]").val(""), $("#pest_host_data_new_form_" + o).find(".card_textarea").removeClass("form_error").html(""), $("#" + t + " #form_data_card").val("host_card"), $("#" + t + " #form_data_parent_card_val_" + o).val(o), $("#" + t + " #form_data_commit").val("a"), $("#host_data_entry_form_" + o).slideUp();
                    var s = app_build_pest_host_cards(o)
                }
                "pest_card_data_new_form" == t && ($("#toggle_new_pest_form").removeClass("uk-icon-close").addClass("uk-icon-plus"), $("#" + t + "_" + o).find("input[type=hidden]").val(""), $("#" + t + "_" + o).find(".card_textarea").removeClass("form_error").html(""), $("#" + t + "_" + o + " #form_data_card").val("pest_card"), $("#" + t + "_" + o + " #form_data_card_val").val(o), $("#" + t + "_" + o + " #form_data_commit").val("a"), $("#pdb_pest_data_new").slideUp(), app_build_pest_cards(o))
            }
        })
    }
    return !1
}

function commit_form_udpate(t, e, i, n, o) {
    if ("pest_card_data_form" == t) {
        var s = t + "_" + o,
            a = $("#" + s + " #com_name_div_" + o).html();
        $("#" + s + " #com_name_" + o).val(a);
        var r = $("#" + s + " #sci_name_div_" + o).html();
        $("#" + s + " #sci_name_" + o).val(r);
        var l = $("#" + s + " #acrynom_div_" + o).html();
        $("#" + s + " #acrynom_" + o).val(l);
        var c = $("#" + s + " #type_div").html();
        $("#" + s + " #type").val(c);
        var d = $("#" + s + " #other_names_div").html();
        $("#" + s + " #other_names").val(d);
        var h = $("#" + s + " #dist_div").html();
        $("#" + s + " #dist").val(h);
        var u = $("#" + s + " #us_dist_div").html();
        $("#" + s + " #us_dist").val(u);
        var p = $("#" + s + " #countries_div").html();
        $("#" + s + " #countries").val(p);
        var f = $("#" + s + " #other_div").html();
        $("#" + s + " #other").val(f);
        var m = $("#" + s + " #host_range_div").html();
        $("#" + s + " #host_range").val(m)
    }
    if ("pest_host_data_form" == t) {
        var s = t + "_" + o,
            r = $("#" + s + " #host_sci_name_div_" + o).html();
        $("#" + s + " #host_sci_name_" + o).val(r);
        var v = $("#" + s + " #host_crop_div_" + o).html();
        $("#" + s + " #host_crop_" + o).val(v);
        var g = $("#" + s + " #host_seed_pathway_div").html();
        $("#" + s + " #host_seed_pathway").val(g);
        var _ = $("#" + s + " #host_seed_ref_div").html();
        $("#" + s + " #host_seed_ref").val(_);
        var k = $("#" + s + " #host_seed_comments_div").html();
        $("#" + s + " #host_seed_comments").val(k);
        var w = $("#" + s + " #host_seed_detect_test_div").html();
        $("#" + s + " #host_seed_detect_test").val(w);
        var b = $("#" + s + " #host_seed_detect_type_div").html();
        $("#" + s + " #host_seed_detect_type").val(b);
        var y = $("#" + s + " #host_seed_detect_ref_div").html();
        $("#" + s + " #host_seed_detect_ref").val(y);
        var C = $("#" + s + " #host_seed_detect_comments_div").html();
        $("#" + s + " #host_seed_detect_comments").val(C);
        var x = $("#" + s + " #host_risk_mit_type_div").html();
        $("#" + s + " #host_risk_mit_type").val(x);
        var U = $("#" + s + " #host_risk_mit_ref_div").html();
        $("#" + s + " #host_risk_mit_ref").val(U);
        var T = $("#" + s + " #host_risk_mit_comments_div").html();
        $("#" + s + " #host_risk_mit_comments").val(T);
        var D = $("#" + s + " #host_rec_health_test_div").html();
        $("#" + s + " #host_rec_health_test").val(D)
    }
    var M = return_valid_form_entry(t, o);
    if (1 == M) {
        $("#" + n + "_" + o).attr("disabled", !0), $("#" + i + "_" + o).removeClass("toggle_hidden");
        var S = $("#" + t + "_" + o).serialize();
        $.ajax({
            type: "POST",
            url: "app/actions/app_savedata.php",
            data: S,
            success: function(s) {
                if ("pest_card_data_form" == t) {
                    var a = $("#sci_name_" + o).val();
                    $("#card_h2_" + o).html(a);
                    var r = "(" + $("#com_name_" + o).val() + ")";
                    $("#card_h3_" + o).html(r), $("#sci_name_div_" + o).removeClass("form_error"), $("#acrynom_div_" + o).removeClass("form_error")
                }
                if ("pest_host_data_form" == t) {
                    var a = $("#host_sci_name_" + o).val();
                    $("#host_h2_" + o).html(a), $("#host_sci_name_div_" + o).removeClass("form_error")
                }
                $("#" + e + "_" + o).show().delay(3500).slideUp(), $("#" + n + "_" + o).attr("disabled", !1), $("#" + i + "_" + o).addClass("toggle_hidden")
            }
        })
    }
    return !1
}

function return_valid_form_entry(t, e) {
    var i = !1;
    if ("pest_card_data_form" == t || "pest_card_data_new_form" == t) {
        var n = $("#sci_name_" + e).val(),
            o = $("#acrynom_" + e).val();
        n.length > 0 && o.length > 0 ? i = !0 : (n.length < 1 && $("#sci_name_div_" + e).addClass("form_error"), o.length < 1 && $("#acrynom_div_" + e).addClass("form_error"))
    }
    if ("pest_host_data_form" == t || "pest_host_data_new_form" == t) {
        var n = $("#host_sci_name_" + e).val();
        n.length > 0 ? i = !0 : $("#host_sci_name_div_" + e).addClass("form_error")
    }
    return i
}

function textAreaAdjust(t) {
    t.style.height = "5px", setTimeout(function() {
        t.style.height = t.scrollHeight + "px"
    }, 5)
}

function app_build_pest_cards() {
    $("#pdb_results").load("app/actions/app_build_cards.php", function() {
        $("#pdb_results .card_textarea").on("paste", function(t) {
            OnPaste_StripFormatting(this, event)
        })
    })
}

function app_build_pest_host_cards(t) {
    $("#pdb_host_results_" + t).load("app/actions/app_build_host_cards.php?rid=" + t, function() {
        $("#pdb_host_results_" + t + " .card_textarea").on("paste", function(t) {
            OnPaste_StripFormatting(this, event)
        })
    })
}

function OnPaste_StripFormatting(t, e) {
    if (e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) {
        e.preventDefault();
        var i = e.originalEvent.originalEvent.clipboardData.getData("text/plain");
        window.document.execCommand("insertText", !1, i)
    } else if (e.clipboardData && e.clipboardData.getData) {
        e.preventDefault();
        var i = e.clipboardData.getData("text/plain");
        window.document.execCommand("insertText", !1, i)
    } else window.clipboardData && window.clipboardData.getData && (_onPaste_StripFormatting_IEPaste || (_onPaste_StripFormatting_IEPaste = !0, e.preventDefault(), window.document.execCommand("ms-pasteTextOnly", !1)), _onPaste_StripFormatting_IEPaste = !1)
}

function init_delete_modal(t, e) {
    var i = UIkit.modal("#commit_record_delete_" + e);
    global_ModalSaysDelRecord = t, i.show()
}

function close_delete_modal(t) {
    var e = UIkit.modal("#commit_record_delete_" + t);
    global_ModalSaysDelRecord = 0, e.hide()
}

function commit_delete(t) {
    var e = UIkit.modal("#commit_record_delete_" + t);
    e.hide();
    var i = "commitdelete=" + global_ModalSaysDelRecord + "&type=" + t;
    $.ajax({
        type: "POST",
        url: "app/actions/app_deletedata.php",
        data: i,
        success: function(e) {
            $("#pdb_" + t + "_card_" + global_ModalSaysDelRecord).remove(), global_ModalSaysDelRecord = 0
        }
    })
}

function apply_filter() {
    var t = $("#filter_pests").val();
    if ("" == t) alert("Please restrict your filter to Pests or Known Hosts.");
    else {
        var e = $("#filter_term").val();
        if ("" == e) alert("Please provide a Term.");
        else {
            var i = "";
            "pests" == t && (i = $("#filter_pests_col").val()), "hosts" == t && (i = $("#filter_hosts_col").val()), $("#pdb_results").load("app/actions/app_filter_results.php?sfor=" + encodeURIComponent(e) + "&son=" + t + "&resto=" + i, function() {
                $("#resultsdisplaytext").html('Showing Results for "' + e + '"'), $("#clearfilter").show()
            })
        }
    }
}

function loadcard(t) {
    $("#pdb_results").load("app/actions/app_build_cards.php?single=" + t, function() {
        $("#pdb_results .card_textarea").on("paste", function(t) {
            OnPaste_StripFormatting(this, event)
        })
    })
}

function clear_filter() {
    $("#resultsdisplaytext").html("Showing All Records"), $("#filter_pests").val(""), $("#filter_pests_col").val("").hide(), $("#filter_hosts_col").val("").hide(), $("#filter_term").val(""), $("#clearfilter").hide(), app_build_pest_cards()
}

function verify_attachment() {
    var t = $("#dbimport input:file").val(),
        e = /(\.xlsx|\.XLSX)$/i;
    return e.exec(t) ? !0 : (alert("File type must be XLSX format."), !1)
}
var _onPaste_StripFormatting_IEPaste = !1,
    global_ModalSaysDelRecord = 0;
$(function() {
        app_build_pest_cards(), $(".card_textarea").on("paste", function(t) {
            OnPaste_StripFormatting(this, event)
        }), $("#filter_pests").on("change", function() {
            var t = this.value;
            "pests" == t && ($("#filter_pests_col").show(), $("#filter_hosts_col").hide()), "hosts" == t && ($("#filter_pests_col").hide(), $("#filter_hosts_col").show()), "" == t && ($("#filter_pests_col").hide(), $("#filter_hosts_col").hide())
        })
    }), ! function(t) {
        if ("function" == typeof define && define.amd && define("uikit", function() {
                var e = window.UIkit || t(window, window.jQuery, window.document);
                return e.load = function(t, i, n, o) {
                    var s, a = t.split(","),
                        r = [],
                        l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");
                    if (!l) throw new Error("Please define base path to UIkit in the requirejs config.");
                    for (s = 0; s < a.length; s += 1) {
                        var c = a[s].replace(/\./g, "/");
                        r.push(l + "/components/" + c)
                    }
                    i(r, function() {
                        n(e)
                    })
                }, e
            }), !window.jQuery) throw new Error("UIkit requires jQuery");
        window && window.jQuery && t(window, window.jQuery, window.document)
    }(function(t, e, i) {
        "use strict";
        var n = {},
            o = window.UIkit;
        if (n.version = "2.18.0", n.noConflict = function() {
                return o && (window.UIkit = o, e.UIkit = o, e.fn.uk = o.fn), n
            }, n.prefix = function(t) {
                return t
            }, n.$ = e, n.$doc = n.$(document), n.$win = n.$(window), n.$html = n.$("html"), n.fn = function(t, i) {
                var o = arguments,
                    s = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
                    a = s[1],
                    r = s[2];
                return n[a] ? this.each(function() {
                    var t = e(this),
                        s = t.data(a);
                    s || t.data(a, s = n[a](this, r ? void 0 : i)), r && s[r].apply(s, Array.prototype.slice.call(o, 1))
                }) : (e.error("UIkit component [" + a + "] does not exist."), this)
            }, n.support = {}, n.support.transition = function() {
                var t = function() {
                    var t, e = i.body || i.documentElement,
                        n = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (t in n)
                        if (void 0 !== e.style[t]) return n[t]
                }();
                return t && {
                    end: t
                }
            }(), n.support.animation = function() {
                var t = function() {
                    var t, e = i.body || i.documentElement,
                        n = {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oAnimationEnd oanimationend",
                            animation: "animationend"
                        };
                    for (t in n)
                        if (void 0 !== e.style[t]) return n[t]
                }();
                return t && {
                    end: t
                }
            }(), n.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            }, n.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, n.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || null, n.Utils = {}, n.Utils.str2json = function(t, e) {
                try {
                    return e ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function(t, e) {
                        return '"' + e + '":'
                    }).replace(/'([^']+)'/g, function(t, e) {
                        return '"' + e + '"'
                    })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")()
                } catch (i) {
                    return !1
                }
            }, n.Utils.debounce = function(t, e, i) {
                var n;
                return function() {
                    var o = this,
                        s = arguments,
                        a = function() {
                            n = null, i || t.apply(o, s)
                        },
                        r = i && !n;
                    clearTimeout(n), n = setTimeout(a, e), r && t.apply(o, s)
                }
            }, n.Utils.removeCssRules = function(t) {
                var e, i, n, o, s, a, r, l, c, d;
                t && setTimeout(function() {
                    try {
                        for (d = document.styleSheets, o = 0, r = d.length; r > o; o++) {
                            for (n = d[o], i = [], n.cssRules = n.cssRules, e = s = 0, l = n.cssRules.length; l > s; e = ++s) n.cssRules[e].type === CSSRule.STYLE_RULE && t.test(n.cssRules[e].selectorText) && i.unshift(e);
                            for (a = 0, c = i.length; c > a; a++) n.deleteRule(i[a])
                        }
                    } catch (h) {}
                }, 0)
            }, n.Utils.isInView = function(t, i) {
                var o = e(t);
                if (!o.is(":visible")) return !1;
                var s = n.$win.scrollLeft(),
                    a = n.$win.scrollTop(),
                    r = o.offset(),
                    l = r.left,
                    c = r.top;
                return i = e.extend({
                    topoffset: 0,
                    leftoffset: 0
                }, i), c + o.height() >= a && c - i.topoffset <= a + n.$win.height() && l + o.width() >= s && l - i.leftoffset <= s + n.$win.width() ? !0 : !1
            }, n.Utils.checkDisplay = function(t, i) {
                var o = n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", t || document);
                return t && !o.length && (o = e(t)), o.trigger("display.uk.check"), i && ("string" != typeof i && (i = '[class*="uk-animation-"]'), o.find(i).each(function() {
                    var t = n.$(this),
                        e = t.attr("class"),
                        i = e.match(/uk\-animation\-(.+)/);
                    t.removeClass(i[0]).width(), t.addClass(i[0])
                })), o
            }, n.Utils.options = function(t) {
                if (e.isPlainObject(t)) return t;
                var i = t ? t.indexOf("{") : -1,
                    o = {};
                if (-1 != i) try {
                    o = n.Utils.str2json(t.substr(i))
                } catch (s) {}
                return o
            }, n.Utils.animate = function(t, i) {
                var o = e.Deferred();
                return t = n.$(t), i = i, t.css("display", "none").addClass(i).one(n.support.animation.end, function() {
                    t.removeClass(i), o.resolve()
                }).width(), t.css("display", ""), o.promise()
            }, n.Utils.uid = function(t) {
                return (t || "id") + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random())
            }, n.Utils.template = function(t, e) {
                for (var i, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], c = 0; r < a.length;) {
                    if (i = a[r], i.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, i = a[r], n = i[0], o = i.substring(i.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
                        case "~":
                            l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), c++;
                            break;
                        case ":":
                            l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), c++;
                            break;
                        case "#":
                            l.push("if(" + o + ") {"), c++;
                            break;
                        case "^":
                            l.push("if(!" + o + ") {"), c++;
                            break;
                        case "/":
                            l.push("}"), c--;
                            break;
                        case "!":
                            l.push("__ret.push(" + o + ");");
                            break;
                        default:
                            l.push("__ret.push(escape(" + o + "));")
                    } else l.push("__ret.push('" + i.replace(/\'/g, "\\'") + "');");
                    r += 1
                }
                return s = new Function("$data", ["var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), e ? s(e) : s
            }, n.Utils.events = {}, n.Utils.events.click = n.support.touch ? "tap" : "click", window.UIkit = n, e.UIkit = n, e.fn.uk = n.fn, n.langdirection = "rtl" == n.$html.attr("dir") ? "right" : "left", n.components = {}, n.component = function(t, i) {
                var o = function(i, s) {
                    var a = this;
                    return this.UIkit = n, this.element = i ? n.$(i) : null, this.options = e.extend(!0, {}, this.defaults, s), this.plugins = {}, this.element && this.element.data(t, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(o.plugins)).forEach(function(t) {
                        o.plugins[t].init && (o.plugins[t].init(a), a.plugins[t] = !0)
                    }), this.trigger("init.uk.component", [t, this]), this
                };
                return o.plugins = {}, e.extend(!0, o.prototype, {
                    defaults: {
                        plugins: []
                    },
                    boot: function() {},
                    init: function() {},
                    on: function(t, e, i) {
                        return n.$(this.element || this).on(t, e, i)
                    },
                    one: function(t, e, i) {
                        return n.$(this.element || this).one(t, e, i)
                    },
                    off: function(t) {
                        return n.$(this.element || this).off(t)
                    },
                    trigger: function(t, e) {
                        return n.$(this.element || this).trigger(t, e)
                    },
                    find: function(t) {
                        return n.$(this.element ? this.element : []).find(t)
                    },
                    proxy: function(t, e) {
                        var i = this;
                        e.split(" ").forEach(function(e) {
                            i[e] || (i[e] = function() {
                                return t[e].apply(t, arguments)
                            })
                        })
                    },
                    mixin: function(t, e) {
                        var i = this;
                        e.split(" ").forEach(function(e) {
                            i[e] || (i[e] = t[e].bind(i))
                        })
                    },
                    option: function() {
                        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void(2 == arguments.length && (this.options[arguments[0]] = arguments[1]))
                    }
                }, i), this.components[t] = o, this[t] = function() {
                    var i, o;
                    if (arguments.length) switch (arguments.length) {
                        case 1:
                            "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? i = e(arguments[0]) : o = arguments[0];
                            break;
                        case 2:
                            i = e(arguments[0]), o = arguments[1]
                    }
                    return i && i.data(t) ? i.data(t) : new n.components[t](i, o)
                }, n.domready && n.component.boot(t), o
            }, n.plugin = function(t, e, i) {
                this.components[t].plugins[e] = i
            }, n.component.boot = function(t) {
                n.components[t].prototype && n.components[t].prototype.boot && !n.components[t].booted && (n.components[t].prototype.boot.apply(n, []), n.components[t].booted = !0)
            }, n.component.bootComponents = function() {
                for (var t in n.components) n.component.boot(t)
            }, n.domObservers = [], n.domready = !1, n.ready = function(t) {
                n.domObservers.push(t), n.domready && t(document)
            }, n.on = function(t, e, i) {
                return t && t.indexOf("ready.uk.dom") > -1 && n.domready && e.apply(n.$doc), n.$doc.on(t, e, i)
            }, n.one = function(t, e, i) {
                return t && t.indexOf("ready.uk.dom") > -1 && n.domready ? (e.apply(n.$doc), n.$doc) : n.$doc.one(t, e, i)
            }, n.trigger = function(t, e) {
                return n.$doc.trigger(t, e)
            }, n.domObserve = function(t, e) {
                n.support.mutationobserver && (e = e || function() {}, n.$(t).each(function() {
                    var t = this,
                        i = n.$(t);
                    if (!i.data("observer")) try {
                        var o = new n.support.mutationobserver(n.Utils.debounce(function() {
                            e.apply(t, []), i.trigger("changed.uk.dom")
                        }, 50));
                        o.observe(t, {
                            childList: !0,
                            subtree: !0
                        }), i.data("observer", o)
                    } catch (s) {}
                }))
            }, n.on("domready.uk.dom", function() {
                n.domObservers.forEach(function(t) {
                    t(document)
                }), n.domready && n.Utils.checkDisplay(document)
            }), e(function() {
                n.$body = n.$("body"), n.ready(function() {
                    n.domObserve("[data-uk-observe]")
                }), n.on("changed.uk.dom", function(t) {
                    var e = t.target;
                    n.domObservers.forEach(function(t) {
                        t(e)
                    }), n.Utils.checkDisplay(e)
                }), n.trigger("beforeready.uk.dom"), n.component.bootComponents(), setInterval(function() {
                    var t, e = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        },
                        i = function() {
                            (e.x != window.pageXOffset || e.y != window.pageYOffset) && (t = {
                                x: 0,
                                y: 0
                            }, window.pageXOffset != e.x && (t.x = window.pageXOffset > e.x ? 1 : -1), window.pageYOffset != e.y && (t.y = window.pageYOffset > e.y ? 1 : -1), e = {
                                dir: t,
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            }, n.$doc.trigger("scrolling.uk.document", [e]))
                        };
                    return n.support.touch && n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", i), (e.x || e.y) && i(), i
                }(), 15), n.trigger("domready.uk.dom"), n.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && n.$win.on("load orientationchange resize", n.Utils.debounce(function() {
                    var t = function() {
                        return e(".uk-height-viewport").css("height", window.innerHeight), t
                    };
                    return t()
                }(), 100)), n.trigger("afterready.uk.dom"), n.domready = !0
            }), n.$html.addClass(n.support.touch ? "uk-touch" : "uk-notouch"), n.support.touch) {
            var s, a = !1,
                r = "uk-hover",
                l = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
            n.$html.on("touchstart MSPointerDown pointerdown", l, function() {
                a && e("." + r).removeClass(r), a = e(this).addClass(r)
            }).on("touchend MSPointerUp pointerup", function(t) {
                s = e(t.target).parents(l), a && a.not(s).removeClass(r)
            })
        }
        return n
    }),
    function(t) {
        function e(t, e, i, n) {
            return Math.abs(t - e) >= Math.abs(i - n) ? t - e > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
        }

        function i() {
            c = null, h.last && (h.el.trigger("longTap"), h = {})
        }

        function n() {
            c && clearTimeout(c), c = null
        }

        function o() {
            a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), c && clearTimeout(c), a = r = l = c = null, h = {}
        }

        function s(t) {
            return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary
        }
        if (!t.fn.swipeLeft) {
            var a, r, l, c, d, h = {},
                u = 750;
            t(function() {
                var p, f, m, v = 0,
                    g = 0;
                "MSGesture" in window && (d = new MSGesture, d.target = document.body), t(document).on("MSGestureEnd gestureend", function(t) {
                    var e = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
                    e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
                }).on("touchstart MSPointerDown pointerdown", function(e) {
                    ("MSPointerDown" != e.type || s(e.originalEvent)) && (m = "MSPointerDown" == e.type || "pointerdown" == e.type ? e : e.originalEvent.touches[0], p = Date.now(), f = p - (h.last || p), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), a && clearTimeout(a), h.x1 = m.pageX, h.y1 = m.pageY, f > 0 && 250 >= f && (h.isDoubleTap = !0), h.last = p, c = setTimeout(i, u), !d || "MSPointerDown" != e.type && "pointerdown" != e.type && "touchstart" != e.type || d.addPointer(e.originalEvent.pointerId))
                }).on("touchmove MSPointerMove pointermove", function(t) {
                    ("MSPointerMove" != t.type || s(t.originalEvent)) && (m = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0], n(), h.x2 = m.pageX, h.y2 = m.pageY, v += Math.abs(h.x1 - h.x2), g += Math.abs(h.y1 - h.y2))
                }).on("touchend MSPointerUp pointerup", function(i) {
                    ("MSPointerUp" != i.type || s(i.originalEvent)) && (n(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? l = setTimeout(function() {
                        h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {}
                    }, 0) : "last" in h && (isNaN(v) || 30 > v && 30 > g ? r = setTimeout(function() {
                        var e = t.Event("tap");
                        e.cancelTouch = o, h.el.trigger(e), h.isDoubleTap ? (h.el.trigger("doubleTap"), h = {}) : a = setTimeout(function() {
                            a = null, h.el.trigger("singleTap"), h = {}
                        }, 250)
                    }, 0) : h = {}, v = g = 0))
                }).on("touchcancel MSPointerCancel", o), t(window).on("scroll", o)
            }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
                t.fn[e] = function(i) {
                    return t(this).on(e, i)
                }
            })
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = [];
        t.component("stackMargin", {
            defaults: {
                cls: "uk-margin-small-top"
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-margin]", e).each(function() {
                        var e, i = t.$(this);
                        i.data("stackMargin") || (e = t.stackMargin(i, t.Utils.options(i.attr("data-uk-margin"))))
                    })
                })
            },
            init: function() {
                var i = this;
                this.columns = this.element.children(), this.columns.length && (t.$win.on("resize orientationchange", function() {
                    var e = function() {
                        i.process()
                    };
                    return t.$(function() {
                        e(), t.$win.on("load", e)
                    }), t.Utils.debounce(e, 20)
                }()), t.$html.on("changed.uk.dom", function() {
                    i.columns = i.element.children(), i.process()
                }), this.on("display.uk.check", function() {
                    i.columns = i.element.children(), this.element.is(":visible") && this.process()
                }.bind(this)), e.push(this))
            },
            process: function() {
                return t.Utils.stackMargin(this.columns, this.options), this
            },
            revert: function() {
                return this.columns.removeClass(this.options.cls), this
            }
        }), t.ready(function() {
            var e = [],
                i = function() {
                    e.forEach(function(t) {
                        if (t.is(":visible")) {
                            var e = t.parent().width(),
                                i = t.data("width"),
                                n = e / i,
                                o = Math.floor(n * t.data("height"));
                            t.css({
                                height: i > e ? o : t.data("height")
                            })
                        }
                    })
                };
            return t.$win.on("resize", t.Utils.debounce(i, 15)),
                function(n) {
                    t.$("iframe.uk-responsive-width", n).each(function() {
                        var i = t.$(this);
                        !i.data("responsive") && i.attr("width") && i.attr("height") && (i.data("width", i.attr("width")), i.data("height", i.attr("height")), i.data("responsive", !0), e.push(i))
                    }), i()
                }
        }()), t.Utils.stackMargin = function(e, i) {
            i = t.$.extend({
                cls: "uk-margin-small-top"
            }, i), i.cls = i.cls, e = t.$(e).removeClass(i.cls);
            var n = !1,
                o = e.filter(":visible:first"),
                s = o.length ? o.position().top + o.outerHeight() - 1 : !1;
            s !== !1 && e.each(function() {
                var e = t.$(this);
                e.is(":visible") && (n ? e.addClass(i.cls) : e.position().top >= s && (n = e.addClass(i.cls)))
            })
        }
    }(UIkit),
    function(t) {
        "use strict";

        function e(e, i) {
            i = t.$.extend({
                duration: 1e3,
                transition: "easeOutExpo",
                offset: 0,
                complete: function() {}
            }, i);
            var n = e.offset().top - i.offset,
                o = t.$doc.height(),
                s = window.innerHeight;
            n + s > o && (n = o - s), t.$("html,body").stop().animate({
                scrollTop: n
            }, i.duration, i.transition).promise().done(i.complete)
        }
        t.component("smoothScroll", {
            boot: function() {
                t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function() {
                    var e = t.$(this);
                    return e.data("smoothScroll") || (t.smoothScroll(e, t.Utils.options(e.attr("data-uk-smooth-scroll"))), e.trigger("click")), !1
                })
            },
            init: function() {
                var i = this;
                this.on("click", function(n) {
                    n.preventDefault(), e(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), i.options)
                })
            }
        }), t.Utils.scrollToElement = e, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
        })
    }(UIkit),
    function(t) {
        "use strict";
        var e = t.$win,
            i = t.$doc,
            n = [],
            o = function() {
                for (var e = 0; e < n.length; e++) t.support.requestAnimationFrame.apply(window, [n[e].check])
            };
        t.component("scrollspy", {
            defaults: {
                target: !1,
                cls: "uk-scrollspy-inview",
                initcls: "uk-scrollspy-init-inview",
                topoffset: 0,
                leftoffset: 0,
                repeat: !1,
                delay: 0
            },
            boot: function() {
                i.on("scrolling.uk.document", o), e.on("load resize orientationchange", t.Utils.debounce(o, 50)), t.ready(function(e) {
                    t.$("[data-uk-scrollspy]", e).each(function() {
                        var e = t.$(this);
                        e.data("scrollspy") || t.scrollspy(e, t.Utils.options(e.attr("data-uk-scrollspy")))
                    })
                })
            },
            init: function() {
                var e, i = this,
                    o = this.options.cls.split(/,/),
                    s = function() {
                        var n = i.options.target ? i.element.find(i.options.target) : i.element,
                            s = 1 === n.length ? 1 : 0,
                            a = 0;
                        n.each(function() {
                            var n = t.$(this),
                                r = n.data("inviewstate"),
                                l = t.Utils.isInView(n, i.options),
                                c = n.data("ukScrollspyCls") || o[a].trim();
                            !l || r || n.data("scrollspy-idle") || (e || (n.addClass(i.options.initcls), i.offset = n.offset(), e = !0, n.trigger("init.uk.scrollspy")), n.data("scrollspy-idle", setTimeout(function() {
                                n.addClass("uk-scrollspy-inview").toggleClass(c).width(), n.trigger("inview.uk.scrollspy"), n.data("scrollspy-idle", !1), n.data("inviewstate", !0)
                            }, i.options.delay * s)), s++), !l && r && i.options.repeat && (n.data("scrollspy-idle") && clearTimeout(n.data("scrollspy-idle")), n.removeClass("uk-scrollspy-inview").toggleClass(c), n.data("inviewstate", !1), n.trigger("outview.uk.scrollspy")), a = o[a + 1] ? a + 1 : 0
                        })
                    };
                s(), this.check = s, n.push(this)
            }
        });
        var s = [],
            a = function() {
                for (var e = 0; e < s.length; e++) t.support.requestAnimationFrame.apply(window, [s[e].check])
            };
        t.component("scrollspynav", {
            defaults: {
                cls: "uk-active",
                closest: !1,
                topoffset: 0,
                leftoffset: 0,
                smoothscroll: !1
            },
            boot: function() {
                i.on("scrolling.uk.document", a), e.on("resize orientationchange", t.Utils.debounce(a, 50)), t.ready(function(e) {
                    t.$("[data-uk-scrollspy-nav]", e).each(function() {
                        var e = t.$(this);
                        e.data("scrollspynav") || t.scrollspynav(e, t.Utils.options(e.attr("data-uk-scrollspy-nav")))
                    })
                })
            },
            init: function() {
                var i, n = [],
                    o = this.find("a[href^='#']").each(function() {
                        n.push(t.$(this).attr("href"))
                    }),
                    a = t.$(n.join(",")),
                    r = this.options.cls,
                    l = this.options.closest || this.options.closest,
                    c = this,
                    d = function() {
                        i = [];
                        for (var n = 0; n < a.length; n++) t.Utils.isInView(a.eq(n), c.options) && i.push(a.eq(n));
                        if (i.length) {
                            var s, d = e.scrollTop(),
                                h = function() {
                                    for (var t = 0; t < i.length; t++)
                                        if (i[t].offset().top >= d) return i[t]
                                }();
                            if (!h) return;
                            c.options.closest ? (o.closest(l).removeClass(r), s = o.filter("a[href='#" + h.attr("id") + "']").closest(l).addClass(r)) : s = o.removeClass(r).filter("a[href='#" + h.attr("id") + "']").addClass(r), c.element.trigger("inview.uk.scrollspynav", [h, s])
                        }
                    };
                this.options.smoothscroll && t.smoothScroll && o.each(function() {
                    t.smoothScroll(this, c.options.smoothscroll)
                }), d(), this.element.data("scrollspynav", this), this.check = d, s.push(this)
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        var e = [];
        t.component("toggle", {
            defaults: {
                target: !1,
                cls: "uk-hidden",
                animation: !1,
                duration: 200
            },
            boot: function() {
                t.ready(function(i) {
                    t.$("[data-uk-toggle]", i).each(function() {
                        var e = t.$(this);
                        e.data("toggle") || t.toggle(e, t.Utils.options(e.attr("data-uk-toggle")))
                    }), setTimeout(function() {
                        e.forEach(function(t) {
                            t.getToggles()
                        })
                    }, 0)
                })
            },
            init: function() {
                var t = this;
                this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.getToggles(), this.on("click", function(e) {
                    t.element.is('a[href="#"]') && e.preventDefault(), t.toggle()
                }), e.push(this)
            },
            toggle: function() {
                if (this.totoggle.length) {
                    if (this.options.animation && t.support.animation) {
                        var e = this,
                            i = this.options.animation.split(",");
                        1 == i.length && (i[1] = i[0]), i[0] = i[0].trim(), i[1] = i[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.hasClass(this.options.cls) ? (this.totoggle.toggleClass(this.options.cls), this.totoggle.each(function() {
                            t.Utils.animate(this, i[0]).then(function() {
                                t.$(this).css("animation-duration", ""), t.Utils.checkDisplay(this)
                            })
                        })) : this.totoggle.each(function() {
                            t.Utils.animate(this, i[1] + " uk-animation-reverse").then(function() {
                                t.$(this).toggleClass(e.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(this)
                            }.bind(this))
                        })
                    } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);
                    this.updateAria()
                }
            },
            getToggles: function() {
                this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria()
            },
            updateAria: function() {
                this.aria && this.totoggle.length && this.totoggle.each(function() {
                    t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"))
                })
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        t.component("alert", {
            defaults: {
                fade: !0,
                duration: 200,
                trigger: ".uk-alert-close"
            },
            boot: function() {
                t.$html.on("click.alert.uikit", "[data-uk-alert]", function(e) {
                    var i = t.$(this);
                    if (!i.data("alert")) {
                        var n = t.alert(i, t.Utils.options(i.attr("data-uk-alert")));
                        t.$(e.target).is(n.options.trigger) && (e.preventDefault(), n.close())
                    }
                })
            },
            init: function() {
                var t = this;
                this.on("click", this.options.trigger, function(e) {
                    e.preventDefault(), t.close()
                })
            },
            close: function() {
                var t = this.trigger("close.uk.alert"),
                    e = function() {
                        this.trigger("closed.uk.alert").remove()
                    }.bind(this);
                this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({
                    height: 0,
                    opacity: 0,
                    "padding-top": 0,
                    "padding-bottom": 0,
                    "margin-top": 0,
                    "margin-bottom": 0
                }, this.options.duration, e) : e()
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        t.component("buttonRadio", {
            defaults: {
                target: ".uk-button"
            },
            boot: function() {
                t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(e) {
                    var i = t.$(this);
                    if (!i.data("buttonRadio")) {
                        var n = t.buttonRadio(i, t.Utils.options(i.attr("data-uk-button-radio"))),
                            o = t.$(e.target);
                        o.is(n.options.target) && o.trigger("click")
                    }
                })
            },
            init: function() {
                var e = this;
                this.find(e.options.target).attr("aria-checked", "false").filter(".uk-active").attr("aria-checked", "true"), this.on("click", this.options.target, function(i) {
                    var n = t.$(this);
                    n.is('a[href="#"]') && i.preventDefault(), e.find(e.options.target).not(n).removeClass("uk-active").blur(), n.addClass("uk-active"), e.find(e.options.target).not(n).attr("aria-checked", "false"), n.attr("aria-checked", "true"), e.trigger("change.uk.button", [n])
                })
            },
            getSelected: function() {
                return this.find(".uk-active")
            }
        }), t.component("buttonCheckbox", {
            defaults: {
                target: ".uk-button"
            },
            boot: function() {
                t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(e) {
                    var i = t.$(this);
                    if (!i.data("buttonCheckbox")) {
                        var n = t.buttonCheckbox(i, t.Utils.options(i.attr("data-uk-button-checkbox"))),
                            o = t.$(e.target);
                        o.is(n.options.target) && o.trigger("click")
                    }
                })
            },
            init: function() {
                var e = this;
                this.find(e.options.target).attr("aria-checked", "false").filter(".uk-active").attr("aria-checked", "true"), this.on("click", this.options.target, function(i) {
                    var n = t.$(this);
                    n.is('a[href="#"]') && i.preventDefault(), n.toggleClass("uk-active").blur(), n.attr("aria-checked", n.hasClass("uk-active")), e.trigger("change.uk.button", [n])
                })
            },
            getSelected: function() {
                return this.find(".uk-active")
            }
        }), t.component("button", {
            defaults: {},
            boot: function() {
                t.$html.on("click.button.uikit", "[data-uk-button]", function() {
                    var e = t.$(this);
                    e.data("button") || (t.button(e, t.Utils.options(e.attr("data-uk-button"))),
                        e.trigger("click"))
                })
            },
            init: function() {
                var t = this;
                this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function(e) {
                    t.element.is('a[href="#"]') && e.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")])
                })
            },
            toggle: function() {
                this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"))
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        var e, i = !1;
        t.component("dropdown", {
            defaults: {
                mode: "hover",
                remaintime: 800,
                justify: !1,
                boundary: t.$win,
                delay: 0
            },
            remainIdle: !1,
            boot: function() {
                var e = t.support.touch ? "click" : "mouseenter";
                t.$html.on(e + ".dropdown.uikit", "[data-uk-dropdown]", function(i) {
                    var n = t.$(this);
                    if (!n.data("dropdown")) {
                        var o = t.dropdown(n, t.Utils.options(n.attr("data-uk-dropdown")));
                        ("click" == e || "mouseenter" == e && "hover" == o.options.mode) && o.element.trigger(e), o.element.find(".uk-dropdown").length && i.preventDefault()
                    }
                })
            },
            init: function() {
                var i = this;
                this.dropdown = this.find(".uk-dropdown"), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.boundary = t.$(this.options.boundary), this.flipped = this.dropdown.hasClass("uk-dropdown-flip"), this.boundary.length || (this.boundary = t.$win), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), "click" == this.options.mode || t.support.touch ? this.on("click.uikit.dropdown", function(e) {
                    var n = t.$(e.target);
                    n.parents(".uk-dropdown").length || ((n.is("a[href='#']") || n.parent().is("a[href='#']") || i.dropdown.length && !i.dropdown.is(":visible")) && e.preventDefault(), n.blur()), i.element.hasClass("uk-open") ? (n.is("a:not(.js-uk-prevent)") || n.is(".uk-dropdown-close") || !i.dropdown.find(e.target).length) && i.hide() : i.show()
                }) : this.on("mouseenter", function() {
                    i.remainIdle && clearTimeout(i.remainIdle), e && clearTimeout(e), e = setTimeout(i.show.bind(i), i.options.delay)
                }).on("mouseleave", function() {
                    e && clearTimeout(e), i.remainIdle = setTimeout(function() {
                        i.hide()
                    }, i.options.remaintime)
                }).on("click", function(e) {
                    var n = t.$(e.target);
                    i.remainIdle && clearTimeout(i.remainIdle), (n.is("a[href='#']") || n.parent().is("a[href='#']")) && e.preventDefault(), i.show()
                })
            },
            show: function() {
                t.$html.off("click.outer.dropdown"), i && i[0] != this.element[0] && (i.removeClass("uk-open"), i.attr("aria-expanded", "false")), e && clearTimeout(e), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.trigger("show.uk.dropdown", [this]), t.Utils.checkDisplay(this.dropdown, !0), i = this.element, this.registerOuterClick()
            },
            hide: function() {
                this.element.removeClass("uk-open"), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), i && i[0] == this.element[0] && (i = !1)
            },
            registerOuterClick: function() {
                var n = this;
                t.$html.off("click.outer.dropdown"), setTimeout(function() {
                    t.$html.on("click.outer.dropdown", function(o) {
                        e && clearTimeout(e);
                        var s = t.$(o.target);
                        i && i[0] == n.element[0] && (s.is("a:not(.js-uk-prevent)") || s.is(".uk-dropdown-close") || !n.dropdown.find(o.target).length) && (n.hide(), t.$html.off("click.outer.dropdown"))
                    })
                }, 10)
            },
            checkDimensions: function() {
                if (this.dropdown.length) {
                    this.justified && this.justified.length && this.dropdown.css("min-width", "");
                    var e = this,
                        i = this.dropdown.css("margin-" + t.langdirection, ""),
                        n = i.show().offset(),
                        o = i.outerWidth(),
                        s = this.boundary.width(),
                        a = this.boundary.offset() ? this.boundary.offset().left : 0;
                    if (this.centered && (i.css("margin-" + t.langdirection, -1 * (parseFloat(o) / 2 - i.parent().width() / 2)), n = i.offset(), (o + n.left > s || n.left < 0) && (i.css("margin-" + t.langdirection, ""), n = i.offset())), this.justified && this.justified.length) {
                        var r = this.justified.outerWidth();
                        if (i.css("min-width", r), "right" == t.langdirection) {
                            var l = s - (this.justified.offset().left + r),
                                c = s - (i.offset().left + i.outerWidth());
                            i.css("margin-right", l - c)
                        } else i.css("margin-left", this.justified.offset().left - n.left);
                        n = i.offset()
                    }
                    o + (n.left - a) > s && (i.addClass("uk-dropdown-flip"), n = i.offset()), n.left - a < 0 && (i.addClass("uk-dropdown-stack"), i.hasClass("uk-dropdown-flip") && (this.flipped || (i.removeClass("uk-dropdown-flip"), n = i.offset(), i.addClass("uk-dropdown-flip")), setTimeout(function() {
                        (i.offset().left - a < 0 || !e.flipped && i.outerWidth() + (n.left - a) < s) && i.removeClass("uk-dropdown-flip")
                    }, 0)), this.trigger("stack.uk.dropdown", [this])), i.css("display", "")
                }
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        var e = [];
        t.component("gridMatchHeight", {
            defaults: {
                target: !1,
                row: !0
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-grid-match]", e).each(function() {
                        var e, i = t.$(this);
                        i.data("gridMatchHeight") || (e = t.gridMatchHeight(i, t.Utils.options(i.attr("data-uk-grid-match"))))
                    })
                })
            },
            init: function() {
                var i = this;
                this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (t.$win.on("load resize orientationchange", function() {
                    var e = function() {
                        i.match()
                    };
                    return t.$(function() {
                        e()
                    }), t.Utils.debounce(e, 50)
                }()), t.$html.on("changed.uk.dom", function() {
                    i.columns = i.element.children(), i.elements = i.options.target ? i.find(i.options.target) : i.columns, i.match()
                }), this.on("display.uk.check", function() {
                    this.element.is(":visible") && this.match()
                }.bind(this)), e.push(this))
            },
            match: function() {
                var e = this.columns.filter(":visible:first");
                if (e.length) {
                    var i = Math.ceil(100 * parseFloat(e.css("width")) / parseFloat(e.parent().css("width"))) >= 100;
                    return i ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this
                }
            },
            revert: function() {
                return this.elements.css("min-height", ""), this
            }
        }), t.component("gridMargin", {
            defaults: {
                cls: "uk-grid-margin"
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-grid-margin]", e).each(function() {
                        var e, i = t.$(this);
                        i.data("gridMargin") || (e = t.gridMargin(i, t.Utils.options(i.attr("data-uk-grid-margin"))))
                    })
                })
            },
            init: function() {
                t.stackMargin(this.element, this.options)
            }
        }), t.Utils.matchHeights = function(e, i) {
            e = t.$(e).css("min-height", ""), i = t.$.extend({
                row: !0
            }, i);
            var n = function(e) {
                if (!(e.length < 2)) {
                    var i = 0;
                    e.each(function() {
                        i = Math.max(i, t.$(this).outerHeight())
                    }).each(function() {
                        var e = t.$(this),
                            n = i - (e.outerHeight() - e.height());
                        e.css("min-height", n + "px")
                    })
                }
            };
            i.row ? (e.first().width(), setTimeout(function() {
                var i = !1,
                    o = [];
                e.each(function() {
                    var e = t.$(this),
                        s = e.offset().top;
                    s != i && o.length && (n(t.$(o)), o = [], s = e.offset().top), o.push(e), i = s
                }), o.length && n(t.$(o))
            }, 0)) : n(e)
        }
    }(UIkit),
    function(t) {
        "use strict";

        function e(e, i) {
            return i ? ("object" == typeof e ? (e = e instanceof jQuery ? e : t.$(e), e.parent().length && (i.persist = e, i.persist.data("modalPersistParent", e.parent()))) : e = "string" == typeof e || "number" == typeof e ? t.$("<div></div>").html(e) : t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + typeof e), e.appendTo(i.element.find(".uk-modal-dialog")), i) : void 0
        }
        var i, n = !1,
            o = t.$html;
        t.component("modal", {
            defaults: {
                keyboard: !0,
                bgclose: !0,
                minScrollHeight: 150,
                center: !1
            },
            scrollable: !1,
            transition: !1,
            init: function() {
                i || (i = t.$("body"));
                var e = this;
                this.transition = t.support.transition, this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function(t) {
                    t.preventDefault(), e.hide()
                }).on("click", function(i) {
                    var n = t.$(i.target);
                    n[0] == e.element[0] && e.options.bgclose && e.hide()
                })
            },
            toggle: function() {
                return this[this.isActive() ? "hide" : "show"]()
            },
            show: function() {
                return this.isActive() ? void 0 : (n && n.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), n = this, o.addClass("uk-modal-page").height(), this.element.addClass("uk-open"), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), t.Utils.checkDisplay(this.dialog, !0), this)
            },
            hide: function(e) {
                if (this.isActive()) {
                    if (!e && t.support.transition) {
                        var i = this;
                        this.one(t.support.transition.end, function() {
                            i._hide()
                        }).removeClass("uk-open")
                    } else this._hide();
                    return this
                }
            },
            resize: function() {
                var t = i.width();
                if (this.scrollbarwidth = window.innerWidth - t, i.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
                    var e = this.dialog.outerHeight(),
                        n = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                    e + n < window.innerHeight ? this.dialog.css({
                        top: window.innerHeight / 2 - e / 2 - n
                    }) : this.dialog.css({
                        top: ""
                    })
                }
            },
            updateScrollable: function() {
                var t = this.dialog.find(".uk-overflow-container:visible:first");
                if (t.length) {
                    t.css("height", 0);
                    var e = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                        i = this.dialog.outerHeight(),
                        n = window.innerHeight,
                        o = n - 2 * (20 > e ? 20 : e) - i;
                    return t.css("height", o < this.options.minScrollHeight ? "" : o), !0
                }
                return !1
            },
            _hide: function() {
                this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), o.removeClass("uk-modal-page"), i.css(this.paddingdir, ""), n === this && (n = !1), this.trigger("hide.uk.modal")
            },
            isActive: function() {
                return n == this
            }
        }), t.component("modalTrigger", {
            boot: function() {
                t.$html.on("click.modal.uikit", "[data-uk-modal]", function(e) {
                    var i = t.$(this);
                    if (i.is("a") && e.preventDefault(), !i.data("modalTrigger")) {
                        var n = t.modalTrigger(i, t.Utils.options(i.attr("data-uk-modal")));
                        n.show()
                    }
                }), t.$html.on("keydown.modal.uikit", function(t) {
                    n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide())
                }), t.$win.on("resize orientationchange", t.Utils.debounce(function() {
                    n && n.resize()
                }, 150))
            },
            init: function() {
                var e = this;
                this.options = t.$.extend({
                    target: e.element.is("a") ? e.element.attr("href") : !1
                }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function(t) {
                    t.preventDefault(), e.show()
                }), this.proxy(this.modal, "show hide isActive")
            }
        }), t.modal.dialog = function(i, n) {
            var o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
            return o.on("hide.uk.modal", function() {
                o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove()
            }), e(i, o), o
        }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', t.modal.alert = function(e, i) {
            t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(e) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""), t.$.extend({
                bgclose: !1,
                keyboard: !1
            }, i)).show()
        }, t.modal.confirm = function(e, i, n) {
            i = t.$.isFunction(i) ? i : function() {};
            var o = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(e) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""), t.$.extend({
                bgclose: !1,
                keyboard: !1
            }, n));
            o.element.find(".js-modal-confirm").on("click", function() {
                i(), o.hide()
            }), o.show()
        }
    }(UIkit),
    function(t) {
        "use strict";

        function e(e) {
            var i = t.$(e),
                n = "auto";
            if (i.is(":visible")) n = i.outerHeight();
            else {
                var o = {
                    position: i.css("position"),
                    visibility: i.css("visibility"),
                    display: i.css("display")
                };
                n = i.css({
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }).outerHeight(), i.css(o)
            }
            return n
        }
        t.component("nav", {
            defaults: {
                toggle: ">li.uk-parent > a[href='#']",
                lists: ">li.uk-parent > ul",
                multiple: !1
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-nav]", e).each(function() {
                        var e = t.$(this);
                        e.data("nav") || t.nav(e, t.Utils.options(e.attr("data-uk-nav")))
                    })
                })
            },
            init: function() {
                var e = this;
                this.on("click.uikit.nav", this.options.toggle, function(i) {
                    i.preventDefault();
                    var n = t.$(this);
                    e.open(n.parent()[0] == e.element[0] ? n : n.parent("li"))
                }), this.find(this.options.lists).each(function() {
                    var i = t.$(this),
                        n = i.parent(),
                        o = n.hasClass("uk-active");
                    i.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", i.parent()), n.attr("aria-expanded", n.hasClass("uk-open")), o && e.open(n, !0)
                })
            },
            open: function(i, n) {
                var o = this,
                    s = this.element,
                    a = t.$(i);
                this.options.multiple || s.children(".uk-open").not(i).each(function() {
                    var e = t.$(this);
                    e.data("list-container") && e.data("list-container").stop().animate({
                        height: 0
                    }, function() {
                        t.$(this).parent().removeClass("uk-open")
                    })
                }), a.toggleClass("uk-open"), a.attr("aria-expanded", a.hasClass("uk-open")), a.data("list-container") && (n ? (a.data("list-container").stop().height(a.hasClass("uk-open") ? "auto" : 0), this.trigger("display.uk.check")) : a.data("list-container").stop().animate({
                    height: a.hasClass("uk-open") ? e(a.data("list-container").find("ul:first")) : 0
                }, function() {
                    o.trigger("display.uk.check")
                }))
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        var e = {
                x: window.scrollX,
                y: window.scrollY
            },
            i = (t.$win, t.$doc),
            n = t.$html,
            o = {
                show: function(o) {
                    if (o = t.$(o), o.length) {
                        var s = t.$("body"),
                            a = o.find(".uk-offcanvas-bar:first"),
                            r = "right" == t.langdirection,
                            l = a.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
                            c = l * (r ? -1 : 1);
                        e = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }, o.addClass("uk-active"), s.css({
                            width: window.innerWidth,
                            height: window.innerHeight
                        }).addClass("uk-offcanvas-page"), s.css(r ? "margin-right" : "margin-left", (r ? -1 : 1) * a.outerWidth() * c).width(), n.css("margin-top", -1 * e.y), a.addClass("uk-offcanvas-bar-show"), this._initElement(o), i.trigger("show.uk.offcanvas", [o, a]), o.attr("aria-hidden", "false")
                    }
                },
                hide: function(i) {
                    var o = t.$("body"),
                        s = t.$(".uk-offcanvas.uk-active"),
                        a = "right" == t.langdirection,
                        r = s.find(".uk-offcanvas-bar:first"),
                        l = function() {
                            o.removeClass("uk-offcanvas-page").css({
                                width: "",
                                height: "",
                                "margin-left": "",
                                "margin-right": ""
                            }), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), n.css("margin-top", ""), window.scrollTo(e.x, e.y), t.$doc.trigger("hide.uk.offcanvas", [s, r]), s.attr("aria-hidden", "true")
                        };
                    s.length && (t.support.transition && !i ? (o.one(t.support.transition.end, function() {
                        l()
                    }).css(a ? "margin-right" : "margin-left", ""), setTimeout(function() {
                        r.removeClass("uk-offcanvas-bar-show")
                    }, 0)) : l())
                },
                _initElement: function(e) {
                    e.data("OffcanvasInit") || (e.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(e) {
                        var i = t.$(e.target);
                        if (!e.type.match(/swipe/) && !i.hasClass("uk-offcanvas-close")) {
                            if (i.hasClass("uk-offcanvas-bar")) return;
                            if (i.parents(".uk-offcanvas-bar:first").length) return
                        }
                        e.stopImmediatePropagation(), o.hide()
                    }), e.on("click", "a[href^='#']", function() {
                        var e = t.$(this),
                            i = e.attr("href");
                        "#" != i && (t.$doc.one("hide.uk.offcanvas", function() {
                            var e = t.$(i);
                            e.length || (e = t.$('[name="' + i.replace("#", "") + '"]')), t.Utils.scrollToElement && e.length ? t.Utils.scrollToElement(e) : window.location.href = i
                        }), o.hide())
                    }), e.data("OffcanvasInit", !0))
                }
            };
        t.component("offcanvasTrigger", {
            boot: function() {
                n.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(e) {
                    e.preventDefault();
                    var i = t.$(this);
                    i.data("offcanvasTrigger") || (t.offcanvasTrigger(i, t.Utils.options(i.attr("data-uk-offcanvas"))), i.trigger("click"))
                }), n.on("keydown.uk.offcanvas", function(t) {
                    27 === t.keyCode && o.hide()
                })
            },
            init: function() {
                var e = this;
                this.options = t.$.extend({
                    target: e.element.is("a") ? e.element.attr("href") : !1
                }, this.options), this.on("click", function(t) {
                    t.preventDefault(), o.show(e.options.target)
                })
            }
        }), t.offcanvas = o
    }(UIkit),
    function(t) {
        "use strict";

        function e(e, i, n) {
            var o, s = t.$.Deferred(),
                a = e,
                r = e;
            return n[0] === i[0] ? (s.resolve(), s.promise()) : ("object" == typeof e && (a = e[0], r = e[1] || e[0]), o = function() {
                i && i.hide().removeClass("uk-active " + r + " uk-animation-reverse"), n.addClass(a).one(t.support.animation.end, function() {
                    n.removeClass("" + a).css({
                        opacity: "",
                        display: ""
                    }), s.resolve(), i && i.css({
                        opacity: "",
                        display: ""
                    })
                }.bind(this)).show()
            }, n.css("animation-duration", this.options.duration + "ms"), i && i.length ? (i.css("animation-duration", this.options.duration + "ms"), i.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function() {
                o()
            }.bind(this)).css("display", "")) : (n.addClass("uk-active"), o()), s.promise())
        }
        var i;
        t.component("switcher", {
            defaults: {
                connect: !1,
                toggle: ">*",
                active: 0,
                animation: !1,
                duration: 200
            },
            animating: !1,
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-switcher]", e).each(function() {
                        var e = t.$(this);
                        e.data("switcher") || t.switcher(e, t.Utils.options(e.attr("data-uk-switcher")))
                    })
                })
            },
            init: function() {
                var e = this;
                if (this.on("click.uikit.switcher", this.options.toggle, function(t) {
                        t.preventDefault(), e.show(this)
                    }), this.options.connect) {
                    this.connect = t.$(this.options.connect), this.connect.find(".uk-active").removeClass(".uk-active"), this.connect.length && (this.connect.children().attr("aria-hidden", "true"), this.connect.on("click", "[data-uk-switcher-item]", function(i) {
                        i.preventDefault();
                        var n = t.$(this).attr("data-uk-switcher-item");
                        if (e.index != n) switch (n) {
                            case "next":
                            case "previous":
                                e.show(e.index + ("next" == n ? 1 : -1));
                                break;
                            default:
                                e.show(parseInt(n, 10))
                        }
                    }).on("swipeRight swipeLeft", function(t) {
                        t.preventDefault(), e.show(e.index + ("swipeLeft" == t.type ? 1 : -1))
                    }));
                    var i = this.find(this.options.toggle),
                        n = i.filter(".uk-active");
                    if (n.length) this.show(n, !1);
                    else {
                        if (this.options.active === !1) return;
                        n = i.eq(this.options.active), this.show(n.length ? n : i.eq(0), !1)
                    }
                    i.not(n).attr("aria-expanded", "false"), n.attr("aria-expanded", "true"), this.on("changed.uk.dom", function() {
                        e.connect = t.$(e.options.connect)
                    })
                }
            },
            show: function(n, o) {
                if (!this.animating) {
                    if (isNaN(n)) n = t.$(n);
                    else {
                        var s = this.find(this.options.toggle);
                        n = 0 > n ? s.length - 1 : n, n = s.eq(s[n] ? n : 0)
                    }
                    var a = this,
                        s = this.find(this.options.toggle),
                        r = t.$(n),
                        l = i[this.options.animation] || function(t, n) {
                            if (!a.options.animation) return i.none.apply(a);
                            var o = a.options.animation.split(",");
                            return 1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), e.apply(a, [o, t, n])
                        };
                    o !== !1 && t.support.animation || (l = i.none), r.hasClass("uk-disabled") || (s.attr("aria-expanded", "false"), r.attr("aria-expanded", "true"), s.filter(".uk-active").removeClass("uk-active"), r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), -1 == this.index && (this.index = 0), this.connect.each(function() {
                        var e = t.$(this),
                            i = t.$(e.children()),
                            n = t.$(i.filter(".uk-active")),
                            o = t.$(i.eq(a.index));
                        a.animating = !0, l.apply(a, [n, o]).then(function() {
                            n.removeClass("uk-active"), o.addClass("uk-active"), n.attr("aria-hidden", "true"), o.attr("aria-hidden", "false"), t.Utils.checkDisplay(o, !0), a.animating = !1
                        })
                    })), this.trigger("show.uk.switcher", [r]))
                }
            }
        }), i = {
            none: function() {
                var e = t.$.Deferred();
                return e.resolve(), e.promise()
            },
            fade: function(t, i) {
                return e.apply(this, ["uk-animation-fade", t, i])
            },
            "slide-bottom": function(t, i) {
                return e.apply(this, ["uk-animation-slide-bottom", t, i])
            },
            "slide-top": function(t, i) {
                return e.apply(this, ["uk-animation-slide-top", t, i])
            },
            "slide-vertical": function(t, i) {
                var n = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
                return t && t.index() > i.index() && n.reverse(), e.apply(this, [n, t, i])
            },
            "slide-left": function(t, i) {
                return e.apply(this, ["uk-animation-slide-left", t, i])
            },
            "slide-right": function(t, i) {
                return e.apply(this, ["uk-animation-slide-right", t, i])
            },
            "slide-horizontal": function(t, i) {
                var n = ["uk-animation-slide-right", "uk-animation-slide-left"];
                return t && t.index() > i.index() && n.reverse(), e.apply(this, [n, t, i])
            },
            scale: function(t, i) {
                return e.apply(this, ["uk-animation-scale-up", t, i])
            }
        }, t.switcher.animations = i
    }(UIkit),
    function(t) {
        "use strict";
        t.component("tab", {
            defaults: {
                target: ">li:not(.uk-tab-responsive, .uk-disabled)",
                connect: !1,
                active: 0,
                animation: !1,
                duration: 200
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-tab]", e).each(function() {
                        var e = t.$(this);
                        e.data("tab") || t.tab(e, t.Utils.options(e.attr("data-uk-tab")))
                    })
                })
            },
            init: function() {
                var e = this;
                this.on("click.uikit.tab", this.options.target, function(i) {
                    if (i.preventDefault(), !e.switcher || !e.switcher.animating) {
                        var n = e.find(e.options.target).not(this);
                        n.removeClass("uk-active").blur(), e.trigger("change.uk.tab", [t.$(this).addClass("uk-active")]), e.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"))
                    }
                }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uikit.tab", "a", function(i) {
                    i.preventDefault(), i.stopPropagation();
                    var n = t.$(this);
                    e.element.children(":not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")
                }), this.on("show.uk.switcher change.uk.tab", function(t, i) {
                    e.responsivetab.caption.html(i.text())
                }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, {
                    toggle: ">li:not(.uk-tab-responsive)",
                    connect: this.options.connect,
                    active: this.options.active,
                    animation: this.options.animation,
                    duration: this.options.duration
                })), t.dropdown(this.responsivetab, {
                    mode: "click"
                }), e.trigger("change.uk.tab", [this.element.find(this.options.target).filter(".uk-active")]), this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function() {
                    e.element.is(":visible") && e.check()
                }, 100)), this.on("display.uk.check", function() {
                    e.element.is(":visible") && e.check()
                })
            },
            check: function() {
                var e = this.element.children(":not(.uk-tab-responsive)").removeClass("uk-hidden");
                if (e.length) {
                    var i, n, o = e.eq(0).offset().top + Math.ceil(e.eq(0).height() / 2),
                        s = !1;
                    if (this.responsivetab.lst.empty(), e.each(function() {
                            t.$(this).offset().top > o && (s = !0)
                        }), s)
                        for (var a = 0; a < e.length; a++) i = t.$(e.eq(a)), n = i.find("a"), "none" == i.css("float") || i.attr("uk-dropdown") || (i.addClass("uk-hidden"), i.hasClass("uk-disabled") || this.responsivetab.lst.append('<li><a href="' + n.attr("href") + '" data-index="' + a + '">' + n.html() + "</a></li>"));
                    this.responsivetab[this.responsivetab.lst.children().length ? "removeClass" : "addClass"]("uk-hidden")
                }
            }
        })
    }(UIkit),
    function(t) {
        "use strict";
        t.component("cover", {
            defaults: {
                automute: !0
            },
            boot: function() {
                t.ready(function(e) {
                    t.$("[data-uk-cover]", e).each(function() {
                        var e = t.$(this);
                        e.data("cover") || t.cover(e, t.Utils.options(e.attr("data-uk-cover")))
                    })
                })
            },
            init: function() {
                if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function() {
                        this.check()
                    }.bind(this), 100)), this.on("display.uk.check", function() {
                        this.element.is(":visible") && this.check()
                    }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
                    var e = this.element.attr("src");
                    this.element.attr("src", "").on("load", function() {
                        this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                    }).attr("src", [e, e.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""))
                }
            },
            check: function() {
                this.element.css({
                    width: "",
                    height: ""
                }), this.dimension = {
                    w: this.element.width(),
                    h: this.element.height()
                }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
                var t, e, i = this.parent.width(),
                    n = this.parent.height();
                i / this.ratio < n ? (t = Math.ceil(n * this.ratio), e = n) : (t = i, e = Math.ceil(i / this.ratio)), this.element.css({
                    width: t,
                    height: e
                })
            }
        })
    }(UIkit), ! function(t) {
        var e;
        window.UIkit && (e = t(UIkit)), "function" == typeof define && define.amd && define("uikit-tooltip", ["uikit"], function() {
            return e || t(UIkit)
        })
    }(function(t) {
        "use strict";
        var e, i, n;
        return t.component("tooltip", {
            defaults: {
                offset: 5,
                pos: "top",
                animation: !1,
                delay: 0,
                cls: "",
                src: function() {
                    return this.attr("title")
                }
            },
            tip: "",
            boot: function() {
                t.$html.on("mouseenter.tooltip.uikit focus.tooltip.uikit", "[data-uk-tooltip]", function() {
                    var e = t.$(this);
                    e.data("tooltip") || (t.tooltip(e, t.Utils.options(e.attr("data-uk-tooltip"))), e.trigger("mouseenter"))
                })
            },
            init: function() {
                var i = this;
                e || (e = t.$('<div class="uk-tooltip"></div>').appendTo("body")), this.on({
                    focus: function() {
                        i.show()
                    },
                    blur: function() {
                        i.hide()
                    },
                    mouseenter: function() {
                        i.show()
                    },
                    mouseleave: function() {
                        i.hide()
                    }
                }), this.tip = "function" == typeof this.options.src ? this.options.src.call(this.element) : this.options.src, this.element.attr("data-cached-title", this.element.attr("title")).attr("title", "")
            },
            show: function() {
                if (i && clearTimeout(i), n && clearTimeout(n), this.tip.length) {
                    e.stop().css({
                        top: -2e3,
                        visibility: "hidden"
                    }).show(), e.html('<div class="uk-tooltip-inner">' + this.tip + "</div>");
                    var o = this,
                        s = t.$.extend({}, this.element.offset(), {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        }),
                        a = e[0].offsetWidth,
                        r = e[0].offsetHeight,
                        l = "function" == typeof this.options.offset ? this.options.offset.call(this.element) : this.options.offset,
                        c = "function" == typeof this.options.pos ? this.options.pos.call(this.element) : this.options.pos,
                        d = c.split("-"),
                        h = {
                            display: "none",
                            visibility: "visible",
                            top: s.top + s.height + r,
                            left: s.left
                        };
                    if ("fixed" == t.$html.css("position") || "fixed" == t.$body.css("position")) {
                        var u = t.$("body").offset(),
                            p = t.$("html").offset(),
                            f = {
                                top: p.top + u.top,
                                left: p.left + u.left
                            };
                        s.left -= f.left, s.top -= f.top
                    }
                    "left" != d[0] && "right" != d[0] || "right" != t.langdirection || (d[0] = "left" == d[0] ? "right" : "left");
                    var m = {
                        bottom: {
                            top: s.top + s.height + l,
                            left: s.left + s.width / 2 - a / 2
                        },
                        top: {
                            top: s.top - r - l,
                            left: s.left + s.width / 2 - a / 2
                        },
                        left: {
                            top: s.top + s.height / 2 - r / 2,
                            left: s.left - a - l
                        },
                        right: {
                            top: s.top + s.height / 2 - r / 2,
                            left: s.left + s.width + l
                        }
                    };
                    t.$.extend(h, m[d[0]]), 2 == d.length && (h.left = "left" == d[1] ? s.left : s.left + s.width - a);
                    var v = this.checkBoundary(h.left, h.top, a, r);
                    if (v) {
                        switch (v) {
                            case "x":
                                c = 2 == d.length ? d[0] + "-" + (h.left < 0 ? "left" : "right") : h.left < 0 ? "right" : "left";
                                break;
                            case "y":
                                c = 2 == d.length ? (h.top < 0 ? "bottom" : "top") + "-" + d[1] : h.top < 0 ? "bottom" : "top";
                                break;
                            case "xy":
                                c = 2 == d.length ? (h.top < 0 ? "bottom" : "top") + "-" + (h.left < 0 ? "left" : "right") : h.left < 0 ? "right" : "left"
                        }
                        d = c.split("-"), t.$.extend(h, m[d[0]]), 2 == d.length && (h.left = "left" == d[1] ? s.left : s.left + s.width - a)
                    }
                    h.left -= t.$body.position().left, i = setTimeout(function() {
                        e.css(h).attr("class", ["uk-tooltip", "uk-tooltip-" + c, o.options.cls].join(" ")), o.options.animation ? e.css({
                            opacity: 0,
                            display: "block"
                        }).animate({
                            opacity: 1
                        }, parseInt(o.options.animation, 10) || 400) : e.show(), i = !1, n = setInterval(function() {
                            o.element.is(":visible") || o.hide()
                        }, 150)
                    }, parseInt(this.options.delay, 10) || 0)
                }
            },
            hide: function() {
                this.element.is("input") && this.element[0] === document.activeElement || (i && clearTimeout(i), n && clearTimeout(n), e.stop(), this.options.animation ? e.fadeOut(parseInt(this.options.animation, 10) || 400) : e.hide())
            },
            content: function() {
                return this.tip
            },
            checkBoundary: function(e, i, n, o) {
                var s = "";
                return (0 > e || e - t.$win.scrollLeft() + n > window.innerWidth) && (s += "x"), (0 > i || i - t.$win.scrollTop() + o > window.innerHeight) && (s += "y"), s
            }
        }), t.tooltip
    });