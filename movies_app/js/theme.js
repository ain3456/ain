class themeController{
    constructor(){
        this.body = document.body;
        this.mode = "day";
    }
    setBodyColor(color){
        this.body.style.color = color;
    }
    setBackgroundColor(color){
        this.body.style.backgroundColor = color;
    }
    
    toggle(btn){
        this.body.classList.toggle("dark");
        if(this.body.classList.contains("dark")){
            this.setBodyColor("white");
            this.setBackgroundColor("black");

            btn.value = "night";
        }else{
            this.setBodyColor("black");
            this.setBackgroundColor("white");
            
            btn.value = "day";
        }
    }
}

const theme = new themeController();
function darkMode(btn,e){
    e.preventDefault();
    theme.toggle(btn);
}