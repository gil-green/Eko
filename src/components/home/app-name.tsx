import {Stopwatch} from "@gravity-ui/icons";

export default function AppName() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="background-black" style={{
                    height: "40px",
                    width: "40px",
                    background: "var(--eclipse)",
                    alignContent: "center",
                    justifyItems: "center",
                    borderRadius: "10px"
                }}>
                    <Stopwatch height="20px" width="20px" color="white"/>
                </div>
                <h1>Eko</h1>
            </div>
            <p>
                <span className="font-medium">Train</span> <span>your memory.</span> <span className="font-medium">Strengthen</span> <span>your mind.</span> 
            </p>
        </div>
    )
}