(function () {

    var para = document.querySelector("P");
    var img = document.querySelector("IMG");
    var name = document.querySelector("h1");
    var btnPrev = document.querySelector("#btnPrev");
    var btnNext = document.querySelector("#btnNext");
    var users = [];
    var i = 0;

    function User(img, name, review) {
        this.img = img;
        this.name = name;
        this.review = review
    }

    function currentUser(imgUrl, name, review) {
        let user = new User(imgUrl, name, review);
        users.push(user);
    }

    currentUser("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Renny Martin", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor fringilla nisi, at ornare libero cursus ut. Nullam iaculis, felis ut tempus convallis, leo velit accumsan enim, et congue sapien ex a ante. Nulla vitae pellentesque tortor. Sed imperdiet massa vitae libero mattis, et cursus lorem vulputate. Nunc vehicula, tellus a condimentum euismod, leo ligula maximus neque, sed lobortis tellus sem in nisi. In hac habitasse platea dictumst. Proin mattis iaculis placerat. Vivamus mattis diam sed auctor dapibus. In ut nisi in lectus mollis ultricies. Fusce ac ullamcorper ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ante elit, faucibus ut lectus ut, porttitor luctus nibh. Phasellus vel commodo tellus.");
    currentUser("https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "John Marvel", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor fringilla nisi, at ornare libero cursus ut. Nullam iaculis, felis ut tempus convallis, leo velit accumsan enim, et congue sapien ex a ante. Nulla vitae pellentesque tortor.");
    currentUser("https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Emelie Ray", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor fringilla nisi, at ornare libero cursus ut. Nullam iaculis, felis ut tempus convallis, leo velit accumsan enim, et congue sapien ex a ante. Nulla vitae pellentesque tortor.");

    btnPrev.addEventListener('click', function () {

        if (i === 0) {
            i = users.length;
        }

        i--;

        img.setAttribute("src", users[i].img);
        name.innerHTML = users[i].name;
        para.innerHTML = users[i].review;



    });

    btnNext.addEventListener('click', function () {

        if (i === users.length) {
            i = 0;
        }

        img.setAttribute("src", users[i].img);
        name.innerHTML = users[i].name;
        para.innerHTML = users[i].review;

        i++;

    });

})();

