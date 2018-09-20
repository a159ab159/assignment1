//循序播放陣列中指定的圖檔
var jsImg = new Array("img/01.jpg","img/02.jpg","img/03.jpg");
var jsImg_len = jsImg.length;  // 圖檔數量
// 要用另一個變數存，是不想在 function 中每次都要算陣列的大小
var i=2;                       //起始照片  2 為 003.jpg
//設定每兩秒執行一次sequentialImg() ，此行要在 function 之外
setInterval("sequentialImg()",2000);
function sequentialImg(){  //循序播放
    document.getElementById("my_div").innerHTML  = "<img src='"+jsImg[i]+"' width=400 height=400>";        
        i++;
        if(i>=jsImg_len)  i=0;
}