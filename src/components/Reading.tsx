import Image from "next/image";
import Img from "../../public/images/cat.jpeg"


const ReadingComponent = () => {
    return (
        <section className="mx-0 md:mx-20 lg:mx-44">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
                Choosing the Right Music for Reading
            </h2>
            <div className="flex flex-col md:flex-row items-center  bg-slate- md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4">
                {/* Image Section */}

                <div className="float-start w-full  md:w-1/3">
                    <Image
                        src={Img}
                        alt="Reading with music"

                        className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3">
                    <p className="text-lg font-semibold mb-3 text-gray-700">
                        Not all music is suitable for reading. Lyrics-heavy songs or loud, fast-paced tracks might be more of a distraction than a help. Here are some recommendations:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                        <li>
                            <strong>Instrumental and Classical Music:</strong> Pieces by composers like Bach, Mozart, or Ludovico Einaudi provide a soothing backdrop without competing for your attention.
                        </li>
                        <li>
                            <strong>Ambient Music:</strong> Artists like <a className="text-cyan-300 hover:text-blue-700" href="https://www.youtube.com/watch?v=BfOcbaV7a_M" target="_blank">Phil collins</a> and <a className="text-cyan-300 hover:text-blue-700" href="https://www.youtube.com/watch?v=MRjVdu_cLwI&t=2641s" target="_blank">Leonard Cohen </a>  create soundscapes that blend effortlessly into the background.
                        </li>
                        <li>
                            <strong><a href="https://www.youtube.com/watch?v=n61ULEU7CO0" about="_blank" className=" hover:text-blue-700">Lo-fi Beats:</a></strong> The ever-popular lo-fi hip-hop and <a className="text-cyan-300 hover:text-blue-700" href="https://youtu.be/jrTMMG0zJyI?si=9BGDkjco1YBykpeh" target="_blank">Samurai</a> genre is perfect for creating a relaxed, focused vibe.
                        </li>
                        <li>
                            <strong><a href="https://www.youtube.com/results?search_query=Nature+Sounds%3A" target="_blank" className=" hover:text-blue-700">Nature Sounds:</a></strong>  If traditional music feels too distracting, sounds of rain, waves, or birdsong can offer a natural rhythm to read by
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReadingComponent;
