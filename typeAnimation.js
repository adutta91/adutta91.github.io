// start the animation
$('#test').typeCharAnimation({
    initialText: "", // string
    initialDelay: 0,
    text: "Hello! I am a test typing thing", // string
    step: null, // function (char, pos)
    complete: null, // function ()
    blockUserInput: false,
    focus: true,
    reverse: false,
    matrixEffect: 0,
    passes: 1,
    matrixValues: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    charTime: function(char, pos) { return 200 }, // function (char, pos)
    spaceTime: function(char, pos) { return 200 }, // function (char, pos)
    isWhiteSpace: function(char, pos) { return 200 } // function (char, pos)
});
debugger;
// stop the animation
$('#test').typeCharAnimation('stop');
// stop and go to end
$('#test').typeCharAnimation('stop', {end: true});
// access (or change) the global defaults
$.typeCharAnimation.defaults;
