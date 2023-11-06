import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
const BudgetListes = ({ budgets, deleteHandler, deleteAll, editBudget }) => {
    const totalBudget = budgets.reduce((acc, curr) => { return acc += Number(curr.amount) }, 0)
    return (
        <div className="budgetLists">
            <h2 className="total">Total Budget ${totalBudget}</h2>
            {budgets.map(budget => {
                return (
                    <div className="budgetItem" key={budget.id}>
                        <div className="itemCharge">{budget.charge}</div>
                        <div className="itemAmount">${budget.amount}</div>
                        <div className="itemIcons">
                            <MdModeEdit className="editItem" onClick={() => editBudget(budget.id)} />
                            <MdDeleteForever className='deleteItem' onClick={() => deleteHandler(budget.id)} />
                        </div>
                    </div>
                )
            })}
            <div className="deleteBudgets">
                <button className='btn btnClearAll' onClick={deleteAll}>Clear all <MdDeleteForever /></button>
            </div>
        </div>
    );
}

export default BudgetListes;