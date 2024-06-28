import React from "react";


import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <Form/>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board title={board.title} id={board.id} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
