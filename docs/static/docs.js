function Toc(){let r=document.getElementById("toc");if(r){let t=r.querySelector("a[aria-current]");function e(){var e=r.querySelector(`a[href="${document.location.hash}"]`);e&&(t.removeAttribute("aria-current"),e.setAttribute("aria-current","true"))}e(),window.addEventListener("hashchange",e)}}document.addEventListener("DOMContentLoaded",Toc);