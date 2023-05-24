USE Pizzaria;
show tables;

SELECT * FROM clientes
SELECT * FROM Pizzas
SELECT * FROM Pedidos
SELECT * FROM Itens_Pedido
SELECT * FROM intes_pedido WHERE pedido_id = 3;


SELECT * FROM pedidos WHERE pedido_id = 3;

SELECT * FROM pedidos WHERE cliente_id = 2;
SELECT c.nome FROM pedidos p INNER JOIN clientes c
ON c.cliente_id = p.cliente_id
WHERE p.pedido_id = 3;

SELECT * FROM pizzas p WHERE pedido_id 
ON c.pizza_id = p.pizza_id
WHERE p.pedido_id = 3;

SELECT p.nome FROM itens_pedido i INNER JOIN pizzas p
ON p.pizza_id = i.pizza_id
WHERE i.pedido_id = 3;
