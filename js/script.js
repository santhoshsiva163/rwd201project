var mobileTemplateObj = {
    onload: function() {
        var self = this;
        self.registerEvents();
        self.loadCards();
    },
    registerEvents: function(){
        console.log("calling register events");
        $(".navbar-nav a").on("click", function(){
            $(".navbar-nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });    
    },
    loadCards: function(){
        console.log("calling load cards");
    }
    
}