$(document).ready(function () {
    $('#CalcButt').on('click', function(){     
      var num1 = $("#num1").val();
        
      var above;
      var average;
      var below;       
      var choice =  $( "#tester option:selected" ).text();       
      if (choice == "Select a service...")
      {
      $("#25per").text("Choose");
      $("#20per").text("a");
      $("#15per").text("Service!");
      
      
      }
      else if (choice == "Hair Stylist/Barbers" || choice == "Taxi Drivers" || choice == "Waiter/Waitress" || choice == "Massage Therapist" || choice == "Manicurist/Pedicurist")
      {
      above =  parseInt(num1) * 0.25 ;
      average = parseInt(num1) * 0.20 ;
      below = parseInt(num1) * 0.15 ;      
      $("#25per").text("$" + above);
      $("#20per").text("$" + average);
      $("#15per").text("$" + below);
      
      }
      else if (choice == "Animal Groomer")
      {
      average = parseInt(num1) * 0.20 ;
      $("#25per").text(" ");
      $("#20per").text("$" + average);
      $("#15per").text(" ");

      }
      else if (choice == "Bartender")
      {
      above =  parseInt(num1) * 0.20 ;
      average = parseInt(num1) * 0.15 ;
      below = parseInt(num1) * 0.10 ;      
      $("#25per").text("$" + above);
      $("#20per").text("$" + average);
      $("#15per").text("$" + below);
      $('#num1').prop('disabled', false);
      }
      else if (choice == "Bellhop")
      {
      average = parseInt(num1);      
      $('#num1').prop('disabled', false);
      $("#20per").text(" ");
      $("#15per").text("$" + average);
      }
    });
    $( "select" )
  .change(function() {
    var str = "";
    $( "#tester option:selected" ).each(function() {
      str = $( this ).text();
      $("#25per").text(" ");
      $("#20per").text(" ");
      $("#15per").text(" ");
	  var num1 = $("#num1").html("");
      if (str == "Select a service...")
      {
      $("#AboveAverage").text(" ");
      $("#Average").text(" ");
      $("#BelowAverage").text(" ");
      $( "input[type='number']" ).prop({
  disabled: true
});
	  $("#CalcButt").css("visibility", "hidden");
	  $("#main").css("visibility", "hidden");
	  $("#bill").css("visibility", "hidden");
	  

      }
      else if (str == "Hair Stylist/Barbers" || str == "Taxi Drivers" || str == "Waiter/Waitress" || str == "Massage Therapist" || str == "Manicurist/Pedicurist")
      {
      $("#AboveAverage").text("Above Average(25%):");
      $("#Average").text("Average(20%):");
      $("#BelowAverage").text("Below Average(15%):");
      $("#bill").text("Enter the amount of the bill:");
      $( "input[type='number']" ).prop({
  disabled: false
});
	  $("#CalcButt").css("visibility", "visible");
	  $("#main").css("visibility", "visible");
	  $("#bill").css("visibility", "visible");

      }
      else if (str == "Animal Groomer")
      {
      $("#AboveAverage").text(" ");
      $("#Average").text("Average(20%):");
      $("#BelowAverage").text("**Depending on difficulty of job**");
      $("#bill").text("Enter the amount of the bill:");
         $( "input[type='number']" ).prop({
  disabled: false
});
$("#CalcButt").css("visibility", "visible");
 $("#main").css("visibility", "visible");
	  $("#bill").css("visibility", "visible");

      }
      else if (str == "Bartender")
      {
      $("#AboveAverage").text("Above Average(20%):");
      $("#Average").text("Average(15%):");
      $("#BelowAverage").text("Below Average(10%):");
      $("#bill").text("Enter the amount of the bill:");
         $( "input[type='number']" ).prop({
  disabled: false
});
$("#CalcButt").css("visibility", "visible");
 $("#main").css("visibility", "visible");
	  $("#bill").css("visibility", "visible");

      }
      else if (str == "Bellhop")
      {
      $("#AboveAverage").text("Single bag:");
      $("#Average").text(" ");
      $("#BelowAverage").text("Multiple Bags($1 per bag):");
      $("#bill").text("Enter number of bags:");
      $("#25per").text("$2 ");
         $( "input[type='number']" ).prop({
  disabled: false
});
$("#CalcButt").css("visibility", "visible");
 $("#main").css("visibility", "visible");
	  $("#bill").css("visibility", "visible");

      }
 	
    
    });

      
  })
  .trigger( "change" );
    
});


