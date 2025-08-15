

    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1629307216389').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') { 
                $module.find('button[type="submit"]').on('mouseover', function() {
                    try {
                        localStorage.setItem('gemId', '#m-1629307216389');
                    } catch(err) {}
                });

                var gemId = '';
                try {
                    var gemId = localStorage.getItem('gemId');
                } catch(err) {}

                if(gemId != '') {
                    var moduleId = '#' + $module.parent().attr('id');
                    if(gemId == moduleId) {
                        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

                        if(cbLink && cbLink != '') {
                            try {
                                localStorage.setItem('gemId', 'redirected');
                            } catch(err) {}

                            window.location.href = cbLink;
                        }
                    }
                } else {
                    var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

                    if(cbLink && cbLink != '') {
                        window.location.href = cbLink;
                    }
                }
            } 
        });
    
    
    
    