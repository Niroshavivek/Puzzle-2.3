$(document).ready(function () {
var id;
var count=1;
var data=[];
var data1=[];
 var inc=0;
for(var i=1;i<=16;i++)
{
	id= $("#"+i).attr('id');
	var rgb=$("#"+id).css("background-color");
        	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 			var a= (rgb && rgb.length === 4) ? "#" +
  			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
 			("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  		data.push(a);
}
$("*").focus(function(){
    id= parseInt($(this).attr('id'));
    data1.push(id);
    console.log(id);
    var aw =data1[inc];
    var eee=parseInt(aw);
    var ee=eee-1;
     console.log(ee);
    var eq=data[ee];
        if(count>=4){
         $("#"+aw).css("background",eq);
          inc+=1;
        }
 $("#"+id).css("background", "white");
    count+=1;
       
    });  




















});