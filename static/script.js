
document.addEventListener("DOMContentLoaded", () => {
    
    const btn = document.getElementById("btnCalcular");

    if (!btn) {
        console.ward("Botão #btn_calc não encontrado.");
        return
    }

    btn.addEventListener("click", () => {
        
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
            document.getElementById("resultPart1").innerText = `Lucro estimado:
                Meu pagamento:
                Pagamento da Maria:
                Faturamento final da loja:`
            document.getElementById("resultPart2").innerText = `R$ ${data.estimated_profit}
                R$ ${data.my_payment}
                R$ ${data.marias_payment}
                R$ ${data.final_billing}`
        })
        .catch(() => {
            document.getElementById("resultPart1").innerHTML = "<div>Erro ao calcular.</div>";
        });
    });
});