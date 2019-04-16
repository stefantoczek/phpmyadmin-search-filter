// ==UserScript==
// @name            phpmyadmin search results empty tables hider
// @author          stefantoczek
// @namespace       */phpmyadmin/db_search.php*
// @description     Script hides empty rows on phpmyadmin search results page
// @version	        0.1
// @include         */phpmyadmin/db_search.php*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
// ==/UserScript==
$(function(){let t=function(){let e=2500;0!==$(".tblHeaders").length?$(".noclick").each(function(){0===$(this).find("td > .ajax.browse_results").length&&$(this).hide()}):e=300,setTimeout(t,e)};t()});