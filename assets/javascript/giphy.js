var apiKey = "&api_key=FE0K9W1wRMIZlBbC9i3hekFL1bNmkHZk";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=anime"+apiKey;
var topics = ["anime", "horror", "drama", "romance", "action"]
 var buttonData = "anime";

// Generate button elements.
function buttonGen (){
   
   for (var i = 0; i < topics.length; i++){
    var createButton = $("<button>");
    createButton.addClass("topic-buttons");
    createButton.attr("data",topics[i]);
    createButton.attr("value", i);
    createButton.text(topics[i]);
    $("body").append(createButton);

   }

};

$.ajax({
    url:queryURL,
    method:"GET"
    }).then(function(response){
    
    
     var x = response.data[9].url;
     console.log(x);
     $("image-test").attr("src",response.data[9].url )
    
    
    })

    // var button = $(buttonGen).attr("data");
    


// Create click event for the buttons.

// $(".topic-buttons").on("click", function(){
//     var userclick = $(this).val()
//     var elementData = $(this).attr("data");
    // $.ajax({
    //     url:queryURL,
    //     method:"GET"
    //     }).then(function(response){
    //     console.log(response);
    //     })
    
        // var generateGifs = $("<img>");
        // generateGifs.addClass(elementData,"-gifs");
        // generateGifs.attr("value", "gif-",i);
        // generateGifs.attr("src", response.data);
        // $("#text-input").append(generateGifs);


       



// })



// Create a function that checks user text input. Remember to use .trim and param() method to alter ajax request to get the appropriate data.





// Functions to be called.

buttonGen();




// Gif generater function.

// Evaluation of input field.

// user input object generator

// user input modified for ajax call.

