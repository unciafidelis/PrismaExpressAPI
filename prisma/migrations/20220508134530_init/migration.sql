-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 0,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");
