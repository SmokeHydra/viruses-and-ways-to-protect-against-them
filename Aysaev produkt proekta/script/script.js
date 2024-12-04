$(document).ready(function(){
    $(".slider").bxSlider({
        pager: false,
        hideControlOnEnd: false,
    });

    $(".bxslider-team").bxSlider({
        controls: false
    });
    
    let containerEL = document.querySelector(".container-filter");
    let mixer = mixitup(containerEL);

    $(".primary-nav-trigger").on("click", function() {
      $(".menu-icon").toggleClass("is-clicked");
      $(".primary-nav").toggleClass("is-visible");
    });
   
    $(".primary-nav").on("click", "a", function() {
      $(".menu-icon").removeClass("is-clicked");
      $(".primary-nav").removeClass("is-visible");
    });

    $(".submit").on("click", function() {
      if($("#name").val() != "" && $("#email").val() != "") {
        fetch("send.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: $("#send_form").serialize()
        }).then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            $("#send_form").addClass("send_succes");
            setTimeout(() => $("#send_form").removeClass("send_success"), 4000); 
            }
            if (data.status === "error") {
              $("#send_form").addClass("send_fail");
              setTimeout(() => $("#send_form").removeClass("send_fail"), 4000); 
            }
        })
      } else {
        alert("Заполните все поля>:0!");
      }

    });

});


