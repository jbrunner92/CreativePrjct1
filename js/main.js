$(document).ready(init());

function init() {
    var userName = "";

    $('#play-button').click(function() {
        $('.main').fadeOut();
        $('#setup').fadeIn();

        $('#setup').keypress(function(event) {
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
        var scenario = Math.floor((Math.random() * 5) + 1);

        $('#scenario_' + scenario).fadeIn();
    }

    /*
    * Provide Scenario specific functions below within inti();
    */

}
