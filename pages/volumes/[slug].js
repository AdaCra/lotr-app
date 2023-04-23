import { volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { hobitton } from "../_app";

export default function DisplayVolume() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  const currentIndex = volumes.indexOf(currentVolume);
  const nextVolumeIndex =
    currentIndex === volumes.length - 1 ? 0 : currentIndex + 1;
  const previousVolumeIndex =
    currentIndex === 0 ? volumes.length - 1 : currentIndex - 1;
  return (
    <section
      id="volumeSection__container"
      style={{ backgroundColor: currentVolume.color }}
    >
      <figure>
        <Image
          src={currentVolume.cover}
          alt="Book cover"
          height={932 / 2}
          width={574 / 2}
          priority
        />
        <figcaption>
          The first edition cover of <br/>{currentVolume.title}
        </figcaption>
      </figure>
      <h2 className={hobitton.className}>{currentVolume.title}</h2>
      <p>
        {currentVolume.title} is a volume comprised of&nbsp;
        {currentVolume.books.length}
      </p>
      <h3>
        Books<span className="superscript">({currentVolume.books.length})</span>
        :
      </h3>
      <ul>
        {currentVolume?.books?.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <h3>Description</h3>
      <p>{currentVolume.description}</p>

      <br />
      <footer id="footer__buttons">
        <div id="footer__buttons__container">
          <button
            disabled={currentIndex === 0}
            onClick={() => {
              router.push(`/volumes/${volumes[previousVolumeIndex].slug}`);
            }}
          >
            &lt; Previous Volume
          </button>
          <button
            onClick={() => {
              router.push(`/volumes`);
            }}
          >
            Overview
          </button>
          <button
            disabled={currentIndex === volumes.length - 1}
            onClick={() => {
              router.push(`/volumes/${volumes[nextVolumeIndex].slug}`);
            }}
          >
            Next Volume &gt;
          </button>
        </div>
      </footer>
    </section>
  );
}
