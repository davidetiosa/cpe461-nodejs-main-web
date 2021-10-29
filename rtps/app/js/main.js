const navigation = [
    {
        link: "/index.html",
        name: "Home"
    },
    {
        link: "/user.html",
        name: "User"
    },
    {
        link: "/setings.html",
        name: "Settings"
    },
    {
        link: "/exit.html",
        name: "Exit"
    },
    {
        link: "/course-adviser.html",
        name: "Course Adviser"
    }
]

const navUl = document.getElementById("nav-ul")
const filename = window.location.pathname

function setActiveClass(link) {
    if (link === filename) return `li class="active"`
    return "li"
}

let element = ""

for (let i = 0; i < navigation.length; i++) {
    element += `
    <${setActiveClass(navigation[i].link)}>
        <a href="${navigation[i].link}">${navigation[i].name}</a>
    </li>`
}

navUl.innerHTML = element