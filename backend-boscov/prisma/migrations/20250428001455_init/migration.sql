-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADM', 'COMUM');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL,
    "tipoUsuario" "TipoUsuario" NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idUsuario" INTEGER NOT NULL,
    "idFilme" INTEGER NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "comentario" TEXT NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("idUsuario","idFilme")
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "duracao" INTEGER NOT NULL,
    "produtora" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneroFilme" (
    "idGenero" INTEGER NOT NULL,
    "idFilme" INTEGER NOT NULL,

    CONSTRAINT "GeneroFilme_pkey" PRIMARY KEY ("idGenero","idFilme")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idFilme_fkey" FOREIGN KEY ("idFilme") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneroFilme" ADD CONSTRAINT "GeneroFilme_idGenero_fkey" FOREIGN KEY ("idGenero") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneroFilme" ADD CONSTRAINT "GeneroFilme_idFilme_fkey" FOREIGN KEY ("idFilme") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
