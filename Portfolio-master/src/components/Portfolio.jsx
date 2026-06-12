import React from 'react';

import cafeservice from '../assets/portfolio/cafeservice.png';
import cafebilling from '../assets/portfolio/cafebilling.png';
import spamshield from '../assets/portfolio/spamshield.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: cafeservice,
            title: "Cafe Service System",
            codeLink: 'https://github.com/harshg2025/Cafe-Service-System',
            demoLink: 'https://github.com/harshg2025/Cafe-Service-System',
        },
        {
            id: 2,
            src: cafebilling,
            title: "Cafe Billing System",
            codeLink: 'https://github.com/harshg2025/Cafe-Billing-System-',
            demoLink: 'https://drive.google.com/file/d/1tmzEiIT-bx8kc5P0I3CJSFIGKvq-Ymhp/view?usp=sharing',
        },
        {
            id: 3,
            src: spamshield,
            title: "SpamShield_AI",
            codeLink: 'https://github.com/harshg2025/SpamShield_AI',
            demoLink: 'https://drive.google.com/file/d/1uOg_d3dpAbLPSEQWQnKoBSkFKLtAYvBZ/view?usp=drive_link',
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen flex items-center"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, title, codeLink, demoLink }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col justify-between bg-gray-900 bg-opacity-40"
                        >
                            <img
                                src={src}
                                alt={title}
                                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover"
                            />
                            <div className="text-center mt-4 font-semibold text-lg px-2">{title}</div>
                            <div className="flex items-center justify-center py-2">
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 text-center px-4 py-2 m-2 duration-200 hover:scale-105 border border-cyan-500 rounded-md hover:bg-cyan-500 hover:text-black transition-all text-sm font-medium"
                                >
                                    Code
                                </a>
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 text-center px-4 py-2 m-2 duration-200 hover:scale-105 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all text-sm font-medium"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
