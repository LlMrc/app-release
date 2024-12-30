import Image from "next/image";
import Img from "../../public/images/3.png"


const ReadingComponent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center mx-0 md:mx-20 md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-1/3">
                <Image
                    src={Img}
                    alt="Reading with music"
                    width={200}
                    height={100}
                    className="w-full rounded-lg shadow-md"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    Choosing the Right Music for Reading
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        <strong>Ambient Music:</strong> Artists like Brian Eno or Tycho create soundscapes that blend effortlessly into the background.
                    </li>
                    <li>
                        <strong>Lo-fi Beats:</strong> The ever-popular lo-fi hip-hop genre is perfect for creating a relaxed, focused vibe.
                    </li>
                    <li>
                        <strong>Nature Sounds:</strong>  If traditional music feels too distracting, sounds of rain, waves, or birdsong can offer a natural rhythm to read by
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ReadingComponent;
