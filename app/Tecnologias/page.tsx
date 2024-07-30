import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="w-full flex flex-col items-center">
            <span className="text-[4rem] my-16">Main stack</span>
            <div className="w-full max-w-[50%] grid gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <div className="flex justify-center w-full">
                    <Image
                        alt=""
                        width={112}
                        height={112}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                        className="bg-pallete-light-accent dark:bg-pallete-dark-accent rounded-lg p-2"
                    />
                </div>
                <div className="flex justify-center w-full">
                    <Image
                        alt=""
                        width={112}
                        height={112}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        className="bg-pallete-light-accent dark:bg-pallete-dark-accent rounded-lg p-2"
                    />
                </div>
                <div className="flex justify-center w-full">
                    <Image
                        alt=""
                        width={112}
                        height={112}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                        className="bg-pallete-light-accent dark:bg-pallete-dark-accent rounded-lg p-2"
                    />
                </div>
                <div className="flex justify-center w-full">
                    <Image
                        alt=""
                        width={112}
                        height={112}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                        className="bg-pallete-light-accent dark:bg-pallete-dark-accent rounded-lg p-2"
                    />
                </div>
                <div className="flex justify-center w-full">
                    <Image
                        alt=""
                        width={112}
                        height={112}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                        className="bg-pallete-light-accent dark:bg-pallete-dark-accent rounded-lg p-2"
                    />
                </div>
            </div>
            <span className="text-[4rem] my-16">Side stacks</span>
        </div>
    )
}
