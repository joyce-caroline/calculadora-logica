# Calculadora Lógica

Este é um exemplo de código JavaScript que implementa uma "Calculadora Lógica". A calculadora lógica permite ao usuário comparar dois números usando operadores lógicos e exibe o resultado da comparação.

## Funcionamento

- O código começa exibindo uma mensagem de cabeçalho na console.

- A função `comparar` é definida. Esta função é chamada quando o usuário interage com a calculadora.

- Na função `comparar`:
   - Ela obtém os valores dos campos de entrada `num1`, `num2` e `operador` do HTML.
   - Em seguida, converte os valores de `num1` e `num2` para números inteiros usando `parseInt`. Se não houver valor nos campos de entrada, assume o valor padrão 0.
   - Os valores de `num1`, `num2` e `operador` são registrados na console para fins de depuração.

- A função usa um bloco `switch` para realizar a operação de comparação com base no operador selecionado pelo usuário:
   - Se o operador for "maior que", ele verifica se `num1` é maior do que `num2`.
   - Se o operador for "menor que", ele verifica se `num1` é menor do que `num2`.
   - Se o operador for "maior ou igual", ele verifica se `num1` é maior ou igual a `num2`.
   - Se o operador for "menor ou igual", ele verifica se `num1` é menor ou igual a `num2`.
   - Se o operador for "diferente", ele verifica se `num1` é diferente de `num2`.
   - Se o operador for "igual", ele verifica se `num1` é igual a `num2`.

- O resultado da comparação é definido no campo de saída `resultado` no HTML. O resultado é um valor booleano (true ou false) que representa o resultado da comparação.

Essa calculadora lógica permite ao usuário comparar dois números usando vários operadores lógicos e exibir o resultado da comparação no campo de saída `resultado`.

