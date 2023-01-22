function uncompletedNotes(notes) {
  const uncompletedTodos = [];
  notes.forEach((note) => {
    note.todo.filter((todo) => {
      if (todo.done === false) {
        uncompletedTodos.push(todo);
      };
    })
  })
  return uncompletedTodos;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todo: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todo: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);
console.log(uncompletedNotes(notes));
