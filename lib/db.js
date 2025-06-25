"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/prisma.ts
var prisma_1 = require("../generated/prisma");
var prisma = globalThis.prisma || new prisma_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalThis.prisma = prisma;
exports.default = prisma;
