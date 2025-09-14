import { motion } from "framer-motion";

interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  icon: string;
  side: "left" | "right";
}

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase1",
    phase: "Phase 1",
    title: "Birth of BEBO", 
    description: "Token launch, community building, and initial liquidity",
    status: "completed",
    icon: "🥚",
    side: "right"
  },
  {
    id: "phase2", 
    phase: "Phase 2",
    title: "Growing Strong",
    description: "CoinGecko & CoinMarketCap listings, partnerships",
    status: "completed", 
    icon: "🐣",
    side: "left"
  },
  {
    id: "phase3",
    phase: "Phase 3", 
    title: "Tech Evolution",
    description: "DEX development, staking rewards, mobile app",
    status: "in-progress",
    icon: "🐸",
    side: "right"
  },
  {
    id: "phase4",
    phase: "Phase 4",
    title: "BEBO Empire", 
    description: "Cross-chain expansion, NFT collection, DeFi ecosystem",
    status: "upcoming",
    icon: "👑", 
    side: "left"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500 text-green-500";
    case "in-progress": 
      return "bg-accent text-accent";
    case "upcoming":
      return "bg-muted-foreground text-muted-foreground";
    default:
      return "bg-muted-foreground text-muted-foreground";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "upcoming":
      return "Upcoming";
    default:
      return "Unknown";
  }
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">BEBO's Journey</h2>
            <p className="text-xl text-muted-foreground">From cute meme to DeFi sensation</p>
          </motion.div>

          <div className="relative">
            {/* Roadmap Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  {phase.side === "right" ? (
                    <>
                      <div className="flex-1 text-right pr-8">
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                          <div className="flex items-center justify-end mb-2">
                            <span className={`${getStatusColor(phase.status)} bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold`}>
                              {getStatusText(phase.status)}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2">{phase.phase}: {phase.title}</h3>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                      <motion.div 
                        className={`w-12 h-12 ${phase.status === "in-progress" ? "bg-accent animate-pulse" : phase.status === "completed" ? "bg-primary" : "bg-muted"} rounded-full border-4 border-background flex items-center justify-center relative z-10`}
                        whileHover={{ scale: 1.1 }}
                        data-testid={`roadmap-icon-${phase.id}`}
                      >
                        <div className="text-xl">{phase.icon}</div>
                      </motion.div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <motion.div 
                        className={`w-12 h-12 ${phase.status === "in-progress" ? "bg-accent animate-pulse" : phase.status === "completed" ? "bg-primary" : "bg-muted"} rounded-full border-4 border-background flex items-center justify-center relative z-10`}
                        whileHover={{ scale: 1.1 }}
                        data-testid={`roadmap-icon-${phase.id}`}
                      >
                        <div className="text-xl">{phase.icon}</div>
                      </motion.div>
                      <div className="flex-1 text-left pl-8">
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                          <div className="flex items-center mb-2">
                            <span className={`${getStatusColor(phase.status)} bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold`}>
                              {getStatusText(phase.status)}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2">{phase.phase}: {phase.title}</h3>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
