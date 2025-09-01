import React from 'react'

const Porfolio = () => {
    return (
        <div>
            {/* Popover panel */}
            <div className={`absolute left-5 right-5 bottom-5 top-5 h-[calc(100%-7rem)] border-2 border-blue-500 rounded-xl bg-white/10 backdrop-blur-sm text-white p-4 transition-all duration-500 flex flex-col items-center gap-4 overflow-y-auto ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="flex gap-4">
                    {/* Admin Photo */}
                    <img
                        src="/path-to-admin-photo.jpg"
                        alt="Admin"
                        className="w-32 h-32 rounded-full border-2 border-blue-500 object-cover absolute top-1 left-50"
                    />

                    {/* Welcome Text */}
                    <div className="space-y-1 text-center max-w-xl">
                        <p className="text-lg font-semibold">
                            Whats up people, Hello everyone, नमस्ते सबै जना लाई
                        </p>
                        <p className="text-md">Welcome to Kshitiz Rajan Universe!</p>
                        <p className="text-sm">
                            I am a Full Stack Developer, Video Editor, Content Creator, Moto Vlogger. Explore my projects, videos, blogs, and everything I create to share knowledge and fun!
                        </p>
                    </div>
                </div>

                {/* Projects / Cards Section */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 w-full">
                    {/* My Projects */}
                    <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 hover:scale-105 transition-transform cursor-pointer">
                        <img src="/path-to-project1.jpg" alt="Projects" className="w-full h-32 object-cover rounded-md mb-2" />
                        <h3 className="text-white font-semibold">My Projects</h3>
                        <p className="text-sm text-white/80">All the projects I worked on.</p>
                    </div>

                    {/* My Skills */}
                    <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 hover:scale-105 transition-transform cursor-pointer">
                        <img src="/path-to-project2.jpg" alt="skills" className="w-full h-32 object-cover rounded-md mb-2" />
                        <h3 className="text-white font-semibold">My Skills</h3>
                        <p className="text-sm text-white/80">This guy can work with these technologies.</p>
                    </div>

                    {/* Blogs */}
                    <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 hover:scale-105 transition-transform cursor-pointer">
                        <img src="/path-to-project3.jpg" alt="Project 3" className="w-full h-32 object-cover rounded-md mb-2" />
                        <h3 className="text-white font-semibold">Blogs</h3>
                        <p className="text-sm text-white/80">My articles and tutorials.</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex items-center gap-2">
                    <p className="text-white/80 text-center">You can reach out or check out what I create on:</p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/YourUsername" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/YourUsername" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://youtube.com/YourChannel" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <FaYoutube size={24} />
                        </a>
                        <a href="mailto:your-email@gmail.com" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <MdEmail size={24} />
                        </a>
                        <a href="https://facebook.com/YourProfile" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com/YourProfile" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div >

            {/* Menu button */}
            < div className="absolute bottom-5 left-1/2 transform -translate-x-1/2" >
                <div
                    className="flex items-center justify-center w-16 h-16 border-2 border-blue-500 text-blue-500 rounded-full
                     transition-all duration-300 hover:shadow-[0_0_15px_#ffffff] hover:scale-105 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <BsGrid size={24} />
                </div>
            </div >
        </div >
    )
}

export default Porfolio
