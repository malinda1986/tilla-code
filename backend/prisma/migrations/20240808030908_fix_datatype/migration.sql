/*
  Warnings:

  - Made the column `longitude` on table `airport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `airport` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "airport" ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "longitude" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "latitude" SET DATA TYPE DOUBLE PRECISION;
