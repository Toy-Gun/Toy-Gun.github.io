var ChessWebAPI = require('chess-web-api');

var chessAPI = new ChessWebAPI();

chessAPI.getPlayer('BK877481')
    .then(function (response) {
        console.log('Player Profile', response.body);
    }, function (err) {
        console.error(err);
    });