	


var random_result;
var img;
var lost =0;
var win =1;
var previous = 0;

  var resetAndStart = function() {


  random_result = Math.floor(Math.random() * 101 ) + 19 ;

  $("#result").html('Random Result: ' + random_result);

  for (var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;


        $("#previous").html("Total Score:", previous)
  }

resetAndStart();

var reset = function () {

}

$(documemt).on('click', function(){

    var num = parseInt($(this).attr('data-random'));

      previous  += num;

      $("#previous").html("Total Score: " + previous)

      if (previous > random_result){
        
        lost--;

        ("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();

      }
      else if (previous === random_result) {

        win++;

        $("#win").html("You Win: " + win);

         previous = 0;

        resetAndStart();

      }

    }


