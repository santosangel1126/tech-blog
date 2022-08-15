const { comment } = require('../models');

const commentdata = [
    {
        comment_text: "Christy Wake up ! Christy Wake up !  ",
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'im gonna make him an offer he cant refuse ',
        user_id: 9,
        post_id:2
    },
    {
        comment_text: 'Toto, ive a feeling were not in Kansas anymore',
        used_id: 8,
        post_is: 3
    },
    {
        comment_text: 'May the force be with you ',
        user_id: 2,
        post_id: 4 
    },
    {
        comment_text: 'Im the King of the world',
        user_id: 3,
        post_id:5
    },
    {
        comment_text: 'Ill be back ',
        user_id: 1,
        post_id:6
    },
    {
        comment_text: ' Roads ? where we goin we dont need roads!',
        user_id: 7,
        post_id:7
    },
    {
        comment_text: ' What we do in life echos in eternity',
        user_id: 2,
        post_id: 8
    },
    {
        comment_text: 'Hakuna Matata... it means know worries',
        used_id:3,
        post_id:9
    },
    {
        comment_text: ' Everyman dies, not everyman really lives',
        used_id:2,
        post_id:10
    },
    {
        comment_text: 'Youve got a friend in me ',
        user_id:9,
        post_id:11
    },
    {
        comment_text: 'That sound might sound boring,but i think the boring stuff is the stuff i remember the most',
        user_id:3,
        post_id:12
    },
    {
        comment_text: 'Just keep swimming',
        user_id:8,
        post_id: 13
    },
    {
        comment_text: ' As you Wish ',
        user_id: 6,
        post_id:14
    },
    {
        comment_text: 'were all pretty bizarre. Some of us are just better at hiding it, thats all',
        user_id:4
        post_id:15
    },
    {
        comment_text: 'Lifes moves pretty fast. if you dont stop and look around once in a while, you could miss it',
        user_id:5,
        post_id:16
    },
    {
        comment_text: 'Smilings my favorite',
        user_id:1,
        post_id:17
    },
    {
        comment_text: 'to thine own self be true ',
        user_id:3,
        post_id:18
    },
    {
        comment_text: "All you need is love",
        user_id:1,
        post_id:19
    },
    {
        comment_text: 'Carpe diem. Seize the day,boys. Make your lives extraodinary',
        user_id:7,
        post_id:20
    },
    
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;