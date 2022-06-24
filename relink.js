var datalist = document.getElementById('datalist');

datalist.addEventListener("keyup", () => {
    if (event.keyCode == 13) {
        switch (datalist.value.lenght != 0) {
            case datalist.value == "Evil Time Part 1":
                window.location.replace("https://zakatsuky.github.io/LoreArknightsVF/prologue.html");
                break;
            case datalist.value == "Evil Time Part 2":
                window.location.replace("https://zakatsuky.github.io/LoreArknightsVF/ep1.html");
                break;
            case datalist.value == "Separated Hearts":
                window.location.replace("https://zakatsuky.github.io/LoreArknightsVF/ep2.html");
                break;
            default:
                if (datalist.value.length != 0) {
                    console.log(datalist.value);
                    datalist.value = '';
                }
                break;
        }

    }
}, false);