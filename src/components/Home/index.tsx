
// * Types
import { SelectedPage } from '@/shared/types.ts'

type Props = {
    setSelectedPage: (value: SelectedPage)=> void
}

export default function Home({setSelectedPage}: Props) {
    return <h1>Hello Home</h1>
}