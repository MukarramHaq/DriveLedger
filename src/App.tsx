import ShiftForm from "./ShiftForm";
import type { Shift }  from "./ShiftForm";
import { useState } from "react";
// Let's learn props. The data goes down to children through props.
// The child sends something back up by calling a function the parent gave it.

export default function App() {

    // Before with "useState(Shift[])" we were making TS guess the type and
    // from an empty array it guesses "never[]" meaning "an array that can never hold anything"
    const [ shifts, setShifts ] = useState<Shift[]>([]);

    // A function that adds shifts to the end of shifts
    function handleAddShift(shift: Shift){
        setShifts((prev) => [...prev, shift])
    }
    console.log(shifts)
    return (
        <div>
            <h1>DriveLedger</h1>
            <ShiftForm onAddShift={handleAddShift}/>
        </div>
    );
}