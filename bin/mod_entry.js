var menulib=new Object;




function InitMenu()
{
    var top=new nw.Menu({type: "menubar"});
    var menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "File",submenu: menu}));
    var m=new nw.MenuItem({label: "Open",key: "o",modifiers: "ctrl"});
    menulib["file-open"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "Save",key: "s",modifiers: "ctrl"});
    menulib["file-save"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "Save As",key: "s",modifiers: "ctrl+shift"});
    menulib["file-saveas"]=m;
    menu.append(m);
    m=new nw.MenuItem({type: "separator"});
    menu.append(m);
    m=new nw.MenuItem({label: "Quit",key: "q",modifiers: "ctrl"});
    menulib["file-quit"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Edit",submenu: menu}));
    m=new nw.MenuItem({label: "Undo",key: "z",modifiers: "ctrl"});
    menulib["edit-undo"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "Redo",key: "y",modifiers: "ctrl"});
    menulib["edit-redo"]=m;
    menu.append(m);
    m=new nw.MenuItem({type: "separator"});
    menu.append(m);
    m=new nw.MenuItem({label: "Preferences"});
    menulib["edit-preferences"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Analysis",submenu: menu}));
    m=new nw.MenuItem({label: "PE Header"});
    menulib["analysis-peheader"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "ELF Header"});
    menulib["analysis-elfheader"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Search",submenu: menu}));
    m=new nw.MenuItem({label: "Go To Address",key: "g",modifiers: "ctrl"});
    menulib["search-gotoaddress"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "Search Text",key: "f",modifiers: "ctrl"});
    menulib["search-searchtext"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "Search Hex",key: "f",modifiers: "ctrl+shift"});
    menulib["search-searchhex"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Tools",submenu: menu}));
    m=new nw.MenuItem({label: "Calculator"});
    menulib["tools-calculator"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Help",submenu: menu}));
    m=new nw.MenuItem({label: "View License"});
    menulib["help-viewlicense"]=m;
    menu.append(m);
    m=new nw.MenuItem({label: "View Developers"});
    menulib["help-viewdevelopers"]=m;
    menu.append(m);
    m=new nw.MenuItem({type: "separator"});
    menu.append(m);
    m=new nw.MenuItem({label: "Documents"});
    menulib["help-documents"]=m;
    menu.append(m);
    m=new nw.MenuItem({type: "separator"});
    menu.append(m);
    m=new nw.MenuItem({label: "About Thrastep"});
    menulib["help-aboutthrastep"]=m;
    menu.append(m);
    m=new nw.MenuItem({type: "separator"});
    menu.append(m);
    m=new nw.MenuItem({label: "Welcome Guide"});
    menulib["help-welcomeguide"]=m;
    menu.append(m);
    return top;
}







function Startup()
{
    var win=nw.Window.get();
    win.showDevTools();
    win.menu=InitMenu();
    menulib["help-aboutthrastep"].click=function()
    {
        sys.loadDialog("dlgAbout",{area: ["500px","300px"],title: "About Thrastep"},function(dom,winId)
        {
            dom.find("button").on("click",function(e)
            {
                layer.close(winId);
            });
        });
    };
    menulib["help-viewlicense"].click=function()
    {
        nw.Window.open("./Thrastep/license.html");
    };
    menulib["file-open"].click=function()
    {
        var dom=$("<input type='file' />");
        dom.on("change",function(e)
        {
            var file=dom[0].files[0];
            var file=new TFile(file.path);
            var bm=new BufferManager(file,function()
            {
                console.log("AAA");
                BuildPage(bm);
            });
        });
        dom.trigger("click");
    };

}
