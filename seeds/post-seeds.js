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
        user_id: 9
    },
    {
        title: 'Narutos Grandpa pervy Sage',
        post_url: 'https://naruto.fandom.com/wiki/Jiraiya',
        user_id: 8
    },
    {
        title: 'Control C Kakashi Hatake = the copy ninja ',
        post_url:'https://naruto.fandom.com/wiki/Kakashi_Hatake',
        user_id: 7
    },
    {
        title: 'Cosplay Tanjiro Sword ',
        post_url: 'https://www.amazon.com/tanjiro-sword/s?k=tanjiro+sword',
        user_id: 6
    },
    {
        title: 'Zenitsu master of Only one',
        post_url: 'https://kimetsu-no-yaiba.fandom.com/wiki/Zenitsu_Agatsuma',
        user_id: 5
    },
    {
        title: 'The Origin of Inosuke',
        post_url: 'https://www.youtube.com/watch?v=MrbULNM2Rxg',
        user_id: 4 
    },
    {
        title: 'kid Goku ',
        post_url:"https://www.pinterest.com/pin/5770305752221221/",
        user_id: 3
    },
    {
        title: 'Bulma Cosplay',
        post_url: 'https://www.cbr.com/dragon-ball-bulma-cosplay/',
        user_id: 2
    },
    {
        title: 'Krillin Monk ',
        post_url: 'https://dragonball.fandom.com/wiki/Krillin',
        user_id: 1
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;