import { useState, useRef } from "react";
import { 
  Code2, Cpu, Trophy, Mic, Wrench, Rocket, Compass, Lightbulb, 
  Smile, ShieldAlert, Heart, Box, Gamepad2, X, ExternalLink, Calendar, MapPin, Sparkles, Layers, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SectionHeader } from "./Section";

export interface EventData {
  id: number;
  poster: string;
  icon: any;
  category: "Competition" | "Bootcamp" | "Workshop" | "Challenge" | "Talk" | "Community" | "Design" | "E-Sports";
  title: string;
  tagline: string;
  subtitle?: string;
  desc: string;
  expectations: string[];
  gridItems: {
    title: string;
    desc: string;
    icon?: any;
  }[];
  date: string;
  time?: string;
  venue: string;
  status: "Coming Soon" | "Scheduled" | "Open for Registration";
  speaker?: {
    name: string;
    role: string;
    company: string;
  };
}

const eventsData: EventData[] = [
  {
    id: 1,
    poster: "/posters/1.webp",
    icon: Trophy,
    category: "Competition",
    title: "ROBOVERSE BOT RACE",
    tagline: "BUILD · PROGRAM · COMPETE",
    desc: "High-octane bot racing competition pushing teams to design, build, and program high-speed autonomous and remote-controlled bots to navigate customized track courses.",
    expectations: [
      "Thrilling Bot Races",
      "Innovative Designs",
      "Smart Coding",
      "Exciting Prizes",
      "Epic Experience",
    ],
    gridItems: [
      {
        title: "CHALLENGE",
        desc: "Designing high power-to-weight chassis capable of top speeds while maintaining stability through sharp corners and obstacles.",
      },
      {
        title: "APPROACH",
        desc: "Implementing high-torque brushless motors, real-time PID controllers, and optical line tracking for autonomous precision.",
      },
      {
        title: "RESULT",
        desc: "Battle-tested racing bots competing for cash prizes and ultimate bragging rights on the custom track arena.",
      },
    ],
    date: "Coming Soon",
    venue: "Main Arena",
    status: "Coming Soon",
  },
  {
    id: 2,
    poster: "/posters/2.webp",
    icon: Rocket,
    category: "Bootcamp",
    title: "SKYCRAFT DRONE BOOTCAMP",
    tagline: "LEARN · BUILD · FLY",
    desc: "Comprehensive hands-on drone engineering bootcamp covering airframe design, flight controller tuning, autonomous navigation, path optimization, and AI simulations.",
    expectations: [
      "Advanced Airframe Design",
      "Autonomous Navigation",
      "Flight Path Optimization",
      "AI Drone Simulation",
    ],
    gridItems: [
      {
        title: "ADVANCED AIRFRAME DESIGN",
        desc: "Composite materials and structural optimization for lightweight aerodynamic endurance.",
      },
      {
        title: "AUTONOMOUS NAVIGATION",
        desc: "GPS, LiDAR, and obstacle avoidance systems for true hands-free flight autonomy.",
      },
      {
        title: "FLIGHT PATH OPTIMIZATION",
        desc: "Mission planning and real-time path adjustment under dynamic atmospheric conditions.",
      },
      {
        title: "AI DRONE SIMULATION",
        desc: "Train AI flight models and human pilots in realistic virtual environments prior to hardware deployment.",
      },
    ],
    date: "Coming Soon",
    venue: "Innovation Lab",
    status: "Coming Soon",
  },
  {
    id: 3,
    poster: "/posters/3.webp",
    icon: Compass,
    category: "Challenge",
    title: "TREASURE HUNT",
    tagline: "SOLVE · SEARCH · DISCOVER",
    desc: "A high-stakes tech adventure where robotics meets clue solving, navigation puzzles, drone surveillance, and physical maze exploration to reach the ultimate treasure.",
    expectations: [
      "Exciting Challenges",
      "Mind-Bending Puzzles",
      "Teamwork & Strategy",
      "Tech Meets Adventure",
      "Amazing Prizes",
    ],
    gridItems: [
      {
        title: "FIND THE CLUES",
        desc: "Scan encrypted QR codes, decode hardware ciphers, and unlock coordinates using aerial drone feedback.",
      },
      {
        title: "SOLVE THE PUZZLES",
        desc: "Tackle multi-tier logic riddles and hardware bypass tasks requiring interdisciplinary teamwork.",
      },
      {
        title: "REACH THE TREASURE",
        desc: "Guide your rover through final obstacle checkpoints to claim cash rewards and exclusive trophies.",
      },
    ],
    date: "Coming Soon",
    venue: "Campus Grounds",
    status: "Coming Soon",
  },
  {
    id: 4,
    poster: "/posters/4.webp",
    icon: Lightbulb,
    category: "Competition",
    title: "NEXUS: INNOVATION PITCH EVENT",
    tagline: "IMAGINE · PITCH · DEPLOY",
    subtitle: "Idea Pitch for Robotics & Drones",
    desc: "Strategic innovation platform for student visionaries to pitch next-generation robotics systems, drone concepts, software algorithms, and hardware prototypes to expert judges.",
    expectations: [
      "Systems Innovation",
      "Software & Algorithms",
      "Operational Logic",
      "Hardware & Fabrication",
    ],
    gridItems: [
      {
        title: "SYSTEMS INNOVATION",
        desc: "New robot/drone concept designs addressing industrial, agricultural, and emergency response challenges.",
      },
      {
        title: "SOFTWARE & ALGORITHMS",
        desc: "Algorithms for autonomy, computer vision, spatial AI, and adaptive control systems.",
      },
      {
        title: "OPERATIONAL LOGIC",
        desc: "Mission planning, multi-agent fleet management, and real-time sensor telemetry dashboards.",
      },
      {
        title: "HARDWARE & FABRICATION",
        desc: "Working physical prototypes, custom PCB layouts, and advanced 3D printed mechanical assemblies.",
      },
    ],
    date: "Coming Soon",
    venue: "Auditorium",
    status: "Coming Soon",
  },
  {
    id: 5,
    poster: "/posters/5.webp",
    icon: Wrench,
    category: "Workshop",
    title: "ROBOTIC WORKSHOP",
    tagline: "LEARN · DESIGN · BUILD · INNOVATE",
    desc: "Hands-on technical workshop focusing on mechanical design, 3D printing, advanced circuitry, microcontroller programming, and full-system robotics integration.",
    expectations: [
      "Advanced Circuitry",
      "3D Printing & CAD",
      "Code Your Robot",
      "Sensor Integration",
      "Skill Certification",
    ],
    gridItems: [
      {
        title: "CIRCUITRY & SENSORS",
        desc: "Mastering power distribution, motor controllers, IMUs, ultrasonic sensors, and microcontrollers.",
      },
      {
        title: "3D PRINTING & CAD",
        desc: "Rapid mechanical prototyping using CAD software and 3D printers for custom chassis builds.",
      },
      {
        title: "EMBEDDED PROGRAMMING",
        desc: "Writing real-time control loops in C++ and Python for sensor data processing and actuation.",
      },
      {
        title: "PROJECT SHOWCASE",
        desc: "Assembling and demonstrating a fully operational mobile robot at the end of the workshop series.",
      },
    ],
    date: "Coming Soon",
    venue: "Hardware Lab",
    status: "Coming Soon",
  },
  {
    id: 6,
    poster: "/posters/6.webp",
    icon: Code2,
    category: "Workshop",
    title: "HACKATHON",
    tagline: "CODE · INNOVATE · AUTOMATE",
    subtitle: "Build Solutions. Shape Tomorrow.",
    desc: "Intensive build arena where hardware engineers and coders collaborate to design end-to-end autonomous robotic solutions under strict time pressure.",
    expectations: [
      "Innovative Ideas",
      "Smart Coding",
      "Hardware Build",
      "Teamwork & Networking",
      "Drone Challenges",
    ],
    gridItems: [
      {
        title: "HARDWARE & CO-DESIGN",
        desc: "Combining microprocessors, sensors, actuators, and software logic into a unified physical solution.",
      },
      {
        title: "AUTONOMOUS LOGIC",
        desc: "Developing fast, fault-tolerant state machines and computer vision routines under countdown pressure.",
      },
      {
        title: "LIVE DEMO & JUDGING",
        desc: "Demonstrating fully functional hardware prototypes in live test scenarios to industry judges.",
      },
    ],
    date: "Coming Soon",
    venue: "Maker Space",
    status: "Coming Soon",
  },
  {
    id: 7,
    poster: "/posters/7.webp",
    icon: Smile,
    category: "Challenge",
    title: "ROBO AERO",
    tagline: "PLAY · SOLVE · LAUGH · FLY HIGH!",
    subtitle: "A fun-filled event where robotics meets drone vibes!",
    desc: "High-energy interactive carnival celebrating robotics culture with drone pictionary, emoji guessing games, mechanical puzzle races, and paper plane precision targets.",
    expectations: [
      "Drone Pictionary",
      "Emoji Guess",
      "Drone Puzzle Race",
      "Paper Plane Target",
      "Non-stop Fun",
    ],
    gridItems: [
      {
        title: "DRONE PICTIONARY",
        desc: "Draw it, guess it! High-speed aerial drawing & guessing challenges for creative minds.",
      },
      {
        title: "EMOJI GUESS",
        desc: "Emojis speak, you guess! Technical robotics & flight terminology translated into fun emoji riddles.",
      },
      {
        title: "DRONE PUZZLE RACE",
        desc: "Pieces today, champions tomorrow! Assemble intricate 3D drone puzzles against the clock.",
      },
      {
        title: "PAPER PLANE TARGET",
        desc: "Aim, throw, score! Aerodynamic folding and target precision challenge.",
      },
    ],
    date: "Coming Soon",
    venue: "Student Plaza",
    status: "Coming Soon",
  },
  {
    id: 8,
    poster: "/posters/8.webp",
    icon: ShieldAlert,
    category: "Challenge",
    title: "ESCAPE PARADISE",
    tagline: "NAVIGATE · UNLOCK · ESCAPE",
    desc: "An immersive neon escape room where participant rovers and camera drones work synchronously to decipher codes, trigger mechanical switches, and escape the island portal.",
    expectations: [
      "Neon Escape Room",
      "Drone Reconnaissance",
      "Sync Rover Tasks",
      "Time-Attack Clues",
    ],
    gridItems: [
      {
        title: "AERIAL RECON",
        desc: "Piloting camera drones into restricted aerial zones to locate hidden cryptographic keys.",
      },
      {
        title: "ROVER NAVIGATION",
        desc: "Remote operating ground rovers through narrow labyrinths to press physical unlock levers.",
      },
      {
        title: "SYNCHRONIZED UNLOCK",
        desc: "Working under time-attack conditions to decode multi-stage locks before lockdown.",
      },
    ],
    date: "Coming Soon",
    venue: "Tech Zone",
    status: "Coming Soon",
  },
  {
    id: 9,
    poster: "/posters/9.webp",
    icon: Mic,
    category: "Talk",
    title: "INDUSTRY TALK",
    tagline: "INSIGHTS · INNOVATION · IMPACT",
    subtitle: "Bridging classroom learning with industry experience",
    desc: "Exclusive interactive keynote session featuring veteran robotics engineers sharing industry trends, career roadmaps, real-world deployment challenges, and future skills.",
    expectations: [
      "Industry 4.0 Trends",
      "Real-World Challenges",
      "Career Growth & Opportunities",
      "Innovation & Future Skills",
    ],
    gridItems: [
      {
        title: "INDUSTRY 4.0 TRENDS",
        desc: "Autonomous mobile robots (AMRs), industrial automation, smart manufacturing, and digital twins.",
      },
      {
        title: "REAL-WORLD CHALLENGES",
        desc: "Overcoming hardware reliability, thermal dissipation, sensor noise, and safety certifications.",
      },
      {
        title: "CAREER GROWTH",
        desc: "Building competitive portfolios, securing research internships, and landing top robotics engineering roles.",
      },
      {
        title: "FUTURE SKILLS",
        desc: "ROS2, spatial AI, embedded Linux, hardware acceleration, and drone swarm control.",
      },
    ],
    speaker: {
      name: "Industry Expert",
      role: "Senior Engineer / Manager",
      company: "Leading Innovator & Problem Solver",
    },
    date: "26 July 2025",
    time: "10:00 AM",
    venue: "Seminar Hall",
    status: "Scheduled",
  },
  {
    id: 10,
    poster: "/posters/10.webp",
    icon: Heart,
    category: "Community",
    title: "AWARENESS MARATHON",
    tagline: "RUN FOR A CAUSE. RUN FOR CHANGE.",
    subtitle: "In Collaboration with SIMS Hospital",
    desc: "A meaningful community marathon organized by Robotics & Drone Club in partnership with SIMS Hospital to promote wellness, health responsibility, and social change.",
    expectations: [
      "Run Together",
      "Raise Awareness",
      "Create Change",
      "SIMS Partnership",
    ],
    gridItems: [
      {
        title: "RUN TOGETHER",
        desc: "Uniting students, faculty, and health advocates for an energetic morning run.",
      },
      {
        title: "RAISE AWARENESS",
        desc: "Promoting health awareness, responsibility, and medical technology integration.",
      },
      {
        title: "CREATE CHANGE",
        desc: "Every step creates impact. Together we inspire a healthier tomorrow for everyone.",
      },
    ],
    date: "To Be Announced",
    venue: "Main Campus Route",
    status: "Coming Soon",
  },
  {
    id: 11,
    poster: "/posters/11.webp",
    icon: Box,
    category: "Design",
    title: "CADCRAFT",
    tagline: "CRAFT YOUR INNOVATION",
    subtitle: "A Robotics × Drone CAD Design Challenge",
    desc: "Precision 3D CAD design challenge pushing students to model futuristic drone frames, robotic manipulators, and mechanical mechanisms using computer-aided tools.",
    expectations: [
      "Design Your Idea",
      "Model in CAD",
      "Present Your Design",
      "Showcase Your Innovation",
    ],
    gridItems: [
      {
        title: "DESIGN YOUR IDEA",
        desc: "Conceptualize groundbreaking aerodynamic frames or robotic joint assemblies from scratch.",
      },
      {
        title: "MODEL IN CAD",
        desc: "Build accurate 3D solid models using CAD software with stress analysis and tolerance checks.",
      },
      {
        title: "PRESENT & SHOWCASE",
        desc: "Render high-resolution digital twins and present your engineering design to expert reviewers.",
      },
    ],
    date: "Coming Soon",
    venue: "CAD Suite",
    status: "Coming Soon",
  },
  {
    id: 12,
    poster: "/posters/12.webp",
    icon: Gamepad2,
    category: "E-Sports",
    title: "DRONE SIMULATION RACE",
    tagline: "SIMULATE · NAVIGATE · COMPETE",
    subtitle: "Virtual Skies. Real Competition.",
    desc: "High-velocity virtual FPV drone racing tournament testing pilot reaction speeds, aerodynamic flight trajectory planning, and lap optimization in virtual reality simulators.",
    expectations: [
      "Exciting Virtual Races",
      "Precision & Strategy",
      "Tech Meets Skill",
      "Amazing Rewards",
      "Compete & Connect",
    ],
    gridItems: [
      {
        title: "EXCITING VIRTUAL RACES",
        desc: "Compete in physics-accurate FPV drone race simulators on custom virtual tracks.",
      },
      {
        title: "PRECISION & STRATEGY",
        desc: "Master lap lines, air brakes, and throttle curves to beat international time trial benchmarks.",
      },
      {
        title: "AMAZING REWARDS",
        desc: "Win simulator accessories, flight trophies, and recognition as top drone pilot.",
      },
    ],
    date: "Coming Soon",
    venue: "Esports Lounge",
    status: "Coming Soon",
  },
];

