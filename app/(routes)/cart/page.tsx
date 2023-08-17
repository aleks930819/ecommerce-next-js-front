"use client";

import Head from "next/head";
import type { Metadata } from "next";

import useCart from "@/hooks/user-cart";

import ClientOnly from "@/components/client-only/client-only";
import Container from "@/components/ui/container";
import CartItem from "@/components/cart/cart-item";
import Summary from "@/components/cart/summary";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart",
};

const CartPage = () => {
  const cart = useCart();
  return (
    <ClientOnly>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Container>
        <section className='px-4 py-16 sm:px-6 lg:px-8 mb-72'>
          <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white'>
            Shopping Cart
          </h1>
          {cart.items.length !== 0 && (
            <p className='text-gray-500 dark:text-gray-400 mt-1'>
              You have {cart.items.length}{" "}
              {`item${cart.items.length > 1 ? "s" : ""}`}
            </p>
          )}

          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {cart.items.length === 0 && <p>Your cart is empty</p>}

              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            {cart.items.length !== 0 && <Summary />}
          </div>
        </section>
      </Container>
    </ClientOnly>
  );
};

export default CartPage;
