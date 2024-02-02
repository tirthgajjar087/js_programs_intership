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
        "click":function(){
            $("#main_ul").css({"background-color":"red"})
        },
        
        "dblclick":function(){
            $("#main_ul").css({"background-color":"yellow"})
        }
    })

    /* FORM EVENETS */
    $("#input_fname").focus(function(){
        $(this).css({"background-color":"red","color":"white"})

        // if("#input_fname".length===0){
        //     alert("Please enter your first name.")
        // }
    })

    $("#country").change(()=>{
        $("#country").css({"background-color":"yellow"})


    })

    $("#main_form").submit((e)=>{
        e.preventDefault();
        let fname=$("#input_fname").val();
        let lname=$("#input_lname").val();
        let country=$("#country").val();

        console.log("hello "+fname +" "+lname+" " +country)
    })



}) //main document ready 