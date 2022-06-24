// code javascript LazyLoading
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
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
let style1 = document.getElementById("style");
let d1 = document.getElementById("d1");
style1.addEventListener("click", () => { d1.classList.toggle('d1'); })

let style2 = document.getElementById('style2');
let d2 = document.getElementById("d2");
style2.addEventListener("click", () => { d2.classList.toggle('d2'); })

let style3 = document.getElementById('style3');
let d3 = document.getElementById("d3");
style3.addEventListener("click", () => { d3.classList.toggle('d3'); })

let style4 = document.getElementById('style4');
let d4 = document.getElementById("d4");
style4.addEventListener("click", () => { d4.classList.toggle('d4'); })

let style5 = document.getElementById('style5');
let d5 = document.getElementById("d5");
style5.addEventListener("click", () => { d5.classList.toggle('d5'); })

let style6 = document.getElementById('style6');
let d6 = document.getElementById("d6");
style6.addEventListener("click", () => { d6.classList.toggle('d6'); })

let style7 = document.getElementById('style7');
let d7 = document.getElementById("d7");
style7.addEventListener("click", () => { d7.classList.toggle('d7'); })

let style8 = document.getElementById('style8');
let d8 = document.getElementById("d8");
style8.addEventListener("click", () => { d8.classList.toggle('d8'); })

let style9 = document.getElementById('style9');
let d9 = document.getElementById("d9");
style9.addEventListener("click", () => { d9.classList.toggle('d9'); })

let style10 = document.getElementById('style10');
let d10 = document.getElementById("d10");
style10.addEventListener("click", () => { d10.classList.toggle('d10'); })