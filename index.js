// code javascript LazyLoading
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove(' lazy ');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
})


//Show & Hide content
let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
togg1.addEventListener("click", () => {d1.classList.toggle('d1');})

let togg2 = document.getElementById('togg2');
let d2 = document.getElementById("d2");
togg2.addEventListener("click", () => {d2.classList.toggle('d2');})

let togg3 = document.getElementById('togg3');
let d3 = document.getElementById("d3");
togg3.addEventListener("click", () => {d3.classList.toggle('d3');})

let togg4 = document.getElementById('togg4');
let d4 = document.getElementById("d4");
togg4.addEventListener("click", () => {d4.classList.toggle('d4');})

let togg5 = document.getElementById('togg5');
let d5 = document.getElementById("d5");
togg5.addEventListener("click", () => {d5.classList.toggle('d5');})

let togg6 = document.getElementById('togg6');
let d6 = document.getElementById("d6");
togg6.addEventListener("click", () => {d6.classList.toggle('d6');})

let togg7 = document.getElementById('togg7');
let d7 = document.getElementById("d7");
togg7.addEventListener("click", () => {d7.classList.toggle('d7');})

let togg8 = document.getElementById('togg8');
let d8 = document.getElementById("d8");
togg8.addEventListener("click", () => {d8.classList.toggle('d8');})

let togg9 = document.getElementById('togg9');
let d9 = document.getElementById("d9");
togg9.addEventListener("click", () => {d9.classList.toggle('d9');})

let togg10 = document.getElementById('togg10');
let d10 = document.getElementById("d10");
togg10.addEventListener("click", () => {d10.classList.toggle('d10');})