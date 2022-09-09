import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Device() {
  const router = useRouter();
  const { slug } = router.query;

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
