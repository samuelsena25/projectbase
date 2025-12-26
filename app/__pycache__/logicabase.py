
print("Insira o valor recebido: ")
value = float(input())

print("Insira a quantia de entregas realizadas: ")
x_delivery = int(input())

print("Insira a quantia total de pedidos: ")
orders = int(input())

profit = orders*5
tax_delivery = x_delivery*8
store_money = value-profit-tax_delivery

print(f""""
    Total de pedidos: {orders}
    Total de entregas: {x_delivery}
    Valor recebido: {value}

    O lucro bruto estimado foi de: {profit}.00 R$
    A taxa das entregas a ser paga é de: {tax_delivery}.00 R$
    O pagamento da loja é de: {store_money:.2f}""")