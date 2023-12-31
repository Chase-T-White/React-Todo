"use client";

// import { useState } from "react";
// import CharacterSelect from "./components/CharacterSelect";
import { TasksProvider } from "./context/tasks_context";
import TodoContainer from "./components/TodoContainer";

export default function Home() {
  // const [character, setCharacter] = useState("");

  return (
    <main className="max-w-[1200px] h-full mx-auto flex flex-col items-center justify-between">
      <TasksProvider>
        {/* {!character ? <CharacterSelect setCharacter={setCharacter} /> : ""} */}
        <TodoContainer />
      </TasksProvider>
    </main>
  );
}
