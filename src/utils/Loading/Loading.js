let dom ='<div class="loading-content"><div class="load-container csc-load"><div class="csc-loade">Loading...</div></div></div>';
var myLoading = new Object();
myLoading.show = function(){
    $('body').append(dom);
}
myLoading.hide = function(){
    $('body').remove(dom);
}
export default myLoading;