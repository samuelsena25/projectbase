from flask import Blueprint, render_template, request, jsonify

main = Blueprint("main", __name__)

@main.route("/")
def home():
    return render_template("index.html")

@main.route('/acaiprime')
def acaiprime():
    return render_template('acaiprime.html')

@main.route('/calcular', methods=['POST'])
def calcular():
    data = request.get_json()

    total_value = data['total_value']
    total_orders = data['total_orders']
    my_deliveries = data['my_deliveries']
    maria_orders = data['maria_orders']

    estimated_profit = total_orders * 5
    my_payment = my_deliveries * 8
    marias_payment = maria_orders * 3
    final_billing = total_value - my_payment - marias_payment

    return jsonify({
        "estimated_profit": estimated_profit,
        "my_payment": my_payment,
        "marias_payment": marias_payment,
        "final_billing": final_billing
    })
