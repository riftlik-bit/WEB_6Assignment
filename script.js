// ========================================================
// Assignment #6: jQuery (Selectors, Effects, Animations)
// Student: Miras Kairatuly | Group: IT 2504
// ========================================================

// Task 0: Setup - Ensure DOM is fully loaded
$(document).ready(function() {
    
    // Print confirmation in the console
    console.log("jQuery is ready!");

    // ========================================================
    // Part 1: Selectors & CSS (Task 1)
    // ========================================================

    // 1. Tag selector, ID selector, and Class selector demonstrations
    // Using ID selector to highlight student name slightly
    $("#student-name").css("letter-spacing", "1px");

    // Using Tag selector to style all main headings
    $("h2").css("font-weight", "600");

    // Using Class selector
    $(".intro-text").css("font-style", "italic");

    // 2. Dynamically update headline using .text()
    var isHeadlineChanged = false;
    $("#btn-change-headline").click(function() {
        if (!isHeadlineChanged) {
            $("#personal-headline").text("🚀 Enthusiastic Frontend Learner & Problem Solver!");
            isHeadlineChanged = true;
        } else {
            $("#personal-headline").text("Aspiring Web Developer & IT Student");
            isHeadlineChanged = false;
        }
    });

    // 3. Use .css() to change styling of selected elements
    $("#btn-style-profile").click(function() {
        $("#main-header h1").css({
            "color": "#e91e63",
            "text-transform": "uppercase"
        });
        $("#student-name").css({
            "color": "#009688",
            "font-size": "22px"
        });
    });

    // 4. Buttons to switch between Light and Dark themes
    $("#btn-theme-dark").click(function() {
        $("body").addClass("dark-mode");
    });

    $("#btn-theme-light").click(function() {
        $("body").removeClass("dark-mode");
    });


    // ========================================================
    // Part 2: jQuery Effects (Tasks 2, 3, 4)
    // ========================================================

    // Task 2: Visibility Methods (.hide(), .show(), .toggle())
    $("#btn-hide-status").click(function() {
        $("#status-message, #fun-facts").hide(400);
    });

    $("#btn-show-status").click(function() {
        $("#status-message, #fun-facts").show(400);
    });

    $("#btn-toggle-status").click(function() {
        $("#status-message, #fun-facts").toggle(400);
    });


    // Task 3: Fade Methods (.fadeIn(), .fadeOut(), .fadeToggle())
    $("#btn-fade-out").click(function() {
        $(".gallery-img").fadeOut(600);
    });

    $("#btn-fade-in").click(function() {
        $(".gallery-img").fadeIn(600);
    });

    $("#btn-fade-toggle").click(function() {
        $(".gallery-img").fadeToggle(600);
    });


    // Task 4: Slide Methods (.slideUp(), .slideDown(), .slideToggle())
    // Clickable headings to toggle panels beneath them
    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle(350);
    });

    // Slide up all panels
    $("#btn-slide-up-all").click(function() {
        $(".slide-panel").slideUp(350);
    });

    // Slide down all panels
    $("#btn-slide-down-all").click(function() {
        $(".slide-panel").slideDown(350);
    });


    // ========================================================
    // Part 3: DOM Manipulation with jQuery (Tasks 5, 6, 7)
    // ========================================================

    // Task 5: Add & Remove Elements (.append(), .prepend(), .remove())
    $("#btn-add-skill").click(function() {
        var skill = $("#new-skill-input").val().trim();
        // Prevent empty skills from being added
        if (skill === "") {
            alert("Please enter a skill before adding!");
            return;
        }
        $("#skills-list").append("<li>" + skill + "</li>");
        $("#new-skill-input").val(""); // Clear input field
    });

    $("#btn-prepend-skill").click(function() {
        var skill = $("#new-skill-input").val().trim();
        // Prevent empty skills from being added
        if (skill === "") {
            alert("Please enter a skill before adding!");
            return;
        }
        $("#skills-list").prepend("<li>" + skill + "</li>");
        $("#new-skill-input").val(""); // Clear input field
    });

    $("#btn-remove-skill").click(function() {
        // Remove the last item from the skills list
        if ($("#skills-list li").length > 0) {
            $("#skills-list li").last().remove();
        } else {
            alert("No skills left to remove!");
        }
    });


    // Task 6: Modifying Attributes (.attr())
    var isGitHubLink = true;
    $("#btn-change-attr").click(function() {
        if (isGitHubLink) {
            // Change destination to Astana IT University website
            $("#social-link").attr("href", "https://astanait.edu.kz");
            $("#social-link").text("👉 Visit Astana IT University Website (astanait.edu.kz)");
            $(this).text("Switch to GitHub Profile");
            isGitHubLink = false;
        } else {
            // Change destination back to GitHub Profile
            $("#social-link").attr("href", "https://github.com/riftlik-bit");
            $("#social-link").text("👉 Visit My GitHub Profile (https://github.com/riftlik-bit)");
            $(this).text("Switch to AITU Website");
            isGitHubLink = true;
        }
    });


    // Task 7: Form Interaction (.val() and .text())
    $("#input-name").on("input", function() {
        var enteredName = $(this).val();
        if (enteredName.trim() === "") {
            $("#live-name").text("[None entered yet]");
        } else {
            $("#live-name").text(enteredName);
        }
    });

    $("#input-email").on("input", function() {
        var enteredEmail = $(this).val();
        if (enteredEmail.trim() === "") {
            $("#live-email").text("[None entered yet]");
        } else {
            $("#live-email").text(enteredEmail);
        }
    });


    // ========================================================
    // Part 4: Animations (Task 8)
    // ========================================================

    // Task 8: Basic Animation with .animate()
    var isSkillsAnimated = false;

    $("#btn-animate-skills").click(function() {
        if (!isSkillsAnimated) {
            // Animate each skill bar to its target width
            $("#bar-html").animate({ width: "90%" }, 1000, function() {
                $(this).text("90%");
            });
            $("#bar-js").animate({ width: "75%" }, 1000, function() {
                $(this).text("75%");
            });
            $("#bar-jquery").animate({ width: "85%" }, 1000, function() {
                $(this).text("85%");
            });

            $(this).text("Reset Skill Bars (Animate to 0)");
            isSkillsAnimated = true;
        } else {
            // Animate back to 0 width
            $(".progress-bar").animate({ width: "0%" }, 800, function() {
                $(this).text("0%");
            });

            $(this).text("Animate My Skills");
            isSkillsAnimated = false;
        }
    });

});
