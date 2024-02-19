$(document).ready(function () {


    /* Add CSS via jQuery*/


    // $("#list_item_1").css({ "border": "1px solid black", "color": "red", "width": "120px" })
    // $("#list_item_2").css({ "background-color": "black", "color": "white" })
    // $("#main_ul").html()   // For inner HTML

    /* ADD EVENT LISTENER VIA JQUERY */
    // $("#main_ul").click(function () {
    //     $(this).css({ "color": "blue", "border": "1px solid black" })
    // })

    // $("#main_ul").dblclick(function () {
    //     $("#main_ul").css("color", "red")
    // })

    // $("#main_ul").contextmenu(() => {
    //     $("#main_ul").css({ "background": "blue", "color": "white" })
    // })

    // $("#main_ul").mouseenter(() => {
    //     console.log('Mouse Entered');
    //     $("#main_ul").css({ "background-color": "black", "color": "white" })
    // })

    // $("#main_ul").mouseleave(() => {
    //     $("#main_ul").css({ "background-color": "red", "color": "white" })
    // })

    /* ADD KEYBOARD EVENETS VIA JQUERY */
    // $("body").keypress(function () {
    //     $('body').css({ "background-color": "orange" })
    // })

    // $("body").keyup(function () {
    //     $('body').css({ "background-color": "green" })
    // })

    // $('body').keydown(function () {
    //     $('body').css({ "background-color": "red" })
    // })

    /* ON METHODS  */
    $("#main_ul").on({
        "click": function () {
            $("#main_ul").css({ "background-color": "red" })
        },

        "dblclick": function () {
            $("#main_ul").css({ "background-color": "yellow" })
        }
    })


    /* FORM EVENETS */
    $("#input_fname").focus(function () {
        $(this).css({ "background-color": "red", "color": "white" })
        // if("#input_fname".length===0){
        //     alert("Please enter your first name.")
        // }
    })

    $("#country").change(() => {
        $("#country").css({ "background-color": "yellow" })
    })

    $("#main_form").submit((e) => {

        e.preventDefault();

        let fname = $("#input_fname").val();
        let lname = $("#input_lname").val();
        let country = $("#country").val();

        console.log("hello-" + fname + "--" + lname + "--" + country)

        console.log($("#country").parent().css({ "background-color": "red" }));
    })

    // APPend and PREPEND

    $("#add_appendbtn").click(() => {
        console.log("click");
        $("#main_ul").append("<li>hey! i am append </li>")
    })

    $("#add_prependbtn").click(() => {
        console.log("click");
        // $("#main_ul").append("<li>hey! i am append </li>")
        $("#main_ul").prepend("<li>Hey! I am prepend </li>")
    })

    // CLONE 
    $("#add_emptybtn").click(() => {
        $(".sec_box_style h2").clone().appendTo(".copy_box_style")
    })


    // REPLACEWITH AND REPLACEALL
    $("#replace_btn").click(() => {
        $(".sec_box_style h2").replaceWith("Hey! i am replace function")
    })

    // WRAP METHOD
    $("#wrap_btn").click(() => {
        $(".copy_box_style p:last-child").wrap("<div class='sec_box_style'></div>")
    })

    $("#wrapall_btn").click(() => {
        $(".wrapall_box_style p").wrapAll("<div></div>")
    })

    $("#hide_btn").click(() => {
        $(".check_hide_box_style").slideToggle()
    })

    $("#show_btn").click(() => {
        $(".check_hide_box_style p").slideDown()
    })

    $("#aside_bar_btn").click(() => {
        $("aside").css({ "width": "200px" }).sideToggle();
    })
    // 

    $(document).mousemove((e) => {
        $('#find_xaxis').text("Your x" + e.pageX + " Y " + e.pageY);

        let x1 = e.pageX - 0;
        let y1 = e.pageY - 0;

        let x2 = e.pageX - 10;
        let y2 = e.pageY - 0;

        let x3 = e.pageX - 20;
        let y3 = e.pageY - 0;

        if ($('#cursor_div').is(e.pageY) === 0) {
            console.log("hey!");
        } else {

            $('#cursor_div').offset({ top: y1, left: x1 })
        }


        setTimeout(() => {

            $('#cursor_div2').offset({ top: y2, left: x2 })
            $('#cursor_div3').offset({ top: y3, left: x3 })
        }, 0.1)

    })



}); //main document ready 