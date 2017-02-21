var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function (data) {
    $('.quote-text').html(data.quoteText);
    if (data.quoteAuthor === '') {
        data.quoteAuthor = 'Unknown';
    }
    $('.quote-author').html(data.quoteAuthor);
};
$(document).ready(function () {
    $.getJSON(url, getQuote, 'jsonp');
});

$('#new-quote').click(function () {
    $.getJSON(url, getQuote, 'jsonp');
});


