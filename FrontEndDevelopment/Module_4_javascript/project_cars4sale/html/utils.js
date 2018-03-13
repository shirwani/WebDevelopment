function insertSocialMediaButtons(d){
    let url    = "'" + d['url']    + "'"
    let title  = "'" + d['title']  + "'"
    let source = "'" + d['source'] + "'"

    let str = ''
            + insertFBShareButton(url)
            + insertTwitterButton(url)
            + insertEmailButton(url,title,source)
    return str
}

/***
 * Insert FB Share button
 ***/
function insertFBShareButton(url){
    return '<img style="cursor:pointer" height=15 src="./images/fb-share.png" onmouseover="FBShareButtonHover(this);" onmouseout="FBShareButtonUnHover(this);" onclick="openFBShareDialog('+url+');" />'
}
function openFBShareDialog(url){
    window.open('http://www.facebook.com/sharer.php?s=100&&p[url]=' + url, 'popup', 'width=600,height=600');
}
function FBShareButtonHover(element) {
    element.setAttribute('src', './images/fb-share-hover.png');
}
function FBShareButtonUnHover(element) {
    element.setAttribute('src', './images/fb-share.png');
}

/***
 * Insert Twitter button
 ***/
function insertTwitterButton(url){
    return '<img style="cursor:pointer" height=15 src="./images/twitter.png" onmouseover="TwitterButtonHover(this);" onmouseout="TwitterButtonUnHover(this);" onclick="openTwitterDialog('+url+');"/>'
}
function openTwitterDialog(url){
    window.open('https://twitter.com/intent/tweet?text='+url , 'popup', 'width=600,height=600');
}
function TwitterButtonHover(element) {
    element.setAttribute('src', './images/twitter-hover.png');
}
function TwitterButtonUnHover(element) {
    element.setAttribute('src', './images/twitter.png');
}

/***
 * Insert Email button
 ***/
function insertEmailButton(url, title, source){
    // remove single quotes
    let u = url.substring(1, url.length-1)
    let t = title.substring(1, title.length-1)
    let s = source.substring(1, source.length-1)

    return '<a href="mailto:?subject='+s+ ': ' +t+'&body='+u+'"><img style="cursor:pointer" height=15 src="./images/email.png" onmouseover="EmailButtonHover(this);" onmouseout="EmailButtonUnHover(this);"/></a>'
}
function sendEmail(url,title){

}
function EmailButtonHover(element) {
    element.setAttribute('src', './images/email-hover.png');
}
function EmailButtonUnHover(element) {
    element.setAttribute('src', './images/email.png');
}

/***
 * Hide overlay
 ***/
function overlay_off(div) {
    document.getElementById(div.id).style.display = "none";
}
