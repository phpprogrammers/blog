//Enabling drop down navigation for mobile screen sizes
$(function () {
    $("#nav").tinyNav({ header:'-- Navigation --' });
});
$(function () {
    if ($.cookie('first_visit') !== '0') { //Show modal as Cookie is not set
        $('#myModal').modal('show');
        $.cookie('first_visit', '0', {expires:2});  // now set cookie
    }
})
//Adjusting the sub-menu positions so they are centered
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        $("ul.ww-nav ul.dropdown-menu").each(function () {
            parentWidth = $(this).parent().innerWidth();
            menuWidth = $(this).innerWidth();
            margin = (parentWidth / 2 ) - (menuWidth / 2);
            margin = margin + "px";
            $(this).css("margin-left", margin);
        });
    }
}