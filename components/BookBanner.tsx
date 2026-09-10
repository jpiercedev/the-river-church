import Image from "next/image";

import { book } from "@/lib/book";

import styles from "./BookBanner.module.css";

export default function BookBanner() {
  return (
    <section className={styles.banner} aria-labelledby="book-heading">
      <div className={styles.inner}>
        <Image
          className={styles.cover}
          src={book.cover}
          alt={`${book.title} by Kevin R. Bishop — book cover`}
          sizes="(max-width: 520px) 95px, (max-width: 760px) 110px, 134px"
          placeholder="blur"
        />

        <div className={styles.copy}>
          <p className={`eyebrow ${styles.label}`}>From Our Pastor</p>
          <h2 id="book-heading">{book.title}</h2>
          <p className={styles.author}>By {book.author}</p>
          <p className={styles.tagline}>{book.tagline}</p>
        </div>

        <a
          className={`btn btn-blue ${styles.purchase}`}
          href={book.purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the Book
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14 3h7v7M21 3l-9 9M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="visually-hidden"> on Amazon (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
