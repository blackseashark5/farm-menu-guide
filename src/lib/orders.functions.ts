import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const lineSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  size: z.string(),
  emoji: z.string(),
  price: z.number(),
  mrp: z.number(),
  qty: z.number().int().positive(),
});

const orderSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\s+/g, ""))
    .refine((v) => /^[0-9+]{8,15}$/.test(v), "Enter a valid mobile number"),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
  address: z.string().trim().min(8).max(400),
  lines: z.array(lineSchema).min(1).max(60),
});

const lookupSchema = z.object({
  orderNumber: z.string().trim().min(4).max(24),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\s+/g, "")),
});

export type OrderSummary = {
  orderNumber: string;
  status: string;
  customerName: string;
  total: number;
  delivery: number;
  subtotal: number;
  savings: number;
  createdAt: string;
  items: { name: string; qty: number; price: number }[];
};

const DELIVERY_FREE_ABOVE = 999;
const DELIVERY_FEE = 79;

export const createOrder = createServerFn({ method: "POST" })
  .inputValidator((data) => orderSchema.parse(data))
  .handler(async ({ data }): Promise<OrderSummary> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const subtotal = data.lines.reduce((n, l) => n + l.price * l.qty, 0);
    const savings = data.lines.reduce((n, l) => n + Math.max(0, l.mrp - l.price) * l.qty, 0);
    const delivery = subtotal >= DELIVERY_FREE_ABOVE ? 0 : DELIVERY_FEE;
    const total = subtotal + delivery;
    const orderNumber = `KS${Date.now().toString().slice(-7)}${Math.floor(Math.random() * 90 + 10)}`;

    const { data: row, error } = await supabaseAdmin
      .from("orders")
      .insert({
        order_number: orderNumber,
        customer_name: data.name,
        phone: data.phone,
        pincode: data.pincode,
        address: data.address,
        items: data.lines,
        subtotal,
        delivery,
        total,
        savings,
        status: "placed",
      })
      .select("order_number, status, customer_name, subtotal, delivery, total, savings, created_at")
      .single();

    if (error || !row) throw new Error(error?.message ?? "Could not place the order");

    return {
      orderNumber: row.order_number,
      status: row.status,
      customerName: row.customer_name,
      subtotal: row.subtotal,
      delivery: row.delivery,
      total: row.total,
      savings: row.savings,
      createdAt: row.created_at,
      items: data.lines.map((l) => ({ name: l.name, qty: l.qty, price: l.price })),
    };
  });

export const getOrderStatus = createServerFn({ method: "POST" })
  .inputValidator((data) => lookupSchema.parse(data))
  .handler(async ({ data }): Promise<OrderSummary | null> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("orders")
      .select(
        "order_number, status, customer_name, subtotal, delivery, total, savings, created_at, items, phone",
      )
      .eq("order_number", data.orderNumber.toUpperCase())
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!row || row.phone !== data.phone) return null;

    const items = Array.isArray(row.items)
      ? (row.items as { name?: string; qty?: number; price?: number }[]).map((l) => ({
          name: String(l?.name ?? "Item"),
          qty: Number(l?.qty ?? 1),
          price: Number(l?.price ?? 0),
        }))
      : [];

    return {
      orderNumber: row.order_number,
      status: row.status,
      customerName: row.customer_name,
      subtotal: row.subtotal,
      delivery: row.delivery,
      total: row.total,
      savings: row.savings,
      createdAt: row.created_at,
      items,
    };
  });
