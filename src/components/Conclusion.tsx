import React from "react";

const Conclusion = () => {
    return (
        <section className="flex flex-col items-center w-full md:w-2/3 md:mx-auto justify-center px-4 py-8 rounded-lg md:mt-12 md:px-8 md:py-12">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Conclusion</h2>
            <p className="mt-4 text-gray-700 text-center md:text-lg">
                Reading while listening to music can be a game-changer for many, transforming the way we engage with books and documents. By choosing the right music and tools, such as{" "}
                <a className="font-medium text-indigo-600" href="https://play.google.com/store/apps/details?id=dev.maggev.io">Chroma Reader</a>{" "}
                you can create a reading environment that’s both enjoyable and productive.
            </p>
            <p className="mt-4 text-gray-700 text-center md:text-lg">
                So, why not give it a try? The perfect melody might just make your next reading session unforgettable.
            </p>
        </section>
    );
};

export default Conclusion;
