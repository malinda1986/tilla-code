//@ts-nocheck
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Load JSON data
const jsonData = require("./airports.json");

prisma.airports.createMany({ data: jsonData }).then((res) => {
  console.log("data inserted");
});
