## Task: Implement and Use the `useArray` Hook

### Objective

Your task is to implement the custom `useArray` React hook and use it within a React component to manage an array.

### Steps to Complete

1. **Implement the `useArray` Hook**:

   - Create a custom hook named `useArray`.
   - The hook should return the current array (`value`), a `push` function to add new elements to the array, and a `removeByIndex` function to remove elements by index.

2. **Use the `useArray` Hook in a Component**:
   - Create a React component that utilizes the `useArray` hook.
   - Display the array on the page.
   - Provide functionality to add new elements to the array using the `push` function.
   - Provide functionality to remove elements by index using the `removeByIndex` function.

### Example Usage

```TypeScript
function ExampleComponent() {
    const { value, push, removeByIndex } = useArray([1, 2, 3]);

    return (
        <div>
            <ul>
                {value.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeByIndex(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => push(value.length + 1)}>Add</button>
        </div>
    );
}
```

### Run

```bash
pnpm install

pnpm dev
```

## Interview Question: Implement a `useLocalStorage` Hook

**Question:**  
Write a custom React Hook called `useLocalStorage` that synchronizes a value with the browser's `localStorage`. The hook should allow reading from and writing to `localStorage` while keeping a React state in sync. Specifically:

- The hook should accept a `key` (string) and an `initialValue` (of any type) as arguments.
- It should return an array with the current value and a function to update it, similar to `useState`.
- If the `key` already exists in `localStorage`, use that value instead of the `initialValue`.
- Use TypeScript with generics to ensure the type of the value is preserved and type-safe.
- Provide a brief explanation of your implementation and how you handle the generic type.

**Requirements:**

1. The hook must be written in TypeScript with proper type annotations.
2. It should use React's `useState` to manage the value and update `localStorage` when the value changes.
3. Handle the case where `localStorage` is not available (e.g., in a non-browser environment).
4. Demonstrate how it can be used with at least one type (e.g., string or number).

**Example Usage (for reference):**

```typescript
const [name, setName] = useLocalStorage("userName", "John"); // name is string
const [count, setCount] = useLocalStorage("visitCount", 0); // count is number
```

useState
