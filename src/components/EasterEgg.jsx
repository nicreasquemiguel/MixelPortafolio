import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const KONAMI_SEQUENCE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
]

const CANVAS_WIDTH = 340
const CANVAS_HEIGHT = 460
const PLAYER_SIZE = 32
const PLAYER_SPEED = 6

const drawBug = (ctx, x, y, size) => {
    const cx = x + size / 2
    const cy = y + size / 2

    ctx.fillStyle = 'rgba(255,255,255,0.9)'
    ctx.strokeStyle = 'rgba(255,255,255,0.9)'
    ctx.lineWidth = 1.5

    ctx.beginPath()
    ctx.ellipse(cx, cy, size * 0.26, size * 0.36, 0, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(cx, cy - size * 0.34, size * 0.16, 0, Math.PI * 2)
    ctx.fill()

    for (let i = -1; i <= 1; i++) {
        const legY = cy + i * size * 0.18
        ctx.beginPath()
        ctx.moveTo(cx - size * 0.2, legY)
        ctx.lineTo(cx - size * 0.42, legY + size * 0.1)
        ctx.moveTo(cx + size * 0.2, legY)
        ctx.lineTo(cx + size * 0.42, legY + size * 0.1)
        ctx.stroke()
    }

    ctx.beginPath()
    ctx.moveTo(cx - size * 0.06, cy - size * 0.46)
    ctx.lineTo(cx - size * 0.16, cy - size * 0.6)
    ctx.moveTo(cx + size * 0.06, cy - size * 0.46)
    ctx.lineTo(cx + size * 0.16, cy - size * 0.6)
    ctx.stroke()
}

const BugDodgeGame = ({ onClose }) => {
    const { t, i18n } = useTranslation('global')
    const priorities = t('easterEgg.priorities', { returnObjects: true })
    const titles = t('easterEgg.titles', { returnObjects: true })

    const canvasRef = useRef(null)
    const frameRef = useRef(null)
    const keysRef = useRef({ left: false, right: false })
    const stateRef = useRef(null)
    const [status, setStatus] = useState('idle')
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    const [ticketId, setTicketId] = useState(null)
    const [priority, setPriority] = useState(priorities[0])
    const [ticketTitle, setTicketTitle] = useState(titles[0])
    const [playerName, setPlayerName] = useState('')
    const initialRef = useRef('M')
    const nameInputRef = useRef(null)
    const scoreLabelRef = useRef('SCORE')

    useEffect(() => {
        const trimmed = playerName.trim()
        initialRef.current = trimmed ? trimmed[0].toUpperCase() : 'M'
    }, [playerName])

    useEffect(() => {
        scoreLabelRef.current = t('easterEgg.score')
    }, [t, i18n.language])

    useEffect(() => {
        if (status !== 'idle') return
        const id = requestAnimationFrame(() => nameInputRef.current?.focus())
        return () => cancelAnimationFrame(id)
    }, [status])

    const resetGame = useCallback(() => {
        stateRef.current = {
            playerX: CANVAS_WIDTH / 2 - PLAYER_SIZE / 2,
            bugs: [],
            frame: 0,
            speed: 2.4,
            score: 0,
        }
        setScore(0)
        setTicketId(null)
        setPriority(priorities[0])
        setStatus('playing')
    }, [priorities])

    const fileTicket = useCallback(() => {
        setTicketId(`MIXEL-${Math.floor(100 + Math.random() * 900)}`)
        setTicketTitle(titles[Math.floor(Math.random() * titles.length)])
    }, [titles])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const draw = () => {
            ctx.fillStyle = '#161616'
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

            ctx.fillStyle = 'rgba(255,255,255,0.06)'
            for (let x = 10; x < CANVAS_WIDTH; x += 20) {
                for (let y = 10; y < CANVAS_HEIGHT; y += 20) {
                    ctx.fillRect(x, y, 1.5, 1.5)
                }
            }

            if (status === 'playing' && stateRef.current) {
                const s = stateRef.current

                if (keysRef.current.left) s.playerX -= PLAYER_SPEED
                if (keysRef.current.right) s.playerX += PLAYER_SPEED
                s.playerX = Math.max(0, Math.min(CANVAS_WIDTH - PLAYER_SIZE, s.playerX))

                s.frame += 1
                const spawnEvery = Math.max(18, 42 - Math.floor(s.score / 5))
                if (s.frame % spawnEvery === 0) {
                    s.bugs.push({
                        x: Math.random() * (CANVAS_WIDTH - 24),
                        y: -24,
                        size: 22 + Math.random() * 10,
                    })
                }

                s.speed = 2.4 + s.score * 0.06
                s.bugs.forEach(b => { b.y += s.speed })
                s.bugs = s.bugs.filter(b => b.y < CANVAS_HEIGHT + 30)

                if (s.frame % 6 === 0) {
                    s.score += 1
                    setScore(s.score)
                }

                const playerBox = { x: s.playerX, y: CANVAS_HEIGHT - PLAYER_SIZE - 12, w: PLAYER_SIZE, h: PLAYER_SIZE }
                for (const b of s.bugs) {
                    const bugBox = { x: b.x, y: b.y, w: b.size, h: b.size }
                    if (
                        playerBox.x < bugBox.x + bugBox.w &&
                        playerBox.x + playerBox.w > bugBox.x &&
                        playerBox.y < bugBox.y + bugBox.h &&
                        playerBox.y + playerBox.h > bugBox.y
                    ) {
                        setBest(prev => Math.max(prev, s.score))
                        setStatus('over')
                    }
                }

                s.bugs.forEach(b => drawBug(ctx, b.x, b.y, b.size))

                const grad = ctx.createLinearGradient(0, 0, PLAYER_SIZE, 0)
                grad.addColorStop(0, '#ef4444')
                grad.addColorStop(1, '#b91c1c')
                ctx.fillStyle = grad
                ctx.beginPath()
                ctx.roundRect(playerBox.x, playerBox.y, playerBox.w, playerBox.h, 8)
                ctx.fill()
                ctx.fillStyle = '#ffffff'
                ctx.font = 'bold 14px sans-serif'
                ctx.textAlign = 'center'
                ctx.fillText(initialRef.current, playerBox.x + playerBox.w / 2, playerBox.y + playerBox.h / 2 + 5)
                ctx.textAlign = 'left'

                ctx.fillStyle = 'rgba(255,255,255,0.4)'
                ctx.font = '11px monospace'
                ctx.fillText(`${scoreLabelRef.current} ${s.score}`, 10, 20)
            }

            frameRef.current = requestAnimationFrame(draw)
        }

        frameRef.current = requestAnimationFrame(draw)
        return () => cancelAnimationFrame(frameRef.current)
    }, [status])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') { onClose(); return }
            if (e.key === 'ArrowLeft') keysRef.current.left = true
            if (e.key === 'ArrowRight') keysRef.current.right = true
            if ((e.key === 'Enter' || e.key === ' ') && status !== 'playing' && e.target.tagName !== 'INPUT') {
                e.preventDefault()
                resetGame()
            }
        }
        const handleKeyUp = (e) => {
            if (e.key === 'ArrowLeft') keysRef.current.left = false
            if (e.key === 'ArrowRight') keysRef.current.right = false
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [status, onClose, resetGame])

    return (
        <div className="flex fixed inset-0 z-[100] justify-center items-center p-4 backdrop-blur-sm bg-black/80">
            <div className="figma-frame p-4 md:p-5 w-full max-w-[400px]">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]">{t('easterEgg.header')}</p>
                    <button onClick={onClose} className="text-lg leading-none text-white/40 bg-transparent border-none hover:text-white transition-colors">✕</button>
                </div>

                <div className="overflow-hidden relative rounded-lg border border-white/[0.08]" style={{ width: CANVAS_WIDTH, maxWidth: '100%', height: CANVAS_HEIGHT, margin: '0 auto' }}>
                    <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="block w-full h-full" />

                    {status !== 'playing' && (
                        <div className="flex absolute inset-0 flex-col gap-3 justify-center items-center text-center bg-black/70">
                            {status === 'over' ? (
                                <>
                                    <p className="text-sm font-semibold text-red-400">{t('easterEgg.caughtYou')}</p>
                                    <p className="text-2xl font-bold text-white">{score}</p>
                                    <p className="text-[10px] text-white/40">{t('easterEgg.best')}: {best}</p>

                                    {ticketId ? (
                                        <div className="w-full max-w-[220px] mx-auto p-3.5 text-left bg-white rounded-xl shadow-lg">
                                            <p className="mb-2 text-sm font-semibold text-gray-800">{ticketTitle}</p>
                                            <div className="flex gap-1.5 items-center mb-3">
                                                <span className="inline-block px-2 py-0.5 text-[10px] text-red-600 rounded-md border border-red-300">
                                                    {t('easterEgg.bugTag')}
                                                </span>
                                                <span className="flex gap-1 items-center text-[10px] text-gray-500">
                                                    <svg viewBox="0 0 16 16" fill="none" className="flex-shrink-0 w-3 h-3">
                                                        <path d="M4 6l4 4 4-4" stroke="#2684FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    <select
                                                        value={priority}
                                                        onChange={(e) => setPriority(e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-[10px] text-gray-600 bg-transparent border-none outline-none cursor-pointer"
                                                    >
                                                        {priorities.map((p) => (
                                                            <option key={p} value={p}>{p}</option>
                                                        ))}
                                                    </select>
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-1.5 items-center">
                                                    <span className="flex justify-center items-center w-4 h-4 text-white bg-blue-600 rounded border border-blue-600">
                                                        <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                                                            <path d="M3 8l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </span>
                                                    <span className="text-xs font-medium text-gray-700">{ticketId}</span>
                                                </div>
                                                <span className="flex justify-center items-center w-6 h-6 text-[10px] font-bold text-white bg-red-600 rounded-full" title={playerName.trim() || t('easterEgg.playerFallback')}>{initialRef.current}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-1 items-center">
                                            <p className="text-[10px] text-white/40">{t('easterEgg.ticketPrompt')}</p>
                                            <button
                                                onClick={fileTicket}
                                                className="px-3 py-1 text-[11px] text-white/60 rounded-md border border-white/15 hover:border-red-500/40 hover:text-white transition-colors"
                                            >
                                                {t('easterEgg.createTicket')}
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex flex-col gap-3 items-center px-6">
                                    <p className="text-xs text-white/50">{t('easterEgg.instructions')}</p>
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        value={playerName}
                                        onChange={(e) => setPlayerName(e.target.value)}
                                        onKeyDown={(e) => { if (e.key === 'Enter') resetGame() }}
                                        placeholder={t('easterEgg.namePlaceholder')}
                                        maxLength={16}
                                        className="px-3 py-1.5 w-40 text-xs text-center text-white rounded-md border outline-none bg-white/[0.06] border-white/15 focus:border-red-500/40"
                                    />
                                </div>
                            )}
                            <button
                                onClick={resetGame}
                                className="px-5 py-2 text-xs font-semibold text-white rounded-lg bg-primary-color hover:brightness-110"
                            >
                                {status === 'over' ? t('easterEgg.playAgain') : t('easterEgg.start')}
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex gap-2 justify-center mt-4 sm:hidden">
                    <button
                        onPointerDown={() => { keysRef.current.left = true }}
                        onPointerUp={() => { keysRef.current.left = false }}
                        onPointerLeave={() => { keysRef.current.left = false }}
                        className="flex-1 py-3 text-sm text-white rounded-lg border select-none bg-white/[0.06] border-white/[0.08]"
                    >◀</button>
                    <button
                        onPointerDown={() => { keysRef.current.right = true }}
                        onPointerUp={() => { keysRef.current.right = false }}
                        onPointerLeave={() => { keysRef.current.right = false }}
                        className="flex-1 py-3 text-sm text-white rounded-lg border select-none bg-white/[0.06] border-white/[0.08]"
                    >▶</button>
                </div>

                <p className="mt-3 text-[10px] text-center text-white/25">{t('easterEgg.controlsHint')}</p>
            </div>
        </div>
    )
}

const EasterEgg = () => {
    const [unlocked, setUnlocked] = useState(false)
    const progressRef = useRef(0)

    useEffect(() => {
        console.log('%c\u{1F47E} Psst... try the Konami Code.', 'color:#ef4444;font-weight:bold;font-size:12px;')
    }, [])

    useEffect(() => {
        if (unlocked) return
        const handleKeyDown = (e) => {
            const expected = KONAMI_SEQUENCE[progressRef.current]
            const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
            if (key === expected) {
                progressRef.current += 1
                if (progressRef.current === KONAMI_SEQUENCE.length) {
                    progressRef.current = 0
                    setUnlocked(true)
                }
            } else {
                progressRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [unlocked])

    if (!unlocked) return null
    return <BugDodgeGame onClose={() => setUnlocked(false)} />
}

export default EasterEgg
