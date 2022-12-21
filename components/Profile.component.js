import {useSelector} from 'react-redux';

import IconComponent from './Icon.component';

function ProfileComponent() {
    const {data} = useSelector(state => state.me);

    const statusToColor = {
        online: '#3ba55c',
        idle: '#faa61a',
        dnd: '#ed4245',
        offline: '#697380',
    };

    const avatar = process.env.cdnURL + "/avatars/" + process.env.id + "/" + data.discord_user.avatar;

    return (
        <div className="lg:flex p-10 lg:justify-center lg:cols-2 gap-3 h-screen profile-c">
            <div className="lg:grid lg:grid-rows-4 lg:grid-flow-col gap-3 lg:w-2/5">
                <div className="rounded-md lg:row-span-3 max-lg:h-[725px] lg:h-full bg-[#1f2024]">
                    <div className="p-5">
                        <div className="mt-2 lg:max-md:flex">
                            <div className="relative">
                                <img src={avatar} alt="pp" className="rounded-2xl w-[80px] h-[80px]"/>
                                <div
                                    className="absolute bottom-0 left-[70px] w-3 h-3 bg-green-500 rounded-full"
                                    style={{backgroundColor: statusToColor[data.discord_status]}}/>
                            </div>

                            <h1 className="mt-2 text-xl font-bold">{data.discord_user.username}#{data.discord_user.discriminator}</h1>

                            <ul className="mt-2">
                                <li className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                              clipRule="evenodd"></path>
                                        <path
                                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                    </svg>

                                    <span className="text-[#9ca3af]">Front-end Developer</span>
                                </li>

                                <li className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                              clipRule="evenodd"></path>
                                    </svg>

                                    <span className="text-[#9ca3af]">Turkey</span>
                                </li>
                            </ul>

                            <div className="mt-4">
                                <div className="grid grid-rows-2">
                                    <span className="text-sm text-[#9ca3af]">Email Address</span>
                                    <span className="text-sm">yusu@duck.com</span>
                                </div>

                                <div className="mt-4 grid grid-rows-2">
                                    <span className="text-sm text-[#9ca3af]">Active On</span>
                                    {!data.active_on_discord_desktop && !data.active_on_discord_mobile && !data.active_on_discord_web && (
                                        <span className="text-sm">None</span>
                                    )}
                                    {data.active_on_discord_desktop ?
                                        <span className="text-sm">Discord Desktop</span> : null}
                                    {data.active_on_discord_mobile ?
                                        <span className="text-sm">Discord Mobile</span> : null}
                                    {data.active_on_discord_web ? <span className="text-sm">Discord Web</span> : null}
                                </div>
                            </div>

                            {data.listening_to_spotify && data.spotify.track_id && (
                                <div className="mt-4">
                                    <div className="grid grid-rows-2">
                                        <span className="text-sm text-[#9ca3af]">Listening to</span>

                                        <div className="grid grid-cols-5">
                                            <div className="">
                                                <img src={data.spotify.album_art_url} alt="album art"
                                                     className="w-8 h-8 rounded-md"/>
                                            </div>

                                            <span
                                                className="col-span-4 text-sm"><a
                                                href={`https://open.spotify.com/track/${data.spotify?.track_id}`}
                                                className="hover:underline truncate">{data.spotify.song}</a> - {data.spotify.artist.split(';').map((artist, i) => <>
                                                <a key={i} className="cursor-pointer hover:underline">
                                                    <span>{artist}</span>
                                                </a>
                                                {data.spotify.artist.split(';').length - 1 > i ? ', ' : ''}
                                            </>)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {data.activities.length > 0 && data.activities.filter(activity => activity.type !== 2).length > 0 && (
                                <div className="mt-4">
                                    <div className="grid grid-rows-2">
                                        <span className="text-sm text-[#9ca3af]">Playing</span>

                                        {data.activities.filter(activity => activity.type !== 2).map((activity, i) => (
                                            <div key={i}>
                                                {activity.name} {activity.details ? activity.details !== '  ' ? '- ' + activity.details : '- Idle' : ''}
                                                {activity.type === 4 && '- ' + activity.state}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-4">
                                <div className="grid grid-rows-2">
                                    <span className="text-sm text-[#9ca3af]">Skills</span>

                                    <div>
                                        <span className="mr-2 rounded-md"><IconComponent icon="html5" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="css3" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="javascript" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="node-dot-js" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="react" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="next-dot-js" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="tailwindcss" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="firebase" width={24}
                                                                                         height={24}/></span>
                                        <span className="mr-2 rounded-md"><IconComponent icon="mongodb" width={24}
                                                                                         height={24}/></span>
                                        <span className="rounded-md"><IconComponent icon="git" width={24} height={24}/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-md p-5 max-lg:mt-3 h-full bg-[#1f2024]">
                    1.2
                </div>
            </div>

            <div className="rounded-md p-5 max-lg:mt-3 bg-[#1f2024] w-full">
                <h1 className="text-[20px] font-bold mb-4">General Information</h1>

                <div className="text-lg">
                    <h1 className="font-medium">About Me</h1>

                    <div>
                        <p className="text-[#9ca3af] text-sm">I'm a 18 years old developer from Turkey. I'm currently
                            working on a few projects, and I'm also learning new things.</p>
                    </div>
                </div>

                <div className="mt-4 grid lg:grid-cols-4 max-lg:grid-cols-2 lg:w-8/12 max-md:gap-4 lg:gap-8">
                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Languages</li>
                        <li className="text-sm font-bold">Turkish (Native)</li>
                        <li className="text-sm font-bold">English (?)</li>
                    </ul>

                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Interests</li>
                        <li className="font-bold text-sm">Web Development</li>
                        <li className="font-bold text-sm">UI/UX Design</li>
                    </ul>

                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Hobbies</li>
                        <li className="font-bold text-sm">Playing Games</li>
                        <li className="font-bold text-sm">Watching Movies</li>
                        <li className="font-bold text-sm">Listening to Music</li>
                    </ul>

                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Favorite Games</li>
                        <li className="font-bold text-sm">VALORANT</li>
                        <li className="font-bold text-sm">Fortnite</li>
                        <li className="font-bold text-sm">Grand Theft Auto V</li>
                    </ul>

                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Birthday</li>
                        <li className="font-bold text-sm">Sep 09, 2004</li>
                    </ul>


                    <ul className="mt-4">
                        <li className="text-sm text-[#9ca3af]">Education</li>
                        <li className="font-bold text-sm">Anatolian High School</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

/*

<div>
                    <h1 className="font-medium mt-4">My Projects</h1>

                    <div className="mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-md p-4 bg-[#2f3136]">
                                <div className="grid grid-rows-2">
                                    <div className="grid grid-cols-2">
                                        <div className="col-span-1">
                                            <h1 className="text-lg font-medium">Discord Bot</h1>

                                            <div className="mt-2">
                                                <span className="text-sm text-[#9ca3af]">Language</span>
                                                <span className="text-sm">JavaScript</span>

                                                <span className="text-sm text-[#9ca3af] ml-4">Framework</span>
                                                <span className="text-sm">Discord.js</span>

                                                <span className="text-sm text-[#9ca3af] ml-4">Status</span>
                                                <span className="text-sm">In Development</span>

                                                <span className="text-sm text-[#9ca3af] ml-4">Type</span>
                                                <span className="text-sm">Open Source</span>

                                                <span className="text-sm text-[#9ca3af] ml-4">License</span>
                                                <span className="text-sm">MIT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<div
    className="w-2 h-2 bg-green-500 rounded-full"
    style={{backgroundColor: statusToColor[data.discord_user.status]}}/>

<div className="w-[1308px] p-10 mx-auto sm:grid-cols-1 sm:p-6">
    <div className="grid grid-cols-2 gap-4">
        <div
            className="text-white bg-gradient-to-br from-purple-600 via-purple-500 via-yellow-500 to-blue-500 transition rounded">
            <div className="relative mt-5 ml-5">
                <Image width={16} height={16} className="h-16 w-16 rounded-full" src={avatar}
                       alt=""/>
                <span
                    className="bottom-0 left-11 absolute w-4 h-4 rounded-full"
                    style={{backgroundColor: `${statusToColor[data.discord_status]}`}}/>
            </div>
        </div>

        <div
            className="text-white bg-gradient-to-br from-purple-600 via-purple-500 via-yellow-500 to-blue-500 transition rounded">
            <div className="relative mt-5 ml-5">
                <Image width={16} height={16} className="h-16 w-16 rounded-full" src={avatar}
                       alt=""/>
                <span
                    className="bottom-0 left-11 absolute w-4 h-4 rounded-full"
                    style={{backgroundColor: `${statusToColor[data.discord_status]}`}}/>
            </div>
        </div>
    </div>
</div>

<div className="flex flex-wrap items-center justify-center">
    <div
        className="w-[610px] h-[700px] container max-w-lg rounded shadow-lg transform duration-200 easy-in-out m-12">

        <div className="flex justify-start px-5 -mt-12 mb-5">
            <div className="relative">
                <Image width={16} height={16} className="h-16 w-16 rounded-full" src={avatar}
                       alt=""/>
                <span
                    className="bottom-0 left-11 absolute w-3.5 h-3.5 rounded-full"
                    style={{backgroundColor: `${statusToColor[data.discord_status]}`}}/>
            </div>
        </div>
        <div className="">
            <div className="px-7 mb-8">
                <h2 className="text-3xl font-bold text-green-800 dark:text-gray-300">Beth J.
                    Greene</h2>
                <p className="text-gray-400 mt-2 dark:text-gray-400">Illustrator</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet
                    consectetur,
                    adipisicing elit.
                    Asperiores molestiae vitae odio non commodi itaque quisquam incidunt
                    doloribus fugit
                    nesciunt.</p>
                <div
                    className="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
                    bethgreene@gmail.com
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                    <button
                        className="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
                        <svg className="w-7 h-7 fill-current" role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </button>
                    <button
                        className="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
                        <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                    </button>
                    <button
                        className="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                        <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                        </svg>
                    </button>
                    <button
                        className="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                        <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256"
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                </path>
                            </g>
                        </svg>
                    </button>
                    <button
                        className="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                        <svg className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 16 16">
                            <path
                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
*/

export default ProfileComponent;
