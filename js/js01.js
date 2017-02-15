/**
 * Created by hanghang on 2016/11/11.
 */
window.onload =function() {
    var oNavControl = document.getElementsByClassName("nav-list-control");
    var oDownDrop = document.getElementsByClassName("nav-list-ul");
    for (var i = 0; i < oNavControl.length; i++) {
        oNavControl[i].index= i;
        oNavControl[i].onmouseover = function () {
            for(var j = 0; j<oDownDrop.length; j++){
                oDownDrop[j].style.display='none';
            }
            oDownDrop[this.index].style.display='block';
        };
        oNavControl[i].onmouseout = function (){
            for(var j = 0; j<oDownDrop.length; j++){
                oDownDrop[j].style.display='none';
            }
        };
    }
    var oBanner =document.getElementsByClassName("banner-img")[0];
    var oBannerControl =document.getElementsByClassName("banner-control");
    for(var s = 0; s<oBannerControl.length; s++){
        oBannerControl[s].index= s;
        oBannerControl[s].onmouseover = function(){
            oBanner.style.left=this.index*-980+"px";
            for(var x=0; x<oBannerControl.length;x++){
                oBannerControl[x].style.backgroundColor= '';
            }
            oBannerControl[this.index].style.backgroundColor= '#f85623';
        };
    }

    // for(var z = 0; z<oBannerControl.length; z++) {
    //     oBannerControl[s].onmouseover = function(){
    //         oBannerControl.style.backgroundColor="";
    //     };

};