$(".one").click(() => { $("#ratings-given").text($('.one').text()) })
$(".two").click(() => { $("#ratings-given").text($('.two').text()) })
$(".three").click(() => { $("#ratings-given").text($('.three').text()) })
$(".four").click(() => { $("#ratings-given").text($('.four').text()) })
$(".five").click(() => { $("#ratings-given").text($('.five').text()) })

let spanElement = $("#ratings-given");
// console.log(spanElement.text().length)

$('#button').click(() => {
    if (spanElement.text().length !== 0) {
            $('#ratings').addClass('d-none');
            $('#message').removeClass('d-none');
        }
        else {
            alert("Please Select a ratings from the list to Continue")
        }
})
