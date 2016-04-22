/*
 * jQuery library for Accesible Dropdown Menubar
 *
 * Author: Ardian Perlaska
 */

$.fn.accesibleMenu = function(options) {
    "use strict";

    var self = $(this);

    var settings = $.extend({
        navSelector: self
    }, options);

    var allMenuItems = settings.navSelector.children('li');
    var allAnchorItems = settings.navSelector.children('li').children('a');
    var allAnchorItemsWithDropdown;

    /**
     * expandTheMenu - Method which expands the dropdown menu
     *
     * @param $thisAnchor
     * @param $thisList
     */

    function expandTheMenu($thisAnchor, $thisList) {
        allMenuItems.attr('aria-expanded', 'false');
        $thisList.attr('aria-expanded', 'true');
        $thisAnchor.focus();
    }

    /**
     * closeTheMenu - Method which closes the dropdown menu
     *
     * @param $thisAnchor
     * @param $thisList
     */

    function closeTheMenu($thisAnchor, $thisList) {
        $thisList.attr('aria-expanded', 'false');
        $thisAnchor.blur();
    }

    /**
     * A method to toggle the menu on click
     *
     * @param e     object to handle click events
     * @private
     */

    function _clickHandler(e) {
        var self = $(this),
            thisList = self.parent('li'),
            isNotExpanded = (thisList.attr('aria-expanded') == 'false');

        if (isNotExpanded)
            expandTheMenu(self, thisList);
        else
            closeTheMenu(self, thisList);
    }

    /**
     * A method to remove the current sub-menu via changing the focus
     *
     * @param event     object which handles keyCode events
     * @private
     */

    function _tabHandler(event) {
        if (event.keyCode === 9)
            allMenuItems.attr('aria-expanded', 'false');
    }

    allMenuItems.each(function (index, el) {
        var self = $(this);

        if (self.children('ul').length > 0) {
            self.addClass('has-sub-menu');
        }
    });

    allAnchorItemsWithDropdown = settings.navSelector.children('li.has-sub-menu').children('a');


    // init the click

    allAnchorItems
        .on('click', _clickHandler)
        .on('keyup', _tabHandler);

    // Prevent click of top-level menus with dropdowns

    allAnchorItemsWithDropdown
        .on('click', function (e) {
            e.preventDefault();
        });

    // On escape click, close all sub-menus

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27)
            closeTheMenu(allAnchorItems, allMenuItems);
    });


};






