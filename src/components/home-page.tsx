import AppName from './home/app-name'
import type { DifficultyChooserProps } from './challenge-config'
import { DifficultyChooser, ChallengeChooser } from './home/challenge-chooser'

function HomePage({currDifficulty, setDifficulty}: DifficultyChooserProps) {
  return (
    <div className="flex flex-col gap-10">
      <AppName />
      <div>
        <DifficultyChooser currDifficulty={currDifficulty} setDifficulty={setDifficulty}/>
        <ChallengeChooser />
      </div>
    </div>
  )
}

export default HomePage