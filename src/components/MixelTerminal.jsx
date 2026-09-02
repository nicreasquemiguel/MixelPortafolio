import { useCallback, useEffect, useRef, useState } from 'react'

const COMMANDS = {
    help: () => 'Available commands: help, whoami, about, skills, contact, clear, exit',
    whoami: () => 'root',
    about: () => 'Miguel Pineda — a.k.a Mixel. Full-stack developer based on the internet.',
    skills: () => 'Python · JavaScript · React · Node · SQL · and whatever breaks next.',
    contact: () => 'mixelthedev@gmail.com',
    sudo: () => 'you are already root here.',
    ls: () => 'about  skills  contact  secrets.txt',
    'cat secrets.txt': () => 'Permission denied. Nice try.',
}

const MixelTerminal = ({ onClose }) => {
    const [phase, setPhase] = useState('intro')
    const [history, setHistory] = useState([])
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const bottomRef = useRef(null)

    const enterTerminal = useCallback(() => {
        setPhase('terminal')
        setHistory([
            { type: 'output', text: 'Welcome to MIXEL OS' },
            { type: 'output', text: 'Type "help" to get started.' },
        ])
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') { onClose(); return }
            if (phase === 'intro' && e.key === 'Enter') {
                e.preventDefault()
                enterTerminal()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [phase, onClose, enterTerminal])

    useEffect(() => {
        if (phase !== 'terminal') return
        const id = requestAnimationFrame(() => inputRef.current?.focus())
        return () => cancelAnimationFrame(id)
    }, [phase])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ block: 'end' })
    }, [history])

    const runCommand = useCallback((raw) => {
        const cmd = raw.trim()
        if (!cmd) return
        setHistory((h) => [...h, { type: 'input', text: cmd }])

        const key = cmd.toLowerCase()
        if (key === 'clear') { setHistory([]); return }
        if (key === 'exit') { onClose(); return }

        const handler = COMMANDS[key]
        const output = handler ? handler() : `command not found: ${cmd}`
        setHistory((h) => [...h, { type: 'output', text: output }])
    }, [onClose])

    const handleSubmit = (e) => {
        e.preventDefault()
        runCommand(input)
        setInput('')
    }

    return (
        <div
            className="flex fixed inset-0 z-[100] justify-center items-start p-4 bg-black md:p-10"
            onClick={() => (phase === 'intro' ? enterTerminal() : inputRef.current?.focus())}
        >
            <div className="overflow-y-auto w-full max-w-2xl h-full font-mono text-sm text-white md:h-auto md:max-h-[70vh]">
                {phase === 'intro' ? (
                    <>
                        <p>
                            <span className="text-red-500">guest@mixel</span>
                            <span className="text-white/40">:~$ </span>
                            sudo mixel
                            <span className="inline-block w-[1ch] terminal-cursor">|</span>
                        </p>
                        <p className="mt-3 text-xs text-white/30">Press Enter or tap the screen to continue</p>
                    </>
                ) : (
                    <>
                        {history.map((line, idx) => (
                            <div key={idx} className={line.type === 'output' ? 'text-white/60' : 'text-white'}>
                                {line.type === 'input' && <span className="text-red-500">guest@mixel:~$ </span>}
                                {line.text}
                            </div>
                        ))}
                        <form onSubmit={handleSubmit} className="flex items-center">
                            <span className="mr-1 text-red-500 whitespace-nowrap">guest@mixel:~$</span>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 text-white bg-transparent border-none outline-none"
                                autoFocus
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </form>
                        <div ref={bottomRef} />
                    </>
                )}
            </div>

            <button
                onClick={(e) => { e.stopPropagation(); onClose() }}
                className="absolute top-4 right-4 text-lg leading-none text-white/40 bg-transparent border-none hover:text-white transition-colors"
            >
                ✕
            </button>
        </div>
    )
}

export default MixelTerminal
