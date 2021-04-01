class Form {
    constructor() {
        this.greeting = createElement('h2');    
        this.yes = createButton('Yes');
        this.no = createButton('No');

    }

    display(){
        this.greeting.html("Do you think you are capable of surviving a zombie apoclypse on your own?")
        
        this.greeting.style("color", "red");
        this.greeting.style("fontSize", "30px");
        this.greeting.position(displayWidth/4 - 150, displayHeight/4 - 170);

        this.yes.style("width", "100px");
        this.yes.style("height", "50px");
        this.yes.style("color", "red");
        this.yes.style("fontSize", "40px");

        this.no.style("width", "100px");
        this.no.style("height", "50px");
        this.no.style("color", "red");
        this.no.style("fontSize", "40px");

        this.yes.position(displayWidth/2 - 150, displayHeight/2);
        this.no.position(displayWidth/2 + 150, displayHeight/2);

        this.yes.mousePressed(()=>{
            this.yes.hide();
            this.greeting.hide();
            this.no.hide();

            gameState = "Start";

            // stroke("red");
            // fill("red");
            // text("GOOD LUCK!!");
        })
      
        
    }
}