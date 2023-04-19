import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
// import { prisma } from "database";

export async function getServerSideProps() {
  // const products = await prisma.products.findMany();
  // console.log(products);

  return {
    props: {
      products: []
    }
  }
}

export default function Device({ products }: any) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(products);

  // not sure why we would not have a slug?
  if (!slug) {
    return;
  }

  // @ts-ignore
  const [year, device, model] = slug;

  return (
    <div>
      <Typography variant="h3">{model}</Typography>

      <Image
        alt={`Apple ${model}`}
        src={`/img/${year}/${device}/${model}.png`}
        width="2000"
        height="1000"
      />
    </div>
  );
}
