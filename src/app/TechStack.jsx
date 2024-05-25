import Image from "next/image";


function TechStack() {
    return (
        <>
        <br />
        <p>My current tech-stack:</p>
        <br />
        <div className="stack-container relative">
            <ul className="flex">
                <li className="stack-list-item relative"><Image src="/../html-5.svg" fill={true} alt="HTML5 SVG Logo" /></li>
                <li className="stack-list-item relative"><Image src="/../css-3.svg" fill={true} alt="CSS3 SVG Logo" /></li>
                <li className="stack-list-item relative"><Image src="/../javascript.svg" fill={true} alt="JavaScript SVG Logo" /></li>
                <li className="stack-list-item relative"><Image src="/../c-sharp.svg" fill={true} alt="C# SVG Logo" /></li>
                <li className="stack-list-item relative"><Image src="/../react.svg" fill={true} alt="React SVG Logo" /></li>
            </ul>
        </div>
        </>
    )
}

export default TechStack;