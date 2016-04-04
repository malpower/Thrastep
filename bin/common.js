var sys=new Object;
var dialogs;
var fs=require("fs");
var currentPoint=0;
var preferences=new Object;
preferences.pageSize=32;
function BuildPage(bm)
{
    var hex=bm.getPage(0,16*preferences.pageSize,"hex");
    for (var i=0;i<preferences.pageSize;i++)
    {
        var dom=$("<tr>");
        dom.append("<td class='RVA'>"+Buffer2Hex(i*16,8)+"</td>");
        for (var j=i*10;j<i*10+16;j++)
        {
            dom.append("<td contenteditable='true'>"+hex[j]+"</td>");
        }
        $(".tableHex tbody").append(dom);
    }
    var char=bm.getPage(0,preferences.pageSize*10,"char");
    for (var i=0;i<preferences.pageSize;i++)
    {
        var dom=$("<tr>");
        for (var j=i*10;j<i*10+16;j++)
        {
            var x=$("<td contenteditable='true'></td>");
            x.text(char[j]);
            dom.append(x);
        }
        $(".tableText tbody").append(dom);
    }
}



$(document).ready(function()
{//init here.
    fs.readFile("Thrastep/dialogs.html",function(err,html)
    {
        dialogs=$(html.toString());
        sys.status=new Object;
        sys.status.opened=false;
        sys.loadDialog=function(cls,options,callback)
        {
            options=options || {};
            callback=callback || function(){};
            var html=dialogs.find("."+cls).html();
            html="<div class=\""+cls+"\">"+html+"</div>";
            options.content=html;
            options.type=1;
            options.closeBtn=options.closeBtn || 2;
            var winId=layer.open(options);
            var dom=$("#layui-layer"+winId).find("."+cls);
            process.nextTick(function()
            {
                callback(dom,winId);
            });
        };



        Startup();
    });
});
