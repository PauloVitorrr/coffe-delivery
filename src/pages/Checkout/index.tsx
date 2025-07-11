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
import { Input } from "../../components/Input";
import * as S from "./styles";

import coffe from "../../../public/images/coffees/americano.png";
import z from "zod";

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
          <S.ContainerInputs>
            <Input
              placeholder="CEP"
              containerProps={{ style: { gridArea: "cep" } }}
            />
            <Input
              placeholder="Rua"
              containerProps={{ style: { gridArea: "street" } }}
            />
            <Input
              placeholder="Número"
              containerProps={{ style: { gridArea: "number" } }}
            />
            <Input
              placeholder="Complemento"
              containerProps={{ style: { gridArea: "fullAddress" } }}
            />
            <Input
              placeholder="Bairro"
              containerProps={{ style: { gridArea: "neighborhood" } }}
            />
            <Input
              placeholder="Cidade"
              containerProps={{ style: { gridArea: "city" } }}
            />
            <Input
              placeholder="UF"
              containerProps={{ style: { gridArea: "state" } }}
            />
          </S.ContainerInputs>
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

          <S.PaymentMethods>
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
          </S.PaymentMethods>
        </S.ContentInfosOrderPay>
      </S.ContainerInfosOrder>
      <S.ContainerCoffeOrderSelect>
        <S.TitlesOrder>Cafés selecionados</S.TitlesOrder>
        <S.ContainerCoffeSelect>
          <S.ContentCoffeSelect>
            <img src={coffe} alt="" width="64px" />
            <S.InfosCoffeSelect>
              <span>Expresso tradicional</span>
              <div>
                <S.ButtonAmountCoffe>
                  <button>
                    <Minus color="#8047F8" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus color="#8047F8" />
                  </button>
                </S.ButtonAmountCoffe>
                <S.ButtonRemoveCoffe>
                  <Trash color="#8047F8" />
                  <span>REMOVER</span>
                </S.ButtonRemoveCoffe>
              </div>
            </S.InfosCoffeSelect>
            <S.PriceCoffe>R$ 19,80</S.PriceCoffe>
          </S.ContentCoffeSelect>
          <S.ContentCoffeSelect>
            <img src={coffe} alt="" width="64px" />
            <S.InfosCoffeSelect>
              <span>Expresso tradicional</span>
              <div>
                <S.ButtonAmountCoffe>
                  <button>
                    <Minus color="#8047F8" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus color="#8047F8" />
                  </button>
                </S.ButtonAmountCoffe>
                <S.ButtonRemoveCoffe>
                  <Trash color="#8047F8" />
                  <span>REMOVER</span>
                </S.ButtonRemoveCoffe>
              </div>
            </S.InfosCoffeSelect>
            <S.PriceCoffe>R$ 19,80</S.PriceCoffe>
          </S.ContentCoffeSelect>
          <S.ButtonConfirmOrder>CONFIRMAR PEDIDO</S.ButtonConfirmOrder>
        </S.ContainerCoffeSelect>
      </S.ContainerCoffeOrderSelect>
    </S.Main>
  );
}
