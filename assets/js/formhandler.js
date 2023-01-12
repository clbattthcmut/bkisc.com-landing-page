window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");

    function success() {
        form.reset();
        status.innerHTML = "Thanks! Contact form is submitted successfully.";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success();
        } else {
            error();
        }
    };
    xhr.send(data);
}