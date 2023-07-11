import { Smooch } from 'next/font/google';

const smooch = Smooch({
    subsets: ['latin'],
    weight: ['400']
})

export function About() {
    return (
        <div className="flex flex-col items-center min-h-screen w-full pl-2 pr-2">
            <div className="w-full bg-gradient-to-tr from-yellow-800 to-black-900 rounded-lg">
                <img 
                    src="/flowers2.jpeg"
                    alt="Flowers"
                    className="w-full h-96 object-cover mix-blend-overlay rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center justify-center border-2 w-full h-80 rounded-lg">
                <h1 className={`text-rose-500 text-2xl ${smooch.className}`}>SWEETY CAFE</h1>
                <h1 className="text-2xl -mt-3 mb-5">WELCOME TO SWEETY CAFE</h1>

                <p className="border-2 w-1/4 mb-5 rounded-lg border-rose-200"></p>

                <h1 className="cursor-pointer border-2 border-black px-8 py-4 hover:bg-gray-300 rounded-lg">MENU</h1>
            </div>
        </div>
    )
}