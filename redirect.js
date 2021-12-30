var titleArray = ["Please Wait Connecting.","Please Wait Connecting..","Please Wait Connecting...","Please Wait Connecting"];
        var N = titleArray.length;
        var i = 0;
        setInterval(func,1000);
        function func(){
            if (i == 4) {
                i = 0;
            }
            document.title = titleArray[i];
            i++;
        }
