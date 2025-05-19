// jQuery ready start
$(document).ready(function() {
    // Prevent closing dropdown on click inside
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation(); // Stop the event from bubbling up
    });

    // Handle radio button changes
    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            // Remove 'active' class from all other radio buttons in the same group
            $('input[name=' + check_attr_name + ']').closest('.js-check').removeClass('active');
            // Add 'active' class to the selected radio button
            $(this).closest('.js-check').addClass('active');
        } else {
            $(this).closest('.js-check').removeClass('active');
        }
    });

    // Handle checkbox changes
    $('.js-check :checkbox').change(function () {
        if ($(this).is(':checked')) {
            // Add 'active' class to the checked checkbox
            $(this).closest('.js-check').addClass('active');
        } else {
            // Remove 'active' class from the unchecked checkbox
            $(this).closest('.js-check').removeClass('active');
        }
    });

    // Initialize Bootstrap tooltips if they exist
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }
});

// Registration success message fade-out
setTimeout(function(){
    $('#message').fadeOut('slow'); // Fade out the message after 3 seconds
}, 3000);
