import "./footer.css";

function Footer(props) {
    const x = 5;
    const { name1, age1 } = props;
    const arr = [{ name: "Le Tho", age: 3 }, { name: "Le Bao", age: 4 }, { name: "Le Nai", age: 2 }];
    
    return (
        <>
            <div className="footer" id="footer1">
                footer 1
                <h1>X = {x}</h1>
                <h1>Ten: {name1}</h1>
                <h1>Tuoi: {age1}</h1>
            </div>
            <div className="footer">
                footer 2
                <h1>Ten: {props.name1}</h1>
                {arr && arr.map((item, index) => (
                    <p key={index}>{item.name}</p>
                ))}
            </div>
        </>
    );
}

export default Footer;
