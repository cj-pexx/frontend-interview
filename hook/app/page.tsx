/*
React Interview Question: Implement useArray Hook

Problem Statement:
Create a custom React hook called useArray that provides an easy-to-use interface for a React component.  managing an array in

The hook should return the following:

value: The current array.
push: A function that adds a new element to the array.
removeByIndex: A function that removes an element from the array based on its index.


Requirements:
value:
This should be the current state of the array, which can be accessed directly.

push:
A function that accepts a single argument and appends it to the end of the array.

removeByIndex:
A function that accepts an index and removes the element at that index from the array.

*/

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {}


export default function Home() {
  return (
    <div className="flex flex-col px-28 items-center gap-10">
    <div className="mt-10 flex justify-center text-3xl font-bold">Interview</div>    
    </div>
  );
}
