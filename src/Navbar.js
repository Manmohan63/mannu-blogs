const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Mannu Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
                {/* The {{}} shows that the outer braces are for dynamic vlaues and internal ones are for objects */}
            </div>
        </nav>
     );
}
 
export default Navbar;