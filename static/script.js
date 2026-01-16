
document.getElementById("btnCalcular").addEventListener("click", () => {
    const payload = {
        total_value: parseInt(document.getElementById("form_total_value").value),
        total_orders: parseInt(document.getElementById("form_total_orders").value),
        my_deliveries: parseInt(document.getElementById("form_my_deliveries").value),
        maria_orders: parseInt(document.getElementById("form_maria_orders").value),
    };

    fetch("/calcular", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultSection").innerHTML = `
            <div>Lucro estimado: R$ ${data.estimated_profit}</div>
            <div>Meu pagamento: R$ ${data.my_payment}</div>
            <div>Pagamento da Maria: R$ ${data.marias_payment}</div>
            <div>Faturamento final da loja: R$ ${data.final_billing}</div>
        `
    })
    .catch(() => {
        document.getElementById("resultSection").innerHTML = "<div>Erro ao calcular.</div>";
    });
});