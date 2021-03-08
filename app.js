/*!
 * By Ehsan Abafat
 * Copyright 2021
 */

const game = () => {
    const e = document.querySelector(".letsplay button"),
        t = document.querySelector(".letsplay"),
        s = document.querySelector(".match"),
        r = document.querySelector(".buttons"),
        c = document.querySelectorAll(".buttons button"),
        n = document.querySelector(".player-hand img"),
        o = document.querySelector(".computer-hand img"),
        a = document.querySelector(".winner");
    let l = 0,
        i = 0;
    const u = () => {
        document.querySelector(".playerScore p").innerHTML = parseInt(l), document.querySelector(".computerScore p").innerHTML = parseInt(i)
    };
    e.addEventListener("click", (() => {
        t.classList.add("fadeout"), s.classList.add("fadein"), r.classList.add("fadein")
    })), c.forEach((e => {
        e.addEventListener("click", (function () {
            let e = this.innerText;
            n.classList.add("shake"), o.classList.add("shake"), n.src = "./assets/rock.png", o.src = "./assets/rock.png", setTimeout((() => {
                (e => {
                    let t = "rock:paper:scissors".split(":")[Math.floor(3 * Math.random())],
                        s = "";
                    n.src = `./assets/${e}.png`, o.src = `./assets/${t}.png`, n.classList.remove("shake"), o.classList.remove("shake"), t === e ? (s = "Nobody", a.innerText = "Draw!") : "rock" === t ? ("paper" === e ? (l++, u(), s = "Player") : (i++, u(), s = "Computer"), a.innerText = s + " Wins!") : "paper" === t ? ("scissors" === e ? (l++, u(), s = "Player") : (i++, u(), s = "Computer"), a.innerText = s + " Wins!") : "scissors" === t && ("rock" === e ? (l++, u(), s = "Player") : (i++, u(), s = "Computer"), a.innerText = s + " Wins!")
                })(e)
            }), 1e3)
        }))
    }))
};
game();