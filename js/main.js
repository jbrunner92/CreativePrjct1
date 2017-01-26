$(document).ready(init());

function init() {
    var userName = "";

    $('#play-button').click(function() {
        $('.main').fadeOut();
        $('#setup').fadeIn();

        $('#name-input').focus();
        $('#name-input').keypress(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                var nameInput = $('#name-input').val();
                userName = (nameInput !== "") ? nameInput : "Master Dragon Slayer";
                $('#setup').fadeOut();
                generateGame();
            }
        });
    });

    function generateGame() {
        var scenario =  Math.floor((Math.random() * 4) + 1);

        $('#scenario_' + scenario).fadeIn();
        //scenarioOne();
    }

    /*
    * Provide Scenario specific functions below within inti();
    */
    function scenarioOne() {
        $(body).keypress(function(e) {
            var horiz_pos = $('#dragon_slayer_1').css('left');
            var vert_pos = $('#dragon_slayer_1').css('top');
            console.log(horiz_pos);
            left = 37
            up = 38
            right = 39
            down = 40
            if (e.keyCode == 37) {
                $('#drgn_slyr_1').animate({ left: horiz_pos + 5 });
            } else if (e.keyCode == 38) {

            } else if (e.keyCode == 39) {

            } else if (e.keyCode == 40) {

            }



        });
    }
}
