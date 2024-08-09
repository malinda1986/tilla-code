-- CreateTable
CREATE TABLE "airport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iata" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "longitude" INTEGER,
    "latitude" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "airport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "airport_iata_key" ON "airport"("iata");

-- CreateIndex
CREATE INDEX "airport_id_idx" ON "airport"("id");
