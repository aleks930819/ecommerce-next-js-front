import useCart, { CartItem } from "@/hooks/user-cart";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

const CheckoutMenuActions = ({
  product,
  className,
}: {
  product: CartItem;
  className?: string;
}) => {
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity);
  return (
    <div
      className={cn(
        "flex gap-2 justify-between items-center w-24 px-2 bg-primary-4",
        className
      )}
    >
      <button
        onClick={() => {
          decreaseItemQuantity(product.id);
        }}
        aria-label='Decrement quantity'
      >
        <Minus size={16} />
      </button>
      <p>
        <strong>{product.cartItemQuantity}</strong>
      </p>
      <button
        onClick={() => {
          increaseItemQuantity(product.id);
        }}
        aria-label='Increment quantity'
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default CheckoutMenuActions;
