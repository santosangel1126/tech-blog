const sequelize = require('../config/connection');
const { User, Post} = require('../models');

const userdata = [
    {
        username: 'nedstark',
        email: 'headless@got.com',
        password: 'wolf01'
    },
    {
        username: 'naruto07',
        email: 'infintesorrow@hiddenleaf.com',
        password: 'ninetail09'
    },
    {
        username: 'ladiesManJiraya',
        email: 'OgSageToad@pervysage.com',
        password: 'narutoisthe1'
    },
    {
        username: 'copyNinja',
        email: 'Kakashi@Maskedninja.com',
        password: 'hiddenperv'
    },
    {
        username: 'FlameGod',
        email: 'Tanjiro@Demonslayer.org',
        password: 'Nezuko'
    },
    {
        username: 'ChidoriMaster1',
        email: 'Zenitsu@Demonslayer.org',
        password: 'Nezuko'
    },
    {
        username: 'BoarsHead',
        email: 'StrongerthenTanjiro@Demonslayer.org',
        password: 'DemonsSuck'
    },
    {
        username: 'Monkeyboy',
        email: 'kidGoku@Dragonball.com',
        password: 'dragonball4'
    },
    {
        username: 'Bulma_fit',
        email: 'SpoiledGirl@findmeabf.com',
        password: 'roshi'
    },
    {
        username: 'KrillinMonk',
        email: 'Diedtwice@loyalfriend.com',
        password:'Marron'
    },
    


   
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;