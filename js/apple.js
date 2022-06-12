

function Click(){

    var total1=parseInt(document.getElementById("total").value);
    var percent1=parseInt(document.getElementById("percent").value);
    var select1=document.getElementById("Select").value
    var button1=document.getElementById("Button")
    button1=(percent1*total1)/100;
    var yekun1=document.getElementById("yekun")
    document.getElementById("yekun").innerHTML=('Yekun Hesab :'+(button1+total1))
    document.getElementById("ayliq").innerHTML=('Ayliq Odenis :'+(button1+total1)/select1)
}
   




