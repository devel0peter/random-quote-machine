var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function (data) {
    $('.quote-text').html(data.quoteText);
    var tweet = 'https://twitter.com/intent/tweet?text=' + '"' + data.quoteText + '"  - ' + data.quoteAuthor;
    if (data.quoteAuthor === '') {
        data.quoteAuthor = 'Unknown';
    }
    $('.quote-author').html(" - " + data.quoteAuthor + " - ");
    $('#tweet-it').attr('href', tweet);
};

$(document).ready(function () {
    $.getJSON(url, getQuote, 'jsonp');
});

$('#new-quote-btn').click(function () {
    $.getJSON(url, getQuote, 'jsonp');
});



