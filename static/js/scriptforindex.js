$(document).ready(function(){
    // Add animation effect to testimonials
    $('.testimonial').hover(
        function(){
            $(this).addClass('animated pulse');
        },
        function(){
            $(this).removeClass('animated pulse');
        }
    );
});
