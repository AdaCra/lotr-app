import { introduction, volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Overview() {
  const router = useRouter();
  return (
    <>
      <header>
        <h2>Lord of the Rings</h2>
        <p> {introduction} </p>
      </header>
      <main>
        <h3>All Volumes</h3>
        <ul>
          {volumes?.map((volume, index) => (
            <li
              key={volume.slug}
              style={{
                backgroundColor: volume.color,
                color: "#fff"
              }}
            >
              <Image
                src={volume.cover}
                alt={"Book Cover of " + volume.title}
                width={62}
                height={100}
              />
              Volume {index + 1}:&nbsp;
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            router.push(`/volumes/${getRandomElement(volumes).slug}`);
          }}
        >
          get random book
        </button>
      </main>
    </>
  );
}