const categories = [
  "ALL",
  "Competition",
  "Bootcamp",
  "Workshop",
  "Challenge",
  "Talk",
  "Community",
  "Design",
  "E-Sports",
];

// Interactive 3D Tilt Card Component
function PosterTimelineCard({
  event,
  index,
  onSelect,
}: {
  event: EventData;
  index: number;
  onSelect: (e: EventData) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth 3D tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 25 });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLeft = index % 2 === 1;

  return (
    <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      {/* Central Timeline Node Indicator */}
      <div className="absolute left-4 md:left-1/2 top-8 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-[var(--neon-cyan)] bg-[var(--background)] flex items-center justify-center text-xs font-extrabold text-[var(--neon-cyan)] shadow-[0_0_15px_rgba(0,242,254,0.5)] z-20 transition-transform duration-300 hover:scale-125">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Card placement wrapper */}
      <div
        className={`ml-12 md:ml-0 w-full ${
          isLeft ? "md:pr-12 md:col-start-1" : "md:pl-12 md:col-start-2"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: isLeft ? -10 : 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 * index }}
          className="perspective-1000 cursor-pointer"
          onClick={() => onSelect(event)}
        >
          <motion.article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: "preserve-3d",
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_35px_rgba(0,242,254,0.3)]"
          >
            {/* Background 3D Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl transition duration-500 group-hover:bg-[var(--neon-cyan)]/30" />

            {/* Poster Image Preview Box */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-inner"
            >
              <img
                src={event.poster}
                alt={event.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Category Badge on Poster */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-[var(--neon-cyan)]/30 bg-black/70 px-3 py-1 text-[11px] font-bold tracking-wider text-[var(--neon-cyan)] backdrop-blur-md shadow-neon">
                  <event.icon className="h-3.5 w-3.5" />
                  {event.category.toUpperCase()}
                </span>
              </div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300 backdrop-blur-md">
                  {event.status}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ transform: "translateZ(40px)" }} className="relative mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[var(--neon-cyan)] transition-colors">
                  {event.title}
                </h3>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--neon-cyan)]/90">
                {event.tagline}
              </p>

              <p className="line-clamp-2 text-sm text-slate-300/90 leading-relaxed">
                {event.desc}
              </p>

              {/* Expectation Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {event.expectations.slice(0, 3).map((exp) => (
                  <span
                    key={exp}
                    className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {exp}
                  </span>
                ))}
                {event.expectations.length > 3 && (
                  <span className="rounded-lg bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/20 px-2 py-1 text-[11px] font-semibold text-[var(--neon-cyan)]">
                    +{event.expectations.length - 3} more
                  </span>
                )}
              </div>

              {/* Interactive Tap Prompt */}
              <div className="pt-3 flex items-center justify-between text-xs font-bold text-[var(--neon-cyan)] group-hover:translate-x-1 transition-transform">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> Tap for Details & Full Poster
                </span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </div>
  );
}

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [showFullPoster, setShowFullPoster] = useState(false);

  const filteredEvents =
    selectedCategory === "ALL"
      ? eventsData
      : eventsData.filter((e) => e.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-[var(--neon-cyan)]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="OFFICIAL POSTERS & TIMELINE"
          title={
            <>
              Events & <span className="text-gradient">Programs</span>
            </>
          }
          description="Explore all 12 flagship initiatives. Tap any event to inspect full posters, guidelines, and competition breakdown."
        />

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--neon-cyan)] text-black font-extrabold shadow-[0_0_20px_rgba(0,242,254,0.6)]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-cyan)]/40 to-transparent shadow-[0_0_15px_rgba(0,242,254,0.3)]" />

          <div className="space-y-16">
            {filteredEvents.map((event, index) => (
              <PosterTimelineCard
                key={event.id}
                event={event}
                index={index}
                onSelect={(evt) => setSelectedEvent(evt)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Interactive Event Details Modal (Matching User Screenshots 2 & 3) */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => {
              setSelectedEvent(null);
              setShowFullPoster(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 30, rotateX: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-slate-950 text-white shadow-2xl my-6 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => {
                  setSelectedEvent(null);
                  setShowFullPoster(false);
                }}
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-slate-300 border border-white/20 hover:bg-white hover:text-black transition duration-200 backdrop-blur-md shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>

              {/* LEFT SIDE: Poster Display */}
              <div className="w-full md:w-5/12 lg:w-5/12 p-5 bg-slate-900/60 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center shrink-0">
                <div 
                  className="relative w-full h-64 md:h-full max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center group cursor-pointer"
                  onClick={() => setShowFullPoster(true)}
                >
                  <img
                    src={selectedEvent.poster}
                    alt={selectedEvent.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badges on Poster */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                    <span className="rounded-full bg-[var(--neon-cyan)] text-black px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-neon">
                      {selectedEvent.category}
                    </span>
                    <span className="rounded-full bg-slate-950/80 text-white border border-white/30 px-3 py-1 text-[11px] font-semibold backdrop-blur-md">
                      {selectedEvent.status}
                    </span>
                  </div>

                  {/* Floating Action Button to Enlarge Poster */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFullPoster(true);
                    }}
                    className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-xl bg-slate-950/90 border border-white/20 px-3 py-1.5 text-xs font-bold text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-black transition-all shadow-lg backdrop-blur-md"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Full Poster
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: Event Details Scrollable Content */}
              <div className="w-full md:w-7/12 lg:w-7/12 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-6 flex-grow">
                {/* Event Title Header */}
                <div className="space-y-1 pr-8">
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--neon-cyan)]">
                    {selectedEvent.tagline} {selectedEvent.subtitle && `— ${selectedEvent.subtitle}`}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-300 leading-relaxed border-l-2 border-[var(--neon-cyan)] pl-4 py-1 bg-white/5 rounded-r-xl">
                  {selectedEvent.desc}
                </p>

                {/* Speaker Info if Speaker Talk */}
                {selectedEvent.speaker && (
                  <div className="rounded-2xl border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 p-4 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-[var(--neon-cyan)]/20 border border-[var(--neon-cyan)] flex items-center justify-center text-[var(--neon-cyan)] font-extrabold text-base shrink-0">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Speaker: {selectedEvent.speaker.name}</h4>
                      <p className="text-xs text-cyan-300">{selectedEvent.speaker.role} · {selectedEvent.speaker.company}</p>
                    </div>
                  </div>
                )}

                {/* Structured Breakdown Cards */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-[var(--neon-cyan)]" /> DETAILED BREAKDOWN & HIGHLIGHTS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEvent.gridItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-1.5 hover:border-[var(--neon-cyan)]/50 transition-colors"
                      >
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--neon-cyan)]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What to Expect Chips */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                    WHAT TO EXPECT
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.expectations.map((exp) => (
                      <span
                        key={exp}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        ✓ {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metadata Row: Date, Time, Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                    <Calendar className="h-4 w-4 text-[var(--neon-cyan)] shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold">Date</span>
                      <span className="font-semibold text-white">{selectedEvent.date}</span>
                    </div>
                  </div>

                  {selectedEvent.time && (
                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                      <Sparkles className="h-4 w-4 text-[var(--neon-cyan)] shrink-0" />
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">Time</span>
                        <span className="font-semibold text-white">{selectedEvent.time}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                    <MapPin className="h-4 w-4 text-[var(--neon-cyan)] shrink-0" />
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold">Venue</span>
                      <span className="font-semibold text-white">{selectedEvent.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High Resolution Poster Lightbox Modal */}
      <AnimatePresence>
        {showFullPoster && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={() => setShowFullPoster(false)}
          >
            <button
              onClick={() => setShowFullPoster(false)}
              className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[95vh] max-w-[95vw] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedEvent.poster}
                alt={selectedEvent.title}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

