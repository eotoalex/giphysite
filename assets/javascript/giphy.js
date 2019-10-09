var apiKey = "&api_key=2qcWvAoAraVkB70bhiX5h3nVIWC0urFb";
var topics = ["Anime", "Horror", "Drama", "Romance", "Action"]

buttonGen();
defaultPageSetup ();

        //This variable places a value on every button the user creates. 
        var userInputButtons = 0;


        // Button click listeners

        $("button").on("click", function() {
        $(".card-header").text($(this).attr("data"));
        var buttonPressed = $(this).attr("data");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonPressed + apiKey;

        $.ajax({
            url:queryURL,
            method:"GET"
            }).then(function(response){

            cardGen(response)
            animateGifs ()
            
            
            })
            
        })

        $("#search-button").on("click", function(){
           
            var userSearch = $("#text-input").val().trim();
            $(".card-header").text(userSearch);
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + apiKey;

        $.ajax({
            url:queryURL,
            method:"GET"
            }).then(function(response){

                    cardGen(response);
                    
            
                    animateGifs ()
            })
            
            if(userSearch){
            userInput ()
            
            }
            
            else{
            $("#text-input").val("");
            }
        
            

        });

 
        // This functions turns gifs from still to animated and vice versa.
        function animateGifs (){
                        $("#text-input").val("");
                        $(".giffy-gif").on("click", function () {
                            var animate = $(this).attr("animated");
                            var still = $(this).attr("src");
                            
                            
                            if (still !== animate){
                                $(this).attr("src", animate);
                                $(this).attr("animated", still);
                            }else {
                                $(this).attr("src", still);
                                $(this).attr("animated", still);
                                
                            }
                        
                        });
        }

            // Card generator function.
            function cardGen (res){
            
                for(var i = 0; i < 10; i++){
                    var randIndexNum = Math.floor((Math.random() * 20) + 1);
                    var still = res.data[randIndexNum].images.original_still.url;
                    var gif = res.data[randIndexNum].images.original.url;
                    var title = res.data[randIndexNum].title;
                    var rate =res.data[randIndexNum].rating;
                    var gifDiv = $("<div>");
                    var cardTitle = $("<h5>");
                    var cardRating = $("<h5>");

                    var displayGifs = $("<img>");
                    
                    cardTitle.text(title);
                    cardRating.text("Rated: "+rate);
                    gifDiv.append(cardTitle);
                    displayGifs.addClass("giffy-gif");
                    displayGifs.attr("src", still)
                    displayGifs.attr("alt", title)
                    displayGifs.attr("animated", gif)
                    cardTitle.append(displayGifs);

                    $(".card-body").prepend(gifDiv);
                    cardTitle.append(cardRating);
                    
                    console.log(rate);

                };

            };

                // Taking input data from the user and dynamically creating buttons. 
                function userInput (){
            var searchedGifs = $("#text-input").val().trim();
            var createButton = $("<button>");
            createButton.addClass("topic-buttons");
            createButton.attr("data",searchedGifs);
            createButton.attr("value", userInputButtons);
            
            createButton.text(searchedGifs);
            $("body").prepend(createButton);
            topics.push(searchedGifs)

            userInputButtons++;
            console.log(topics)

                };

                    // Generate button elements.
                    function buttonGen (){
                    
                        for (var i = 0; i < topics.length; i++){
                        var createButton = $("<button>");
                        createButton.addClass("topic-buttons");
                        createButton.attr("data",topics[i]);
                        createButton.attr("value", i);
                        createButton.text(topics[i]);
                        $("body").prepend(createButton);
                    
                        }
                    
                    };

                        function defaultPageSetup (){
                            $(".card-header").text("Random Gifs");
                            var queryURL = "https://api.giphy.com/v1/gifs/search?q=random" + apiKey;

                            $.ajax({
                                url:queryURL,
                                method:"GET"
                                }).then(function(response){
                    
                                        cardGen(response);
                                        animateGifs();
                                })
                        }















