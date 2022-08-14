const { Post } =require('../models');

const postData = [
    {
        title: ' Game of thrones Headless Ned ',
        post_url: 'https://gameofthrones.fandom.com/wiki/Eddard_Stark',
        user_id:10
    },
    {
        title: ' Naruto Sage mode ',
        post_url: 'https://gamerant.com/naruto-sage-mode-users-ranked-strength/#:~:text=Sage%20Mode%20is%20a%20special,a%20league%20of%20their%20own.',
        user_id: '9'
    },
    {
        
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;