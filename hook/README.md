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