var sys=new Object;
var dialogs;
var fs=require("fs");
$(document).ready(function()
{//init here.
    fs.readFile("Thrastep/dialogs.html",function(err,html)
    {
        dialogs=$(html.toString());
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
