
// * Components
import AnchorLink from "react-anchor-link-smooth-scroll"

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    value: SelectedPage
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const anchorLinkStyles = 'rounded-md cursor-pointer bg-primary-500 hover:bg-secondary-500 px-8 py-2 text-primary-100 text-center'


export default function ActionButton({ value, children, setSelectedPage }: Props) {
    return <AnchorLink
        className={anchorLinkStyles}
        title={`Go to ${value}`}
        onClick={() => setSelectedPage(value)}>
        {children}
    </AnchorLink>
}