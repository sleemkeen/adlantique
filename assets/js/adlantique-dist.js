"use strict";function listen(){var t;return(t=$("body")).on.apply(t,arguments)}function live(){var t;(t=$(window)).on.apply(t,arguments)}function getBackgroundSizes(){$("[data-background-size]").each(function(t,n){var e=$(this).data("background-size");$(this).css({backgroundSize:function(){return $(e).outerWidth()}})})}$(function(){var t=window.location.hash;t&&$(".tab-pane").length&&($(t).tab("show"),$('[href="'+t+'"], [data-toggle="'+t+'"]').tab("show")),listen("shown.bs.tab",function(t){window.location.hash=t.target.hash}),getBackgroundSizes(),$.fn.select2&&$(".select2").select2({minimumResultsForSearch:-1,templateResult:function(t){return t.text}})}),live("resize",function(){getBackgroundSizes()}),live("scroll resize",function(){var t=$(".navbar");30<$(window).scrollTop()?t.addClass("navbar-sticky"):t.removeClass("navbar-sticky")});