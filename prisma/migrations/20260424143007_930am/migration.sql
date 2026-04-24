-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precios" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
