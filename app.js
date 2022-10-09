function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        // $('#sticky-phantom').show();
        //document.getElementById('#sticky-phantom').style.visibility = "hidden";
    } else {
        $('#sticky').removeClass('stick');
        // $('#sticky-phantom').hide();
       // document.getElementById('#sticky-phantom').style.visibility = "hidden";
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


document.getElementById("defaultOpen").click();
function openC(evt, cName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cName).style.display = "block";
    evt.currentTarget.className += " active";
  }