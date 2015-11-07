// chose your own adventure
$(document).ready(function() {

        // first click start
    $("#btn-begining-run, #btn-begining-feed, #btn-begining-climb").on('click', function() {
        var choice = $(this).attr('id');

        var replay = function() {
            $('#play-again').show();
            $('#play-again').on('click', function(){
              location.reload();                  
            });
        };
        var imageMsg = $('#messageImage img');  
     
        switch (choice) {
              
            //RUN choice is made    
            case 'btn-begining-run': 
                
                // Hide begining question & buttons. Ask if fast
                
                $('.begining').hide();
                $('.fast').show();
              
                // Useer chooses fast yes or no
                
                $("#btn-fast-yes, #btn-fast-no").on('click', function() {
                    var fast = $(this).attr('id');
                    // Remove fast buttons & question. Ask if rested
                    $('.fast').hide(); 
                    $('.rested').show();
                             
                    // User chooses rested yes or no
                    
                    $("#btn-rested-yes, #btn-rested-no").on('click', function() {
                        var rested = $(this).attr('id');
                        
                        // For success both fast and rested yes buttons must be clicked
                        
                        if ((fast === 'btn-fast-yes') && (rested === 'btn-rested-yes')) {
                            $('.rested').hide();          
                            $('p.run-success').show();
                            imageMsg.attr('src','images/leopard-sleep.jpg');
                            replay();
                        } else {
                            $('.rested').hide();                 
                            $('p.run-fail').show();
                            imageMsg.attr('src','images/leopard-attack.jpg');
                            replay();
                        }
                        
                    });
                });
                
                break; // Game end
                
            //FEED choice is made
                
            case 'btn-begining-feed': 
                
                // Hide begining question & buttons. Ask what kind of food
                
                $('.begining').hide();
                $('.food').show();

                // Click: user chooses type of food

                $("#btn-food-meat, #btn-food-fish, #btn-food-vegetables").on('click', function() {
                    var choiceFeed = $(this).attr('id');
                    $('.food').hide();
                    
                    // For success either meat or fish buttons must be clicked, not vegetable
                    
                    if ((choiceFeed === 'btn-food-meat') || (choiceFeed === 'btn-food-fish')) {
                        $('p.feed-success').show();
                        imageMsg.attr('src','images/leopard-sleep.jpg');
                        replay();
                    } else {
                        $('p.feed-fail').show();
                        imageMsg.attr('src','images/leopard-attack.jpg');
                        replay();
                    }
                    
                });
              
                break; // Game end
                
            //CLIMB TREE choice is made
            
            default: 
                $('.begining').hide();
                $('p.climb-fail').show();
                
                imageMsg.attr('src','images/leopard-attack.jpg');
                replay();
                break; // Game end
        }
    });
});