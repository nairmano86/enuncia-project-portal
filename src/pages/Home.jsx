import React from 'react';

function Home() {
  console.log("Home rendered");
  return (
    <div style={{ padding: "20px", backgroundColor: "#eee" }}>
      <h2>Home Page ✅</h2>
      <p>This content is rendered from Home.jsx</p>
    </div>
  );
}

export default Home;
