









// ------------------------------------------------------
//
// Variables needed
//
// ------------------------------------------------------
var quotes = [
  {"id": 0, "color": "#B149DE", mewtwo: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.", bio: "Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back"},
  {"id": 1, "color": "#08D42A", "Khan Academy": "Failing is just another word for growing and you keep going. This is learning.", bio: "Khan Academy, providing a world-class education for anyone, anywhere"},
  {"id": 2, "color": "#6C8771", "Professor Oak": "There is a time and place for everything, but not now!", bio: "Professor Oak, since Pokemon Red and Green"}
];
var html = "";
var count = 0;
var twitter_text = "";
var twitter_text_array = [];
var query_result = "";


// ------------------------------------------------------
//
// query_twitter_text() -> this function does the URL encoding
// and gives every space found in the quote a %20.
//
// ------------------------------------------------------
function query_twitter_text()
{
  query_result = twitter_text.split(" ").join("%20");
  return query_result;
}


// ------------------------------------------------------
//
// twitter_relocation() -> this function creates the
// href link needed when the users click the twitter button
//
// ------------------------------------------------------
function twitter_relocation()
{
    location.href = "https://twitter.com/intent/tweet?text=" + query_twitter_text();
}


// ------------------------------------------------------
//
// This function is activated when the user clicks the
// new quote button
//
// ------------------------------------------------------
$(document).ready(function() {
  $("#new_quote").on("click", function() {
    $(".quote").hide();
    var author_list = ["mewtwo", "Khan Academy", "Professor Oak"];

    for (var key in quotes) {

      // Variables neededd
      // ------------------------------------------------------
      twitter_text = "";
      var quote = quotes[count][author_list[count]];
      var capitalize_author = author_list[count][0].toUpperCase() + author_list[count].substring(1);
      var background_color = quotes[count]["color"];
      var brief_bio = quotes[count]["bio"];

      // This creates the style sheet needed to change the
      // background_color
      // ------------------------------------------------------
      var sheet = document.createElement('style');
      sheet.innerHTML = "body {background-color: " + background_color +"}";
      document.body.append(sheet);


      // Changing the html to have background_color
      // ------------------------------------------------------
      html += "<div class='text-center quote' style='color:" + background_color + ";'>";
      html += "<h5>" + quote + "</h5>";


      // Changing the html to have the author with the first
      // letter capitalize
      // ------------------------------------------------------
      html += "<p> -" + capitalize_author + "</p>";


      // This creates output the quotes and author of quote
      // to the user
      // ------------------------------------------------------
      $(".quote").html(quotes[key]).fadeIn(1000);
      $(".quote").html(html);
      html = "";

      // This creates the twitter text needed when the user wants
      // to share their quote on Twitter
      // ------------------------------------------------------
      twitter_text += quote + " " + brief_bio;
      query_twitter_text();
      break;
    }

    count++;
    if (count >= 3) {
      count = 0;
    }
  });
});
