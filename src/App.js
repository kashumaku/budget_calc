import { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import BudgetInput from "./components/BudgetInput";
import BudgetListes from "./components/BudgetListes";
import { v4 as uuid } from "uuid";
import "./styles.css";
import GoogleAuth from "./components/GoogleAuth";
const budgetData = [
  {
    id: 1,
    charge: "car rent",
    amount: 4000,
  },
  {
    id: 2,
    charge: "rent",
    amount: 3000,
  },
  {
    id: 3,
    charge: "Employment ",
    amount: 5000,
  },
];

function App() {
  const [budgets, setBudgets] = useState(budgetData);
  const [alerts, setAlerts] = useState({
    isAlertSet: false,
    text: "",
    type: "",
  });

  //*************functions  ******************
  // alert hadler
  const offAlert = () => {
    if (alerts.isAlertSet === true)
      setTimeout(() => {
        setAlerts({ isAlertSet: false });
      }, 4000);
  };

  useEffect(() => {
    offAlert();
  }, [alerts]);
  //budget add handler
  const addBudget = (newBudget) => {
    if (newBudget.charge === "" || newBudget.amount <= 0) {
      setAlerts({
        isAlertSet: true,
        text: "Budget charge must have value and amount muust greater than zero",
        type: "warning",
      });
      console.log(alerts.isAlertSet);
    } else {
      setBudgets([...budgets, { id: uuid(), ...newBudget }]);
      setAlerts({
        isAlertSet: true,
        text: "New Budget Added successfully",
        type: "success",
      });
    }
  };
  // Budget delete handler
  const deleteBudget = (id) => {
    const filteredBudget = budgets.filter((f) => f.id !== id);
    setBudgets(filteredBudget);
    setAlerts({
      isAlertSet: true,
      text: "Budget Item deleted successfully",
      type: "warning",
    });
  };
  //clear all handler
  const deleteAll = () => {
    setBudgets([]);
    setAlerts({
      isAlertSet: true,
      text: "Budget cleared successfully",
      type: "warning",
    });
  };
  //edit handler
  const editBudget = (id) => {
    const ch = prompt("Enter charge", "");
    const am = prompt("Enter Amount", "");
    const editedBudget = budgets.map((budget) => {
      if (budget.id === id) {
        budget.amount = am;
        budget.charge = ch;
      }
      return budget;
    });
    setBudgets(editedBudget);
    setAlerts({
      isAlertSet: true,
      text: "Budget item eddited successfully",
      type: "success",
    });
  };

  return (
    <div className="App">
      {alerts.isAlertSet && <Alert alerts={alerts} />}
      <div className="budgetContainer">
        <GoogleAuth />
        <BudgetInput addHandler={addBudget} />
        <BudgetListes
          budgets={budgets}
          deleteHandler={deleteBudget}
          deleteAll={deleteAll}
          editBudget={editBudget}
        />
      </div>
    </div>
  );
}

export default App;
