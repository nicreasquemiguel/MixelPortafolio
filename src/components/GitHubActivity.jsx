import { GitHubCalendar } from 'react-github-calendar'

const last3Months = (data) => {
  const cutoff = new Date()
  cutoff.setMonth(cutoff.getMonth() - 6)
  return data.filter(d => new Date(d.date) >= cutoff)
}

const GitHubActivity = () => {
  const isMobile = window.innerWidth < 768

  return (
    <div className="px-6 py-16 mx-auto max-w-7xl">
      <p className="mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]">github — frame</p>
      <div className="figma-frame p-6 md:p-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">GitHub Activity</span>
          <div className="flex-1 h-px bg-white/[0.06]"></div>
        </div>

        <GitHubCalendar
          username="nicreasquemiguel"
          colorScheme="dark"
          theme={{ dark: ['#1e1e1e', '#3d0000', '#7a0000', '#b91c1c', '#ef4444'] }}
          transformData={isMobile ? last3Months : undefined}
          blockSize={isMobile ? 12 : 14}
          blockMargin={isMobile ? 3 : 4}
          fontSize={12}
          style={{ color: 'rgba(255,255,255,0.3)', width: '100%' }}
        />
      </div>
    </div>
  )
}

export default GitHubActivity
