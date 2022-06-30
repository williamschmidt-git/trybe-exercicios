# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

values = input("insira os valores separando eles por espaços ")
values.split(" ")
sum_of_values = 0


for value in values:
    if value != " ":
        if value.isdigit():
            sum_of_values += int(value)
        else:
            print(f"Erro ao somar os números {value}")

print(sum_of_values)
