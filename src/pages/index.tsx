import { Inter } from 'next/font/google'
import { useGetStyles} from "@/hooks/demo";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const {data} = useGetStyles()
    console.log(data)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      HELLO WORLD

    </main>
  )
}
