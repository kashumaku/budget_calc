import { useState } from 'react';
import { MdSend } from 'react-icons/md'
const BudgetInput = ({ addHandler }) => {
    const [newBudget, setNewBudget] = useState({ charge: '', amount: 0 })
    const handleSubmit = (e) => {
        e.preventDefault()
        addHandler(newBudget)
        setNewBudget({ charge: '', amount: '' })
    }
    return (
        <div className="budgetInputContainer">
            <form className='budgetForm'>
                <div className="formGroup">
                    <label htmlFor="charge">Charge</label>
                    <input type="text" id="charge" placeholder="e.g rent" value={newBudget.charge} onChange={(e) => setNewBudget({ ...newBudget, charge: e.target.value })} />
                </div>
                <div className="formGroup">
                    <label htmlFor="charge">Amount</label>
                    <input type="number" id="amount" placeholder="e.g 100" value={newBudget.amount} onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })} />
                </div>
                <button className='btn btnSend' onClick={handleSubmit}>Submit<MdSend /></button>
            </form>
        </div>
    );
}

export default BudgetInput;