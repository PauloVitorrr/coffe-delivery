import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { Input } from "../../components/Form/Input";
import * as S from "./styles";

import z from "zod";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../../data.json";
import { Fragment } from "react/jsx-runtime";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Radio } from "../../components/Form/Radio";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "informe a cidade"),
  state: z.string().min(1, "informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagemento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

export default function Checkout() {
  const {
    cart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
    checkout,
  } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffe.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId);
  }

  const shippingPrice = 3.5;

  const selectedPaymentMethod = watch("paymentMethod");

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }
    checkout(data);
  };

  return (
    <S.Main>
      <S.ContainerInfosOrder>
        <S.TitlesOrder>Complete seu pedido</S.TitlesOrder>
        <S.ContentInfosOrderPay>
          <S.ContainerTextDeliveryAndPay>
            <MapPin size={20} color="#C47F17" />
            <S.ContentTextDeliveryAndPay>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </S.ContentTextDeliveryAndPay>
          </S.ContainerTextDeliveryAndPay>
          <S.formAdress id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <Input
              placeholder="CEP"
              containerProps={{ style: { gridArea: "cep" } }}
              type="number"
              error={errors.cep}
              {...register("cep", { valueAsNumber: true })}
            />
            <Input
              placeholder="Rua"
              containerProps={{ style: { gridArea: "street" } }}
              error={errors.street}
              {...register("street")}
            />
            <Input
              placeholder="Número"
              containerProps={{ style: { gridArea: "number" } }}
              error={errors.number}
              {...register("number")}
            />
            <Input
              placeholder="Complemento"
              containerProps={{ style: { gridArea: "fullAddress" } }}
              error={errors.fullAddress}
              {...register("fullAddress")}
            />
            <Input
              placeholder="Bairro"
              containerProps={{ style: { gridArea: "neighborhood" } }}
              error={errors.neighborhood}
              {...register("neighborhood")}
            />
            <Input
              placeholder="Cidade"
              containerProps={{ style: { gridArea: "city" } }}
              error={errors.city}
              {...register("city")}
            />
            <Input
              placeholder="UF"
              containerProps={{ style: { gridArea: "state" } }}
              error={errors.state}
              maxLength={2}
              {...register("state")}
            />
          </S.formAdress>
        </S.ContentInfosOrderPay>
        <S.ContentInfosOrderPay>
          <S.ContainerTextDeliveryAndPay>
            <CurrencyDollar size={20} color="#8047F8" />
            <S.ContentTextDeliveryAndPay>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. escolha a forma que deseja pagar
              </p>
            </S.ContentTextDeliveryAndPay>
          </S.ContainerTextDeliveryAndPay>

          <S.PaymentOptions>
            <div>
              <Radio
                isSelected={selectedPaymentMethod === "credit"}
                {...register("paymentMethod")}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Credito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "debit"}
                {...register("paymentMethod")}
                value="debit"
              >
                <Bank size={16} />
                <span>Débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === "cash"}
                {...register("paymentMethod")}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>
            {errors.paymentMethod ? (
              <S.PaymentErrorMessage>
                {errors.paymentMethod.message}
              </S.PaymentErrorMessage>
            ) : null}
          </S.PaymentOptions>
          {/* <S.PaymentMethods>
            <S.CardsPaymentMethods>
              <CreditCard size={20} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </S.CardsPaymentMethods>
            <S.CardsPaymentMethods>
              <Bank size={20} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </S.CardsPaymentMethods>
            <S.CardsPaymentMethods>
              <Money size={20} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </S.CardsPaymentMethods>
          </S.PaymentMethods> */}
        </S.ContentInfosOrderPay>
      </S.ContainerInfosOrder>
      <S.ContainerCoffeOrderSelect>
        <S.TitlesOrder>Cafés selecionados</S.TitlesOrder>
        <S.ContainerCoffeSelect>
          {coffeesInCart.map((coffe) => (
            <Fragment key={coffe.id}>
              <S.ContentCoffeSelect>
                <img src={coffe.image} alt="" width="64px" />
                <S.InfosCoffeSelect>
                  <span>{coffe.title}</span>
                  <div>
                    <S.ButtonAmountCoffe>
                      <button onClick={() => handleItemDecrement(coffe.id)}>
                        <Minus color="#8047F8" />
                      </button>
                      <span>{coffe.quantity}</span>
                      <button onClick={() => handleItemIncrement(coffe.id)}>
                        <Plus color="#8047F8" />
                      </button>
                    </S.ButtonAmountCoffe>
                    <S.ButtonRemoveCoffe
                      onClick={() => handleRemoveItem(coffe.id)}
                    >
                      <Trash color="#8047F8" />
                      <span>REMOVER</span>
                    </S.ButtonRemoveCoffe>
                  </div>
                </S.InfosCoffeSelect>
                <S.PriceCoffe>R${coffe.price?.toFixed(2)}</S.PriceCoffe>
              </S.ContentCoffeSelect>
            </Fragment>
          ))}
          <S.ContainerPaymentPrice>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </S.ContainerPaymentPrice>
          <S.ButtonConfirmOrder type="submit" form="order">
            CONFIRMAR PEDIDO
          </S.ButtonConfirmOrder>
        </S.ContainerCoffeSelect>
      </S.ContainerCoffeOrderSelect>
    </S.Main>
  );
}
