import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create user on users table
// async function createUser() {
//     const name = 'Jualia Silva'
//     const email = 'jualia@mail.com'
//     const passwordHash = '23423525'
//     const dateOfBirth = '2000-01-01'
//     const phone = '3462365472'

//     const userExists = await prisma.user.findUnique({
//         where: { email }
//     });

//     if (userExists) throw new Error("User already exists");

//     await prisma.user.create({
//         data: {
//             name,
//             email,
//             passwordHash,
//             dateOfBirth: new Date(dateOfBirth),
//             phone
//         }
//     });
// }

// createUser();

// update users name from users table
// async function updateUserName() {
//     await prisma.user.update({
//         where: {
//             id: 1
//         },
//         data: {
//             name: 'Julia Silva'
//         }
//     });
// }

// updateUserName();

// delete user from users table
// async function deleteUser() {
//     await prisma.user.delete({
//         where: {
//             id: 1
//         }
//     });
// }

// deleteUser();

// find fisrt user by name
async function findFirstUserByName() {
    const firstUser = await prisma.user.findFirst({
        where: { name: 'Afonso Silva' },
        include: { addresses: true }
    });

    if (firstUser) console.log("User found:", firstUser);
    else console.log("User not found");
}

findFirstUserByName();

// async function getUsers() {
//     const users = await prisma.user.findMany();
//     console.log("Users found:", users);
// }
// getUsers();

// async function createUserAndAddress() {
//     const name = 'Maria Silva'
//     const email = 'maria@mail.com'
//     const passwordHash = '23423525'
//     const dateOfBirth = '2000-01-01'
//     const phone = '3462365472'

//     const street = 'Rua XPTO';
//     const city = 'São Paulo';
//     const state = 'SP';
//     const zipCode = '11015070';

//     const userExists = await prisma.user.findUnique({
//         where: { email }
//     });

//     if (userExists) throw new Error("User already exists");

//     const response = await prisma.$transaction(async (prisma) => {
//         const user =await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 passwordHash,
//                 dateOfBirth: new Date(dateOfBirth),
//                 phone
//             },
//         });

//         const address = await prisma.address.create({
//             data: {
//                 userId: user.id,
//                 street,
//                 city,
//                 state,
//                 zipCode
//             }
//         });

//         return { user, address };
//     });

//     console.log("Response:", response);
// }

// createUserAndAddress();

