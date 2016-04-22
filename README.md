# accesible-menu

A jQuery Library for making accesible dropdown menus.

* You can open / close the dropdown via clicking on the item
* You can navigate with TAB and Shift-TAB through the menus
* You can open the menu with ENTER, if you keep navigating with TAB and Shift-TAB, it'll close the menus when the focus reaches the other top level menu
* You can close the dropdows by navigating to the others or by clicking ESC

# Get Started

Create a simple HTML layout

# HTML

```html
<nav>
    <ul class="nav" role="menubar">
        <li aria-expanded="false" role="menuitem"><a href="#home-url">Home</a></li> 
        <li aria-expanded="false" role="menuitem">
            <a href="#menu-2">Menu item with dropdown</a>
            <ul>
                <li><a href="#submenu-1">Submenu 1</a></li>
                <li><a href="#submenu-2">Submenu 2</a></li>
                <li><a href="#submenu-3">Submenu 3</a></li>
            </ul>
        </li>
    </ul>
</nav>
```

Make sure you add aria-expanded="false" to each <li> element.

# CSS

Include the src/accesible-menu.css or just make sure to have the CSS below in your stylesheet:

```css
.nav > li[aria-expanded="true"] > .sub-menu {
    display: block;
}
```

# JavaScript

Please make sure to include latest jQuery

```html
<script src="src/js/jquery.min.js"></script>
```

and

```html
<script src="src/js/accesible-menu.min.js"></script>
```

After including everything, make sure to call the function to the desired DOM. It should be the <ul> parent element, in our case:

```javascript
$(document).ready(function() {
    $('.nav').accesibleMenu();
});
```
