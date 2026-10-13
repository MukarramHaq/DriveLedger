import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';

// The prop the form accepts
// This reads: "the parent must give me a function that takes a Shift and returns nothing"
// This is a prop which is basically a list of everything ShiftForm needs from its parent
interface ShiftFormProps {
    // Its a description of what the function must look like. onAddShift is the name
    // ":" has this type, the function takes one input and it must be a Shift, and
    // it doesn't return anythiing.
    onAddShift: (shift: Shift) => void;
}

// The cleaned-up data we keep after submitting. It catches mistakes
// Basically, if you are reading this you can know what a Shift contains
export interface Shift {
    date: string;
    hours: number;
    tips: number;
    earnings: number;
    milesDriven: number;
    gasSpent: number;
    otherExpenses: number;
}

// What the inputs hold while typing: every field is a string
// Record<Keys, Value> is a built-in TS helper meaning "an object with these keys, each holding this type of value"
// Why not just type it out like Shift. Because let's say you add another field called Tolls in Shift
// this type will be in Sync with Shift so you don't have to create a spearate field in this one.
type ShiftFormValues = Record<keyof Shift, string>;

// Blank version of the form, with every field set to an empty
const emptyForm: ShiftFormValues = {
    date: '',
    hours: '',
    tips: '',
    earnings: '',
    milesDriven: '',
    gasSpent: '',
    otherExpenses: '',
};

export default function ShiftForm({ onAddShift }: ShiftFormProps) {
    const [form, setForm] = useState<ShiftFormValues>(emptyForm);

    // One handler for every input; the input's `name` says which field to update
    // Reacts calls this function on every keystroke and passes in an event describing what happened.
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        // In the line below "event.target" is the input you typed into. This line
        // uses destructuring to pull out two of its properties: name (the input's name attribute)
        // and value: what's in the box right now
        const { name, value } = event.target;
        //React does not allow you to write on the original object. So what this line does
        // is you take the form as it is right now, make a copy of it, change the one field
        // the user just typed in, and save the copy as the new form.
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function submit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const shift: Shift = {
            date: form.date,
            hours: Number(form.hours),
            tips: Number(form.tips),
            earnings: Number(form.earnings),
            milesDriven: Number(form.milesDriven),
            gasSpent: Number(form.gasSpent),
            otherExpenses: Number(form.otherExpenses),
        };
        onAddShift(shift);
        setForm(emptyForm);
    }

    return (
        <form onSubmit={submit} className='form-style'>
            <label className='label-style'>
                Date
                <input type='date' name='date' value={form.date} onChange={handleChange} required />
            </label>
            <label className='label-style'>
                Hours Worked
                <input type='number' name='hours' value={form.hours} onChange={handleChange} min='0' step='0.01' required />
            </label>
            <label className='label-style'>
                Earnings (excluding tips)
                <input type='number' name='earnings' value={form.earnings} onChange={handleChange} min='0' step='0.01' required />
            </label>
            <label className='label-style'>
                Tips
                <input type='number' name='tips' value={form.tips} onChange={handleChange} min='0' step='0.01' />
            </label>
            <label className='label-style'>
                Miles Driven
                <input type='number' name='milesDriven' value={form.milesDriven} onChange={handleChange} min='0' step='0.1' required />
            </label>
            <label className='label-style'>
                Gas Spent
                <input type='number' name='gasSpent' value={form.gasSpent} onChange={handleChange} min='0' step='0.01' />
            </label>
            <label className='label-style'>
                Other Expenses
                <input type='number' name='otherExpenses' value={form.otherExpenses} onChange={handleChange} min='0' step='0.01' />
            </label>

            <button type='submit'>Add Shift</button>
        </form>
    );
}
