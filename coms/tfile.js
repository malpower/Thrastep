var fs=require("fs");
function TFile(path)
{
    var buffer=new Buffer(0);
    this.open=function()
    {
        var that=this;
        this.status="OPENING";
        var rs=fs.createReadStream(path);
        rs.on("data",function(chunk)
        {
            buffer=Buffer.concat([buffer,chunk]);
        }).on("end",function()
        {
            that.content=buffer;
            that.length=buffer.length;
            that.status="OPENED";
            that.onopen();
        });
    };
    this.onopen=function(){};
    this.content=buffer;
    this.path=path;
    this.status="NOT OPEN";
}
