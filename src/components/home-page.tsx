import AppName from './home/app-name'
import ChallengeChooser from './home/challenge-chooser'

function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <AppName />
      <ChallengeChooser />
    </div>
  )
}

export default HomePage