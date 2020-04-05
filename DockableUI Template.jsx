function DockableUI(thisObj) {
    var dialog = thisObj instanceof Panel ? thisObj : new Window("palette", "Script_Name", undefined, undefined, {resizeable: false});
    dialog.onResizing = dialog.onResize = function(){
        this.layout.resize();
        };
    return dialog;
    }

function showWindow(myWindow){
    if(myWindow instanceof Window){
        myWindow.center();
        myWindow.show();
        }
    if(myWindow instanceof Panel){
        myWindow.layout.layout(true);
        myWindow.layout.resize();
        }
    }
var win = DockableUI (this);

//Paste your Code Here










showWindow(win);