var menulib=new Object;
function InitMenu()
{
    var top=new nw.Menu({type: "menubar"});
    var menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "File",submenu: menu}));
    var m=nw.MenuItem({label: "Open",key: "o",modifiers: "ctrl"});
    menulib["file-open"]=m;
    menu.append(m);
    m=nw.MenuItem({label: "Save",key: "s",modifiers: "ctrl"});
    menulib["file-save"]=m;
    menu.append(m);
    m=nw.MenuItem({label: "Save As",key: "s",modifiers: "ctrl+shift"});
    menulib["file-saveas"]=m;
    menu.append(m);
    m=nw.MenuItem({type: "separator"});
    menu.append(m);
    m=nw.MenuItem({label: "Quit",key: "q",modifiers: "ctrl"});
    menulib["file-quit"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Edit",submenu: menu}));
    m=nw.MenuItem({label: "Undo",key: "z",modifiers: "ctrl"});
    menulib["file-undo"]=m;
    menu.append(m);
    m=nw.MenuItem({label: "Redo",key: "y",modifiers: "ctrl"});
    menulib["file-redo"]=m;
    menu.append(m);
    m=nw.MenuItem({type: "separator"});
    menu.append(m);
    m=nw.MenuItem({label: "Preferences"});
    menulib["file-preferences"]=m;
    menu.append(m);
    menu=new nw.Menu;
    top.append(new nw.MenuItem({label: "Analysis",submenu: menu}));
    m=nw.MenuItem({label: "PE Header"});
    menulib["file-peheader"]=m;
    menu.append(m);
    m=nw.MenuItem({label: "ELF Header"});
    menulib["file-elfheader"]=m;
    menu.append(m);
    return top;
}







$(document).ready(function()
{
    var win=nw.Window.get();
    win.showDevTools();
    win.menu=InitMenu();
});
