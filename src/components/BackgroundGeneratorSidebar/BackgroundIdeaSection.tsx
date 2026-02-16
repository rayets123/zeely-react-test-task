import { useState, useCallback } from 'react'
import { DEFAULT_PROMPT } from './constants'
import { getRandomPrompt } from './utils'

export function BackgroundIdeaSection() {
  const [value, setValue] = useState(DEFAULT_PROMPT)
  const [history, setHistory] = useState<string[]>([DEFAULT_PROMPT])
  const [historyIndex, setHistoryIndex] = useState(0)

  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  const handleRegenerate = useCallback(() => {
    const newPrompt = getRandomPrompt(value)
    setValue(newPrompt)
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newPrompt])
    setHistoryIndex((prev) => prev + 1)
  }, [value, historyIndex])

  const handleUndo = useCallback(() => {
    if (canUndo) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setValue(history[newIndex])
    }
  }, [canUndo, historyIndex, history])

  const handleRedo = useCallback(() => {
    if (canRedo) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setValue(history[newIndex])
    }
  }, [canRedo, historyIndex, history])

  return (
    <div className="mb-6">
      <h3 className="text-[14px] leading-[120%] font-semibold mb-[12px]">
        Background idea
      </h3>
      <div
        className="relative flex flex-col rounded-lg bg-white p-4 pb-3 min-h-[195px]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(242, 244, 246, 1)' }}
      >
        <textarea
          name="background-idea"
          value={value}
          onChange={(e) => {
            const newValue = e.target.value
            setValue(newValue)
            setHistory((prev) => {
              const next = [...prev]
              next[historyIndex] = newValue
              return next
            })
          }}
          aria-label="Background idea description"
          className="w-full min-h-[80px] flex-1 resize-none border-0 bg-transparent font-medium text-sm text-black focus:outline-none focus:ring-0"
          rows={4}
        />
        <div className="flex items-center gap-2 mt-auto">
          <button
            type="button"
            onClick={handleRegenerate}
            aria-label="Regenerate background idea"
            className="flex items-center gap-1 text-xs font-semibold leading-[240%] text-black cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/sparkles-icon.svg"
              alt=""
              className="shrink-0 w-[18px] h-[18px] object-contain"
              aria-hidden
            />
            Regenerate
          </button>
          <div className="flex items-center gap-[22px] ml-auto mr-[7px]">
            <button
              type="button"
              onClick={handleUndo}
              disabled={!canUndo}
              aria-label="Undo"
              className="text-gray-400 hover:text-gray-600 rounded cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-gray-400"
            >
              <img src="/assets/action_back.svg" alt="" className="w-5 h-5 object-contain" aria-hidden />
            </button>
            <button
              type="button"
              onClick={handleRedo}
              disabled={!canRedo}
              aria-label="Redo"
              className="text-gray-400 hover:text-gray-600 rounded cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-gray-400"
            >
              <img src="/assets/action_next.svg" alt="" className="w-5 h-5 object-contain" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
