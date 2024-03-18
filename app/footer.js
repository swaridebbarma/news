import "./footer.css";

const Footer = () => {
    return (
        <>
            <hr className="hr" />
            <div className="size d-lg-block d-none">
                NewsAPI
                <img className="logo" src="Ellipse 1.svg" alt="Logo" />Org
                <a> is not responsible for the content of external sites</a>
            </div>
            <div class="div d-block d-lg-none">
                <div className="size ">
                    NewsAPI
                    <img className="logo" src="Ellipse 1.svg" alt="Logo" />Org<br />
                    <a> is not responsible for<br /> the content of external<br /> sites</a>
                </div>
            </div>
        </>
    );
}
export default Footer;
