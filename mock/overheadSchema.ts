import { z } from "zod";

// Schema para endereço
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zip: z.string().length(5),
});

// Schema para itens do pedido
const orderItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().int().positive(),
  price: z.number().positive(),
});

// Schema para pedidos
const orderSchema = z.object({
  orderId: z.number().int(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  status: z.enum(["shipped", "delivered", "processing"]),
  items: z.array(orderItemSchema),
});

// Schema para usuários
const userSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  address: addressSchema,
  orders: z.array(orderSchema),
});

// Schema para produtos
const productSchema = z.object({
  productId: z.number().int(),
  name: z.string(),
  category: z.string(),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
});

// Schema para transações
const transactionSchema = z.object({
  transactionId: z.string(),
  userId: z.number().int(),
  orderId: z.number().int(),
  amount: z.number().positive(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  status: z.enum(["completed", "pending"]),
});

// Schema principal que engloba todo o objeto JSON
export const overheadSchema = z.object({
  users: z.array(userSchema),
  products: z.array(productSchema),
  transactions: z.array(transactionSchema),
});
