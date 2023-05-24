SELECT * FROM clientes;

DESCRIBE clientes

SELECT * FROM clientes WHERE nome = 'Adelcio Biazi';
SELECT * FROM clientes WHERE nome LIKE 'Adelcio Biazi';

CREATE INDEX i_nome on clientes(nome);

SELECT * FROM clientes WHERE nome LIKE 'ana%';

CREATE VIEW detal AS 
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS i.preco, c.nome, pi.nome AS pizza
INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.pedido_id = c.clientes_id
LEFT JOIN pizzas pi
on p.pizza_id = pi.pizza_id;

CREATE VIEW vw_pedidos_full AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.pedido_id = c.clientes_id
LEFT JOIN pizzas pi
on p.pizza_id = pi.pizza_id;

CREATE VIEW vw_calc AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, i.valor * i.quantidade, pi.nome AS subtotal,
c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.pedido_id = c.clientes_id
LEFT JOIN pizzas pi
on p.pizza_id = pi.pizza_id;

CREATE VIEW vw_p3 AS
SELECT *, sum(i.quantidade) as Total FROM vw_pedidos_full GROUP BY pedido_id;
FROM pedidos p INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.pedido_id = c.clientes_id
LEFT JOIN pizzas pi
on p.pizza_id = pi.pizza_id
group by p.pedido_id

DROP VIEW if exists vw_pedidos3;
CREATE VIEW vw_pedidos3 AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, i.valor * i.quantidade AS subtotal,
c.nome, pi.nome AS pizza
FROM pedidos p INNER JOIN itens_pedido i
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;
SELECT * FROM vw_pedidos3;
SELECT *, sum(quantidade) as Total FROM vw_pedidos3 GROUP BY pedido_id;
