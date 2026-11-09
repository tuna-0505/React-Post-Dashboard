# Web Technologies Laboratory - Assignment 6 (React Post Dashboard)

**Student Name:** Tunahan Mutlu  
**Student ID:** 230408002  

## 1. File Organization
The application is structured using Vite and React, demonstrating asynchronous side-effect handling, reducer-based state management, and derived state patterns:

- `package.json`: Contains project metadata, React 18 dependencies, and Vite build scripts.
- `index.html`: Base HTML template housing the `#root` application container.
- `src/api/postsApi.js`: Pure data-fetching function utilizing `fetch` without any React or JSX dependencies.
- `src/reducer/postsReducer.js`: Pure reducer function managing `FETCH_START`, `FETCH_SUCCESS`, and `FETCH_ERROR` state transitions.
- `src/components/FilterForm.jsx`: Controlled input component for filtering post titles.
- `src/components/Post.jsx`: Stateless presentational component rendering post title and body.
- `src/components/PostList.jsx`: Renders mapped `Post` elements and handles empty results.
- `src/App.jsx`: Root component orchestrating `useReducer`, `useEffect` with `AbortController` cleanup, and derived state evaluation.
- `src/main.jsx`: Mounts the React root element.

## 2. Challenges Faced & Solutions
- **Derived State vs Controlled Filtering:** Rather than dispatching filtered arrays into state (which violates React state predictability), filtering is calculated dynamically during rendering using source posts and local input state (`filteredPosts = state.posts.filter(...)`).
- **Async Safety & Memory Leak Prevention:** To avoid updating unmounted components during asynchronous fetch delays, an `AbortController` is attached inside `useEffect` and cleaned up on unmount.
- **Predictable Async State with `useReducer`:** Replacing multiple `useState` hooks with a unified reducer ensured `loading`, `error`, and `posts` states update atomically, eliminating race conditions between loading states and fetch responses.
