import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Wearable Navigation System",
    description:
      "AI-powered wearable for visually impaired users. Uses YOLOv5 for object detection, MiDaS for depth estimation, and provides real-time guidance via BLE, haptics, and audio feedback.",
    image: "/projects/wearable.png",
    video: "/projects/wearable.mp4", // add your video path here
    tags: ["YOLOv5", "MiDaS", "ESP32", "BLE"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Smart House System",
    description:
      "IoT-based automation system using Node-RED, Raspberry Pi and Firebase, enabling real-time device monitoring and control with a clean dashboard interface.",
    image: "/projects/smarthouse.png",
    video: "/projects/smarthouse.mp4",
    tags: ["Node-RED","Raspberry Pi", "Firebase", "IoT"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Irrigation Monitoring System",
    description:
      "LoRa + Esp32 solution for precision farming. Collects real-time environmental data to optimize irrigation and water usage.",
    image: "/projects/irrigation.png",
    video: "/projects/irrigation.mp4",
    tags: ["LoRa", "Esp32","Firebase","IoT"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, ranging from AI-powered wearable
          systems to IoT automation and mobile applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                {/* Thumbnail image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Video on hover */}
                {project.video && (
                  <video
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/asma-akremi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
