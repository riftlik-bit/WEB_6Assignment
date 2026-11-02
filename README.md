# Assignment #6: jQuery (Selectors, Effects, Animations)

**Name:** Miras Kairatuly  
**Group:** IT 2504  

---

## Links
- **GitHub Repository:** [https://github.com/riftlik-bit/WEB_6Assignment](https://github.com/riftlik-bit/WEB_6Assignment)
- **Live Page (GitHub Pages):** [https://riftlik-bit.github.io/WEB_6Assignment/](https://riftlik-bit.github.io/WEB_6Assignment/)

---

## Part 1. Getting Started with jQuery

### Task 0. Setup
Included jQuery from CDN:
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```
Tested with:
```javascript
$(document).ready(function() {
    console.log("jQuery is ready!");
});
```

### Task 1. Selectors & CSS
- Added heading "Welcome to My Portfolio", name, headline, and brief intro.
- Used tag (`$("h2")`), ID (`$("#student-name")`), and class (`$(".intro-text")`) selectors.
- Changed headline dynamically using `.text()`.
- Changed styles using `.css()`.
- Added buttons to toggle light and dark mode using `.addClass("dark-mode")` and `.removeClass("dark-mode")`.

![Part 1: Selectors and Light Theme](screenshots/part1_selectors.png)
*Task 1: Selectors and main layout*

![Part 1: Dark Mode](screenshots/part1_dark_theme.png)
*Task 1: Dark mode switched via jQuery*

---

## Part 2. jQuery Effects

### Task 2. Visibility Methods
- Created "About Me" section with status ("Currently learning jQuery!") and fun facts.
- Added buttons for `.hide()`, `.show()`, and `.toggle()`.

### Task 3. Fade Methods
- Added two images (workspace and hobby).
- Added buttons using `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`.

### Task 4. Slide Methods
- Added three headings: "My Favorite Music", "My Favorite Movie", "My Favorite Subject".
- Used `.slideToggle()` to open and close panels when clicking headings.

![Part 2: Effects and Slide Accordion](screenshots/part2_effects_slide.png)
*Task 2, 3, 4: Effects and slide panels*

---

## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
- List with initial skills: HTML, CSS, JavaScript, Git.
- Added input field with empty validation.
- Added buttons: `.append()` (Add skill), `.prepend()` (Prepend skill), `.remove()` (Remove last skill).

### Task 6. Modifying Attributes
- Added social link and button that changes `href` and text using `.attr()` and `.text()`.

### Task 7. Form Interaction
- Form with Name and Email inputs.
- Used `keyup` event to read value with `.val()` and display it live below with `.text()`.

![Part 3: DOM Manipulation and Form Live Preview](screenshots/part3_dom_and_form.png)
*Task 5, 6, 7: DOM manipulation and live form typing*

---

## Part 4. Animations

### Task 8. Basic Animation
- Created 3 skill level bars (HTML 90%, JS 75%, jQuery 80%).
- Initial width is `0%`.
- Clicking "Animate My Skills" runs `.animate({ width: "..." })`.
- Clicking again animates them back to `0%`.

![Part 4: Skill Bars Animation](screenshots/part4_animation.png)
*Task 8: Skill bars animation*

---

## Summary of Work Process
In this assignment, I practiced the basics of jQuery:
1. Connecting jQuery and checking `$(document).ready()`.
2. Selecting elements by tag, id, and class, and updating text and CSS styles.
3. Using visibility effects (hide, show, toggle, fade, slide).
4. Manipulating the DOM by appending, prepending, and removing elements, and updating attributes with `.attr()`.
5. Creating basic animations with `.animate()` for skill bars.
