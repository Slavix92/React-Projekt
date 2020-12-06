const headerMSG = 'Mój pierwszy komponent';
const footerMSG = 'Footer komponent';
const IMG = 'https://hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif';

function Card() {
return (
    <div className="Card">

    <header className="Card-header">
    <h1>{headerMSG}</h1>
    <img src={IMG}></img>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed dolor nisl, volutpat et dolor ac, tempor mollis quam. 
        Maecenas ornare nibh sapien, at semper urna maximus et. 
        Cras tempor ullamcorper vestibulum. 
        Nullam ligula nunc, consequat ut nunc in, pellentesque condimentum mi. 
        Aenean tristique odio eget nisl volutpat, vel feugiat ante malesuada. 
        Pellentesque tincidunt tempus ex at rutrum. 
        In non sollicitudin metus. Duis in purus nec est consequat hendrerit. 
        Nulla velit orci, molestie in hendrerit a, tincidunt non orci. 
        Mauris nec elementum enim. Quisque vel tellus sapien. 
        In sagittis non quam eu tristique. 
        Sed lobortis quis purus ut fringilla.</p>
        </header>
    <footer>
        <h3>{footerMSG}</h3>
    </footer>

</div>
)
};

export default Card;