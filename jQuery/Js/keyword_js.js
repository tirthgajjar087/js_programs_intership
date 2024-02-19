$(document).ready(function () {
    $("body").keypress((e) => {

        let pressedKey = e.key;

        console.log(e.key);

        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let top = Math.floor(Math.random() * 610);
        let left = Math.floor(Math.random() * 1250);

        let rgbColor = `rgb(${red},${green},${blue})`;

        let $spanTag = $('<span></span>')

        $spanTag.text(pressedKey)

        $('body').append($spanTag)

        $spanTag.css({ "top": top, "left": left, "color": rgbColor, "font-size": "37px" })
    });
});
