const Home = () => {

    const handleClick = () => {
        console.log('Hello, ninjas');
    }
    const handleClickAgain = (e) => {
        console.log(`Hello, ninjas ${e}`);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>hello</button>
            {/* if we want to pass a parameter, it'll invoke the fuvnction so what we can do is, we can reference something to that function that if button click then this function, and if this then that function */}
            <button onClick={() => handleClickAgain('mario')}>hello</button>
        </div>
    );
}

export default Home;