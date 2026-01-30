teller = 0;
let rundeNr = 1;


    
        function updatetimer(){
            teller++;
            document.getElementById("clock").innerHTML = teller;
        }

        const timer = setInterval(updatetimer, 1000);

        function starttimer(){
            timer = setInterval(updatetimer, 1000);
        }

        function stoptimer(){
            clearInterval(timer);
        }

        function runde(){
            rundeNr++;
            document.getElementById("runder").innerHTML += /*html*/`
            Runde ${rundeNr} er over! Tid: ${teller} sekunder
            <br>`;
            clearInterval(timer);
            starttimer();
        }

        setTimeout(stoptimer, 1200000);
