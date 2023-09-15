"use client";

import useWishList from "@/hooks/use-wishlist";

import ClientOnly from "@/components/client-only/client-only";
import Container from "@/components/ui/container";
import WishlistItem from "@/components/wishlist/wishlist-item";

const WishlistPage = () => {
  const wishlist = useWishList();

  return (
    <ClientOnly>
      <Container>
        <section className='px-4 py-16 sm:px-6 lg:px-8 mb-72'>
          <h1 className='text-3xl  font-extrabold text-gray-900 dark:text-white'>
            Your Wishlist
          </h1>
          {wishlist.items.length !== 0 && (
            <p className='text-gray-500 dark:text-gray-400 mt-1'>
              You have {wishlist.items.length}{" "}
              {`item${wishlist.items.length > 1 && "s"}`}
            </p>
          )}
          <div className='mt-12 '>
            {wishlist.items.length === 0 && <p>Your wishlist is empty</p>}
            <ul className=' lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0'>
              {wishlist.items.map((item) => (
                <WishlistItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </ClientOnly>
  );
};

export default WishlistPage;
