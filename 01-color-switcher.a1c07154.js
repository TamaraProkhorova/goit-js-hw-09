!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");var r=null;function n(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.toggleAttribute("disabled"),t.addEventListener("click",(function(){r=setInterval(n,1e3),t.toggleAttribute("disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.toggleAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.a1c07154.js.map