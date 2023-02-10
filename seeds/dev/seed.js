import bCrypt from 'bcryptjs';
// NPM Modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import config from '../../src/config/variables.config';

const { ADMIN_PASSWORD, PRIMEMINISTER_PASSWORD,  PARLAMENT_PRESIDENT_PASSWORD } = config;

async function seed(pg) {
    // Deletes ALL existing entries
    await pg('users').truncate();
    // Deletes ALL existing entries with cascade.

    // Inserts seed entries

    await pg('users').insert([

        {
            fullname: 'Նիկոլ Փաշինյան',
            username: 'pashinyan',
            position: 'ՀՀ Վարչապետ',
            picture:'/home/vahagn/Desktop/Best_Project/BACK//9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Մհեր Գրիգորյան',
            username: 'grigoryan',
            position: 'ՀՀ փոխվարչապետ',
            picture:'/home/vahagn/Desktop/Best_Project/BACK/upload/ead51cdf-7e3f-40e1-9a18-b086fc73ca42.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },

        {
            fullname: 'Համբարձում Մաթևոսյան',
            username: 'matevosyan',
            position: 'ՀՀ փոխվարչապետ',
            picture: 'upload/e7b41e52-c2d5-4fec-bb25-0eff35334191.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Նարեկ Մկրտչյան',
            username: 'mkrtchyan',
            position: 'Աշխատանքի եւ սոցիալական հարցերի նախարարություն',
            picture: 'upload/9c129079-0431-4fa5-b1af-450dd36809b3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Անահիտ Ավանեսյան',
            username: 'avanesyan',
            position: 'Առողջապահության նախարարություն',
            picture: 'upload/75b32f92-9d07-4856-89ca-7cf7bb4cf676.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Լևոն Աբրահամյան',
            username: 'abrahamyan',
            position: 'Արդարադատության նախարարություն',
            picture: 'upload/78ddee35-5699-44c0-9704-4807128de9a4.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արմեն Փամբուխչյան',
            username: 'pambukhchyan',
            position: 'Արտակարգ իրավիճակների նախարարություն',
            picture: 'upload/3ed7217f-ab21-4aeb-8c46-3d4098e776f5.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արարատ Միրզոյան',
            username: 'mirzoyan',
            position: 'Արտաքին գործերի նախարարություն',
            picture: 'upload/879e6793-5068-41c8-9fee-e2b06921ccb8.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Ռոբերտ Խաչատրյան',
            username: 'khachatryan',
            position: 'Բարձր տեխնոլոգիական արդյունաբերության նախարարություն',
            picture: 'upload/812e53a0-e063-4e50-b233-9dca77a64b6c.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահրամ Դումանյան',
            username: 'dumanyan',
            position: 'Կրթության, գիտության, մշակույթի և սպորտի նախարարություն',
            picture: 'upload/bef1ea45-708a-4735-8f86-009a81369101.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահան ՔերոբյաՆ',
            username: 'qerobyan',
            position: 'Էկոնոմիկայի նախարարություն',
            picture: 'upload/78d3d3a6-534e-43a9-9eae-22c736cf0ba3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Հակոբ Սիմիդյան',
            username: 'simidyan',
            position: 'Շրջակա միջավայրի նախարարություն',
            picture: 'upload/5e720f6d-cbb6-451b-aac5-d326ee527a53.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Սուրեն Պապիկյան',
            username: 'papikyan',
            position: 'Պաշտպանության նախարարություն',
            picture: 'upload/d9b9238b-ab99-4044-a66f-6d3e54286da3.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Գնել Սանոսյան',
            username: 'sanosyan',
            position: 'Տարածքային կառավարման և ենթակառուցվածքների նախարարություն',
            picture: 'upload/28e2f717-1798-455d-bd26-ad1502b2d1fc.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Տիգրան Խաչատրյան',
            username: 'khachatryanT',
            position: 'Ֆինանսների նախարարություն',
            picture: 'upload/fd4602d7-b336-478a-956b-6c3ed5e5c7ed.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        
    ]);
    await pg('login_users').insert([
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
            username: 'pashinyan',
            password: bCrypt.hashSync(PRIMEMINISTER_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'ՀՀ Վարչապետ',
            picture:'/home/vahagn/Desktop/Best_Project/BACK//9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'primeminister',
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
