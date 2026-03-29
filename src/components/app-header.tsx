import { Link } from 'react-router-dom'
import {Stopwatch} from "@gravity-ui/icons";

function AppHeader() {
  return (
    <header>
        <Link to="/" className="flex items-center gap-2">
            <div className="background-black" style={{
                height: "24px",
                width: "24px",
                background: "var(--eclipse)",
                alignContent: "center",
                justifyItems: "center",
                borderRadius: "6px"
            }}>
                <Stopwatch height="12px" width="12px" color="white"/>
            </div>
            <strong>Eko</strong>
        </Link>
    </header>
  )
}

export default AppHeader