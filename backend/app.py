from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

logs = []

@app.route('/api/logs', methods=['POST'])
def add_log():

    data = request.json
    message = data.get("message", "")

    score = 10

    if "failed login" in message.lower():
        score = 80
    elif "sql injection" in message.lower():
        score = 95
    elif "xss" in message.lower():
        score = 70
    elif "malware" in message.lower():
        score = 90
    elif "bruteforce" in message.lower():
        score = 85

    severity = "Low"

    if score >= 90:
        severity = "High"
    elif score >= 70:
        severity = "Medium"

    category = "General"

    if "sql injection" in message.lower():
        category = "Database Attack"

    elif "xss" in message.lower():
        category = "Web Attack"

    elif "malware" in message.lower():
        category = "Malware"

    elif "failed login" in message.lower():
        category = "Authentication Attack"

    elif "bruteforce" in message.lower():
        category = "Authentication Attack"

    record = {
        "message": message,
        "category": category,
        "threat_score": score,
        "severity": severity,
        "time": datetime.now().strftime("%H:%M:%S")
    }

    logs.append(record)

    return jsonify(record)

@app.route('/api/dashboard')
def dashboard():

    total = len(logs)

    high = len([x for x in logs if x["severity"] == "High"])
    medium = len([x for x in logs if x["severity"] == "Medium"])
    low = len([x for x in logs if x["severity"] == "Low"])

    return jsonify({
        "total": total,
        "high": high,
        "medium": medium,
        "low": low,
        "logs": logs
    })

if __name__ == "__main__":
    app.run(debug=True)