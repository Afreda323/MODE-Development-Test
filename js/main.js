$(document).ready(function() {
    //Not sure how to use SQL or PHP, so I made a pretend Database
    //all emails and timestamps will be pushed to this array and logged to the console
    var mySQL = [];
    //check for scroll to animate NAV
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('nav').addClass("scrolled");
        } else {
            $('nav').removeClass("scrolled");
        }
    });
    //Form success or fail
    $("#form").submit(function(e) {
        e.preventDefault(); // Prevent Default Submission
        //regex email validation
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(".input").val())) {
          //ajax call to php
          $.ajax({
                  url: 'submit.php',
                  type: 'POST',
                  data: $(this).serialize(), // it will serialize the form data
                  dataType: 'html'
              })
              //handle success
              .done(function(data) {
                  $(".submit").addClass("success");
                  $(".submit").html('<i class="fa fa-check" aria-hidden="true"></i> Requested');
                  $(".confirm").empty().append("Thanks for signing up! <br> You’ll recieve an email with your invitation.");
                  //push data to array declared at the top
                  mySQL.push({
                      email: $(".input").val(),
                      stamp: Date.now()
                  });
                  console.log(mySQL);
              })
              //handle fail
              .fail(function() {
                  $(".submit").addClass("failed");
                  $(".confirm").empty().append("There was a problem with your Request: <br> Please try again")
              });
        //handle invalid email
        }else{
          $(".submit").html('REQUEST INVITE');
          $(".confirm").empty().append("There was a problem with your Request: <br> Valid email address not provided")
        }
    });

    //trigger lightbox
    $(".lb-trigger").click(function(e) {
        e.preventDefault();
        var src = $(this).attr("href");
        $(".lb-img").attr("src", src);
        $(".box").removeClass("hide");
    });
    $(".box").click(function() {
        $(".box").addClass("hide");
    });
})
