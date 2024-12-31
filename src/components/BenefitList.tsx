const BenefitsList = () => {
    const benefits = [
        "Improved Focus: Soft, instrumental music can create a calming environment, helping to block out external distractions. This is especially useful in noisy settings like coffee shops or libraries.",
        "Mood Enhancement: The right music can elevate your mood, making a difficult text feel less intimidating or a suspenseful novel even more thrilling.",
        "Rhythmic Flow: For some, music helps maintain a steady reading pace. The rhythm of the music can sync with the cadence of your reading, creating a seamless experience.",
        "Stress Relief: Reading and listening to soothing music can be a therapeutic combination, reducing anxiety and promoting relaxation.",
    ];

    return (
        <div id="benefit" className="flex flex-col items-center justify-center my-6 md:my-20 mx-auto md:w-2/3 p-2 md:p-0">
            <ul className="list-disc pl-5 space-y-2 ">
                {benefits.map((benefit, index) => {
                    const [title, description] = benefit.split(": ");
                    return (
                        <li key={index} className="text-gray-700">
                            <strong>{title}:</strong> {description}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BenefitsList;
