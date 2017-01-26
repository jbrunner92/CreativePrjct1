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
                $('#welcome').html("<h2>Welcome, " + dragonSlayer.name + "!</h2><h4>Your village is under attack from a dragon who lives in the nearby hills. You have been chosen to slay the dragon and protect the villagers. In order to help you defeat the dragon you need to obtain a better sword</h4>");
                $('#setup').fadeOut(function(){
                    $('#welcome').fadeIn();
                });
                setTimeout(function(){
                    $('#welcome').fadeOut();
                    generateGame();  
                },6000);
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
        setTimeout(function(){
            if ($('#sword_obtained').html() == "") {
                $('#race').fadeOut();
                $('#sword_obtained').fadeIn();
                $('#sword_obtained').html("<h1>Oh, no! You must fight the dragon with the " + dragonSlayer.weapon + "</h1>");

                setTimeout(function() {
                    $('#scenario_1').fadeOut(scenarioTwo());
                }, 3000);
            }
        }, 15000);


        $(document).keyup(function(event) {
            var horiz_pos = parseInt($('#drgn_slyr_1').css('left')),
                vert_pos = parseInt($('#drgn_slyr_1').css('top')),
                $drgnSlyr = $('#drgn_slyr_1'),
                $sword = $('#sword_1');

            if (event.keyCode == 37) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos - 50) + 'px' }, isCollide($drgnSlyr, $sword));
            } else if (event.keyCode == 38) {
                $('#drgn_slyr_1').animate({ 'top' : (vert_pos - 50) + 'px' }, isCollide($drgnSlyr, $sword));
            } else if (event.keyCode == 39) {
                $('#drgn_slyr_1').animate({ 'left' : (horiz_pos + 50) + 'px' }, isCollide($drgnSlyr, $sword));
            } else if (event.keyCode == 40) {
                $('#drgn_slyr_1').animate({ 'top' : (vert_pos + 50) + 'px' }, isCollide($drgnSlyr, $sword));
            }

            function isCollide(a, b) {
                var obj1 = {
                        top: a.position().top,
                        left: a.position().left,
                        bottom: a.position().top + a.height(),
                        right: a.position().left + a.width()
                    },
                    obj2 = {
                        top: b.position().top,
                        left: b.position().left,
                        bottom: b.position().top + a.height(),
                        right: b.position().left + a.width()
                    };

                if (!((obj1.bottom < obj2.top) || (obj1.top > obj2.bottom) || (obj1.right < obj2.left) || (obj1.left > obj2.right)) ) {
                    $drgnSlyr.weapon = "Sword of Destiny";
                    console.log("here")
                    $('#sword_obtained').html("<h1>Congratulations! <br>You obtained the Sword of Destiny!</h1>");
                    $('#race').fadeOut();
                    $('#sword_obtained').fadeIn();

                    setTimeout(function() {
                        $('#scenario_1').fadeOut(scenarioTwo());
                    }, 3000);
                }
            }

        });
    }
    
    function scenarioTwo(){
        $('#scenario_2').fadeIn();
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
