import React, { useReducer, useState, useEffect } from 'react';
import { postsReducer, initialState } from './reducer/postsReducer.js';
import { fetchPosts } from './api/postsApi.js';
import FilterForm from './components/FilterForm.jsx';
import PostList from './components/PostList.jsx';

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        if (err.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', payload: err.message || 'Failed to fetch posts.' });
        }
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const containerStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '30px 20px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: '#1a252f', marginBottom: '24px' }}>
        React Post Dashboard
      </h1>

      <FilterForm filterText={filterText} onFilterChange={setFilterText} />

      {state.loading && (
        <p style={{ textAlign: 'center', color: '#3498db', fontWeight: 'bold' }}>
          Loading posts...
        </p>
      )}

      {state.error && (
        <div style={{ padding: '12px', backgroundColor: '#fde8e8', color: '#e74c3c', borderRadius: '6px', textAlign: 'center' }}>
          Error: {state.error}
        </div>
      )}

      {!state.loading && !state.error && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;
