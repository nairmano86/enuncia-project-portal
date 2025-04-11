<Router>
  <Navbar />
  <div style={{ padding: '20px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
</Router>
