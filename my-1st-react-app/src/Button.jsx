

function Button() {

    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white", 
        padding: "10px 20px",
        borderradius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button className={styles}>
            Click me!
        </button>
    );
}

export default Button;