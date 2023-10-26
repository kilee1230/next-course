import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";

// @ts-ignore
import AnimationData from "@/public/assets/Coding.json";
import testimage from "@/public/images/testimage.png";

import { authOptions } from "./api/auth/authOptions";
import LottiePlayer from "./components/LottiePlayer";
import ProductCard from "./components/ProductCard/ProductCard";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <GoogleAnalyticsScript />
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>

      <Link href="/users">Users</Link>
      <ProductCard />

      <LottiePlayer data={AnimationData} />

      <Image
        src="https://bit.ly/react-cover"
        alt="test-image"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
