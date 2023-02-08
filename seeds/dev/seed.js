import bCrypt from 'bcryptjs';
// NPM Modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import config from '../../src/config/variables.config';

const { ADMIN_PASSWORD, PRIMEMINISTER_PASSWORD, PARLAMENT_PRESIDENT_PASSWORD } = config;

async function seed(pg) {
    // Deletes ALL existing entries
    await pg('users').truncate();
    // Deletes ALL existing entries with cascade.

    // Inserts seed entries

    await pg('users').insert([
        {
            fullname: 'Admin Admin',
            username: 'admin',
            password: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'admin',
            picture:'',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'admin',
            status: 'active'
        },
        {
            fullname: 'Parlament President',
            username: 'headofassembly',
            password: bCrypt.hashSync(PARLAMENT_PRESIDENT_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'parlamentpresident',
            picture:'',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'parlamentpresident',
            status: 'active'
        },
        {
            fullname: 'Նիկոլ Փաշինյան',
            username: 'prime',
            password: bCrypt.hashSync(PRIMEMINISTER_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'ՀՀ Վարչապետ',
            picture:'http://34.125.131.155:3000/upload/9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'primeminister',
            status: 'active'
        },

        {
            fullname: 'Մհեր Գրիգորյան',
            username: 'grigoryan',
            password: '',
            position: 'ՀՀ փոխվարչապետ',
            picture:'http://34.125.131.155:3000/upload/ead51cdf-7e3f-40e1-9a18-b086fc73ca42.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },

        {
            fullname: 'Տիգրան Խաչատրյան',
            username: 'matevosyan',
            password: '',
            position: 'ՀՀ փոխվարչապետ',
            picture: 'http://34.125.131.155:3000/upload/fd4602d7-b336-478a-956b-6c3ed5e5c7ed.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Նարեկ Մկրտչյան',
            username: 'mkrtchyan',
            password: '',
            position: 'Աշխատանքի եւ սոցիալական հարցերի նախարար',
            picture: 'http://34.125.131.155:3000/upload/9c129079-0431-4fa5-b1af-450dd36809b3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Անահիտ Ավանեսյան',
            username: 'avanesyan',
            password: '',
            position: 'Առողջապահության նախարար',
            picture: 'http://34.125.131.155:3000/upload/75b32f92-9d07-4856-89ca-7cf7bb4cf676.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Գրիգոր Մինասյան',
            username: 'abrahamyan',
            password: '',
            position: 'Արդարադատության նախարար',
            picture: 'http://34.125.131.155:3000/upload/9daa832e-6f25-478b-9274-0a41374cf2d1.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արմեն Փամբուխչյան',
            username: 'pambukhchyan',
            password: '',
            position: 'Արտակարգ իրավիճակների նախարար',
            picture: 'http://34.125.131.155:3000/upload/3ed7217f-ab21-4aeb-8c46-3d4098e776f5.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արարատ Միրզոյան',
            username: 'mirzoyan',
            password: '',
            position: 'Արտաքին գործերի նախարար',
            picture: 'http://34.125.131.155:3000/upload/879e6793-5068-41c8-9fee-e2b06921ccb8.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Ռոբերտ Խաչատրյան',
            username: 'khachatryan',
            password: '',
            position: 'Բարձր տեխնոլոգիական արդյունաբերության նախարար',
            picture: 'http://34.125.131.155:3000/upload/812e53a0-e063-4e50-b233-9dca77a64b6c.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Ժաննա Անդրեասյան',
            username: 'dumanyan',
            password: '',
            position: 'Կրթության, գիտության, մշակույթի և սպորտի նախարար',
            picture: 'http://34.125.131.155:3000/upload/ca03ee74-4e66-4ec0-8591-d660aaa08c9d.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահե Ղազարյան',
            username: 'ghazaryan',
            password: '',
            position: 'Ներքին գործերի նախարար',
            picture: 'http://34.125.131.155:3000/upload/45110aff-c9bb-4885-96b9-e7911a641221.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահան Քերոբյան',
            username: 'qerobyan',
            password: '',
            position: 'Էկոնոմիկայի նախարար',
            picture: 'http://34.125.131.155:3000/upload/78d3d3a6-534e-43a9-9eae-22c736cf0ba3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Հակոբ Սիմիդյան',
            username: 'simidyan',
            password: '',
            position: 'Շրջակա միջավայրի նախարար',
            picture: 'http://34.125.131.155:3000/upload/5e720f6d-cbb6-451b-aac5-d326ee527a53.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Սուրեն Պապիկյան',
            username: 'papikyan',
            password: '',
            position: 'Պաշտպանության նախարար',
            picture: 'http://34.125.131.155:3000/upload/d9b9238b-ab99-4044-a66f-6d3e54286da3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Գնել Սանոսյան',
            username: 'sanosyan',
            password: '',
            position: 'Տարածքային կառավարման և ենթակառուցվածքների նախարար',
            picture: 'http://34.125.131.155:3000/upload/28e2f717-1798-455d-bd26-ad1502b2d1fc.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահե Հովհաննիսյան',
            username: 'hovhannisyan',
            password: '',
            position: 'Ֆինանսների նախարար',
            picture: 'http://34.125.131.155:3000/upload/0fb889da-7346-4e4b-bf64-4911677f135e.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
    ]);
}

async function init() {
    try {
        const options = process.env.NODE_ENV === 'production'
            ? knexConfigs.production
            : knexConfigs.development;
        const pg = knex(options);
        await seed(pg);
        console.log('Successfully inserted all data ... ');
    } catch (error) {
        console.error(error.message);
    }
}

init();
