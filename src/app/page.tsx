import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-pattern">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Arc patterns */}
          <div className="arc-pattern top-20 -left-40" />
          <div className="arc-pattern top-40 -right-20 w-[400px] h-[400px]" />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F5FFF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9B7FD8]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          {/* VIBE Logo */}
          <img
            src="/vibe.svg"
            alt="VIBE"
            className="w-auto h-[20rem] md:h-[26rem] max-w-[100vw] object-contain animate-float-cube"
          />

          {/* Yellow Card - Main Content */}
          <div className="yellow-card px-8 pt-2 pb-8 md:px-12 md:pt-3 md:pb-10 max-w-3xl mx-6 mb-10 animate-float -mt-24">
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                Coding
              </h1>
              <p className="text-lg md:text-xl font-medium text-black/70 mb-2">
                0G AI Vibe Coding Session | 深圳站
              </p>
              <p className="text-sm text-black/50">2026年1月31日 9:00-18:00</p>
            </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 px-6">
            自带随性高效 Buff 的{" "}
            <span className="text-[#FFD500] font-semibold">Vibe Coding</span>
            ， 撞上{" "}
            <span className="text-[#9200E1] font-semibold">0G 生态</span>
            的酷玩法
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 px-6">
            单日聚焦 Trading 核心开发，将创意落地为可部署的 MVP
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10 px-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD500]">
                2
              </div>
              <div className="text-gray-500 mt-1">核心赛道</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-purple">
                1天
              </div>
              <div className="text-gray-500 mt-1">高效开发</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                MVP
              </div>
              <div className="text-gray-500 mt-1">现场部署</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center px-6">
            <a href="#tracks" className="cta-button text-lg">
              了解赛道详情
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#FFD500]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-6"></div>

      {/* Tracks Section */}
      <section id="tracks" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="tag mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFD500]"></span>
              双赛道
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              两大<span className="gradient-text">核心赛道</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI+Web3 项目，当天完成带基本功能的 MVP，成功部署至 0G 测试网
            </p>
          </div>

          {/* Track Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="track-card track-card-1 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD500] flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[#FFD500] text-sm font-medium">
                    Track 1
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">Agent 原生支付与信任基础设施</h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4 italic">From Payment to Trust</p>

              <p className="text-xl md:text-2xl font-semibold mb-6 gradient-text-yellow">
                从支付到信任：让 Agent 经济从实验室走向生产
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#FFD500] font-bold mt-1 whitespace-nowrap">🎯 目标</span>
                  <p className="text-gray-400">
                    补齐 x402 协议的三大关键缺口：
                    <span className="text-white font-medium">
                      信任机制 · 服务发现 · 身份与信用系统
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FFD500] font-bold mt-1 whitespace-nowrap">⭐ 优势</span>
                  <div className="text-gray-400">
                    <p className="mb-2">
                      不只是「能支付」，而是建立
                      <span className="text-[#FFD500] font-medium">「敢支付」</span>
                      的信任闭环
                    </p>
                    <ul className="text-sm space-y-1 text-gray-500">
                      <li>• x402 只能回答：能不能付钱</li>
                      <li>• 0G 解决的是：该不该付钱、什么时候付钱</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Flow */}
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  🔗 0G 技术闭环（Agent ↔ Agent）
                </h4>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flow-item flow-yellow">Agent 调用</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-purple">合约托管支付（Escrow）</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-yellow">DA 层服务存证</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-purple">Compute 层服务质量验证</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-yellow">资金释放 & 信用更新（INFT）</span>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  一个无需中心化仲裁的 Agent 原生信任系统
                </p>
              </div>

              {/* Summary */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-base md:text-lg text-gray-300 italic">
                  &ldquo;0G makes agents not just payable, but <span className="text-[#FFD500] font-medium">trustworthy</span>.&rdquo;
                </p>
              </div>
            </div>

            {/* Track 2 */}
            <div className="track-card track-card-2 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9B7FD8] to-[#F5A8D9] flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[#9B7FD8] text-sm font-medium">
                    Track 2
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">去中心化 AI Trading 竞技场</h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4 italic">Verifiable AI Trading Arena</p>

              <p className="text-xl md:text-2xl font-semibold mb-6 gradient-text-purple">
                让 AI 交易从概率变成科学
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#9B7FD8] font-bold mt-1 whitespace-nowrap">🎯 目标</span>
                  <p className="text-gray-400">
                    彻底破解 AI 交易策略黑箱问题，实现
                    <span className="text-white font-medium">
                      数据、执行、结果的全流程透明与可验证
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#9B7FD8] font-bold mt-1 whitespace-nowrap">⭐ 优势</span>
                  <div className="text-gray-400">
                    <p className="mb-2">
                      不是"谁敢晒收益"，而是
                      <span className="text-[#9B7FD8] font-medium">"谁能被复现"</span>
                    </p>
                    <ul className="text-sm space-y-1 text-gray-500">
                      <li>• 策略不是 PPT</li>
                      <li>• 收益不是截图</li>
                      <li>• 决策过程可被任何人验证</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Flow */}
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  🔗 0G 技术闭环（Strategy ↔ Market）
                </h4>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flow-item flow-purple">策略 / Agent 注册（INFT）</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-yellow">统一 DA 数据输入</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-purple">Compute 层可信执行 / 回测</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-yellow">结果写入 DA + Log</span>
                  <span className="text-gray-600 text-center">↓</span>
                  <span className="flow-item flow-purple">合约自动结算 & 排名</span>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  AI Trading 第一次具备科研级别的可复现性
                </p>
              </div>

              {/* Summary */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-base md:text-lg text-gray-300 italic">
                  &ldquo;0G turns AI trading from belief into <span className="text-[#9B7FD8] font-medium">verifiable science</span>.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-6"></div>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#9B7FD8]/10 border border-[#9B7FD8]/30 text-[#9B7FD8] text-sm font-medium mb-4">
              活动亮点
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              为什么<span className="gradient-text">参加</span>？
            </h2>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Highlight 1 */}
            <div className="solution-card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFD500] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">轻量化开发</h3>
              <p className="text-gray-400">
                践行 Vibe Coding 理念，拒绝无效内耗，
                <span className="text-[#FFD500] font-medium">
                  单日完成 MVP 开发
                </span>
                并部署至 0G 测试网
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="solution-card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFD500] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-black"
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
              </div>
              <h3 className="text-xl font-bold mb-3">同频组队交流</h3>
              <p className="text-gray-400">
                现场对接 AI、区块链领域开发者，
                <span className="text-[#FFD500] font-medium">快速组队</span>
                ，碰撞创意火花
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="solution-card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFD500] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">官方技术支持</h3>
              <p className="text-gray-400">
                先学后做，
                <span className="text-[#FFD500] font-medium">
                  0G Global Developer Team 驻场答疑
                </span>
                ，项目优化一对一建议
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="solution-card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFD500] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">现场评审颁奖</h3>
              <p className="text-gray-400">
                <span className="text-[#FFD500] font-medium">
                  现场 Pitch，现场评审，现场颁奖
                </span>
                ，即刻见证你的成果
              </p>
            </div>

            {/* Highlight 5 */}
            <div className="solution-card p-8 md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD500] to-[#9B7FD8] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">赋能生态成长</h3>
              <p className="text-gray-400">
                所有项目将纳入{" "}
                <span className="gradient-text font-medium">
                  0G 生态项目清单
                </span>
                ，优质项目有机会获得后续生态扶持
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-6"></div>

      {/* Event Info Section */}
      <section id="info" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="tag mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFD500]"></span>
              活动信息
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              时间<span className="gradient-text">地点</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left - Event Details */}
            <div className="gradient-border p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">活动详情</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD500]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#FFD500]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">地点</div>
                    <div className="text-gray-400">
                      深圳市南山区（具体场地审核后通知）
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9B7FD8]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#9B7FD8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">时间</div>
                    <div className="text-gray-400">
                      2026年1月31日 9:00-18:00
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      签到时间：9:00-9:30
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5A8D9]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#F5A8D9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">提供午餐</div>
                    <div className="text-gray-400">活动期间免费提供午餐</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4F5FFF]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#4F5FFF]"
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
                  </div>
                  <div>
                    <div className="font-medium text-white">参与对象</div>
                    <div className="text-gray-400">
                      具备 AI/区块链基础的开发者（solo/团队均可，可现场组队）
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Requirements */}
            <div className="gradient-border p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text-purple">
                报名必填
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-[#FFD500] font-bold">1</span>
                  <div>
                    <div className="font-medium text-white">
                      GitHub 账号链接
                    </div>
                    <div className="text-sm text-gray-500">
                      需含过往项目记录，无项目者不予通过
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-[#9B7FD8] font-bold">2</span>
                  <div>
                    <div className="font-medium text-white">技术背景说明</div>
                    <div className="text-sm text-gray-500">
                      擅长技术栈、开发经验
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-[#F5A8D9] font-bold">3</span>
                  <div>
                    <div className="font-medium text-white">
                      过往核心项目介绍
                    </div>
                    <div className="text-sm text-gray-500">
                      1-2个，说明角色与成果
                    </div>
                  </div>
                </div>
              </div>

              <div className="warning-box">
                <h4 className="font-medium text-[#ff6b6b] mb-2">重要提醒</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    需自带笔记本电脑及充电器，提前配置 0G 开发环境
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    建议具备 AI 或区块链基础，无相关基础者报名审核不予通过
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/0G-Logo.svg" alt="0G Logo" className="h-8" />
              <div>
                <div className="font-semibold">0G Labs</div>
                <div className="text-sm text-gray-500">
                  AI Vibe Coding Session | 深圳站
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a
                href="https://0g.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD500] transition-colors"
              >
                官网
              </a>
              <a
                href="https://docs.0g.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD500] transition-colors"
              >
                文档
              </a>
              <a
                href="https://github.com/0gfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD500] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/0G_Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD500] transition-colors"
              >
                Twitter
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2026 0G Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
