import Image from "next/image";
import icon from '../../../../public/home/icon.png';

const Communities =() =>{

    return(
        <div className="bg-white h-80 w-[1000px] p-2 rounded-md ">
        <Image
        className='w-20 h-20 '
        src={icon}/>
        <h2 className="font-bold">Communities</h2>
        <p className="p-4">Harmon based Community on his experiences attending Glendale Community College. Each episode was written in accordance with Harmon's "story circle" template, a method designed to create effective and structured storytelling. Harmon was the showrunner for the first three seasons but was fired before the fourth and replaced by David Guarascio and Moses Port. After weaker reviews, Harmon was rehired for the fifth season, after which NBC canceled the series. Yahoo! Screen revived the show for Community's sixth and final season.</p>
        </div>
    )
}

export default Communities;