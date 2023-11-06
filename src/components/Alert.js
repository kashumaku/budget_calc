const Alert = ({ alerts }) => {
    console.log(alerts)
    return (<div className={alerts.type === "success" ? "alert success" : "alert warning"}>
        {alerts.text}
    </div>);
}

export default Alert;