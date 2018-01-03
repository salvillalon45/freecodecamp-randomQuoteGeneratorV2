var quotes = [
  {"id": 0, "color": "#B149DE", mewtwo: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.", bio: "Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back"},
  {"id": 1, "color": "#08D42A", khanacademy: "Failing is just another word for growing and you keep going. This is learning.", bio: "Khan Academy, providing a world-class education for anyone, anywhere"},
  {"id": 2, "color": "#6C8771", oak: "There is a time and place for everything, but not now!", bio: "Professor Oak, since Pokemon Red and Green"}
];
var html = "";
var count = 0;
var twitter_text = "";
var twitter_text_array = [];
var query_result = "";


function query_twitter_text()
{
  query_result = twitter_text.split(" ").join("%20");
  // for (var i = 0; i < twitter_text_array.length; i++)
  // {
  //   console.log(twitter_text_array[i]);
  // }
  // for (var word in twitter_text)
  // {
  //     console.log(twitter_text[word]);
  // }
  return query_result;
}


function twitter_relocation()
{
    location.href = "https://twitter.com/intent/tweet?text=" + query_twitter_text();
}

// FIXING THE ENTIRE FUNCTION SO THAT THERE ARE IS ONLY one
// ALSO THE AUTHORS ARE NOT HAVING THEIR FULL TITLE WHEN THEY APPEAR in THE TEXT


$(document).ready(function() {
  $("#new_quote").on("click", function() {
    $(".quote").hide();
    console.log("HOLA");
    var author_list = ["mewtwo", "khanacademy", "oak"];
    for (var key in quotes) {
      console.log(key);
      console.log("COUNT::::" + count);
      console.log("CHECK HERE:::" + author_list[count]);
      console.log("QUOTE::: " + quotes[count][author_list[count]]);
      console.log("COLOR::: " + quotes[count]["color"]);
      console.log(quotes[key][author_list[count]]);
      console.log("COUNT::::" + count);
      // if (count === 0)
      // {
        twitter_text = "";
        var background_color = quotes[count]["color"];
        var sheet = document.createElement('style');
        sheet.innerHTML = "body {background-color: " + background_color +"}";
        document.body.append(sheet);
        // var test = "hola";
        // console.log(test[0].toUpperCase() + test.substring(1));
        var quote = quotes[count][author_list[count]];

        // html += "<div class='text-center quote' style=' color:#B149DE'>";
        html += "<div class='text-center quote' style='color:" + background_color + ";'>";
        console.log("COLOR HTML:::" + html);
        html += "<h5>" + quote + "</h5>";

        var capitalize_author = author_list[count][0].toUpperCase() + author_list[count].substring(1);
        // console.log("capitalize_author:: " + capitalize_author);
        html += "<p> -" + capitalize_author + "</p>";

        $(".quote").html(quotes[key]).fadeIn(1000);
        $(".quote").html(html);
        html = "";

        var brief_bio = quotes[count]["bio"];
        // twitter_text += quote + " " +" Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back";
        twitter_text += quote + " " + brief_bio;
        query_twitter_text();
        break;
        //
        // twitter_text = "";
        // var sheet = document.createElement('style');
        // sheet.innerHTML = "body {background-color: #B149DE}";
        // document.body.append(sheet);
        // html += "<div class='text-center quote' style='color:#B149DE'>";
        // html += "<h5>" + quotes[0]["mewtwo"] + "</h5>";
        // html += "<p> -" + "Mewtwo" + "</p>";
        // $(".quote").html(quotes[key]).fadeIn(1000);
        // $(".quote").html(html);
        // html = "";
        // twitter_text += quotes[0]["mewtwo"] + " Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back";
        // query_twitter_text();
        // break;
    //   }
    //   else if (count === 1)
    //   {
    //     twitter_text = "";
    //     var sheet = document.createElement('style');
    //     sheet.innerHTML = "body {background-color: #08D42A}";
    //     document.body.append(sheet);
    //     html += "<div class='text-center quote' style='color: #08D42A;'>";
    //     html += "<h5>" + quotes[1]["khanacademy"] + "</h5>";
    //     html += "<p> -" + "Khan Academy" + "</p>";
    //     $(".quote").html(quotes[key]).fadeIn(1000);
    //     $(".quote").html(html);
    //     html = "";
    //     twitter_text += quotes[1]["khanacademy"] + " Khan Academy, providing a world-class education for anyone, anywhere";
    //     query_twitter_text();
    //     break;
    //   }
    //   else if (count === 2)
    //   {
    //     twitter_text = "";
    //     var sheet = document.createElement('style');
    //     sheet.innerHTML = "body {background-color: #6C8771}";
    //     document.body.append(sheet);
    //     html += "<div class='text-center quote' style='#6C8771'>";
    //     html += "<h5>" + quotes[2]["oak"] + "</h5>";
    //     html += "<p> -" + "Professor Oak" + "</p>";
    //     $(".quote").html(quotes[key]).fadeIn(1000);
    //     $(".quote").html(html);
    //     html = "";
    //     twitter_text += quotes[2]["oak"] + " Professor Oak, since Pokemon Red and Green";
    //     query_twitter_text();
    //     break;
    //   }
    }
    count++;
    console.log(count);
    if (count >= 3) {
      count = 0;
    }
  });
});
