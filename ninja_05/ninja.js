/**
 * Created by wudin on 2016/5/17.
 */
(function(){
    jQuery('#testButton').click(function(){
        var elem$ = jQuery('#testSubject');
        elem$.html('Loading...');

        setTimeout(function(){
            jQuery.ajax({
                url: "test.html",
                success: function(html){
                    assert(elem$,"We can see elem$, via the closure for this callback.");
                    elem$.html(html)
                }
            })
        },3000)
    });
})(jQuery);


function animateIt(elementId){
    var elem = document.getElementById(elementId);
    var tick = 0;

    var timer = setInterval(function(){
        if(tick < 100){
            elem.style.left = elem.style.top = tick + 'px';
            tick++;
        }else{
            clearInterval(timer);
            assert(tick == 100, "Tick accessed via a closure.");
            assert(timer, "Timer reference alse obtained via a closure.");
        }
    }, 10);
}
$("#boxButton").click(function () {
    animateIt('box')
});