-- DropIndex
DROP INDEX "airport_id_idx";

-- CreateIndex
CREATE INDEX "airport_iata_name_city_country_idx" ON "airport"("iata", "name", "city", "country");
