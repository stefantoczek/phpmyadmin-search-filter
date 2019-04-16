// ==UserScript==
// @name            phpmyadmin search results empty tables hider
// @author          stefantoczek
// @namespace       */phpmyadmin/db_search.php*
// @description     Script hides empty rows on phpmyadmin search results page
// @version	        0.1
// @include         */phpmyadmin/db_search.php*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
// @updateUrl https://gist.github.com
// ==/UserScript==


$(function () {
    let func = function () {
        let interval = 2500;
        if ($('.tblHeaders').length !== 0) {
            $('.noclick').each(function () {
                if ($(this).find('td > .ajax.browse_results').length === 0) {
                    $(this).hide();
                }
            });
        } else {
            interval = 300;
        }
        setTimeout(func, interval);
    };
    func();
});