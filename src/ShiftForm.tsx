import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';

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
//Record<Keys, Value> is a built-in TS helper meaning "an object with these keys, each holding this type of value"
// Why not just type it out like Shift. Because let's say you add another field called Tolls in Shift
// this type will be in Sync with Shift so you don't have to create a spearate field in this one.
type ShiftFormValues = Record<keyof Shift, string>;

const emptyForm: ShiftFormValues = {
    date: '',
    hours: '',
    tips: '',
    earnings: '',
    milesDriven: '',
    gasSpent: '',
    otherExpenses: '',
};

export default function ShiftForm() {
    const [form, setForm] = useState<ShiftFormValues>(emptyForm);

    // One handler for every input; the input's `name` says which field to update
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
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

        console.log(shift);
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
