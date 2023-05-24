insert into Pedidos(cliente_id, data, hora) values
(91,DATE_SUB(curdate(),INTERVAL 10 DAY),"13:54:00");

insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values
(29,28,2, (select valor from Pizzas where pizza_id = 28)); 


SELECT sum(valor * quantidade) FROM itens_pedidos WHERE pedido_id = 2;

UPDATE pedidos
set valor = (SELECT sum(valor * quantidade) as FROM itens_pedidos WHERE pedido_id = 29;)
WHERE pedido_id = 29
SELECT * FROM pedidos WHERE pedido_id =29;