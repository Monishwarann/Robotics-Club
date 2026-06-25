import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { A as CodeXml, C as Cpu, D as BookOpen, E as Bug, O as ArrowRight, S as Eye, T as Calendar, _ as Instagram, a as Users, b as GitBranch, c as Send, d as Mic, f as Menu, g as Lightbulb, h as Linkedin, i as Wrench, j as ChartColumn, k as Sparkles, l as Rocket, m as Mail, n as Youtube, o as Trophy, p as MapPin, r as X, s as Target, t as Zap, u as Phone, v as GraduationCap, w as Check, x as FileCode, y as Github } from "../_libs/lucide-react.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNjnvwia.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Background() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--neon)]/20 blur-3xl",
				animate: {
					x: [
						0,
						60,
						0
					],
					y: [
						0,
						40,
						0
					]
				},
				transition: {
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--neon-cyan)]/15 blur-3xl",
				animate: {
					x: [
						0,
						-60,
						0
					],
					y: [
						0,
						-40,
						0
					]
				},
				transition: {
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute h-1 w-1 rounded-full bg-[var(--neon-cyan)]",
				style: {
					top: `${i * 37 % 100}%`,
					left: `${i * 53 % 100}%`
				},
				animate: {
					opacity: [
						.2,
						1,
						.2
					],
					scale: [
						1,
						1.6,
						1
					]
				},
				transition: {
					duration: 3 + i % 5,
					repeat: Infinity,
					delay: i * .2
				}
			}, i))
		]
	});
}
var links$1 = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About Us"
	},
	{
		href: "#events",
		label: "Events"
	},
	{
		href: "#team",
		label: "Executives"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 ${scrolled ? "shadow-neon" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-2 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "ROBOCLUB Logo",
							className: "h-9 w-9 rounded-xl object-cover shadow-neon border border-[var(--neon)]/30 group-hover:scale-105 transition-transform"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-bold tracking-widest",
							children: ["ROBOTICS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "CLUB"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 md:flex",
						children: links$1.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "relative rounded-lg px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground hover:bg-white/5",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden rounded-xl bg-[var(--gradient-neon)] px-4 py-2 text-sm font-semibold text-white shadow-neon transition hover:scale-105 md:inline-block",
						children: "Join Now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "rounded-lg p-2 text-foreground md:hidden",
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden",
				children: links$1.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					onClick: () => setOpen(false),
					href: l.href,
					className: "block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5",
					children: l.label
				}) }, l.href))
			})]
		})
	});
}
function Counter({ to, duration = 1.6 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / (duration * 1e3));
			setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: n
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "glass-neon inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--neon-cyan)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Engineering the Future"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "font-display mt-6 text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl",
						children: [
							"ROBOTICS",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "CLUB"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .7,
							delay: .25
						},
						className: "font-display mt-4 text-lg tracking-[0.4em] text-[var(--neon-cyan)]",
						children: "BUILD · INNOVATE · ENGINEER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .35
						},
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg mx-auto",
						children: "A build-first engineering ecosystem where students consistently design, develop, and deploy intelligent systems that solve real-world problems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .45
						},
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#about",
							className: "group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-6 py-3 text-sm font-semibold text-white shadow-neon transition hover:scale-105",
							children: ["Explore More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#events",
							className: "glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), "View Events"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl mx-auto",
						children: [
							{
								n: 6,
								l: "Planned Events"
							},
							{
								n: 7,
								l: "Core Executives"
							},
							{
								n: 12,
								l: "Objectives"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .5 + i * .1
							},
							className: "glass rounded-2xl p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-3xl font-bold text-gradient sm:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.n }), "+"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
								children: s.l
							})]
						}, s.l))
					})
				]
			})
		})
	});
}
function SectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "glass-neon inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--neon-cyan)]",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { delay: .05 },
				className: "font-display mt-4 text-4xl font-black sm:text-5xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { delay: .1 },
				className: "mt-4 text-base text-muted-foreground sm:text-lg",
				children: description
			})
		]
	});
}
function FadeIn({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .5,
			delay
		},
		className,
		children
	});
}
var vision = [
	"Execution over theory — prioritizing working systems",
	"Engineering depth — strong fundamentals through real implementation",
	"Innovation with purpose — solving practical problems",
	"Sustainable growth — evolving beyond individual batches"
];
var mission = [
	"Build Culture — learn by building approach",
	"Structured Progression — Foundation → Advanced",
	"Real-World Engineering — practical solutions",
	"Team-Based Development — defined roles"
];
function Card({ icon: Icon, title, desc, points }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass group relative h-full overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1 hover:shadow-neon",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-2xl transition group-hover:bg-[var(--neon)]/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-neon)] text-white shadow-neon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-5 text-2xl font-bold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--neon)]/15 text-[var(--neon-cyan)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/90",
							children: p
						})]
					}, p))
				})
			]
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Who We Are",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["About ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Robotics Club"
				})] }),
				description: "Transforming passionate students into skilled robotics engineers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					icon: Eye,
					title: "Our Vision",
					desc: "To transform the robotics club into a build-first engineering ecosystem where students consistently design, develop, and deploy intelligent systems that solve real-world problems.",
					points: vision
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: Target,
						title: "Our Mission",
						desc: "To systematically convert interested students into skilled robotics engineers through structured training, continuous building, and exposure to real-world engineering challenges.",
						points: mission
					})
				})]
			})]
		})
	});
}
var items = [
	{
		icon: GitBranch,
		t: "Learning Pipeline",
		d: "Implement a structured learning-to-building pipeline with mandatory deliverables at each level."
	},
	{
		icon: Wrench,
		t: "Build Every Semester",
		d: "Ensure every member completes at least one functional robotics project per semester."
	},
	{
		icon: Users,
		t: "Project Team System",
		d: "Establish a project-based team system simulating real-world engineering practices."
	},
	{
		icon: Lightbulb,
		t: "Problem Solving",
		d: "Develop a problem-solving culture with real-world problem statements for campus and industry."
	},
	{
		icon: FileCode,
		t: "Docs & Git",
		d: "Mandate technical documentation and version control using GitHub."
	},
	{
		icon: Bug,
		t: "Design Reviews",
		d: "Conduct regular design reviews and debugging sessions with structured feedback."
	},
	{
		icon: Trophy,
		t: "Competitions",
		d: "Facilitate participation in minimum 3 national-level competitions annually."
	},
	{
		icon: Cpu,
		t: "Advanced Tools",
		d: "Introduce advanced tools like ROS, Computer Vision, AI, and Automation Systems."
	},
	{
		icon: GraduationCap,
		t: "Peer Mentorship",
		d: "Establish a peer mentorship model with hands-on support and project supervision."
	},
	{
		icon: Zap,
		t: "Build Sprints",
		d: "Organize internal technical challenges and rapid build sprints."
	},
	{
		icon: ChartColumn,
		t: "Performance Metrics",
		d: "Track performance using technical metrics such as prototypes, completion rate, and contributions."
	},
	{
		icon: BookOpen,
		t: "Knowledge Ecosystem",
		d: "Create a sustainable knowledge ecosystem passed on to future members."
	}
];
function Objectives() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Roadmap",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["12 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Objectives"
				})] }),
				description: "A clear, executable framework for building the next generation of robotics engineers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: {
						duration: .45,
						delay: i % 3 * .08
					},
					className: "glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-neon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl glass-neon text-[var(--neon-cyan)] transition group-hover:bg-[var(--gradient-neon)] group-hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs text-[var(--neon-cyan)]",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: it.t
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: it.d
							})]
						})]
					})
				}, it.t))
			})]
		})
	});
}
var events = [
	{
		icon: CodeXml,
		tag: "Hackathons",
		title: "Hackathons",
		desc: "Two intensive build events that push teams to design end-to-end systems under time pressure.",
		bullets: ["Collaborative Hackathon — interdisciplinary teamwork with another technical club.", "System Design Arena — full robotics architectures: hardware, software, sensors, control."]
	},
	{
		icon: Rocket,
		tag: "Flagship",
		title: "Robotics Project Expo",
		desc: "A large-scale technical exhibition showcasing fully functional robotics projects developed by students.",
		bullets: ["Flagship event of the year", "Open showcase for the campus & industry"]
	},
	{
		icon: Trophy,
		tag: "Competition",
		title: "Robotics Competitions",
		desc: "Line Follower & Autonomous Robot challenges focused on real engineering depth.",
		bullets: [
			"Sensor Integration · Control Algorithms",
			"Navigation · Obstacle Avoidance",
			"Real-Time Decision Making"
		]
	},
	{
		icon: Mic,
		tag: "Talks",
		title: "Industry Expert Talks",
		desc: "Two technical sessions by robotics engineers and industry professionals.",
		bullets: ["Insights from working engineers", "Career & research pathways"]
	},
	{
		icon: Wrench,
		tag: "Workshops",
		title: "Hands-on Technical Workshops",
		desc: "Two practical workshops covering core hardware & system integration.",
		bullets: ["Embedded Systems · Sensors · Actuators", "IoT · System Integration"]
	},
	{
		icon: Cpu,
		tag: "Bootcamp",
		title: "Robotics Bootcamp Series",
		desc: "A multi-phase training program conducted with robotics startups and technical experts.",
		bullets: [
			"Fundamentals · Embedded Programming",
			"AI Robotics · Advanced Applications",
			"Project Development · Mentorship"
		]
	}
];
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "events",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Planned Activities",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Events & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Programs"
				})] }),
				description: "Six flagship initiatives engineered to forge builders, not spectators."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 max-w-5xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[var(--neon-cyan)]/20 shadow-neon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-12",
					children: events.map((e, i) => {
						const isLeft = i % 2 === 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-4 md:left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-[var(--neon-cyan)] bg-[var(--background)] flex items-center justify-center text-[10px] font-bold text-[var(--neon-cyan)] shadow-neon z-10",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `ml-12 md:ml-0 ${isLeft ? "md:pr-12 md:col-start-1" : "md:pl-12 md:col-start-2"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
									initial: {
										opacity: 0,
										x: isLeft ? -50 : 50
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: {
										once: true,
										margin: "-50px"
									},
									transition: {
										duration: .5,
										delay: .1
									},
									className: "glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-neon",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--neon-cyan)]/10 blur-2xl transition group-hover:bg-[var(--neon-cyan)]/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-neon)] text-white shadow-neon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-[10px] uppercase tracking-widest text-[var(--neon-cyan)] glass-neon rounded-full px-3 py-1",
													children: e.tag
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display mt-5 text-xl font-bold",
												children: e.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted-foreground",
												children: e.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-5 space-y-2",
												children: e.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-2 text-sm text-foreground/85",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-cyan)] shadow-neon" }), b]
												}, b))
											})
										]
									})]
								})
							})]
						}, e.title);
					})
				})]
			})]
		})
	});
}
var advisor = {
	name: "Mr. V. Arul",
	role: "Faculty Advisor & Club Incharge",
	meta: "Faculty",
	phone: "9047290488",
	image: "/arul.jpg",
	linkedIn: "https://www.linkedin.com/in/v-arul-7874444a/",
	mail: "[EMAIL_ADDRESS]",
	github: "https://github.com/varul-mech",
	accent: true
};
var team = [
	{
		name: "Santhosh Kumar M",
		role: "President",
		meta: "MECH — III Year",
		phone: "7305422329",
		image: "/santhosh.jpg",
		linkedIn: "https://www.linkedin.com/in/san",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	},
	{
		name: "Maha Lakshmi M",
		role: "Vice President",
		meta: "MECH — III Year",
		phone: "6383651679",
		linkedIn: "https://www.linkedin.com/in/maha-lakshmi-m-416194295/",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	},
	{
		name: "Monishwaran K",
		role: "Secretary",
		meta: "MECH — III Year",
		phone: "7358996358",
		image: "/monishwaran.jpg",
		linkedIn: "https://www.linkedin.com/in/monishwaran-k-b463a3363/",
		mail: "k.monishwaran123@gmail.com",
		github: "https://github.com/Monishwarann"
	},
	{
		name: "Jai Ashwin R M",
		role: "Joint Secretary",
		meta: "MECH — II Year",
		phone: "9342643672",
		image: "/jai ashwin.jpg",
		linkedIn: "https://www.linkedin.com/in/jai-ashwin-r-m-0b3671306/",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	},
	{
		name: "Jashwin S",
		role: "Treasurer",
		meta: "MECH — III Year",
		phone: "6380705052",
		linkedIn: "https://www.linkedin.com/in/jashwin-s-6a488a29a/",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	},
	{
		name: "Akshayan S",
		role: "Joint Treasurer",
		meta: "MECH — II Year",
		phone: "9585689708",
		image: "/akshayan.jpg",
		linkedIn: "https://www.linkedin.com/in/akshayan-s-5749a026b/",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	},
	{
		name: "Mahati S",
		role: "Overall Coordinator",
		meta: "MECH — II Year",
		phone: "9840712679",
		image: "/mahati.jpg",
		linkedIn: "https://www.linkedin.com/in/mahati-s-720b76299/",
		mail: "[EMAIL_ADDRESS]",
		github: "https://github.com/varul-mech"
	}
];
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}
function MemberCard({ m, i, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration: .5,
			delay: i % 4 * .08
		},
		className: "glass group relative overflow-hidden rounded-3xl text-center transition hover:-translate-y-1 hover:shadow-neon",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-[var(--neon)]/15 blur-3xl transition group-hover:bg-[var(--neon)]/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square w-full overflow-hidden bg-white/5",
				children: [m.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: m.image,
					alt: m.name,
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center bg-[var(--gradient-neon)]/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-black text-gradient",
						children: initials(m.name)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 left-4 text-xs font-semibold tracking-wider text-[var(--neon-cyan)] drop-shadow-md",
					children: m.meta
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `font-display font-bold ${large ? "text-xl" : "text-lg"}`,
						children: m.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 inline-block rounded-full bg-violet-950/45 border border-violet-800/30 px-3 py-1 text-xs font-semibold text-violet-300",
						children: m.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${m.phone}`,
						className: "mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-[var(--neon-cyan)] transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-[var(--neon-cyan)]" }), m.phone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-2",
						children: [
							m.linkedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: m.linkedIn,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon",
								"aria-label": "LinkedIn Profile",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
							}),
							m.github && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: m.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon",
								"aria-label": "GitHub Profile",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
							}),
							m.mail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: m.mail.startsWith("mailto:") ? m.mail : `mailto:${m.mail}`,
								className: "grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon",
								"aria-label": "Email Contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							})
						]
					})
				]
			})]
		})]
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "The Team",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Meet Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Executives"
					})] }),
					description: "Builders, organizers, and engineers driving the Robotics Club mission forward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
							m: advisor,
							i: 0,
							large: true
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: team.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
						m,
						i: i + 1
					}, m.name))
				})
			]
		})
	});
}
var contacts = [
	{
		role: "President",
		name: "Santhosh Kumar M",
		phone: "7305422329"
	},
	{
		role: "Vice President",
		name: "Maha Lakshmi M",
		phone: "6383651679"
	},
	{
		role: "Secretary",
		name: "Monishwaran K",
		phone: "7358996358"
	}
];
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const publicKey = "VmNLMoJOgeE3nn6EB";
		setLoading(true);
		try {
			await es_default.send("service_cvt36sd", "template_4nhbzpg", {
				from_name: name,
				from_email: email,
				message
			}, publicKey);
			toast.success("Message sent successfully!");
			setSent(true);
			setName("");
			setEmail("");
			setMessage("");
			setTimeout(() => setSent(false), 5e3);
		} catch (error) {
			console.error(error);
			const errorMsg = error?.text || error?.message || "Please try again.";
			toast.error(`Failed to send message: ${errorMsg}`);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Get in Touch",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Contact ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Robotics Club"
					})] }),
					description: "Reach our core team or send us a message — we build, we listen, we ship."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-3",
					children: contacts.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .45,
							delay: i * .08
						},
						className: "glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-neon",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]",
								children: c.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-xl font-bold",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${c.phone}`,
								className: "mt-4 inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-[var(--neon-cyan)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									c.phone
								]
							})
						]
					}, c.role))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						onSubmit: handleSubmit,
						className: "glass rounded-3xl p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "Send a Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "We typically respond within 48 hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											name: "name",
											value: name,
											onChange: (e) => setName(e.target.value),
											className: "rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]",
											placeholder: "Your full name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											name: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]",
											placeholder: "you@college.edu"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											name: "message",
											value: message,
											onChange: (e) => setMessage(e.target.value),
											rows: 5,
											className: "rounded-xl bg-[var(--input)] px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:ring-[var(--neon)]",
											placeholder: "Tell us about your idea or question…"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: loading,
										className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), loading ? "Sending..." : sent ? "Message Sent ✓" : "Submit"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "glass relative overflow-hidden rounded-3xl p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "Visit the Lab"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Robotics Club Headquarters — Engineering Block"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-lg glass-neon text-[var(--neon-cyan)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
									}), "363, Arcot Road, Puliyur 1st Main Rd, Subedar Colony, Kodambakkam, Chennai, Tamil Nadu 600024,India"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-lg glass-neon text-[var(--neon-cyan)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}), "hello@Robotics Club.in"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://maps.google.com/?q=Meenakshi+Sundararajan+Engineering+College",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group/map mt-6 block aspect-video w-full overflow-hidden rounded-2xl border border-[var(--neon)]/20 relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/map.png",
									alt: "Google Maps location of Meenakshi Sundararajan Engineering College",
									className: "h-full w-full object-cover transition duration-500 group-hover/map:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black/40 opacity-0 group-hover/map:opacity-100 transition-opacity flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-neon rounded-2xl px-5 py-3 text-center transform translate-y-2 group-hover/map:translate-y-0 transition-transform duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mx-auto h-6 w-6 text-[var(--neon-cyan)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display mt-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)]",
											children: "Open in Maps"
										})]
									})
								})]
							})
						]
					})]
				})
			]
		})
	});
}
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#events",
		label: "Events"
	},
	{
		href: "#team",
		label: "Team"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-[var(--border)] py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#home",
							className: "flex items-center gap-2 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.jpg",
								alt: "ROBOCLUB Logo",
								className: "h-9 w-9 rounded-xl object-cover shadow-neon border border-[var(--neon)]/30 group-hover:scale-105 transition-transform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold tracking-widest",
								children: ["ROBOTICS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "CLUB"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Build. Innovate. Engineer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-xs text-muted-foreground/80",
							children: "A build-first robotics ecosystem turning students into engineers who ship working systems."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-2 text-sm",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-muted-foreground transition hover:text-foreground",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-xs uppercase tracking-widest text-[var(--neon-cyan)]",
						children: "Follow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2",
						children: [
							Github,
							Linkedin,
							Instagram,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition hover:text-[var(--neon-cyan)] hover:shadow-neon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Robotics Club. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display tracking-widest",
					children: "ENGINEERING THE FUTURE"
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Objectives, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
