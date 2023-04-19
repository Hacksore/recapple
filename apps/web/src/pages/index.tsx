import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Typography variant="h3">Recapple</Typography>

      <Typography variant="h5">
        <Link href="/devices/watch">
        Apple Watch
        </Link>
      </Typography>

      <Typography variant="h5">
        <Link href="/devices/2022/watch/series-8">
        Series 8
        </Link>
      </Typography>

      <Typography variant="h5">
        <Link href="/devices/2022/watch/se">
       SE
        </Link>
      </Typography>
    </div>
  );
}
