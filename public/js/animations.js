const barLines = document.querySelectorAll(".line");
const barLinesTop = document.querySelector(".line:nth-child(1)");
const barLinesBottom = document.querySelector(".line:nth-child(2)");
const menuBars = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu");
const menuLiList_doc = document.querySelectorAll(".li-list-doc");
const menuLiList_result = document.querySelectorAll(".li-list-result");
const menuLiBtn = document.querySelectorAll(".menu-li");
let fromTop = 40;
let menuActive = true;
barLinesTop.style.setProperty("top", 40 + "%")
barLinesBottom.style.setProperty("top", 60 + "%");
const showMenu = function () {
    if (menuActive) {
        barLinesTop.style.setProperty("top", 50 + "%");
        barLinesBottom.style.setProperty("top", 50 + "%");
        menu.classList.add("show_menu")
        setTimeout(function () {
            barLinesTop.style.setProperty("transform", "rotate(45deg)")
            barLinesBottom.style.setProperty("transform", "rotate(-45deg)")
        }, 300)
        setTimeout(function () {
            for (let i = 0; i < menuLiBtn.length; i++) {
                setTimeout(function () {
                    menuLiBtn[i].classList.add("li-open");
                }, i * 200)
            }
        }, 800)
        menuActive = !menuActive
    } else if (!menuActive) {
        barLinesTop.style.setProperty("transform", "rotate(0)")
        barLinesBottom.style.setProperty("transform", "rotate(0)")
        menu.classList.remove("show_menu")
        setTimeout(function () {
            barLinesTop.style.setProperty("top", 40 + "%")
            barLinesBottom.style.setProperty("top", 60 + "%");
        }, 300)
        for (let i = 0; i < menuLiList_result.length; i++) {
            menuLiList_result[i].classList.remove("show-li-list-a");
        }
        for (let i = 0; i < menuLiList_doc.length; i++) {
            menuLiList_doc[i].classList.remove("show-li-list-a");
        }
        for (let i = 0; i < menuLiBtn.length; i++) {
            menuLiBtn[i].classList.remove("li-open");
        }
        menuActive = !menuActive;
    }
}
menuBars.addEventListener("click", showMenu)
const showList = function () {
    if (this.classList.contains("docs")) {
        document.getElementById('results').style.setProperty("z-index", 0)
        document.getElementById('doc').style.setProperty("z-index", 2)
        for (let i = 0; i < menuLiList_doc.length; i++) {
            setTimeout(function () {
                menuLiList_doc[i].classList.add("show-li-list-a");
            }, i * 200)
        }
        for (let i = 0; i < menuLiList_result.length; i++) {
            menuLiList_result[i].classList.remove("show-li-list-a");
        }
    } else if (this.classList.contains("results")) {
        document.getElementById('doc').style.setProperty("z-index", 0)
        document.getElementById('results').style.setProperty("z-index", 2)
        for (let i = 0; i < menuLiList_doc.length; i++) {
            menuLiList_doc[i].classList.remove("show-li-list-a");
        }
        for (let i = 0; i < menuLiList_result.length; i++) {
            setTimeout(function () {
                menuLiList_result[i].classList.add("show-li-list-a");
            }, i * 200)
        }
        console.log(`results`)
    }
}
for (let i = 0; i < menuLiBtn.length; i++) {
    menuLiBtn[i].addEventListener("mouseover", showList)
}
