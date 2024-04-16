let ratings = $("#ratings-given");

$(".rate").click((e) => { ratings.text(e.target.innerText) });

$('#submit').click(() => {
    if (ratings.text().length != 0) {
        $('#ratings').addClass('d-none');
        $('#message').removeClass('d-none');
    } else { 
        alert("Please Rate Us, As Per Your Experience.") 
    }
});
