"use strict";var navigation=[{link:"/index.html",name:"Home"},{link:"/user.html",name:"User"},{link:"/setings.html",name:"Settings"},{link:"/exit.html",name:"Exit"},{link:"/course-adviser.html",name:"Course Adviser"}],navUl=document.getElementById("nav-ul"),filename=window.location.pathname;function setActiveClass(n){return n===filename?'li class="active"':"li"}for(var element="",i=0;i<navigation.length;i++)element+="\n    <".concat(setActiveClass(navigation[i].link),'>\n        <a href="').concat(navigation[i].link,'">').concat(navigation[i].name,"</a>\n    </li>");navUl.innerHTML=element;
//# sourceMappingURL=main.js.map