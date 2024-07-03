import React from "react";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";

import { BoardNavbar } from "./_components/board-navbar";

export const generateMetadata = async ({
  params,
}: {
  params: { boardId: string };
}) => {
  const { orgId } = auth();

  if (!orgId) return { title: "Board" };

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  });

  return {
    title: board?.title || "Organization",
  };
};

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    boardId: string;
  };
}) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }

  return (
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className="relative h-full bg-no-repeat bg-center bg-cover"
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
