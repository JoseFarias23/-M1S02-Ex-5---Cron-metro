function start() {
    let startar = 0;
    const myInterval = setInterval(myTimer, 1000);
  
    function myTimer() {
      document.getElementById("timer").innerHTML = startar;
      if (startar == 11)
        stopFunction(),
          (document.getElementById("timer").innerHTML =
            "Seu tempo acabou!! Tente novamente!!");
      startar++;
    }
  
    function stopFunction() {
      clearInterval(myInterval);
    }
  }