var Comment = require('../models/comment');

let comments = [{
    user: 'Batman',
    comment: 'Great post!'
}, {
    user: 'Robin',
    comment: 'Interesting ideas...'
}, {
    user: 'Joker',
    comment: 'Thanks, Batman!'
}, {
    user: 'Bruce Wayne',
    comment: 'I agree with Batman'
}]

// module.exports = function (socket) {
//     // Recent Comments
//     var cursor = Comment.find().cursor()
//     cursor.eachAsync(function (comment) {
//         socket.emit('comment.add', comment);
//     });
// };
