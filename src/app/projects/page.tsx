import Link from "next/link";
import Navigation from "@/components/Navigation";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const { stats, tracks, projects } = projectsData;

  const trackColors: Record<string, { bg: string; text: string; border: string }> = {
    yellow: { bg: "bg-[#FFD500]/20", text: "text-[#FFD500]", border: "border-[#FFD500]/30" },
    purple: { bg: "bg-[#9B7FD8]/20", text: "text-[#9B7FD8]", border: "border-[#9B7FD8]/30" },
    pink: { bg: "bg-[#F5A8D9]/20", text: "text-[#F5A8D9]", border: "border-[#F5A8D9]/30" },
    green: { bg: "bg-[#4ADE80]/20", text: "text-[#4ADE80]", border: "border-[#4ADE80]/30" },
  };

  const getTrackInfo = (trackId: number) => {
    const track = tracks[trackId.toString() as keyof typeof tracks];
    const colors = trackColors[track?.color || "yellow"];
    return { name: track?.name || `Track ${trackId}`, colors };
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation isSubPage />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD500] transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回首页
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="tag mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFD500]"></span>
              项目展示
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              参赛<span className="gradient-text">项目</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              探索 0G AI Vibe Coding Session 深圳站的优秀项目
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold gradient-text-yellow">
                {stats.totalProjects}
              </div>
              <div className="text-gray-400 mt-2">总项目数</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold gradient-text-purple">
                {stats.totalTracks}
              </div>
              <div className="text-gray-400 mt-2">赛道</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                {stats.totalParticipants}
              </div>
              <div className="text-gray-400 mt-2">参赛人数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const trackInfo = getTrackInfo(project.track);
              return (
              <div
                key={project.id}
                className={`project-card p-8 border ${trackInfo.colors.border}`}
              >
                {/* Track Badge & Links */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${trackInfo.colors.bg} ${trackInfo.colors.text}`}
                  >
                    {trackInfo.name}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FFD500] transition-colors"
                        title="GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.xLink && (
                      <a
                        href={project.xLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FFD500] transition-colors"
                        title="X (Twitter)"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Members */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">成员</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.members.map((member, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/0G-Logo.svg" alt="0G Logo" className="h-8" />
              <div>
                <div className="font-semibold">0G Labs</div>
                <div className="text-sm text-gray-500">
                  AI Vibe Coding Session | 深圳站
                </div>
              </div>
            </Link>
            <div className="text-gray-600 text-sm">
              © 2026 0G Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
