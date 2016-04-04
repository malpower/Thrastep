function Buffer2Hex(v,len)
{
    var m=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    if (typeof(v)!="number")
    {
        return "--";
    }
    var res="";
    while (v!=0)
    {
        var x=v%16;
        res=m[x]+res;
        v-=x;
        v/=16;
    }
    if (res=="")
    {
        res="00";
    }
    if (res.length%2!=0)
    {
        res="0"+res;
    }
    if (len && res.length<len)
    {
        for (var i=res.length;i<len;i++)
        {
            res="0"+res;
        }
    }
    return res;
}

function BufferManager(file,cb)
{
    var buffer;
    this.getPage=function(startPoint,pageSize,type)
    {
        var value=buffer.slice(startPoint,startPoint+pageSize);
        var res;
        switch (type)
        {
            case "char":
                return value.toString();
            case "hex":
                res=new Array;
                for (var i=0;i<value.length;i++)
                {
                    res.push(Buffer2Hex(value[i]));
                }
                return res;
            default:
                return null;
        }
    }
    if (file.status!="OPENED")
    {
        file.onopen=function(chunk)
        {
            buffer=file.content;
            process.nextTick(cb);
        };
        file.open();
        return;
    }
    buffer=file.content;
}
