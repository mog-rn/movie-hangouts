import {PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['query', 'info'] });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

async function connectDB() {
    try {
        await prisma.$connect();
        console.log("🚀 Database Connected Successfully");
    } catch(e) {
        console.log(e);
        process.exit(1);        
    } finally {
        await prisma.$disconnect();
    }
}

export default connectDB;
