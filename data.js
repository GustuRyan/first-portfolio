window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop < 860) {
      navbar.style.color = "rgb(52, 77, 57)";
    } else {
      navbar.style.backgroundColor = "initial";
      navbar.style.color = "white";
    }

    var navbar = document.getElementById("navbar2");
    if (document.documentElement.scrollTop > 860 && document.documentElement.scrollTop < 1560) {
        navbar.style.color = "rgb(52, 77, 57)";
      } else if (document.body.scrollTop > 860 || document.documentElement.scrollTop < 1160) {
        navbar.style.backgroundColor = "initial";
        navbar.style.color = "white";
      }
      else {
        navbar.style.backgroundColor = "initial";
        navbar.style.color = "white";
      }

      var navbar = document.getElementById("navbar3");
      if (document.documentElement.scrollTop > 1551) {
          navbar.style.color = "rgb(52, 77, 57)";
        } else {
          navbar.style.backgroundColor = "initial";
          navbar.style.color = "white";
        }
  };
