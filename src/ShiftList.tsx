// 2. This component needs a list of shifts. This will return a table 

import type { Shift } from "./ShiftForm";

// Data travels up and data travels down? What does it mean?
// When the parents sends something down to the children. That's travel down.
// The child cannot directly send data up to the parent. It can only do so by the function provided
// by the parent.


interface ShiftListProps {
    listOfShifts: Shift[];
}

// The property name and the type in the curly braces shows that this received the props
export default function ShiftList({ listOfShifts }: ShiftListProps){
    return(
        <div className='table-card'>
        <table className='shift-table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Hours</th>
                    <th>Earnings</th>
                    <th>Tips</th>
                    <th>Miles Driven</th>
                    <th>Gas Spent</th>
                    <th>Other Expenses</th>
                </tr>
            </thead>
            <tbody>
                {listOfShifts.map((shift, index) => (
                    <tr key={index}>
                        <td>{shift.date}</td>
                        <td>{shift.hours}</td>
                        <td>{shift.earnings}</td>
                        <td>{shift.tips}</td>
                        <td>{shift.milesDriven}</td>
                        <td>{shift.gasSpent}</td>
                        <td>{shift.otherExpenses}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}