$(document).ready(init());

function init() {
    var dragonSlayer = {
        name: '',
        weapon: 'wimpy sword',
        maxHP: 25,
        hp: 25,
        atk: 5
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
                $('#welcome').html("<h2>Welcome, " + dragonSlayer.name + "!</h2><h4>Your village is under attack from a dragon who lives in the nearby hills. You have been chosen to slay the dragon and protect the villagers. In order to help you defeat the dragon you need to obtain a better sword.<h3>Reach the Sword of Destiny before time runs out<br><br>Use the arrow keys to move!</h3></h4>");
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
                    $('#sword_obtained').html("<h1>Congratulations! <br>You obtained the Sword of Destiny!</h1>");
                    dragonSlayer.maxHP = 50;
                    dragonSlayer.hp = 50;
                    dragonSlayer.atk = 15;

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

        $(document).one('keyup', function(event) {
            $('#scen_2_text').fadeOut();
            $('#hero_vs_drag').fadeIn();
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13') {
                var dragon = {
                    maxHP: 150,
                    hp: 150,
                    atk: 15
                };

                setTimeout(function() {
                    setInterval(function() {
                        dragonSlayer.hp -= dragon.atk;
                        var hp = (dragonSlayer.hp / dragonSlayer.maxHP) * 100;
                        $('#hero_curr_hp').width(hp + "%");

                        if (dragon.hp > 0) {
                            if (dragonSlayer.hp < 1) {
                                $('#scenario_2').fadeOut();
                                $('#victory').fadeIn();
                                $('#victory').html("<h1>Thou art Dead!<br><br>HA HA HA HA!<br><br>HA HA HA HA!</h1>")
                            }
                        }
                    }, 1000);
                }, 1000);

                $(document).keyup(function(e) {
                    var keycode = (e.keyCode ? e.keyCode : e.which);
                    if(keycode == '13'){
                        dragon.hp -= dragonSlayer.atk;
                        var hp = (dragon.hp / dragon.maxHP) * 100;
                        $('#drag_curr_hp').width(hp + "%");

                        if (dragonSlayer.hp > 0) {
                            if (dragon.hp < 1) {
                                $('#scenario_2').fadeOut();
                                $('#victory').fadeIn();
                                $('#victory').html("<h1>VICTORY!!!!<br><br>Huzzah!</h1><button type='button' id='play_again' class='button'><h2>PLAY AGAIN!</h2></button>");

                                $('#play_again').click(function() {
                                    location.reload();
                                })
                            }
                        }

                    }
                });
            }
        });
    }
    
    /*function scenarioThree(){
        $('scenario_3').fadeIn();
    }
    
    function scenarioFour(){
        $('scenario_4').fadeIn();
    }
    
    function scenarioFive(){
        $('scenario_5').fadeIn();
    }*/
    
}
