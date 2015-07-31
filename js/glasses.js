$.fn.extend({
    glasses: function(a) {
        a = $.extend(true, {
            backGlass: '',
            frontGlass: '',
            glassType: 'circle', //circle, square
            glassName: 'mg',
            borderSize: 5,
            borderStyle: 'solid',
            borderColor: '#fff',
            cursor: false,
            glassSize: 180,
            logPosition: false,
        }, a);

        function show(e) {
            var c = $('#'+a.glassName),
                top = e.pageY,
                left = e.pageX,
                size = a.glassSize,
                borderTop = parseInt(c.css('border-top-width')),
                borderLeft = parseInt(c.css('border-left-width'));

            c.show();
            c.css({
                'position': 'absolute',
                'background-image': 'url('+a.frontGlass+')',
                'background-position-x': -(e.pageX + borderLeft - size / 2),
                'background-position-y': -(e.pageY + borderTop - size / 2),
                'width': size,
                'height': size,
                'left': e.pageX - size / 2,
                'top': e.pageY - size / 2,
                'border-radius': (a.glassType == 'circle') ? '50%': '0',
                'border-width': a.borderSize,
                'border-style': a.borderStyle,
                'border-color': a.borderColor,
            });
            $(this).find('*').css({
                'cursor': (a.cursor) ? 'pointer' : 'none',
            });
            if(a.logPosition)
               console.log('Y: '+e.pageY+'\nX: '+e.pageX);
        }

        function hide() {
            var c = $('#'+a.glassName);
            c.hide();
        }

        return this.each(function() {
            $(this).append('<div id="'+a.glassName+'"></div>');
            $(this).css({
                'position': 'relative',
                'overflow': 'hidden',
                'background-image': 'url('+a.backGlass+')',
            });
            $(this).mousemove(show);
            $('body').mouseout(hide);
        });
    }
});
