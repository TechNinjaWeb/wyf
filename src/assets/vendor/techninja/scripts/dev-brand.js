/////////////////////////////////////////////////////////////////////////////
//  Menu Overlay
/////////////////////////////////////////////////////////////////////////////
var pageClasses = Array.prototype.slice.call(document.body.classList);
var isHome = pageClasses.indexOf('home-page') >= 0 ? true : false;

document.addEventListener('scroll', function(e) {
    var screenOffset = document.body.offsetHeight,
        yPos = window.scrollY,
        winHeight = window.innerHeight,
        overlay = document.querySelector('.menu-overlay'),
        dev_tag = document.querySelector('.dev-tag-wrapper');

    // Menu Overlay
    //if (isHome) menuOverlay(yPos, overlay);
    // Branding
    DevBrand(yPos, dev_tag, screenOffset, winHeight);
});

function menuOverlay(yPos, overlay) {
    // Reactive Menu
    if (yPos > 100) setVisibility(overlay, 'visible');
    if (yPos < 100) setVisibility(overlay, 'hidden');
}

function DevBrand(yPos, dev_tag, screenOffset, win) {
    // Reactive Dev Tag
    var factor = .98;

    // console.log(["Eval", (yPos + win) > screenOffset * factor, "start val", (yPos + win), "greater than", screenOffset * factor, "Win", win]);
    if ((yPos + win) > screenOffset * factor) setVisibility(dev_tag, 'visible');
    if ((yPos + win) < screenOffset * factor) setVisibility(dev_tag, 'hidden');
}

function setVisibility(el, visibility) {
    return el.style.visibility = visibility;
}