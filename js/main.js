$(document).ready(init());

function init() {
    var dragonSlayer = {
        name: '',
        weapon: 'wimpy sword'
    };

    $('#play-button').click(function() {
        $('.main').fadeOut();
        $('#setup').fadeIn();

        $('#name-input').focus();
        $('#name-input').keypress(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                var nameInput = $('#name-input').val();
                dragonSlayer.name = (nameInput !== "") ? nameInput : "Master Dragon Slayer";
                $('#welcome').html("<h2>Welcome, " + dragonSlayer.name + "!</h2>");
                $('#setup').fadeOut();
                $('#welcome').fadeIn();
                setTimeout(function(){
                    $('#welcome').fadeOut();
                    generateGame();  
                },10000);
            }
        });
    });

    function generateGame() {
        $('#scenario_1').fadeIn();
        //scenarioOne();
    }

    /*
    * Provide Scenario specific functions below within inti();
    */
    function scenarioOne() {

        $(document).on('keypress', function(e) {
            var horiz_pos = $('#dragon_slayer_1').css('left');
            var vert_pos = $('#dragon_slayer_1').css('top');
            console.log(horiz_pos);
            // left = 37
            // up = 38
            // right = 39
            // down = 40
            if (e.keyCode == 37) {
                $('#drgn_slyr_1').animate({ left: horiz_pos + 5 });
            } else if (e.keyCode == 38) {

            } else if (e.keyCode == 39) {

            } else if (e.keyCode == 40) {

            }



        });
    }
    
    function scenarioTwo(){
        $('scenario_2').fadeIn();
    }
    
    function scenarioThree(){
        $('scenario_3').fadeIn();
    }
    
    function scenarioFour(){
        $('scenario_4').fadeIn();
    }
    
    function scenarioFive(){
        $('scenario_5').fadeIn();
    }
    
}
