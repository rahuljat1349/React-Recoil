import { atom, atomFamily, selector, selectorFamily } from "recoil";

// atoms
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});



// selectors
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 == 0;
  },
});





// async data queries in atoms
export const userAtom = atom({
  key: "userAtom",
  default: selector({
    key: "userAtomSelector",
    get: async () => {
      let data = await fetch();
      return data.json();
    },
  }),
});


// atom family
let TODOS = [];
export const todoAtomFamily = atomFamily({
  key: "todoFamily",
  default: (id) => {
    let foundTodo = null;
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        foundTodo = TODOS[i];
      }
    }
    return foundTodo;
  },
});



// async data quaries in atom falilies || selectorFamily


export const todoAtomFamily1 = atomFamily({
  key:"atomFamily1",
  default:selectorFamily({
    key:"todoatomfamilyselector",
    default: (id) => async ({get}) =>{
      let todo = await fetch(id);
      return todo.json()
    }
  })
})



