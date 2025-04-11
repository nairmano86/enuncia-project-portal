function App() {
  return (
    <Router>
      <Navbar />
      <div>Hello from App</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
