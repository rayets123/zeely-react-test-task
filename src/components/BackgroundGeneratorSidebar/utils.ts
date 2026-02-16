import { REGENERATE_PROMPTS } from './constants'

export function shuffleArray<T>(arr: readonly T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function getRandomPrompt(exclude: string): string {
  const available = REGENERATE_PROMPTS.filter((p) => p !== exclude)
  return available[Math.floor(Math.random() * available.length)] ?? exclude
}
