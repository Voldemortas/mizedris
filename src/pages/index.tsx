import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.scss'
import {allCards} from '@/backend/database_commands/Card'

export default function Home() {
  return (
    <div>
      <div className={styles.cardContainer}>
        {allCards.map((card) => (
          <div className={styles.card}>
            <div
              key={card.name}
              className={styles[card.name.replaceAll(/\s/g, '')]}
              title={card.name}
            />
          </div>
        ))}
        <div className={styles.card}>
          <div className={styles.cardBack} title="back" />
        </div>
      </div>
    </div>
  )
}
