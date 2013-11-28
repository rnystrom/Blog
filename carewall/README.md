Markup and CSS Notes
===

##### Active State

The CSS class **active** is used extensively to toggle state for many different items: checkboxes, navigation, button highlights, and modals being used the most often.

##### Increment Control

The HTML for a product increment control is the following:

    <div class="product-increment">
        <a class="remove-product" href="#">-</a>
        <a class="add-product" href="#">+</a>
        <input type="text" name="kit_1_count" value="20" />
    </div>

To enable error state on an incrementer, simply add the class **error** to the container.

##### Checkbox

The HTML for a checkbox is the following:

    <a class="checkbox" href="#">
        <img src="/img/checkmark.png" alt="Checkmark" />
        <input type="checkbox" name="document_1_name" checked />
    </a>

To enable selected state, add the class **active** to the container. Note: When first displaying the page, it is not necessary to add the attribute "checked" to the input. Simply add the **active** class to the container and the Javascript plugin will make sure that the input is checked (though there is no harm from adding the "checked" attribute either).

##### Grid

The grid system is composed of columns ranging from 1 to 12. This model is similar to the Bootstrap 2.0 grid.

[Bootstrap 2.3.0 Grid Docs](http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem)

##### Dropdown

Any element with the class dropdown will be initialized with the custom drop down plugin found in jquery.smartworks.js.

##### CSS Clearfix

If you run into any CSS layout issues with floated elements, simply add the class clearfix to the container.