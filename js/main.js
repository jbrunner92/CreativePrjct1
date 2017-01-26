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

        setTimeout(function() {
            scenarioOne();
        }, 1000);
    }

    /*
    * Provide Scenario specific functions below within inti();
    */
    function scenarioOne() {
        $(document).keyup(function(event) {
            var horiz_pos = parseInt($('#drgn_slyr_1').css('left'));
            var vert_pos = parseInt($('#drgn_slyr_1').css('top'));
            // left = 37
            // up = 38
            // right = 39
            // down = 40

            if (event.keyCode == 37) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos - 25) + 'px' });
            } else if (event.keyCode == 38) {
                $('#drgn_slyr_1').animate({ 'top' : (vert_pos - 25) + 'px' });
            } else if (event.keyCode == 39) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos + 25) + 'px' });
            } else if (event.keyCode == 40) {
                $('#drgn_slyr_1').animate({ 'top' : (vert_pos + 25) + 'px' });
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
