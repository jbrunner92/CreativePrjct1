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
                $('#setup').fadeOut();
                generateGame();
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
console.log("here");
        $(document).keydown(function(event) {
            var horiz_pos = parseInt($('#drgn_slyr_1').css('left'));
            var vert_pos = parseInt($('#drgn_slyr_1').css('top'));
            // left = 37
            // up = 38
            // right = 39
            // down = 40
            console.log(event.keyCode)
            if (event.keyCode == 37) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos + 25) + 'px' });
            } else if (event.keyCode == 38) {
                $('#drgn_slyr_1').animate({ 'top' : (horiz_pos - 25) + 'px' });
            } else if (event.keyCode == 39) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos + 25) + 'px' });
            } else if (event.keyCode == 40) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos - 25) + 'px' });
            }



        });
    }
}
