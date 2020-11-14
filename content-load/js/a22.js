(function () {
    for (var i = 0; i < 1000000; i++) {
        document.querySelector("#div1");
    }
    document.querySelector("#div3").innerHTML = '我是DIV3我是DIV3我是DIV3我是DIV3我是DIV3'
    document.querySelector("#div3").style.background = 'cyan'
    document.querySelector("#div3").style.height = '50px';
})()