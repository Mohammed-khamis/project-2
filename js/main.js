const body = $(`body`);

const header = $(`<header></header>`);

body.append(header);

const nav = $(`<nav></nav>`);

header.append(nav);

const logo = $(`<img src="../images/logo.png" alt="logo">`);

nav.append(logo);

const search = $(`<span class="search"><input type="text" name="search" placeholder="Search"></input>
                    <button>
                    </button></span>`);

nav.append(search);