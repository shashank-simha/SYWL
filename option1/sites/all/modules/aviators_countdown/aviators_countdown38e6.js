Drupal.behaviors.countdown = {
    attach:function (context, settings) {
        if(!jQuery('.countdown').hasClass('applied')) {

            jQuery('.countdown', context).countdown({
                start: settings.aviators_countdown.start,
                end: settings.aviators_countdown.end,
                now: settings.aviators_countdown.now
            });

            jQuery('.countdown').addClass('applied');
        }
    }
}
