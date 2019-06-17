Drupal.behaviors.revolution = {
    attach: function (context, settings) {


        for (var index in settings.aviators_revolution) {

            if (index == 'draggable') {
                continue;
            }

            var slider_settings = settings.aviators_revolution[index];
            slider_settings.attributes.fullwidth = 'off';
            if (slider_settings.attributes.fullwidth) {
                slider_settings.attributes.fullwidth = 'on';
            }

            jQuery(slider_settings.wrapper, context).revolution({
                delay: slider_settings.delay,
                navigationType: slider_settings.attributes.navigationType,
                navigationStyle: slider_settings.attributes.navigationStyle,
                onHoverStop: slider_settings.attributes.onHoverStop,
                touchenabled: slider_settings.attributes.touchenabled,
                startwidth: slider_settings.attributes.startwidth,
                startheight: slider_settings.attributes.startheight,
                fullWidth: slider_settings.attributes.fullwidth,
                shadow: slider_settings.attributes.shadow,
                navOffsetVertical: slider_settings.attributes.navOffsetVertical,
                navOffsetHorizontal: slider_settings.attributes.navOffsetHorizontal,
                navigationHOffset: slider_settings.attributes.navOffsetHorizontal,
                navigationVOffset: slider_settings.attributes.navOffsetVertical,
                thumbWidth: slider_settings.attributes.thumbWidth,
                thumbHeight: slider_settings.attributes.thumbHeight,
                thumbAmount: slider_settings.attributes.thumbAmount,
                navigationArrows: "nexttobullets"
            });

            if (settings.aviators_revolution.draggable) {
                jQuery('.component-draggable', slider_settings.wrapper).draggable({
                    containment: slider_settings.wrapper,

                    stop: function () {
                        var parentPos = jQuery(slider_settings.wrapper).position();
                        var identifier = jQuery(this).attr('id').split("-");

                        var x = Math.ceil(jQuery(this).position().left - parentPos.left);
                        var y = Math.ceil(jQuery(this).position().top - parentPos.top);

                        jQuery('.form-item-attributes-data-x input').val(x);
                        jQuery('.form-item-attributes-data-y input').val(y);

                        jQuery.ajax({
                            type: "POST",
                            url: "/revolution/component/" + identifier[1],
                            data: { 'data-x': x, 'data-y': y }
                        });
                    }
                });
            }
        }

    }
};
