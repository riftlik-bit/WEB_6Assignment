// Assignment 6: jQuery
// Student: Miras Kairatuly, IT 2504

// Task 0: Setup
$(document).ready(function() {
    console.log("jQuery is ready!");

    // ==========================================
    // Task 1: Selectors & CSS
    // ==========================================
    // Using ID selector
    $("#student-name").css("color", "darkblue");

    // Using Tag selector
    $("h2").css("color", "#333333");

    // Using Class selector
    $(".intro-text").css("font-style", "italic");

    // Change headline text
    var changed = false;
    $("#btn-change-text").click(function() {
        if (!changed) {
            $("#headline").text("Welcome to my Web Tech page!");
            changed = true;
        } else {
            $("#headline").text("IT Student at Astana IT University");
            changed = false;
        }
    });

    // Change style with .css()
    $("#btn-change-style").click(function() {
        $("#main-title").css("color", "red");
        $("#student-name").css("font-size", "20px");
    });

    // Light and Dark theme
    $("#btn-dark").click(function() {
        $("body").addClass("dark-mode");
    });

    $("#btn-light").click(function() {
        $("body").removeClass("dark-mode");
    });


    // ==========================================
    // Task 2: Visibility Methods
    // ==========================================
    $("#btn-hide").click(function() {
        $("#status-message, #fun-facts").hide();
    });

    $("#btn-show").click(function() {
        $("#status-message, #fun-facts").show();
    });

    $("#btn-toggle").click(function() {
        $("#status-message, #fun-facts").toggle();
    });


    // ==========================================
    // Task 3: Fade Methods
    // ==========================================
    $("#btn-fadeout").click(function() {
        $(".gallery-img").fadeOut();
    });

    $("#btn-fadein").click(function() {
        $(".gallery-img").fadeIn();
    });

    $("#btn-fadetoggle").click(function() {
        $(".gallery-img").fadeToggle();
    });


    // ==========================================
    // Task 4: Slide Methods
    // ==========================================
    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle();
    });


    // ==========================================
    // Task 5: Add & Remove Elements
    // ==========================================
    $("#btn-append").click(function() {
        var text = $("#skill-input").val();
        if (text.trim() === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skills-list").append("<li>" + text + "</li>");
        $("#skill-input").val("");
    });

    $("#btn-prepend").click(function() {
        var text = $("#skill-input").val();
        if (text.trim() === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skills-list").prepend("<li>" + text + "</li>");
        $("#skill-input").val("");
    });

    $("#btn-remove").click(function() {
        $("#skills-list li:last").remove();
    });


    // ==========================================
    // Task 6: Modifying Attributes
    // ==========================================
    var linkState = false;
    $("#btn-change-link").click(function() {
        if (!linkState) {
            $("#my-link").attr("href", "https://astanait.edu.kz");
            $("#my-link").text("AITU Site (https://astanait.edu.kz)");
            linkState = true;
        } else {
            $("#my-link").attr("href", "https://github.com/riftlik-bit");
            $("#my-link").text("GitHub Link (https://github.com/riftlik-bit)");
            linkState = false;
        }
    });


    // ==========================================
    // Task 7: Form Interaction
    // ==========================================
    $("#user-name").on("keyup", function() {
        var val = $(this).val();
        if (val === "") {
            $("#out-name").text("---");
        } else {
            $("#out-name").text(val);
        }
    });

    $("#user-email").on("keyup", function() {
        var val = $(this).val();
        if (val === "") {
            $("#out-email").text("---");
        } else {
            $("#out-email").text(val);
        }
    });


    // ==========================================
    // Task 8: Basic Animation
    // ==========================================
    var isAnimated = false;
    $("#btn-animate").click(function() {
        if (!isAnimated) {
            $("#bar-html").animate({ width: "90%" }, 800, function() {
                $(this).text("90%");
            });
            $("#bar-js").animate({ width: "75%" }, 800, function() {
                $(this).text("75%");
            });
            $("#bar-jquery").animate({ width: "80%" }, 800, function() {
                $(this).text("80%");
            });
            $(this).text("Reset Bars");
            isAnimated = true;
        } else {
            $(".bar").animate({ width: "0%" }, 600, function() {
                $(this).text("0%");
            });
            $(this).text("Animate My Skills");
            isAnimated = false;
        }
    });

});
