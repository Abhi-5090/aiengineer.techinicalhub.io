import content2Data from "@/data/content2.json";
import Content2Card from "./Content2Card";
export default function ContentBox2() {
    return (<section className="noice-overlay">
            <div className="xl:py-68 pb-50 pt-20">
                <div className="container-full">
                    {content2Data.map((item, index) => (<Content2Card key={index} content={item}/>))}
                </div>
            </div>
        </section>);
}
