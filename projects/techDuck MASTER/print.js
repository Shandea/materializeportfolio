$("#myPrint").click(function () {
    // confirmed click event is isolated 
    console.log("print")

    // append a temporary inline style attribute to right-side div
    //style include absolute position top left 0 and set width to 100% and height to 90% to prevent page break
    $(".hiddenContent").hide()
    $(".hiddenContent2").hide()
    $(".triangle2").hide()

    $("#right-side")
        .css({ "position": "absolute", "top": "0px", "left": "0px", "height": "100%", "width": "100%", "padding": "10px" })
    // print window
    window.print()

    //  Remove temporary inline style 
    $("#right-side").removeAttr("style")
    $(".hiddenContent").show()
    $(".hiddenContent2").show()
    $(".triangle2").show()

})